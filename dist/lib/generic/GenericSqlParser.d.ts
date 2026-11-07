import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";
import { GenericSqlListener } from "./GenericSqlListener.js";
import { GenericSqlVisitor } from "./GenericSqlVisitor.js";
import { SQLParserBase } from '../SQLParserBase';
export declare class GenericSqlParser extends SQLParserBase {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly KW_ADD = 5;
    static readonly KW_ALL = 6;
    static readonly KW_ALTER = 7;
    static readonly KW_AND = 8;
    static readonly KW_AS = 9;
    static readonly KW_ASC = 10;
    static readonly KW_BETWEEN = 11;
    static readonly KW_BIGINT = 12;
    static readonly KW_BINARY = 13;
    static readonly KW_BOOLEAN = 14;
    static readonly KW_BY = 15;
    static readonly KW_CASE = 16;
    static readonly KW_CAST = 17;
    static readonly KW_CHAR = 18;
    static readonly KW_CHECK = 19;
    static readonly KW_COALESCE = 20;
    static readonly KW_COLUMN = 21;
    static readonly KW_CONSTRAINT = 22;
    static readonly KW_CREATE = 23;
    static readonly KW_CROSS = 24;
    static readonly KW_DATE = 25;
    static readonly KW_DECIMAL = 26;
    static readonly KW_DEFAULT = 27;
    static readonly KW_DELETE = 28;
    static readonly KW_DESC = 29;
    static readonly KW_DISTINCT = 30;
    static readonly KW_DOUBLE = 31;
    static readonly KW_DROP = 32;
    static readonly KW_ELSE = 33;
    static readonly KW_END = 34;
    static readonly KW_ESCAPE = 35;
    static readonly KW_EXCEPT = 36;
    static readonly KW_EXISTS = 37;
    static readonly KW_FALSE = 38;
    static readonly KW_FIRST = 39;
    static readonly KW_FLOAT = 40;
    static readonly KW_FOREIGN = 41;
    static readonly KW_FROM = 42;
    static readonly KW_FULL = 43;
    static readonly KW_GROUP = 44;
    static readonly KW_HAVING = 45;
    static readonly KW_IF = 46;
    static readonly KW_IN = 47;
    static readonly KW_INNER = 48;
    static readonly KW_INSERT = 49;
    static readonly KW_INT = 50;
    static readonly KW_INTEGER = 51;
    static readonly KW_INTERSECT = 52;
    static readonly KW_INTO = 53;
    static readonly KW_IS = 54;
    static readonly KW_JOIN = 55;
    static readonly KW_KEY = 56;
    static readonly KW_LAST = 57;
    static readonly KW_LEFT = 58;
    static readonly KW_LIKE = 59;
    static readonly KW_LIMIT = 60;
    static readonly KW_NOT = 61;
    static readonly KW_NULL = 62;
    static readonly KW_NULLIF = 63;
    static readonly KW_NULLS = 64;
    static readonly KW_NUMERIC = 65;
    static readonly KW_OFFSET = 66;
    static readonly KW_ON = 67;
    static readonly KW_OR = 68;
    static readonly KW_ORDER = 69;
    static readonly KW_OUTER = 70;
    static readonly KW_PRIMARY = 71;
    static readonly KW_RECURSIVE = 72;
    static readonly KW_REFERENCES = 73;
    static readonly KW_RENAME = 74;
    static readonly KW_RIGHT = 75;
    static readonly KW_SELECT = 76;
    static readonly KW_SET = 77;
    static readonly KW_SMALLINT = 78;
    static readonly KW_TABLE = 79;
    static readonly KW_TEXT = 80;
    static readonly KW_THEN = 81;
    static readonly KW_TIME = 82;
    static readonly KW_TIMESTAMP = 83;
    static readonly KW_TINYINT = 84;
    static readonly KW_TO = 85;
    static readonly KW_TRUE = 86;
    static readonly KW_UNION = 87;
    static readonly KW_UNIQUE = 88;
    static readonly KW_UPDATE = 89;
    static readonly KW_VARCHAR = 90;
    static readonly KW_VARBINARY = 91;
    static readonly KW_WHEN = 92;
    static readonly KW_WHERE = 93;
    static readonly KW_WITH = 94;
    static readonly EQ = 95;
    static readonly NEQ = 96;
    static readonly LT = 97;
    static readonly LTE = 98;
    static readonly GT = 99;
    static readonly GTE = 100;
    static readonly PLUS = 101;
    static readonly MINUS = 102;
    static readonly ASTERISK = 103;
    static readonly SLASH = 104;
    static readonly PERCENT = 105;
    static readonly CONCAT = 106;
    static readonly QUESTION_MARK = 107;
    static readonly SEMICOLON = 108;
    static readonly STRING = 109;
    static readonly BINARY_LITERAL = 110;
    static readonly INTEGER_VALUE = 111;
    static readonly DECIMAL_VALUE = 112;
    static readonly DOUBLE_VALUE = 113;
    static readonly IDENTIFIER = 114;
    static readonly DIGIT_IDENTIFIER = 115;
    static readonly QUOTED_IDENTIFIER = 116;
    static readonly BACKQUOTED_IDENTIFIER = 117;
    static readonly LINE_COMMENT = 118;
    static readonly BRACKETED_COMMENT = 119;
    static readonly WHITE_SPACE = 120;
    static readonly UNRECOGNIZED = 121;
    static readonly DELIMITER = 122;
    static readonly RULE_program = 0;
    static readonly RULE_statements = 1;
    static readonly RULE_singleStatement = 2;
    static readonly RULE_statement = 3;
    static readonly RULE_queryStatement = 4;
    static readonly RULE_withClause = 5;
    static readonly RULE_namedQuery = 6;
    static readonly RULE_cteColumnList = 7;
    static readonly RULE_queryNoWith = 8;
    static readonly RULE_queryTerm = 9;
    static readonly RULE_queryPrimary = 10;
    static readonly RULE_querySpecification = 11;
    static readonly RULE_setQuantifier = 12;
    static readonly RULE_selectItem = 13;
    static readonly RULE_fromClause = 14;
    static readonly RULE_relation = 15;
    static readonly RULE_joinType = 16;
    static readonly RULE_aliasedRelation = 17;
    static readonly RULE_relationPrimary = 18;
    static readonly RULE_whereClause = 19;
    static readonly RULE_groupByClause = 20;
    static readonly RULE_havingClause = 21;
    static readonly RULE_orderByClause = 22;
    static readonly RULE_sortItem = 23;
    static readonly RULE_limitClause = 24;
    static readonly RULE_insertStatement = 25;
    static readonly RULE_columnList = 26;
    static readonly RULE_updateStatement = 27;
    static readonly RULE_updateAssignment = 28;
    static readonly RULE_deleteStatement = 29;
    static readonly RULE_createTableStatement = 30;
    static readonly RULE_tableElement = 31;
    static readonly RULE_columnDefinition = 32;
    static readonly RULE_columnRefCreate = 33;
    static readonly RULE_tableConstraint = 34;
    static readonly RULE_alterTableStatement = 35;
    static readonly RULE_dropTableStatement = 36;
    static readonly RULE_expression = 37;
    static readonly RULE_booleanExpression = 38;
    static readonly RULE_predicatedExpression = 39;
    static readonly RULE_predicate = 40;
    static readonly RULE_comparisonOperator = 41;
    static readonly RULE_valueExpression = 42;
    static readonly RULE_primaryExpression = 43;
    static readonly RULE_whenClause = 44;
    static readonly RULE_subqueryExpression = 45;
    static readonly RULE_dataType = 46;
    static readonly RULE_properties = 47;
    static readonly RULE_property = 48;
    static readonly RULE_literal = 49;
    static readonly RULE_identifier = 50;
    static readonly RULE_qualifiedName = 51;
    static readonly RULE_qualifiedNameAllowEmpty = 52;
    static readonly RULE_columnRef = 53;
    static readonly RULE_columnName = 54;
    static readonly RULE_emptyColumn = 55;
    static readonly RULE_tableName = 56;
    static readonly RULE_tableNameCreate = 57;
    static readonly RULE_functionName = 58;
    static readonly RULE_nonReserved = 59;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException;
    constructor(input: antlr.TokenStream);
    program(): ProgramContext;
    statements(): StatementsContext;
    singleStatement(): SingleStatementContext;
    statement(): StatementContext;
    queryStatement(): QueryStatementContext;
    withClause(): WithClauseContext;
    namedQuery(): NamedQueryContext;
    cteColumnList(): CteColumnListContext;
    queryNoWith(): QueryNoWithContext;
    queryTerm(): QueryTermContext;
    queryPrimary(): QueryPrimaryContext;
    querySpecification(): QuerySpecificationContext;
    setQuantifier(): SetQuantifierContext;
    selectItem(): SelectItemContext;
    fromClause(): FromClauseContext;
    relation(): RelationContext;
    relation(_p: number): RelationContext;
    joinType(): JoinTypeContext;
    aliasedRelation(): AliasedRelationContext;
    relationPrimary(): RelationPrimaryContext;
    whereClause(): WhereClauseContext;
    groupByClause(): GroupByClauseContext;
    havingClause(): HavingClauseContext;
    orderByClause(): OrderByClauseContext;
    sortItem(): SortItemContext;
    limitClause(): LimitClauseContext;
    insertStatement(): InsertStatementContext;
    columnList(): ColumnListContext;
    updateStatement(): UpdateStatementContext;
    updateAssignment(): UpdateAssignmentContext;
    deleteStatement(): DeleteStatementContext;
    createTableStatement(): CreateTableStatementContext;
    tableElement(): TableElementContext;
    columnDefinition(): ColumnDefinitionContext;
    columnRefCreate(): ColumnRefCreateContext;
    tableConstraint(): TableConstraintContext;
    alterTableStatement(): AlterTableStatementContext;
    dropTableStatement(): DropTableStatementContext;
    expression(): ExpressionContext;
    booleanExpression(): BooleanExpressionContext;
    booleanExpression(_p: number): BooleanExpressionContext;
    predicatedExpression(): PredicatedExpressionContext;
    predicate(): PredicateContext;
    comparisonOperator(): ComparisonOperatorContext;
    valueExpression(): ValueExpressionContext;
    valueExpression(_p: number): ValueExpressionContext;
    primaryExpression(): PrimaryExpressionContext;
    whenClause(): WhenClauseContext;
    subqueryExpression(): SubqueryExpressionContext;
    dataType(): DataTypeContext;
    properties(): PropertiesContext;
    property(): PropertyContext;
    literal(): LiteralContext;
    identifier(): IdentifierContext;
    qualifiedName(): QualifiedNameContext;
    qualifiedNameAllowEmpty(): QualifiedNameAllowEmptyContext;
    columnRef(): ColumnRefContext;
    columnName(): ColumnNameContext;
    emptyColumn(): EmptyColumnContext;
    tableName(): TableNameContext;
    tableNameCreate(): TableNameCreateContext;
    functionName(): FunctionNameContext;
    nonReserved(): NonReservedContext;
    sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
    private selectItem_sempred;
    private relation_sempred;
    private whereClause_sempred;
    private havingClause_sempred;
    private booleanExpression_sempred;
    private valueExpression_sempred;
    private qualifiedNameAllowEmpty_sempred;
    private columnRef_sempred;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): antlr.ATN;
    private static readonly vocabulary;
    get vocabulary(): antlr.Vocabulary;
    private static readonly decisionsToDFA;
}
export declare class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EOF(): antlr.TerminalNode;
    statements(): StatementsContext[];
    statements(i: number): StatementsContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class StatementsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    singleStatement(): SingleStatementContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    statement(): StatementContext;
    SEMICOLON(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class StatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: StatementContext): void;
}
export declare class CreateTableContext extends StatementContext {
    constructor(ctx: StatementContext);
    createTableStatement(): CreateTableStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class StatementDefaultContext extends StatementContext {
    constructor(ctx: StatementContext);
    queryStatement(): QueryStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class InsertContext extends StatementContext {
    constructor(ctx: StatementContext);
    insertStatement(): InsertStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class UpdateContext extends StatementContext {
    constructor(ctx: StatementContext);
    updateStatement(): UpdateStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DeleteContext extends StatementContext {
    constructor(ctx: StatementContext);
    deleteStatement(): DeleteStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class AlterTableContext extends StatementContext {
    constructor(ctx: StatementContext);
    alterTableStatement(): AlterTableStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DropTableContext extends StatementContext {
    constructor(ctx: StatementContext);
    dropTableStatement(): DropTableStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QueryStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    queryNoWith(): QueryNoWithContext;
    withClause(): WithClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class WithClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WITH(): antlr.TerminalNode;
    namedQuery(): NamedQueryContext[];
    namedQuery(i: number): NamedQueryContext | null;
    KW_RECURSIVE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class NamedQueryContext extends antlr.ParserRuleContext {
    _name?: IdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_AS(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    identifier(): IdentifierContext;
    cteColumnList(): CteColumnListContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class CteColumnListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QueryNoWithContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    queryTerm(): QueryTermContext[];
    queryTerm(i: number): QueryTermContext | null;
    KW_UNION(): antlr.TerminalNode[];
    KW_UNION(i: number): antlr.TerminalNode | null;
    KW_INTERSECT(): antlr.TerminalNode[];
    KW_INTERSECT(i: number): antlr.TerminalNode | null;
    KW_EXCEPT(): antlr.TerminalNode[];
    KW_EXCEPT(i: number): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode[];
    KW_ALL(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QueryTermContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    queryPrimary(): QueryPrimaryContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QueryPrimaryContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    querySpecification(): QuerySpecificationContext | null;
    queryStatement(): QueryStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QuerySpecificationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_SELECT(): antlr.TerminalNode;
    selectItem(): SelectItemContext[];
    selectItem(i: number): SelectItemContext | null;
    setQuantifier(): SetQuantifierContext | null;
    fromClause(): FromClauseContext | null;
    whereClause(): WhereClauseContext | null;
    groupByClause(): GroupByClauseContext | null;
    havingClause(): HavingClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DISTINCT(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SelectItemContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectItemContext): void;
}
export declare class SelectExpressionElementContext extends SelectItemContext {
    _alias?: IdentifierContext;
    constructor(ctx: SelectItemContext);
    expression(): ExpressionContext;
    identifier(): IdentifierContext | null;
    KW_AS(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SelectEmptyElementContext extends SelectItemContext {
    constructor(ctx: SelectItemContext);
    emptyColumn(): EmptyColumnContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SelectStarElementContext extends SelectItemContext {
    constructor(ctx: SelectItemContext);
    qualifiedName(): QualifiedNameContext;
    ASTERISK(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SelectAllElementContext extends SelectItemContext {
    constructor(ctx: SelectItemContext);
    ASTERISK(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_FROM(): antlr.TerminalNode;
    relation(): RelationContext[];
    relation(i: number): RelationContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class RelationContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RelationContext): void;
}
export declare class SimpleRelationContext extends RelationContext {
    constructor(ctx: RelationContext);
    aliasedRelation(): AliasedRelationContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class JoinRelationContext extends RelationContext {
    _left?: RelationContext;
    _right?: RelationContext;
    _condition?: ExpressionContext;
    constructor(ctx: RelationContext);
    joinType(): JoinTypeContext;
    KW_JOIN(): antlr.TerminalNode;
    KW_ON(): antlr.TerminalNode;
    relation(): RelationContext[];
    relation(i: number): RelationContext | null;
    expression(): ExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class JoinTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_INNER(): antlr.TerminalNode | null;
    KW_LEFT(): antlr.TerminalNode | null;
    KW_OUTER(): antlr.TerminalNode | null;
    KW_RIGHT(): antlr.TerminalNode | null;
    KW_FULL(): antlr.TerminalNode | null;
    KW_CROSS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class AliasedRelationContext extends antlr.ParserRuleContext {
    _alias?: IdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    relationPrimary(): RelationPrimaryContext;
    identifier(): IdentifierContext | null;
    KW_AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class RelationPrimaryContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RelationPrimaryContext): void;
}
export declare class SubqueryRelationContext extends RelationPrimaryContext {
    constructor(ctx: RelationPrimaryContext);
    queryStatement(): QueryStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class TableNameRelationContext extends RelationPrimaryContext {
    constructor(ctx: RelationPrimaryContext);
    tableName(): TableNameContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class WhereClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WHERE(): antlr.TerminalNode;
    expression(): ExpressionContext | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_GROUP(): antlr.TerminalNode;
    KW_BY(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    setQuantifier(): SetQuantifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_HAVING(): antlr.TerminalNode;
    expression(): ExpressionContext | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class OrderByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ORDER(): antlr.TerminalNode;
    KW_BY(): antlr.TerminalNode;
    sortItem(): SortItemContext[];
    sortItem(i: number): SortItemContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SortItemContext extends antlr.ParserRuleContext {
    _ordering?: Token | null;
    _nullOrdering?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext;
    KW_NULLS(): antlr.TerminalNode | null;
    KW_ASC(): antlr.TerminalNode | null;
    KW_DESC(): antlr.TerminalNode | null;
    KW_FIRST(): antlr.TerminalNode | null;
    KW_LAST(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
    _limit?: ExpressionContext;
    _offset?: ExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_LIMIT(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    KW_OFFSET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class InsertStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_INSERT(): antlr.TerminalNode;
    KW_INTO(): antlr.TerminalNode;
    tableName(): TableNameContext;
    queryStatement(): QueryStatementContext;
    columnList(): ColumnListContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ColumnListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnRef(): ColumnRefContext[];
    columnRef(i: number): ColumnRefContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class UpdateStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_UPDATE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    KW_SET(): antlr.TerminalNode;
    updateAssignment(): UpdateAssignmentContext[];
    updateAssignment(i: number): UpdateAssignmentContext | null;
    whereClause(): WhereClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class UpdateAssignmentContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnRef(): ColumnRefContext;
    EQ(): antlr.TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DeleteStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DELETE(): antlr.TerminalNode;
    KW_FROM(): antlr.TerminalNode;
    tableName(): TableNameContext;
    whereClause(): WhereClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class CreateTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tableNameCreate(): TableNameCreateContext;
    tableElement(): TableElementContext[];
    tableElement(i: number): TableElementContext | null;
    KW_IF(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    KW_EXISTS(): antlr.TerminalNode | null;
    KW_WITH(): antlr.TerminalNode | null;
    properties(): PropertiesContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class TableElementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnDefinition(): ColumnDefinitionContext | null;
    tableConstraint(): TableConstraintContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ColumnDefinitionContext extends antlr.ParserRuleContext {
    _colType?: DataTypeContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnRefCreate(): ColumnRefCreateContext;
    dataType(): DataTypeContext;
    KW_NOT(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode | null;
    KW_DEFAULT(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    KW_PRIMARY(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ColumnRefCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class TableConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PRIMARY(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    columnRef(): ColumnRefContext[];
    columnRef(i: number): ColumnRefContext | null;
    KW_UNIQUE(): antlr.TerminalNode | null;
    KW_CHECK(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    KW_FOREIGN(): antlr.TerminalNode | null;
    KW_REFERENCES(): antlr.TerminalNode | null;
    tableName(): TableNameContext | null;
    KW_CONSTRAINT(): antlr.TerminalNode | null;
    identifier(): IdentifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class AlterTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode[];
    KW_ALTER(i: number): antlr.TerminalNode | null;
    KW_TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    KW_ADD(): antlr.TerminalNode | null;
    KW_COLUMN(): antlr.TerminalNode | null;
    columnDefinition(): ColumnDefinitionContext | null;
    KW_DROP(): antlr.TerminalNode | null;
    columnRef(): ColumnRefContext | null;
    KW_RENAME(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    tableNameCreate(): TableNameCreateContext | null;
    KW_SET(): antlr.TerminalNode | null;
    KW_DEFAULT(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    KW_IF(): antlr.TerminalNode[];
    KW_IF(i: number): antlr.TerminalNode | null;
    KW_EXISTS(): antlr.TerminalNode[];
    KW_EXISTS(i: number): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DropTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tableName(): TableNameContext;
    KW_IF(): antlr.TerminalNode | null;
    KW_EXISTS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    booleanExpression(): BooleanExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class BooleanExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: BooleanExpressionContext): void;
}
export declare class OrExpressionContext extends BooleanExpressionContext {
    _left?: BooleanExpressionContext;
    _right?: BooleanExpressionContext;
    constructor(ctx: BooleanExpressionContext);
    KW_OR(): antlr.TerminalNode;
    booleanExpression(): BooleanExpressionContext[];
    booleanExpression(i: number): BooleanExpressionContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class AndExpressionContext extends BooleanExpressionContext {
    _left?: BooleanExpressionContext;
    _right?: BooleanExpressionContext;
    constructor(ctx: BooleanExpressionContext);
    KW_AND(): antlr.TerminalNode;
    booleanExpression(): BooleanExpressionContext[];
    booleanExpression(i: number): BooleanExpressionContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class PredicatedContext extends BooleanExpressionContext {
    constructor(ctx: BooleanExpressionContext);
    predicatedExpression(): PredicatedExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class NotExpressionContext extends BooleanExpressionContext {
    constructor(ctx: BooleanExpressionContext);
    KW_NOT(): antlr.TerminalNode;
    booleanExpression(): BooleanExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class PredicatedExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    valueExpression(): ValueExpressionContext;
    predicate(): PredicateContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PredicateContext): void;
}
export declare class ComparisonPredicateContext extends PredicateContext {
    _right?: ValueExpressionContext;
    constructor(ctx: PredicateContext);
    comparisonOperator(): ComparisonOperatorContext;
    valueExpression(): ValueExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class InPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    KW_IN(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    KW_NOT(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class InSubqueryPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    KW_IN(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    KW_NOT(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class BetweenPredicateContext extends PredicateContext {
    _lower?: ValueExpressionContext;
    _upper?: ValueExpressionContext;
    constructor(ctx: PredicateContext);
    KW_BETWEEN(): antlr.TerminalNode;
    KW_AND(): antlr.TerminalNode;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    KW_NOT(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class LikePredicateContext extends PredicateContext {
    _pattern?: ValueExpressionContext;
    _escape?: ValueExpressionContext;
    constructor(ctx: PredicateContext);
    KW_LIKE(): antlr.TerminalNode;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    KW_NOT(): antlr.TerminalNode | null;
    KW_ESCAPE(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class NullPredicateContext extends PredicateContext {
    constructor(ctx: PredicateContext);
    KW_IS(): antlr.TerminalNode;
    KW_NULL(): antlr.TerminalNode;
    KW_NOT(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DistinctFromPredicateContext extends PredicateContext {
    _right?: ValueExpressionContext;
    constructor(ctx: PredicateContext);
    KW_IS(): antlr.TerminalNode;
    KW_DISTINCT(): antlr.TerminalNode;
    KW_FROM(): antlr.TerminalNode;
    valueExpression(): ValueExpressionContext;
    KW_NOT(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EQ(): antlr.TerminalNode | null;
    NEQ(): antlr.TerminalNode | null;
    LT(): antlr.TerminalNode | null;
    LTE(): antlr.TerminalNode | null;
    GT(): antlr.TerminalNode | null;
    GTE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ValueExpressionContext): void;
}
export declare class ValueExpressionDefaultContext extends ValueExpressionContext {
    constructor(ctx: ValueExpressionContext);
    primaryExpression(): PrimaryExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ConcatenationContext extends ValueExpressionContext {
    _left?: ValueExpressionContext;
    _right?: ValueExpressionContext;
    constructor(ctx: ValueExpressionContext);
    CONCAT(): antlr.TerminalNode;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ArithmeticBinaryContext extends ValueExpressionContext {
    _left?: ValueExpressionContext;
    _operator?: Token | null;
    _right?: ValueExpressionContext;
    constructor(ctx: ValueExpressionContext);
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    ASTERISK(): antlr.TerminalNode | null;
    SLASH(): antlr.TerminalNode | null;
    PERCENT(): antlr.TerminalNode | null;
    PLUS(): antlr.TerminalNode | null;
    MINUS(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ArithmeticUnaryContext extends ValueExpressionContext {
    _operator?: Token | null;
    constructor(ctx: ValueExpressionContext);
    valueExpression(): ValueExpressionContext;
    MINUS(): antlr.TerminalNode | null;
    PLUS(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class PrimaryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrimaryExpressionContext): void;
}
export declare class SubqueryExpressionDefaultContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    subqueryExpression(): SubqueryExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class CastExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_CAST(): antlr.TerminalNode;
    expression(): ExpressionContext;
    KW_AS(): antlr.TerminalNode;
    dataType(): DataTypeContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class CoalesceExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_COALESCE(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ColumnReferenceContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    columnName(): ColumnNameContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    expression(): ExpressionContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ExistsExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_EXISTS(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    functionName(): FunctionNameContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    setQuantifier(): SetQuantifierContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class LiteralExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    literal(): LiteralContext;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SearchedCaseExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_CASE(): antlr.TerminalNode;
    KW_END(): antlr.TerminalNode;
    whenClause(): WhenClauseContext[];
    whenClause(i: number): WhenClauseContext | null;
    KW_ELSE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class NullIfExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_NULLIF(): antlr.TerminalNode;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SimpleCaseExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_CASE(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    KW_END(): antlr.TerminalNode;
    whenClause(): WhenClauseContext[];
    whenClause(i: number): WhenClauseContext | null;
    KW_ELSE(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class WhenClauseContext extends antlr.ParserRuleContext {
    _condition?: ExpressionContext;
    _result?: ExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WHEN(): antlr.TerminalNode;
    KW_THEN(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    queryStatement(): QueryStatementContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DataTypeContext extends antlr.ParserRuleContext {
    _precision?: Token | null;
    _scale?: Token | null;
    _maxLength?: Token | null;
    _length?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_BOOLEAN(): antlr.TerminalNode | null;
    KW_TINYINT(): antlr.TerminalNode | null;
    KW_SMALLINT(): antlr.TerminalNode | null;
    KW_INT(): antlr.TerminalNode | null;
    KW_INTEGER(): antlr.TerminalNode | null;
    KW_BIGINT(): antlr.TerminalNode | null;
    KW_FLOAT(): antlr.TerminalNode | null;
    KW_DOUBLE(): antlr.TerminalNode | null;
    KW_DECIMAL(): antlr.TerminalNode | null;
    INTEGER_VALUE(): antlr.TerminalNode[];
    INTEGER_VALUE(i: number): antlr.TerminalNode | null;
    KW_NUMERIC(): antlr.TerminalNode | null;
    KW_VARCHAR(): antlr.TerminalNode | null;
    KW_CHAR(): antlr.TerminalNode | null;
    KW_TEXT(): antlr.TerminalNode | null;
    KW_DATE(): antlr.TerminalNode | null;
    KW_TIME(): antlr.TerminalNode | null;
    KW_TIMESTAMP(): antlr.TerminalNode | null;
    KW_BINARY(): antlr.TerminalNode | null;
    KW_VARBINARY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class PropertiesContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    property(): PropertyContext[];
    property(i: number): PropertyContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class PropertyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    EQ(): antlr.TerminalNode;
    literal(): LiteralContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class LiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LiteralContext): void;
}
export declare class BinaryLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    BINARY_LITERAL(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DecimalLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    DECIMAL_VALUE(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class NullLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    KW_NULL(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    STRING(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class DoubleLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    DOUBLE_VALUE(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class IntegerLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    INTEGER_VALUE(): antlr.TerminalNode;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends LiteralContext {
    constructor(ctx: LiteralContext);
    KW_TRUE(): antlr.TerminalNode | null;
    KW_FALSE(): antlr.TerminalNode | null;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    IDENTIFIER(): antlr.TerminalNode | null;
    DIGIT_IDENTIFIER(): antlr.TerminalNode | null;
    QUOTED_IDENTIFIER(): antlr.TerminalNode | null;
    BACKQUOTED_IDENTIFIER(): antlr.TerminalNode | null;
    nonReserved(): NonReservedContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class QualifiedNameAllowEmptyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    qualifiedName(): QualifiedNameContext;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ColumnRefContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    qualifiedNameAllowEmpty(): QualifiedNameAllowEmptyContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class EmptyColumnContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class TableNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    qualifiedName(): QualifiedNameContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class TableNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    qualifiedName(): QualifiedNameContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    qualifiedName(): QualifiedNameContext;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
export declare class NonReservedContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ADD(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    KW_ASC(): antlr.TerminalNode | null;
    KW_BIGINT(): antlr.TerminalNode | null;
    KW_BINARY(): antlr.TerminalNode | null;
    KW_BOOLEAN(): antlr.TerminalNode | null;
    KW_BY(): antlr.TerminalNode | null;
    KW_CHAR(): antlr.TerminalNode | null;
    KW_COALESCE(): antlr.TerminalNode | null;
    KW_COLUMN(): antlr.TerminalNode | null;
    KW_CROSS(): antlr.TerminalNode | null;
    KW_DATE(): antlr.TerminalNode | null;
    KW_DECIMAL(): antlr.TerminalNode | null;
    KW_DEFAULT(): antlr.TerminalNode | null;
    KW_DESC(): antlr.TerminalNode | null;
    KW_DOUBLE(): antlr.TerminalNode | null;
    KW_FALSE(): antlr.TerminalNode | null;
    KW_FIRST(): antlr.TerminalNode | null;
    KW_FLOAT(): antlr.TerminalNode | null;
    KW_FULL(): antlr.TerminalNode | null;
    KW_IF(): antlr.TerminalNode | null;
    KW_INT(): antlr.TerminalNode | null;
    KW_INTEGER(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    KW_LAST(): antlr.TerminalNode | null;
    KW_LEFT(): antlr.TerminalNode | null;
    KW_LIMIT(): antlr.TerminalNode | null;
    KW_NULLIF(): antlr.TerminalNode | null;
    KW_NULLS(): antlr.TerminalNode | null;
    KW_NUMERIC(): antlr.TerminalNode | null;
    KW_OFFSET(): antlr.TerminalNode | null;
    KW_OUTER(): antlr.TerminalNode | null;
    KW_RIGHT(): antlr.TerminalNode | null;
    KW_SMALLINT(): antlr.TerminalNode | null;
    KW_TEXT(): antlr.TerminalNode | null;
    KW_TIME(): antlr.TerminalNode | null;
    KW_TIMESTAMP(): antlr.TerminalNode | null;
    KW_TINYINT(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    KW_TRUE(): antlr.TerminalNode | null;
    KW_UNIQUE(): antlr.TerminalNode | null;
    KW_VARCHAR(): antlr.TerminalNode | null;
    KW_VARBINARY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: GenericSqlListener): void;
    exitRule(listener: GenericSqlListener): void;
    accept<Result>(visitor: GenericSqlVisitor<Result>): Result | null;
}
