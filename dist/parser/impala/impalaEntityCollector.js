import { AliasedRelationContext, ColumnDefinitionContext, CreateKuduTableAsSelectContext, CreateSchemaContext, CreateTableSelectContext, CreateViewContext, KuduTableElementContext, SelectItemContext, ViewColumnItemContext, } from '../../lib/impala/ImpalaSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class ImpalaEntityCollector extends EntityCollector {
    /** ===== Entity begin */
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [
                    CreateTableSelectContext.name,
                    CreateKuduTableAsSelectContext.name,
                ],
            },
        ]);
    }
    exitTableNamePath(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [AliasedRelationContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    exitAtomSubQueryTableSource(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [AliasedRelationContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitUnnest(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [AliasedRelationContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitColumnNamePathCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [
                    ColumnDefinitionContext.name,
                    KuduTableElementContext.name,
                    ViewColumnItemContext.name,
                ],
            },
            {
                attrName: AttrName.colType,
                endContextList: [
                    ColumnDefinitionContext.name,
                    KuduTableElementContext.name,
                    ViewColumnItemContext.name,
                ],
            },
        ]);
    }
    exitViewNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewContext.name],
            },
        ]);
    }
    exitNamedQuery(ctx) {
        var _a, _b;
        this.collectCte(ctx, ctx.identifier(), ctx.subQueryRelation(), (_b = (_a = ctx.stop) === null || _a === void 0 ? void 0 : _a.tokenIndex) !== null && _b !== void 0 ? _b : -1, [], ctx.columnAliases());
    }
    exitViewNamePath(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    exitDatabaseNamePath(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitDatabaseNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateSchemaContext.name],
            },
        ]);
    }
    exitFunctionNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }
    exitSelectList(ctx) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    exitSelectLiteralColumnName(ctx) {
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
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [SelectItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    /** ===== Statement begin */
    enterSingleStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitSingleStatement(ctx) {
        this.popStmt();
    }
    enterCreateTableLike(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTableLike(ctx) {
        this.popStmt();
    }
    enterCreateTableSelect(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTableSelect(ctx) {
        this.popStmt();
    }
    enterCreateKuduTableAsSelect(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateKuduTableAsSelect(ctx) {
        this.popStmt();
    }
    enterQueryStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitQueryStatement(ctx) {
        this.popStmt();
    }
    enterCreateView(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateView(ctx) {
        this.popStmt();
    }
    enterInsertStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertStatement(ctx) {
        this.popStmt();
    }
    enterCreateSchema(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateSchema(ctx) {
        this.popStmt();
    }
    enterCreateAggregateFunction(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateAggregateFunction(ctx) {
        this.popStmt();
    }
    enterCreateFunction(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunction(ctx) {
        this.popStmt();
    }
}
