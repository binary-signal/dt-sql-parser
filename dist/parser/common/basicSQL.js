import { CodeCompletionCore } from 'antlr4-c3';
import { CharStreams, CommonTokenStream, ParserRuleContext, ParseTreeWalker, PredictionMode, Token, } from 'antlr4ng';
import { ErrorStrategy } from './errorStrategy';
import { findCaretTokenIndex } from './findCaretTokenIndex';
import { ctxToText, tokenToWord } from './textAndWord';
export const SQL_SPLIT_SYMBOL_TEXT = ';';
/**
 * Basic SQL class, every sql needs extends it.
 */
export class BasicSQL {
    constructor() {
        this._parseErrors = [];
        this._statementStartTokenTypes = null;
        /** members for cache end */
        this._errorListener = (error) => {
            this._parseErrors.push(error);
        };
        this.locale = 'en_US';
    }
    getCandidateTokenRanges(candidates, candidateStartTokenIndex, allTokens, caretTokenIndex) {
        var _a;
        // antlr4-c3 may return both entity and alias candidates; use the nearest candidate's start index as boundary
        const endTokenIndex = Array.from(candidates.rules.values()).reduce((nearestStartTokenIndex, candidateRule) => {
            if (candidateRule.startTokenIndex <= candidateStartTokenIndex) {
                return nearestStartTokenIndex;
            }
            return Math.min(nearestStartTokenIndex, candidateRule.startTokenIndex);
        }, caretTokenIndex + 1);
        const previousVisibleToken = allTokens
            .slice(candidateStartTokenIndex, endTokenIndex)
            .reverse()
            .find((token) => token.channel === Token.DEFAULT_CHANNEL);
        const visibleTokenIndexes = allTokens
            .slice(endTokenIndex, caretTokenIndex + 1)
            .reduce((indexes, token, offset) => {
            if (token.channel === Token.DEFAULT_CHANNEL) {
                indexes.push(endTokenIndex + offset);
            }
            return indexes;
        }, []);
        const firstVisibleToken = allTokens[visibleTokenIndexes[0]];
        let rangeEndTokenIndex = endTokenIndex;
        // candidate boundary may fall inside a multi-level qualified name; extend along the identifier and dot chain
        if ((previousVisibleToken === null || previousVisibleToken === void 0 ? void 0 : previousVisibleToken.text) === '.' || (firstVisibleToken === null || firstVisibleToken === void 0 ? void 0 : firstVisibleToken.text) === '.') {
            let visibleTokenOffset = 0;
            if ((previousVisibleToken === null || previousVisibleToken === void 0 ? void 0 : previousVisibleToken.text) === '.' && firstVisibleToken) {
                rangeEndTokenIndex = visibleTokenIndexes[visibleTokenOffset] + 1;
                visibleTokenOffset += 1;
            }
            while (((_a = allTokens[visibleTokenIndexes[visibleTokenOffset]]) === null || _a === void 0 ? void 0 : _a.text) === '.') {
                rangeEndTokenIndex = visibleTokenIndexes[visibleTokenOffset] + 1;
                visibleTokenOffset += 1;
                if (visibleTokenOffset < visibleTokenIndexes.length) {
                    rangeEndTokenIndex = visibleTokenIndexes[visibleTokenOffset] + 1;
                    visibleTokenOffset += 1;
                }
            }
        }
        return allTokens
            .slice(candidateStartTokenIndex, rangeEndTokenIndex)
            .filter((token) => token.channel === Token.DEFAULT_CHANNEL);
    }
    /**
     * Create an antlr4 lexer from input.
     * @param input string
     */
    createLexer(input, errorListener) {
        const charStreams = CharStreams.fromString(input);
        const lexer = this.createLexerFromCharStream(charStreams);
        if (errorListener) {
            lexer.removeErrorListeners();
            lexer.addErrorListener(this.createErrorListener(errorListener));
        }
        return lexer;
    }
    /**
     * Create an antlr4 parser from input.
     * @param input string
     */
    createParser(input, errorListener) {
        const lexer = this.createLexer(input, errorListener);
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill();
        const parser = this.createParserFromTokenStream(tokenStream);
        parser.interpreter.predictionMode = PredictionMode.SLL;
        if (errorListener) {
            parser.removeErrorListeners();
            parser.addErrorListener(this.createErrorListener(errorListener));
        }
        return parser;
    }
    /**
     * Parse input string and return parseTree.
     * @param input string
     * @param errorListener listen parse errors and lexer errors.
     * @returns parseTree
     */
    parse(input, errorListener) {
        const parser = this.createParser(input, errorListener);
        parser.buildParseTrees = true;
        parser.errorHandler = new ErrorStrategy();
        return parser.program();
    }
    /**
     * Create an antlr4 parser from input.
     * And the instances will be cache.
     * @param input string
     */
    createParserWithCache(input) {
        this._parseTree = null;
        this._charStreams = CharStreams.fromString(input);
        this._lexer = this.createLexerFromCharStream(this._charStreams);
        this._lexer.removeErrorListeners();
        this._lexer.addErrorListener(this.createErrorListener(this._errorListener));
        this._tokenStream = new CommonTokenStream(this._lexer);
        /**
         * All tokens are generated in advance.
         * This can cause performance degradation, but it seems necessary for now.
         * Because the tokens will be used multiple times.
         */
        this._tokenStream.fill();
        this._parser = this.createParserFromTokenStream(this._tokenStream);
        this._parser.interpreter.predictionMode = PredictionMode.SLL;
        this._parser.buildParseTrees = true;
        this._parser.errorHandler = new ErrorStrategy();
        return this._parser;
    }
    /**
     * If it is invoked multiple times in a row and the input parameters is the same,
     * this method returns the parsing result directly for the first time
     * unless the errorListener parameter is passed.
     * @param input source string
     * @param errorListener listen errors
     * @returns parseTree
     */
    parseWithCache(input, errorListener) {
        // Avoid parsing the same input repeatedly.
        if (this._parsedInput === input && !errorListener && this._parseTree) {
            return this._parseTree;
        }
        this._parseErrors = [];
        const parser = this.createParserWithCache(input);
        this._parsedInput = input;
        parser.removeErrorListeners();
        parser.addErrorListener(this.createErrorListener(this._errorListener));
        this._parseTree = parser.program();
        return this._parseTree;
    }
    /**
     * Reset the shared Lexer and Parser DFA caches for cold-start benchmarks.
     * This affects every parser instance of the same dialect.
     */
    resetDfaCache() {
        if (!this._parser || !this._lexer) {
            this.createParserWithCache('');
        }
        this._parser.interpreter.clearDFA();
        this._lexer.interpreter.clearDFA();
        this._parseTree = null;
        this._parsedInput = '';
        this._parseErrors = [];
        this._statementStartTokenTypes = null;
    }
    /**
     * Validate input string and return syntax errors if exists.
     * When input contains multiple statements separated by semicolons
     * and the initial parse doesn't capture all errors, each statement
     * is validated independently to collect all errors.
     * @param input source string
     * @returns syntax errors
     */
    validate(input) {
        this.parseWithCache(input);
        if (this._parseErrors.length > 0) {
            const statements = this.splitStatements(input);
            if (statements.length > 1) {
                const splitErrors = this.validateStatements(statements);
                if (splitErrors.length > this._parseErrors.length) {
                    this._parseErrors = splitErrors;
                }
            }
        }
        return this._parseErrors;
    }
    /**
     * Validate each statement fragment independently and collect all errors.
     */
    validateStatements(statements) {
        const allErrors = [];
        let lineOffset = 0;
        for (const statement of statements) {
            if (!statement.text.trim()) {
                const newlines = (statement.text.match(/\n/g) || []).length;
                lineOffset += newlines;
                continue;
            }
            const parser = this.createParser(statement.text);
            const errors = [];
            parser.removeErrorListeners();
            parser.addErrorListener(this.createErrorListener((error) => {
                errors.push({
                    startLine: error.startLine + lineOffset,
                    endLine: error.endLine + lineOffset,
                    startColumn: error.startColumn,
                    endColumn: error.endColumn,
                    message: error.message,
                });
            }));
            parser.errorHandler = new ErrorStrategy();
            parser.program();
            allErrors.push(...errors);
            const newlines = (statement.text.match(/\n/g) || []).length;
            lineOffset += newlines;
        }
        return allErrors;
    }
    /**
     * Split input into individual statement strings by semicolons.
     * Handles semicolons inside quoted strings correctly.
     */
    splitStatements(input) {
        const statements = [];
        let inSingleQuote = false;
        let inDoubleQuote = false;
        let lastSplit = 0;
        for (let i = 0; i < input.length; i++) {
            const ch = input[i];
            if (ch === "'" && !inDoubleQuote) {
                inSingleQuote = !inSingleQuote;
            }
            else if (ch === '"' && !inSingleQuote) {
                inDoubleQuote = !inDoubleQuote;
            }
            else if (ch === ';' && !inSingleQuote && !inDoubleQuote) {
                statements.push({ text: input.slice(lastSplit, i + 1), start: lastSplit });
                lastSplit = i + 1;
            }
        }
        if (lastSplit < input.length) {
            statements.push({ text: input.slice(lastSplit), start: lastSplit });
        }
        return statements;
    }
    /**
     * Get the input string that has been parsed.
     */
    getParsedInput() {
        return this._parsedInput;
    }
    /**
     * Get all Tokens of input string，'<EOF>' is not included.
     * @param input source string
     * @returns Token[]
     */
    getAllTokens(input) {
        this.parseWithCache(input);
        let allTokens = this._tokenStream.getTokens();
        if (allTokens[allTokens.length - 1].text === '<EOF>') {
            allTokens = allTokens.slice(0, -1);
        }
        return allTokens;
    }
    /**
     * @param listener Listener instance extends ParserListener
     * @param parseTree parser Tree
     */
    listen(listener, parseTree) {
        ParseTreeWalker.DEFAULT.walk(listener, parseTree);
    }
    /**
     * Split input into statements.
     * If exist syntax error it will return null.
     * @param input source string
     */
    splitSQLByStatement(input) {
        const errors = this.validate(input);
        if (errors.length || !this._parseTree) {
            return null;
        }
        const splitListener = this.splitListener;
        this.listen(splitListener, this._parseTree);
        const res = splitListener.statementsContext
            .map((context) => {
            return ctxToText(context, this._parsedInput);
        })
            .filter(Boolean);
        return res;
    }
    /**
     * Get the smaller range of input
     * @param input string
     * @param allTokens all tokens from input
     * @param tokenIndexOffset offset of the tokenIndex in the range of input
     * @param caretTokenIndex tokenIndex of caretPosition
     * @returns inputSlice: string, caretTokenIndex: number
     */
    splitInputBySymbolText(input, allTokens, tokenIndexOffset, caretTokenIndex) {
        const tokens = allTokens.slice(tokenIndexOffset);
        /**
         * Set startToken
         */
        let startToken = null;
        for (let tokenIndex = caretTokenIndex - tokenIndexOffset; tokenIndex >= 0; tokenIndex--) {
            const token = tokens[tokenIndex];
            if ((token === null || token === void 0 ? void 0 : token.text) === SQL_SPLIT_SYMBOL_TEXT) {
                startToken = tokens[tokenIndex + 1];
                break;
            }
        }
        if (startToken === null) {
            startToken = tokens[0];
        }
        /**
         * Set stopToken
         */
        let stopToken = null;
        for (let tokenIndex = caretTokenIndex - tokenIndexOffset; tokenIndex < tokens.length; tokenIndex++) {
            const token = tokens[tokenIndex];
            if ((token === null || token === void 0 ? void 0 : token.text) === SQL_SPLIT_SYMBOL_TEXT) {
                stopToken = token;
                break;
            }
        }
        if (stopToken === null) {
            stopToken = tokens[tokens.length - 1];
        }
        const indexOffset = tokens[0].start;
        let startIndex = startToken.start - indexOffset;
        let stopIndex = stopToken.stop + 1 - indexOffset;
        /**
         * Save offset of the tokenIndex in the range of input
         * compared to the tokenIndex in the whole input
         */
        const _tokenIndexOffset = startToken.tokenIndex;
        const _caretTokenIndex = caretTokenIndex - _tokenIndexOffset;
        /**
         * Get the smaller range of _input
         */
        const _input = input.slice(startIndex, stopIndex);
        return {
            inputSlice: _input,
            allTokens: allTokens.slice(_tokenIndexOffset),
            caretTokenIndex: _caretTokenIndex,
        };
    }
    /**
     * Get the minimum input string that can be parsed successfully by c3.
     * @param input source string
     * @param caretTokenIndex tokenIndex of caretPosition
     * @param originParseTree origin parseTree
     * @returns MinimumInputInfo
     */
    getMinimumInputInfo(input, caretTokenIndex, originParseTree) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!originParseTree || !(input === null || input === void 0 ? void 0 : input.length))
            return null;
        let inputSlice = input;
        /**
         * Split sql by statement.
         * Try to collect candidates in as small a range as possible.
         */
        const splitListener = this.splitListener;
        this.listen(splitListener, originParseTree);
        const statementCount = (_a = splitListener.statementsContext) === null || _a === void 0 ? void 0 : _a.length;
        const statementsContext = splitListener.statementsContext;
        let tokenIndexOffset = 0;
        // If there are multiple statements.
        if (statementCount > 1) {
            /**
             * Find a minimum valid range, reparse the fragment, and provide a new parse tree to C3.
             * The boundaries of this range must be statements with no syntax errors.
             * This can ensure the stable performance of the C3.
             */
            let startStatement = null;
            let stopStatement = null;
            for (let index = 0; index < statementCount; index++) {
                const ctx = statementsContext[index];
                const isCurrentCtxValid = !ctx.exception;
                if (!isCurrentCtxValid)
                    continue;
                /**
                 * Ensure that the statementContext before the left boundary
                 * and the last statementContext on the right boundary are qualified SQL statements.
                 */
                const isPrevCtxValid = index === 0 || !((_b = statementsContext[index - 1]) === null || _b === void 0 ? void 0 : _b.exception);
                const isNextCtxValid = index === statementCount - 1 || !((_c = statementsContext[index + 1]) === null || _c === void 0 ? void 0 : _c.exception);
                if (ctx.stop && ctx.stop.tokenIndex < caretTokenIndex && isPrevCtxValid) {
                    startStatement = ctx;
                }
                if (ctx.start &&
                    !stopStatement &&
                    ctx.start.tokenIndex > caretTokenIndex &&
                    isNextCtxValid) {
                    stopStatement = ctx;
                    break;
                }
            }
            // A boundary consisting of the index of the input.
            const startIndex = (_e = (_d = startStatement === null || startStatement === void 0 ? void 0 : startStatement.start) === null || _d === void 0 ? void 0 : _d.start) !== null && _e !== void 0 ? _e : 0;
            const stopIndex = (_g = (_f = stopStatement === null || stopStatement === void 0 ? void 0 : stopStatement.stop) === null || _f === void 0 ? void 0 : _f.stop) !== null && _g !== void 0 ? _g : inputSlice.length;
            /**
             * Save offset of the tokenIndex in the range of input
             * compared to the tokenIndex in the whole input
             */
            tokenIndexOffset = (_j = (_h = startStatement === null || startStatement === void 0 ? void 0 : startStatement.start) === null || _h === void 0 ? void 0 : _h.tokenIndex) !== null && _j !== void 0 ? _j : 0;
            inputSlice = inputSlice.slice(startIndex, stopIndex);
        }
        return {
            input: inputSlice,
            tokenIndexOffset,
            statementCount,
        };
    }
    /**
     * Get a minimum boundary parser near caretTokenIndex.
     * @param input source string.
     * @param caretTokenIndex start from which index to minimize the boundary.
     * @param originParseTree the parse tree need to be minimized, default value is the result of parsing `input`.
     * @returns minimum parser info
     */
    getMinimumParserInfo(input, caretTokenIndex, originParseTree) {
        if (!originParseTree || !(input === null || input === void 0 ? void 0 : input.length))
            return null;
        const inputInfo = this.getMinimumInputInfo(input, caretTokenIndex, originParseTree);
        if (!inputInfo)
            return null;
        const { input: inputSlice, tokenIndexOffset } = inputInfo;
        caretTokenIndex = caretTokenIndex - tokenIndexOffset;
        let sqlParserIns = this._parser;
        let parseTree = originParseTree;
        /**
         * Reparse the input fragment,
         * and c3 will collect candidates in the newly generated parseTree when input changed.
         */
        if (inputSlice !== input) {
            sqlParserIns = this.createParser(inputSlice);
            // Errors of the fragment are expected (it ends at the caret): keep them off the console
            sqlParserIns.removeErrorListeners();
            parseTree = sqlParserIns.program();
        }
        return {
            parser: sqlParserIns,
            parseTree,
            tokenIndexOffset,
            newTokenIndex: caretTokenIndex,
        };
    }
    /**
     * Get the minimum statement tree for collecting completion candidates
     * Each supported grammar exposes one top-level statement per direct program child
     * Keep the lookup shallow to avoid selecting nested statements or subqueries
     */
    getSuggestionParseTree(parseTree, caretTokenIndex) {
        var _a, _b, _c;
        const children = parseTree.children;
        if (!(children === null || children === void 0 ? void 0 : children.length))
            return parseTree;
        for (let index = children.length - 1; index >= 0; index--) {
            const child = children[index];
            if (!(child instanceof ParserRuleContext))
                continue;
            const startTokenIndex = (_a = child.start) === null || _a === void 0 ? void 0 : _a.tokenIndex;
            const stopTokenIndex = (_b = child.stop) === null || _b === void 0 ? void 0 : _b.tokenIndex;
            if (startTokenIndex === undefined ||
                stopTokenIndex === undefined ||
                startTokenIndex > caretTokenIndex)
                continue;
            // Use the current statement tree when the caret is inside it
            if (stopTokenIndex >= caretTokenIndex)
                return child;
            // Keep using the current statement until it ends with a semicolon
            return ((_c = child.stop) === null || _c === void 0 ? void 0 : _c.text) === SQL_SPLIT_SYMBOL_TEXT ? parseTree : child;
        }
        return parseTree;
    }
    /**
     * Collect candidates for the current statement and remove new-statement-only keywords
     */
    collectSuggestionCandidates(parser, parseTree, caretTokenIndex) {
        const core = new CodeCompletionCore(parser);
        core.preferredRules = this.preferredRules;
        const candidates = core.collectCandidates(caretTokenIndex, parseTree);
        const suggestionParseTree = this.getSuggestionParseTree(parseTree, caretTokenIndex);
        if (suggestionParseTree === parseTree)
            return candidates;
        // Keep the program candidates for outer rule paths and use statement candidates for isolation
        const statementCore = new CodeCompletionCore(parser);
        statementCore.preferredRules = this.preferredRules;
        const statementCandidates = statementCore.collectCandidates(caretTokenIndex, suggestionParseTree);
        if (this._statementStartTokenTypes === null) {
            const statementStartCore = new CodeCompletionCore(parser);
            statementStartCore.preferredRules = this.preferredRules;
            const statementStartCandidates = statementStartCore.collectCandidates(0, parseTree);
            this._statementStartTokenTypes = new Set(statementStartCandidates.tokens.keys());
        }
        const tokens = new Map(candidates.tokens);
        for (const tokenType of this._statementStartTokenTypes) {
            if (!statementCandidates.tokens.has(tokenType)) {
                tokens.delete(tokenType);
            }
            else if (tokens.has(tokenType)) {
                // Use the current statement follow-list to preserve valid combined keywords
                tokens.set(tokenType, statementCandidates.tokens.get(tokenType));
            }
        }
        return {
            rules: candidates.rules,
            tokens,
        };
    }
    /**
     * Get suggestions of syntax and token at caretPosition
     * @param input source string
     * @param caretPosition caret position, such as cursor position
     * @param options suggestion options
     * @returns suggestion
     */
    getSuggestionAtCaretPosition(input, caretPosition, options) {
        this.parseWithCache(input);
        if (!this._parseTree)
            return null;
        let allTokens = this.getAllTokens(input);
        let caretTokenIndex = findCaretTokenIndex(caretPosition, allTokens);
        if (!caretTokenIndex && caretTokenIndex !== 0)
            return null;
        const inputInfo = this.getMinimumInputInfo(input, caretTokenIndex, this._parseTree);
        if (!inputInfo)
            return null;
        const { input: _input, tokenIndexOffset, statementCount } = inputInfo;
        let inputSlice = _input;
        /**
         * Split the inputSlice by separator to get the smaller range of inputSlice.
         */
        if (inputSlice.includes(SQL_SPLIT_SYMBOL_TEXT)) {
            const { inputSlice: _inputSlice, allTokens: _allTokens, caretTokenIndex: _caretTokenIndex, } = this.splitInputBySymbolText(inputSlice, allTokens, tokenIndexOffset, caretTokenIndex);
            allTokens = _allTokens;
            caretTokenIndex = _caretTokenIndex;
            inputSlice = _inputSlice;
        }
        else {
            if (statementCount > 1) {
                caretTokenIndex = caretTokenIndex - tokenIndexOffset;
                allTokens = allTokens.slice(tokenIndexOffset);
            }
        }
        let sqlParserIns = this._parser;
        let parseTree = this._parseTree;
        /**
         * Reparse the input fragment,
         * and c3 will collect candidates in the newly generated parseTree when input changed.
         */
        if (inputSlice !== input) {
            sqlParserIns = this.createParser(inputSlice);
            // Errors of the fragment are expected (it ends at the caret): keep them off the console
            sqlParserIns.removeErrorListeners();
            parseTree = sqlParserIns.program();
        }
        const candidates = this.collectSuggestionCandidates(sqlParserIns, parseTree, caretTokenIndex);
        const originalSuggestions = this.processCandidates(candidates, allTokens, caretTokenIndex);
        const syntaxSuggestions = originalSuggestions.syntax.map((syntaxCtx) => {
            const wordRanges = syntaxCtx.wordRanges.map((token) => {
                return tokenToWord(token, this._parsedInput);
            });
            return {
                syntaxContextType: syntaxCtx.syntaxContextType,
                wordRanges,
            };
        });
        const keywordFilter = options === null || options === void 0 ? void 0 : options.keywordFilter;
        const keywords = keywordFilter
            ? originalSuggestions.keywords.filter((keyword) => keywordFilter(keyword))
            : originalSuggestions.keywords;
        return {
            syntax: syntaxSuggestions,
            keywords,
        };
    }
    getAllEntities(input, caretPosition) {
        /**
         * Create a new parser to generate brand new parse tree.
         * And the new parse tree should not effect cached parse tree which is used by validate and getSuggestionAtCaretPosition method.
         */
        const parser = this.createParser(input);
        const allTokens = parser.tokenStream.getTokens();
        const caretTokenIndex = caretPosition
            ? findCaretTokenIndex(caretPosition, allTokens)
            : void 0;
        const collectListener = this.createEntityCollector(input, allTokens, caretTokenIndex);
        parser.entityCollecting = true;
        if (caretPosition && caretTokenIndex !== undefined) {
            parser.caretTokenIndex = caretTokenIndex;
        }
        const parseTree = parser.program();
        this.listen(collectListener, parseTree);
        parser.caretTokenIndex = -1;
        parser.entityCollecting = false;
        return collectListener.getEntities();
    }
    /**
     * Get semantic context infos
     * @param input source string
     * @param caretPosition caret position, such as cursor position
     * @param options semantic context options
     * @returns analyzed semantic context
     */
    getSemanticContextAtCaretPosition(input, caretPosition, options) {
        const allTokens = this.getAllTokens(input);
        const parseTree = this.parseWithCache(input);
        const statementContextListener = this.createSemanticContextCollector(input, caretPosition, allTokens, options);
        this.listen(statementContextListener, parseTree);
        return statementContextListener.semanticContext;
    }
}
