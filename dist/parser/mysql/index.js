import { processTokenCandidates } from '../common/tokenUtils';
import { MySqlLexer } from '../../lib/mysql/MySqlLexer';
import { MySqlParser } from '../../lib/mysql/MySqlParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType, } from '../common/types';
import { MySqlEntityCollector } from './mysqlEntityCollector';
import { MysqlErrorListener } from './mysqlErrorListener';
import { MysqlSplitListener } from './mysqlSplitListener';
import { MySqlSemanticContextCollector } from '../mysql/mysqlSemanticContextCollector';
export { MySqlEntityCollector, MysqlSplitListener };
const ALLOW_EMPTY_COLUMN_PARENT_RULES = new Set([
    MySqlParser.RULE_joinSpec,
    MySqlParser.RULE_fromClause,
    MySqlParser.RULE_orderByExpression,
    MySqlParser.RULE_groupByItem,
    MySqlParser.RULE_havingClause,
]);
export class MySQL extends BasicSQL {
    constructor() {
        super(...arguments);
        /**
         * The rules that keywords you don't want to be suggested.
         */
        this.excludeKeywordRules = new Set([MySqlParser.RULE_keywordsCanBeId]);
        this.preferredRules = new Set([
            MySqlParser.RULE_databaseName,
            MySqlParser.RULE_databaseNameCreate,
            MySqlParser.RULE_tableName,
            MySqlParser.RULE_tableNameCreate,
            MySqlParser.RULE_viewName,
            MySqlParser.RULE_viewNameCreate,
            MySqlParser.RULE_functionName,
            MySqlParser.RULE_functionNameCreate,
            MySqlParser.RULE_columnName,
            MySqlParser.RULE_columnNamePath,
            MySqlParser.RULE_columnNamePathAllowEmpty,
            MySqlParser.RULE_columnNameCreate,
            ...this.excludeKeywordRules,
        ]);
    }
    createLexerFromCharStream(charStreams) {
        return new MySqlLexer(charStreams);
    }
    createParserFromTokenStream(tokenStream) {
        return new MySqlParser(tokenStream);
    }
    get splitListener() {
        return new MysqlSplitListener();
    }
    createErrorListener(_errorListener) {
        const parserContext = this;
        return new MysqlErrorListener(_errorListener, parserContext, this.preferredRules);
    }
    createEntityCollector(input, allTokens, caretTokenIndex) {
        return new MySqlEntityCollector(input, allTokens, caretTokenIndex);
    }
    createSemanticContextCollector(input, caretPosition, allTokens, options) {
        return new MySqlSemanticContextCollector(input, caretPosition, allTokens, options);
    }
    processCandidates(candidates, allTokens, caretTokenIndex) {
        const originalSyntaxSuggestions = [];
        const keywords = [];
        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const tokenRanges = this.getCandidateTokenRanges(candidates, candidateRule.startTokenIndex, allTokens, caretTokenIndex);
            let syntaxContextType = void 0;
            switch (ruleType) {
                case MySqlParser.RULE_databaseName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case MySqlParser.RULE_databaseNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case MySqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case MySqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case MySqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case MySqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case MySqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MySqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case MySqlParser.RULE_columnName:
                case MySqlParser.RULE_columnNamePath: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case MySqlParser.RULE_columnNamePathAllowEmpty: {
                    if (candidateRule.ruleList.some((rule) => ALLOW_EMPTY_COLUMN_PARENT_RULES.has(rule))) {
                        syntaxContextType = EntityContextType.COLUMN;
                    }
                    break;
                }
                case MySqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
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
