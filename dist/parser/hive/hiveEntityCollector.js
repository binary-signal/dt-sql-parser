import { ColumnNameCommentContext, ColumnNameTypeConstraintContext, CreateDatabaseStatementContext, CreateTableStatementContext, CreateViewStatementContext, HiveSqlParser, PartitionedTableFunctionContext, SelectItemContext, SubQuerySourceContext, TableSourceContext, UniqueJoinSourceContext, VirtualTableSourceContext, } from '../../lib/hive/HiveSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, isChildContextOf, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class HiveEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableStatementContext.name],
            },
        ]);
    }
    /** Table Entity Rules */
    exitTableName(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableSourceContext.name, UniqueJoinSourceContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    /** Virtual Table Entity Rules */
    exitAtomValuesClause(ctx) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_fromClause))
            return;
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [VirtualTableSourceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    /** SubQuery Table Entity Rules */
    exitQueryStatementExpression(ctx) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_fromClause))
            return;
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [SubQuerySourceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    /** Partitioned Table Entity Rules */
    exitAtomPartitionedTableFunction(ctx) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_fromClause))
            return;
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [PartitionedTableFunctionContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    /** Column Entity Rules */
    exitColumnNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [ColumnNameCommentContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [ColumnNameTypeConstraintContext.name],
            },
        ]);
    }
    exitSelectLiteralColumnName(ctx) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_selectItem))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [SelectItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitSelectExpressionColumnName(ctx) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_selectItem))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [SelectItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.EXPRESSION,
        });
    }
    exitTableAllColumns(ctx) {
        if (!isChildContextOf(ctx, HiveSqlParser.RULE_selectItem))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitViewNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewStatementContext.name],
            },
        ]);
    }
    exitSelectList(ctx) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    exitCteStatement(ctx) {
        var _a, _b, _c, _d;
        const columns = (_b = (_a = ctx.columnNameList()) === null || _a === void 0 ? void 0 : _a.columnName()) !== null && _b !== void 0 ? _b : [];
        this.collectCte(ctx, ctx.id_(), ctx.queryStatementExpression(), (_d = (_c = ctx.stop) === null || _c === void 0 ? void 0 : _c.tokenIndex) !== null && _d !== void 0 ? _d : -1, columns);
    }
    exitViewName(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    exitDbSchemaNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateDatabaseStatementContext.name],
            },
        ]);
    }
    exitDbSchemaName(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitFunctionNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }
    /** ==== Statement begin */
    enterStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitStatement() {
        this.popStmt();
    }
    enterCreateTableStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTableStatement() {
        this.popStmt();
    }
    enterSelectStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSelectStatement(ctx) {
        this.popStmt();
    }
    enterFromSelectStmt(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitFromSelectStmt(ctx) {
        this.popStmt();
    }
    enterCreateViewStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateViewStatement(ctx) {
        this.popStmt();
    }
    enterCreateMaterializedViewStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateMaterializedViewStatement(ctx) {
        this.popStmt();
    }
    enterInsertStmt(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertStmt(ctx) {
        this.popStmt();
    }
    enterFromInsertStmt(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitFromInsertStmt(ctx) {
        this.popStmt();
    }
    enterCreateDatabaseStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateDatabaseStatement(ctx) {
        this.popStmt();
    }
    enterFunctionNameCreate(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunctionStatement(ctx) {
        this.popStmt();
    }
}
