import { Column_defContext, ExpressionTableContext, PostgreSqlParser, TableRefContext, Target_labelContext, } from '../../lib/postgresql/PostgreSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, isChildContextOf, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class PostgreSqlEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    exitDatabaseName(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitDatabaseNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }
    exitTableName(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableRefContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    exitXmlTable(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [ExpressionTableContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitFuncTable(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [ExpressionTableContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitSelectWithParens(ctx) {
        if (!isChildContextOf(ctx, PostgreSqlParser.RULE_expressionTable))
            return;
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [ExpressionTableContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }
    exitCommonTableExpr(ctx) {
        var _a, _b, _c, _d, _e;
        const columns = (_c = (_b = (_a = ctx.optColumnList()) === null || _a === void 0 ? void 0 : _a.columnList()) === null || _b === void 0 ? void 0 : _b.columnName()) !== null && _c !== void 0 ? _c : [];
        this.collectCte(ctx, ctx.colId(), ctx.preParableStmt(), (_e = (_d = ctx.stop) === null || _d === void 0 ? void 0 : _d.tokenIndex) !== null && _e !== void 0 ? _e : -1, columns);
    }
    exitViewName(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW, [
            {
                attrName: AttrName.alias,
                endContextList: [TableRefContext.name],
            },
        ]);
    }
    exitViewNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }
    exitFunctionNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }
    exitColumnNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [Column_defContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [Column_defContext.name],
            },
        ]);
    }
    exitTargetList(ctx) {
        // Only create QUERY_RESULT for targetList that is direct child of simpleSelect
        if (!isChildContextOf(ctx, PostgreSqlParser.RULE_simpleSelect))
            return;
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    exitTableAllColumns(ctx) {
        if (!isChildContextOf(ctx, PostgreSqlParser.RULE_targetList))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitTarget_empty(ctx) {
        // Don't create entity for empty column here
        // The targetList will create QUERY_RESULT entity
        // Empty targetEl means the QUERY_RESULT has no columns
    }
    exitTarget_dot_empty(ctx) {
        // Create COLUMN entity for incomplete column reference (e.g., "tb.|")
        // This allows completion to suggest columns from table "tb"
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitColumnNamePath_dot_empty(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitSelectExpressionColumnName(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [Target_labelContext.name],
            },
        ], {
            declareType: ColumnDeclareType.EXPRESSION,
        });
    }
    exitSelectLiteralColumnName(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [Target_labelContext.name],
            },
        ], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitProcedureName(ctx) {
        this.pushEntity(ctx, EntityContextType.PROCEDURE);
    }
    exitProcedureNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.PROCEDURE_CREATE);
    }
    /** ===== Statement begin */
    enterSingleStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitSingleStatement(ctx) {
        this.popStmt();
    }
    enterCreateDatabase(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateDatabase(ctx) {
        this.popStmt();
    }
    enterQueryCreateTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitQueryCreateTable(ctx) {
        this.popStmt();
    }
    enterColumnCreateTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitColumnCreateTable(ctx) {
        this.popStmt();
    }
    enterCreateForeignTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateForeignTable(ctx) {
        this.popStmt();
    }
    enterCreatePartitionForeignTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreatePartitionForeignTable(ctx) {
        this.popStmt();
    }
    enterCreateView(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateView(ctx) {
        this.popStmt();
    }
    enterCreateMaterializedView(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateMaterializedView(ctx) {
        this.popStmt();
    }
    enterSelectStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSelectStatement(ctx) {
        this.popStmt();
    }
    enterSelectNoParens(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSelectNoParens(ctx) {
        this.popStmt();
    }
    enterInsertStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertStatement(ctx) {
        this.popStmt();
    }
    enterCreateFunctionStmt(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunctionStmt(ctx) {
        this.popStmt();
    }
    enterAlterTableStmt(ctx) {
        this.pushStmt(ctx, StmtContextType.ALTER_TABLE_STMT);
    }
    exitAlterTableStmt(ctx) {
        this.popStmt();
    }
}
