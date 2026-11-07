var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { isToken, ParserRuleContext, TerminalNode, Token } from 'antlr4ng';
import { SimpleStack } from './simpleStack';
import { ctxToText, isWordRange, tokenToWord, } from './textAndWord';
import { EntityContextType } from './types';
/**
 * TODO: more stmt type should be supported.
 */
export var StmtContextType;
(function (StmtContextType) {
    /** A self-contained and complete statement */
    StmtContextType["COMMON_STMT"] = "commonStmt";
    StmtContextType["CREATE_CATALOG_STMT"] = "createCatalogStmt";
    StmtContextType["CREATE_DATABASE_STMT"] = "createDatabaseStmt";
    StmtContextType["CREATE_TABLE_STMT"] = "createTableStmt";
    StmtContextType["CREATE_VIEW_STMT"] = "createViewStmt";
    StmtContextType["SELECT_STMT"] = "selectStmt";
    StmtContextType["INSERT_STMT"] = "insertStmt";
    StmtContextType["CREATE_FUNCTION_STMT"] = "createFunctionStmt";
    StmtContextType["ALTER_TABLE_STMT"] = "alterTableStmt";
})(StmtContextType || (StmtContextType = {}));
export function toStmtContext(ctx, type, input, rootStmt, parentStmt, isContainCaret) {
    var _a;
    const text = ctxToText(ctx, input);
    if (!text)
        return null;
    const { text: stmtText } = text, position = __rest(text, ["text"]);
    return {
        stmtContextType: type,
        position,
        rootStmt: rootStmt !== null && rootStmt !== void 0 ? rootStmt : null,
        parentStmt: parentStmt !== null && parentStmt !== void 0 ? parentStmt : null,
        isContainCaret,
        text: stmtText,
        scopeDepth: type === StmtContextType.COMMON_STMT ? 0 : ((_a = parentStmt === null || parentStmt === void 0 ? void 0 : parentStmt.scopeDepth) !== null && _a !== void 0 ? _a : 0) + 1,
    };
}
/**
 * entity's attribute
 * @key comment: entity's comment attribute
 * @key colType: column entity's type attribute
 * @key alias: entity's alias attribute
 * */
export var AttrName;
(function (AttrName) {
    AttrName["comment"] = "_comment";
    AttrName["colType"] = "_colType";
    AttrName["alias"] = "_alias";
})(AttrName || (AttrName = {}));
/**
 * Types of column declarations
 */
export var ColumnDeclareType;
(function (ColumnDeclareType) {
    /** Literal column name */
    ColumnDeclareType[ColumnDeclareType["LITERAL"] = 0] = "LITERAL";
    /** Using asterisk syntax (tableName.*) */
    ColumnDeclareType[ColumnDeclareType["ALL"] = 1] = "ALL";
    /** Complex expressions like subqueries, case statements, function calls */
    ColumnDeclareType[ColumnDeclareType["EXPRESSION"] = 2] = "EXPRESSION";
})(ColumnDeclareType || (ColumnDeclareType = {}));
/**
 * Types of table declarations
 */
export var TableDeclareType;
(function (TableDeclareType) {
    /** Regular table reference */
    TableDeclareType[TableDeclareType["LITERAL"] = 0] = "LITERAL";
    /** Table defined by expression (e.g., subquery) */
    TableDeclareType[TableDeclareType["EXPRESSION"] = 1] = "EXPRESSION";
})(TableDeclareType || (TableDeclareType = {}));
export function isCommonEntityContext(entity) {
    if (!entity)
        return false;
    return !isFuncEntityContext(entity) && !isColumnEntityContext(entity);
}
export function isFuncEntityContext(entity) {
    if (!entity)
        return false;
    return [EntityContextType.FUNCTION, EntityContextType.FUNCTION_CREATE].includes(entity.entityContextType);
}
export function isColumnEntityContext(entity) {
    if (!entity)
        return false;
    return [EntityContextType.COLUMN, EntityContextType.COLUMN_CREATE].includes(entity.entityContextType);
}
/**
 * Check if ctx is a child node of a specific rule type
 */
export function isChildContextOf(ctx, parentRuleIndex) {
    let parentCtx = ctx.parent;
    while (parentCtx) {
        if (parentCtx.ruleIndex === parentRuleIndex)
            return true;
        parentCtx = parentCtx.parent;
    }
    return false;
}
export function toEntityContext(ctx, type, input, belongStmt, attrInfo, metaInfo) {
    var _a, _b;
    const word = ctxToText(ctx, input);
    if (!word)
        return null;
    const { text, startLine, endLine } = word, rest = __rest(word, ["text", "startLine", "endLine"]);
    const position = Object.assign(Object.assign({}, rest), { line: startLine });
    let entityInfo = {
        entityContextType: type,
        text,
        position,
        belongStmt,
        declareType: metaInfo === null || metaInfo === void 0 ? void 0 : metaInfo.declareType,
        [AttrName.comment]: null,
    };
    switch (entityInfo.entityContextType) {
        case EntityContextType.FUNCTION:
        case EntityContextType.FUNCTION_CREATE: {
            entityInfo.relatedEntities = null;
            entityInfo.arguments = null;
            break;
        }
        case EntityContextType.COLUMN:
        case EntityContextType.COLUMN_CREATE:
            entityInfo[AttrName.colType] = null;
            break;
        default:
            entityInfo.relatedEntities = null;
            break;
    }
    if (attrInfo) {
        for (let k = 0; k < attrInfo.length; k++) {
            const attributeName = (_a = attrInfo[k]) === null || _a === void 0 ? void 0 : _a.attrName;
            const attrToken = findAttribute(ctx, attributeName, (_b = attrInfo[k]) === null || _b === void 0 ? void 0 : _b.endContextList);
            if (attrToken) {
                const attrVal = isToken(attrToken)
                    ? tokenToWord(attrToken, input)
                    : ctxToText(attrToken, input);
                if (attrVal) {
                    if (isWordRange(attrVal)) {
                        entityInfo = Object.assign(entityInfo, {
                            [attributeName]: attrVal,
                        });
                    }
                    else {
                        const { startIndex, endIndex, startColumn, endColumn, text } = attrVal, rest = __rest(attrVal, ["startIndex", "endIndex", "startColumn", "endColumn", "text"]);
                        entityInfo = Object.assign(entityInfo, {
                            [attributeName]: {
                                startIndex,
                                endIndex,
                                startColumn,
                                endColumn,
                                text,
                                line: rest === null || rest === void 0 ? void 0 : rest.startLine,
                            },
                        });
                    }
                }
            }
        }
    }
    return entityInfo;
}
export function findAttribute(ctx, keyName, endContextNameList) {
    var _a, _b;
    const parent = (ctx === null || ctx === void 0 ? void 0 : ctx.parent) || null;
    let attrVal = null;
    if (parent === null || parent === void 0 ? void 0 : parent[keyName]) {
        attrVal = (parent === null || parent === void 0 ? void 0 : parent[keyName]) || null;
        return attrVal;
    }
    else {
        if (((_a = parent === null || parent === void 0 ? void 0 : parent.constructor) === null || _a === void 0 ? void 0 : _a.name) && !endContextNameList.includes((_b = parent === null || parent === void 0 ? void 0 : parent.constructor) === null || _b === void 0 ? void 0 : _b.name)) {
            attrVal = findAttribute(parent, keyName, endContextNameList);
        }
        if (!attrVal) {
            if (parent === null || parent === void 0 ? void 0 : parent.children) {
                attrVal = findAttributeChildren(parent, keyName);
            }
        }
    }
    return attrVal;
}
function findAttributeChildren(ctx, keyName) {
    const visitChildren = (ctx === null || ctx === void 0 ? void 0 : ctx.children) || [];
    let attrVal = null;
    if (visitChildren.length) {
        for (let i = 0; i < visitChildren.length; i++) {
            const child = visitChildren[i] || null;
            if (child === null || child === void 0 ? void 0 : child[keyName]) {
                attrVal = (child === null || child === void 0 ? void 0 : child[keyName]) || null;
                return attrVal;
            }
            else {
                attrVal = findAttributeChildren(child, keyName);
            }
        }
    }
    return attrVal;
}
/**
 * Check if an entity is contained within the range entity's context
 * @param entity - The entity to check if it's contained
 * @param rangeEntity - The entity that defines the containing range
 * @returns true if entity is contained within rangeEntity's range
 */
function isEntityInScope(entity, rangeEntity) {
    const entityStart = entity.position.startTokenIndex;
    const entityStop = entity.position.endTokenIndex;
    const rangeStart = rangeEntity.position.startTokenIndex;
    const rangeStop = rangeEntity.position.endTokenIndex;
    return (entityStart != null &&
        entityStop != null &&
        rangeStart != null &&
        rangeStop != null &&
        rangeStart <= entityStart &&
        rangeStop >= entityStop);
}
/**
 * Parents of a single CTE item. The scope of that CTE is the query that owns this clause.
 */
const CTE_CLAUSE_CONTEXT_NAMES = new Set([
    'WithClauseContext',
    'WithStatementContext',
    'CtesContext',
    'WithContext',
]);
/**
 * Strip outer quotes/brackets and lowercase for CTE name matching.
 * Quoted forms are lowercased too on purpose — loose match for completion UX
 * across dialects, not dialect-accurate case folding (e.g. PostgreSQL quoted ids).
 */
function normalizeIdent(text) {
    let value = text.trim();
    if ((value.startsWith('`') && value.endsWith('`') && value.length >= 2) ||
        (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
        (value.startsWith('[') && value.endsWith(']') && value.length >= 2)) {
        value = value.slice(1, -1);
    }
    return value.toLowerCase();
}
function sameIdent(left, right) {
    return normalizeIdent(left) === normalizeIdent(right);
}
/**
 * @todo: Handle alias, includes column alias, table alias, query as alias and so on.
 * @todo: [may be need] Combine the entities in each clause.
 */
export class EntityCollector {
    constructor(input, allTokens, caretTokenIndex) {
        /**
         * Contexts whose source slice contains a parse error.
         * Error recovery can stretch a rule context across a whole clause, so `ctxToText`
         * would return e.g. `JOIN myOwn\nORDER BY 1` where a name is expected.
         */
        this._errorContexts = new Set();
        this._input = input;
        this._allTokens = allTokens || [];
        this._caretTokenIndex = caretTokenIndex !== null && caretTokenIndex !== void 0 ? caretTokenIndex : -1;
        this._entitiesSet = new Set();
        this._stmtStack = new SimpleStack();
        this._entityStack = new SimpleStack();
        this._cteDefinitions = [];
        this._rootStmt = null;
        this._caretStmtScopeDepth = 0;
        this._caretStmt = null;
    }
    visitTerminal() { }
    visitErrorNode(node) {
        /**
         * Mark every ancestor. An entity pushed on one of them would carry the
         * error-tainted source slice as its `text`. Entities are always pushed from
         * `exit<Rule>` callbacks, so this runs before the context is used.
         */
        let parent = node.parent;
        while (parent) {
            this._errorContexts.add(parent);
            parent = parent.parent;
        }
    }
    enterEveryRule() { }
    exitEveryRule() { }
    getRootStmt() {
        return this._rootStmt;
    }
    getEntities() {
        return Array.from(this._entitiesSet);
    }
    enterProgram() {
        this._entitiesSet.clear();
        this._stmtStack.clear();
        this._entityStack.clear();
        this._cteDefinitions = [];
        this._rootStmt = null;
        this._errorContexts.clear();
    }
    exitProgram() {
        this.finalizeCteDefinitions();
        this.bindCteReferences();
        const entities = Array.from(this._entitiesSet);
        if (this._caretTokenIndex !== -1) {
            this.markCteAccessibility();
            this.attachAccessibleToEntities(entities);
        }
        this._entityStack.clear();
    }
    /**
     * Adds accessibility markers to entities
     * @param entities The list of entities to process
     */
    attachAccessibleToEntities(entities) {
        var _a;
        if (!entities.length) {
            return;
        }
        for (const entity of entities) {
            if (entity.isAccessible !== undefined) {
                continue;
            }
            const entityScopeDepth = (_a = entity.belongStmt.scopeDepth) !== null && _a !== void 0 ? _a : 0;
            if (entity.entityContextType === EntityContextType.TABLE) {
                entity.isAccessible =
                    !!entity.belongStmt.isContainCaret &&
                        entityScopeDepth === this._caretStmtScopeDepth;
            }
            else {
                entity.isAccessible = null;
            }
            // Recursively process related entities
            if (entity.relatedEntities) {
                this.attachAccessibleToEntities(entity.relatedEntities);
            }
            // Process columns of the table
            if (entity.columns) {
                const columnEntities = entity.columns || [];
                this.attachAccessibleToEntities(columnEntities);
            }
        }
    }
    /**
     * Attach query result to column if the column is derived from expression.
     */
    attachQueryResultToColumn(column, queryResults) {
        const relatedEntities = queryResults.filter((queryResult) => isEntityInScope(queryResult, column));
        column.relatedEntities = relatedEntities;
    }
    /**
     * Attach related columns to query result
     */
    attachColumnsToQueryResult(queryResult, columns) {
        const relatedColumns = columns.filter((column) => column.belongStmt === queryResult.belongStmt);
        queryResult.columns = relatedColumns;
    }
    /**
     * Attach query result to table if the table is derived from expression.
     */
    attachQueryResultToTable(table, queryResults) {
        const relatedQueryResults = queryResults.filter((queryResult) => isEntityInScope(queryResult, table));
        table.relatedEntities = relatedQueryResults;
    }
    /**
     * Gets query result entities inside a statement
     * @param stmt The statement to search within
     * @returns Array of query result entity contexts
     */
    getQueryResultEntitiesInsideStmt(stmt) {
        return this.getEntities()
            .filter((entity) => entity.entityContextType === EntityContextType.QUERY_RESULT &&
            entity.belongStmt.parentStmt === stmt)
            .filter(isCommonEntityContext);
    }
    /**
     * The antlr4 will ignore hidden tokens, if we type whitespace at the end of a statement,
     * the whitespace token will not as stop token, so we consider the whitespace token as a part of the nonhidden token in front of it
     */
    getPrevNonHiddenTokenIndex(caretTokenIndex) {
        if (this._allTokens[caretTokenIndex].channel !== Token.HIDDEN_CHANNEL)
            return caretTokenIndex;
        for (let i = caretTokenIndex - 1; i >= 0; i--) {
            const token = this._allTokens[i];
            if (token.channel !== Token.HIDDEN_CHANNEL) {
                // If prev nonhidden token is ';', the current token does not belong to any statement.
                return token.text === ';' ? Infinity : token.tokenIndex;
            }
        }
        return Infinity;
    }
    pushStmt(ctx, type) {
        var _a;
        let isContainCaret;
        if (this._caretTokenIndex >= 0) {
            isContainCaret =
                !!ctx.start &&
                    !!ctx.stop &&
                    ctx.start.tokenIndex <= this._caretTokenIndex &&
                    ctx.stop.tokenIndex >= this.getPrevNonHiddenTokenIndex(this._caretTokenIndex);
            if (isContainCaret && type !== StmtContextType.COMMON_STMT) {
                this._caretStmtScopeDepth++;
            }
        }
        const stmtContext = toStmtContext(ctx, type, this._input, this._rootStmt, this._stmtStack.peek(), isContainCaret);
        if (stmtContext) {
            if (this._stmtStack.isEmpty() ||
                ((_a = this._stmtStack.peek()) === null || _a === void 0 ? void 0 : _a.stmtContextType) === StmtContextType.COMMON_STMT) {
                this._rootStmt = stmtContext;
            }
            this._stmtStack.push(stmtContext);
        }
        return stmtContext;
    }
    popStmt() {
        const stmtContext = this._stmtStack.pop();
        if (stmtContext) {
            if (stmtContext.stmtContextType === StmtContextType.COMMON_STMT) {
                this._rootStmt = this._stmtStack.peek();
            }
            if (!this._entityStack.isEmpty()) {
                this.combineEntitiesAndAdd(stmtContext);
            }
            // Statement-scoped walks never exit program. Finalize once the outermost statement pops.
            if (this._stmtStack.isEmpty()) {
                this.finalizeCteDefinitions();
                this.bindCteReferences();
            }
            // If the current statement contains the caret and its scope depth equals the caret statement's scope depth
            // then set it as the nearest statement containing the caret
            if (stmtContext.isContainCaret &&
                stmtContext.scopeDepth === this._caretStmtScopeDepth) {
                this._caretStmt = stmtContext;
            }
        }
        return stmtContext;
    }
    pushEntity(ctx, type, attrInfo, metaInfo) {
        // A context containing a parse error has no usable `text`.
        if (this._errorContexts.has(ctx))
            return null;
        const entityContext = toEntityContext(ctx, type, this._input, this._stmtStack.peek(), attrInfo, metaInfo);
        if (entityContext) {
            if (this._stmtStack.isEmpty()) {
                this._entitiesSet.add(entityContext);
            }
            else {
                // If is inside a statement
                this._entityStack.push(entityContext);
            }
        }
        return entityContext;
    }
    /**
     * Combine entities that inside a single statement.
     * e.g. combine tableName and column if they are inside a same createTableStatement.
     * Then add combined entities into result.
     */
    combineEntitiesAndAdd(stmtContext) {
        const entitiesInsideStmt = [];
        while (!this._entityStack.isEmpty() &&
            (this._entityStack.peek().belongStmt === stmtContext ||
                this._entityStack.peek().belongStmt.rootStmt === stmtContext)) {
            entitiesInsideStmt.unshift(this._entityStack.pop());
        }
        const combinedEntities = this.combineRootStmtEntities(stmtContext, entitiesInsideStmt);
        while (combinedEntities.length) {
            const entity = combinedEntities.shift();
            entity && this._entitiesSet.add(entity);
        }
    }
    /**
     * Combined all entities under a rootStmt.
     */
    combineRootStmtEntities(stmtContext, entitiesInsideStmt) {
        if (stmtContext.stmtContextType === StmtContextType.CREATE_VIEW_STMT ||
            stmtContext.stmtContextType === StmtContextType.CREATE_TABLE_STMT) {
            return this.combineCreateTableOrViewStmtEntities(stmtContext, entitiesInsideStmt);
        }
        else if (stmtContext.stmtContextType === StmtContextType.SELECT_STMT) {
            const tableSourceEntities = this.combineFromTableSource(stmtContext, entitiesInsideStmt);
            const queryResultEntities = this.combineQueryResultStmtEntities(stmtContext, entitiesInsideStmt);
            const otherEntities = entitiesInsideStmt.filter((entity) => ![
                EntityContextType.QUERY_RESULT,
                EntityContextType.TABLE,
                EntityContextType.COLUMN,
            ].includes(entity.entityContextType));
            return Array.from(new Set([...tableSourceEntities, ...queryResultEntities, ...otherEntities]));
        }
        else {
            // Do not collect column and queryResult entities if they are not inside a select statement
            // Exception: empty column entities (text === '') should be kept
            return entitiesInsideStmt.filter((entity) => {
                // Keep non-COLUMN and non-QUERY_RESULT entities
                if (entity.entityContextType !== EntityContextType.COLUMN &&
                    entity.entityContextType !== EntityContextType.QUERY_RESULT) {
                    return true;
                }
                // Also keep empty QUERY_RESULT entities (text === '')
                if (entity.entityContextType === EntityContextType.QUERY_RESULT &&
                    entity.text === '') {
                    return true;
                }
                return false;
            });
        }
    }
    combineQueryResultStmtEntities(stmtContext, entitiesInsideStmt) {
        if (!stmtContext || !(entitiesInsideStmt === null || entitiesInsideStmt === void 0 ? void 0 : entitiesInsideStmt.length)) {
            return [];
        }
        const columnEntities = [];
        const relatedTableEntities = [];
        const finalEntities = [];
        const queryResultEntitiesInsideStmt = this.getQueryResultEntitiesInsideStmt(stmtContext);
        // Categorize and process entities
        entitiesInsideStmt.forEach((entity) => {
            if (entity.belongStmt !== stmtContext)
                return;
            if (entity.entityContextType === EntityContextType.QUERY_RESULT &&
                isCommonEntityContext(entity)) {
                finalEntities.push(entity);
            }
            else if (entity.entityContextType === EntityContextType.COLUMN &&
                isColumnEntityContext(entity)) {
                if (entity.declareType === ColumnDeclareType.EXPRESSION) {
                    this.attachQueryResultToColumn(entity, queryResultEntitiesInsideStmt);
                }
                columnEntities.push(entity);
            }
            else if (entity.entityContextType === EntityContextType.TABLE &&
                isCommonEntityContext(entity)) {
                relatedTableEntities.push(entity);
            }
        });
        // combine collected entities to query result entity
        finalEntities.forEach((queryResultEntity) => {
            this.attachColumnsToQueryResult(queryResultEntity, columnEntities);
            queryResultEntity.relatedEntities = relatedTableEntities;
        });
        return finalEntities;
    }
    combineFromTableSource(stmtContext, entitiesInsideStmt) {
        const finalEntities = [];
        const queryResultEntitiesInsideStmt = this.getQueryResultEntitiesInsideStmt(stmtContext);
        const tableEntities = (entitiesInsideStmt.filter((entity) => entity.entityContextType === EntityContextType.TABLE));
        tableEntities.forEach((table) => {
            // If it's an EXPRESSION type (subquery), need to associate with QUERY_RESULT entities
            if (table.declareType === TableDeclareType.EXPRESSION) {
                this.attachQueryResultToTable(table, queryResultEntitiesInsideStmt);
            }
            finalEntities.push(table);
        });
        return finalEntities;
    }
    combineCreateTableOrViewStmtEntities(stmtContext, entitiesInsideStmt) {
        const columns = [];
        const relatedEntities = [];
        const queryResultEntitiesInsideStmt = this.getQueryResultEntitiesInsideStmt(stmtContext);
        let mainEntity = null;
        const finalEntities = [...entitiesInsideStmt, ...queryResultEntitiesInsideStmt].reduce((result, entity) => {
            if (entity.belongStmt !== stmtContext) {
                if (entity.entityContextType !== EntityContextType.COLUMN &&
                    entity.entityContextType !== EntityContextType.COLUMN_CREATE) {
                    relatedEntities.push(entity);
                    result.push(entity);
                }
                return result;
            }
            if (entity.entityContextType === EntityContextType.COLUMN_CREATE) {
                columns.push(entity);
            }
            else if (entity.entityContextType === EntityContextType.TABLE_CREATE ||
                entity.entityContextType === EntityContextType.VIEW_CREATE) {
                mainEntity = entity;
                result.push(entity);
                return result;
            }
            else if (entity.entityContextType !== EntityContextType.COLUMN) {
                relatedEntities.push(entity);
                result.push(entity);
            }
            return result;
        }, []);
        if (mainEntity && columns.length) {
            if (isCommonEntityContext(mainEntity)) {
                mainEntity = Object.assign(mainEntity, {
                    columns,
                });
            }
        }
        if (mainEntity && relatedEntities.length) {
            if (isCommonEntityContext(mainEntity) || isFuncEntityContext(mainEntity)) {
                mainEntity = Object.assign(mainEntity, {
                    relatedEntities,
                });
            }
        }
        return finalEntities;
    }
    /**
     * Collect one CTE definition.
     * `endTokenIndex` is the closing token of this item only (not a following CTE).
     * Column names, when present, become the outward schema and do not replace the body query result.
     */
    collectCte(cteCtx, nameCtx, bodyCtx, endTokenIndex, columnNameCtxs = [], columnListCtx = null) {
        if (!nameCtx || endTokenIndex < 0)
            return;
        const entity = this.pushEntity(nameCtx, EntityContextType.TABLE, undefined, {
            declareType: TableDeclareType.EXPRESSION,
        });
        if (!entity || !isCommonEntityContext(entity))
            return;
        this._cteDefinitions.push({
            entity,
            name: entity.text,
            body: bodyCtx,
            columnNameCtxs,
            columnListCtx,
            endTokenIndex,
            scopeEndTokenIndex: this.cteScopeEndTokenIndex(cteCtx, endTokenIndex),
            outward: null,
        });
    }
    cteScopeEndTokenIndex(cteCtx, endTokenIndex) {
        var _a, _b, _c, _d, _e;
        let scopeEnd = endTokenIndex;
        let current = cteCtx.parent;
        while (current) {
            if (CTE_CLAUSE_CONTEXT_NAMES.has(current.constructor.name)) {
                scopeEnd = (_c = (_b = (_a = current.parent) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.tokenIndex) !== null && _c !== void 0 ? _c : endTokenIndex;
                break;
            }
            current = current.parent;
        }
        if (!current) {
            scopeEnd = (_e = (_d = this._stmtStack.peek()) === null || _d === void 0 ? void 0 : _d.position.endTokenIndex) !== null && _e !== void 0 ? _e : endTokenIndex;
        }
        // An incomplete FROM/JOIN stops the parsed query before the caret.
        // Keep the CTE visible until a semicolon or a closing paren leaves this query.
        return this.extendUnclosedScope(scopeEnd);
    }
    extendUnclosedScope(scopeEnd) {
        var _a;
        let depth = 0;
        let end = scopeEnd;
        for (let i = scopeEnd + 1; i < this._allTokens.length; i++) {
            const token = this._allTokens[i];
            if (token.channel === Token.HIDDEN_CHANNEL || token.type === Token.EOF)
                continue;
            const text = (_a = token.text) !== null && _a !== void 0 ? _a : '';
            if (text === ';')
                break;
            if (text === '(') {
                depth++;
            }
            else if (text === ')') {
                if (depth === 0)
                    break;
                depth--;
            }
            end = token.tokenIndex;
        }
        return end;
    }
    finalizeCteDefinitions() {
        this._cteDefinitions.forEach((cte) => {
            if (cte.outward) {
                cte.entity.relatedEntities = [cte.outward];
                return;
            }
            const fromColumnList = cte.columnListCtx
                ? this.createColumnListQueryResultFromTokens(cte.entity.belongStmt, this.columnTokens(cte.columnListCtx))
                : cte.columnNameCtxs.length
                    ? this.createColumnListQueryResult(cte.entity.belongStmt, cte.columnNameCtxs)
                    : null;
            const found = fromColumnList !== null && fromColumnList !== void 0 ? fromColumnList : this.findOutwardQueryResult(cte.body);
            // Column-list results are already a dedicated object. A body query
            // result is shared with the entity set, so dialects may copy it.
            const outward = fromColumnList !== null && fromColumnList !== void 0 ? fromColumnList : (found ? this.adaptOutwardQueryResult(found) : null);
            cte.outward = outward;
            if (outward) {
                cte.entity.relatedEntities = [outward];
            }
        });
    }
    /**
     * CTE outward schema defaults to the body query result itself.
     * Override when that result's text covers more than the select list.
     */
    adaptOutwardQueryResult(entity) {
        return entity;
    }
    sourceSlice(startIndex, endIndex) {
        return this._input.slice(startIndex, endIndex + 1);
    }
    findOutwardQueryResult(body) {
        var _a, _b, _c, _d;
        if (!(body === null || body === void 0 ? void 0 : body.start) || !body.stop)
            return null;
        const start = body.start.tokenIndex;
        const stop = body.stop.tokenIndex;
        let best = null;
        for (const entity of this._entitiesSet) {
            if (entity.entityContextType !== EntityContextType.QUERY_RESULT ||
                !isCommonEntityContext(entity)) {
                continue;
            }
            const tokenStart = entity.position.startTokenIndex;
            const tokenStop = entity.position.endTokenIndex;
            if (tokenStart < start || tokenStop > stop)
                continue;
            if (!best) {
                best = entity;
                continue;
            }
            const bestDepth = (_b = (_a = best.belongStmt) === null || _a === void 0 ? void 0 : _a.scopeDepth) !== null && _b !== void 0 ? _b : 0;
            const depth = (_d = (_c = entity.belongStmt) === null || _c === void 0 ? void 0 : _c.scopeDepth) !== null && _d !== void 0 ? _d : 0;
            if (depth < bestDepth ||
                (depth === bestDepth && tokenStart < best.position.startTokenIndex)) {
                best = entity;
            }
        }
        return best;
    }
    columnTokens(listCtx) {
        const tokens = [];
        const skip = new Set(['(', ')', ',', '.', '[', ']']);
        const visit = (ctx) => {
            var _a;
            for (let i = 0; i < ctx.getChildCount(); i++) {
                const child = ctx.getChild(i);
                if (child instanceof ParserRuleContext) {
                    visit(child);
                    continue;
                }
                if (child instanceof TerminalNode) {
                    const text = (_a = child.symbol.text) !== null && _a !== void 0 ? _a : '';
                    if (text && !skip.has(text))
                        tokens.push(child.symbol);
                }
            }
        };
        visit(listCtx);
        return tokens;
    }
    createColumnListQueryResultFromTokens(belongStmt, tokens) {
        const columns = [];
        tokens.forEach((token) => {
            const word = tokenToWord(token, this._input);
            if (!word.text.trim())
                return;
            columns.push({
                entityContextType: EntityContextType.COLUMN,
                text: word.text,
                position: {
                    startIndex: word.startIndex,
                    endIndex: word.endIndex,
                    line: word.line,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn,
                    startTokenIndex: token.tokenIndex,
                    endTokenIndex: token.tokenIndex,
                },
                belongStmt,
                declareType: ColumnDeclareType.LITERAL,
                relatedEntities: null,
                [AttrName.colType]: null,
                [AttrName.comment]: null,
                isAccessible: null,
            });
        });
        return this.wrapOutwardColumns(belongStmt, columns);
    }
    createColumnListQueryResult(belongStmt, columnNameCtxs) {
        const columns = [];
        columnNameCtxs.forEach((nameCtx) => {
            const column = toEntityContext(nameCtx, EntityContextType.COLUMN, this._input, belongStmt, undefined, { declareType: ColumnDeclareType.LITERAL });
            if (column && isColumnEntityContext(column) && column.text.trim()) {
                columns.push(column);
            }
        });
        return this.wrapOutwardColumns(belongStmt, columns);
    }
    wrapOutwardColumns(belongStmt, columns) {
        if (!columns.length)
            return null;
        const first = columns[0].position;
        const last = columns[columns.length - 1].position;
        return {
            entityContextType: EntityContextType.QUERY_RESULT,
            text: columns.map((column) => column.text).join(', '),
            position: {
                startIndex: first.startIndex,
                endIndex: last.endIndex,
                line: first.line,
                startColumn: first.startColumn,
                endColumn: last.endColumn,
                startTokenIndex: first.startTokenIndex,
                endTokenIndex: last.endTokenIndex,
            },
            belongStmt,
            relatedEntities: null,
            columns,
            [AttrName.comment]: null,
            isAccessible: null,
        };
    }
    bindCteReferences() {
        this._entitiesSet.forEach((entity) => {
            if (entity.entityContextType !== EntityContextType.TABLE ||
                !isCommonEntityContext(entity) ||
                entity.declareType !== TableDeclareType.LITERAL) {
                return;
            }
            const cte = this.resolveCte(entity.text, entity.position.startTokenIndex);
            if (!cte)
                return;
            entity.declareType = TableDeclareType.EXPRESSION;
            entity.relatedEntities = cte.outward ? [cte.outward] : null;
        });
    }
    markCteAccessibility() {
        const caretTokenIndex = this.getPrevNonHiddenTokenIndex(this._caretTokenIndex);
        if (!Number.isFinite(caretTokenIndex)) {
            this._cteDefinitions.forEach((cte) => {
                cte.entity.isAccessible = false;
            });
            return;
        }
        this._cteDefinitions.forEach((cte) => {
            cte.entity.isAccessible = this.resolveCte(cte.name, caretTokenIndex) === cte;
        });
    }
    /** Nearest preceding CTE whose scope covers `tokenIndex`. */
    resolveCte(name, tokenIndex) {
        let winner = null;
        this._cteDefinitions.forEach((cte) => {
            if (!sameIdent(cte.name, name))
                return;
            if (tokenIndex <= cte.endTokenIndex)
                return;
            if (tokenIndex > cte.scopeEndTokenIndex)
                return;
            if (!winner || cte.endTokenIndex > winner.endTokenIndex)
                winner = cte;
        });
        return winner;
    }
}
