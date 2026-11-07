import { ColumnProjectItemContext, CreateDatabaseContext, CreateTableContext, CreateViewContext, OverWindowItemContext, PhysicalColumnDefinitionContext, TableReferenceContext, } from '../../lib/flink/FlinkSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class FlinkEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    exitCatalogPathCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.CATALOG_CREATE);
    }
    exitCatalogPath(ctx) {
        this.pushEntity(ctx, EntityContextType.CATALOG);
    }
    exitDatabasePathCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateDatabaseContext.name],
            },
        ]);
    }
    exitDatabasePath(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitTablePath(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableReferenceContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    exitAtomFunctionTable(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableReferenceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitAtomExpressionTable(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableReferenceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitTablePathCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableContext.name],
            },
        ]);
    }
    exitWithItem(ctx) {
        var _a, _b;
        this.collectCte(ctx, ctx.identifier(), ctx.queryStatement(), (_b = (_a = ctx.stop) === null || _a === void 0 ? void 0 : _a.tokenIndex) !== null && _b !== void 0 ? _b : -1, ctx.columnName());
    }
    exitViewPath(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    exitViewPathCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateViewContext.name],
            },
        ]);
    }
    exitFunctionNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }
    exitSelectList(ctx) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    /** Column entity rules */
    exitColumnNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [PhysicalColumnDefinitionContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [PhysicalColumnDefinitionContext.name],
            },
        ]);
    }
    exitSelectLiteralColumnName(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [ColumnProjectItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitSelectExpressionColumnName(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [ColumnProjectItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.EXPRESSION,
        });
    }
    exitSelectWindowItemColumnName(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [ColumnProjectItemContext.name, OverWindowItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.EXPRESSION,
        });
    }
    exitTableAllColumns(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [ColumnProjectItemContext.name],
            },
        ], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    /** ===== Statement begin */
    enterSqlStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitSqlStatement(ctx) {
        this.popStmt();
    }
    enterCreateCatalog(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_CATALOG_STMT);
    }
    exitCreateCatalog(ctx) {
        this.popStmt();
    }
    enterCreateDatabase(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateDatabase(ctx) {
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
    enterQueryStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitQueryStatement(ctx) {
        this.popStmt();
    }
    enterCreateFunction(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunction(ctx) {
        this.popStmt();
    }
    enterInsertStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertStatement(ctx) {
        this.popStmt();
    }
}
