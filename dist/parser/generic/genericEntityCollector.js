import { ColumnDefinitionContext, AliasedRelationContext, CreateTableStatementContext, } from '../../lib/generic/GenericSqlParser';
import { AttrName, ColumnDeclareType, EntityCollector, isCommonEntityContext, StmtContextType, TableDeclareType, } from '../common/entityCollector';
import { EntityContextType } from '../common/types';
import { tokenToWord } from '../common/textAndWord';
export class GenericEntityCollector extends EntityCollector {
    constructor() {
        super(...arguments);
        /** Select-list source text for each query result. The result itself keeps the full statement. */
        this.selectListText = new Map();
    }
    enterProgram() {
        this.selectListText.clear();
        super.enterProgram();
    }
    /** ====== Entity Begin */
    exitTableName(ctx) {
        var _a;
        const entity = this.pushEntity(ctx, EntityContextType.TABLE, [
            {
                attrName: AttrName.alias,
                endContextList: [AliasedRelationContext.name],
            },
        ], {
            declareType: TableDeclareType.LITERAL,
        });
        // 如果通用属性查找未找到 alias，尝试从 AliasedRelationContext._alias 获取
        if (entity && !entity[AttrName.alias]) {
            let parent = ctx.parent;
            while (parent && !(parent instanceof AliasedRelationContext)) {
                parent = parent.parent;
            }
            const aliasToken = (_a = parent === null || parent === void 0 ? void 0 : parent._alias) === null || _a === void 0 ? void 0 : _a.start;
            if (aliasToken) {
                entity[AttrName.alias] = tokenToWord(aliasToken, '');
            }
        }
    }
    exitNamedQuery(ctx) {
        var _a, _b;
        this.collectCte(ctx, ctx.identifier(), ctx.queryStatement(), (_b = (_a = ctx.stop) === null || _a === void 0 ? void 0 : _a.tokenIndex) !== null && _b !== void 0 ? _b : -1, [], ctx.cteColumnList());
    }
    exitTableNameCreate(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE, [
            {
                attrName: AttrName.comment,
                endContextList: [CreateTableStatementContext.name],
            },
        ]);
    }
    exitColumnRef(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN);
    }
    exitColumnRefCreate(ctx) {
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
    exitQuerySpecification(ctx) {
        var _a, _b;
        const entity = this.pushEntity(ctx, EntityContextType.QUERY_RESULT);
        const items = ctx.selectItem();
        const first = (_a = items[0]) === null || _a === void 0 ? void 0 : _a.start;
        const last = (_b = items[items.length - 1]) === null || _b === void 0 ? void 0 : _b.stop;
        if (entity && isCommonEntityContext(entity) && first && last) {
            this.selectListText.set(entity, this.sourceSlice(first.start, last.stop));
        }
    }
    adaptOutwardQueryResult(entity) {
        const text = this.selectListText.get(entity);
        if (text == null)
            return entity;
        return Object.assign(Object.assign({}, entity), { text });
    }
    exitSelectExpressionElement(ctx) {
        var _a;
        const isSimpleColumn = this.isSimpleColumnReference(ctx);
        const entity = this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: isSimpleColumn ? ColumnDeclareType.LITERAL : ColumnDeclareType.EXPRESSION,
        });
        const aliasToken = (_a = ctx._alias) === null || _a === void 0 ? void 0 : _a.start;
        if (entity && aliasToken) {
            entity[AttrName.alias] = tokenToWord(aliasToken, '');
        }
    }
    exitSelectStarElement(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitSelectAllElement(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.ALL,
        });
    }
    exitSelectEmptyElement(ctx) {
        this.pushEntity(ctx, EntityContextType.COLUMN, [], {
            declareType: ColumnDeclareType.LITERAL,
        });
    }
    isSimpleColumnReference(ctx) {
        const text = ctx.getText();
        // Simple column reference: no parentheses, no operators, no spaces
        return (!text.includes('(') &&
            !text.includes(' ') &&
            !text.includes('+') &&
            !text.includes('-') &&
            !text.includes('*') &&
            !text.includes('/'));
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
    enterQueryStatement(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitQueryStatement(ctx) {
        this.popStmt();
    }
    enterInsert(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsert(ctx) {
        this.popStmt();
    }
    enterUpdate(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitUpdate(ctx) {
        this.popStmt();
    }
    enterDelete(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitDelete(ctx) {
        this.popStmt();
    }
    enterAlterTable(ctx) {
        this.pushStmt(ctx, StmtContextType.ALTER_TABLE_STMT);
    }
    exitAlterTable(ctx) {
        this.popStmt();
    }
    enterDropTable(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitDropTable(ctx) {
        this.popStmt();
    }
}
