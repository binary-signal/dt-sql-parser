import { CodeCompletionCore } from 'antlr4-c3';
import { GenericSqlParser } from '../../lib/generic/GenericSqlParser';
import { ParseErrorListener } from '../common/parseErrorListener';
export class GenericErrorListener extends ParseErrorListener {
    constructor() {
        super(...arguments);
        this.objectNames = new Map([
            [GenericSqlParser.RULE_tableName, 'table'],
            [GenericSqlParser.RULE_tableNameCreate, 'table'],
            [GenericSqlParser.RULE_columnRef, 'column'],
        ]);
    }
    getExpectedText(parser, token) {
        var _a;
        let expectedText = '';
        const input = this.parserContext.getParsedInput();
        let currentContext = (_a = parser.context) !== null && _a !== void 0 ? _a : undefined;
        while (currentContext === null || currentContext === void 0 ? void 0 : currentContext.parent) {
            currentContext = currentContext.parent;
        }
        const parserInfo = this.parserContext.getMinimumParserInfo(input, token.tokenIndex, currentContext);
        if (!parserInfo)
            return '';
        const { parser: c3Parser, newTokenIndex, parseTree: c3Context } = parserInfo;
        const core = new CodeCompletionCore(c3Parser);
        core.preferredRules = this.preferredRules;
        const candidates = core.collectCandidates(newTokenIndex, c3Context);
        if (candidates.rules.size) {
            const result = [];
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case GenericSqlParser.RULE_tableName:
                    case GenericSqlParser.RULE_columnRef: {
                        if (name && !result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    case GenericSqlParser.RULE_tableNameCreate: {
                        if (name && !result.includes(`{new}${name}`)) {
                            result.push(`{new}${name}`);
                        }
                        break;
                    }
                }
            }
            expectedText = result.join('{or}');
        }
        if (candidates.tokens.size) {
            expectedText += expectedText ? '{orKeyword}' : '{keyword}';
        }
        return expectedText;
    }
}
