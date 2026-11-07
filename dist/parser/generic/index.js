import { processTokenCandidates } from '../common/tokenUtils';
import { GenericSqlLexer } from '../../lib/generic/GenericSqlLexer';
import { GenericSqlParser } from '../../lib/generic/GenericSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType, } from '../common/types';
import { GenericEntityCollector } from './genericEntityCollector';
import { GenericErrorListener } from './genericErrorListener';
import { GenericSplitListener } from './genericSplitListener';
import { GenericSemanticContextCollector } from './genericSemanticContextCollector';
export { GenericEntityCollector, GenericSplitListener };
export class GenericSQL extends BasicSQL {
    constructor(options) {
        super();
        /**
         * The rules that keywords you don't want to be suggested.
         */
        this.excludeKeywordRules = new Set([GenericSqlParser.RULE_nonReserved]);
        this.preferredRules = new Set([
            GenericSqlParser.RULE_tableName,
            GenericSqlParser.RULE_tableNameCreate,
            GenericSqlParser.RULE_columnRef,
            GenericSqlParser.RULE_columnRefCreate,
            GenericSqlParser.RULE_columnName,
            GenericSqlParser.RULE_functionName,
            ...this.excludeKeywordRules,
        ]);
        this._diagnostics = (options === null || options === void 0 ? void 0 : options.diagnostics) !== false;
    }
    createLexerFromCharStream(charStreams) {
        return new GenericSqlLexer(charStreams);
    }
    validate(input) {
        if (!this._diagnostics) {
            return [];
        }
        return super.validate(input);
    }
    createParserFromTokenStream(tokenStream) {
        return new GenericSqlParser(tokenStream);
    }
    get splitListener() {
        return new GenericSplitListener();
    }
    createErrorListener(_errorListener) {
        const parserContext = this;
        return new GenericErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    createEntityCollector(input, allTokens, caretTokenIndex) {
        return new GenericEntityCollector(input, allTokens, caretTokenIndex);
    }
    createSemanticContextCollector(input, caretPosition, allTokens, options) {
        return new GenericSemanticContextCollector(input, caretPosition, allTokens, options);
    }
    processCandidates(candidates, allTokens, caretTokenIndex) {
        const originalSyntaxSuggestions = [];
        const keywords = [];
        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const tokenRanges = this.getCandidateTokenRanges(candidates, candidateRule.startTokenIndex, allTokens, caretTokenIndex);
            let syntaxContextType = void 0;
            switch (ruleType) {
                case GenericSqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case GenericSqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case GenericSqlParser.RULE_columnRef: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case GenericSqlParser.RULE_columnRefCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case GenericSqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case GenericSqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                default:
                    break;
            }
            if (syntaxContextType &&
                !originalSyntaxSuggestions.some((syn) => {
                    var _a, _b;
                    return syn.syntaxContextType === syntaxContextType &&
                        ((_a = syn.wordRanges.map((wordRange) => wordRange.text)) === null || _a === void 0 ? void 0 : _a.join(',')) ===
                            ((_b = tokenRanges.map((tokenRange) => tokenRange.text)) === null || _b === void 0 ? void 0 : _b.join(','));
                })) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }
        const processedKeywords = processTokenCandidates(this._parser, candidates.tokens);
        keywords.push(...processedKeywords);
        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
