import { AliasedRelationContext, ColumnDefinitionContext, CreateMaterializedViewContext, CreateTableAsSelectContext, CreateTableContext, CreateViewContext, SelectItemContext, } from '../../lib/trino/TrinoSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class TrinoEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    exitCatalogRef(ctx) {
        this.pushEntity(ctx, EntityContextType.CATALOG);
    }
    exitCatalogNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.CATALOG_CREATE);
    }
    exitSchemaRef(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitSchemaNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }
    exitTableRef(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [AliasedRelationContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    exitExpressionSourceTable(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [AliasedRelationContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableContext.name, CreateTableAsSelectContext.name],
            },
        ]);
    }
    exitNamedQuery(ctx) {
        var _a, _b, _c, _d;
        const columns = (_b = (_a = ctx.columnAliases()) === null || _a === void 0 ? void 0 : _a.identifier()) !== null && _b !== void 0 ? _b : [];
        this.collectCte(ctx, ctx.identifier(), ctx.query(), (_d = (_c = ctx.stop) === null || _c === void 0 ? void 0 : _c.tokenIndex) !== null && _d !== void 0 ? _d : -1, columns);
    }
    exitViewRef(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    exitViewNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateMaterializedViewContext.name, CreateViewContext.name],
            },
        ]);
    }
    exitSelectList(ctx) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    exitColumnNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.colType,
                endContextList: [ColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.comment,
                endContextList: [ColumnDefinitionContext.name],
            },
        ]);
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
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitSelectAllWithoutTable(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
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
    enterCreateSchema(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateSchema(ctx) {
        this.popStmt();
    }
    enterCreateTableAsSelect(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTableAsSelect(ctx) {
        this.popStmt();
    }
    enterCreateTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTable(ctx) {
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
    enterQueryStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitQueryStatement(ctx) {
        this.popStmt();
    }
    enterInsertInto(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertInto(ctx) {
        this.popStmt();
    }
}
