import { AtomSubQueryTableSourceContext, ColumnNameCreateContext, CreateFunctionContext, CreateNamespaceContext, CreateTableContext, CreateTableLikeContext, CreateTempViewUsingContext, CreateViewContext, FunctionNameCreateContext, FunctionTableSourceContext, InlineTableSourceContext, InsertFromQueryContext, MultipleInsertContext, NamedQueryContext, NamespaceNameContext, NamespaceNameCreateContext, QueryStatementContext, ReplaceTableContext, SelectExpressionColumnNameContext, SelectListContext, SelectLiteralColumnNameContext, SingleStatementContext, TableAllColumnsContext, TableNameContext, TableNameCreateContext, ViewNameContext, ViewNameCreateContext } from '../../lib/spark/SparkSqlParser';
import type { SparkSqlParserListener } from '../../lib/spark/SparkSqlParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class SparkEntityCollector extends EntityCollector implements SparkSqlParserListener {
    /** ====== Entity Begin */
    exitNamespaceName(ctx: NamespaceNameContext): void;
    exitNamespaceNameCreate(ctx: NamespaceNameCreateContext): void;
    /** Table Entity Rules */
    exitTableName(ctx: TableNameContext): void;
    /** Inline Table Entity Rules */
    exitInlineTableSource(ctx: InlineTableSourceContext): void;
    /** Function Table Entity Rules */
    exitFunctionTableSource(ctx: FunctionTableSourceContext): void;
    /** SubQuery Table Entity Rules */
    exitAtomSubQueryTableSource(ctx: AtomSubQueryTableSourceContext): void;
    exitTableNameCreate(ctx: TableNameCreateContext): void;
    exitNamedQuery(ctx: NamedQueryContext): void;
    exitViewName(ctx: ViewNameContext): void;
    exitSelectList(ctx: SelectListContext): void;
    exitViewNameCreate(ctx: ViewNameCreateContext): void;
    exitFunctionNameCreate(ctx: FunctionNameCreateContext): void;
    /** Column Entity Rules */
    exitColumnNameCreate(ctx: ColumnNameCreateContext): void;
    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext): void;
    exitSelectExpressionColumnName(ctx: SelectExpressionColumnNameContext): void;
    exitTableAllColumns(ctx: TableAllColumnsContext): void;
    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext): void;
    exitSingleStatement(ctx: SingleStatementContext): void;
    enterCreateTable(ctx: CreateTableContext): void;
    exitCreateTable(ctx: CreateTableContext): void;
    enterCreateTableLike(ctx: CreateTableLikeContext): void;
    exitCreateTableLike(ctx: CreateTableLikeContext): void;
    enterReplaceTable(ctx: ReplaceTableContext): void;
    exitReplaceTable(ctx: ReplaceTableContext): void;
    enterCreateView(ctx: CreateViewContext): void;
    exitCreateView(ctx: CreateViewContext): void;
    enterCreateTempViewUsing(ctx: CreateTempViewUsingContext): void;
    exitCreateTempViewUsing(ctx: CreateTempViewUsingContext): void;
    enterQueryStatement(ctx: QueryStatementContext): void;
    exitQueryStatement(ctx: QueryStatementContext): void;
    enterInsertFromQuery(ctx: InsertFromQueryContext): void;
    exitInsertFromQuery(ctx: InsertFromQueryContext): void;
    enterMultipleInsert(ctx: MultipleInsertContext): void;
    exitMultipleInsert(ctx: MultipleInsertContext): void;
    enterCreateNamespace(ctx: CreateNamespaceContext): void;
    exitCreateNamespace(ctx: CreateNamespaceContext): void;
    enterCreateFunction(ctx: CreateFunctionContext): void;
    exitCreateFunction(ctx: CreateFunctionContext): void;
}
