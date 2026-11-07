import { ErrorNode, ParserRuleContext, Token } from 'antlr4ng';
import { TextPosition, WordPosition, WordRange } from './textAndWord';
import { EntityContextType } from './types';
/**
 * TODO: more stmt type should be supported.
 */
export declare enum StmtContextType {
    /** A self-contained and complete statement */
    COMMON_STMT = "commonStmt",
    CREATE_CATALOG_STMT = "createCatalogStmt",
    CREATE_DATABASE_STMT = "createDatabaseStmt",
    CREATE_TABLE_STMT = "createTableStmt",
    CREATE_VIEW_STMT = "createViewStmt",
    SELECT_STMT = "selectStmt",
    INSERT_STMT = "insertStmt",
    CREATE_FUNCTION_STMT = "createFunctionStmt",
    ALTER_TABLE_STMT = "alterTableStmt"
}
export interface StmtContext {
    readonly stmtContextType: StmtContextType;
    readonly position: TextPosition;
    readonly rootStmt: StmtContext | null;
    readonly parentStmt: StmtContext | null;
    readonly isContainCaret?: boolean;
    readonly scopeDepth: number;
    readonly text: string;
}
export declare function toStmtContext(ctx: ParserRuleContext, type: StmtContextType, input: string, rootStmt: StmtContext | null, parentStmt: StmtContext | null, isContainCaret?: boolean): StmtContext | null;
/**
 * entity's attribute
 * @key comment: entity's comment attribute
 * @key colType: column entity's type attribute
 * @key alias: entity's alias attribute
 * */
export declare enum AttrName {
    comment = "_comment",
    colType = "_colType",
    alias = "_alias"
}
/**
 * ParserRuleContext with custom attributes
 * */
type ParserRuleContextWithAttr = ParserRuleContext & {
    [K in AttrName]?: Token;
};
/**
 * Function's arguments
 * */
export interface Argument {
    argMode?: WordRange;
    argName?: WordRange;
    argType: WordRange;
}
/**
 * Base interface for all entity contexts in SQL parsing
 */
export interface BaseEntityContext {
    /** The type of entity context */
    readonly entityContextType: EntityContextType;
    /** The text representation of this entity */
    readonly text: string;
    /** The position information for this entity */
    readonly position: WordPosition;
    /** The statement this entity belongs to */
    readonly belongStmt: StmtContext;
    /** Reference to another entity or string */
    reference?: string | EntityContext;
    /** Whether the entity is accessible from the caret position, **ONLY** applicable to table entity */
    isAccessible: boolean | null;
    /** Entities related to this entity */
    relatedEntities: EntityContext[] | null;
    /** Comment attribute for this entity */
    [AttrName.comment]: WordRange | null;
    /** Alias attribute for this entity */
    [AttrName.alias]?: WordRange | null;
}
/**
 * Types of column declarations
 */
export declare enum ColumnDeclareType {
    /** Literal column name */
    LITERAL = 0,
    /** Using asterisk syntax (tableName.*) */
    ALL = 1,
    /** Complex expressions like subqueries, case statements, function calls */
    EXPRESSION = 2
}
/**
 * Types of table declarations
 */
export declare enum TableDeclareType {
    /** Regular table reference */
    LITERAL = 0,
    /** Table defined by expression (e.g., subquery) */
    EXPRESSION = 1
}
export interface CommonEntityContext extends BaseEntityContext {
    /** Columns associated with this entity */
    columns?: ColumnEntityContext[];
    /** Type of table declaration */
    declareType?: TableDeclareType;
}
export interface ColumnEntityContext extends BaseEntityContext {
    /** Type of column declaration */
    declareType?: ColumnDeclareType;
    /** Column type information */
    [AttrName.colType]: WordRange | null;
    /** Column alias */
    [AttrName.alias]?: WordRange | null;
}
export interface FuncEntityContext extends BaseEntityContext {
    /** Function arguments */
    arguments: Argument[] | null;
    /** Function return value */
    returns?: Argument;
}
export type EntityContext = CommonEntityContext | FuncEntityContext | ColumnEntityContext;
export declare function isCommonEntityContext(entity: EntityContext): entity is CommonEntityContext;
export declare function isFuncEntityContext(entity: EntityContext): entity is FuncEntityContext;
export declare function isColumnEntityContext(entity: EntityContext): entity is ColumnEntityContext;
/**
 * Check if ctx is a child node of a specific rule type
 */
export declare function isChildContextOf(ctx: ParserRuleContext, parentRuleIndex: number): boolean;
/**
 *  what we need when collect attribute information
 * */
interface AttrInfo {
    attrName: AttrName;
    endContextList: string[];
}
interface MetaInfo {
    declareType: TableDeclareType | ColumnDeclareType;
}
export declare function toEntityContext(ctx: ParserRuleContext, type: EntityContextType, input: string, belongStmt: StmtContext, attrInfo?: AttrInfo[], metaInfo?: MetaInfo): EntityContext | null;
export declare function findAttribute(ctx: ParserRuleContextWithAttr | null, keyName: AttrName, endContextNameList: string[]): Token | null;
/**
 * @todo: Handle alias, includes column alias, table alias, query as alias and so on.
 * @todo: [may be need] Combine the entities in each clause.
 */
export declare abstract class EntityCollector {
    constructor(input: string, allTokens?: Token[], caretTokenIndex?: number);
    private readonly _input;
    private readonly _allTokens;
    private readonly _caretTokenIndex;
    private readonly _entitiesSet;
    /**
     * Contexts whose source slice contains a parse error.
     * Error recovery can stretch a rule context across a whole clause, so `ctxToText`
     * would return e.g. `JOIN myOwn\nORDER BY 1` where a name is expected.
     */
    private readonly _errorContexts;
    /** Staging statements that have already entered. */
    private readonly _stmtStack;
    /** Staging entities inside a single statement or clause. */
    private readonly _entityStack;
    /**
     * CTE definitions collected while walking.
     * Visibility is sequential inside the WITH owner's range, and references bind to the nearest preceding CTE.
     */
    private _cteDefinitions;
    /**
     * The scope depth of the statement containing the caret.
     * This is used to determine the accessibility of entities.
     */
    private _caretStmtScopeDepth;
    /**
     * The nearest statement containing the caret,
     * Not used for now.
     */
    private _caretStmt;
    /**
     * Always point to the first non-commonStmt at the bottom of the _stmtStack,
     * unless there are only commonStmts in the _stmtStack.
     * */
    private _rootStmt;
    visitTerminal(): void;
    visitErrorNode(node: ErrorNode): void;
    enterEveryRule(): void;
    exitEveryRule(): void;
    getRootStmt(): StmtContext | null;
    getEntities(): EntityContext[];
    enterProgram(): void;
    exitProgram(): void;
    /**
     * Adds accessibility markers to entities
     * @param entities The list of entities to process
     */
    protected attachAccessibleToEntities(entities: EntityContext[]): void;
    /**
     * Attach query result to column if the column is derived from expression.
     */
    protected attachQueryResultToColumn(column: ColumnEntityContext, queryResults: CommonEntityContext[]): void;
    /**
     * Attach related columns to query result
     */
    protected attachColumnsToQueryResult(queryResult: CommonEntityContext, columns: ColumnEntityContext[]): void;
    /**
     * Attach query result to table if the table is derived from expression.
     */
    protected attachQueryResultToTable(table: CommonEntityContext, queryResults: CommonEntityContext[]): void;
    /**
     * Gets query result entities inside a statement
     * @param stmt The statement to search within
     * @returns Array of query result entity contexts
     */
    protected getQueryResultEntitiesInsideStmt(stmt: StmtContext): CommonEntityContext[];
    /**
     * The antlr4 will ignore hidden tokens, if we type whitespace at the end of a statement,
     * the whitespace token will not as stop token, so we consider the whitespace token as a part of the nonhidden token in front of it
     */
    protected getPrevNonHiddenTokenIndex(caretTokenIndex: number): number;
    protected pushStmt(ctx: ParserRuleContext, type: StmtContextType): StmtContext | null;
    protected popStmt(): StmtContext;
    protected pushEntity(ctx: ParserRuleContext, type: EntityContextType, attrInfo?: AttrInfo[], metaInfo?: MetaInfo): EntityContext | null;
    /**
     * Combine entities that inside a single statement.
     * e.g. combine tableName and column if they are inside a same createTableStatement.
     * Then add combined entities into result.
     */
    private combineEntitiesAndAdd;
    /**
     * Combined all entities under a rootStmt.
     */
    protected combineRootStmtEntities(stmtContext: StmtContext, entitiesInsideStmt: EntityContext[]): EntityContext[];
    protected combineQueryResultStmtEntities(stmtContext: StmtContext, entitiesInsideStmt: EntityContext[]): EntityContext[];
    protected combineFromTableSource(stmtContext: StmtContext, entitiesInsideStmt: EntityContext[]): EntityContext[];
    protected combineCreateTableOrViewStmtEntities(stmtContext: StmtContext, entitiesInsideStmt: EntityContext[]): EntityContext[];
    /**
     * Collect one CTE definition.
     * `endTokenIndex` is the closing token of this item only (not a following CTE).
     * Column names, when present, become the outward schema and do not replace the body query result.
     */
    protected collectCte(cteCtx: ParserRuleContext, nameCtx: ParserRuleContext | null, bodyCtx: ParserRuleContext | null, endTokenIndex: number, columnNameCtxs?: ParserRuleContext[], columnListCtx?: ParserRuleContext | null): void;
    private cteScopeEndTokenIndex;
    private extendUnclosedScope;
    private finalizeCteDefinitions;
    /**
     * CTE outward schema defaults to the body query result itself.
     * Override when that result's text covers more than the select list.
     */
    protected adaptOutwardQueryResult(entity: CommonEntityContext): CommonEntityContext;
    protected sourceSlice(startIndex: number, endIndex: number): string;
    private findOutwardQueryResult;
    private columnTokens;
    private createColumnListQueryResultFromTokens;
    private createColumnListQueryResult;
    private wrapOutwardColumns;
    private bindCteReferences;
    private markCteAccessibility;
    /** Nearest preceding CTE whose scope covers `tokenIndex`. */
    private resolveCte;
}
export {};
