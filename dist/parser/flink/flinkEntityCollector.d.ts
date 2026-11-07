import { AtomExpressionTableContext, AtomFunctionTableContext, CatalogPathContext, CatalogPathCreateContext, ColumnNameCreateContext, CreateCatalogContext, CreateDatabaseContext, CreateFunctionContext, CreateTableContext, CreateViewContext, DatabasePathContext, DatabasePathCreateContext, FunctionNameCreateContext, InsertStatementContext, QueryStatementContext, SelectExpressionColumnNameContext, SelectListContext, SelectLiteralColumnNameContext, SelectWindowItemColumnNameContext, SqlStatementContext, TableAllColumnsContext, TablePathContext, TablePathCreateContext, ViewPathContext, ViewPathCreateContext, WithItemContext } from '../../lib/flink/FlinkSqlParser';
import { FlinkSqlParserListener } from '../../lib/flink/FlinkSqlParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class FlinkEntityCollector extends EntityCollector implements FlinkSqlParserListener {
    /** ====== Entity Begin */
    exitCatalogPathCreate(ctx: CatalogPathCreateContext): void;
    exitCatalogPath(ctx: CatalogPathContext): void;
    exitDatabasePathCreate(ctx: DatabasePathCreateContext): void;
    exitDatabasePath(ctx: DatabasePathContext): void;
    exitTablePath(ctx: TablePathContext): void;
    exitAtomFunctionTable(ctx: AtomFunctionTableContext): void;
    exitAtomExpressionTable(ctx: AtomExpressionTableContext): void;
    exitTablePathCreate(ctx: TablePathCreateContext): void;
    exitWithItem(ctx: WithItemContext): void;
    exitViewPath(ctx: ViewPathContext): void;
    exitViewPathCreate(ctx: ViewPathCreateContext): void;
    exitFunctionNameCreate(ctx: FunctionNameCreateContext): void;
    exitSelectList(ctx: SelectListContext): void;
    /** Column entity rules */
    exitColumnNameCreate(ctx: ColumnNameCreateContext): void;
    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext): void;
    exitSelectExpressionColumnName(ctx: SelectExpressionColumnNameContext): void;
    exitSelectWindowItemColumnName(ctx: SelectWindowItemColumnNameContext): void;
    exitTableAllColumns(ctx: TableAllColumnsContext): void;
    /** ===== Statement begin */
    enterSqlStatement(ctx: SqlStatementContext): void;
    exitSqlStatement(ctx: SqlStatementContext): void;
    enterCreateCatalog(ctx: CreateCatalogContext): void;
    exitCreateCatalog(ctx: CreateCatalogContext): void;
    enterCreateDatabase(ctx: CreateDatabaseContext): void;
    exitCreateDatabase(ctx: CreateDatabaseContext): void;
    enterCreateTable(ctx: CreateTableContext): void;
    exitCreateTable(ctx: CreateTableContext): void;
    enterCreateView(ctx: CreateViewContext): void;
    exitCreateView(ctx: CreateViewContext): void;
    enterQueryStatement(ctx: QueryStatementContext): void;
    exitQueryStatement(ctx: QueryStatementContext): void;
    enterCreateFunction(ctx: CreateFunctionContext): void;
    exitCreateFunction(ctx: CreateFunctionContext): void;
    enterInsertStatement(ctx: InsertStatementContext): void;
    exitInsertStatement(ctx: InsertStatementContext): void;
}
