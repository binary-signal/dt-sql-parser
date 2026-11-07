// Generated from dt-sql-parser/src/grammar/generic/GenericSql.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from "antlr4ng";
import { SQLParserBase } from '../SQLParserBase';
export class GenericSqlParser extends SQLParserBase {
    get grammarFileName() { return "GenericSql.g4"; }
    get literalNames() { return GenericSqlParser.literalNames; }
    get symbolicNames() { return GenericSqlParser.symbolicNames; }
    get ruleNames() { return GenericSqlParser.ruleNames; }
    get serializedATN() { return GenericSqlParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, GenericSqlParser._ATN, GenericSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    program() {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, GenericSqlParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 123;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 276824196) !== 0) || _la === 32 || _la === 49 || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 270337) !== 0)) {
                    {
                        {
                            this.state = 120;
                            this.statements();
                        }
                    }
                    this.state = 125;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 126;
                this.match(GenericSqlParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statements() {
        let localContext = new StatementsContext(this.context, this.state);
        this.enterRule(localContext, 2, GenericSqlParser.RULE_statements);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 128;
                this.singleStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    singleStatement() {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, GenericSqlParser.RULE_singleStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 130;
                this.statement();
                this.state = 132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 108) {
                    {
                        this.state = 131;
                        this.match(GenericSqlParser.SEMICOLON);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statement() {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 6, GenericSqlParser.RULE_statement);
        try {
            this.state = 141;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.T__1:
                case GenericSqlParser.KW_SELECT:
                case GenericSqlParser.KW_WITH:
                    localContext = new StatementDefaultContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 134;
                        this.queryStatement();
                    }
                    break;
                case GenericSqlParser.KW_INSERT:
                    localContext = new InsertContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 135;
                        this.insertStatement();
                    }
                    break;
                case GenericSqlParser.KW_UPDATE:
                    localContext = new UpdateContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 136;
                        this.updateStatement();
                    }
                    break;
                case GenericSqlParser.KW_DELETE:
                    localContext = new DeleteContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 137;
                        this.deleteStatement();
                    }
                    break;
                case GenericSqlParser.KW_CREATE:
                    localContext = new CreateTableContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 138;
                        this.createTableStatement();
                    }
                    break;
                case GenericSqlParser.KW_ALTER:
                    localContext = new AlterTableContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 139;
                        this.alterTableStatement();
                    }
                    break;
                case GenericSqlParser.KW_DROP:
                    localContext = new DropTableContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 140;
                        this.dropTableStatement();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    queryStatement() {
        let localContext = new QueryStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, GenericSqlParser.RULE_queryStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 94) {
                    {
                        this.state = 143;
                        this.withClause();
                    }
                }
                this.state = 146;
                this.queryNoWith();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    withClause() {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 10, GenericSqlParser.RULE_withClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 148;
                this.match(GenericSqlParser.KW_WITH);
                this.state = 150;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 72) {
                    {
                        this.state = 149;
                        this.match(GenericSqlParser.KW_RECURSIVE);
                    }
                }
                this.state = 152;
                this.namedQuery();
                this.state = 157;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 153;
                            this.match(GenericSqlParser.T__0);
                            this.state = 154;
                            this.namedQuery();
                        }
                    }
                    this.state = 159;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    namedQuery() {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 12, GenericSqlParser.RULE_namedQuery);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 160;
                localContext._name = this.identifier();
                this.state = 162;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2) {
                    {
                        this.state = 161;
                        this.cteColumnList();
                    }
                }
                this.state = 164;
                this.match(GenericSqlParser.KW_AS);
                this.state = 165;
                this.match(GenericSqlParser.T__1);
                this.state = 166;
                this.queryStatement();
                this.state = 167;
                this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    cteColumnList() {
        let localContext = new CteColumnListContext(this.context, this.state);
        this.enterRule(localContext, 14, GenericSqlParser.RULE_cteColumnList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 169;
                this.match(GenericSqlParser.T__1);
                this.state = 170;
                this.identifier();
                this.state = 175;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 171;
                            this.match(GenericSqlParser.T__0);
                            this.state = 172;
                            this.identifier();
                        }
                    }
                    this.state = 177;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 178;
                this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    queryNoWith() {
        let localContext = new QueryNoWithContext(this.context, this.state);
        this.enterRule(localContext, 16, GenericSqlParser.RULE_queryNoWith);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 180;
                this.queryTerm();
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 36 || _la === 52 || _la === 87) {
                    {
                        {
                            this.state = 181;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 36 || _la === 52 || _la === 87)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 183;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 6) {
                                {
                                    this.state = 182;
                                    this.match(GenericSqlParser.KW_ALL);
                                }
                            }
                            this.state = 185;
                            this.queryTerm();
                        }
                    }
                    this.state = 190;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    queryTerm() {
        let localContext = new QueryTermContext(this.context, this.state);
        this.enterRule(localContext, 18, GenericSqlParser.RULE_queryTerm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 191;
                this.queryPrimary();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    queryPrimary() {
        let localContext = new QueryPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 20, GenericSqlParser.RULE_queryPrimary);
        try {
            this.state = 198;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.KW_SELECT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 193;
                        this.querySpecification();
                    }
                    break;
                case GenericSqlParser.T__1:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 194;
                        this.match(GenericSqlParser.T__1);
                        this.state = 195;
                        this.queryStatement();
                        this.state = 196;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    querySpecification() {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 22, GenericSqlParser.RULE_querySpecification);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 200;
                this.match(GenericSqlParser.KW_SELECT);
                this.state = 202;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context)) {
                    case 1:
                        {
                            this.state = 201;
                            this.setQuantifier();
                        }
                        break;
                }
                this.state = 204;
                this.selectItem();
                this.state = 209;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 205;
                            this.match(GenericSqlParser.T__0);
                            this.state = 206;
                            this.selectItem();
                        }
                    }
                    this.state = 211;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                        this.state = 212;
                        this.fromClause();
                    }
                }
                this.state = 216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 215;
                        this.whereClause();
                    }
                }
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 44) {
                    {
                        this.state = 218;
                        this.groupByClause();
                    }
                }
                this.state = 222;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                        this.state = 221;
                        this.havingClause();
                    }
                }
                this.state = 225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 69) {
                    {
                        this.state = 224;
                        this.orderByClause();
                    }
                }
                this.state = 228;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 60) {
                    {
                        this.state = 227;
                        this.limitClause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    setQuantifier() {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 24, GenericSqlParser.RULE_setQuantifier);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 230;
                _la = this.tokenStream.LA(1);
                if (!(_la === 6 || _la === 30)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    selectItem() {
        let localContext = new SelectItemContext(this.context, this.state);
        this.enterRule(localContext, 26, GenericSqlParser.RULE_selectItem);
        let _la;
        try {
            this.state = 246;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                case 1:
                    localContext = new SelectExpressionElementContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 232;
                        this.expression();
                        this.state = 237;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context)) {
                            case 1:
                                {
                                    this.state = 234;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 9) {
                                        {
                                            this.state = 233;
                                            this.match(GenericSqlParser.KW_AS);
                                        }
                                    }
                                    this.state = 236;
                                    localContext._alias = this.identifier();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    localContext = new SelectStarElementContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 239;
                        this.qualifiedName();
                        this.state = 240;
                        this.match(GenericSqlParser.T__3);
                        this.state = 241;
                        this.match(GenericSqlParser.ASTERISK);
                    }
                    break;
                case 3:
                    localContext = new SelectAllElementContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 243;
                        this.match(GenericSqlParser.ASTERISK);
                    }
                    break;
                case 4:
                    localContext = new SelectEmptyElementContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 244;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 245;
                        this.emptyColumn();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fromClause() {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 28, GenericSqlParser.RULE_fromClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 248;
                this.match(GenericSqlParser.KW_FROM);
                this.state = 249;
                this.relation(0);
                this.state = 254;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 250;
                            this.match(GenericSqlParser.T__0);
                            this.state = 251;
                            this.relation(0);
                        }
                    }
                    this.state = 256;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    relation(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RelationContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 30;
        this.enterRecursionRule(localContext, 30, GenericSqlParser.RULE_relation, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    localContext = new SimpleRelationContext(localContext);
                    this.context = localContext;
                    previousContext = localContext;
                    this.state = 258;
                    this.aliasedRelation();
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 269;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new JoinRelationContext(new RelationContext(parentContext, parentState));
                                localContext._left = previousContext;
                                this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_relation);
                                this.state = 260;
                                if (!(this.precpred(this.context, 2))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                }
                                this.state = 261;
                                this.joinType();
                                this.state = 262;
                                this.match(GenericSqlParser.KW_JOIN);
                                this.state = 263;
                                localContext._right = this.relation(0);
                                this.state = 264;
                                this.match(GenericSqlParser.KW_ON);
                                this.state = 265;
                                localContext._condition = this.expression();
                            }
                        }
                    }
                    this.state = 271;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    joinType() {
        let localContext = new JoinTypeContext(this.context, this.state);
        this.enterRule(localContext, 32, GenericSqlParser.RULE_joinType);
        let _la;
        try {
            this.state = 288;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.KW_INNER:
                case GenericSqlParser.KW_JOIN:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 273;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 48) {
                            {
                                this.state = 272;
                                this.match(GenericSqlParser.KW_INNER);
                            }
                        }
                    }
                    break;
                case GenericSqlParser.KW_LEFT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 275;
                        this.match(GenericSqlParser.KW_LEFT);
                        this.state = 277;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 70) {
                            {
                                this.state = 276;
                                this.match(GenericSqlParser.KW_OUTER);
                            }
                        }
                    }
                    break;
                case GenericSqlParser.KW_RIGHT:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 279;
                        this.match(GenericSqlParser.KW_RIGHT);
                        this.state = 281;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 70) {
                            {
                                this.state = 280;
                                this.match(GenericSqlParser.KW_OUTER);
                            }
                        }
                    }
                    break;
                case GenericSqlParser.KW_FULL:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 283;
                        this.match(GenericSqlParser.KW_FULL);
                        this.state = 285;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 70) {
                            {
                                this.state = 284;
                                this.match(GenericSqlParser.KW_OUTER);
                            }
                        }
                    }
                    break;
                case GenericSqlParser.KW_CROSS:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 287;
                        this.match(GenericSqlParser.KW_CROSS);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    aliasedRelation() {
        let localContext = new AliasedRelationContext(this.context, this.state);
        this.enterRule(localContext, 34, GenericSqlParser.RULE_aliasedRelation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 290;
                this.relationPrimary();
                this.state = 295;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context)) {
                    case 1:
                        {
                            this.state = 292;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 9) {
                                {
                                    this.state = 291;
                                    this.match(GenericSqlParser.KW_AS);
                                }
                            }
                            this.state = 294;
                            localContext._alias = this.identifier();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    relationPrimary() {
        let localContext = new RelationPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 36, GenericSqlParser.RULE_relationPrimary);
        try {
            this.state = 302;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.KW_ADD:
                case GenericSqlParser.KW_ALL:
                case GenericSqlParser.KW_ASC:
                case GenericSqlParser.KW_BIGINT:
                case GenericSqlParser.KW_BINARY:
                case GenericSqlParser.KW_BOOLEAN:
                case GenericSqlParser.KW_BY:
                case GenericSqlParser.KW_CHAR:
                case GenericSqlParser.KW_COALESCE:
                case GenericSqlParser.KW_COLUMN:
                case GenericSqlParser.KW_CROSS:
                case GenericSqlParser.KW_DATE:
                case GenericSqlParser.KW_DECIMAL:
                case GenericSqlParser.KW_DEFAULT:
                case GenericSqlParser.KW_DESC:
                case GenericSqlParser.KW_DOUBLE:
                case GenericSqlParser.KW_FALSE:
                case GenericSqlParser.KW_FIRST:
                case GenericSqlParser.KW_FLOAT:
                case GenericSqlParser.KW_FULL:
                case GenericSqlParser.KW_IF:
                case GenericSqlParser.KW_INT:
                case GenericSqlParser.KW_INTEGER:
                case GenericSqlParser.KW_KEY:
                case GenericSqlParser.KW_LAST:
                case GenericSqlParser.KW_LEFT:
                case GenericSqlParser.KW_LIMIT:
                case GenericSqlParser.KW_NULLIF:
                case GenericSqlParser.KW_NULLS:
                case GenericSqlParser.KW_NUMERIC:
                case GenericSqlParser.KW_OFFSET:
                case GenericSqlParser.KW_OUTER:
                case GenericSqlParser.KW_RIGHT:
                case GenericSqlParser.KW_SMALLINT:
                case GenericSqlParser.KW_TEXT:
                case GenericSqlParser.KW_TIME:
                case GenericSqlParser.KW_TIMESTAMP:
                case GenericSqlParser.KW_TINYINT:
                case GenericSqlParser.KW_TO:
                case GenericSqlParser.KW_TRUE:
                case GenericSqlParser.KW_UNIQUE:
                case GenericSqlParser.KW_VARCHAR:
                case GenericSqlParser.KW_VARBINARY:
                case GenericSqlParser.IDENTIFIER:
                case GenericSqlParser.DIGIT_IDENTIFIER:
                case GenericSqlParser.QUOTED_IDENTIFIER:
                case GenericSqlParser.BACKQUOTED_IDENTIFIER:
                    localContext = new TableNameRelationContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 297;
                        this.tableName();
                    }
                    break;
                case GenericSqlParser.T__1:
                    localContext = new SubqueryRelationContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 298;
                        this.match(GenericSqlParser.T__1);
                        this.state = 299;
                        this.queryStatement();
                        this.state = 300;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    whereClause() {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 38, GenericSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 304;
                this.match(GenericSqlParser.KW_WHERE);
                this.state = 308;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                    case 1:
                        {
                            this.state = 305;
                            this.expression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 306;
                            if (!(this.shouldMatchEmpty())) {
                                throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                            }
                            this.state = 307;
                            this.emptyColumn();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    groupByClause() {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 40, GenericSqlParser.RULE_groupByClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 310;
                this.match(GenericSqlParser.KW_GROUP);
                this.state = 311;
                this.match(GenericSqlParser.KW_BY);
                this.state = 313;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context)) {
                    case 1:
                        {
                            this.state = 312;
                            this.setQuantifier();
                        }
                        break;
                }
                this.state = 315;
                this.expression();
                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 316;
                            this.match(GenericSqlParser.T__0);
                            this.state = 317;
                            this.expression();
                        }
                    }
                    this.state = 322;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    havingClause() {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 42, GenericSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 323;
                this.match(GenericSqlParser.KW_HAVING);
                this.state = 327;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context)) {
                    case 1:
                        {
                            this.state = 324;
                            this.expression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 325;
                            if (!(this.shouldMatchEmpty())) {
                                throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                            }
                            this.state = 326;
                            this.emptyColumn();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    orderByClause() {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 44, GenericSqlParser.RULE_orderByClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 329;
                this.match(GenericSqlParser.KW_ORDER);
                this.state = 330;
                this.match(GenericSqlParser.KW_BY);
                this.state = 331;
                this.sortItem();
                this.state = 336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 332;
                            this.match(GenericSqlParser.T__0);
                            this.state = 333;
                            this.sortItem();
                        }
                    }
                    this.state = 338;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    sortItem() {
        let localContext = new SortItemContext(this.context, this.state);
        this.enterRule(localContext, 46, GenericSqlParser.RULE_sortItem);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 339;
                this.expression();
                this.state = 341;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 10 || _la === 29) {
                    {
                        this.state = 340;
                        localContext._ordering = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 10 || _la === 29)) {
                            localContext._ordering = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 345;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                        this.state = 343;
                        this.match(GenericSqlParser.KW_NULLS);
                        this.state = 344;
                        localContext._nullOrdering = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 39 || _la === 57)) {
                            localContext._nullOrdering = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    limitClause() {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 48, GenericSqlParser.RULE_limitClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 347;
                this.match(GenericSqlParser.KW_LIMIT);
                this.state = 348;
                localContext._limit = this.expression();
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 66) {
                    {
                        this.state = 349;
                        this.match(GenericSqlParser.KW_OFFSET);
                        this.state = 350;
                        localContext._offset = this.expression();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    insertStatement() {
        let localContext = new InsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 50, GenericSqlParser.RULE_insertStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 353;
                this.match(GenericSqlParser.KW_INSERT);
                this.state = 354;
                this.match(GenericSqlParser.KW_INTO);
                this.state = 355;
                this.tableName();
                this.state = 357;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)) {
                    case 1:
                        {
                            this.state = 356;
                            this.columnList();
                        }
                        break;
                }
                this.state = 359;
                this.queryStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    columnList() {
        let localContext = new ColumnListContext(this.context, this.state);
        this.enterRule(localContext, 52, GenericSqlParser.RULE_columnList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 361;
                this.match(GenericSqlParser.T__1);
                this.state = 362;
                this.columnRef();
                this.state = 367;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 363;
                            this.match(GenericSqlParser.T__0);
                            this.state = 364;
                            this.columnRef();
                        }
                    }
                    this.state = 369;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 370;
                this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    updateStatement() {
        let localContext = new UpdateStatementContext(this.context, this.state);
        this.enterRule(localContext, 54, GenericSqlParser.RULE_updateStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 372;
                this.match(GenericSqlParser.KW_UPDATE);
                this.state = 373;
                this.tableName();
                this.state = 374;
                this.match(GenericSqlParser.KW_SET);
                this.state = 375;
                this.updateAssignment();
                this.state = 380;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 376;
                            this.match(GenericSqlParser.T__0);
                            this.state = 377;
                            this.updateAssignment();
                        }
                    }
                    this.state = 382;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 384;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 383;
                        this.whereClause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    updateAssignment() {
        let localContext = new UpdateAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 56, GenericSqlParser.RULE_updateAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 386;
                this.columnRef();
                this.state = 387;
                this.match(GenericSqlParser.EQ);
                this.state = 388;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    deleteStatement() {
        let localContext = new DeleteStatementContext(this.context, this.state);
        this.enterRule(localContext, 58, GenericSqlParser.RULE_deleteStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 390;
                this.match(GenericSqlParser.KW_DELETE);
                this.state = 391;
                this.match(GenericSqlParser.KW_FROM);
                this.state = 392;
                this.tableName();
                this.state = 394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 393;
                        this.whereClause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    createTableStatement() {
        let localContext = new CreateTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 60, GenericSqlParser.RULE_createTableStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 396;
                this.match(GenericSqlParser.KW_CREATE);
                this.state = 397;
                this.match(GenericSqlParser.KW_TABLE);
                this.state = 401;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context)) {
                    case 1:
                        {
                            this.state = 398;
                            this.match(GenericSqlParser.KW_IF);
                            this.state = 399;
                            this.match(GenericSqlParser.KW_NOT);
                            this.state = 400;
                            this.match(GenericSqlParser.KW_EXISTS);
                        }
                        break;
                }
                this.state = 403;
                this.tableNameCreate();
                this.state = 404;
                this.match(GenericSqlParser.T__1);
                this.state = 405;
                this.tableElement();
                this.state = 410;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 406;
                            this.match(GenericSqlParser.T__0);
                            this.state = 407;
                            this.tableElement();
                        }
                    }
                    this.state = 412;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 413;
                this.match(GenericSqlParser.T__2);
                this.state = 416;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context)) {
                    case 1:
                        {
                            this.state = 414;
                            this.match(GenericSqlParser.KW_WITH);
                            this.state = 415;
                            this.properties();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tableElement() {
        let localContext = new TableElementContext(this.context, this.state);
        this.enterRule(localContext, 62, GenericSqlParser.RULE_tableElement);
        try {
            this.state = 420;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 418;
                        this.columnDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 419;
                        this.tableConstraint();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    columnDefinition() {
        let localContext = new ColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 64, GenericSqlParser.RULE_columnDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 422;
                this.columnRefCreate();
                this.state = 423;
                localContext._colType = this.dataType();
                this.state = 426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61) {
                    {
                        this.state = 424;
                        this.match(GenericSqlParser.KW_NOT);
                        this.state = 425;
                        this.match(GenericSqlParser.KW_NULL);
                    }
                }
                this.state = 430;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                        this.state = 428;
                        this.match(GenericSqlParser.KW_DEFAULT);
                        this.state = 429;
                        this.expression();
                    }
                }
                this.state = 434;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 71) {
                    {
                        this.state = 432;
                        this.match(GenericSqlParser.KW_PRIMARY);
                        this.state = 433;
                        this.match(GenericSqlParser.KW_KEY);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    columnRefCreate() {
        let localContext = new ColumnRefCreateContext(this.context, this.state);
        this.enterRule(localContext, 66, GenericSqlParser.RULE_columnRefCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 436;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tableConstraint() {
        let localContext = new TableConstraintContext(this.context, this.state);
        this.enterRule(localContext, 68, GenericSqlParser.RULE_tableConstraint);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 440;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                        this.state = 438;
                        this.match(GenericSqlParser.KW_CONSTRAINT);
                        this.state = 439;
                        this.identifier();
                    }
                }
                this.state = 497;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case GenericSqlParser.KW_PRIMARY:
                        {
                            this.state = 442;
                            this.match(GenericSqlParser.KW_PRIMARY);
                            this.state = 443;
                            this.match(GenericSqlParser.KW_KEY);
                            this.state = 444;
                            this.match(GenericSqlParser.T__1);
                            this.state = 445;
                            this.columnRef();
                            this.state = 450;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 1) {
                                {
                                    {
                                        this.state = 446;
                                        this.match(GenericSqlParser.T__0);
                                        this.state = 447;
                                        this.columnRef();
                                    }
                                }
                                this.state = 452;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 453;
                            this.match(GenericSqlParser.T__2);
                        }
                        break;
                    case GenericSqlParser.KW_UNIQUE:
                        {
                            this.state = 455;
                            this.match(GenericSqlParser.KW_UNIQUE);
                            this.state = 456;
                            this.match(GenericSqlParser.T__1);
                            this.state = 457;
                            this.columnRef();
                            this.state = 462;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 1) {
                                {
                                    {
                                        this.state = 458;
                                        this.match(GenericSqlParser.T__0);
                                        this.state = 459;
                                        this.columnRef();
                                    }
                                }
                                this.state = 464;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 465;
                            this.match(GenericSqlParser.T__2);
                        }
                        break;
                    case GenericSqlParser.KW_CHECK:
                        {
                            this.state = 467;
                            this.match(GenericSqlParser.KW_CHECK);
                            this.state = 468;
                            this.match(GenericSqlParser.T__1);
                            this.state = 469;
                            this.expression();
                            this.state = 470;
                            this.match(GenericSqlParser.T__2);
                        }
                        break;
                    case GenericSqlParser.KW_FOREIGN:
                        {
                            this.state = 472;
                            this.match(GenericSqlParser.KW_FOREIGN);
                            this.state = 473;
                            this.match(GenericSqlParser.KW_KEY);
                            this.state = 474;
                            this.match(GenericSqlParser.T__1);
                            this.state = 475;
                            this.columnRef();
                            this.state = 480;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 1) {
                                {
                                    {
                                        this.state = 476;
                                        this.match(GenericSqlParser.T__0);
                                        this.state = 477;
                                        this.columnRef();
                                    }
                                }
                                this.state = 482;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 483;
                            this.match(GenericSqlParser.T__2);
                            this.state = 484;
                            this.match(GenericSqlParser.KW_REFERENCES);
                            this.state = 485;
                            this.tableName();
                            this.state = 486;
                            this.match(GenericSqlParser.T__1);
                            this.state = 487;
                            this.columnRef();
                            this.state = 492;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 1) {
                                {
                                    {
                                        this.state = 488;
                                        this.match(GenericSqlParser.T__0);
                                        this.state = 489;
                                        this.columnRef();
                                    }
                                }
                                this.state = 494;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 495;
                            this.match(GenericSqlParser.T__2);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    alterTableStatement() {
        let localContext = new AlterTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 70, GenericSqlParser.RULE_alterTableStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 499;
                this.match(GenericSqlParser.KW_ALTER);
                this.state = 500;
                this.match(GenericSqlParser.KW_TABLE);
                this.state = 503;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context)) {
                    case 1:
                        {
                            this.state = 501;
                            this.match(GenericSqlParser.KW_IF);
                            this.state = 502;
                            this.match(GenericSqlParser.KW_EXISTS);
                        }
                        break;
                }
                this.state = 505;
                this.tableName();
                this.state = 537;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context)) {
                    case 1:
                        {
                            this.state = 506;
                            this.match(GenericSqlParser.KW_ADD);
                            this.state = 507;
                            this.match(GenericSqlParser.KW_COLUMN);
                            this.state = 511;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context)) {
                                case 1:
                                    {
                                        this.state = 508;
                                        this.match(GenericSqlParser.KW_IF);
                                        this.state = 509;
                                        this.match(GenericSqlParser.KW_NOT);
                                        this.state = 510;
                                        this.match(GenericSqlParser.KW_EXISTS);
                                    }
                                    break;
                            }
                            this.state = 513;
                            this.columnDefinition();
                        }
                        break;
                    case 2:
                        {
                            this.state = 514;
                            this.match(GenericSqlParser.KW_DROP);
                            this.state = 515;
                            this.match(GenericSqlParser.KW_COLUMN);
                            this.state = 518;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context)) {
                                case 1:
                                    {
                                        this.state = 516;
                                        this.match(GenericSqlParser.KW_IF);
                                        this.state = 517;
                                        this.match(GenericSqlParser.KW_EXISTS);
                                    }
                                    break;
                            }
                            this.state = 520;
                            this.columnRef();
                        }
                        break;
                    case 3:
                        {
                            this.state = 521;
                            this.match(GenericSqlParser.KW_RENAME);
                            this.state = 522;
                            this.match(GenericSqlParser.KW_TO);
                            this.state = 523;
                            this.tableNameCreate();
                        }
                        break;
                    case 4:
                        {
                            this.state = 524;
                            this.match(GenericSqlParser.KW_ALTER);
                            this.state = 525;
                            this.match(GenericSqlParser.KW_COLUMN);
                            this.state = 526;
                            this.columnRef();
                            this.state = 527;
                            this.match(GenericSqlParser.KW_SET);
                            this.state = 528;
                            this.match(GenericSqlParser.KW_DEFAULT);
                            this.state = 529;
                            this.expression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 531;
                            this.match(GenericSqlParser.KW_ALTER);
                            this.state = 532;
                            this.match(GenericSqlParser.KW_COLUMN);
                            this.state = 533;
                            this.columnRef();
                            this.state = 534;
                            this.match(GenericSqlParser.KW_DROP);
                            this.state = 535;
                            this.match(GenericSqlParser.KW_DEFAULT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    dropTableStatement() {
        let localContext = new DropTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 72, GenericSqlParser.RULE_dropTableStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 539;
                this.match(GenericSqlParser.KW_DROP);
                this.state = 540;
                this.match(GenericSqlParser.KW_TABLE);
                this.state = 543;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context)) {
                    case 1:
                        {
                            this.state = 541;
                            this.match(GenericSqlParser.KW_IF);
                            this.state = 542;
                            this.match(GenericSqlParser.KW_EXISTS);
                        }
                        break;
                }
                this.state = 545;
                this.tableName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    expression() {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 74, GenericSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 547;
                this.booleanExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    booleanExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 76;
        this.enterRecursionRule(localContext, 76, GenericSqlParser.RULE_booleanExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 553;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context)) {
                    case 1:
                        {
                            localContext = new PredicatedContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 550;
                            this.predicatedExpression();
                        }
                        break;
                    case 2:
                        {
                            localContext = new NotExpressionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 551;
                            this.match(GenericSqlParser.KW_NOT);
                            this.state = 552;
                            this.booleanExpression(3);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 563;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 561;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context)) {
                                case 1:
                                    {
                                        localContext = new AndExpressionContext(new BooleanExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_booleanExpression);
                                        this.state = 555;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 556;
                                        this.match(GenericSqlParser.KW_AND);
                                        this.state = 557;
                                        localContext._right = this.booleanExpression(3);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new OrExpressionContext(new BooleanExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_booleanExpression);
                                        this.state = 558;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 559;
                                        this.match(GenericSqlParser.KW_OR);
                                        this.state = 560;
                                        localContext._right = this.booleanExpression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 565;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    predicatedExpression() {
        let localContext = new PredicatedExpressionContext(this.context, this.state);
        this.enterRule(localContext, 78, GenericSqlParser.RULE_predicatedExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 566;
                this.valueExpression(0);
                this.state = 568;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context)) {
                    case 1:
                        {
                            this.state = 567;
                            this.predicate();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    predicate() {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 80, GenericSqlParser.RULE_predicate);
        let _la;
        try {
            this.state = 625;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context)) {
                case 1:
                    localContext = new ComparisonPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 570;
                        this.comparisonOperator();
                        this.state = 571;
                        localContext._right = this.valueExpression(0);
                    }
                    break;
                case 2:
                    localContext = new InPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 574;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 573;
                                this.match(GenericSqlParser.KW_NOT);
                            }
                        }
                        this.state = 576;
                        this.match(GenericSqlParser.KW_IN);
                        this.state = 577;
                        this.match(GenericSqlParser.T__1);
                        this.state = 578;
                        this.expression();
                        this.state = 583;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 1) {
                            {
                                {
                                    this.state = 579;
                                    this.match(GenericSqlParser.T__0);
                                    this.state = 580;
                                    this.expression();
                                }
                            }
                            this.state = 585;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 586;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 3:
                    localContext = new InSubqueryPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 589;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 588;
                                this.match(GenericSqlParser.KW_NOT);
                            }
                        }
                        this.state = 591;
                        this.match(GenericSqlParser.KW_IN);
                        this.state = 592;
                        this.match(GenericSqlParser.T__1);
                        this.state = 593;
                        this.queryStatement();
                        this.state = 594;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 4:
                    localContext = new BetweenPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 597;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 596;
                                this.match(GenericSqlParser.KW_NOT);
                            }
                        }
                        this.state = 599;
                        this.match(GenericSqlParser.KW_BETWEEN);
                        this.state = 600;
                        localContext._lower = this.valueExpression(0);
                        this.state = 601;
                        this.match(GenericSqlParser.KW_AND);
                        this.state = 602;
                        localContext._upper = this.valueExpression(0);
                    }
                    break;
                case 5:
                    localContext = new LikePredicateContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 605;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 604;
                                this.match(GenericSqlParser.KW_NOT);
                            }
                        }
                        this.state = 607;
                        this.match(GenericSqlParser.KW_LIKE);
                        this.state = 608;
                        localContext._pattern = this.valueExpression(0);
                        this.state = 611;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context)) {
                            case 1:
                                {
                                    this.state = 609;
                                    this.match(GenericSqlParser.KW_ESCAPE);
                                    this.state = 610;
                                    localContext._escape = this.valueExpression(0);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    localContext = new NullPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 613;
                        this.match(GenericSqlParser.KW_IS);
                        this.state = 615;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 614;
                                this.match(GenericSqlParser.KW_NOT);
                            }
                        }
                        this.state = 617;
                        this.match(GenericSqlParser.KW_NULL);
                    }
                    break;
                case 7:
                    localContext = new DistinctFromPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 618;
                        this.match(GenericSqlParser.KW_IS);
                        this.state = 620;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 619;
                                this.match(GenericSqlParser.KW_NOT);
                            }
                        }
                        this.state = 622;
                        this.match(GenericSqlParser.KW_DISTINCT);
                        this.state = 623;
                        this.match(GenericSqlParser.KW_FROM);
                        this.state = 624;
                        localContext._right = this.valueExpression(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    comparisonOperator() {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 82, GenericSqlParser.RULE_comparisonOperator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 627;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 63) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    valueExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 84;
        this.enterRecursionRule(localContext, 84, GenericSqlParser.RULE_valueExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 633;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context)) {
                    case 1:
                        {
                            localContext = new ValueExpressionDefaultContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 630;
                            this.primaryExpression();
                        }
                        break;
                    case 2:
                        {
                            localContext = new ArithmeticUnaryContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 631;
                            localContext._operator = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 101 || _la === 102)) {
                                localContext._operator = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 632;
                            this.valueExpression(4);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 646;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 78, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 644;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_valueExpression);
                                        this.state = 635;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 636;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0))) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 637;
                                        localContext._right = this.valueExpression(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_valueExpression);
                                        this.state = 638;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 639;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 101 || _la === 102)) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 640;
                                        localContext._right = this.valueExpression(3);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, GenericSqlParser.RULE_valueExpression);
                                        this.state = 641;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 642;
                                        this.match(GenericSqlParser.CONCAT);
                                        this.state = 643;
                                        localContext._right = this.valueExpression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 648;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 78, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    primaryExpression() {
        let localContext = new PrimaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 86, GenericSqlParser.RULE_primaryExpression);
        let _la;
        try {
            this.state = 729;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)) {
                case 1:
                    localContext = new LiteralExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 649;
                        this.literal();
                    }
                    break;
                case 2:
                    localContext = new FunctionCallContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 650;
                        this.functionName();
                        this.state = 651;
                        this.match(GenericSqlParser.T__1);
                        this.state = 663;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context)) {
                            case 1:
                                {
                                    this.state = 653;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context)) {
                                        case 1:
                                            {
                                                this.state = 652;
                                                this.setQuantifier();
                                            }
                                            break;
                                    }
                                    this.state = 655;
                                    this.expression();
                                    this.state = 660;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 1) {
                                        {
                                            {
                                                this.state = 656;
                                                this.match(GenericSqlParser.T__0);
                                                this.state = 657;
                                                this.expression();
                                            }
                                        }
                                        this.state = 662;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                                break;
                        }
                        this.state = 665;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 3:
                    localContext = new SearchedCaseExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 667;
                        this.match(GenericSqlParser.KW_CASE);
                        this.state = 669;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 668;
                                    this.whenClause();
                                }
                            }
                            this.state = 671;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 92);
                        this.state = 675;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 33) {
                            {
                                this.state = 673;
                                this.match(GenericSqlParser.KW_ELSE);
                                this.state = 674;
                                this.expression();
                            }
                        }
                        this.state = 677;
                        this.match(GenericSqlParser.KW_END);
                    }
                    break;
                case 4:
                    localContext = new SimpleCaseExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 679;
                        this.match(GenericSqlParser.KW_CASE);
                        this.state = 680;
                        this.expression();
                        this.state = 682;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 681;
                                    this.whenClause();
                                }
                            }
                            this.state = 684;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 92);
                        this.state = 688;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 33) {
                            {
                                this.state = 686;
                                this.match(GenericSqlParser.KW_ELSE);
                                this.state = 687;
                                this.expression();
                            }
                        }
                        this.state = 690;
                        this.match(GenericSqlParser.KW_END);
                    }
                    break;
                case 5:
                    localContext = new CastExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 692;
                        this.match(GenericSqlParser.KW_CAST);
                        this.state = 693;
                        this.match(GenericSqlParser.T__1);
                        this.state = 694;
                        this.expression();
                        this.state = 695;
                        this.match(GenericSqlParser.KW_AS);
                        this.state = 696;
                        this.dataType();
                        this.state = 697;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 6:
                    localContext = new CoalesceExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 699;
                        this.match(GenericSqlParser.KW_COALESCE);
                        this.state = 700;
                        this.match(GenericSqlParser.T__1);
                        this.state = 701;
                        this.expression();
                        this.state = 706;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 1) {
                            {
                                {
                                    this.state = 702;
                                    this.match(GenericSqlParser.T__0);
                                    this.state = 703;
                                    this.expression();
                                }
                            }
                            this.state = 708;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 709;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 7:
                    localContext = new NullIfExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 711;
                        this.match(GenericSqlParser.KW_NULLIF);
                        this.state = 712;
                        this.match(GenericSqlParser.T__1);
                        this.state = 713;
                        this.valueExpression(0);
                        this.state = 714;
                        this.match(GenericSqlParser.T__0);
                        this.state = 715;
                        this.valueExpression(0);
                        this.state = 716;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 8:
                    localContext = new ParenthesizedExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 718;
                        this.match(GenericSqlParser.T__1);
                        this.state = 719;
                        this.expression();
                        this.state = 720;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 9:
                    localContext = new ExistsExpressionContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 722;
                        this.match(GenericSqlParser.KW_EXISTS);
                        this.state = 723;
                        this.match(GenericSqlParser.T__1);
                        this.state = 724;
                        this.queryStatement();
                        this.state = 725;
                        this.match(GenericSqlParser.T__2);
                    }
                    break;
                case 10:
                    localContext = new SubqueryExpressionDefaultContext(localContext);
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 727;
                        this.subqueryExpression();
                    }
                    break;
                case 11:
                    localContext = new ColumnReferenceContext(localContext);
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 728;
                        this.columnName();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    whenClause() {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 88, GenericSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 731;
                this.match(GenericSqlParser.KW_WHEN);
                this.state = 732;
                localContext._condition = this.expression();
                this.state = 733;
                this.match(GenericSqlParser.KW_THEN);
                this.state = 734;
                localContext._result = this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    subqueryExpression() {
        let localContext = new SubqueryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 90, GenericSqlParser.RULE_subqueryExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 736;
                this.match(GenericSqlParser.T__1);
                this.state = 737;
                this.queryStatement();
                this.state = 738;
                this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    dataType() {
        let localContext = new DataTypeContext(this.context, this.state);
        this.enterRule(localContext, 92, GenericSqlParser.RULE_dataType);
        let _la;
        try {
            this.state = 786;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.KW_BOOLEAN:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 740;
                        this.match(GenericSqlParser.KW_BOOLEAN);
                    }
                    break;
                case GenericSqlParser.KW_TINYINT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 741;
                        this.match(GenericSqlParser.KW_TINYINT);
                    }
                    break;
                case GenericSqlParser.KW_SMALLINT:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 742;
                        this.match(GenericSqlParser.KW_SMALLINT);
                    }
                    break;
                case GenericSqlParser.KW_INT:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 743;
                        this.match(GenericSqlParser.KW_INT);
                    }
                    break;
                case GenericSqlParser.KW_INTEGER:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 744;
                        this.match(GenericSqlParser.KW_INTEGER);
                    }
                    break;
                case GenericSqlParser.KW_BIGINT:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 745;
                        this.match(GenericSqlParser.KW_BIGINT);
                    }
                    break;
                case GenericSqlParser.KW_FLOAT:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 746;
                        this.match(GenericSqlParser.KW_FLOAT);
                    }
                    break;
                case GenericSqlParser.KW_DOUBLE:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 747;
                        this.match(GenericSqlParser.KW_DOUBLE);
                    }
                    break;
                case GenericSqlParser.KW_DECIMAL:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 748;
                        this.match(GenericSqlParser.KW_DECIMAL);
                        this.state = 756;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context)) {
                            case 1:
                                {
                                    this.state = 749;
                                    this.match(GenericSqlParser.T__1);
                                    this.state = 750;
                                    localContext._precision = this.match(GenericSqlParser.INTEGER_VALUE);
                                    this.state = 753;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 1) {
                                        {
                                            this.state = 751;
                                            this.match(GenericSqlParser.T__0);
                                            this.state = 752;
                                            localContext._scale = this.match(GenericSqlParser.INTEGER_VALUE);
                                        }
                                    }
                                    this.state = 755;
                                    this.match(GenericSqlParser.T__2);
                                }
                                break;
                        }
                    }
                    break;
                case GenericSqlParser.KW_NUMERIC:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 758;
                        this.match(GenericSqlParser.KW_NUMERIC);
                        this.state = 766;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context)) {
                            case 1:
                                {
                                    this.state = 759;
                                    this.match(GenericSqlParser.T__1);
                                    this.state = 760;
                                    localContext._precision = this.match(GenericSqlParser.INTEGER_VALUE);
                                    this.state = 763;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 1) {
                                        {
                                            this.state = 761;
                                            this.match(GenericSqlParser.T__0);
                                            this.state = 762;
                                            localContext._scale = this.match(GenericSqlParser.INTEGER_VALUE);
                                        }
                                    }
                                    this.state = 765;
                                    this.match(GenericSqlParser.T__2);
                                }
                                break;
                        }
                    }
                    break;
                case GenericSqlParser.KW_VARCHAR:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 768;
                        this.match(GenericSqlParser.KW_VARCHAR);
                        this.state = 772;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context)) {
                            case 1:
                                {
                                    this.state = 769;
                                    this.match(GenericSqlParser.T__1);
                                    this.state = 770;
                                    localContext._maxLength = this.match(GenericSqlParser.INTEGER_VALUE);
                                    this.state = 771;
                                    this.match(GenericSqlParser.T__2);
                                }
                                break;
                        }
                    }
                    break;
                case GenericSqlParser.KW_CHAR:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 774;
                        this.match(GenericSqlParser.KW_CHAR);
                        this.state = 778;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context)) {
                            case 1:
                                {
                                    this.state = 775;
                                    this.match(GenericSqlParser.T__1);
                                    this.state = 776;
                                    localContext._length = this.match(GenericSqlParser.INTEGER_VALUE);
                                    this.state = 777;
                                    this.match(GenericSqlParser.T__2);
                                }
                                break;
                        }
                    }
                    break;
                case GenericSqlParser.KW_TEXT:
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 780;
                        this.match(GenericSqlParser.KW_TEXT);
                    }
                    break;
                case GenericSqlParser.KW_DATE:
                    this.enterOuterAlt(localContext, 14);
                    {
                        this.state = 781;
                        this.match(GenericSqlParser.KW_DATE);
                    }
                    break;
                case GenericSqlParser.KW_TIME:
                    this.enterOuterAlt(localContext, 15);
                    {
                        this.state = 782;
                        this.match(GenericSqlParser.KW_TIME);
                    }
                    break;
                case GenericSqlParser.KW_TIMESTAMP:
                    this.enterOuterAlt(localContext, 16);
                    {
                        this.state = 783;
                        this.match(GenericSqlParser.KW_TIMESTAMP);
                    }
                    break;
                case GenericSqlParser.KW_BINARY:
                    this.enterOuterAlt(localContext, 17);
                    {
                        this.state = 784;
                        this.match(GenericSqlParser.KW_BINARY);
                    }
                    break;
                case GenericSqlParser.KW_VARBINARY:
                    this.enterOuterAlt(localContext, 18);
                    {
                        this.state = 785;
                        this.match(GenericSqlParser.KW_VARBINARY);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    properties() {
        let localContext = new PropertiesContext(this.context, this.state);
        this.enterRule(localContext, 94, GenericSqlParser.RULE_properties);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 788;
                this.match(GenericSqlParser.T__1);
                this.state = 789;
                this.property();
                this.state = 794;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 790;
                            this.match(GenericSqlParser.T__0);
                            this.state = 791;
                            this.property();
                        }
                    }
                    this.state = 796;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 797;
                this.match(GenericSqlParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    property() {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 96, GenericSqlParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 799;
                this.identifier();
                this.state = 800;
                this.match(GenericSqlParser.EQ);
                this.state = 801;
                this.literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    literal() {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 98, GenericSqlParser.RULE_literal);
        try {
            this.state = 811;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.KW_NULL:
                    localContext = new NullLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 803;
                        this.match(GenericSqlParser.KW_NULL);
                    }
                    break;
                case GenericSqlParser.KW_TRUE:
                    localContext = new BooleanLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 804;
                        this.match(GenericSqlParser.KW_TRUE);
                    }
                    break;
                case GenericSqlParser.KW_FALSE:
                    localContext = new BooleanLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 805;
                        this.match(GenericSqlParser.KW_FALSE);
                    }
                    break;
                case GenericSqlParser.INTEGER_VALUE:
                    localContext = new IntegerLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 806;
                        this.match(GenericSqlParser.INTEGER_VALUE);
                    }
                    break;
                case GenericSqlParser.DECIMAL_VALUE:
                    localContext = new DecimalLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 807;
                        this.match(GenericSqlParser.DECIMAL_VALUE);
                    }
                    break;
                case GenericSqlParser.DOUBLE_VALUE:
                    localContext = new DoubleLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 808;
                        this.match(GenericSqlParser.DOUBLE_VALUE);
                    }
                    break;
                case GenericSqlParser.STRING:
                    localContext = new StringLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 809;
                        this.match(GenericSqlParser.STRING);
                    }
                    break;
                case GenericSqlParser.BINARY_LITERAL:
                    localContext = new BinaryLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 810;
                        this.match(GenericSqlParser.BINARY_LITERAL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    identifier() {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 100, GenericSqlParser.RULE_identifier);
        try {
            this.state = 818;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case GenericSqlParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 813;
                        this.match(GenericSqlParser.IDENTIFIER);
                    }
                    break;
                case GenericSqlParser.DIGIT_IDENTIFIER:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 814;
                        this.match(GenericSqlParser.DIGIT_IDENTIFIER);
                    }
                    break;
                case GenericSqlParser.QUOTED_IDENTIFIER:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 815;
                        this.match(GenericSqlParser.QUOTED_IDENTIFIER);
                    }
                    break;
                case GenericSqlParser.BACKQUOTED_IDENTIFIER:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 816;
                        this.match(GenericSqlParser.BACKQUOTED_IDENTIFIER);
                    }
                    break;
                case GenericSqlParser.KW_ADD:
                case GenericSqlParser.KW_ALL:
                case GenericSqlParser.KW_ASC:
                case GenericSqlParser.KW_BIGINT:
                case GenericSqlParser.KW_BINARY:
                case GenericSqlParser.KW_BOOLEAN:
                case GenericSqlParser.KW_BY:
                case GenericSqlParser.KW_CHAR:
                case GenericSqlParser.KW_COALESCE:
                case GenericSqlParser.KW_COLUMN:
                case GenericSqlParser.KW_CROSS:
                case GenericSqlParser.KW_DATE:
                case GenericSqlParser.KW_DECIMAL:
                case GenericSqlParser.KW_DEFAULT:
                case GenericSqlParser.KW_DESC:
                case GenericSqlParser.KW_DOUBLE:
                case GenericSqlParser.KW_FALSE:
                case GenericSqlParser.KW_FIRST:
                case GenericSqlParser.KW_FLOAT:
                case GenericSqlParser.KW_FULL:
                case GenericSqlParser.KW_IF:
                case GenericSqlParser.KW_INT:
                case GenericSqlParser.KW_INTEGER:
                case GenericSqlParser.KW_KEY:
                case GenericSqlParser.KW_LAST:
                case GenericSqlParser.KW_LEFT:
                case GenericSqlParser.KW_LIMIT:
                case GenericSqlParser.KW_NULLIF:
                case GenericSqlParser.KW_NULLS:
                case GenericSqlParser.KW_NUMERIC:
                case GenericSqlParser.KW_OFFSET:
                case GenericSqlParser.KW_OUTER:
                case GenericSqlParser.KW_RIGHT:
                case GenericSqlParser.KW_SMALLINT:
                case GenericSqlParser.KW_TEXT:
                case GenericSqlParser.KW_TIME:
                case GenericSqlParser.KW_TIMESTAMP:
                case GenericSqlParser.KW_TINYINT:
                case GenericSqlParser.KW_TO:
                case GenericSqlParser.KW_TRUE:
                case GenericSqlParser.KW_UNIQUE:
                case GenericSqlParser.KW_VARCHAR:
                case GenericSqlParser.KW_VARBINARY:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 817;
                        this.nonReserved();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    qualifiedName() {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 102, GenericSqlParser.RULE_qualifiedName);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 820;
                this.identifier();
                this.state = 825;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 821;
                                this.match(GenericSqlParser.T__3);
                                this.state = 822;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 827;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    qualifiedNameAllowEmpty() {
        let localContext = new QualifiedNameAllowEmptyContext(this.context, this.state);
        this.enterRule(localContext, 104, GenericSqlParser.RULE_qualifiedNameAllowEmpty);
        try {
            this.state = 834;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 99, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 828;
                        this.qualifiedName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 829;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 830;
                        this.qualifiedName();
                        this.state = 831;
                        this.match(GenericSqlParser.T__3);
                        this.state = 832;
                        this.emptyColumn();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    columnRef() {
        let localContext = new ColumnRefContext(this.context, this.state);
        this.enterRule(localContext, 106, GenericSqlParser.RULE_columnRef);
        try {
            this.state = 839;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 836;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 837;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 838;
                        this.emptyColumn();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    columnName() {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 108, GenericSqlParser.RULE_columnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 841;
                this.qualifiedNameAllowEmpty();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    emptyColumn() {
        let localContext = new EmptyColumnContext(this.context, this.state);
        this.enterRule(localContext, 110, GenericSqlParser.RULE_emptyColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tableName() {
        let localContext = new TableNameContext(this.context, this.state);
        this.enterRule(localContext, 112, GenericSqlParser.RULE_tableName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 845;
                this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tableNameCreate() {
        let localContext = new TableNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 114, GenericSqlParser.RULE_tableNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 847;
                this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    functionName() {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 116, GenericSqlParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 849;
                this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    nonReserved() {
        let localContext = new NonReservedContext(this.context, this.state);
        this.enterRule(localContext, 118, GenericSqlParser.RULE_nonReserved);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 851;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2939483232) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 509358375) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 3536161) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 13:
                return this.selectItem_sempred(localContext, predIndex);
            case 15:
                return this.relation_sempred(localContext, predIndex);
            case 19:
                return this.whereClause_sempred(localContext, predIndex);
            case 21:
                return this.havingClause_sempred(localContext, predIndex);
            case 38:
                return this.booleanExpression_sempred(localContext, predIndex);
            case 42:
                return this.valueExpression_sempred(localContext, predIndex);
            case 52:
                return this.qualifiedNameAllowEmpty_sempred(localContext, predIndex);
            case 53:
                return this.columnRef_sempred(localContext, predIndex);
        }
        return true;
    }
    selectItem_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    relation_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this.context, 2);
        }
        return true;
    }
    whereClause_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 2:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    havingClause_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 3:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    booleanExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 4:
                return this.precpred(this.context, 2);
            case 5:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    valueExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this.context, 3);
            case 7:
                return this.precpred(this.context, 2);
            case 8:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    qualifiedNameAllowEmpty_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 9:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    columnRef_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 10:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    static get _ATN() {
        if (!GenericSqlParser.__ATN) {
            GenericSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(GenericSqlParser._serializedATN);
        }
        return GenericSqlParser.__ATN;
    }
    get vocabulary() {
        return GenericSqlParser.vocabulary;
    }
}
GenericSqlParser.T__0 = 1;
GenericSqlParser.T__1 = 2;
GenericSqlParser.T__2 = 3;
GenericSqlParser.T__3 = 4;
GenericSqlParser.KW_ADD = 5;
GenericSqlParser.KW_ALL = 6;
GenericSqlParser.KW_ALTER = 7;
GenericSqlParser.KW_AND = 8;
GenericSqlParser.KW_AS = 9;
GenericSqlParser.KW_ASC = 10;
GenericSqlParser.KW_BETWEEN = 11;
GenericSqlParser.KW_BIGINT = 12;
GenericSqlParser.KW_BINARY = 13;
GenericSqlParser.KW_BOOLEAN = 14;
GenericSqlParser.KW_BY = 15;
GenericSqlParser.KW_CASE = 16;
GenericSqlParser.KW_CAST = 17;
GenericSqlParser.KW_CHAR = 18;
GenericSqlParser.KW_CHECK = 19;
GenericSqlParser.KW_COALESCE = 20;
GenericSqlParser.KW_COLUMN = 21;
GenericSqlParser.KW_CONSTRAINT = 22;
GenericSqlParser.KW_CREATE = 23;
GenericSqlParser.KW_CROSS = 24;
GenericSqlParser.KW_DATE = 25;
GenericSqlParser.KW_DECIMAL = 26;
GenericSqlParser.KW_DEFAULT = 27;
GenericSqlParser.KW_DELETE = 28;
GenericSqlParser.KW_DESC = 29;
GenericSqlParser.KW_DISTINCT = 30;
GenericSqlParser.KW_DOUBLE = 31;
GenericSqlParser.KW_DROP = 32;
GenericSqlParser.KW_ELSE = 33;
GenericSqlParser.KW_END = 34;
GenericSqlParser.KW_ESCAPE = 35;
GenericSqlParser.KW_EXCEPT = 36;
GenericSqlParser.KW_EXISTS = 37;
GenericSqlParser.KW_FALSE = 38;
GenericSqlParser.KW_FIRST = 39;
GenericSqlParser.KW_FLOAT = 40;
GenericSqlParser.KW_FOREIGN = 41;
GenericSqlParser.KW_FROM = 42;
GenericSqlParser.KW_FULL = 43;
GenericSqlParser.KW_GROUP = 44;
GenericSqlParser.KW_HAVING = 45;
GenericSqlParser.KW_IF = 46;
GenericSqlParser.KW_IN = 47;
GenericSqlParser.KW_INNER = 48;
GenericSqlParser.KW_INSERT = 49;
GenericSqlParser.KW_INT = 50;
GenericSqlParser.KW_INTEGER = 51;
GenericSqlParser.KW_INTERSECT = 52;
GenericSqlParser.KW_INTO = 53;
GenericSqlParser.KW_IS = 54;
GenericSqlParser.KW_JOIN = 55;
GenericSqlParser.KW_KEY = 56;
GenericSqlParser.KW_LAST = 57;
GenericSqlParser.KW_LEFT = 58;
GenericSqlParser.KW_LIKE = 59;
GenericSqlParser.KW_LIMIT = 60;
GenericSqlParser.KW_NOT = 61;
GenericSqlParser.KW_NULL = 62;
GenericSqlParser.KW_NULLIF = 63;
GenericSqlParser.KW_NULLS = 64;
GenericSqlParser.KW_NUMERIC = 65;
GenericSqlParser.KW_OFFSET = 66;
GenericSqlParser.KW_ON = 67;
GenericSqlParser.KW_OR = 68;
GenericSqlParser.KW_ORDER = 69;
GenericSqlParser.KW_OUTER = 70;
GenericSqlParser.KW_PRIMARY = 71;
GenericSqlParser.KW_RECURSIVE = 72;
GenericSqlParser.KW_REFERENCES = 73;
GenericSqlParser.KW_RENAME = 74;
GenericSqlParser.KW_RIGHT = 75;
GenericSqlParser.KW_SELECT = 76;
GenericSqlParser.KW_SET = 77;
GenericSqlParser.KW_SMALLINT = 78;
GenericSqlParser.KW_TABLE = 79;
GenericSqlParser.KW_TEXT = 80;
GenericSqlParser.KW_THEN = 81;
GenericSqlParser.KW_TIME = 82;
GenericSqlParser.KW_TIMESTAMP = 83;
GenericSqlParser.KW_TINYINT = 84;
GenericSqlParser.KW_TO = 85;
GenericSqlParser.KW_TRUE = 86;
GenericSqlParser.KW_UNION = 87;
GenericSqlParser.KW_UNIQUE = 88;
GenericSqlParser.KW_UPDATE = 89;
GenericSqlParser.KW_VARCHAR = 90;
GenericSqlParser.KW_VARBINARY = 91;
GenericSqlParser.KW_WHEN = 92;
GenericSqlParser.KW_WHERE = 93;
GenericSqlParser.KW_WITH = 94;
GenericSqlParser.EQ = 95;
GenericSqlParser.NEQ = 96;
GenericSqlParser.LT = 97;
GenericSqlParser.LTE = 98;
GenericSqlParser.GT = 99;
GenericSqlParser.GTE = 100;
GenericSqlParser.PLUS = 101;
GenericSqlParser.MINUS = 102;
GenericSqlParser.ASTERISK = 103;
GenericSqlParser.SLASH = 104;
GenericSqlParser.PERCENT = 105;
GenericSqlParser.CONCAT = 106;
GenericSqlParser.QUESTION_MARK = 107;
GenericSqlParser.SEMICOLON = 108;
GenericSqlParser.STRING = 109;
GenericSqlParser.BINARY_LITERAL = 110;
GenericSqlParser.INTEGER_VALUE = 111;
GenericSqlParser.DECIMAL_VALUE = 112;
GenericSqlParser.DOUBLE_VALUE = 113;
GenericSqlParser.IDENTIFIER = 114;
GenericSqlParser.DIGIT_IDENTIFIER = 115;
GenericSqlParser.QUOTED_IDENTIFIER = 116;
GenericSqlParser.BACKQUOTED_IDENTIFIER = 117;
GenericSqlParser.LINE_COMMENT = 118;
GenericSqlParser.BRACKETED_COMMENT = 119;
GenericSqlParser.WHITE_SPACE = 120;
GenericSqlParser.UNRECOGNIZED = 121;
GenericSqlParser.DELIMITER = 122;
GenericSqlParser.RULE_program = 0;
GenericSqlParser.RULE_statements = 1;
GenericSqlParser.RULE_singleStatement = 2;
GenericSqlParser.RULE_statement = 3;
GenericSqlParser.RULE_queryStatement = 4;
GenericSqlParser.RULE_withClause = 5;
GenericSqlParser.RULE_namedQuery = 6;
GenericSqlParser.RULE_cteColumnList = 7;
GenericSqlParser.RULE_queryNoWith = 8;
GenericSqlParser.RULE_queryTerm = 9;
GenericSqlParser.RULE_queryPrimary = 10;
GenericSqlParser.RULE_querySpecification = 11;
GenericSqlParser.RULE_setQuantifier = 12;
GenericSqlParser.RULE_selectItem = 13;
GenericSqlParser.RULE_fromClause = 14;
GenericSqlParser.RULE_relation = 15;
GenericSqlParser.RULE_joinType = 16;
GenericSqlParser.RULE_aliasedRelation = 17;
GenericSqlParser.RULE_relationPrimary = 18;
GenericSqlParser.RULE_whereClause = 19;
GenericSqlParser.RULE_groupByClause = 20;
GenericSqlParser.RULE_havingClause = 21;
GenericSqlParser.RULE_orderByClause = 22;
GenericSqlParser.RULE_sortItem = 23;
GenericSqlParser.RULE_limitClause = 24;
GenericSqlParser.RULE_insertStatement = 25;
GenericSqlParser.RULE_columnList = 26;
GenericSqlParser.RULE_updateStatement = 27;
GenericSqlParser.RULE_updateAssignment = 28;
GenericSqlParser.RULE_deleteStatement = 29;
GenericSqlParser.RULE_createTableStatement = 30;
GenericSqlParser.RULE_tableElement = 31;
GenericSqlParser.RULE_columnDefinition = 32;
GenericSqlParser.RULE_columnRefCreate = 33;
GenericSqlParser.RULE_tableConstraint = 34;
GenericSqlParser.RULE_alterTableStatement = 35;
GenericSqlParser.RULE_dropTableStatement = 36;
GenericSqlParser.RULE_expression = 37;
GenericSqlParser.RULE_booleanExpression = 38;
GenericSqlParser.RULE_predicatedExpression = 39;
GenericSqlParser.RULE_predicate = 40;
GenericSqlParser.RULE_comparisonOperator = 41;
GenericSqlParser.RULE_valueExpression = 42;
GenericSqlParser.RULE_primaryExpression = 43;
GenericSqlParser.RULE_whenClause = 44;
GenericSqlParser.RULE_subqueryExpression = 45;
GenericSqlParser.RULE_dataType = 46;
GenericSqlParser.RULE_properties = 47;
GenericSqlParser.RULE_property = 48;
GenericSqlParser.RULE_literal = 49;
GenericSqlParser.RULE_identifier = 50;
GenericSqlParser.RULE_qualifiedName = 51;
GenericSqlParser.RULE_qualifiedNameAllowEmpty = 52;
GenericSqlParser.RULE_columnRef = 53;
GenericSqlParser.RULE_columnName = 54;
GenericSqlParser.RULE_emptyColumn = 55;
GenericSqlParser.RULE_tableName = 56;
GenericSqlParser.RULE_tableNameCreate = 57;
GenericSqlParser.RULE_functionName = 58;
GenericSqlParser.RULE_nonReserved = 59;
GenericSqlParser.literalNames = [
    null, "','", "'('", "')'", "'.'", "'ADD'", "'ALL'", "'ALTER'", "'AND'",
    "'AS'", "'ASC'", "'BETWEEN'", "'BIGINT'", "'BINARY'", "'BOOLEAN'",
    "'BY'", "'CASE'", "'CAST'", "'CHAR'", "'CHECK'", "'COALESCE'", "'COLUMN'",
    "'CONSTRAINT'", "'CREATE'", "'CROSS'", "'DATE'", "'DECIMAL'", "'DEFAULT'",
    "'DELETE'", "'DESC'", "'DISTINCT'", "'DOUBLE'", "'DROP'", "'ELSE'",
    "'END'", "'ESCAPE'", "'EXCEPT'", "'EXISTS'", "'FALSE'", "'FIRST'",
    "'FLOAT'", "'FOREIGN'", "'FROM'", "'FULL'", "'GROUP'", "'HAVING'",
    "'IF'", "'IN'", "'INNER'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'",
    "'INTO'", "'IS'", "'JOIN'", "'KEY'", "'LAST'", "'LEFT'", "'LIKE'",
    "'LIMIT'", "'NOT'", "'NULL'", "'NULLIF'", "'NULLS'", "'NUMERIC'",
    "'OFFSET'", "'ON'", "'OR'", "'ORDER'", "'OUTER'", "'PRIMARY'", "'RECURSIVE'",
    "'REFERENCES'", "'RENAME'", "'RIGHT'", "'SELECT'", "'SET'", "'SMALLINT'",
    "'TABLE'", "'TEXT'", "'THEN'", "'TIME'", "'TIMESTAMP'", "'TINYINT'",
    "'TO'", "'TRUE'", "'UNION'", "'UNIQUE'", "'UPDATE'", "'VARCHAR'",
    "'VARBINARY'", "'WHEN'", "'WHERE'", "'WITH'", "'='", null, "'<'",
    "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'",
    "'?'", "';'"
];
GenericSqlParser.symbolicNames = [
    null, null, null, null, null, "KW_ADD", "KW_ALL", "KW_ALTER", "KW_AND",
    "KW_AS", "KW_ASC", "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BOOLEAN",
    "KW_BY", "KW_CASE", "KW_CAST", "KW_CHAR", "KW_CHECK", "KW_COALESCE",
    "KW_COLUMN", "KW_CONSTRAINT", "KW_CREATE", "KW_CROSS", "KW_DATE",
    "KW_DECIMAL", "KW_DEFAULT", "KW_DELETE", "KW_DESC", "KW_DISTINCT",
    "KW_DOUBLE", "KW_DROP", "KW_ELSE", "KW_END", "KW_ESCAPE", "KW_EXCEPT",
    "KW_EXISTS", "KW_FALSE", "KW_FIRST", "KW_FLOAT", "KW_FOREIGN", "KW_FROM",
    "KW_FULL", "KW_GROUP", "KW_HAVING", "KW_IF", "KW_IN", "KW_INNER",
    "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTO",
    "KW_IS", "KW_JOIN", "KW_KEY", "KW_LAST", "KW_LEFT", "KW_LIKE", "KW_LIMIT",
    "KW_NOT", "KW_NULL", "KW_NULLIF", "KW_NULLS", "KW_NUMERIC", "KW_OFFSET",
    "KW_ON", "KW_OR", "KW_ORDER", "KW_OUTER", "KW_PRIMARY", "KW_RECURSIVE",
    "KW_REFERENCES", "KW_RENAME", "KW_RIGHT", "KW_SELECT", "KW_SET",
    "KW_SMALLINT", "KW_TABLE", "KW_TEXT", "KW_THEN", "KW_TIME", "KW_TIMESTAMP",
    "KW_TINYINT", "KW_TO", "KW_TRUE", "KW_UNION", "KW_UNIQUE", "KW_UPDATE",
    "KW_VARCHAR", "KW_VARBINARY", "KW_WHEN", "KW_WHERE", "KW_WITH",
    "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK",
    "SLASH", "PERCENT", "CONCAT", "QUESTION_MARK", "SEMICOLON", "STRING",
    "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE",
    "IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER",
    "LINE_COMMENT", "BRACKETED_COMMENT", "WHITE_SPACE", "UNRECOGNIZED",
    "DELIMITER"
];
GenericSqlParser.ruleNames = [
    "program", "statements", "singleStatement", "statement", "queryStatement",
    "withClause", "namedQuery", "cteColumnList", "queryNoWith", "queryTerm",
    "queryPrimary", "querySpecification", "setQuantifier", "selectItem",
    "fromClause", "relation", "joinType", "aliasedRelation", "relationPrimary",
    "whereClause", "groupByClause", "havingClause", "orderByClause",
    "sortItem", "limitClause", "insertStatement", "columnList", "updateStatement",
    "updateAssignment", "deleteStatement", "createTableStatement", "tableElement",
    "columnDefinition", "columnRefCreate", "tableConstraint", "alterTableStatement",
    "dropTableStatement", "expression", "booleanExpression", "predicatedExpression",
    "predicate", "comparisonOperator", "valueExpression", "primaryExpression",
    "whenClause", "subqueryExpression", "dataType", "properties", "property",
    "literal", "identifier", "qualifiedName", "qualifiedNameAllowEmpty",
    "columnRef", "columnName", "emptyColumn", "tableName", "tableNameCreate",
    "functionName", "nonReserved",
];
GenericSqlParser._serializedATN = [
    4, 1, 122, 854, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
    7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
    13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
    20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7,
    26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7,
    39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
    46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7,
    52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2,
    59, 7, 59, 1, 0, 5, 0, 122, 8, 0, 10, 0, 12, 0, 125, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1,
    2, 3, 2, 133, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 142, 8, 3, 1, 4, 3, 4, 145,
    8, 4, 1, 4, 1, 4, 1, 5, 1, 5, 3, 5, 151, 8, 5, 1, 5, 1, 5, 1, 5, 5, 5, 156, 8, 5, 10, 5, 12,
    5, 159, 9, 5, 1, 6, 1, 6, 3, 6, 163, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1,
    7, 5, 7, 174, 8, 7, 10, 7, 12, 7, 177, 9, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 3, 8, 184, 8, 8,
    1, 8, 5, 8, 187, 8, 8, 10, 8, 12, 8, 190, 9, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 3, 10, 199, 8, 10, 1, 11, 1, 11, 3, 11, 203, 8, 11, 1, 11, 1, 11, 1, 11, 5, 11, 208,
    8, 11, 10, 11, 12, 11, 211, 9, 11, 1, 11, 3, 11, 214, 8, 11, 1, 11, 3, 11, 217, 8, 11,
    1, 11, 3, 11, 220, 8, 11, 1, 11, 3, 11, 223, 8, 11, 1, 11, 3, 11, 226, 8, 11, 1, 11, 3,
    11, 229, 8, 11, 1, 12, 1, 12, 1, 13, 1, 13, 3, 13, 235, 8, 13, 1, 13, 3, 13, 238, 8, 13,
    1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 247, 8, 13, 1, 14, 1, 14, 1, 14,
    1, 14, 5, 14, 253, 8, 14, 10, 14, 12, 14, 256, 9, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 5, 15, 268, 8, 15, 10, 15, 12, 15, 271, 9, 15, 1, 16,
    3, 16, 274, 8, 16, 1, 16, 1, 16, 3, 16, 278, 8, 16, 1, 16, 1, 16, 3, 16, 282, 8, 16, 1,
    16, 1, 16, 3, 16, 286, 8, 16, 1, 16, 3, 16, 289, 8, 16, 1, 17, 1, 17, 3, 17, 293, 8, 17,
    1, 17, 3, 17, 296, 8, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 303, 8, 18, 1, 19, 1,
    19, 1, 19, 1, 19, 3, 19, 309, 8, 19, 1, 20, 1, 20, 1, 20, 3, 20, 314, 8, 20, 1, 20, 1, 20,
    1, 20, 5, 20, 319, 8, 20, 10, 20, 12, 20, 322, 9, 20, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21,
    328, 8, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 5, 22, 335, 8, 22, 10, 22, 12, 22, 338,
    9, 22, 1, 23, 1, 23, 3, 23, 342, 8, 23, 1, 23, 1, 23, 3, 23, 346, 8, 23, 1, 24, 1, 24, 1,
    24, 1, 24, 3, 24, 352, 8, 24, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 358, 8, 25, 1, 25, 1, 25,
    1, 26, 1, 26, 1, 26, 1, 26, 5, 26, 366, 8, 26, 10, 26, 12, 26, 369, 9, 26, 1, 26, 1, 26,
    1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 379, 8, 27, 10, 27, 12, 27, 382, 9, 27,
    1, 27, 3, 27, 385, 8, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29,
    395, 8, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 402, 8, 30, 1, 30, 1, 30, 1, 30, 1,
    30, 1, 30, 5, 30, 409, 8, 30, 10, 30, 12, 30, 412, 9, 30, 1, 30, 1, 30, 1, 30, 3, 30, 417,
    8, 30, 1, 31, 1, 31, 3, 31, 421, 8, 31, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 427, 8, 32, 1,
    32, 1, 32, 3, 32, 431, 8, 32, 1, 32, 1, 32, 3, 32, 435, 8, 32, 1, 33, 1, 33, 1, 34, 1, 34,
    3, 34, 441, 8, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 449, 8, 34, 10, 34,
    12, 34, 452, 9, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 461, 8, 34,
    10, 34, 12, 34, 464, 9, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34,
    1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 479, 8, 34, 10, 34, 12, 34, 482, 9, 34, 1, 34, 1, 34,
    1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 491, 8, 34, 10, 34, 12, 34, 494, 9, 34, 1, 34,
    1, 34, 3, 34, 498, 8, 34, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 504, 8, 35, 1, 35, 1, 35, 1,
    35, 1, 35, 1, 35, 1, 35, 3, 35, 512, 8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 519,
    8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35,
    1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 538, 8, 35, 1, 36, 1, 36, 1, 36, 1, 36, 3, 36,
    544, 8, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 3, 38, 554, 8, 38, 1,
    38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 5, 38, 562, 8, 38, 10, 38, 12, 38, 565, 9, 38, 1,
    39, 1, 39, 3, 39, 569, 8, 39, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 575, 8, 40, 1, 40, 1, 40,
    1, 40, 1, 40, 1, 40, 5, 40, 582, 8, 40, 10, 40, 12, 40, 585, 9, 40, 1, 40, 1, 40, 1, 40,
    3, 40, 590, 8, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 598, 8, 40, 1, 40, 1,
    40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 606, 8, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 612,
    8, 40, 1, 40, 1, 40, 3, 40, 616, 8, 40, 1, 40, 1, 40, 1, 40, 3, 40, 621, 8, 40, 1, 40, 1,
    40, 1, 40, 3, 40, 626, 8, 40, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 1, 42, 3, 42, 634, 8, 42,
    1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 5, 42, 645, 8, 42, 10, 42,
    12, 42, 648, 9, 42, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 654, 8, 43, 1, 43, 1, 43, 1, 43,
    5, 43, 659, 8, 43, 10, 43, 12, 43, 662, 9, 43, 3, 43, 664, 8, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 4, 43, 670, 8, 43, 11, 43, 12, 43, 671, 1, 43, 1, 43, 3, 43, 676, 8, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 4, 43, 683, 8, 43, 11, 43, 12, 43, 684, 1, 43, 1, 43, 3, 43,
    689, 8, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 5, 43, 705, 8, 43, 10, 43, 12, 43, 708, 9, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 730, 8, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45,
    1, 45, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46,
    1, 46, 1, 46, 1, 46, 3, 46, 754, 8, 46, 1, 46, 3, 46, 757, 8, 46, 1, 46, 1, 46, 1, 46, 1,
    46, 1, 46, 3, 46, 764, 8, 46, 1, 46, 3, 46, 767, 8, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46,
    773, 8, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46, 779, 8, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1,
    46, 1, 46, 3, 46, 787, 8, 46, 1, 47, 1, 47, 1, 47, 1, 47, 5, 47, 793, 8, 47, 10, 47, 12,
    47, 796, 9, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1,
    49, 1, 49, 1, 49, 1, 49, 3, 49, 812, 8, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 819,
    8, 50, 1, 51, 1, 51, 1, 51, 5, 51, 824, 8, 51, 10, 51, 12, 51, 827, 9, 51, 1, 52, 1, 52,
    1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 835, 8, 52, 1, 53, 1, 53, 1, 53, 3, 53, 840, 8, 53, 1,
    54, 1, 54, 1, 55, 1, 55, 1, 56, 1, 56, 1, 57, 1, 57, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 0,
    3, 30, 76, 84, 60, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
    38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80,
    82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118,
    0, 8, 3, 0, 36, 36, 52, 52, 87, 87, 2, 0, 6, 6, 30, 30, 2, 0, 10, 10, 29, 29, 2, 0, 39, 39,
    57, 57, 1, 0, 95, 100, 1, 0, 101, 102, 1, 0, 103, 105, 22, 0, 5, 6, 10, 10, 12, 15, 18,
    18, 20, 21, 24, 27, 29, 29, 31, 31, 38, 40, 43, 43, 46, 46, 50, 51, 56, 58, 60, 60, 63,
    66, 70, 70, 75, 75, 78, 78, 80, 80, 82, 86, 88, 88, 90, 91, 949, 0, 123, 1, 0, 0, 0, 2,
    128, 1, 0, 0, 0, 4, 130, 1, 0, 0, 0, 6, 141, 1, 0, 0, 0, 8, 144, 1, 0, 0, 0, 10, 148, 1, 0,
    0, 0, 12, 160, 1, 0, 0, 0, 14, 169, 1, 0, 0, 0, 16, 180, 1, 0, 0, 0, 18, 191, 1, 0, 0, 0,
    20, 198, 1, 0, 0, 0, 22, 200, 1, 0, 0, 0, 24, 230, 1, 0, 0, 0, 26, 246, 1, 0, 0, 0, 28, 248,
    1, 0, 0, 0, 30, 257, 1, 0, 0, 0, 32, 288, 1, 0, 0, 0, 34, 290, 1, 0, 0, 0, 36, 302, 1, 0,
    0, 0, 38, 304, 1, 0, 0, 0, 40, 310, 1, 0, 0, 0, 42, 323, 1, 0, 0, 0, 44, 329, 1, 0, 0, 0,
    46, 339, 1, 0, 0, 0, 48, 347, 1, 0, 0, 0, 50, 353, 1, 0, 0, 0, 52, 361, 1, 0, 0, 0, 54, 372,
    1, 0, 0, 0, 56, 386, 1, 0, 0, 0, 58, 390, 1, 0, 0, 0, 60, 396, 1, 0, 0, 0, 62, 420, 1, 0,
    0, 0, 64, 422, 1, 0, 0, 0, 66, 436, 1, 0, 0, 0, 68, 440, 1, 0, 0, 0, 70, 499, 1, 0, 0, 0,
    72, 539, 1, 0, 0, 0, 74, 547, 1, 0, 0, 0, 76, 553, 1, 0, 0, 0, 78, 566, 1, 0, 0, 0, 80, 625,
    1, 0, 0, 0, 82, 627, 1, 0, 0, 0, 84, 633, 1, 0, 0, 0, 86, 729, 1, 0, 0, 0, 88, 731, 1, 0,
    0, 0, 90, 736, 1, 0, 0, 0, 92, 786, 1, 0, 0, 0, 94, 788, 1, 0, 0, 0, 96, 799, 1, 0, 0, 0,
    98, 811, 1, 0, 0, 0, 100, 818, 1, 0, 0, 0, 102, 820, 1, 0, 0, 0, 104, 834, 1, 0, 0, 0, 106,
    839, 1, 0, 0, 0, 108, 841, 1, 0, 0, 0, 110, 843, 1, 0, 0, 0, 112, 845, 1, 0, 0, 0, 114,
    847, 1, 0, 0, 0, 116, 849, 1, 0, 0, 0, 118, 851, 1, 0, 0, 0, 120, 122, 3, 2, 1, 0, 121,
    120, 1, 0, 0, 0, 122, 125, 1, 0, 0, 0, 123, 121, 1, 0, 0, 0, 123, 124, 1, 0, 0, 0, 124,
    126, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 126, 127, 5, 0, 0, 1, 127, 1, 1, 0, 0, 0, 128, 129,
    3, 4, 2, 0, 129, 3, 1, 0, 0, 0, 130, 132, 3, 6, 3, 0, 131, 133, 5, 108, 0, 0, 132, 131,
    1, 0, 0, 0, 132, 133, 1, 0, 0, 0, 133, 5, 1, 0, 0, 0, 134, 142, 3, 8, 4, 0, 135, 142, 3,
    50, 25, 0, 136, 142, 3, 54, 27, 0, 137, 142, 3, 58, 29, 0, 138, 142, 3, 60, 30, 0, 139,
    142, 3, 70, 35, 0, 140, 142, 3, 72, 36, 0, 141, 134, 1, 0, 0, 0, 141, 135, 1, 0, 0, 0,
    141, 136, 1, 0, 0, 0, 141, 137, 1, 0, 0, 0, 141, 138, 1, 0, 0, 0, 141, 139, 1, 0, 0, 0,
    141, 140, 1, 0, 0, 0, 142, 7, 1, 0, 0, 0, 143, 145, 3, 10, 5, 0, 144, 143, 1, 0, 0, 0, 144,
    145, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146, 147, 3, 16, 8, 0, 147, 9, 1, 0, 0, 0, 148, 150,
    5, 94, 0, 0, 149, 151, 5, 72, 0, 0, 150, 149, 1, 0, 0, 0, 150, 151, 1, 0, 0, 0, 151, 152,
    1, 0, 0, 0, 152, 157, 3, 12, 6, 0, 153, 154, 5, 1, 0, 0, 154, 156, 3, 12, 6, 0, 155, 153,
    1, 0, 0, 0, 156, 159, 1, 0, 0, 0, 157, 155, 1, 0, 0, 0, 157, 158, 1, 0, 0, 0, 158, 11, 1,
    0, 0, 0, 159, 157, 1, 0, 0, 0, 160, 162, 3, 100, 50, 0, 161, 163, 3, 14, 7, 0, 162, 161,
    1, 0, 0, 0, 162, 163, 1, 0, 0, 0, 163, 164, 1, 0, 0, 0, 164, 165, 5, 9, 0, 0, 165, 166,
    5, 2, 0, 0, 166, 167, 3, 8, 4, 0, 167, 168, 5, 3, 0, 0, 168, 13, 1, 0, 0, 0, 169, 170, 5,
    2, 0, 0, 170, 175, 3, 100, 50, 0, 171, 172, 5, 1, 0, 0, 172, 174, 3, 100, 50, 0, 173,
    171, 1, 0, 0, 0, 174, 177, 1, 0, 0, 0, 175, 173, 1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176,
    178, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 178, 179, 5, 3, 0, 0, 179, 15, 1, 0, 0, 0, 180, 188,
    3, 18, 9, 0, 181, 183, 7, 0, 0, 0, 182, 184, 5, 6, 0, 0, 183, 182, 1, 0, 0, 0, 183, 184,
    1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 187, 3, 18, 9, 0, 186, 181, 1, 0, 0, 0, 187, 190,
    1, 0, 0, 0, 188, 186, 1, 0, 0, 0, 188, 189, 1, 0, 0, 0, 189, 17, 1, 0, 0, 0, 190, 188, 1,
    0, 0, 0, 191, 192, 3, 20, 10, 0, 192, 19, 1, 0, 0, 0, 193, 199, 3, 22, 11, 0, 194, 195,
    5, 2, 0, 0, 195, 196, 3, 8, 4, 0, 196, 197, 5, 3, 0, 0, 197, 199, 1, 0, 0, 0, 198, 193,
    1, 0, 0, 0, 198, 194, 1, 0, 0, 0, 199, 21, 1, 0, 0, 0, 200, 202, 5, 76, 0, 0, 201, 203,
    3, 24, 12, 0, 202, 201, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 204, 1, 0, 0, 0, 204, 209,
    3, 26, 13, 0, 205, 206, 5, 1, 0, 0, 206, 208, 3, 26, 13, 0, 207, 205, 1, 0, 0, 0, 208,
    211, 1, 0, 0, 0, 209, 207, 1, 0, 0, 0, 209, 210, 1, 0, 0, 0, 210, 213, 1, 0, 0, 0, 211,
    209, 1, 0, 0, 0, 212, 214, 3, 28, 14, 0, 213, 212, 1, 0, 0, 0, 213, 214, 1, 0, 0, 0, 214,
    216, 1, 0, 0, 0, 215, 217, 3, 38, 19, 0, 216, 215, 1, 0, 0, 0, 216, 217, 1, 0, 0, 0, 217,
    219, 1, 0, 0, 0, 218, 220, 3, 40, 20, 0, 219, 218, 1, 0, 0, 0, 219, 220, 1, 0, 0, 0, 220,
    222, 1, 0, 0, 0, 221, 223, 3, 42, 21, 0, 222, 221, 1, 0, 0, 0, 222, 223, 1, 0, 0, 0, 223,
    225, 1, 0, 0, 0, 224, 226, 3, 44, 22, 0, 225, 224, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226,
    228, 1, 0, 0, 0, 227, 229, 3, 48, 24, 0, 228, 227, 1, 0, 0, 0, 228, 229, 1, 0, 0, 0, 229,
    23, 1, 0, 0, 0, 230, 231, 7, 1, 0, 0, 231, 25, 1, 0, 0, 0, 232, 237, 3, 74, 37, 0, 233,
    235, 5, 9, 0, 0, 234, 233, 1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236,
    238, 3, 100, 50, 0, 237, 234, 1, 0, 0, 0, 237, 238, 1, 0, 0, 0, 238, 247, 1, 0, 0, 0, 239,
    240, 3, 102, 51, 0, 240, 241, 5, 4, 0, 0, 241, 242, 5, 103, 0, 0, 242, 247, 1, 0, 0, 0,
    243, 247, 5, 103, 0, 0, 244, 245, 4, 13, 0, 0, 245, 247, 3, 110, 55, 0, 246, 232, 1,
    0, 0, 0, 246, 239, 1, 0, 0, 0, 246, 243, 1, 0, 0, 0, 246, 244, 1, 0, 0, 0, 247, 27, 1, 0,
    0, 0, 248, 249, 5, 42, 0, 0, 249, 254, 3, 30, 15, 0, 250, 251, 5, 1, 0, 0, 251, 253, 3,
    30, 15, 0, 252, 250, 1, 0, 0, 0, 253, 256, 1, 0, 0, 0, 254, 252, 1, 0, 0, 0, 254, 255,
    1, 0, 0, 0, 255, 29, 1, 0, 0, 0, 256, 254, 1, 0, 0, 0, 257, 258, 6, 15, -1, 0, 258, 259,
    3, 34, 17, 0, 259, 269, 1, 0, 0, 0, 260, 261, 10, 2, 0, 0, 261, 262, 3, 32, 16, 0, 262,
    263, 5, 55, 0, 0, 263, 264, 3, 30, 15, 0, 264, 265, 5, 67, 0, 0, 265, 266, 3, 74, 37,
    0, 266, 268, 1, 0, 0, 0, 267, 260, 1, 0, 0, 0, 268, 271, 1, 0, 0, 0, 269, 267, 1, 0, 0,
    0, 269, 270, 1, 0, 0, 0, 270, 31, 1, 0, 0, 0, 271, 269, 1, 0, 0, 0, 272, 274, 5, 48, 0,
    0, 273, 272, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274, 289, 1, 0, 0, 0, 275, 277, 5, 58, 0,
    0, 276, 278, 5, 70, 0, 0, 277, 276, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 289, 1, 0, 0,
    0, 279, 281, 5, 75, 0, 0, 280, 282, 5, 70, 0, 0, 281, 280, 1, 0, 0, 0, 281, 282, 1, 0,
    0, 0, 282, 289, 1, 0, 0, 0, 283, 285, 5, 43, 0, 0, 284, 286, 5, 70, 0, 0, 285, 284, 1,
    0, 0, 0, 285, 286, 1, 0, 0, 0, 286, 289, 1, 0, 0, 0, 287, 289, 5, 24, 0, 0, 288, 273, 1,
    0, 0, 0, 288, 275, 1, 0, 0, 0, 288, 279, 1, 0, 0, 0, 288, 283, 1, 0, 0, 0, 288, 287, 1,
    0, 0, 0, 289, 33, 1, 0, 0, 0, 290, 295, 3, 36, 18, 0, 291, 293, 5, 9, 0, 0, 292, 291, 1,
    0, 0, 0, 292, 293, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 296, 3, 100, 50, 0, 295, 292,
    1, 0, 0, 0, 295, 296, 1, 0, 0, 0, 296, 35, 1, 0, 0, 0, 297, 303, 3, 112, 56, 0, 298, 299,
    5, 2, 0, 0, 299, 300, 3, 8, 4, 0, 300, 301, 5, 3, 0, 0, 301, 303, 1, 0, 0, 0, 302, 297,
    1, 0, 0, 0, 302, 298, 1, 0, 0, 0, 303, 37, 1, 0, 0, 0, 304, 308, 5, 93, 0, 0, 305, 309,
    3, 74, 37, 0, 306, 307, 4, 19, 2, 0, 307, 309, 3, 110, 55, 0, 308, 305, 1, 0, 0, 0, 308,
    306, 1, 0, 0, 0, 309, 39, 1, 0, 0, 0, 310, 311, 5, 44, 0, 0, 311, 313, 5, 15, 0, 0, 312,
    314, 3, 24, 12, 0, 313, 312, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315,
    320, 3, 74, 37, 0, 316, 317, 5, 1, 0, 0, 317, 319, 3, 74, 37, 0, 318, 316, 1, 0, 0, 0,
    319, 322, 1, 0, 0, 0, 320, 318, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 41, 1, 0, 0, 0, 322,
    320, 1, 0, 0, 0, 323, 327, 5, 45, 0, 0, 324, 328, 3, 74, 37, 0, 325, 326, 4, 21, 3, 0,
    326, 328, 3, 110, 55, 0, 327, 324, 1, 0, 0, 0, 327, 325, 1, 0, 0, 0, 328, 43, 1, 0, 0,
    0, 329, 330, 5, 69, 0, 0, 330, 331, 5, 15, 0, 0, 331, 336, 3, 46, 23, 0, 332, 333, 5,
    1, 0, 0, 333, 335, 3, 46, 23, 0, 334, 332, 1, 0, 0, 0, 335, 338, 1, 0, 0, 0, 336, 334,
    1, 0, 0, 0, 336, 337, 1, 0, 0, 0, 337, 45, 1, 0, 0, 0, 338, 336, 1, 0, 0, 0, 339, 341, 3,
    74, 37, 0, 340, 342, 7, 2, 0, 0, 341, 340, 1, 0, 0, 0, 341, 342, 1, 0, 0, 0, 342, 345,
    1, 0, 0, 0, 343, 344, 5, 64, 0, 0, 344, 346, 7, 3, 0, 0, 345, 343, 1, 0, 0, 0, 345, 346,
    1, 0, 0, 0, 346, 47, 1, 0, 0, 0, 347, 348, 5, 60, 0, 0, 348, 351, 3, 74, 37, 0, 349, 350,
    5, 66, 0, 0, 350, 352, 3, 74, 37, 0, 351, 349, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352, 49,
    1, 0, 0, 0, 353, 354, 5, 49, 0, 0, 354, 355, 5, 53, 0, 0, 355, 357, 3, 112, 56, 0, 356,
    358, 3, 52, 26, 0, 357, 356, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 358, 359, 1, 0, 0, 0, 359,
    360, 3, 8, 4, 0, 360, 51, 1, 0, 0, 0, 361, 362, 5, 2, 0, 0, 362, 367, 3, 106, 53, 0, 363,
    364, 5, 1, 0, 0, 364, 366, 3, 106, 53, 0, 365, 363, 1, 0, 0, 0, 366, 369, 1, 0, 0, 0, 367,
    365, 1, 0, 0, 0, 367, 368, 1, 0, 0, 0, 368, 370, 1, 0, 0, 0, 369, 367, 1, 0, 0, 0, 370,
    371, 5, 3, 0, 0, 371, 53, 1, 0, 0, 0, 372, 373, 5, 89, 0, 0, 373, 374, 3, 112, 56, 0, 374,
    375, 5, 77, 0, 0, 375, 380, 3, 56, 28, 0, 376, 377, 5, 1, 0, 0, 377, 379, 3, 56, 28, 0,
    378, 376, 1, 0, 0, 0, 379, 382, 1, 0, 0, 0, 380, 378, 1, 0, 0, 0, 380, 381, 1, 0, 0, 0,
    381, 384, 1, 0, 0, 0, 382, 380, 1, 0, 0, 0, 383, 385, 3, 38, 19, 0, 384, 383, 1, 0, 0,
    0, 384, 385, 1, 0, 0, 0, 385, 55, 1, 0, 0, 0, 386, 387, 3, 106, 53, 0, 387, 388, 5, 95,
    0, 0, 388, 389, 3, 74, 37, 0, 389, 57, 1, 0, 0, 0, 390, 391, 5, 28, 0, 0, 391, 392, 5,
    42, 0, 0, 392, 394, 3, 112, 56, 0, 393, 395, 3, 38, 19, 0, 394, 393, 1, 0, 0, 0, 394,
    395, 1, 0, 0, 0, 395, 59, 1, 0, 0, 0, 396, 397, 5, 23, 0, 0, 397, 401, 5, 79, 0, 0, 398,
    399, 5, 46, 0, 0, 399, 400, 5, 61, 0, 0, 400, 402, 5, 37, 0, 0, 401, 398, 1, 0, 0, 0, 401,
    402, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 404, 3, 114, 57, 0, 404, 405, 5, 2, 0, 0, 405,
    410, 3, 62, 31, 0, 406, 407, 5, 1, 0, 0, 407, 409, 3, 62, 31, 0, 408, 406, 1, 0, 0, 0,
    409, 412, 1, 0, 0, 0, 410, 408, 1, 0, 0, 0, 410, 411, 1, 0, 0, 0, 411, 413, 1, 0, 0, 0,
    412, 410, 1, 0, 0, 0, 413, 416, 5, 3, 0, 0, 414, 415, 5, 94, 0, 0, 415, 417, 3, 94, 47,
    0, 416, 414, 1, 0, 0, 0, 416, 417, 1, 0, 0, 0, 417, 61, 1, 0, 0, 0, 418, 421, 3, 64, 32,
    0, 419, 421, 3, 68, 34, 0, 420, 418, 1, 0, 0, 0, 420, 419, 1, 0, 0, 0, 421, 63, 1, 0, 0,
    0, 422, 423, 3, 66, 33, 0, 423, 426, 3, 92, 46, 0, 424, 425, 5, 61, 0, 0, 425, 427, 5,
    62, 0, 0, 426, 424, 1, 0, 0, 0, 426, 427, 1, 0, 0, 0, 427, 430, 1, 0, 0, 0, 428, 429, 5,
    27, 0, 0, 429, 431, 3, 74, 37, 0, 430, 428, 1, 0, 0, 0, 430, 431, 1, 0, 0, 0, 431, 434,
    1, 0, 0, 0, 432, 433, 5, 71, 0, 0, 433, 435, 5, 56, 0, 0, 434, 432, 1, 0, 0, 0, 434, 435,
    1, 0, 0, 0, 435, 65, 1, 0, 0, 0, 436, 437, 3, 100, 50, 0, 437, 67, 1, 0, 0, 0, 438, 439,
    5, 22, 0, 0, 439, 441, 3, 100, 50, 0, 440, 438, 1, 0, 0, 0, 440, 441, 1, 0, 0, 0, 441,
    497, 1, 0, 0, 0, 442, 443, 5, 71, 0, 0, 443, 444, 5, 56, 0, 0, 444, 445, 5, 2, 0, 0, 445,
    450, 3, 106, 53, 0, 446, 447, 5, 1, 0, 0, 447, 449, 3, 106, 53, 0, 448, 446, 1, 0, 0,
    0, 449, 452, 1, 0, 0, 0, 450, 448, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 453, 1, 0, 0,
    0, 452, 450, 1, 0, 0, 0, 453, 454, 5, 3, 0, 0, 454, 498, 1, 0, 0, 0, 455, 456, 5, 88, 0,
    0, 456, 457, 5, 2, 0, 0, 457, 462, 3, 106, 53, 0, 458, 459, 5, 1, 0, 0, 459, 461, 3, 106,
    53, 0, 460, 458, 1, 0, 0, 0, 461, 464, 1, 0, 0, 0, 462, 460, 1, 0, 0, 0, 462, 463, 1, 0,
    0, 0, 463, 465, 1, 0, 0, 0, 464, 462, 1, 0, 0, 0, 465, 466, 5, 3, 0, 0, 466, 498, 1, 0,
    0, 0, 467, 468, 5, 19, 0, 0, 468, 469, 5, 2, 0, 0, 469, 470, 3, 74, 37, 0, 470, 471, 5,
    3, 0, 0, 471, 498, 1, 0, 0, 0, 472, 473, 5, 41, 0, 0, 473, 474, 5, 56, 0, 0, 474, 475,
    5, 2, 0, 0, 475, 480, 3, 106, 53, 0, 476, 477, 5, 1, 0, 0, 477, 479, 3, 106, 53, 0, 478,
    476, 1, 0, 0, 0, 479, 482, 1, 0, 0, 0, 480, 478, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481,
    483, 1, 0, 0, 0, 482, 480, 1, 0, 0, 0, 483, 484, 5, 3, 0, 0, 484, 485, 5, 73, 0, 0, 485,
    486, 3, 112, 56, 0, 486, 487, 5, 2, 0, 0, 487, 492, 3, 106, 53, 0, 488, 489, 5, 1, 0,
    0, 489, 491, 3, 106, 53, 0, 490, 488, 1, 0, 0, 0, 491, 494, 1, 0, 0, 0, 492, 490, 1, 0,
    0, 0, 492, 493, 1, 0, 0, 0, 493, 495, 1, 0, 0, 0, 494, 492, 1, 0, 0, 0, 495, 496, 5, 3,
    0, 0, 496, 498, 1, 0, 0, 0, 497, 442, 1, 0, 0, 0, 497, 455, 1, 0, 0, 0, 497, 467, 1, 0,
    0, 0, 497, 472, 1, 0, 0, 0, 498, 69, 1, 0, 0, 0, 499, 500, 5, 7, 0, 0, 500, 503, 5, 79,
    0, 0, 501, 502, 5, 46, 0, 0, 502, 504, 5, 37, 0, 0, 503, 501, 1, 0, 0, 0, 503, 504, 1,
    0, 0, 0, 504, 505, 1, 0, 0, 0, 505, 537, 3, 112, 56, 0, 506, 507, 5, 5, 0, 0, 507, 511,
    5, 21, 0, 0, 508, 509, 5, 46, 0, 0, 509, 510, 5, 61, 0, 0, 510, 512, 5, 37, 0, 0, 511,
    508, 1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 513, 1, 0, 0, 0, 513, 538, 3, 64, 32, 0, 514,
    515, 5, 32, 0, 0, 515, 518, 5, 21, 0, 0, 516, 517, 5, 46, 0, 0, 517, 519, 5, 37, 0, 0,
    518, 516, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0, 519, 520, 1, 0, 0, 0, 520, 538, 3, 106, 53,
    0, 521, 522, 5, 74, 0, 0, 522, 523, 5, 85, 0, 0, 523, 538, 3, 114, 57, 0, 524, 525, 5,
    7, 0, 0, 525, 526, 5, 21, 0, 0, 526, 527, 3, 106, 53, 0, 527, 528, 5, 77, 0, 0, 528, 529,
    5, 27, 0, 0, 529, 530, 3, 74, 37, 0, 530, 538, 1, 0, 0, 0, 531, 532, 5, 7, 0, 0, 532, 533,
    5, 21, 0, 0, 533, 534, 3, 106, 53, 0, 534, 535, 5, 32, 0, 0, 535, 536, 5, 27, 0, 0, 536,
    538, 1, 0, 0, 0, 537, 506, 1, 0, 0, 0, 537, 514, 1, 0, 0, 0, 537, 521, 1, 0, 0, 0, 537,
    524, 1, 0, 0, 0, 537, 531, 1, 0, 0, 0, 538, 71, 1, 0, 0, 0, 539, 540, 5, 32, 0, 0, 540,
    543, 5, 79, 0, 0, 541, 542, 5, 46, 0, 0, 542, 544, 5, 37, 0, 0, 543, 541, 1, 0, 0, 0, 543,
    544, 1, 0, 0, 0, 544, 545, 1, 0, 0, 0, 545, 546, 3, 112, 56, 0, 546, 73, 1, 0, 0, 0, 547,
    548, 3, 76, 38, 0, 548, 75, 1, 0, 0, 0, 549, 550, 6, 38, -1, 0, 550, 554, 3, 78, 39, 0,
    551, 552, 5, 61, 0, 0, 552, 554, 3, 76, 38, 3, 553, 549, 1, 0, 0, 0, 553, 551, 1, 0, 0,
    0, 554, 563, 1, 0, 0, 0, 555, 556, 10, 2, 0, 0, 556, 557, 5, 8, 0, 0, 557, 562, 3, 76,
    38, 3, 558, 559, 10, 1, 0, 0, 559, 560, 5, 68, 0, 0, 560, 562, 3, 76, 38, 2, 561, 555,
    1, 0, 0, 0, 561, 558, 1, 0, 0, 0, 562, 565, 1, 0, 0, 0, 563, 561, 1, 0, 0, 0, 563, 564,
    1, 0, 0, 0, 564, 77, 1, 0, 0, 0, 565, 563, 1, 0, 0, 0, 566, 568, 3, 84, 42, 0, 567, 569,
    3, 80, 40, 0, 568, 567, 1, 0, 0, 0, 568, 569, 1, 0, 0, 0, 569, 79, 1, 0, 0, 0, 570, 571,
    3, 82, 41, 0, 571, 572, 3, 84, 42, 0, 572, 626, 1, 0, 0, 0, 573, 575, 5, 61, 0, 0, 574,
    573, 1, 0, 0, 0, 574, 575, 1, 0, 0, 0, 575, 576, 1, 0, 0, 0, 576, 577, 5, 47, 0, 0, 577,
    578, 5, 2, 0, 0, 578, 583, 3, 74, 37, 0, 579, 580, 5, 1, 0, 0, 580, 582, 3, 74, 37, 0,
    581, 579, 1, 0, 0, 0, 582, 585, 1, 0, 0, 0, 583, 581, 1, 0, 0, 0, 583, 584, 1, 0, 0, 0,
    584, 586, 1, 0, 0, 0, 585, 583, 1, 0, 0, 0, 586, 587, 5, 3, 0, 0, 587, 626, 1, 0, 0, 0,
    588, 590, 5, 61, 0, 0, 589, 588, 1, 0, 0, 0, 589, 590, 1, 0, 0, 0, 590, 591, 1, 0, 0, 0,
    591, 592, 5, 47, 0, 0, 592, 593, 5, 2, 0, 0, 593, 594, 3, 8, 4, 0, 594, 595, 5, 3, 0, 0,
    595, 626, 1, 0, 0, 0, 596, 598, 5, 61, 0, 0, 597, 596, 1, 0, 0, 0, 597, 598, 1, 0, 0, 0,
    598, 599, 1, 0, 0, 0, 599, 600, 5, 11, 0, 0, 600, 601, 3, 84, 42, 0, 601, 602, 5, 8, 0,
    0, 602, 603, 3, 84, 42, 0, 603, 626, 1, 0, 0, 0, 604, 606, 5, 61, 0, 0, 605, 604, 1, 0,
    0, 0, 605, 606, 1, 0, 0, 0, 606, 607, 1, 0, 0, 0, 607, 608, 5, 59, 0, 0, 608, 611, 3, 84,
    42, 0, 609, 610, 5, 35, 0, 0, 610, 612, 3, 84, 42, 0, 611, 609, 1, 0, 0, 0, 611, 612,
    1, 0, 0, 0, 612, 626, 1, 0, 0, 0, 613, 615, 5, 54, 0, 0, 614, 616, 5, 61, 0, 0, 615, 614,
    1, 0, 0, 0, 615, 616, 1, 0, 0, 0, 616, 617, 1, 0, 0, 0, 617, 626, 5, 62, 0, 0, 618, 620,
    5, 54, 0, 0, 619, 621, 5, 61, 0, 0, 620, 619, 1, 0, 0, 0, 620, 621, 1, 0, 0, 0, 621, 622,
    1, 0, 0, 0, 622, 623, 5, 30, 0, 0, 623, 624, 5, 42, 0, 0, 624, 626, 3, 84, 42, 0, 625,
    570, 1, 0, 0, 0, 625, 574, 1, 0, 0, 0, 625, 589, 1, 0, 0, 0, 625, 597, 1, 0, 0, 0, 625,
    605, 1, 0, 0, 0, 625, 613, 1, 0, 0, 0, 625, 618, 1, 0, 0, 0, 626, 81, 1, 0, 0, 0, 627, 628,
    7, 4, 0, 0, 628, 83, 1, 0, 0, 0, 629, 630, 6, 42, -1, 0, 630, 634, 3, 86, 43, 0, 631, 632,
    7, 5, 0, 0, 632, 634, 3, 84, 42, 4, 633, 629, 1, 0, 0, 0, 633, 631, 1, 0, 0, 0, 634, 646,
    1, 0, 0, 0, 635, 636, 10, 3, 0, 0, 636, 637, 7, 6, 0, 0, 637, 645, 3, 84, 42, 4, 638, 639,
    10, 2, 0, 0, 639, 640, 7, 5, 0, 0, 640, 645, 3, 84, 42, 3, 641, 642, 10, 1, 0, 0, 642,
    643, 5, 106, 0, 0, 643, 645, 3, 84, 42, 2, 644, 635, 1, 0, 0, 0, 644, 638, 1, 0, 0, 0,
    644, 641, 1, 0, 0, 0, 645, 648, 1, 0, 0, 0, 646, 644, 1, 0, 0, 0, 646, 647, 1, 0, 0, 0,
    647, 85, 1, 0, 0, 0, 648, 646, 1, 0, 0, 0, 649, 730, 3, 98, 49, 0, 650, 651, 3, 116, 58,
    0, 651, 663, 5, 2, 0, 0, 652, 654, 3, 24, 12, 0, 653, 652, 1, 0, 0, 0, 653, 654, 1, 0,
    0, 0, 654, 655, 1, 0, 0, 0, 655, 660, 3, 74, 37, 0, 656, 657, 5, 1, 0, 0, 657, 659, 3,
    74, 37, 0, 658, 656, 1, 0, 0, 0, 659, 662, 1, 0, 0, 0, 660, 658, 1, 0, 0, 0, 660, 661,
    1, 0, 0, 0, 661, 664, 1, 0, 0, 0, 662, 660, 1, 0, 0, 0, 663, 653, 1, 0, 0, 0, 663, 664,
    1, 0, 0, 0, 664, 665, 1, 0, 0, 0, 665, 666, 5, 3, 0, 0, 666, 730, 1, 0, 0, 0, 667, 669,
    5, 16, 0, 0, 668, 670, 3, 88, 44, 0, 669, 668, 1, 0, 0, 0, 670, 671, 1, 0, 0, 0, 671, 669,
    1, 0, 0, 0, 671, 672, 1, 0, 0, 0, 672, 675, 1, 0, 0, 0, 673, 674, 5, 33, 0, 0, 674, 676,
    3, 74, 37, 0, 675, 673, 1, 0, 0, 0, 675, 676, 1, 0, 0, 0, 676, 677, 1, 0, 0, 0, 677, 678,
    5, 34, 0, 0, 678, 730, 1, 0, 0, 0, 679, 680, 5, 16, 0, 0, 680, 682, 3, 74, 37, 0, 681,
    683, 3, 88, 44, 0, 682, 681, 1, 0, 0, 0, 683, 684, 1, 0, 0, 0, 684, 682, 1, 0, 0, 0, 684,
    685, 1, 0, 0, 0, 685, 688, 1, 0, 0, 0, 686, 687, 5, 33, 0, 0, 687, 689, 3, 74, 37, 0, 688,
    686, 1, 0, 0, 0, 688, 689, 1, 0, 0, 0, 689, 690, 1, 0, 0, 0, 690, 691, 5, 34, 0, 0, 691,
    730, 1, 0, 0, 0, 692, 693, 5, 17, 0, 0, 693, 694, 5, 2, 0, 0, 694, 695, 3, 74, 37, 0, 695,
    696, 5, 9, 0, 0, 696, 697, 3, 92, 46, 0, 697, 698, 5, 3, 0, 0, 698, 730, 1, 0, 0, 0, 699,
    700, 5, 20, 0, 0, 700, 701, 5, 2, 0, 0, 701, 706, 3, 74, 37, 0, 702, 703, 5, 1, 0, 0, 703,
    705, 3, 74, 37, 0, 704, 702, 1, 0, 0, 0, 705, 708, 1, 0, 0, 0, 706, 704, 1, 0, 0, 0, 706,
    707, 1, 0, 0, 0, 707, 709, 1, 0, 0, 0, 708, 706, 1, 0, 0, 0, 709, 710, 5, 3, 0, 0, 710,
    730, 1, 0, 0, 0, 711, 712, 5, 63, 0, 0, 712, 713, 5, 2, 0, 0, 713, 714, 3, 84, 42, 0, 714,
    715, 5, 1, 0, 0, 715, 716, 3, 84, 42, 0, 716, 717, 5, 3, 0, 0, 717, 730, 1, 0, 0, 0, 718,
    719, 5, 2, 0, 0, 719, 720, 3, 74, 37, 0, 720, 721, 5, 3, 0, 0, 721, 730, 1, 0, 0, 0, 722,
    723, 5, 37, 0, 0, 723, 724, 5, 2, 0, 0, 724, 725, 3, 8, 4, 0, 725, 726, 5, 3, 0, 0, 726,
    730, 1, 0, 0, 0, 727, 730, 3, 90, 45, 0, 728, 730, 3, 108, 54, 0, 729, 649, 1, 0, 0, 0,
    729, 650, 1, 0, 0, 0, 729, 667, 1, 0, 0, 0, 729, 679, 1, 0, 0, 0, 729, 692, 1, 0, 0, 0,
    729, 699, 1, 0, 0, 0, 729, 711, 1, 0, 0, 0, 729, 718, 1, 0, 0, 0, 729, 722, 1, 0, 0, 0,
    729, 727, 1, 0, 0, 0, 729, 728, 1, 0, 0, 0, 730, 87, 1, 0, 0, 0, 731, 732, 5, 92, 0, 0,
    732, 733, 3, 74, 37, 0, 733, 734, 5, 81, 0, 0, 734, 735, 3, 74, 37, 0, 735, 89, 1, 0,
    0, 0, 736, 737, 5, 2, 0, 0, 737, 738, 3, 8, 4, 0, 738, 739, 5, 3, 0, 0, 739, 91, 1, 0, 0,
    0, 740, 787, 5, 14, 0, 0, 741, 787, 5, 84, 0, 0, 742, 787, 5, 78, 0, 0, 743, 787, 5, 50,
    0, 0, 744, 787, 5, 51, 0, 0, 745, 787, 5, 12, 0, 0, 746, 787, 5, 40, 0, 0, 747, 787, 5,
    31, 0, 0, 748, 756, 5, 26, 0, 0, 749, 750, 5, 2, 0, 0, 750, 753, 5, 111, 0, 0, 751, 752,
    5, 1, 0, 0, 752, 754, 5, 111, 0, 0, 753, 751, 1, 0, 0, 0, 753, 754, 1, 0, 0, 0, 754, 755,
    1, 0, 0, 0, 755, 757, 5, 3, 0, 0, 756, 749, 1, 0, 0, 0, 756, 757, 1, 0, 0, 0, 757, 787,
    1, 0, 0, 0, 758, 766, 5, 65, 0, 0, 759, 760, 5, 2, 0, 0, 760, 763, 5, 111, 0, 0, 761, 762,
    5, 1, 0, 0, 762, 764, 5, 111, 0, 0, 763, 761, 1, 0, 0, 0, 763, 764, 1, 0, 0, 0, 764, 765,
    1, 0, 0, 0, 765, 767, 5, 3, 0, 0, 766, 759, 1, 0, 0, 0, 766, 767, 1, 0, 0, 0, 767, 787,
    1, 0, 0, 0, 768, 772, 5, 90, 0, 0, 769, 770, 5, 2, 0, 0, 770, 771, 5, 111, 0, 0, 771, 773,
    5, 3, 0, 0, 772, 769, 1, 0, 0, 0, 772, 773, 1, 0, 0, 0, 773, 787, 1, 0, 0, 0, 774, 778,
    5, 18, 0, 0, 775, 776, 5, 2, 0, 0, 776, 777, 5, 111, 0, 0, 777, 779, 5, 3, 0, 0, 778, 775,
    1, 0, 0, 0, 778, 779, 1, 0, 0, 0, 779, 787, 1, 0, 0, 0, 780, 787, 5, 80, 0, 0, 781, 787,
    5, 25, 0, 0, 782, 787, 5, 82, 0, 0, 783, 787, 5, 83, 0, 0, 784, 787, 5, 13, 0, 0, 785,
    787, 5, 91, 0, 0, 786, 740, 1, 0, 0, 0, 786, 741, 1, 0, 0, 0, 786, 742, 1, 0, 0, 0, 786,
    743, 1, 0, 0, 0, 786, 744, 1, 0, 0, 0, 786, 745, 1, 0, 0, 0, 786, 746, 1, 0, 0, 0, 786,
    747, 1, 0, 0, 0, 786, 748, 1, 0, 0, 0, 786, 758, 1, 0, 0, 0, 786, 768, 1, 0, 0, 0, 786,
    774, 1, 0, 0, 0, 786, 780, 1, 0, 0, 0, 786, 781, 1, 0, 0, 0, 786, 782, 1, 0, 0, 0, 786,
    783, 1, 0, 0, 0, 786, 784, 1, 0, 0, 0, 786, 785, 1, 0, 0, 0, 787, 93, 1, 0, 0, 0, 788, 789,
    5, 2, 0, 0, 789, 794, 3, 96, 48, 0, 790, 791, 5, 1, 0, 0, 791, 793, 3, 96, 48, 0, 792,
    790, 1, 0, 0, 0, 793, 796, 1, 0, 0, 0, 794, 792, 1, 0, 0, 0, 794, 795, 1, 0, 0, 0, 795,
    797, 1, 0, 0, 0, 796, 794, 1, 0, 0, 0, 797, 798, 5, 3, 0, 0, 798, 95, 1, 0, 0, 0, 799, 800,
    3, 100, 50, 0, 800, 801, 5, 95, 0, 0, 801, 802, 3, 98, 49, 0, 802, 97, 1, 0, 0, 0, 803,
    812, 5, 62, 0, 0, 804, 812, 5, 86, 0, 0, 805, 812, 5, 38, 0, 0, 806, 812, 5, 111, 0, 0,
    807, 812, 5, 112, 0, 0, 808, 812, 5, 113, 0, 0, 809, 812, 5, 109, 0, 0, 810, 812, 5,
    110, 0, 0, 811, 803, 1, 0, 0, 0, 811, 804, 1, 0, 0, 0, 811, 805, 1, 0, 0, 0, 811, 806,
    1, 0, 0, 0, 811, 807, 1, 0, 0, 0, 811, 808, 1, 0, 0, 0, 811, 809, 1, 0, 0, 0, 811, 810,
    1, 0, 0, 0, 812, 99, 1, 0, 0, 0, 813, 819, 5, 114, 0, 0, 814, 819, 5, 115, 0, 0, 815, 819,
    5, 116, 0, 0, 816, 819, 5, 117, 0, 0, 817, 819, 3, 118, 59, 0, 818, 813, 1, 0, 0, 0, 818,
    814, 1, 0, 0, 0, 818, 815, 1, 0, 0, 0, 818, 816, 1, 0, 0, 0, 818, 817, 1, 0, 0, 0, 819,
    101, 1, 0, 0, 0, 820, 825, 3, 100, 50, 0, 821, 822, 5, 4, 0, 0, 822, 824, 3, 100, 50,
    0, 823, 821, 1, 0, 0, 0, 824, 827, 1, 0, 0, 0, 825, 823, 1, 0, 0, 0, 825, 826, 1, 0, 0,
    0, 826, 103, 1, 0, 0, 0, 827, 825, 1, 0, 0, 0, 828, 835, 3, 102, 51, 0, 829, 830, 4, 52,
    9, 0, 830, 831, 3, 102, 51, 0, 831, 832, 5, 4, 0, 0, 832, 833, 3, 110, 55, 0, 833, 835,
    1, 0, 0, 0, 834, 828, 1, 0, 0, 0, 834, 829, 1, 0, 0, 0, 835, 105, 1, 0, 0, 0, 836, 840,
    3, 100, 50, 0, 837, 838, 4, 53, 10, 0, 838, 840, 3, 110, 55, 0, 839, 836, 1, 0, 0, 0,
    839, 837, 1, 0, 0, 0, 840, 107, 1, 0, 0, 0, 841, 842, 3, 104, 52, 0, 842, 109, 1, 0, 0,
    0, 843, 844, 1, 0, 0, 0, 844, 111, 1, 0, 0, 0, 845, 846, 3, 102, 51, 0, 846, 113, 1, 0,
    0, 0, 847, 848, 3, 102, 51, 0, 848, 115, 1, 0, 0, 0, 849, 850, 3, 102, 51, 0, 850, 117,
    1, 0, 0, 0, 851, 852, 7, 7, 0, 0, 852, 119, 1, 0, 0, 0, 101, 123, 132, 141, 144, 150,
    157, 162, 175, 183, 188, 198, 202, 209, 213, 216, 219, 222, 225, 228, 234, 237,
    246, 254, 269, 273, 277, 281, 285, 288, 292, 295, 302, 308, 313, 320, 327, 336,
    341, 345, 351, 357, 367, 380, 384, 394, 401, 410, 416, 420, 426, 430, 434, 440,
    450, 462, 480, 492, 497, 503, 511, 518, 537, 543, 553, 561, 563, 568, 574, 583,
    589, 597, 605, 611, 615, 620, 625, 633, 644, 646, 653, 660, 663, 671, 675, 684,
    688, 706, 729, 753, 756, 763, 766, 772, 778, 786, 794, 811, 818, 825, 834, 839
];
GenericSqlParser.vocabulary = new antlr.Vocabulary(GenericSqlParser.literalNames, GenericSqlParser.symbolicNames, []);
GenericSqlParser.decisionsToDFA = GenericSqlParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
export class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(GenericSqlParser.EOF, 0);
    }
    statements(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementsContext);
        }
        return this.getRuleContext(i, StatementsContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_program;
    }
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    singleStatement() {
        return this.getRuleContext(0, SingleStatementContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_statements;
    }
    enterRule(listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SingleStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    SEMICOLON() {
        return this.getToken(GenericSqlParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_singleStatement;
    }
    enterRule(listener) {
        if (listener.enterSingleStatement) {
            listener.enterSingleStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleStatement) {
            listener.exitSingleStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_statement;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class CreateTableContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    createTableStatement() {
        return this.getRuleContext(0, CreateTableStatementContext);
    }
    enterRule(listener) {
        if (listener.enterCreateTable) {
            listener.enterCreateTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateTable) {
            listener.exitCreateTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementDefaultContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    enterRule(listener) {
        if (listener.enterStatementDefault) {
            listener.enterStatementDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatementDefault) {
            listener.exitStatementDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStatementDefault) {
            return visitor.visitStatementDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    insertStatement() {
        return this.getRuleContext(0, InsertStatementContext);
    }
    enterRule(listener) {
        if (listener.enterInsert) {
            listener.enterInsert(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsert) {
            listener.exitInsert(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsert) {
            return visitor.visitInsert(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UpdateContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    updateStatement() {
        return this.getRuleContext(0, UpdateStatementContext);
    }
    enterRule(listener) {
        if (listener.enterUpdate) {
            listener.enterUpdate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpdate) {
            listener.exitUpdate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpdate) {
            return visitor.visitUpdate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeleteContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    deleteStatement() {
        return this.getRuleContext(0, DeleteStatementContext);
    }
    enterRule(listener) {
        if (listener.enterDelete) {
            listener.enterDelete(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDelete) {
            listener.exitDelete(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDelete) {
            return visitor.visitDelete(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    alterTableStatement() {
        return this.getRuleContext(0, AlterTableStatementContext);
    }
    enterRule(listener) {
        if (listener.enterAlterTable) {
            listener.enterAlterTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterTable) {
            listener.exitAlterTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterTable) {
            return visitor.visitAlterTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableContext extends StatementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    dropTableStatement() {
        return this.getRuleContext(0, DropTableStatementContext);
    }
    enterRule(listener) {
        if (listener.enterDropTable) {
            listener.enterDropTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropTable) {
            listener.exitDropTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryNoWith() {
        return this.getRuleContext(0, QueryNoWithContext);
    }
    withClause() {
        return this.getRuleContext(0, WithClauseContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_queryStatement;
    }
    enterRule(listener) {
        if (listener.enterQueryStatement) {
            listener.enterQueryStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryStatement) {
            listener.exitQueryStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryStatement) {
            return visitor.visitQueryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WITH() {
        return this.getToken(GenericSqlParser.KW_WITH, 0);
    }
    namedQuery(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }
        return this.getRuleContext(i, NamedQueryContext);
    }
    KW_RECURSIVE() {
        return this.getToken(GenericSqlParser.KW_RECURSIVE, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_withClause;
    }
    enterRule(listener) {
        if (listener.enterWithClause) {
            listener.enterWithClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithClause) {
            listener.exitWithClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NamedQueryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_AS() {
        return this.getToken(GenericSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    cteColumnList() {
        return this.getRuleContext(0, CteColumnListContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_namedQuery;
    }
    enterRule(listener) {
        if (listener.enterNamedQuery) {
            listener.enterNamedQuery(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNamedQuery) {
            listener.exitNamedQuery(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNamedQuery) {
            return visitor.visitNamedQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CteColumnListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_cteColumnList;
    }
    enterRule(listener) {
        if (listener.enterCteColumnList) {
            listener.enterCteColumnList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCteColumnList) {
            listener.exitCteColumnList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCteColumnList) {
            return visitor.visitCteColumnList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryNoWithContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryTermContext);
        }
        return this.getRuleContext(i, QueryTermContext);
    }
    KW_UNION(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_UNION);
        }
        else {
            return this.getToken(GenericSqlParser.KW_UNION, i);
        }
    }
    KW_INTERSECT(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_INTERSECT);
        }
        else {
            return this.getToken(GenericSqlParser.KW_INTERSECT, i);
        }
    }
    KW_EXCEPT(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_EXCEPT);
        }
        else {
            return this.getToken(GenericSqlParser.KW_EXCEPT, i);
        }
    }
    KW_ALL(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_ALL);
        }
        else {
            return this.getToken(GenericSqlParser.KW_ALL, i);
        }
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_queryNoWith;
    }
    enterRule(listener) {
        if (listener.enterQueryNoWith) {
            listener.enterQueryNoWith(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryNoWith) {
            listener.exitQueryNoWith(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryNoWith) {
            return visitor.visitQueryNoWith(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryTermContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryPrimary() {
        return this.getRuleContext(0, QueryPrimaryContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_queryTerm;
    }
    enterRule(listener) {
        if (listener.enterQueryTerm) {
            listener.enterQueryTerm(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryTerm) {
            listener.exitQueryTerm(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryTerm) {
            return visitor.visitQueryTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryPrimaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    querySpecification() {
        return this.getRuleContext(0, QuerySpecificationContext);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_queryPrimary;
    }
    enterRule(listener) {
        if (listener.enterQueryPrimary) {
            listener.enterQueryPrimary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryPrimary) {
            listener.exitQueryPrimary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryPrimary) {
            return visitor.visitQueryPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuerySpecificationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SELECT() {
        return this.getToken(GenericSqlParser.KW_SELECT, 0);
    }
    selectItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }
        return this.getRuleContext(i, SelectItemContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    fromClause() {
        return this.getRuleContext(0, FromClauseContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    groupByClause() {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    havingClause() {
        return this.getRuleContext(0, HavingClauseContext);
    }
    orderByClause() {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    limitClause() {
        return this.getRuleContext(0, LimitClauseContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_querySpecification;
    }
    enterRule(listener) {
        if (listener.enterQuerySpecification) {
            listener.enterQuerySpecification(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuerySpecification) {
            listener.exitQuerySpecification(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuerySpecification) {
            return visitor.visitQuerySpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetQuantifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DISTINCT() {
        return this.getToken(GenericSqlParser.KW_DISTINCT, 0);
    }
    KW_ALL() {
        return this.getToken(GenericSqlParser.KW_ALL, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_setQuantifier;
    }
    enterRule(listener) {
        if (listener.enterSetQuantifier) {
            listener.enterSetQuantifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetQuantifier) {
            listener.exitSetQuantifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_selectItem;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class SelectExpressionElementContext extends SelectItemContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_AS() {
        return this.getToken(GenericSqlParser.KW_AS, 0);
    }
    enterRule(listener) {
        if (listener.enterSelectExpressionElement) {
            listener.enterSelectExpressionElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectExpressionElement) {
            listener.exitSelectExpressionElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectExpressionElement) {
            return visitor.visitSelectExpressionElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectEmptyElementContext extends SelectItemContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    enterRule(listener) {
        if (listener.enterSelectEmptyElement) {
            listener.enterSelectEmptyElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectEmptyElement) {
            listener.exitSelectEmptyElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectEmptyElement) {
            return visitor.visitSelectEmptyElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectStarElementContext extends SelectItemContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    ASTERISK() {
        return this.getToken(GenericSqlParser.ASTERISK, 0);
    }
    enterRule(listener) {
        if (listener.enterSelectStarElement) {
            listener.enterSelectStarElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectStarElement) {
            listener.exitSelectStarElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectStarElement) {
            return visitor.visitSelectStarElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectAllElementContext extends SelectItemContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ASTERISK() {
        return this.getToken(GenericSqlParser.ASTERISK, 0);
    }
    enterRule(listener) {
        if (listener.enterSelectAllElement) {
            listener.enterSelectAllElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectAllElement) {
            listener.exitSelectAllElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectAllElement) {
            return visitor.visitSelectAllElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FromClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_FROM() {
        return this.getToken(GenericSqlParser.KW_FROM, 0);
    }
    relation(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }
        return this.getRuleContext(i, RelationContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_fromClause;
    }
    enterRule(listener) {
        if (listener.enterFromClause) {
            listener.enterFromClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFromClause) {
            listener.exitFromClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_relation;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class SimpleRelationContext extends RelationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    aliasedRelation() {
        return this.getRuleContext(0, AliasedRelationContext);
    }
    enterRule(listener) {
        if (listener.enterSimpleRelation) {
            listener.enterSimpleRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimpleRelation) {
            listener.exitSimpleRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimpleRelation) {
            return visitor.visitSimpleRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinRelationContext extends RelationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    joinType() {
        return this.getRuleContext(0, JoinTypeContext);
    }
    KW_JOIN() {
        return this.getToken(GenericSqlParser.KW_JOIN, 0);
    }
    KW_ON() {
        return this.getToken(GenericSqlParser.KW_ON, 0);
    }
    relation(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }
        return this.getRuleContext(i, RelationContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterJoinRelation) {
            listener.enterJoinRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoinRelation) {
            listener.exitJoinRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoinRelation) {
            return visitor.visitJoinRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_INNER() {
        return this.getToken(GenericSqlParser.KW_INNER, 0);
    }
    KW_LEFT() {
        return this.getToken(GenericSqlParser.KW_LEFT, 0);
    }
    KW_OUTER() {
        return this.getToken(GenericSqlParser.KW_OUTER, 0);
    }
    KW_RIGHT() {
        return this.getToken(GenericSqlParser.KW_RIGHT, 0);
    }
    KW_FULL() {
        return this.getToken(GenericSqlParser.KW_FULL, 0);
    }
    KW_CROSS() {
        return this.getToken(GenericSqlParser.KW_CROSS, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_joinType;
    }
    enterRule(listener) {
        if (listener.enterJoinType) {
            listener.enterJoinType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoinType) {
            listener.exitJoinType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoinType) {
            return visitor.visitJoinType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AliasedRelationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    relationPrimary() {
        return this.getRuleContext(0, RelationPrimaryContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_AS() {
        return this.getToken(GenericSqlParser.KW_AS, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_aliasedRelation;
    }
    enterRule(listener) {
        if (listener.enterAliasedRelation) {
            listener.enterAliasedRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAliasedRelation) {
            listener.exitAliasedRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAliasedRelation) {
            return visitor.visitAliasedRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationPrimaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_relationPrimary;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class SubqueryRelationContext extends RelationPrimaryContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    enterRule(listener) {
        if (listener.enterSubqueryRelation) {
            listener.enterSubqueryRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubqueryRelation) {
            listener.exitSubqueryRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubqueryRelation) {
            return visitor.visitSubqueryRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableNameRelationContext extends RelationPrimaryContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    enterRule(listener) {
        if (listener.enterTableNameRelation) {
            listener.enterTableNameRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableNameRelation) {
            listener.exitTableNameRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableNameRelation) {
            return visitor.visitTableNameRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhereClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WHERE() {
        return this.getToken(GenericSqlParser.KW_WHERE, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_whereClause;
    }
    enterRule(listener) {
        if (listener.enterWhereClause) {
            listener.enterWhereClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhereClause) {
            listener.exitWhereClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupByClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_GROUP() {
        return this.getToken(GenericSqlParser.KW_GROUP, 0);
    }
    KW_BY() {
        return this.getToken(GenericSqlParser.KW_BY, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_groupByClause;
    }
    enterRule(listener) {
        if (listener.enterGroupByClause) {
            listener.enterGroupByClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupByClause) {
            listener.exitGroupByClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class HavingClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_HAVING() {
        return this.getToken(GenericSqlParser.KW_HAVING, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_havingClause;
    }
    enterRule(listener) {
        if (listener.enterHavingClause) {
            listener.enterHavingClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitHavingClause) {
            listener.exitHavingClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderByClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ORDER() {
        return this.getToken(GenericSqlParser.KW_ORDER, 0);
    }
    KW_BY() {
        return this.getToken(GenericSqlParser.KW_BY, 0);
    }
    sortItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }
        return this.getRuleContext(i, SortItemContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_orderByClause;
    }
    enterRule(listener) {
        if (listener.enterOrderByClause) {
            listener.enterOrderByClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrderByClause) {
            listener.exitOrderByClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SortItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_NULLS() {
        return this.getToken(GenericSqlParser.KW_NULLS, 0);
    }
    KW_ASC() {
        return this.getToken(GenericSqlParser.KW_ASC, 0);
    }
    KW_DESC() {
        return this.getToken(GenericSqlParser.KW_DESC, 0);
    }
    KW_FIRST() {
        return this.getToken(GenericSqlParser.KW_FIRST, 0);
    }
    KW_LAST() {
        return this.getToken(GenericSqlParser.KW_LAST, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_sortItem;
    }
    enterRule(listener) {
        if (listener.enterSortItem) {
            listener.enterSortItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSortItem) {
            listener.exitSortItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSortItem) {
            return visitor.visitSortItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LimitClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LIMIT() {
        return this.getToken(GenericSqlParser.KW_LIMIT, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_OFFSET() {
        return this.getToken(GenericSqlParser.KW_OFFSET, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_limitClause;
    }
    enterRule(listener) {
        if (listener.enterLimitClause) {
            listener.enterLimitClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLimitClause) {
            listener.exitLimitClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_INSERT() {
        return this.getToken(GenericSqlParser.KW_INSERT, 0);
    }
    KW_INTO() {
        return this.getToken(GenericSqlParser.KW_INTO, 0);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    columnList() {
        return this.getRuleContext(0, ColumnListContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_insertStatement;
    }
    enterRule(listener) {
        if (listener.enterInsertStatement) {
            listener.enterInsertStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsertStatement) {
            listener.exitInsertStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsertStatement) {
            return visitor.visitInsertStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnRef(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnRefContext);
        }
        return this.getRuleContext(i, ColumnRefContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_columnList;
    }
    enterRule(listener) {
        if (listener.enterColumnList) {
            listener.enterColumnList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnList) {
            listener.exitColumnList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnList) {
            return visitor.visitColumnList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UpdateStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_UPDATE() {
        return this.getToken(GenericSqlParser.KW_UPDATE, 0);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    KW_SET() {
        return this.getToken(GenericSqlParser.KW_SET, 0);
    }
    updateAssignment(i) {
        if (i === undefined) {
            return this.getRuleContexts(UpdateAssignmentContext);
        }
        return this.getRuleContext(i, UpdateAssignmentContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_updateStatement;
    }
    enterRule(listener) {
        if (listener.enterUpdateStatement) {
            listener.enterUpdateStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpdateStatement) {
            listener.exitUpdateStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpdateStatement) {
            return visitor.visitUpdateStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UpdateAssignmentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnRef() {
        return this.getRuleContext(0, ColumnRefContext);
    }
    EQ() {
        return this.getToken(GenericSqlParser.EQ, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_updateAssignment;
    }
    enterRule(listener) {
        if (listener.enterUpdateAssignment) {
            listener.enterUpdateAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpdateAssignment) {
            listener.exitUpdateAssignment(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpdateAssignment) {
            return visitor.visitUpdateAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeleteStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DELETE() {
        return this.getToken(GenericSqlParser.KW_DELETE, 0);
    }
    KW_FROM() {
        return this.getToken(GenericSqlParser.KW_FROM, 0);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_deleteStatement;
    }
    enterRule(listener) {
        if (listener.enterDeleteStatement) {
            listener.enterDeleteStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeleteStatement) {
            listener.exitDeleteStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDeleteStatement) {
            return visitor.visitDeleteStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(GenericSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(GenericSqlParser.KW_TABLE, 0);
    }
    tableNameCreate() {
        return this.getRuleContext(0, TableNameCreateContext);
    }
    tableElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(TableElementContext);
        }
        return this.getRuleContext(i, TableElementContext);
    }
    KW_IF() {
        return this.getToken(GenericSqlParser.KW_IF, 0);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    KW_EXISTS() {
        return this.getToken(GenericSqlParser.KW_EXISTS, 0);
    }
    KW_WITH() {
        return this.getToken(GenericSqlParser.KW_WITH, 0);
    }
    properties() {
        return this.getRuleContext(0, PropertiesContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_createTableStatement;
    }
    enterRule(listener) {
        if (listener.enterCreateTableStatement) {
            listener.enterCreateTableStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateTableStatement) {
            listener.exitCreateTableStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateTableStatement) {
            return visitor.visitCreateTableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnDefinition() {
        return this.getRuleContext(0, ColumnDefinitionContext);
    }
    tableConstraint() {
        return this.getRuleContext(0, TableConstraintContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_tableElement;
    }
    enterRule(listener) {
        if (listener.enterTableElement) {
            listener.enterTableElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableElement) {
            listener.exitTableElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableElement) {
            return visitor.visitTableElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnRefCreate() {
        return this.getRuleContext(0, ColumnRefCreateContext);
    }
    dataType() {
        return this.getRuleContext(0, DataTypeContext);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    KW_NULL() {
        return this.getToken(GenericSqlParser.KW_NULL, 0);
    }
    KW_DEFAULT() {
        return this.getToken(GenericSqlParser.KW_DEFAULT, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_PRIMARY() {
        return this.getToken(GenericSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(GenericSqlParser.KW_KEY, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_columnDefinition;
    }
    enterRule(listener) {
        if (listener.enterColumnDefinition) {
            listener.enterColumnDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnDefinition) {
            listener.exitColumnDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnDefinition) {
            return visitor.visitColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnRefCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_columnRefCreate;
    }
    enterRule(listener) {
        if (listener.enterColumnRefCreate) {
            listener.enterColumnRefCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnRefCreate) {
            listener.exitColumnRefCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnRefCreate) {
            return visitor.visitColumnRefCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableConstraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PRIMARY() {
        return this.getToken(GenericSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(GenericSqlParser.KW_KEY, 0);
    }
    columnRef(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnRefContext);
        }
        return this.getRuleContext(i, ColumnRefContext);
    }
    KW_UNIQUE() {
        return this.getToken(GenericSqlParser.KW_UNIQUE, 0);
    }
    KW_CHECK() {
        return this.getToken(GenericSqlParser.KW_CHECK, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_FOREIGN() {
        return this.getToken(GenericSqlParser.KW_FOREIGN, 0);
    }
    KW_REFERENCES() {
        return this.getToken(GenericSqlParser.KW_REFERENCES, 0);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    KW_CONSTRAINT() {
        return this.getToken(GenericSqlParser.KW_CONSTRAINT, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_tableConstraint;
    }
    enterRule(listener) {
        if (listener.enterTableConstraint) {
            listener.enterTableConstraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableConstraint) {
            listener.exitTableConstraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_ALTER);
        }
        else {
            return this.getToken(GenericSqlParser.KW_ALTER, i);
        }
    }
    KW_TABLE() {
        return this.getToken(GenericSqlParser.KW_TABLE, 0);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    KW_ADD() {
        return this.getToken(GenericSqlParser.KW_ADD, 0);
    }
    KW_COLUMN() {
        return this.getToken(GenericSqlParser.KW_COLUMN, 0);
    }
    columnDefinition() {
        return this.getRuleContext(0, ColumnDefinitionContext);
    }
    KW_DROP() {
        return this.getToken(GenericSqlParser.KW_DROP, 0);
    }
    columnRef() {
        return this.getRuleContext(0, ColumnRefContext);
    }
    KW_RENAME() {
        return this.getToken(GenericSqlParser.KW_RENAME, 0);
    }
    KW_TO() {
        return this.getToken(GenericSqlParser.KW_TO, 0);
    }
    tableNameCreate() {
        return this.getRuleContext(0, TableNameCreateContext);
    }
    KW_SET() {
        return this.getToken(GenericSqlParser.KW_SET, 0);
    }
    KW_DEFAULT() {
        return this.getToken(GenericSqlParser.KW_DEFAULT, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_IF(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_IF);
        }
        else {
            return this.getToken(GenericSqlParser.KW_IF, i);
        }
    }
    KW_EXISTS(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.KW_EXISTS);
        }
        else {
            return this.getToken(GenericSqlParser.KW_EXISTS, i);
        }
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_alterTableStatement;
    }
    enterRule(listener) {
        if (listener.enterAlterTableStatement) {
            listener.enterAlterTableStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterTableStatement) {
            listener.exitAlterTableStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterTableStatement) {
            return visitor.visitAlterTableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(GenericSqlParser.KW_DROP, 0);
    }
    KW_TABLE() {
        return this.getToken(GenericSqlParser.KW_TABLE, 0);
    }
    tableName() {
        return this.getRuleContext(0, TableNameContext);
    }
    KW_IF() {
        return this.getToken(GenericSqlParser.KW_IF, 0);
    }
    KW_EXISTS() {
        return this.getToken(GenericSqlParser.KW_EXISTS, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_dropTableStatement;
    }
    enterRule(listener) {
        if (listener.enterDropTableStatement) {
            listener.enterDropTableStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropTableStatement) {
            listener.exitDropTableStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropTableStatement) {
            return visitor.visitDropTableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_expression;
    }
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_booleanExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class OrExpressionContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_OR() {
        return this.getToken(GenericSqlParser.KW_OR, 0);
    }
    booleanExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }
        return this.getRuleContext(i, BooleanExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterOrExpression) {
            listener.enterOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrExpression) {
            listener.exitOrExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AndExpressionContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_AND() {
        return this.getToken(GenericSqlParser.KW_AND, 0);
    }
    booleanExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }
        return this.getRuleContext(i, BooleanExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    predicatedExpression() {
        return this.getRuleContext(0, PredicatedExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterPredicated) {
            listener.enterPredicated(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPredicated) {
            listener.exitPredicated(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExpressionContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterNotExpression) {
            listener.enterNotExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNotExpression) {
            listener.exitNotExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    predicate() {
        return this.getRuleContext(0, PredicateContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_predicatedExpression;
    }
    enterRule(listener) {
        if (listener.enterPredicatedExpression) {
            listener.enterPredicatedExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPredicatedExpression) {
            listener.exitPredicatedExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPredicatedExpression) {
            return visitor.visitPredicatedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_predicate;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class ComparisonPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonOperator() {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterComparisonPredicate) {
            listener.enterComparisonPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComparisonPredicate) {
            listener.exitComparisonPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComparisonPredicate) {
            return visitor.visitComparisonPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_IN() {
        return this.getToken(GenericSqlParser.KW_IN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterInPredicate) {
            listener.enterInPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInPredicate) {
            listener.exitInPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInPredicate) {
            return visitor.visitInPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InSubqueryPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_IN() {
        return this.getToken(GenericSqlParser.KW_IN, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterInSubqueryPredicate) {
            listener.enterInSubqueryPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInSubqueryPredicate) {
            listener.exitInSubqueryPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInSubqueryPredicate) {
            return visitor.visitInSubqueryPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_BETWEEN() {
        return this.getToken(GenericSqlParser.KW_BETWEEN, 0);
    }
    KW_AND() {
        return this.getToken(GenericSqlParser.KW_AND, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterBetweenPredicate) {
            listener.enterBetweenPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBetweenPredicate) {
            listener.exitBetweenPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBetweenPredicate) {
            return visitor.visitBetweenPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikePredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_LIKE() {
        return this.getToken(GenericSqlParser.KW_LIKE, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    KW_ESCAPE() {
        return this.getToken(GenericSqlParser.KW_ESCAPE, 0);
    }
    enterRule(listener) {
        if (listener.enterLikePredicate) {
            listener.enterLikePredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLikePredicate) {
            listener.exitLikePredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_IS() {
        return this.getToken(GenericSqlParser.KW_IS, 0);
    }
    KW_NULL() {
        return this.getToken(GenericSqlParser.KW_NULL, 0);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterNullPredicate) {
            listener.enterNullPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNullPredicate) {
            listener.exitNullPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNullPredicate) {
            return visitor.visitNullPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DistinctFromPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_IS() {
        return this.getToken(GenericSqlParser.KW_IS, 0);
    }
    KW_DISTINCT() {
        return this.getToken(GenericSqlParser.KW_DISTINCT, 0);
    }
    KW_FROM() {
        return this.getToken(GenericSqlParser.KW_FROM, 0);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(GenericSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterDistinctFromPredicate) {
            listener.enterDistinctFromPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDistinctFromPredicate) {
            listener.exitDistinctFromPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDistinctFromPredicate) {
            return visitor.visitDistinctFromPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQ() {
        return this.getToken(GenericSqlParser.EQ, 0);
    }
    NEQ() {
        return this.getToken(GenericSqlParser.NEQ, 0);
    }
    LT() {
        return this.getToken(GenericSqlParser.LT, 0);
    }
    LTE() {
        return this.getToken(GenericSqlParser.LTE, 0);
    }
    GT() {
        return this.getToken(GenericSqlParser.GT, 0);
    }
    GTE() {
        return this.getToken(GenericSqlParser.GTE, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_comparisonOperator;
    }
    enterRule(listener) {
        if (listener.enterComparisonOperator) {
            listener.enterComparisonOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComparisonOperator) {
            listener.exitComparisonOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValueExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_valueExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterValueExpressionDefault) {
            listener.enterValueExpressionDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValueExpressionDefault) {
            listener.exitValueExpressionDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConcatenationContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    CONCAT() {
        return this.getToken(GenericSqlParser.CONCAT, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterConcatenation) {
            listener.enterConcatenation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConcatenation) {
            listener.exitConcatenation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    ASTERISK() {
        return this.getToken(GenericSqlParser.ASTERISK, 0);
    }
    SLASH() {
        return this.getToken(GenericSqlParser.SLASH, 0);
    }
    PERCENT() {
        return this.getToken(GenericSqlParser.PERCENT, 0);
    }
    PLUS() {
        return this.getToken(GenericSqlParser.PLUS, 0);
    }
    MINUS() {
        return this.getToken(GenericSqlParser.MINUS, 0);
    }
    enterRule(listener) {
        if (listener.enterArithmeticBinary) {
            listener.enterArithmeticBinary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArithmeticBinary) {
            listener.exitArithmeticBinary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    MINUS() {
        return this.getToken(GenericSqlParser.MINUS, 0);
    }
    PLUS() {
        return this.getToken(GenericSqlParser.PLUS, 0);
    }
    enterRule(listener) {
        if (listener.enterArithmeticUnary) {
            listener.enterArithmeticUnary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArithmeticUnary) {
            listener.exitArithmeticUnary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_primaryExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class SubqueryExpressionDefaultContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    subqueryExpression() {
        return this.getRuleContext(0, SubqueryExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSubqueryExpressionDefault) {
            listener.enterSubqueryExpressionDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubqueryExpressionDefault) {
            listener.exitSubqueryExpressionDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubqueryExpressionDefault) {
            return visitor.visitSubqueryExpressionDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CAST() {
        return this.getToken(GenericSqlParser.KW_CAST, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_AS() {
        return this.getToken(GenericSqlParser.KW_AS, 0);
    }
    dataType() {
        return this.getRuleContext(0, DataTypeContext);
    }
    enterRule(listener) {
        if (listener.enterCastExpression) {
            listener.enterCastExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCastExpression) {
            listener.exitCastExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCastExpression) {
            return visitor.visitCastExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CoalesceExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_COALESCE() {
        return this.getToken(GenericSqlParser.KW_COALESCE, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterCoalesceExpression) {
            listener.enterCoalesceExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCoalesceExpression) {
            listener.exitCoalesceExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCoalesceExpression) {
            return visitor.visitCoalesceExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    enterRule(listener) {
        if (listener.enterColumnReference) {
            listener.enterColumnReference(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnReference) {
            listener.exitColumnReference(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_EXISTS() {
        return this.getToken(GenericSqlParser.KW_EXISTS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    enterRule(listener) {
        if (listener.enterExistsExpression) {
            listener.enterExistsExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExistsExpression) {
            listener.exitExistsExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExistsExpression) {
            return visitor.visitExistsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionName() {
        return this.getRuleContext(0, FunctionNameContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    enterRule(listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    enterRule(listener) {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SearchedCaseExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CASE() {
        return this.getToken(GenericSqlParser.KW_CASE, 0);
    }
    KW_END() {
        return this.getToken(GenericSqlParser.KW_END, 0);
    }
    whenClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }
        return this.getRuleContext(i, WhenClauseContext);
    }
    KW_ELSE() {
        return this.getToken(GenericSqlParser.KW_ELSE, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSearchedCaseExpression) {
            listener.enterSearchedCaseExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchedCaseExpression) {
            listener.exitSearchedCaseExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSearchedCaseExpression) {
            return visitor.visitSearchedCaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullIfExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NULLIF() {
        return this.getToken(GenericSqlParser.KW_NULLIF, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterNullIfExpression) {
            listener.enterNullIfExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNullIfExpression) {
            listener.exitNullIfExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNullIfExpression) {
            return visitor.visitNullIfExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CASE() {
        return this.getToken(GenericSqlParser.KW_CASE, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_END() {
        return this.getToken(GenericSqlParser.KW_END, 0);
    }
    whenClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }
        return this.getRuleContext(i, WhenClauseContext);
    }
    KW_ELSE() {
        return this.getToken(GenericSqlParser.KW_ELSE, 0);
    }
    enterRule(listener) {
        if (listener.enterSimpleCaseExpression) {
            listener.enterSimpleCaseExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimpleCaseExpression) {
            listener.exitSimpleCaseExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimpleCaseExpression) {
            return visitor.visitSimpleCaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhenClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WHEN() {
        return this.getToken(GenericSqlParser.KW_WHEN, 0);
    }
    KW_THEN() {
        return this.getToken(GenericSqlParser.KW_THEN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_whenClause;
    }
    enterRule(listener) {
        if (listener.enterWhenClause) {
            listener.enterWhenClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhenClause) {
            listener.exitWhenClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_subqueryExpression;
    }
    enterRule(listener) {
        if (listener.enterSubqueryExpression) {
            listener.enterSubqueryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubqueryExpression) {
            listener.exitSubqueryExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DataTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_BOOLEAN() {
        return this.getToken(GenericSqlParser.KW_BOOLEAN, 0);
    }
    KW_TINYINT() {
        return this.getToken(GenericSqlParser.KW_TINYINT, 0);
    }
    KW_SMALLINT() {
        return this.getToken(GenericSqlParser.KW_SMALLINT, 0);
    }
    KW_INT() {
        return this.getToken(GenericSqlParser.KW_INT, 0);
    }
    KW_INTEGER() {
        return this.getToken(GenericSqlParser.KW_INTEGER, 0);
    }
    KW_BIGINT() {
        return this.getToken(GenericSqlParser.KW_BIGINT, 0);
    }
    KW_FLOAT() {
        return this.getToken(GenericSqlParser.KW_FLOAT, 0);
    }
    KW_DOUBLE() {
        return this.getToken(GenericSqlParser.KW_DOUBLE, 0);
    }
    KW_DECIMAL() {
        return this.getToken(GenericSqlParser.KW_DECIMAL, 0);
    }
    INTEGER_VALUE(i) {
        if (i === undefined) {
            return this.getTokens(GenericSqlParser.INTEGER_VALUE);
        }
        else {
            return this.getToken(GenericSqlParser.INTEGER_VALUE, i);
        }
    }
    KW_NUMERIC() {
        return this.getToken(GenericSqlParser.KW_NUMERIC, 0);
    }
    KW_VARCHAR() {
        return this.getToken(GenericSqlParser.KW_VARCHAR, 0);
    }
    KW_CHAR() {
        return this.getToken(GenericSqlParser.KW_CHAR, 0);
    }
    KW_TEXT() {
        return this.getToken(GenericSqlParser.KW_TEXT, 0);
    }
    KW_DATE() {
        return this.getToken(GenericSqlParser.KW_DATE, 0);
    }
    KW_TIME() {
        return this.getToken(GenericSqlParser.KW_TIME, 0);
    }
    KW_TIMESTAMP() {
        return this.getToken(GenericSqlParser.KW_TIMESTAMP, 0);
    }
    KW_BINARY() {
        return this.getToken(GenericSqlParser.KW_BINARY, 0);
    }
    KW_VARBINARY() {
        return this.getToken(GenericSqlParser.KW_VARBINARY, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_dataType;
    }
    enterRule(listener) {
        if (listener.enterDataType) {
            listener.enterDataType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDataType) {
            listener.exitDataType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDataType) {
            return visitor.visitDataType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertiesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    property(i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }
        return this.getRuleContext(i, PropertyContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_properties;
    }
    enterRule(listener) {
        if (listener.enterProperties) {
            listener.enterProperties(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProperties) {
            listener.exitProperties(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProperties) {
            return visitor.visitProperties(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    EQ() {
        return this.getToken(GenericSqlParser.EQ, 0);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_property;
    }
    enterRule(listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_literal;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class BinaryLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BINARY_LITERAL() {
        return this.getToken(GenericSqlParser.BINARY_LITERAL, 0);
    }
    enterRule(listener) {
        if (listener.enterBinaryLiteral) {
            listener.enterBinaryLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBinaryLiteral) {
            listener.exitBinaryLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBinaryLiteral) {
            return visitor.visitBinaryLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecimalLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DECIMAL_VALUE() {
        return this.getToken(GenericSqlParser.DECIMAL_VALUE, 0);
    }
    enterRule(listener) {
        if (listener.enterDecimalLiteral) {
            listener.enterDecimalLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDecimalLiteral) {
            listener.exitDecimalLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NULL() {
        return this.getToken(GenericSqlParser.KW_NULL, 0);
    }
    enterRule(listener) {
        if (listener.enterNullLiteral) {
            listener.enterNullLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNullLiteral) {
            listener.exitNullLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING() {
        return this.getToken(GenericSqlParser.STRING, 0);
    }
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DoubleLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DOUBLE_VALUE() {
        return this.getToken(GenericSqlParser.DOUBLE_VALUE, 0);
    }
    enterRule(listener) {
        if (listener.enterDoubleLiteral) {
            listener.enterDoubleLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDoubleLiteral) {
            listener.exitDoubleLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDoubleLiteral) {
            return visitor.visitDoubleLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntegerLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    INTEGER_VALUE() {
        return this.getToken(GenericSqlParser.INTEGER_VALUE, 0);
    }
    enterRule(listener) {
        if (listener.enterIntegerLiteral) {
            listener.enterIntegerLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIntegerLiteral) {
            listener.exitIntegerLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends LiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_TRUE() {
        return this.getToken(GenericSqlParser.KW_TRUE, 0);
    }
    KW_FALSE() {
        return this.getToken(GenericSqlParser.KW_FALSE, 0);
    }
    enterRule(listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(GenericSqlParser.IDENTIFIER, 0);
    }
    DIGIT_IDENTIFIER() {
        return this.getToken(GenericSqlParser.DIGIT_IDENTIFIER, 0);
    }
    QUOTED_IDENTIFIER() {
        return this.getToken(GenericSqlParser.QUOTED_IDENTIFIER, 0);
    }
    BACKQUOTED_IDENTIFIER() {
        return this.getToken(GenericSqlParser.BACKQUOTED_IDENTIFIER, 0);
    }
    nonReserved() {
        return this.getRuleContext(0, NonReservedContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_identifier;
    }
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QualifiedNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_qualifiedName;
    }
    enterRule(listener) {
        if (listener.enterQualifiedName) {
            listener.enterQualifiedName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQualifiedName) {
            listener.exitQualifiedName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QualifiedNameAllowEmptyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_qualifiedNameAllowEmpty;
    }
    enterRule(listener) {
        if (listener.enterQualifiedNameAllowEmpty) {
            listener.enterQualifiedNameAllowEmpty(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQualifiedNameAllowEmpty) {
            listener.exitQualifiedNameAllowEmpty(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQualifiedNameAllowEmpty) {
            return visitor.visitQualifiedNameAllowEmpty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnRefContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_columnRef;
    }
    enterRule(listener) {
        if (listener.enterColumnRef) {
            listener.enterColumnRef(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnRef) {
            listener.exitColumnRef(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnRef) {
            return visitor.visitColumnRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedNameAllowEmpty() {
        return this.getRuleContext(0, QualifiedNameAllowEmptyContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_columnName;
    }
    enterRule(listener) {
        if (listener.enterColumnName) {
            listener.enterColumnName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnName) {
            listener.exitColumnName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyColumnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_emptyColumn;
    }
    enterRule(listener) {
        if (listener.enterEmptyColumn) {
            listener.enterEmptyColumn(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEmptyColumn) {
            listener.exitEmptyColumn(this);
        }
    }
    accept(visitor) {
        if (visitor.visitEmptyColumn) {
            return visitor.visitEmptyColumn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_tableName;
    }
    enterRule(listener) {
        if (listener.enterTableName) {
            listener.enterTableName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableName) {
            listener.exitTableName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableName) {
            return visitor.visitTableName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_tableNameCreate;
    }
    enterRule(listener) {
        if (listener.enterTableNameCreate) {
            listener.enterTableNameCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableNameCreate) {
            listener.exitTableNameCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableNameCreate) {
            return visitor.visitTableNameCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_functionName;
    }
    enterRule(listener) {
        if (listener.enterFunctionName) {
            listener.enterFunctionName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionName) {
            listener.exitFunctionName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonReservedContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ADD() {
        return this.getToken(GenericSqlParser.KW_ADD, 0);
    }
    KW_ALL() {
        return this.getToken(GenericSqlParser.KW_ALL, 0);
    }
    KW_ASC() {
        return this.getToken(GenericSqlParser.KW_ASC, 0);
    }
    KW_BIGINT() {
        return this.getToken(GenericSqlParser.KW_BIGINT, 0);
    }
    KW_BINARY() {
        return this.getToken(GenericSqlParser.KW_BINARY, 0);
    }
    KW_BOOLEAN() {
        return this.getToken(GenericSqlParser.KW_BOOLEAN, 0);
    }
    KW_BY() {
        return this.getToken(GenericSqlParser.KW_BY, 0);
    }
    KW_CHAR() {
        return this.getToken(GenericSqlParser.KW_CHAR, 0);
    }
    KW_COALESCE() {
        return this.getToken(GenericSqlParser.KW_COALESCE, 0);
    }
    KW_COLUMN() {
        return this.getToken(GenericSqlParser.KW_COLUMN, 0);
    }
    KW_CROSS() {
        return this.getToken(GenericSqlParser.KW_CROSS, 0);
    }
    KW_DATE() {
        return this.getToken(GenericSqlParser.KW_DATE, 0);
    }
    KW_DECIMAL() {
        return this.getToken(GenericSqlParser.KW_DECIMAL, 0);
    }
    KW_DEFAULT() {
        return this.getToken(GenericSqlParser.KW_DEFAULT, 0);
    }
    KW_DESC() {
        return this.getToken(GenericSqlParser.KW_DESC, 0);
    }
    KW_DOUBLE() {
        return this.getToken(GenericSqlParser.KW_DOUBLE, 0);
    }
    KW_FALSE() {
        return this.getToken(GenericSqlParser.KW_FALSE, 0);
    }
    KW_FIRST() {
        return this.getToken(GenericSqlParser.KW_FIRST, 0);
    }
    KW_FLOAT() {
        return this.getToken(GenericSqlParser.KW_FLOAT, 0);
    }
    KW_FULL() {
        return this.getToken(GenericSqlParser.KW_FULL, 0);
    }
    KW_IF() {
        return this.getToken(GenericSqlParser.KW_IF, 0);
    }
    KW_INT() {
        return this.getToken(GenericSqlParser.KW_INT, 0);
    }
    KW_INTEGER() {
        return this.getToken(GenericSqlParser.KW_INTEGER, 0);
    }
    KW_KEY() {
        return this.getToken(GenericSqlParser.KW_KEY, 0);
    }
    KW_LAST() {
        return this.getToken(GenericSqlParser.KW_LAST, 0);
    }
    KW_LEFT() {
        return this.getToken(GenericSqlParser.KW_LEFT, 0);
    }
    KW_LIMIT() {
        return this.getToken(GenericSqlParser.KW_LIMIT, 0);
    }
    KW_NULLIF() {
        return this.getToken(GenericSqlParser.KW_NULLIF, 0);
    }
    KW_NULLS() {
        return this.getToken(GenericSqlParser.KW_NULLS, 0);
    }
    KW_NUMERIC() {
        return this.getToken(GenericSqlParser.KW_NUMERIC, 0);
    }
    KW_OFFSET() {
        return this.getToken(GenericSqlParser.KW_OFFSET, 0);
    }
    KW_OUTER() {
        return this.getToken(GenericSqlParser.KW_OUTER, 0);
    }
    KW_RIGHT() {
        return this.getToken(GenericSqlParser.KW_RIGHT, 0);
    }
    KW_SMALLINT() {
        return this.getToken(GenericSqlParser.KW_SMALLINT, 0);
    }
    KW_TEXT() {
        return this.getToken(GenericSqlParser.KW_TEXT, 0);
    }
    KW_TIME() {
        return this.getToken(GenericSqlParser.KW_TIME, 0);
    }
    KW_TIMESTAMP() {
        return this.getToken(GenericSqlParser.KW_TIMESTAMP, 0);
    }
    KW_TINYINT() {
        return this.getToken(GenericSqlParser.KW_TINYINT, 0);
    }
    KW_TO() {
        return this.getToken(GenericSqlParser.KW_TO, 0);
    }
    KW_TRUE() {
        return this.getToken(GenericSqlParser.KW_TRUE, 0);
    }
    KW_UNIQUE() {
        return this.getToken(GenericSqlParser.KW_UNIQUE, 0);
    }
    KW_VARCHAR() {
        return this.getToken(GenericSqlParser.KW_VARCHAR, 0);
    }
    KW_VARBINARY() {
        return this.getToken(GenericSqlParser.KW_VARBINARY, 0);
    }
    get ruleIndex() {
        return GenericSqlParser.RULE_nonReserved;
    }
    enterRule(listener) {
        if (listener.enterNonReserved) {
            listener.enterNonReserved(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNonReserved) {
            listener.exitNonReserved(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNonReserved) {
            return visitor.visitNonReserved(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
