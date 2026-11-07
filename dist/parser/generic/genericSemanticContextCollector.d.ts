import { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import { StatementsContext } from '../../lib/generic/GenericSqlParser';
import SemanticContextCollector from '../common/semanticContextCollector';
declare class GenericSemanticContextCollector extends SemanticContextCollector implements GenericSqlListener {
    getWhiteSpaceRuleType(): number;
    getStatementRuleType(): number;
    enterStatements(ctx: StatementsContext): void;
}
export { GenericSemanticContextCollector };
