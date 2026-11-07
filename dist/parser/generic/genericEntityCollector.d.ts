import type { GenericSqlListener } from '../../lib/generic/GenericSqlListener';
import { AlterTableContext, ColumnRefContext, ColumnRefCreateContext, CreateTableContext, DeleteContext, DropTableContext, InsertContext, NamedQueryContext, QuerySpecificationContext, QueryStatementContext, SelectAllElementContext, SelectEmptyElementContext, SelectExpressionElementContext, SelectStarElementContext, SingleStatementContext, TableNameContext, TableNameCreateContext, UpdateContext } from '../../lib/generic/GenericSqlParser';
import { CommonEntityContext, EntityCollector } from '../common/entityCollector';
export declare class GenericEntityCollector extends EntityCollector implements GenericSqlListener {
    /** Select-list source text for each query result. The result itself keeps the full statement. */
    private readonly selectListText;
    enterProgram(): void;
    /** ====== Entity Begin */
    exitTableName(ctx: TableNameContext): void;
    exitNamedQuery(ctx: NamedQueryContext): void;
    exitTableNameCreate(ctx: TableNameCreateContext): void;
    exitColumnRef(ctx: ColumnRefContext): void;
    exitColumnRefCreate(ctx: ColumnRefCreateContext): void;
    exitQuerySpecification(ctx: QuerySpecificationContext): void;
    protected adaptOutwardQueryResult(entity: CommonEntityContext): CommonEntityContext;
    exitSelectExpressionElement(ctx: SelectExpressionElementContext): void;
    exitSelectStarElement(ctx: SelectStarElementContext): void;
    exitSelectAllElement(ctx: SelectAllElementContext): void;
    exitSelectEmptyElement(ctx: SelectEmptyElementContext): void;
    private isSimpleColumnReference;
    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext): void;
    exitSingleStatement(ctx: SingleStatementContext): void;
    enterCreateTable(ctx: CreateTableContext): void;
    exitCreateTable(ctx: CreateTableContext): void;
    enterQueryStatement(ctx: QueryStatementContext): void;
    exitQueryStatement(ctx: QueryStatementContext): void;
    enterInsert(ctx: InsertContext): void;
    exitInsert(ctx: InsertContext): void;
    enterUpdate(ctx: UpdateContext): void;
    exitUpdate(ctx: UpdateContext): void;
    enterDelete(ctx: DeleteContext): void;
    exitDelete(ctx: DeleteContext): void;
    enterAlterTable(ctx: AlterTableContext): void;
    exitAlterTable(ctx: AlterTableContext): void;
    enterDropTable(ctx: DropTableContext): void;
    exitDropTable(ctx: DropTableContext): void;
}
