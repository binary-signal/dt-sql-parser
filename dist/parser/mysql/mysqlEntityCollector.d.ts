import { ColumnCreateTableContext, ColumnNameCreateContext, CopyCreateTableContext, CreateDatabaseContext, CreateFunctionContext, CreateFunctionLoadableContext, CreateViewContext, DatabaseNameContext, DatabaseNameCreateContext, FunctionNameCreateContext, InsertStatementContext, QueryCreateTableContext, SelectElementsContext, SelectExpressionElementContext, SelectLiteralColumnNameContext, SelectStatementContext, SingleStatementContext, TableNameContext, TableNameCreateContext, ViewNameContext, ViewNameCreateContext, TableAllColumnsContext, AtomSubQueryTableSourceContext, CommonTableExpressionsContext, PureAllColumnsContext, SelectElement_dot_emptyContext, ColumnNamePath_dot_emptyContext } from '../../lib/mysql/MySqlParser';
import type { MySqlParserListener } from '../../lib/mysql/MySqlParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class MySqlEntityCollector extends EntityCollector implements MySqlParserListener {
    /** ====== Entity Begin */
    exitDatabaseName(ctx: DatabaseNameContext): void;
    exitDatabaseNameCreate(ctx: DatabaseNameCreateContext): void;
    /** Table Entity Rules */
    exitTableName(ctx: TableNameContext): void;
    exitCommonTableExpressions(ctx: CommonTableExpressionsContext): void;
    /** SubQuery Table Entity Rules */
    exitAtomSubQueryTableSource(ctx: AtomSubQueryTableSourceContext): void;
    exitTableNameCreate(ctx: TableNameCreateContext): void;
    exitViewName(ctx: ViewNameContext): void;
    exitViewNameCreate(ctx: ViewNameCreateContext): void;
    exitFunctionNameCreate(ctx: FunctionNameCreateContext): void;
    exitSelectElements(ctx: SelectElementsContext): void;
    exitColumnNameCreate(ctx: ColumnNameCreateContext): void;
    exitTableAllColumns(ctx: TableAllColumnsContext): void;
    exitPureAllColumns(ctx: PureAllColumnsContext): void;
    exitSelectLiteralColumnName(ctx: SelectLiteralColumnNameContext): void;
    exitSelectElement_dot_empty(ctx: SelectElement_dot_emptyContext): void;
    exitColumnNamePath_dot_empty(ctx: ColumnNamePath_dot_emptyContext): void;
    exitSelectExpressionElement(ctx: SelectExpressionElementContext): void;
    /** ===== Statement begin */
    enterSingleStatement(ctx: SingleStatementContext): void;
    exitSingleStatement(ctx: SingleStatementContext): void;
    enterQueryCreateTable(ctx: QueryCreateTableContext): void;
    exitQueryCreateTable(ctx: QueryCreateTableContext): void;
    enterColumnCreateTable(ctx: ColumnCreateTableContext): void;
    exitColumnCreateTable(ctx: ColumnCreateTableContext): void;
    enterCopyCreateTable(ctx: CopyCreateTableContext): void;
    exitCopyCreateTable(ctx: CopyCreateTableContext): void;
    enterCreateView(ctx: CreateViewContext): void;
    exitCreateView(ctx: CreateViewContext): void;
    enterSimpleSelect(ctx: SelectStatementContext): void;
    exitSimpleSelect(ctx: SelectStatementContext): void;
    enterUnionAndLateralSelect(ctx: SelectStatementContext): void;
    exitUnionAndLateralSelect(ctx: SelectStatementContext): void;
    enterSelectExpression(ctx: SelectStatementContext): void;
    exitSelectExpression(ctx: SelectStatementContext): void;
    enterInsertStatement(ctx: InsertStatementContext): void;
    exitInsertStatement(ctx: InsertStatementContext): void;
    enterCreateDatabase(ctx: CreateDatabaseContext): void;
    exitCreateDatabase(ctx: CreateDatabaseContext): void;
    enterCreateFunction(ctx: CreateFunctionContext): void;
    exitCreateFunction(ctx: CreateFunctionContext): void;
    enterCreateFunctionLoadable(ctx: CreateFunctionLoadableContext): void;
    exitCreateFunctionLoadable(ctx: CreateFunctionLoadableContext): void;
}
