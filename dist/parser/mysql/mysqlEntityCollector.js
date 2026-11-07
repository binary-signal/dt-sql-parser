import { TerminalNode } from 'antlr4ng';
import { ColumnCreateTableContext, CreateDefinitionContext, CreateFunctionContext, TableSourceItemContext, AtomTableItemContext, SubqueryTableItemContext, SelectElement_labelContext, SelectElement_exprContext, } from '../../lib/mysql/MySqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
export class MySqlEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    exitDatabaseName(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE);
    }
    exitDatabaseNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    }
    /** Table Entity Rules */
    exitTableName(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableSourceItemContext.name, AtomTableItemContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
    }
    exitCommonTableExpressions(ctx) {
        var _a, _b, _c;
        const names = ctx.uid();
        if (!(names === null || names === void 0 ? void 0 : names.length))
            return;
        const bodyEnd = (_c = (_b = (_a = ctx.dmlStatement()) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.tokenIndex) !== null && _c !== void 0 ? _c : -1;
        let endTokenIndex = bodyEnd;
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            if (!(child instanceof TerminalNode))
                continue;
            if (child.symbol.text === ')' && child.symbol.tokenIndex > bodyEnd) {
                endTokenIndex = child.symbol.tokenIndex;
                break;
            }
        }
        this.collectCte(ctx, names[0], ctx.dmlStatement(), endTokenIndex, names.slice(1));
    }
    /** SubQuery Table Entity Rules */
    exitAtomSubQueryTableSource(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [TableSourceItemContext.name, SubqueryTableItemContext.name],
            },
        ], {
            declareType: TableDeclareType.EXPRESSION,
        });
    }
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [ColumnCreateTableContext.name],
            },
        ]);
    }
    exitViewName(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    exitViewNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }
    exitFunctionNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateFunctionContext.name],
            },
        ]);
    }
    exitSelectElements(ctx) {
        this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
    }
    exitColumnNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateDefinitionContext.name],
            },
            {
                attrName: AttrName.colType,
                endContextList: [CreateDefinitionContext.name],
            },
        ]);
    }
    exitTableAllColumns(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitPureAllColumns(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitSelectLiteralColumnName(ctx) {
        // Handle empty column case (e.g., "select  from")
        // When emptyColumn matches, the context has no actual tokens
        if (!ctx.start || !ctx.stop || ctx.start.start > ctx.stop.stop) {
            return;
        }
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [SelectElement_labelContext.name],
            },
        ], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitSelectElement_dot_empty(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitColumnNamePath_dot_empty(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    exitSelectExpressionElement(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [
            {
                attrName: AttrName.alias,
                endContextList: [SelectElement_exprContext.name],
            },
        ], {
            declareType: ColumnDeclareType.EXPRESSION,
        });
    }
    /** ===== Statement begin */
    enterSingleStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitSingleStatement(ctx) {
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
    enterCopyCreateTable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCopyCreateTable(ctx) {
        this.popStmt();
    }
    enterCreateView(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreateView(ctx) {
        this.popStmt();
    }
    enterSimpleSelect(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSimpleSelect(ctx) {
        this.popStmt();
    }
    enterUnionAndLateralSelect(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitUnionAndLateralSelect(ctx) {
        this.popStmt();
    }
    enterSelectExpression(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSelectExpression(ctx) {
        this.popStmt();
    }
    enterInsertStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsertStatement(ctx) {
        this.popStmt();
    }
    enterCreateDatabase(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    }
    exitCreateDatabase(ctx) {
        this.popStmt();
    }
    enterCreateFunction(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunction(ctx) {
        this.popStmt();
    }
    enterCreateFunctionLoadable(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }
    exitCreateFunctionLoadable(ctx) {
        this.popStmt();
    }
}
