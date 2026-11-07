import { GenericSqlParser } from '../../lib/generic/GenericSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';
class GenericSemanticContextCollector extends SemanticContextCollector {
    getWhiteSpaceRuleType() {
        return GenericSqlParser.WHITE_SPACE;
    }
    getStatementRuleType() {
        return GenericSqlParser.RULE_statements;
    }
    enterStatements(ctx) {
        this.visitStatement(ctx);
    }
}
export { GenericSemanticContextCollector };
