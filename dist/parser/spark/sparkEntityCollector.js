import { CreateNamespaceContext, CreateOrReplaceTableColTypeContext, CreateTableContext, CreateViewContext, FunctionTableSourceContext, IdentifierCommentContext, InlineTableSourceContext, NamedExpressionContext, RelationContext, RelationPrimaryContext, SparkSqlParser, SubQueryTableSourceContext, TableSourceContext, } from '../../lib/spark/SparkSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, isChildContextOf, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class SparkEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    exitNamespaceName(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitNamespaceNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateNamespaceContext.name],
            },
        ]);
    }
    /** Table Entity Rules */
    exitTableName(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [
                    RelationPrimaryContext.name,
                    RelationContext.name,
                    TableSourceContext.name,
                ],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    /** Inline Table Entity Rules */
    exitInlineTableSource(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [InlineTableSourceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    /** Function Table Entity Rules */
    exitFunctionTableSource(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [FunctionTableSourceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    /** SubQuery Table Entity Rules */
    exitAtomSubQueryTableSource(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [SubQueryTableSourceContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableContext.name],
            },
        ]);
    }
    exitNamedQuery(ctx) {
        var _a, _b, _c, _d, _e;
        const columns = (_c = (_b = (_a = ctx.identifierList()) === null || _a === void 0 ? void 0 : _a.identifierSeq()) === null || _b === void 0 ? void 0 : _b.errorCapturingIdentifier()) !== null && _c !== void 0 ? _c : [];
        this.collectCte(ctx, ctx.errorCapturingIdentifier(), ctx.query(), (_e = (_d = ctx.stop) === null || _d === void 0 ? void 0 : _d.tokenIndex) !== null && _e !== void 0 ? _e : -1, columns);
    }
    exitViewName(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    exitSelectList(ctx) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    exitViewNameCreate(ctx) {
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
    /** Column Entity Rules */
    exitColumnNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [
                    CreateOrReplaceTableColTypeContext.name,
                    IdentifierCommentContext.name,
                ],
            },
            {
                attrName: AttrName.colType,
                endContextList: [CreateOrReplaceTableColTypeContext.name],
            },
        ]);
    }
    exitSelectLiteralColumnName(ctx) {
        if (!isChildContextOf(ctx, SparkSqlParser.RULE_namedExpression))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [NamedExpressionContext.name],
            },
        ], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitSelectExpressionColumnName(ctx) {
        if (!isChildContextOf(ctx, SparkSqlParser.RULE_namedExpression))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [NamedExpressionContext.name],
            },
        ], {
            declareType: ColumnDeclareType.EXPRESSION,
        });
    }
    exitTableAllColumns(ctx) {
        if (!isChildContextOf(ctx, SparkSqlParser.RULE_namedExpression))
            return;
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [NamedExpressionContext.name],
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
    enterCreateTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTable(ctx) {
        this.popStmt();
    }
    enterCreateTableLike(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreateTableLike(ctx) {
        this.popStmt();
    }
    enterReplaceTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitReplaceTable(ctx) {
        this.popStmt();
    }
    enterCreateView(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateView(ctx) {
        this.popStmt();
    }
    enterCreateTempViewUsing(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateTempViewUsing(ctx) {
        this.popStmt();
    }
    enterQueryStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitQueryStatement(ctx) {
        this.popStmt();
    }
    enterInsertFromQuery(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertFromQuery(ctx) {
        this.popStmt();
    }
    enterMultipleInsert(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitMultipleInsert(ctx) {
        this.popStmt();
    }
    enterCreateNamespace(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateNamespace(ctx) {
        this.popStmt();
    }
    enterCreateFunction(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunction(ctx) {
        this.popStmt();
    }
}
