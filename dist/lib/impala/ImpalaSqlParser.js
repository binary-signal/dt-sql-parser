// Generated from dt-sql-parser/src/grammar/impala/ImpalaSqlParser.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from "antlr4ng";
import { SQLParserBase } from '../SQLParserBase';
export class ImpalaSqlParser extends SQLParserBase {
    get grammarFileName() { return "ImpalaSqlParser.g4"; }
    get literalNames() { return ImpalaSqlParser.literalNames; }
    get symbolicNames() { return ImpalaSqlParser.symbolicNames; }
    get ruleNames() { return ImpalaSqlParser.ruleNames; }
    get serializedATN() { return ImpalaSqlParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ImpalaSqlParser._ATN, ImpalaSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    program() {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, ImpalaSqlParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 393;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 4 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 22085645) !== 0) || _la === 67 || _la === 86 || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 524545) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 134520835) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 1083521) !== 0) || _la === 264 || _la === 265) {
                    {
                        {
                            this.state = 390;
                            this.singleStatement();
                        }
                    }
                    this.state = 395;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 396;
                this.match(ImpalaSqlParser.EOF);
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
        this.enterRule(localContext, 2, ImpalaSqlParser.RULE_singleStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 398;
                this.sqlStatement();
                this.state = 400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 262) {
                    {
                        this.state = 399;
                        this.match(ImpalaSqlParser.SEMICOLON);
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
    sqlStatement() {
        let localContext = new SqlStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, ImpalaSqlParser.RULE_sqlStatement);
        try {
            this.state = 424;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 402;
                        this.queryStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 403;
                        this.useStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 404;
                        this.createStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 405;
                        this.alterStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 406;
                        this.truncateTableStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 407;
                        this.describeStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 408;
                        this.computeStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 409;
                        this.dropStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 410;
                        this.grantStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 411;
                        this.revokeStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 412;
                        this.insertStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 413;
                        this.deleteStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 414;
                        this.updateStatement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localContext, 14);
                    {
                        this.state = 415;
                        this.upsertStatement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localContext, 15);
                    {
                        this.state = 416;
                        this.showStatement();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localContext, 16);
                    {
                        this.state = 417;
                        this.addCommentStatement();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(localContext, 17);
                    {
                        this.state = 418;
                        this.explainStatement();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(localContext, 18);
                    {
                        this.state = 419;
                        this.setStatement();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(localContext, 19);
                    {
                        this.state = 420;
                        this.shutdownStatement();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(localContext, 20);
                    {
                        this.state = 421;
                        this.invalidateMetaStatement();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(localContext, 21);
                    {
                        this.state = 422;
                        this.loadDataStatement();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localContext, 22);
                    {
                        this.state = 423;
                        this.refreshStatement();
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
    useStatement() {
        let localContext = new UseStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, ImpalaSqlParser.RULE_useStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 426;
                this.match(ImpalaSqlParser.KW_USE);
                this.state = 427;
                this.databaseNamePath();
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
    createStatement() {
        let localContext = new CreateStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, ImpalaSqlParser.RULE_createStatement);
        try {
            this.state = 437;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 429;
                        this.createSchema();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 430;
                        this.createRole();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 431;
                        this.createAggregateFunction();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 432;
                        this.createFunction();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 433;
                        this.createView();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 434;
                        this.createKuduTableAsSelect();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 435;
                        this.createTableLike();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 436;
                        this.createTableSelect();
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
    createTableSelect() {
        let localContext = new CreateTableSelectContext(this.context, this.state);
        this.enterRule(localContext, 10, ImpalaSqlParser.RULE_createTableSelect);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 439;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 441;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                        this.state = 440;
                        this.match(ImpalaSqlParser.KW_EXTERNAL);
                    }
                }
                this.state = 443;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 445;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 444;
                        this.ifNotExists();
                    }
                }
                this.state = 447;
                this.tableNameCreate();
                this.state = 463;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context)) {
                    case 1:
                        {
                            this.state = 448;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 449;
                            this.columnDefinition();
                            this.state = 454;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 450;
                                            this.match(ImpalaSqlParser.COMMA);
                                            this.state = 451;
                                            this.columnDefinition();
                                        }
                                    }
                                }
                                this.state = 456;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                            }
                            this.state = 459;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 263) {
                                {
                                    this.state = 457;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 458;
                                    this.constraintSpecification();
                                }
                            }
                            this.state = 461;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                }
                this.state = 471;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 465;
                        this.match(ImpalaSqlParser.KW_PARTITIONED);
                        this.state = 466;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 469;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context)) {
                            case 1:
                                {
                                    this.state = 467;
                                    this.columnAliases();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 468;
                                    this.partitionedBy();
                                }
                                break;
                        }
                    }
                }
                this.state = 473;
                this.createCommonItem();
                this.state = 476;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 474;
                        this.match(ImpalaSqlParser.KW_AS);
                        this.state = 475;
                        this.queryStatement();
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
    createTableLike() {
        let localContext = new CreateTableLikeContext(this.context, this.state);
        this.enterRule(localContext, 12, ImpalaSqlParser.RULE_createTableLike);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 478;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 480;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                        this.state = 479;
                        this.match(ImpalaSqlParser.KW_EXTERNAL);
                    }
                }
                this.state = 482;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 483;
                        this.ifNotExists();
                    }
                }
                this.state = 486;
                this.tableNameCreate();
                this.state = 487;
                this.match(ImpalaSqlParser.KW_LIKE);
                this.state = 491;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_BERNOULLI:
                    case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                    case ImpalaSqlParser.KW_CURRENT_USER:
                    case ImpalaSqlParser.KW_DAY:
                    case ImpalaSqlParser.KW_DAYS:
                    case ImpalaSqlParser.KW_EXCLUDING:
                    case ImpalaSqlParser.KW_EXTRACT:
                    case ImpalaSqlParser.KW_HOUR:
                    case ImpalaSqlParser.KW_INCLUDING:
                    case ImpalaSqlParser.KW_KEY:
                    case ImpalaSqlParser.KW_LOCALTIME:
                    case ImpalaSqlParser.KW_MINUTE:
                    case ImpalaSqlParser.KW_MINUTES:
                    case ImpalaSqlParser.KW_MONTH:
                    case ImpalaSqlParser.KW_MONTHS:
                    case ImpalaSqlParser.KW_NFC:
                    case ImpalaSqlParser.KW_NFD:
                    case ImpalaSqlParser.KW_NFKC:
                    case ImpalaSqlParser.KW_NFKD:
                    case ImpalaSqlParser.KW_OPTION:
                    case ImpalaSqlParser.KW_ORDINALITY:
                    case ImpalaSqlParser.KW_PRIVILEGES:
                    case ImpalaSqlParser.KW_PROPERTIES:
                    case ImpalaSqlParser.KW_SECOND:
                    case ImpalaSqlParser.KW_SECONDS:
                    case ImpalaSqlParser.KW_SHUTDOWN:
                    case ImpalaSqlParser.KW_SUBSTRING:
                    case ImpalaSqlParser.KW_SYSTEM:
                    case ImpalaSqlParser.KW_TRY_CAST:
                    case ImpalaSqlParser.KW_USER:
                    case ImpalaSqlParser.KW_VIEWS:
                    case ImpalaSqlParser.KW_YEAR:
                    case ImpalaSqlParser.KW_ORC:
                    case ImpalaSqlParser.KW_DATE:
                    case ImpalaSqlParser.STRING:
                    case ImpalaSqlParser.IDENTIFIER:
                    case ImpalaSqlParser.DIGIT_IDENTIFIER:
                    case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                        {
                            this.state = 488;
                            this.tableNamePath();
                        }
                        break;
                    case ImpalaSqlParser.KW_PARQUET:
                        {
                            this.state = 489;
                            this.match(ImpalaSqlParser.KW_PARQUET);
                            this.state = 490;
                            localContext._parquet = this.stringLiteral();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 496;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 493;
                        this.match(ImpalaSqlParser.KW_PARTITIONED);
                        this.state = 494;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 495;
                        this.partitionedBy();
                    }
                }
                this.state = 498;
                this.createCommonItem();
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
    createKuduTableAsSelect() {
        let localContext = new CreateKuduTableAsSelectContext(this.context, this.state);
        this.enterRule(localContext, 14, ImpalaSqlParser.RULE_createKuduTableAsSelect);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 500;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 502;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                        this.state = 501;
                        this.match(ImpalaSqlParser.KW_EXTERNAL);
                    }
                }
                this.state = 504;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 505;
                        this.ifNotExists();
                    }
                }
                this.state = 508;
                this.tableNameCreate();
                this.state = 526;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 509;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 510;
                        this.kuduTableElement();
                        this.state = 515;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 511;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 512;
                                        this.kuduTableElement();
                                    }
                                }
                            }
                            this.state = 517;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                        }
                        this.state = 522;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 263) {
                            {
                                this.state = 518;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 519;
                                this.match(ImpalaSqlParser.KW_PRIMARY);
                                this.state = 520;
                                this.match(ImpalaSqlParser.KW_KEY);
                                this.state = 521;
                                this.columnAliases();
                            }
                        }
                        this.state = 524;
                        this.match(ImpalaSqlParser.RPAREN);
                    }
                }
                this.state = 533;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                        this.state = 528;
                        this.match(ImpalaSqlParser.KW_PRIMARY);
                        this.state = 529;
                        this.match(ImpalaSqlParser.KW_KEY);
                        this.state = 531;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 265) {
                            {
                                this.state = 530;
                                this.columnAliases();
                            }
                        }
                    }
                }
                this.state = 538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 535;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 536;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 537;
                        this.kuduPartitionClause();
                    }
                }
                this.state = 542;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                        this.state = 540;
                        this.match(ImpalaSqlParser.KW_COMMENT);
                        this.state = 541;
                        localContext._comment = this.stringLiteral();
                    }
                }
                this.state = 544;
                this.match(ImpalaSqlParser.KW_STORED);
                this.state = 545;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 546;
                this.match(ImpalaSqlParser.KW_KUDU);
                this.state = 549;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                        this.state = 547;
                        this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                        this.state = 548;
                        localContext._tblProp = this.properties();
                    }
                }
                this.state = 553;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 551;
                        this.match(ImpalaSqlParser.KW_AS);
                        this.state = 552;
                        this.queryStatement();
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
    createView() {
        let localContext = new CreateViewContext(this.context, this.state);
        this.enterRule(localContext, 16, ImpalaSqlParser.RULE_createView);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 555;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 556;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 558;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 557;
                        this.ifNotExists();
                    }
                }
                this.state = 560;
                this.viewNameCreate();
                this.state = 562;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 561;
                        this.viewColumns();
                    }
                }
                this.state = 565;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                        this.state = 564;
                        this.commentClause();
                    }
                }
                this.state = 569;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                        this.state = 567;
                        this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                        this.state = 568;
                        localContext._tblProp = this.properties();
                    }
                }
                this.state = 571;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 572;
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
    createSchema() {
        let localContext = new CreateSchemaContext(this.context, this.state);
        this.enterRule(localContext, 18, ImpalaSqlParser.RULE_createSchema);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 574;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 575;
                _la = this.tokenStream.LA(1);
                if (!(_la === 46 || _la === 170)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 577;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 576;
                        this.ifNotExists();
                    }
                }
                this.state = 579;
                this.databaseNameCreate();
                this.state = 581;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                    case 1:
                        {
                            this.state = 580;
                            this.commentClause();
                        }
                        break;
                }
                this.state = 585;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                        this.state = 583;
                        this.match(ImpalaSqlParser.KW_LOCATION);
                        this.state = 584;
                        localContext._location = this.stringLiteral();
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
    createRole() {
        let localContext = new CreateRoleContext(this.context, this.state);
        this.enterRule(localContext, 20, ImpalaSqlParser.RULE_createRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 587;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 588;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 589;
                localContext._name = this.identifier();
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
    createAggregateFunction() {
        let localContext = new CreateAggregateFunctionContext(this.context, this.state);
        this.enterRule(localContext, 22, ImpalaSqlParser.RULE_createAggregateFunction);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 591;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 593;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 12) {
                    {
                        this.state = 592;
                        this.match(ImpalaSqlParser.KW_AGGREGATE);
                    }
                }
                this.state = 595;
                this.match(ImpalaSqlParser.KW_FUNCTION);
                this.state = 597;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 596;
                        this.ifNotExists();
                    }
                }
                this.state = 599;
                this.functionNameCreate();
                this.state = 612;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 600;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 609;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                            {
                                this.state = 601;
                                this.type_(0);
                                this.state = 606;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 263) {
                                    {
                                        {
                                            this.state = 602;
                                            this.match(ImpalaSqlParser.COMMA);
                                            this.state = 603;
                                            this.type_(0);
                                        }
                                    }
                                    this.state = 608;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                            }
                        }
                        this.state = 611;
                        this.match(ImpalaSqlParser.RPAREN);
                    }
                }
                this.state = 614;
                this.match(ImpalaSqlParser.KW_RETURNS);
                this.state = 615;
                localContext._returnType = this.type_(0);
                this.state = 618;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102) {
                    {
                        this.state = 616;
                        this.match(ImpalaSqlParser.KW_INTERMEDIATE);
                        this.state = 617;
                        this.type_(0);
                    }
                }
                this.state = 620;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 621;
                this.match(ImpalaSqlParser.STRING);
                this.state = 625;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 104) {
                    {
                        this.state = 622;
                        this.match(ImpalaSqlParser.KW_INIT_FN);
                        this.state = 623;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 624;
                        this.match(ImpalaSqlParser.STRING);
                    }
                }
                this.state = 627;
                this.match(ImpalaSqlParser.KW_UPDATE_FN);
                this.state = 628;
                this.match(ImpalaSqlParser.EQ);
                this.state = 629;
                this.match(ImpalaSqlParser.STRING);
                this.state = 630;
                this.match(ImpalaSqlParser.KW_MERGE_FN);
                this.state = 631;
                this.match(ImpalaSqlParser.EQ);
                this.state = 632;
                this.match(ImpalaSqlParser.STRING);
                this.state = 636;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                        this.state = 633;
                        this.match(ImpalaSqlParser.KW_PREPARE_FN);
                        this.state = 634;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 635;
                        this.match(ImpalaSqlParser.STRING);
                    }
                }
                this.state = 641;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                        this.state = 638;
                        this.match(ImpalaSqlParser.KW_CLOSEFN);
                        this.state = 639;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 640;
                        this.match(ImpalaSqlParser.STRING);
                    }
                }
                this.state = 646;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 187) {
                    {
                        this.state = 643;
                        this.match(ImpalaSqlParser.KW_SERIALIZE_FN);
                        this.state = 644;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 645;
                        this.match(ImpalaSqlParser.STRING);
                    }
                }
                this.state = 651;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 76) {
                    {
                        this.state = 648;
                        this.match(ImpalaSqlParser.KW_FINALIZE_FN);
                        this.state = 649;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 650;
                        this.match(ImpalaSqlParser.STRING);
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
    createFunction() {
        let localContext = new CreateFunctionContext(this.context, this.state);
        this.enterRule(localContext, 24, ImpalaSqlParser.RULE_createFunction);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 653;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 654;
                this.match(ImpalaSqlParser.KW_FUNCTION);
                this.state = 656;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 655;
                        this.ifNotExists();
                    }
                }
                this.state = 658;
                this.functionNameCreate();
                this.state = 671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 659;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 668;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                            {
                                this.state = 660;
                                this.type_(0);
                                this.state = 665;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 263) {
                                    {
                                        {
                                            this.state = 661;
                                            this.match(ImpalaSqlParser.COMMA);
                                            this.state = 662;
                                            this.type_(0);
                                        }
                                    }
                                    this.state = 667;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                            }
                        }
                        this.state = 670;
                        this.match(ImpalaSqlParser.RPAREN);
                    }
                }
                this.state = 675;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                        this.state = 673;
                        this.match(ImpalaSqlParser.KW_RETURNS);
                        this.state = 674;
                        localContext._returnType = this.type_(0);
                    }
                }
                this.state = 677;
                this.match(ImpalaSqlParser.KW_LOCATION);
                this.state = 678;
                this.match(ImpalaSqlParser.STRING);
                this.state = 679;
                this.match(ImpalaSqlParser.KW_SYMBOL);
                this.state = 680;
                this.match(ImpalaSqlParser.EQ);
                this.state = 681;
                localContext._symbol_ = this.stringLiteral();
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
    alterStatement() {
        let localContext = new AlterStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, ImpalaSqlParser.RULE_alterStatement);
        try {
            this.state = 701;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 683;
                        this.alterDatabase();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 684;
                        this.alterUnSetOrSetViewTblProperties();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 685;
                        this.renameTable();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 686;
                        this.alterViewOwner();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 687;
                        this.alterView();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 688;
                        this.renameView();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 689;
                        this.dropPartitionByRangeOrValue();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 690;
                        this.alterFormat();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 691;
                        this.recoverPartitions();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 692;
                        this.addPartitionByRangeOrValue();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 693;
                        this.alterTableNonKuduOrKuduOnly();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 694;
                        this.addSingleColumn();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 695;
                        this.replaceOrAddColumns();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localContext, 14);
                    {
                        this.state = 696;
                        this.changeColumnDefine();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localContext, 15);
                    {
                        this.state = 697;
                        this.alterStatsKey();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localContext, 16);
                    {
                        this.state = 698;
                        this.alterPartitionCache();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(localContext, 17);
                    {
                        this.state = 699;
                        this.alterDropSingleColumn();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(localContext, 18);
                    {
                        this.state = 700;
                        this.alterTableOwner();
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
    alterDatabase() {
        let localContext = new AlterDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 28, ImpalaSqlParser.RULE_alterDatabase);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 703;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 704;
                this.match(ImpalaSqlParser.KW_DATABASE);
                this.state = 705;
                this.databaseNamePath();
                this.state = 706;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 707;
                this.match(ImpalaSqlParser.KW_OWNER);
                this.state = 708;
                _la = this.tokenStream.LA(1);
                if (!(_la === 166 || _la === 204)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 709;
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
    alterStatsKey() {
        let localContext = new AlterStatsKeyContext(this.context, this.state);
        this.enterRule(localContext, 30, ImpalaSqlParser.RULE_alterStatsKey);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 711;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 712;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 713;
                this.tableNamePath();
                this.state = 714;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 715;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 716;
                this.match(ImpalaSqlParser.KW_STATS);
                this.state = 717;
                this.columnNamePath();
                this.state = 718;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 719;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 245)) & ~0x1F) === 0 && ((1 << (_la - 245)) & 15) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 720;
                this.match(ImpalaSqlParser.EQ);
                this.state = 721;
                this.stringLiteral();
                this.state = 726;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 263) {
                    {
                        this.state = 722;
                        this.match(ImpalaSqlParser.COMMA);
                        this.state = 723;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 245)) & ~0x1F) === 0 && ((1 << (_la - 245)) & 15) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 724;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 725;
                        this.stringLiteral();
                    }
                }
                this.state = 728;
                this.match(ImpalaSqlParser.RPAREN);
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
    alterPartitionCache() {
        let localContext = new AlterPartitionCacheContext(this.context, this.state);
        this.enterRule(localContext, 32, ImpalaSqlParser.RULE_alterPartitionCache);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 730;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 731;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 732;
                this.tableNamePath();
                this.state = 735;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 733;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 734;
                        this.expression();
                    }
                }
                this.state = 737;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 748;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_CACHED:
                        {
                            {
                                this.state = 738;
                                this.match(ImpalaSqlParser.KW_CACHED);
                                this.state = 739;
                                this.match(ImpalaSqlParser.KW_IN);
                                this.state = 740;
                                this.stringLiteral();
                                this.state = 745;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context)) {
                                    case 1:
                                        {
                                            this.state = 741;
                                            this.match(ImpalaSqlParser.KW_WITH);
                                            this.state = 742;
                                            this.match(ImpalaSqlParser.KW_REPLICATION);
                                            this.state = 743;
                                            this.match(ImpalaSqlParser.EQ);
                                            this.state = 744;
                                            this.number_();
                                        }
                                        break;
                                }
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_UNCACHED:
                        {
                            this.state = 747;
                            this.match(ImpalaSqlParser.KW_UNCACHED);
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
    changeColumnDefine() {
        let localContext = new ChangeColumnDefineContext(this.context, this.state);
        this.enterRule(localContext, 34, ImpalaSqlParser.RULE_changeColumnDefine);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 750;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 751;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 752;
                this.tableNamePath();
                this.state = 753;
                this.match(ImpalaSqlParser.KW_CHANGE);
                this.state = 754;
                this.columnNamePath();
                this.state = 755;
                this.columnSpecWithKudu();
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
    alterDropSingleColumn() {
        let localContext = new AlterDropSingleColumnContext(this.context, this.state);
        this.enterRule(localContext, 36, ImpalaSqlParser.RULE_alterDropSingleColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 757;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 758;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 759;
                this.tableNamePath();
                this.state = 760;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 762;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context)) {
                    case 1:
                        {
                            this.state = 761;
                            this.match(ImpalaSqlParser.KW_COLUMN);
                        }
                        break;
                }
                this.state = 764;
                this.columnNamePath();
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
    alterTableOwner() {
        let localContext = new AlterTableOwnerContext(this.context, this.state);
        this.enterRule(localContext, 38, ImpalaSqlParser.RULE_alterTableOwner);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 766;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 767;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 768;
                this.tableNamePath();
                this.state = 769;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 770;
                this.match(ImpalaSqlParser.KW_OWNER);
                this.state = 771;
                _la = this.tokenStream.LA(1);
                if (!(_la === 166 || _la === 204)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 772;
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
    replaceOrAddColumns() {
        let localContext = new ReplaceOrAddColumnsContext(this.context, this.state);
        this.enterRule(localContext, 40, ImpalaSqlParser.RULE_replaceOrAddColumns);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 774;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 775;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 776;
                this.tableNamePath();
                this.state = 782;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_REPLACE:
                        {
                            this.state = 777;
                            this.match(ImpalaSqlParser.KW_REPLACE);
                        }
                        break;
                    case ImpalaSqlParser.KW_ADD:
                        {
                            this.state = 778;
                            this.match(ImpalaSqlParser.KW_ADD);
                            this.state = 780;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 93) {
                                {
                                    this.state = 779;
                                    this.ifNotExists();
                                }
                            }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 784;
                this.match(ImpalaSqlParser.KW_COLUMNS);
                this.state = 785;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 786;
                this.columnSpecWithKudu();
                this.state = 791;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                            {
                                this.state = 787;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 788;
                                this.columnSpecWithKudu();
                            }
                        }
                    }
                    this.state = 793;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                }
                this.state = 794;
                this.match(ImpalaSqlParser.RPAREN);
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
    addSingleColumn() {
        let localContext = new AddSingleColumnContext(this.context, this.state);
        this.enterRule(localContext, 42, ImpalaSqlParser.RULE_addSingleColumn);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 796;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 797;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 798;
                this.tableNamePath();
                this.state = 799;
                this.match(ImpalaSqlParser.KW_ADD);
                this.state = 800;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 802;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 801;
                        this.ifNotExists();
                    }
                }
                this.state = 804;
                this.createColumnSpecWithKudu();
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
    alterTableNonKuduOrKuduOnly() {
        let localContext = new AlterTableNonKuduOrKuduOnlyContext(this.context, this.state);
        this.enterRule(localContext, 44, ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 806;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 807;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 808;
                this.tableNamePath();
                this.state = 809;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 811;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context)) {
                    case 1:
                        {
                            this.state = 810;
                            this.match(ImpalaSqlParser.KW_COLUMN);
                        }
                        break;
                }
                this.state = 813;
                this.columnNamePath();
                this.state = 822;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_SET:
                        {
                            this.state = 814;
                            this.match(ImpalaSqlParser.KW_SET);
                            this.state = 818;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case ImpalaSqlParser.KW_BLOCK_SIZE:
                                case ImpalaSqlParser.KW_COMPRESSION:
                                case ImpalaSqlParser.KW_DEFAULT:
                                case ImpalaSqlParser.KW_ENCODING:
                                    {
                                        this.state = 815;
                                        this.kuduStorageAttr();
                                    }
                                    break;
                                case ImpalaSqlParser.KW_COMMENT:
                                    {
                                        this.state = 816;
                                        this.match(ImpalaSqlParser.KW_COMMENT);
                                        this.state = 817;
                                        this.stringLiteral();
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_DROP:
                        {
                            this.state = 820;
                            this.match(ImpalaSqlParser.KW_DROP);
                            this.state = 821;
                            this.match(ImpalaSqlParser.KW_DEFAULT);
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
    addPartitionByRangeOrValue() {
        let localContext = new AddPartitionByRangeOrValueContext(this.context, this.state);
        this.enterRule(localContext, 46, ImpalaSqlParser.RULE_addPartitionByRangeOrValue);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 824;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 825;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 826;
                this.tableNamePath();
                this.state = 827;
                this.match(ImpalaSqlParser.KW_ADD);
                this.state = 829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 828;
                        this.ifNotExists();
                    }
                }
                this.state = 843;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_PARTITION:
                        {
                            this.state = 831;
                            this.match(ImpalaSqlParser.KW_PARTITION);
                            this.state = 832;
                            this.expression();
                            this.state = 835;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 24) {
                                {
                                    this.state = 833;
                                    this.match(ImpalaSqlParser.KW_LOCATION);
                                    this.state = 834;
                                    this.stringLiteral();
                                }
                            }
                            this.state = 838;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 30 || _la === 197) {
                                {
                                    this.state = 837;
                                    this.cacheSpec();
                                }
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_RANGE:
                        {
                            this.state = 840;
                            this.match(ImpalaSqlParser.KW_RANGE);
                            this.state = 841;
                            this.match(ImpalaSqlParser.KW_PARTITION);
                            this.state = 842;
                            this.kuduPartitionSpec();
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
    alterFormat() {
        let localContext = new AlterFormatContext(this.context, this.state);
        this.enterRule(localContext, 48, ImpalaSqlParser.RULE_alterFormat);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 845;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 846;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 847;
                this.tableNamePath();
                this.state = 850;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 848;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 849;
                        this.expression();
                    }
                }
                this.state = 852;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 864;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_FILEFORMAT:
                        {
                            {
                                this.state = 853;
                                this.match(ImpalaSqlParser.KW_FILEFORMAT);
                                this.state = 854;
                                this.fileFormat();
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_ROW:
                        {
                            {
                                this.state = 855;
                                this.match(ImpalaSqlParser.KW_ROW);
                                this.state = 856;
                                this.match(ImpalaSqlParser.KW_FORMAT);
                                this.state = 857;
                                this.rowFormat();
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_LOCATION:
                        {
                            {
                                this.state = 858;
                                this.match(ImpalaSqlParser.KW_LOCATION);
                                this.state = 859;
                                this.stringLiteral();
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_TBLPROPERTIES:
                        {
                            {
                                this.state = 860;
                                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                                this.state = 861;
                                localContext._tblProp = this.properties();
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_SERDEPROPERTIES:
                        {
                            {
                                this.state = 862;
                                this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                                this.state = 863;
                                localContext._tblProp = this.properties();
                            }
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
    recoverPartitions() {
        let localContext = new RecoverPartitionsContext(this.context, this.state);
        this.enterRule(localContext, 50, ImpalaSqlParser.RULE_recoverPartitions);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 866;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 867;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 868;
                this.tableNamePath();
                this.state = 869;
                this.match(ImpalaSqlParser.KW_RECOVER);
                this.state = 870;
                this.match(ImpalaSqlParser.KW_PARTITIONS);
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
    dropPartitionByRangeOrValue() {
        let localContext = new DropPartitionByRangeOrValueContext(this.context, this.state);
        this.enterRule(localContext, 52, ImpalaSqlParser.RULE_dropPartitionByRangeOrValue);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 872;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 873;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 874;
                this.tableNamePath();
                this.state = 875;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 877;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 876;
                        this.ifExists();
                    }
                }
                this.state = 887;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_PARTITION:
                        {
                            this.state = 879;
                            this.match(ImpalaSqlParser.KW_PARTITION);
                            this.state = 880;
                            this.expression();
                            this.state = 882;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 22) {
                                {
                                    this.state = 881;
                                    this.match(ImpalaSqlParser.KW_PURGE);
                                }
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_RANGE:
                        {
                            this.state = 884;
                            this.match(ImpalaSqlParser.KW_RANGE);
                            this.state = 885;
                            this.match(ImpalaSqlParser.KW_PARTITION);
                            this.state = 886;
                            this.kuduPartitionSpec();
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
    alterView() {
        let localContext = new AlterViewContext(this.context, this.state);
        this.enterRule(localContext, 54, ImpalaSqlParser.RULE_alterView);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 889;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 890;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 891;
                this.viewNamePath();
                this.state = 893;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 892;
                        this.viewColumns();
                    }
                }
                this.state = 895;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 896;
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
    renameView() {
        let localContext = new RenameViewContext(this.context, this.state);
        this.enterRule(localContext, 56, ImpalaSqlParser.RULE_renameView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 898;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 899;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 900;
                this.viewNamePath();
                this.state = 901;
                this.match(ImpalaSqlParser.KW_RENAME);
                this.state = 902;
                this.match(ImpalaSqlParser.KW_TO);
                this.state = 903;
                this.viewNamePath();
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
    alterViewOwner() {
        let localContext = new AlterViewOwnerContext(this.context, this.state);
        this.enterRule(localContext, 58, ImpalaSqlParser.RULE_alterViewOwner);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 905;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 906;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 907;
                this.viewNamePath();
                this.state = 908;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 909;
                this.match(ImpalaSqlParser.KW_OWNER);
                this.state = 910;
                _la = this.tokenStream.LA(1);
                if (!(_la === 166 || _la === 204)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 911;
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
    renameTable() {
        let localContext = new RenameTableContext(this.context, this.state);
        this.enterRule(localContext, 60, ImpalaSqlParser.RULE_renameTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 913;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 914;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 915;
                this.tableNamePath();
                this.state = 916;
                this.match(ImpalaSqlParser.KW_RENAME);
                this.state = 917;
                this.match(ImpalaSqlParser.KW_TO);
                this.state = 918;
                this.tableNamePath();
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
    alterUnSetOrSetViewTblProperties() {
        let localContext = new AlterUnSetOrSetViewTblPropertiesContext(this.context, this.state);
        this.enterRule(localContext, 62, ImpalaSqlParser.RULE_alterUnSetOrSetViewTblProperties);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 920;
                this.match(ImpalaSqlParser.KW_ALTER);
                this.state = 921;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 922;
                this.viewNamePath();
                this.state = 923;
                _la = this.tokenStream.LA(1);
                if (!(_la === 176 || _la === 202)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 924;
                this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                this.state = 925;
                localContext._tblProp = this.properties();
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
    truncateTableStatement() {
        let localContext = new TruncateTableStatementContext(this.context, this.state);
        this.enterRule(localContext, 64, ImpalaSqlParser.RULE_truncateTableStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 927;
                this.match(ImpalaSqlParser.KW_TRUNCATE);
                this.state = 929;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188) {
                    {
                        this.state = 928;
                        this.match(ImpalaSqlParser.KW_TABLE);
                    }
                }
                this.state = 932;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 931;
                        this.ifExists();
                    }
                }
                this.state = 934;
                this.tableNamePath();
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
    describeStatement() {
        let localContext = new DescribeStatementContext(this.context, this.state);
        this.enterRule(localContext, 66, ImpalaSqlParser.RULE_describeStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 936;
                this.match(ImpalaSqlParser.KW_DESCRIBE);
                this.state = 938;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 46) {
                    {
                        this.state = 937;
                        this.match(ImpalaSqlParser.KW_DATABASE);
                    }
                }
                this.state = 941;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 69 || _la === 80) {
                    {
                        this.state = 940;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 69 || _la === 80)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 943;
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
    computeStatement() {
        let localContext = new ComputeStatementContext(this.context, this.state);
        this.enterRule(localContext, 68, ImpalaSqlParser.RULE_computeStatement);
        try {
            this.state = 947;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 945;
                        this.computeStats();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 946;
                        this.computeIncrementalStats();
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
    computeStats() {
        let localContext = new ComputeStatsContext(this.context, this.state);
        this.enterRule(localContext, 70, ImpalaSqlParser.RULE_computeStats);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 949;
                this.match(ImpalaSqlParser.KW_COMPUTE);
                this.state = 950;
                this.match(ImpalaSqlParser.KW_STATS);
                this.state = 951;
                this.tableNamePath();
                this.state = 953;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context)) {
                    case 1:
                        {
                            this.state = 952;
                            this.columnAliases();
                        }
                        break;
                }
                this.state = 967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 190) {
                    {
                        this.state = 955;
                        this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                        this.state = 956;
                        this.match(ImpalaSqlParser.KW_SYSTEM);
                        this.state = 957;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 958;
                        this.number_();
                        this.state = 959;
                        this.match(ImpalaSqlParser.RPAREN);
                        this.state = 965;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 157) {
                            {
                                this.state = 960;
                                this.match(ImpalaSqlParser.KW_REPEATABLE);
                                this.state = 961;
                                this.match(ImpalaSqlParser.LPAREN);
                                this.state = 962;
                                this.number_();
                                this.state = 963;
                                this.match(ImpalaSqlParser.RPAREN);
                            }
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
    computeIncrementalStats() {
        let localContext = new ComputeIncrementalStatsContext(this.context, this.state);
        this.enterRule(localContext, 72, ImpalaSqlParser.RULE_computeIncrementalStats);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 969;
                this.match(ImpalaSqlParser.KW_COMPUTE);
                this.state = 970;
                this.match(ImpalaSqlParser.KW_INCREMENTAL);
                this.state = 971;
                this.match(ImpalaSqlParser.KW_STATS);
                this.state = 972;
                this.tableNamePath();
                this.state = 978;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 973;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 974;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 975;
                        this.expression();
                        this.state = 976;
                        this.match(ImpalaSqlParser.RPAREN);
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
    dropStatement() {
        let localContext = new DropStatementContext(this.context, this.state);
        this.enterRule(localContext, 74, ImpalaSqlParser.RULE_dropStatement);
        try {
            this.state = 986;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 980;
                        this.dropRole();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 981;
                        this.dropFunction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 982;
                        this.dropIncrementalStats();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 983;
                        this.dropView();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 984;
                        this.dropTable();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 985;
                        this.dropSchema();
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
    dropSchema() {
        let localContext = new DropSchemaContext(this.context, this.state);
        this.enterRule(localContext, 76, ImpalaSqlParser.RULE_dropSchema);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 988;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 989;
                _la = this.tokenStream.LA(1);
                if (!(_la === 46 || _la === 170)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 991;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 990;
                        this.ifExists();
                    }
                }
                this.state = 993;
                this.databaseNamePath();
                this.state = 995;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27 || _la === 159) {
                    {
                        this.state = 994;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 27 || _la === 159)) {
                            this.errorHandler.recoverInline(this);
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
    dropView() {
        let localContext = new DropViewContext(this.context, this.state);
        this.enterRule(localContext, 78, ImpalaSqlParser.RULE_dropView);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 997;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 998;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 1000;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 999;
                        this.ifExists();
                    }
                }
                this.state = 1002;
                this.viewNamePath();
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
    dropTable() {
        let localContext = new DropTableContext(this.context, this.state);
        this.enterRule(localContext, 80, ImpalaSqlParser.RULE_dropTable);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1004;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 1005;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1007;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 1006;
                        this.ifExists();
                    }
                }
                this.state = 1009;
                this.tableNamePath();
                this.state = 1011;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                        this.state = 1010;
                        this.match(ImpalaSqlParser.KW_PURGE);
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
    dropIncrementalStats() {
        let localContext = new DropIncrementalStatsContext(this.context, this.state);
        this.enterRule(localContext, 82, ImpalaSqlParser.RULE_dropIncrementalStats);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1013;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 1015;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 96) {
                    {
                        this.state = 1014;
                        this.match(ImpalaSqlParser.KW_INCREMENTAL);
                    }
                }
                this.state = 1017;
                this.match(ImpalaSqlParser.KW_STATS);
                this.state = 1018;
                this.tableNamePath();
                this.state = 1021;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 1019;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 1020;
                        this.expression();
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
    dropFunction() {
        let localContext = new DropFunctionContext(this.context, this.state);
        this.enterRule(localContext, 84, ImpalaSqlParser.RULE_dropFunction);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1023;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 1025;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 12) {
                    {
                        this.state = 1024;
                        this.match(ImpalaSqlParser.KW_AGGREGATE);
                    }
                }
                this.state = 1027;
                this.match(ImpalaSqlParser.KW_FUNCTION);
                this.state = 1029;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 93) {
                    {
                        this.state = 1028;
                        this.ifExists();
                    }
                }
                this.state = 1031;
                this.functionNamePath();
                this.state = 1044;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context)) {
                    case 1:
                        {
                            this.state = 1032;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 1041;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 8 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 4286652929) !== 0) || ((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 511) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 7873) !== 0)) {
                                {
                                    this.state = 1033;
                                    this.type_(0);
                                    this.state = 1038;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 263) {
                                        {
                                            {
                                                this.state = 1034;
                                                this.match(ImpalaSqlParser.COMMA);
                                                this.state = 1035;
                                                this.type_(0);
                                            }
                                        }
                                        this.state = 1040;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 1043;
                            this.match(ImpalaSqlParser.RPAREN);
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
    dropRole() {
        let localContext = new DropRoleContext(this.context, this.state);
        this.enterRule(localContext, 86, ImpalaSqlParser.RULE_dropRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1046;
                this.match(ImpalaSqlParser.KW_DROP);
                this.state = 1047;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 1048;
                localContext._name = this.identifier();
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
    grantStatement() {
        let localContext = new GrantStatementContext(this.context, this.state);
        this.enterRule(localContext, 88, ImpalaSqlParser.RULE_grantStatement);
        try {
            this.state = 1052;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1050;
                        this.grantRole();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1051;
                        this.grant();
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
    grantRole() {
        let localContext = new GrantRoleContext(this.context, this.state);
        this.enterRule(localContext, 90, ImpalaSqlParser.RULE_grantRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1054;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1055;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 1056;
                this.identifier();
                this.state = 1057;
                this.match(ImpalaSqlParser.KW_TO);
                this.state = 1058;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 1059;
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
    grant() {
        let localContext = new GrantContext(this.context, this.state);
        this.enterRule(localContext, 92, ImpalaSqlParser.RULE_grant);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1061;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1062;
                this.privilege();
                this.state = 1063;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1064;
                this.objectType();
                this.state = 1066;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                        this.state = 1065;
                        this.qualifiedName();
                    }
                }
                this.state = 1068;
                this.match(ImpalaSqlParser.KW_TO);
                this.state = 1069;
                localContext._grantee = this.principal();
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
    revokeStatement() {
        let localContext = new RevokeStatementContext(this.context, this.state);
        this.enterRule(localContext, 94, ImpalaSqlParser.RULE_revokeStatement);
        try {
            this.state = 1073;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1071;
                        this.revokeRole();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1072;
                        this.revoke();
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
    revokeRole() {
        let localContext = new RevokeRoleContext(this.context, this.state);
        this.enterRule(localContext, 96, ImpalaSqlParser.RULE_revokeRole);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1075;
                this.match(ImpalaSqlParser.KW_REVOKE);
                this.state = 1076;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 1077;
                this.identifier();
                this.state = 1078;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1079;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 1080;
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
    revoke() {
        let localContext = new RevokeContext(this.context, this.state);
        this.enterRule(localContext, 98, ImpalaSqlParser.RULE_revoke);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1082;
                this.match(ImpalaSqlParser.KW_REVOKE);
                this.state = 1086;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 86) {
                    {
                        this.state = 1083;
                        this.match(ImpalaSqlParser.KW_GRANT);
                        this.state = 1084;
                        this.match(ImpalaSqlParser.KW_OPTION);
                        this.state = 1085;
                        this.match(ImpalaSqlParser.KW_FOR);
                    }
                }
                this.state = 1088;
                this.privilege();
                this.state = 1089;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1090;
                this.objectType();
                this.state = 1092;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                        this.state = 1091;
                        this.qualifiedName();
                    }
                }
                this.state = 1094;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1100;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context)) {
                    case 1:
                        {
                            this.state = 1095;
                            localContext._grantee = this.principal();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1097;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 166) {
                                {
                                    this.state = 1096;
                                    this.match(ImpalaSqlParser.KW_ROLE);
                                }
                            }
                            this.state = 1099;
                            this.identifier();
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
    insertStatement() {
        let localContext = new InsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 100, ImpalaSqlParser.RULE_insertStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1103;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 216) {
                    {
                        this.state = 1102;
                        this.with_();
                    }
                }
                this.state = 1105;
                this.match(ImpalaSqlParser.KW_INSERT);
                this.state = 1106;
                _la = this.tokenStream.LA(1);
                if (!(_la === 103 || _la === 144)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1108;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188) {
                    {
                        this.state = 1107;
                        this.match(ImpalaSqlParser.KW_TABLE);
                    }
                }
                this.state = 1110;
                this.tableNamePath();
                this.state = 1112;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context)) {
                    case 1:
                        {
                            this.state = 1111;
                            this.columnAliases();
                        }
                        break;
                }
                this.state = 1126;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 1114;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 1115;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 1116;
                        this.expression();
                        this.state = 1121;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 1117;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1118;
                                    this.expression();
                                }
                            }
                            this.state = 1123;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1124;
                        this.match(ImpalaSqlParser.RPAREN);
                    }
                }
                this.state = 1128;
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
    deleteStatement() {
        let localContext = new DeleteStatementContext(this.context, this.state);
        this.enterRule(localContext, 102, ImpalaSqlParser.RULE_deleteStatement);
        try {
            this.state = 1132;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1130;
                        this.delete_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1131;
                        this.deleteTableRef();
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
    delete_() {
        let localContext = new DeleteContext(this.context, this.state);
        this.enterRule(localContext, 104, ImpalaSqlParser.RULE_delete);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1134;
                this.match(ImpalaSqlParser.KW_DELETE);
                this.state = 1136;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 82) {
                    {
                        this.state = 1135;
                        this.match(ImpalaSqlParser.KW_FROM);
                    }
                }
                this.state = 1138;
                this.tableNamePath();
                this.state = 1140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 215) {
                    {
                        this.state = 1139;
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
    deleteTableRef() {
        let localContext = new DeleteTableRefContext(this.context, this.state);
        this.enterRule(localContext, 106, ImpalaSqlParser.RULE_deleteTableRef);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1142;
                this.match(ImpalaSqlParser.KW_DELETE);
                this.state = 1143;
                this.tableNamePath();
                this.state = 1148;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9 || _la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                        this.state = 1145;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9) {
                            {
                                this.state = 1144;
                                this.match(ImpalaSqlParser.KW_AS);
                            }
                        }
                        this.state = 1147;
                        this.identifier();
                    }
                }
                this.state = 1150;
                this.match(ImpalaSqlParser.KW_FROM);
                this.state = 1159;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context)) {
                    case 1:
                        {
                            this.state = 1151;
                            this.relation(0);
                            this.state = 1156;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 263) {
                                {
                                    {
                                        this.state = 1152;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 1153;
                                        this.relation(0);
                                    }
                                }
                                this.state = 1158;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                        break;
                }
                this.state = 1162;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 215) {
                    {
                        this.state = 1161;
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
    updateStatement() {
        let localContext = new UpdateStatementContext(this.context, this.state);
        this.enterRule(localContext, 108, ImpalaSqlParser.RULE_updateStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1164;
                this.match(ImpalaSqlParser.KW_UPDATE);
                this.state = 1165;
                this.tableNamePath();
                this.state = 1166;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 1167;
                this.assignmentList();
                this.state = 1177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 82) {
                    {
                        this.state = 1168;
                        this.match(ImpalaSqlParser.KW_FROM);
                        this.state = 1169;
                        this.relation(0);
                        this.state = 1174;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 1170;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1171;
                                    this.relation(0);
                                }
                            }
                            this.state = 1176;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 1180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 215) {
                    {
                        this.state = 1179;
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
    upsertStatement() {
        let localContext = new UpsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 110, ImpalaSqlParser.RULE_upsertStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1182;
                this.match(ImpalaSqlParser.KW_UPSERT);
                this.state = 1183;
                this.match(ImpalaSqlParser.KW_INTO);
                this.state = 1185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188) {
                    {
                        this.state = 1184;
                        this.match(ImpalaSqlParser.KW_TABLE);
                    }
                }
                this.state = 1187;
                this.tableNamePath();
                this.state = 1189;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context)) {
                    case 1:
                        {
                            this.state = 1188;
                            this.columnAliases();
                        }
                        break;
                }
                this.state = 1191;
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
    showStatement() {
        let localContext = new ShowStatementContext(this.context, this.state);
        this.enterRule(localContext, 112, ImpalaSqlParser.RULE_showStatement);
        try {
            this.state = 1205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1193;
                        this.showRoles();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1194;
                        this.showRoleGrant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1195;
                        this.showGrants();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1196;
                        this.showFiles();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1197;
                        this.showPartitions();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1198;
                        this.showColumnStats();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1199;
                        this.showTableStats();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1200;
                        this.showCreateView();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1201;
                        this.showCreateTable();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 1202;
                        this.showFunctions();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 1203;
                        this.showTables();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 1204;
                        this.showSchemas();
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
    showSchemas() {
        let localContext = new ShowSchemasContext(this.context, this.state);
        this.enterRule(localContext, 114, ImpalaSqlParser.RULE_showSchemas);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1207;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1208;
                _la = this.tokenStream.LA(1);
                if (!(_la === 47 || _la === 171)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115 || _la === 274 || _la === 275) {
                    {
                        this.state = 1210;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 115) {
                            {
                                this.state = 1209;
                                this.match(ImpalaSqlParser.KW_LIKE);
                            }
                        }
                        this.state = 1212;
                        localContext._pattern = this.stringLiteral();
                        this.state = 1217;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 271) {
                            {
                                {
                                    this.state = 1213;
                                    this.match(ImpalaSqlParser.BITWISEOR);
                                    this.state = 1214;
                                    this.stringLiteral();
                                }
                            }
                            this.state = 1219;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
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
    showTables() {
        let localContext = new ShowTablesContext(this.context, this.state);
        this.enterRule(localContext, 116, ImpalaSqlParser.RULE_showTables);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1222;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1223;
                this.match(ImpalaSqlParser.KW_TABLES);
                this.state = 1226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 94) {
                    {
                        this.state = 1224;
                        this.match(ImpalaSqlParser.KW_IN);
                        this.state = 1225;
                        this.tableNamePath();
                    }
                }
                this.state = 1239;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115 || _la === 274 || _la === 275) {
                    {
                        this.state = 1229;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 115) {
                            {
                                this.state = 1228;
                                this.match(ImpalaSqlParser.KW_LIKE);
                            }
                        }
                        this.state = 1231;
                        localContext._pattern = this.stringLiteral();
                        this.state = 1236;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 271) {
                            {
                                {
                                    this.state = 1232;
                                    this.match(ImpalaSqlParser.BITWISEOR);
                                    this.state = 1233;
                                    this.stringLiteral();
                                }
                            }
                            this.state = 1238;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
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
    showFunctions() {
        let localContext = new ShowFunctionsContext(this.context, this.state);
        this.enterRule(localContext, 118, ImpalaSqlParser.RULE_showFunctions);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1241;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 12) {
                    {
                        this.state = 1242;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 3 || _la === 12)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 1245;
                this.match(ImpalaSqlParser.KW_FUNCTIONS);
                this.state = 1248;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 94) {
                    {
                        this.state = 1246;
                        this.match(ImpalaSqlParser.KW_IN);
                        this.state = 1247;
                        this.databaseNamePath();
                    }
                }
                this.state = 1261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115 || _la === 274 || _la === 275) {
                    {
                        this.state = 1251;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 115) {
                            {
                                this.state = 1250;
                                this.match(ImpalaSqlParser.KW_LIKE);
                            }
                        }
                        this.state = 1253;
                        localContext._pattern = this.stringLiteral();
                        this.state = 1258;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 271) {
                            {
                                {
                                    this.state = 1254;
                                    this.match(ImpalaSqlParser.BITWISEOR);
                                    this.state = 1255;
                                    this.stringLiteral();
                                }
                            }
                            this.state = 1260;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
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
    showCreateTable() {
        let localContext = new ShowCreateTableContext(this.context, this.state);
        this.enterRule(localContext, 120, ImpalaSqlParser.RULE_showCreateTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1263;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1264;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 1265;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1266;
                this.tableNamePath();
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
    showCreateView() {
        let localContext = new ShowCreateViewContext(this.context, this.state);
        this.enterRule(localContext, 122, ImpalaSqlParser.RULE_showCreateView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1268;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1269;
                this.match(ImpalaSqlParser.KW_CREATE);
                this.state = 1270;
                this.match(ImpalaSqlParser.KW_VIEW);
                this.state = 1271;
                this.viewNamePath();
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
    showTableStats() {
        let localContext = new ShowTableStatsContext(this.context, this.state);
        this.enterRule(localContext, 124, ImpalaSqlParser.RULE_showTableStats);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1273;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1274;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1275;
                this.match(ImpalaSqlParser.KW_STATS);
                this.state = 1276;
                this.tableNamePath();
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
    showColumnStats() {
        let localContext = new ShowColumnStatsContext(this.context, this.state);
        this.enterRule(localContext, 126, ImpalaSqlParser.RULE_showColumnStats);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1278;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1279;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 1280;
                this.match(ImpalaSqlParser.KW_STATS);
                this.state = 1281;
                this.tableNamePath();
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
    showPartitions() {
        let localContext = new ShowPartitionsContext(this.context, this.state);
        this.enterRule(localContext, 128, ImpalaSqlParser.RULE_showPartitions);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1283;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 154) {
                    {
                        this.state = 1284;
                        this.match(ImpalaSqlParser.KW_RANGE);
                    }
                }
                this.state = 1287;
                this.match(ImpalaSqlParser.KW_PARTITIONS);
                this.state = 1288;
                this.tableNamePath();
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
    showFiles() {
        let localContext = new ShowFilesContext(this.context, this.state);
        this.enterRule(localContext, 130, ImpalaSqlParser.RULE_showFiles);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1290;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1291;
                this.match(ImpalaSqlParser.KW_FILES);
                this.state = 1292;
                this.match(ImpalaSqlParser.KW_IN);
                this.state = 1293;
                this.tableNamePath();
                this.state = 1303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 1294;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 1295;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 1296;
                        this.expression();
                        this.state = 1299;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 263) {
                            {
                                this.state = 1297;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 1298;
                                this.expression();
                            }
                        }
                        this.state = 1301;
                        this.match(ImpalaSqlParser.RPAREN);
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
    showRoles() {
        let localContext = new ShowRolesContext(this.context, this.state);
        this.enterRule(localContext, 132, ImpalaSqlParser.RULE_showRoles);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1305;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 39) {
                    {
                        this.state = 1306;
                        this.match(ImpalaSqlParser.KW_CURRENT);
                    }
                }
                this.state = 1309;
                this.match(ImpalaSqlParser.KW_ROLES);
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
    showRoleGrant() {
        let localContext = new ShowRoleGrantContext(this.context, this.state);
        this.enterRule(localContext, 134, ImpalaSqlParser.RULE_showRoleGrant);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1311;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1312;
                this.match(ImpalaSqlParser.KW_ROLE);
                this.state = 1313;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1314;
                this.match(ImpalaSqlParser.KW_GROUP);
                this.state = 1315;
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
    showGrants() {
        let localContext = new ShowGrantsContext(this.context, this.state);
        this.enterRule(localContext, 136, ImpalaSqlParser.RULE_showGrants);
        let _la;
        try {
            this.state = 1331;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 139, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1317;
                        this.showDatabaseGrant();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1318;
                        this.showTableGrant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1319;
                        this.showColumnGrant();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1320;
                        this.match(ImpalaSqlParser.KW_SHOW);
                        this.state = 1321;
                        this.match(ImpalaSqlParser.KW_GRANT);
                        this.state = 1322;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 87 || _la === 166 || _la === 204)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1323;
                        this.identifier();
                        this.state = 1329;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 136) {
                            {
                                this.state = 1324;
                                this.match(ImpalaSqlParser.KW_ON);
                                this.state = 1325;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 178 || _la === 209)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1327;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                                    {
                                        this.state = 1326;
                                        this.qualifiedName();
                                    }
                                }
                            }
                        }
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
    showDatabaseGrant() {
        let localContext = new ShowDatabaseGrantContext(this.context, this.state);
        this.enterRule(localContext, 138, ImpalaSqlParser.RULE_showDatabaseGrant);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1333;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1334;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1335;
                _la = this.tokenStream.LA(1);
                if (!(_la === 87 || _la === 166 || _la === 204)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1336;
                this.identifier();
                this.state = 1342;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                        this.state = 1337;
                        this.match(ImpalaSqlParser.KW_ON);
                        this.state = 1338;
                        this.match(ImpalaSqlParser.KW_DATABASE);
                        this.state = 1340;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                            {
                                this.state = 1339;
                                this.databaseNamePath();
                            }
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
    showTableGrant() {
        let localContext = new ShowTableGrantContext(this.context, this.state);
        this.enterRule(localContext, 140, ImpalaSqlParser.RULE_showTableGrant);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1344;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1345;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1346;
                _la = this.tokenStream.LA(1);
                if (!(_la === 87 || _la === 166 || _la === 204)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1347;
                this.identifier();
                this.state = 1353;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                        this.state = 1348;
                        this.match(ImpalaSqlParser.KW_ON);
                        this.state = 1349;
                        this.match(ImpalaSqlParser.KW_TABLE);
                        this.state = 1351;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                            {
                                this.state = 1350;
                                this.tableNamePath();
                            }
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
    showColumnGrant() {
        let localContext = new ShowColumnGrantContext(this.context, this.state);
        this.enterRule(localContext, 142, ImpalaSqlParser.RULE_showColumnGrant);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1355;
                this.match(ImpalaSqlParser.KW_SHOW);
                this.state = 1356;
                this.match(ImpalaSqlParser.KW_GRANT);
                this.state = 1357;
                _la = this.tokenStream.LA(1);
                if (!(_la === 87 || _la === 166 || _la === 204)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1358;
                this.identifier();
                this.state = 1364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                        this.state = 1359;
                        this.match(ImpalaSqlParser.KW_ON);
                        this.state = 1360;
                        this.match(ImpalaSqlParser.KW_COLUMN);
                        this.state = 1362;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context)) {
                            case 1:
                                {
                                    this.state = 1361;
                                    this.columnNamePath();
                                }
                                break;
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
    addCommentStatement() {
        let localContext = new AddCommentStatementContext(this.context, this.state);
        this.enterRule(localContext, 144, ImpalaSqlParser.RULE_addCommentStatement);
        try {
            this.state = 1369;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1366;
                        this.addDatabaseComments();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1367;
                        this.addTableComments();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1368;
                        this.addColumnComments();
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
    addDatabaseComments() {
        let localContext = new AddDatabaseCommentsContext(this.context, this.state);
        this.enterRule(localContext, 146, ImpalaSqlParser.RULE_addDatabaseComments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1371;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1372;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1373;
                this.match(ImpalaSqlParser.KW_DATABASE);
                this.state = 1374;
                this.databaseNamePath();
                this.state = 1375;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 1378;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.STRING:
                    case ImpalaSqlParser.UNICODE_STRING:
                        {
                            this.state = 1376;
                            this.stringLiteral();
                        }
                        break;
                    case ImpalaSqlParser.KW_NULL:
                        {
                            this.state = 1377;
                            this.match(ImpalaSqlParser.KW_NULL);
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
    addTableComments() {
        let localContext = new AddTableCommentsContext(this.context, this.state);
        this.enterRule(localContext, 148, ImpalaSqlParser.RULE_addTableComments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1380;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1381;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1382;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1383;
                this.tableNamePath();
                this.state = 1384;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 1387;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.STRING:
                    case ImpalaSqlParser.UNICODE_STRING:
                        {
                            this.state = 1385;
                            this.stringLiteral();
                        }
                        break;
                    case ImpalaSqlParser.KW_NULL:
                        {
                            this.state = 1386;
                            this.match(ImpalaSqlParser.KW_NULL);
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
    addColumnComments() {
        let localContext = new AddColumnCommentsContext(this.context, this.state);
        this.enterRule(localContext, 150, ImpalaSqlParser.RULE_addColumnComments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1389;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1390;
                this.match(ImpalaSqlParser.KW_ON);
                this.state = 1391;
                this.match(ImpalaSqlParser.KW_COLUMN);
                this.state = 1392;
                this.columnNamePath();
                this.state = 1393;
                this.match(ImpalaSqlParser.KW_IS);
                this.state = 1396;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.STRING:
                    case ImpalaSqlParser.UNICODE_STRING:
                        {
                            this.state = 1394;
                            this.stringLiteral();
                        }
                        break;
                    case ImpalaSqlParser.KW_NULL:
                        {
                            this.state = 1395;
                            this.match(ImpalaSqlParser.KW_NULL);
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
    explainStatement() {
        let localContext = new ExplainStatementContext(this.context, this.state);
        this.enterRule(localContext, 152, ImpalaSqlParser.RULE_explainStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1398;
                this.match(ImpalaSqlParser.KW_EXPLAIN);
                this.state = 1399;
                this.sqlStatement();
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
    setStatement() {
        let localContext = new SetStatementContext(this.context, this.state);
        this.enterRule(localContext, 154, ImpalaSqlParser.RULE_setStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1401;
                this.match(ImpalaSqlParser.KW_SET);
                this.state = 1407;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_ALL:
                        {
                            this.state = 1402;
                            this.match(ImpalaSqlParser.KW_ALL);
                        }
                        break;
                    case ImpalaSqlParser.KW_BERNOULLI:
                    case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                    case ImpalaSqlParser.KW_CURRENT_USER:
                    case ImpalaSqlParser.KW_DAY:
                    case ImpalaSqlParser.KW_DAYS:
                    case ImpalaSqlParser.KW_EXCLUDING:
                    case ImpalaSqlParser.KW_EXTRACT:
                    case ImpalaSqlParser.KW_HOUR:
                    case ImpalaSqlParser.KW_INCLUDING:
                    case ImpalaSqlParser.KW_KEY:
                    case ImpalaSqlParser.KW_LOCALTIME:
                    case ImpalaSqlParser.KW_MINUTE:
                    case ImpalaSqlParser.KW_MINUTES:
                    case ImpalaSqlParser.KW_MONTH:
                    case ImpalaSqlParser.KW_MONTHS:
                    case ImpalaSqlParser.KW_NFC:
                    case ImpalaSqlParser.KW_NFD:
                    case ImpalaSqlParser.KW_NFKC:
                    case ImpalaSqlParser.KW_NFKD:
                    case ImpalaSqlParser.KW_OPTION:
                    case ImpalaSqlParser.KW_ORDINALITY:
                    case ImpalaSqlParser.KW_PRIVILEGES:
                    case ImpalaSqlParser.KW_PROPERTIES:
                    case ImpalaSqlParser.KW_SECOND:
                    case ImpalaSqlParser.KW_SECONDS:
                    case ImpalaSqlParser.KW_SHUTDOWN:
                    case ImpalaSqlParser.KW_SUBSTRING:
                    case ImpalaSqlParser.KW_SYSTEM:
                    case ImpalaSqlParser.KW_TRY_CAST:
                    case ImpalaSqlParser.KW_USER:
                    case ImpalaSqlParser.KW_VIEWS:
                    case ImpalaSqlParser.KW_YEAR:
                    case ImpalaSqlParser.KW_ORC:
                    case ImpalaSqlParser.KW_DATE:
                    case ImpalaSqlParser.STRING:
                    case ImpalaSqlParser.IDENTIFIER:
                    case ImpalaSqlParser.DIGIT_IDENTIFIER:
                    case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                        {
                            this.state = 1403;
                            this.identifier();
                            this.state = 1404;
                            this.match(ImpalaSqlParser.EQ);
                            this.state = 1405;
                            this.expression();
                        }
                        break;
                    case ImpalaSqlParser.EOF:
                    case ImpalaSqlParser.KW_ALTER:
                    case ImpalaSqlParser.KW_COMMENT:
                    case ImpalaSqlParser.KW_COMPUTE:
                    case ImpalaSqlParser.KW_CREATE:
                    case ImpalaSqlParser.KW_DELETE:
                    case ImpalaSqlParser.KW_UPDATE:
                    case ImpalaSqlParser.KW_DESCRIBE:
                    case ImpalaSqlParser.KW_DROP:
                    case ImpalaSqlParser.KW_EXPLAIN:
                    case ImpalaSqlParser.KW_GRANT:
                    case ImpalaSqlParser.KW_INSERT:
                    case ImpalaSqlParser.KW_INVALIDATE:
                    case ImpalaSqlParser.KW_LOAD:
                    case ImpalaSqlParser.KW_REVOKE:
                    case ImpalaSqlParser.KW_REFRESH:
                    case ImpalaSqlParser.KW_SELECT:
                    case ImpalaSqlParser.KW_SET:
                    case ImpalaSqlParser.KW_SHOW:
                    case ImpalaSqlParser.KW_TABLE:
                    case ImpalaSqlParser.KW_TRUNCATE:
                    case ImpalaSqlParser.KW_USE:
                    case ImpalaSqlParser.KW_UPSERT:
                    case ImpalaSqlParser.KW_VALUES:
                    case ImpalaSqlParser.KW_WITH:
                    case ImpalaSqlParser.SEMICOLON:
                    case ImpalaSqlParser.COLON:
                    case ImpalaSqlParser.LPAREN:
                        break;
                    default:
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
    shutdownStatement() {
        let localContext = new ShutdownStatementContext(this.context, this.state);
        this.enterRule(localContext, 156, ImpalaSqlParser.RULE_shutdownStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1409;
                this.match(ImpalaSqlParser.COLON);
                this.state = 1410;
                this.match(ImpalaSqlParser.KW_SHUTDOWN);
                this.state = 1411;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1421;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context)) {
                    case 1:
                        {
                            this.state = 1413;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 274 || _la === 275) {
                                {
                                    this.state = 1412;
                                    this.stringLiteral();
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1415;
                            this.stringLiteral();
                            this.state = 1418;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 263) {
                                {
                                    this.state = 1416;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1417;
                                    this.expression();
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 1420;
                            this.expression();
                        }
                        break;
                }
                this.state = 1423;
                this.match(ImpalaSqlParser.RPAREN);
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
    invalidateMetaStatement() {
        let localContext = new InvalidateMetaStatementContext(this.context, this.state);
        this.enterRule(localContext, 158, ImpalaSqlParser.RULE_invalidateMetaStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1425;
                this.match(ImpalaSqlParser.KW_INVALIDATE);
                this.state = 1426;
                this.match(ImpalaSqlParser.KW_METADATA);
                this.state = 1427;
                this.tableNamePath();
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
    loadDataStatement() {
        let localContext = new LoadDataStatementContext(this.context, this.state);
        this.enterRule(localContext, 160, ImpalaSqlParser.RULE_loadDataStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1429;
                this.match(ImpalaSqlParser.KW_LOAD);
                this.state = 1430;
                this.match(ImpalaSqlParser.KW_DATA);
                this.state = 1431;
                this.match(ImpalaSqlParser.KW_INPATH);
                this.state = 1432;
                this.match(ImpalaSqlParser.STRING);
                this.state = 1434;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 144) {
                    {
                        this.state = 1433;
                        this.match(ImpalaSqlParser.KW_OVERWRITE);
                    }
                }
                this.state = 1436;
                this.match(ImpalaSqlParser.KW_INTO);
                this.state = 1437;
                this.match(ImpalaSqlParser.KW_TABLE);
                this.state = 1438;
                this.tableNamePath();
                this.state = 1448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 1439;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 1440;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 1441;
                        this.expression();
                        this.state = 1444;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 263) {
                            {
                                this.state = 1442;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 1443;
                                this.expression();
                            }
                        }
                        this.state = 1446;
                        this.match(ImpalaSqlParser.RPAREN);
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
    refreshStatement() {
        let localContext = new RefreshStatementContext(this.context, this.state);
        this.enterRule(localContext, 162, ImpalaSqlParser.RULE_refreshStatement);
        try {
            this.state = 1453;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1450;
                        this.refreshMeta();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1451;
                        this.refreshAuth();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1452;
                        this.refreshFunction();
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
    refreshMeta() {
        let localContext = new RefreshMetaContext(this.context, this.state);
        this.enterRule(localContext, 164, ImpalaSqlParser.RULE_refreshMeta);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1455;
                this.match(ImpalaSqlParser.KW_REFRESH);
                this.state = 1456;
                this.tableNamePath();
                this.state = 1469;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 1457;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 1458;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 1459;
                        this.expression();
                        this.state = 1464;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                        while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1 + 1) {
                                {
                                    {
                                        this.state = 1460;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 1461;
                                        this.expression();
                                    }
                                }
                            }
                            this.state = 1466;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 158, this.context);
                        }
                        this.state = 1467;
                        this.match(ImpalaSqlParser.RPAREN);
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
    refreshAuth() {
        let localContext = new RefreshAuthContext(this.context, this.state);
        this.enterRule(localContext, 166, ImpalaSqlParser.RULE_refreshAuth);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1471;
                this.match(ImpalaSqlParser.KW_REFRESH);
                this.state = 1472;
                this.match(ImpalaSqlParser.KW_AUTHORIZATION);
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
    refreshFunction() {
        let localContext = new RefreshFunctionContext(this.context, this.state);
        this.enterRule(localContext, 168, ImpalaSqlParser.RULE_refreshFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1474;
                this.match(ImpalaSqlParser.KW_REFRESH);
                this.state = 1475;
                this.match(ImpalaSqlParser.KW_FUNCTIONS);
                this.state = 1476;
                this.functionNamePath();
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
    ifExists() {
        let localContext = new IfExistsContext(this.context, this.state);
        this.enterRule(localContext, 170, ImpalaSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1478;
                this.match(ImpalaSqlParser.KW_IF);
                this.state = 1479;
                this.match(ImpalaSqlParser.KW_EXISTS);
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
    ifNotExists() {
        let localContext = new IfNotExistsContext(this.context, this.state);
        this.enterRule(localContext, 172, ImpalaSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1481;
                this.match(ImpalaSqlParser.KW_IF);
                this.state = 1482;
                this.match(ImpalaSqlParser.KW_NOT);
                this.state = 1483;
                this.match(ImpalaSqlParser.KW_EXISTS);
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
        this.enterRule(localContext, 174, ImpalaSqlParser.RULE_tableNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1485;
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
    databaseNameCreate() {
        let localContext = new DatabaseNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 176, ImpalaSqlParser.RULE_databaseNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1487;
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
    viewNameCreate() {
        let localContext = new ViewNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 178, ImpalaSqlParser.RULE_viewNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1489;
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
    functionNameCreate() {
        let localContext = new FunctionNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 180, ImpalaSqlParser.RULE_functionNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1491;
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
    columnNamePathCreate() {
        let localContext = new ColumnNamePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 182, ImpalaSqlParser.RULE_columnNamePathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1493;
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
    databaseNamePath() {
        let localContext = new DatabaseNamePathContext(this.context, this.state);
        this.enterRule(localContext, 184, ImpalaSqlParser.RULE_databaseNamePath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1495;
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
    tableNamePath() {
        let localContext = new TableNamePathContext(this.context, this.state);
        this.enterRule(localContext, 186, ImpalaSqlParser.RULE_tableNamePath);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1497;
                this.identifier();
                this.state = 1502;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1498;
                                this.match(ImpalaSqlParser.DOT);
                                this.state = 1499;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 1504;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
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
    viewNamePath() {
        let localContext = new ViewNamePathContext(this.context, this.state);
        this.enterRule(localContext, 188, ImpalaSqlParser.RULE_viewNamePath);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1505;
                this.identifier();
                this.state = 1510;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1506;
                                this.match(ImpalaSqlParser.DOT);
                                this.state = 1507;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 1512;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
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
    functionNamePath() {
        let localContext = new FunctionNamePathContext(this.context, this.state);
        this.enterRule(localContext, 190, ImpalaSqlParser.RULE_functionNamePath);
        try {
            this.state = 1515;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1513;
                        this.reservedKeywordsUsedAsFuncName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1514;
                        this.qualifiedName();
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
    emptyColumn() {
        let localContext = new EmptyColumnContext(this.context, this.state);
        this.enterRule(localContext, 192, ImpalaSqlParser.RULE_emptyColumn);
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
    columnNamePath() {
        let localContext = new ColumnNamePathContext(this.context, this.state);
        this.enterRule(localContext, 194, ImpalaSqlParser.RULE_columnNamePath);
        try {
            this.state = 1522;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1519;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 1520;
                        this.emptyColumn();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1521;
                        this.qualifiedNameAllowEmpty();
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
        this.enterRule(localContext, 196, ImpalaSqlParser.RULE_columnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1524;
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
    columnNameAllowEmpty() {
        let localContext = new ColumnNameAllowEmptyContext(this.context, this.state);
        this.enterRule(localContext, 198, ImpalaSqlParser.RULE_columnNameAllowEmpty);
        try {
            this.state = 1529;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1526;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 1527;
                        this.emptyColumn();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1528;
                        this.qualifiedNameAllowEmpty();
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
    tableOrViewPath() {
        let localContext = new TableOrViewPathContext(this.context, this.state);
        this.enterRule(localContext, 200, ImpalaSqlParser.RULE_tableOrViewPath);
        try {
            this.state = 1533;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1531;
                        this.tableNamePath();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1532;
                        this.viewNamePath();
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
    createCommonItem() {
        let localContext = new CreateCommonItemContext(this.context, this.state);
        this.enterRule(localContext, 202, ImpalaSqlParser.RULE_createCommonItem);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 21) {
                    {
                        this.state = 1535;
                        this.match(ImpalaSqlParser.KW_SORT);
                        this.state = 1536;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 1537;
                        this.columnAliases();
                    }
                }
                this.state = 1541;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context)) {
                    case 1:
                        {
                            this.state = 1540;
                            this.commentClause();
                        }
                        break;
                }
                this.state = 1546;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 168) {
                    {
                        this.state = 1543;
                        this.match(ImpalaSqlParser.KW_ROW);
                        this.state = 1544;
                        this.match(ImpalaSqlParser.KW_FORMAT);
                        this.state = 1545;
                        this.rowFormat();
                    }
                }
                this.state = 1551;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 169, this.context)) {
                    case 1:
                        {
                            this.state = 1548;
                            this.match(ImpalaSqlParser.KW_WITH);
                            this.state = 1549;
                            this.match(ImpalaSqlParser.KW_SERDEPROPERTIES);
                            this.state = 1550;
                            localContext._serdProp = this.properties();
                        }
                        break;
                }
                this.state = 1556;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 23) {
                    {
                        this.state = 1553;
                        this.match(ImpalaSqlParser.KW_STORED);
                        this.state = 1554;
                        this.match(ImpalaSqlParser.KW_AS);
                        this.state = 1555;
                        this.fileFormat();
                    }
                }
                this.state = 1560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                        this.state = 1558;
                        this.match(ImpalaSqlParser.KW_LOCATION);
                        this.state = 1559;
                        localContext._location = this.stringLiteral();
                    }
                }
                this.state = 1572;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_CACHED:
                        {
                            this.state = 1562;
                            this.match(ImpalaSqlParser.KW_CACHED);
                            this.state = 1563;
                            this.match(ImpalaSqlParser.KW_IN);
                            this.state = 1564;
                            localContext._cacheName = this.qualifiedName();
                            this.state = 1569;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 172, this.context)) {
                                case 1:
                                    {
                                        this.state = 1565;
                                        this.match(ImpalaSqlParser.KW_WITH);
                                        this.state = 1566;
                                        this.match(ImpalaSqlParser.KW_REPLICATION);
                                        this.state = 1567;
                                        this.match(ImpalaSqlParser.EQ);
                                        this.state = 1568;
                                        this.match(ImpalaSqlParser.INTEGER_VALUE);
                                    }
                                    break;
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_UNCACHED:
                        {
                            this.state = 1571;
                            this.match(ImpalaSqlParser.KW_UNCACHED);
                        }
                        break;
                    case ImpalaSqlParser.EOF:
                    case ImpalaSqlParser.KW_ALTER:
                    case ImpalaSqlParser.KW_AS:
                    case ImpalaSqlParser.KW_TBLPROPERTIES:
                    case ImpalaSqlParser.KW_COMMENT:
                    case ImpalaSqlParser.KW_COMPUTE:
                    case ImpalaSqlParser.KW_CREATE:
                    case ImpalaSqlParser.KW_DELETE:
                    case ImpalaSqlParser.KW_UPDATE:
                    case ImpalaSqlParser.KW_DESCRIBE:
                    case ImpalaSqlParser.KW_DROP:
                    case ImpalaSqlParser.KW_EXPLAIN:
                    case ImpalaSqlParser.KW_GRANT:
                    case ImpalaSqlParser.KW_INSERT:
                    case ImpalaSqlParser.KW_INVALIDATE:
                    case ImpalaSqlParser.KW_LOAD:
                    case ImpalaSqlParser.KW_REVOKE:
                    case ImpalaSqlParser.KW_REFRESH:
                    case ImpalaSqlParser.KW_SELECT:
                    case ImpalaSqlParser.KW_SET:
                    case ImpalaSqlParser.KW_SHOW:
                    case ImpalaSqlParser.KW_TABLE:
                    case ImpalaSqlParser.KW_TRUNCATE:
                    case ImpalaSqlParser.KW_USE:
                    case ImpalaSqlParser.KW_UPSERT:
                    case ImpalaSqlParser.KW_VALUES:
                    case ImpalaSqlParser.KW_WITH:
                    case ImpalaSqlParser.SEMICOLON:
                    case ImpalaSqlParser.COLON:
                    case ImpalaSqlParser.LPAREN:
                        break;
                    default:
                        break;
                }
                this.state = 1576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                        this.state = 1574;
                        this.match(ImpalaSqlParser.KW_TBLPROPERTIES);
                        this.state = 1575;
                        localContext._tblProp = this.properties();
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
    assignmentList() {
        let localContext = new AssignmentListContext(this.context, this.state);
        this.enterRule(localContext, 204, ImpalaSqlParser.RULE_assignmentList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1578;
                this.assignmentItem();
                this.state = 1583;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 1579;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1580;
                            this.assignmentItem();
                        }
                    }
                    this.state = 1585;
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
    assignmentItem() {
        let localContext = new AssignmentItemContext(this.context, this.state);
        this.enterRule(localContext, 206, ImpalaSqlParser.RULE_assignmentItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1586;
                this.qualifiedName();
                this.state = 1587;
                this.match(ImpalaSqlParser.EQ);
                this.state = 1588;
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
    viewColumns() {
        let localContext = new ViewColumnsContext(this.context, this.state);
        this.enterRule(localContext, 208, ImpalaSqlParser.RULE_viewColumns);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1590;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1592;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                        this.state = 1591;
                        this.viewColumnItem();
                    }
                }
                this.state = 1600;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 1594;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1596;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                                {
                                    this.state = 1595;
                                    this.viewColumnItem();
                                }
                            }
                        }
                    }
                    this.state = 1602;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1603;
                this.match(ImpalaSqlParser.RPAREN);
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
    viewColumnItem() {
        let localContext = new ViewColumnItemContext(this.context, this.state);
        this.enterRule(localContext, 210, ImpalaSqlParser.RULE_viewColumnItem);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1605;
                this.columnNamePathCreate();
                this.state = 1607;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                        this.state = 1606;
                        this.commentClause();
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
    queryStatement() {
        let localContext = new QueryStatementContext(this.context, this.state);
        this.enterRule(localContext, 212, ImpalaSqlParser.RULE_queryStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1610;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 216) {
                    {
                        this.state = 1609;
                        this.with_();
                    }
                }
                this.state = 1612;
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
    with_() {
        let localContext = new WithContext(this.context, this.state);
        this.enterRule(localContext, 214, ImpalaSqlParser.RULE_with);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1614;
                this.match(ImpalaSqlParser.KW_WITH);
                this.state = 1615;
                this.namedQuery();
                this.state = 1620;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 1616;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1617;
                            this.namedQuery();
                        }
                    }
                    this.state = 1622;
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
    constraintSpecification() {
        let localContext = new ConstraintSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 216, ImpalaSqlParser.RULE_constraintSpecification);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1623;
                this.match(ImpalaSqlParser.KW_PRIMARY);
                this.state = 1624;
                this.match(ImpalaSqlParser.KW_KEY);
                this.state = 1625;
                this.columnAliases();
                this.state = 1627;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 53) {
                    {
                        this.state = 1626;
                        this.match(ImpalaSqlParser.KW_DISABLE);
                    }
                }
                this.state = 1632;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 183, this.context)) {
                    case 1:
                        {
                            this.state = 1629;
                            this.match(ImpalaSqlParser.KW_NOVALIDATE);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1630;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1631;
                            this.match(ImpalaSqlParser.KW_NOVALIDATE);
                        }
                        break;
                }
                this.state = 1637;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 184, this.context)) {
                    case 1:
                        {
                            this.state = 1634;
                            this.match(ImpalaSqlParser.KW_RELY);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1635;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1636;
                            this.match(ImpalaSqlParser.KW_RELY);
                        }
                        break;
                }
                this.state = 1651;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 81 || _la === 263) {
                    {
                        this.state = 1642;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ImpalaSqlParser.COMMA:
                                {
                                    this.state = 1639;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1640;
                                    this.foreignKeySpecification();
                                }
                                break;
                            case ImpalaSqlParser.KW_FOREIGN:
                                {
                                    this.state = 1641;
                                    this.foreignKeySpecification();
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1648;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
                        while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1 + 1) {
                                {
                                    {
                                        this.state = 1644;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 1645;
                                        this.foreignKeySpecification();
                                    }
                                }
                            }
                            this.state = 1650;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
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
    foreignKeySpecification() {
        let localContext = new ForeignKeySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 218, ImpalaSqlParser.RULE_foreignKeySpecification);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1653;
                this.match(ImpalaSqlParser.KW_FOREIGN);
                this.state = 1654;
                this.match(ImpalaSqlParser.KW_KEY);
                this.state = 1655;
                this.columnAliases();
                this.state = 1656;
                this.match(ImpalaSqlParser.KW_REFERENCES);
                this.state = 1657;
                this.tableNamePath();
                this.state = 1658;
                this.columnAliases();
                this.state = 1660;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 53) {
                    {
                        this.state = 1659;
                        this.match(ImpalaSqlParser.KW_DISABLE);
                    }
                }
                this.state = 1663;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 225) {
                    {
                        this.state = 1662;
                        this.match(ImpalaSqlParser.KW_NOVALIDATE);
                    }
                }
                this.state = 1666;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 226) {
                    {
                        this.state = 1665;
                        this.match(ImpalaSqlParser.KW_RELY);
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
    columnSpec() {
        let localContext = new ColumnSpecContext(this.context, this.state);
        this.enterRule(localContext, 220, ImpalaSqlParser.RULE_columnSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1668;
                this.columnNamePath();
                this.state = 1669;
                this.type_(0);
                this.state = 1672;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context)) {
                    case 1:
                        {
                            this.state = 1670;
                            this.match(ImpalaSqlParser.KW_COMMENT);
                            this.state = 1671;
                            this.stringLiteral();
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
    columnDefinition() {
        let localContext = new ColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 222, ImpalaSqlParser.RULE_columnDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1674;
                this.columnNamePathCreate();
                this.state = 1675;
                localContext._colType = this.type_(0);
                this.state = 1677;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                        this.state = 1676;
                        this.commentClause();
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
    kuduTableElement() {
        let localContext = new KuduTableElementContext(this.context, this.state);
        this.enterRule(localContext, 224, ImpalaSqlParser.RULE_kuduTableElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1679;
                this.kuduColumnDefinition();
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
    kuduColumnDefinition() {
        let localContext = new KuduColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 226, ImpalaSqlParser.RULE_kuduColumnDefinition);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1681;
                this.columnNamePathCreate();
                this.state = 1682;
                localContext._colType = this.type_(0);
                this.state = 1690;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                    {
                        this.state = 1683;
                        this.kuduAttributes();
                        this.state = 1687;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
                        while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1 + 1) {
                                {
                                    {
                                        this.state = 1684;
                                        this.kuduAttributes();
                                    }
                                }
                            }
                            this.state = 1689;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
                        }
                    }
                }
                this.state = 1693;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34) {
                    {
                        this.state = 1692;
                        this.commentClause();
                    }
                }
                this.state = 1697;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 150) {
                    {
                        this.state = 1695;
                        this.match(ImpalaSqlParser.KW_PRIMARY);
                        this.state = 1696;
                        this.match(ImpalaSqlParser.KW_KEY);
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
    commentClause() {
        let localContext = new CommentClauseContext(this.context, this.state);
        this.enterRule(localContext, 228, ImpalaSqlParser.RULE_commentClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1699;
                this.match(ImpalaSqlParser.KW_COMMENT);
                this.state = 1700;
                localContext._comment = this.stringLiteral();
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
    columnSpecWithKudu() {
        let localContext = new ColumnSpecWithKuduContext(this.context, this.state);
        this.enterRule(localContext, 230, ImpalaSqlParser.RULE_columnSpecWithKudu);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1702;
                this.columnSpec();
                this.state = 1710;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                    {
                        this.state = 1703;
                        this.kuduAttributes();
                        this.state = 1707;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
                        while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1 + 1) {
                                {
                                    {
                                        this.state = 1704;
                                        this.kuduAttributes();
                                    }
                                }
                            }
                            this.state = 1709;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
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
    createColumnSpecWithKudu() {
        let localContext = new CreateColumnSpecWithKuduContext(this.context, this.state);
        this.enterRule(localContext, 232, ImpalaSqlParser.RULE_createColumnSpecWithKudu);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1712;
                this.columnNamePathCreate();
                this.state = 1713;
                this.type_(0);
                this.state = 1716;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 199, this.context)) {
                    case 1:
                        {
                            this.state = 1714;
                            this.match(ImpalaSqlParser.KW_COMMENT);
                            this.state = 1715;
                            this.stringLiteral();
                        }
                        break;
                }
                this.state = 1725;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 33619969) !== 0) || _la === 132 || _la === 133) {
                    {
                        this.state = 1718;
                        this.kuduAttributes();
                        this.state = 1722;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 200, this.context);
                        while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1 + 1) {
                                {
                                    {
                                        this.state = 1719;
                                        this.kuduAttributes();
                                    }
                                }
                            }
                            this.state = 1724;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 200, this.context);
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
    kuduAttributes() {
        let localContext = new KuduAttributesContext(this.context, this.state);
        this.enterRule(localContext, 234, ImpalaSqlParser.RULE_kuduAttributes);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1732;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_NOT:
                    case ImpalaSqlParser.KW_NULL:
                        {
                            this.state = 1728;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 132) {
                                {
                                    this.state = 1727;
                                    this.match(ImpalaSqlParser.KW_NOT);
                                }
                            }
                            this.state = 1730;
                            this.match(ImpalaSqlParser.KW_NULL);
                        }
                        break;
                    case ImpalaSqlParser.KW_BLOCK_SIZE:
                    case ImpalaSqlParser.KW_COMPRESSION:
                    case ImpalaSqlParser.KW_DEFAULT:
                    case ImpalaSqlParser.KW_ENCODING:
                        {
                            this.state = 1731;
                            this.kuduStorageAttr();
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
    kuduStorageAttr() {
        let localContext = new KuduStorageAttrContext(this.context, this.state);
        this.enterRule(localContext, 236, ImpalaSqlParser.RULE_kuduStorageAttr);
        try {
            this.state = 1742;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_ENCODING:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1734;
                        this.match(ImpalaSqlParser.KW_ENCODING);
                        this.state = 1735;
                        this.expression();
                    }
                    break;
                case ImpalaSqlParser.KW_COMPRESSION:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1736;
                        this.match(ImpalaSqlParser.KW_COMPRESSION);
                        this.state = 1737;
                        this.expression();
                    }
                    break;
                case ImpalaSqlParser.KW_DEFAULT:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1738;
                        this.match(ImpalaSqlParser.KW_DEFAULT);
                        this.state = 1739;
                        this.expression();
                    }
                    break;
                case ImpalaSqlParser.KW_BLOCK_SIZE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1740;
                        this.match(ImpalaSqlParser.KW_BLOCK_SIZE);
                        this.state = 1741;
                        this.number_();
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
    fileFormat() {
        let localContext = new FileFormatContext(this.context, this.state);
        this.enterRule(localContext, 238, ImpalaSqlParser.RULE_fileFormat);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1744;
                _la = this.tokenStream.LA(1);
                if (!(_la === 147 || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 31) !== 0))) {
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
    kuduPartitionClause() {
        let localContext = new KuduPartitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 240, ImpalaSqlParser.RULE_kuduPartitionClause);
        let _la;
        try {
            let alternative;
            this.state = 1759;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_HASH:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 1746;
                            this.hashClause();
                            this.state = 1751;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1 + 1) {
                                    {
                                        {
                                            this.state = 1747;
                                            this.match(ImpalaSqlParser.COMMA);
                                            this.state = 1748;
                                            this.hashClause();
                                        }
                                    }
                                }
                                this.state = 1753;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                            }
                            this.state = 1756;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 263) {
                                {
                                    this.state = 1754;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1755;
                                    this.rangeClause();
                                }
                            }
                        }
                    }
                    break;
                case ImpalaSqlParser.KW_RANGE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1758;
                        this.rangeClause();
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
    hashClause() {
        let localContext = new HashClauseContext(this.context, this.state);
        this.enterRule(localContext, 242, ImpalaSqlParser.RULE_hashClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1761;
                this.match(ImpalaSqlParser.KW_HASH);
                this.state = 1763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 1762;
                        this.columnAliases();
                    }
                }
                this.state = 1765;
                this.match(ImpalaSqlParser.KW_PARTITIONS);
                this.state = 1766;
                this.number_();
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
    rangeClause() {
        let localContext = new RangeClauseContext(this.context, this.state);
        this.enterRule(localContext, 244, ImpalaSqlParser.RULE_rangeClause);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1768;
                this.match(ImpalaSqlParser.KW_RANGE);
                this.state = 1770;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 209, this.context)) {
                    case 1:
                        {
                            this.state = 1769;
                            this.columnAliases();
                        }
                        break;
                }
                this.state = 1772;
                this.match(ImpalaSqlParser.LPAREN);
                {
                    this.state = 1773;
                    this.match(ImpalaSqlParser.KW_PARTITION);
                    this.state = 1774;
                    this.kuduPartitionSpec();
                    this.state = 1780;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 210, this.context);
                    while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                        if (alternative === 1 + 1) {
                            {
                                {
                                    this.state = 1775;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1776;
                                    this.match(ImpalaSqlParser.KW_PARTITION);
                                    this.state = 1777;
                                    this.kuduPartitionSpec();
                                }
                            }
                        }
                        this.state = 1782;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 210, this.context);
                    }
                }
                this.state = 1783;
                this.match(ImpalaSqlParser.RPAREN);
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
    kuduPartitionSpec() {
        let localContext = new KuduPartitionSpecContext(this.context, this.state);
        this.enterRule(localContext, 246, ImpalaSqlParser.RULE_kuduPartitionSpec);
        let _la;
        try {
            this.state = 1800;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_VALUE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1785;
                        this.match(ImpalaSqlParser.KW_VALUE);
                        this.state = 1786;
                        this.partitionCol();
                        this.state = 1787;
                        this.expression();
                    }
                    break;
                case ImpalaSqlParser.KW_ARRAY:
                case ImpalaSqlParser.KW_BERNOULLI:
                case ImpalaSqlParser.KW_CASE:
                case ImpalaSqlParser.KW_CAST:
                case ImpalaSqlParser.KW_CURRENT_DATE:
                case ImpalaSqlParser.KW_CURRENT_PATH:
                case ImpalaSqlParser.KW_CURRENT_TIME:
                case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                case ImpalaSqlParser.KW_CURRENT_USER:
                case ImpalaSqlParser.KW_DAY:
                case ImpalaSqlParser.KW_DAYS:
                case ImpalaSqlParser.KW_EXCLUDING:
                case ImpalaSqlParser.KW_EXISTS:
                case ImpalaSqlParser.KW_EXTRACT:
                case ImpalaSqlParser.KW_FALSE:
                case ImpalaSqlParser.KW_GROUPING:
                case ImpalaSqlParser.KW_HOUR:
                case ImpalaSqlParser.KW_INCLUDING:
                case ImpalaSqlParser.KW_INTERVAL:
                case ImpalaSqlParser.KW_KEY:
                case ImpalaSqlParser.KW_LEFT:
                case ImpalaSqlParser.KW_LOCALTIME:
                case ImpalaSqlParser.KW_LOCALTIMESTAMP:
                case ImpalaSqlParser.KW_MINUTE:
                case ImpalaSqlParser.KW_MINUTES:
                case ImpalaSqlParser.KW_MONTH:
                case ImpalaSqlParser.KW_MONTHS:
                case ImpalaSqlParser.KW_NFC:
                case ImpalaSqlParser.KW_NFD:
                case ImpalaSqlParser.KW_NFKC:
                case ImpalaSqlParser.KW_NFKD:
                case ImpalaSqlParser.KW_NORMALIZE:
                case ImpalaSqlParser.KW_NOT:
                case ImpalaSqlParser.KW_NULL:
                case ImpalaSqlParser.KW_OPTION:
                case ImpalaSqlParser.KW_ORDINALITY:
                case ImpalaSqlParser.KW_POSITION:
                case ImpalaSqlParser.KW_PRIVILEGES:
                case ImpalaSqlParser.KW_PROPERTIES:
                case ImpalaSqlParser.KW_REPLACE:
                case ImpalaSqlParser.KW_RIGHT:
                case ImpalaSqlParser.KW_ROW:
                case ImpalaSqlParser.KW_SECOND:
                case ImpalaSqlParser.KW_SECONDS:
                case ImpalaSqlParser.KW_SHUTDOWN:
                case ImpalaSqlParser.KW_SUBSTRING:
                case ImpalaSqlParser.KW_SYSTEM:
                case ImpalaSqlParser.KW_TRUE:
                case ImpalaSqlParser.KW_TRY_CAST:
                case ImpalaSqlParser.KW_TRUNCATE:
                case ImpalaSqlParser.KW_USER:
                case ImpalaSqlParser.KW_VALUES:
                case ImpalaSqlParser.KW_VIEWS:
                case ImpalaSqlParser.KW_YEAR:
                case ImpalaSqlParser.KW_ORC:
                case ImpalaSqlParser.KW_DATE:
                case ImpalaSqlParser.PLUS:
                case ImpalaSqlParser.MINUS:
                case ImpalaSqlParser.LPAREN:
                case ImpalaSqlParser.QUESTION:
                case ImpalaSqlParser.STRING:
                case ImpalaSqlParser.UNICODE_STRING:
                case ImpalaSqlParser.BINARY_LITERAL:
                case ImpalaSqlParser.INTEGER_VALUE:
                case ImpalaSqlParser.DECIMAL_VALUE:
                case ImpalaSqlParser.DOUBLE_VALUE:
                case ImpalaSqlParser.IDENTIFIER:
                case ImpalaSqlParser.DIGIT_IDENTIFIER:
                case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                case ImpalaSqlParser.DOUBLE_PRECISION:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1792;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                            {
                                this.state = 1789;
                                this.expression();
                                this.state = 1790;
                                this.rangeOperator();
                            }
                        }
                        this.state = 1794;
                        this.match(ImpalaSqlParser.KW_VALUES);
                        this.state = 1798;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 212, this.context)) {
                            case 1:
                                {
                                    this.state = 1795;
                                    this.rangeOperator();
                                    this.state = 1796;
                                    this.expression();
                                }
                                break;
                        }
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
    cacheSpec() {
        let localContext = new CacheSpecContext(this.context, this.state);
        this.enterRule(localContext, 248, ImpalaSqlParser.RULE_cacheSpec);
        try {
            this.state = 1812;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_CACHED:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1802;
                        this.match(ImpalaSqlParser.KW_CACHED);
                        this.state = 1803;
                        this.match(ImpalaSqlParser.KW_IN);
                        this.state = 1804;
                        this.identifier();
                        this.state = 1809;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 214, this.context)) {
                            case 1:
                                {
                                    this.state = 1805;
                                    this.match(ImpalaSqlParser.KW_WITH);
                                    this.state = 1806;
                                    this.match(ImpalaSqlParser.KW_REPLICATION);
                                    this.state = 1807;
                                    this.match(ImpalaSqlParser.EQ);
                                    this.state = 1808;
                                    this.number_();
                                }
                                break;
                        }
                    }
                    break;
                case ImpalaSqlParser.KW_UNCACHED:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1811;
                        this.match(ImpalaSqlParser.KW_UNCACHED);
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
    rangeOperator() {
        let localContext = new RangeOperatorContext(this.context, this.state);
        this.enterRule(localContext, 250, ImpalaSqlParser.RULE_rangeOperator);
        try {
            this.state = 1819;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_ARRAY:
                case ImpalaSqlParser.KW_BERNOULLI:
                case ImpalaSqlParser.KW_CASE:
                case ImpalaSqlParser.KW_CAST:
                case ImpalaSqlParser.KW_CURRENT_DATE:
                case ImpalaSqlParser.KW_CURRENT_PATH:
                case ImpalaSqlParser.KW_CURRENT_TIME:
                case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                case ImpalaSqlParser.KW_CURRENT_USER:
                case ImpalaSqlParser.KW_DAY:
                case ImpalaSqlParser.KW_DAYS:
                case ImpalaSqlParser.KW_EXCLUDING:
                case ImpalaSqlParser.KW_EXISTS:
                case ImpalaSqlParser.KW_EXTRACT:
                case ImpalaSqlParser.KW_FALSE:
                case ImpalaSqlParser.KW_GROUPING:
                case ImpalaSqlParser.KW_HOUR:
                case ImpalaSqlParser.KW_INCLUDING:
                case ImpalaSqlParser.KW_INTERVAL:
                case ImpalaSqlParser.KW_KEY:
                case ImpalaSqlParser.KW_LEFT:
                case ImpalaSqlParser.KW_LOCALTIME:
                case ImpalaSqlParser.KW_LOCALTIMESTAMP:
                case ImpalaSqlParser.KW_MINUTE:
                case ImpalaSqlParser.KW_MINUTES:
                case ImpalaSqlParser.KW_MONTH:
                case ImpalaSqlParser.KW_MONTHS:
                case ImpalaSqlParser.KW_NFC:
                case ImpalaSqlParser.KW_NFD:
                case ImpalaSqlParser.KW_NFKC:
                case ImpalaSqlParser.KW_NFKD:
                case ImpalaSqlParser.KW_NORMALIZE:
                case ImpalaSqlParser.KW_NOT:
                case ImpalaSqlParser.KW_NULL:
                case ImpalaSqlParser.KW_OPTION:
                case ImpalaSqlParser.KW_ORDINALITY:
                case ImpalaSqlParser.KW_POSITION:
                case ImpalaSqlParser.KW_PRIVILEGES:
                case ImpalaSqlParser.KW_PROPERTIES:
                case ImpalaSqlParser.KW_REPLACE:
                case ImpalaSqlParser.KW_RIGHT:
                case ImpalaSqlParser.KW_ROW:
                case ImpalaSqlParser.KW_SECOND:
                case ImpalaSqlParser.KW_SECONDS:
                case ImpalaSqlParser.KW_SHUTDOWN:
                case ImpalaSqlParser.KW_SUBSTRING:
                case ImpalaSqlParser.KW_SYSTEM:
                case ImpalaSqlParser.KW_TRUE:
                case ImpalaSqlParser.KW_TRY_CAST:
                case ImpalaSqlParser.KW_TRUNCATE:
                case ImpalaSqlParser.KW_USER:
                case ImpalaSqlParser.KW_VALUES:
                case ImpalaSqlParser.KW_VIEWS:
                case ImpalaSqlParser.KW_YEAR:
                case ImpalaSqlParser.KW_ORC:
                case ImpalaSqlParser.KW_DATE:
                case ImpalaSqlParser.PLUS:
                case ImpalaSqlParser.MINUS:
                case ImpalaSqlParser.LPAREN:
                case ImpalaSqlParser.QUESTION:
                case ImpalaSqlParser.STRING:
                case ImpalaSqlParser.UNICODE_STRING:
                case ImpalaSqlParser.BINARY_LITERAL:
                case ImpalaSqlParser.INTEGER_VALUE:
                case ImpalaSqlParser.DECIMAL_VALUE:
                case ImpalaSqlParser.DOUBLE_VALUE:
                case ImpalaSqlParser.IDENTIFIER:
                case ImpalaSqlParser.DIGIT_IDENTIFIER:
                case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                case ImpalaSqlParser.DOUBLE_PRECISION:
                    this.enterOuterAlt(localContext, 1);
                    // tslint:disable-next-line:no-empty
                    {
                    }
                    break;
                case ImpalaSqlParser.LT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1815;
                        this.match(ImpalaSqlParser.LT);
                    }
                    break;
                case ImpalaSqlParser.LTE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1816;
                        this.match(ImpalaSqlParser.LTE);
                    }
                    break;
                case ImpalaSqlParser.GT:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1817;
                        this.match(ImpalaSqlParser.GT);
                    }
                    break;
                case ImpalaSqlParser.GTE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1818;
                        this.match(ImpalaSqlParser.GTE);
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
    partitionCol() {
        let localContext = new PartitionColContext(this.context, this.state);
        this.enterRule(localContext, 252, ImpalaSqlParser.RULE_partitionCol);
        try {
            this.state = 1829;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.EQ:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1821;
                        this.match(ImpalaSqlParser.EQ);
                    }
                    break;
                case ImpalaSqlParser.NEQ:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1822;
                        this.match(ImpalaSqlParser.NEQ);
                    }
                    break;
                case ImpalaSqlParser.KW_LIKE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1823;
                        this.match(ImpalaSqlParser.KW_LIKE);
                    }
                    break;
                case ImpalaSqlParser.KW_RLIKE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1824;
                        this.match(ImpalaSqlParser.KW_RLIKE);
                    }
                    break;
                case ImpalaSqlParser.KW_REGEXP:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1825;
                        this.match(ImpalaSqlParser.KW_REGEXP);
                    }
                    break;
                case ImpalaSqlParser.KW_BETWEEN:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1826;
                        this.match(ImpalaSqlParser.KW_BETWEEN);
                    }
                    break;
                case ImpalaSqlParser.KW_IN:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1827;
                        this.match(ImpalaSqlParser.KW_IN);
                    }
                    break;
                case ImpalaSqlParser.KW_ARRAY:
                case ImpalaSqlParser.KW_BERNOULLI:
                case ImpalaSqlParser.KW_CASE:
                case ImpalaSqlParser.KW_CAST:
                case ImpalaSqlParser.KW_CURRENT_DATE:
                case ImpalaSqlParser.KW_CURRENT_PATH:
                case ImpalaSqlParser.KW_CURRENT_TIME:
                case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                case ImpalaSqlParser.KW_CURRENT_USER:
                case ImpalaSqlParser.KW_DAY:
                case ImpalaSqlParser.KW_DAYS:
                case ImpalaSqlParser.KW_EXCLUDING:
                case ImpalaSqlParser.KW_EXISTS:
                case ImpalaSqlParser.KW_EXTRACT:
                case ImpalaSqlParser.KW_FALSE:
                case ImpalaSqlParser.KW_GROUPING:
                case ImpalaSqlParser.KW_HOUR:
                case ImpalaSqlParser.KW_INCLUDING:
                case ImpalaSqlParser.KW_INTERVAL:
                case ImpalaSqlParser.KW_KEY:
                case ImpalaSqlParser.KW_LEFT:
                case ImpalaSqlParser.KW_LOCALTIME:
                case ImpalaSqlParser.KW_LOCALTIMESTAMP:
                case ImpalaSqlParser.KW_MINUTE:
                case ImpalaSqlParser.KW_MINUTES:
                case ImpalaSqlParser.KW_MONTH:
                case ImpalaSqlParser.KW_MONTHS:
                case ImpalaSqlParser.KW_NFC:
                case ImpalaSqlParser.KW_NFD:
                case ImpalaSqlParser.KW_NFKC:
                case ImpalaSqlParser.KW_NFKD:
                case ImpalaSqlParser.KW_NORMALIZE:
                case ImpalaSqlParser.KW_NOT:
                case ImpalaSqlParser.KW_NULL:
                case ImpalaSqlParser.KW_OPTION:
                case ImpalaSqlParser.KW_ORDINALITY:
                case ImpalaSqlParser.KW_POSITION:
                case ImpalaSqlParser.KW_PRIVILEGES:
                case ImpalaSqlParser.KW_PROPERTIES:
                case ImpalaSqlParser.KW_REPLACE:
                case ImpalaSqlParser.KW_RIGHT:
                case ImpalaSqlParser.KW_ROW:
                case ImpalaSqlParser.KW_SECOND:
                case ImpalaSqlParser.KW_SECONDS:
                case ImpalaSqlParser.KW_SHUTDOWN:
                case ImpalaSqlParser.KW_SUBSTRING:
                case ImpalaSqlParser.KW_SYSTEM:
                case ImpalaSqlParser.KW_TRUE:
                case ImpalaSqlParser.KW_TRY_CAST:
                case ImpalaSqlParser.KW_TRUNCATE:
                case ImpalaSqlParser.KW_USER:
                case ImpalaSqlParser.KW_VIEWS:
                case ImpalaSqlParser.KW_YEAR:
                case ImpalaSqlParser.KW_ORC:
                case ImpalaSqlParser.KW_DATE:
                case ImpalaSqlParser.LT:
                case ImpalaSqlParser.LTE:
                case ImpalaSqlParser.GT:
                case ImpalaSqlParser.GTE:
                case ImpalaSqlParser.PLUS:
                case ImpalaSqlParser.MINUS:
                case ImpalaSqlParser.LPAREN:
                case ImpalaSqlParser.QUESTION:
                case ImpalaSqlParser.STRING:
                case ImpalaSqlParser.UNICODE_STRING:
                case ImpalaSqlParser.BINARY_LITERAL:
                case ImpalaSqlParser.INTEGER_VALUE:
                case ImpalaSqlParser.DECIMAL_VALUE:
                case ImpalaSqlParser.DOUBLE_VALUE:
                case ImpalaSqlParser.IDENTIFIER:
                case ImpalaSqlParser.DIGIT_IDENTIFIER:
                case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                case ImpalaSqlParser.DOUBLE_PRECISION:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1828;
                        this.rangeOperator();
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
    likeClause() {
        let localContext = new LikeClauseContext(this.context, this.state);
        this.enterRule(localContext, 254, ImpalaSqlParser.RULE_likeClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1831;
                this.match(ImpalaSqlParser.KW_LIKE);
                this.state = 1832;
                this.qualifiedName();
                this.state = 1835;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 65 || _la === 95) {
                    {
                        this.state = 1833;
                        localContext._optionType = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 65 || _la === 95)) {
                            localContext._optionType = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1834;
                        this.match(ImpalaSqlParser.KW_PROPERTIES);
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
    properties() {
        let localContext = new PropertiesContext(this.context, this.state);
        this.enterRule(localContext, 256, ImpalaSqlParser.RULE_properties);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1837;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1838;
                this.property();
                this.state = 1843;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 1839;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1840;
                            this.property();
                        }
                    }
                    this.state = 1845;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1846;
                this.match(ImpalaSqlParser.RPAREN);
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
    partitionedBy() {
        let localContext = new PartitionedByContext(this.context, this.state);
        this.enterRule(localContext, 258, ImpalaSqlParser.RULE_partitionedBy);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1848;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 1849;
                this.columnSpec();
                this.state = 1854;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 220, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                            {
                                this.state = 1850;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 1851;
                                this.columnSpec();
                            }
                        }
                    }
                    this.state = 1856;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 220, this.context);
                }
                this.state = 1857;
                this.match(ImpalaSqlParser.RPAREN);
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
    sortedBy() {
        let localContext = new SortedByContext(this.context, this.state);
        this.enterRule(localContext, 260, ImpalaSqlParser.RULE_sortedBy);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1859;
                this.expression();
                this.state = 1864;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 1860;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 1861;
                            this.expression();
                        }
                    }
                    this.state = 1866;
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
    rowFormat() {
        let localContext = new RowFormatContext(this.context, this.state);
        this.enterRule(localContext, 262, ImpalaSqlParser.RULE_rowFormat);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1867;
                this.match(ImpalaSqlParser.KW_DELIMITED);
                this.state = 1877;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 71) {
                    {
                        this.state = 1868;
                        this.match(ImpalaSqlParser.KW_FIELDS);
                        this.state = 1869;
                        this.match(ImpalaSqlParser.KW_TERMINATED);
                        this.state = 1870;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 1871;
                        this.stringLiteral();
                        this.state = 1875;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 63) {
                            {
                                this.state = 1872;
                                this.match(ImpalaSqlParser.KW_ESCAPED);
                                this.state = 1873;
                                this.match(ImpalaSqlParser.KW_BY);
                                this.state = 1874;
                                this.stringLiteral();
                            }
                        }
                    }
                }
                this.state = 1883;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 117) {
                    {
                        this.state = 1879;
                        this.match(ImpalaSqlParser.KW_LINES);
                        this.state = 1880;
                        this.match(ImpalaSqlParser.KW_TERMINATED);
                        this.state = 1881;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 1882;
                        this.stringLiteral();
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
    property() {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 264, ImpalaSqlParser.RULE_property);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1885;
                this.identifier();
                this.state = 1888;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 249) {
                    {
                        this.state = 1886;
                        this.match(ImpalaSqlParser.EQ);
                        this.state = 1887;
                        this.expression();
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
    queryNoWith() {
        let localContext = new QueryNoWithContext(this.context, this.state);
        this.enterRule(localContext, 266, ImpalaSqlParser.RULE_queryNoWith);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1890;
                this.queryTerm(0);
                this.state = 1901;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                        this.state = 1891;
                        this.match(ImpalaSqlParser.KW_ORDER);
                        this.state = 1892;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 1893;
                        this.sortItem();
                        this.state = 1898;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 1894;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 1895;
                                    this.sortItem();
                                }
                            }
                            this.state = 1900;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 1909;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 116) {
                    {
                        this.state = 1903;
                        this.match(ImpalaSqlParser.KW_LIMIT);
                        this.state = 1904;
                        localContext._rows = this.expression();
                        this.state = 1907;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 135) {
                            {
                                this.state = 1905;
                                this.match(ImpalaSqlParser.KW_OFFSET);
                                this.state = 1906;
                                localContext._offset = this.match(ImpalaSqlParser.INTEGER_VALUE);
                            }
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
    queryTerm(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryTermContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 268;
        this.enterRecursionRule(localContext, 268, ImpalaSqlParser.RULE_queryTerm, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    localContext = new QueryTermDefaultContext(localContext);
                    this.context = localContext;
                    previousContext = localContext;
                    this.state = 1912;
                    this.queryPrimary();
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1928;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1926;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context)) {
                                case 1:
                                    {
                                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                                        this.state = 1914;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 1915;
                                        localContext._operator = this.match(ImpalaSqlParser.KW_INTERSECT);
                                        this.state = 1917;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 2 || _la === 57) {
                                            {
                                                this.state = 1916;
                                                this.setQuantifier();
                                            }
                                        }
                                        this.state = 1919;
                                        localContext._right = this.queryTerm(3);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new SetOperationContext(new QueryTermContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_queryTerm);
                                        this.state = 1920;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 1921;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 64 || _la === 200)) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1923;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 2 || _la === 57) {
                                            {
                                                this.state = 1922;
                                                this.setQuantifier();
                                            }
                                        }
                                        this.state = 1925;
                                        localContext._right = this.queryTerm(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1930;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 233, this.context);
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
    queryPrimary() {
        let localContext = new QueryPrimaryContext(this.context, this.state);
        this.enterRule(localContext, 270, ImpalaSqlParser.RULE_queryPrimary);
        try {
            let alternative;
            this.state = 1947;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_SELECT:
                    localContext = new QueryPrimaryDefaultContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1931;
                        this.querySpecification();
                    }
                    break;
                case ImpalaSqlParser.KW_TABLE:
                    localContext = new TableContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1932;
                        this.match(ImpalaSqlParser.KW_TABLE);
                        this.state = 1933;
                        this.tableNamePath();
                    }
                    break;
                case ImpalaSqlParser.KW_VALUES:
                    localContext = new InlineTableContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1934;
                        this.match(ImpalaSqlParser.KW_VALUES);
                        this.state = 1935;
                        this.expression();
                        this.state = 1940;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 234, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 1936;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 1937;
                                        this.expression();
                                    }
                                }
                            }
                            this.state = 1942;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 234, this.context);
                        }
                    }
                    break;
                case ImpalaSqlParser.LPAREN:
                    localContext = new SubqueryContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1943;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 1944;
                        this.queryNoWith();
                        this.state = 1945;
                        this.match(ImpalaSqlParser.RPAREN);
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
    sortItem() {
        let localContext = new SortItemContext(this.context, this.state);
        this.enterRule(localContext, 272, ImpalaSqlParser.RULE_sortItem);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1949;
                this.columnItem();
                this.state = 1951;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 10 || _la === 55) {
                    {
                        this.state = 1950;
                        localContext._ordering = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 10 || _la === 55)) {
                            localContext._ordering = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 1955;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 134) {
                    {
                        this.state = 1953;
                        this.match(ImpalaSqlParser.KW_NULLS);
                        this.state = 1954;
                        localContext._nullOrdering = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 75 || _la === 112)) {
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
    querySpecification() {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 274, ImpalaSqlParser.RULE_querySpecification);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1957;
                this.match(ImpalaSqlParser.KW_SELECT);
                this.state = 1959;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context)) {
                    case 1:
                        {
                            this.state = 1958;
                            this.setQuantifier();
                        }
                        break;
                }
                this.state = 1962;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context)) {
                    case 1:
                        {
                            this.state = 1961;
                            this.match(ImpalaSqlParser.KW_STRAIGHT_JOIN);
                        }
                        break;
                }
                this.state = 1964;
                this.selectList();
                this.state = 1974;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context)) {
                    case 1:
                        {
                            this.state = 1965;
                            this.match(ImpalaSqlParser.KW_FROM);
                            this.state = 1966;
                            this.relation(0);
                            this.state = 1971;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 1967;
                                            this.match(ImpalaSqlParser.COMMA);
                                            this.state = 1968;
                                            this.relation(0);
                                        }
                                    }
                                }
                                this.state = 1973;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 240, this.context);
                            }
                        }
                        break;
                }
                this.state = 1977;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context)) {
                    case 1:
                        {
                            this.state = 1976;
                            this.whereClause();
                        }
                        break;
                }
                this.state = 1982;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 243, this.context)) {
                    case 1:
                        {
                            this.state = 1979;
                            this.match(ImpalaSqlParser.KW_GROUP);
                            this.state = 1980;
                            this.match(ImpalaSqlParser.KW_BY);
                            this.state = 1981;
                            this.groupBy();
                        }
                        break;
                }
                this.state = 1985;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context)) {
                    case 1:
                        {
                            this.state = 1984;
                            this.havingClause();
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
    selectList() {
        let localContext = new SelectListContext(this.context, this.state);
        this.enterRule(localContext, 276, ImpalaSqlParser.RULE_selectList);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1987;
                this.selectItem();
                this.state = 1992;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 245, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1988;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 1989;
                                this.selectItem();
                            }
                        }
                    }
                    this.state = 1994;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 245, this.context);
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
    whereClause() {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 278, ImpalaSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1995;
                this.match(ImpalaSqlParser.KW_WHERE);
                this.state = 1998;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 246, this.context)) {
                    case 1:
                        {
                            this.state = 1996;
                            localContext._where = this.booleanExpression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1997;
                            this.columnNameAllowEmpty();
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
    havingClause() {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 280, ImpalaSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2000;
                this.match(ImpalaSqlParser.KW_HAVING);
                this.state = 2003;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 247, this.context)) {
                    case 1:
                        {
                            this.state = 2001;
                            localContext._having = this.booleanExpression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 2002;
                            this.columnNameAllowEmpty();
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
    groupBy() {
        let localContext = new GroupByContext(this.context, this.state);
        this.enterRule(localContext, 282, ImpalaSqlParser.RULE_groupBy);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2006;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context)) {
                    case 1:
                        {
                            this.state = 2005;
                            this.setQuantifier();
                        }
                        break;
                }
                this.state = 2008;
                this.groupingElement();
                this.state = 2013;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 249, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 2009;
                                this.match(ImpalaSqlParser.COMMA);
                                this.state = 2010;
                                this.groupingElement();
                            }
                        }
                    }
                    this.state = 2015;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 249, this.context);
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
    groupingElement() {
        let localContext = new GroupingElementContext(this.context, this.state);
        this.enterRule(localContext, 284, ImpalaSqlParser.RULE_groupingElement);
        try {
            localContext = new SingleGroupingSetContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2016;
                this.groupingSet();
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
    groupingSet() {
        let localContext = new GroupingSetContext(this.context, this.state);
        this.enterRule(localContext, 286, ImpalaSqlParser.RULE_groupingSet);
        let _la;
        try {
            this.state = 2031;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2018;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 2027;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context)) {
                            case 1:
                                {
                                    this.state = 2019;
                                    this.columnItem();
                                    this.state = 2024;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 263) {
                                        {
                                            {
                                                this.state = 2020;
                                                this.match(ImpalaSqlParser.COMMA);
                                                this.state = 2021;
                                                this.columnItem();
                                            }
                                        }
                                        this.state = 2026;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                                break;
                        }
                        this.state = 2029;
                        this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2030;
                        this.columnItem();
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
    namedQuery() {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 288, ImpalaSqlParser.RULE_namedQuery);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2033;
                localContext._name = this.identifier();
                this.state = 2035;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 265) {
                    {
                        this.state = 2034;
                        this.columnAliases();
                    }
                }
                this.state = 2037;
                this.match(ImpalaSqlParser.KW_AS);
                this.state = 2038;
                this.subQueryRelation();
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
        this.enterRule(localContext, 290, ImpalaSqlParser.RULE_setQuantifier);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2040;
                _la = this.tokenStream.LA(1);
                if (!(_la === 2 || _la === 57)) {
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
        this.enterRule(localContext, 292, ImpalaSqlParser.RULE_selectItem);
        try {
            this.state = 2053;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 256, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2042;
                        this.selectLiteralColumnName();
                        this.state = 2044;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context)) {
                            case 1:
                                {
                                    this.state = 2043;
                                    this.columnAlias();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2046;
                        this.selectExpressionColumnName();
                        this.state = 2048;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context)) {
                            case 1:
                                {
                                    this.state = 2047;
                                    this.columnAlias();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2050;
                        this.tableAllColumns();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2051;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 2052;
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
    columnAlias() {
        let localContext = new ColumnAliasContext(this.context, this.state);
        this.enterRule(localContext, 294, ImpalaSqlParser.RULE_columnAlias);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2056;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 2055;
                        this.match(ImpalaSqlParser.KW_AS);
                    }
                }
                this.state = 2058;
                localContext._alias = this.identifier();
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
    selectLiteralColumnName() {
        let localContext = new SelectLiteralColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 296, ImpalaSqlParser.RULE_selectLiteralColumnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2060;
                this.columnNamePath();
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
    selectExpressionColumnName() {
        let localContext = new SelectExpressionColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 298, ImpalaSqlParser.RULE_selectExpressionColumnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2062;
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
    tableAllColumns() {
        let localContext = new TableAllColumnsContext(this.context, this.state);
        this.enterRule(localContext, 300, ImpalaSqlParser.RULE_tableAllColumns);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2067;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                    {
                        this.state = 2064;
                        this.qualifiedName();
                        this.state = 2065;
                        this.match(ImpalaSqlParser.DOT);
                    }
                }
                this.state = 2069;
                this.match(ImpalaSqlParser.ASTERISK);
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
        let _startState = 302;
        this.enterRecursionRule(localContext, 302, ImpalaSqlParser.RULE_relation, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    localContext = new RelationDefaultContext(localContext);
                    this.context = localContext;
                    previousContext = localContext;
                    this.state = 2072;
                    this.sampledRelation();
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2087;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 260, this.context);
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
                                this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_relation);
                                this.state = 2074;
                                if (!(this.precpred(this.context, 2))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                }
                                this.state = 2083;
                                this.errorHandler.sync(this);
                                switch (this.tokenStream.LA(1)) {
                                    case ImpalaSqlParser.KW_CROSS:
                                        {
                                            this.state = 2075;
                                            this.match(ImpalaSqlParser.KW_CROSS);
                                            this.state = 2076;
                                            this.match(ImpalaSqlParser.KW_JOIN);
                                            this.state = 2077;
                                            localContext._right = this.sampledRelation();
                                        }
                                        break;
                                    case ImpalaSqlParser.KW_FULL:
                                    case ImpalaSqlParser.KW_INNER:
                                    case ImpalaSqlParser.KW_JOIN:
                                    case ImpalaSqlParser.KW_LEFT:
                                    case ImpalaSqlParser.KW_RIGHT:
                                        {
                                            this.state = 2078;
                                            this.joinType();
                                            this.state = 2079;
                                            this.match(ImpalaSqlParser.KW_JOIN);
                                            this.state = 2080;
                                            localContext._rightRelation = this.relation(0);
                                            this.state = 2081;
                                            this.joinCriteria();
                                        }
                                        break;
                                    default:
                                        throw new antlr.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    this.state = 2089;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 260, this.context);
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
        this.enterRule(localContext, 304, ImpalaSqlParser.RULE_joinType);
        let _la;
        try {
            this.state = 2121;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 267, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2091;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 97) {
                            {
                                this.state = 2090;
                                this.match(ImpalaSqlParser.KW_INNER);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2093;
                        this.match(ImpalaSqlParser.KW_LEFT);
                        this.state = 2095;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 97) {
                            {
                                this.state = 2094;
                                this.match(ImpalaSqlParser.KW_INNER);
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2097;
                        this.match(ImpalaSqlParser.KW_RIGHT);
                        this.state = 2099;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 97) {
                            {
                                this.state = 2098;
                                this.match(ImpalaSqlParser.KW_INNER);
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2101;
                        this.match(ImpalaSqlParser.KW_LEFT);
                        this.state = 2103;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 141) {
                            {
                                this.state = 2102;
                                this.match(ImpalaSqlParser.KW_OUTER);
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2105;
                        this.match(ImpalaSqlParser.KW_RIGHT);
                        this.state = 2107;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 141) {
                            {
                                this.state = 2106;
                                this.match(ImpalaSqlParser.KW_OUTER);
                            }
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2109;
                        this.match(ImpalaSqlParser.KW_FULL);
                        this.state = 2111;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 141) {
                            {
                                this.state = 2110;
                                this.match(ImpalaSqlParser.KW_OUTER);
                            }
                        }
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2113;
                        this.match(ImpalaSqlParser.KW_LEFT);
                        this.state = 2114;
                        this.match(ImpalaSqlParser.KW_SEMI);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 2115;
                        this.match(ImpalaSqlParser.KW_RIGHT);
                        this.state = 2116;
                        this.match(ImpalaSqlParser.KW_SEMI);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 2117;
                        this.match(ImpalaSqlParser.KW_LEFT);
                        this.state = 2118;
                        this.match(ImpalaSqlParser.KW_ANTI);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 2119;
                        this.match(ImpalaSqlParser.KW_RIGHT);
                        this.state = 2120;
                        this.match(ImpalaSqlParser.KW_ANTI);
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
    joinCriteria() {
        let localContext = new JoinCriteriaContext(this.context, this.state);
        this.enterRule(localContext, 306, ImpalaSqlParser.RULE_joinCriteria);
        let _la;
        try {
            this.state = 2140;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_ON:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2123;
                        this.match(ImpalaSqlParser.KW_ON);
                        this.state = 2126;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context)) {
                            case 1:
                                {
                                    this.state = 2124;
                                    this.booleanExpression(0);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 2125;
                                    this.columnNameAllowEmpty();
                                }
                                break;
                        }
                    }
                    break;
                case ImpalaSqlParser.KW_USING:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2128;
                        this.match(ImpalaSqlParser.KW_USING);
                        this.state = 2129;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 2130;
                        this.identifier();
                        this.state = 2135;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 2131;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 2132;
                                    this.identifier();
                                }
                            }
                            this.state = 2137;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2138;
                        this.match(ImpalaSqlParser.RPAREN);
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
    sampledRelation() {
        let localContext = new SampledRelationContext(this.context, this.state);
        this.enterRule(localContext, 308, ImpalaSqlParser.RULE_sampledRelation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2142;
                this.aliasedRelation();
                this.state = 2155;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context)) {
                    case 1:
                        {
                            this.state = 2143;
                            this.match(ImpalaSqlParser.KW_TABLESAMPLE);
                            this.state = 2144;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 14 || _la === 185)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2145;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2146;
                            localContext._percentage = this.expression();
                            this.state = 2147;
                            this.match(ImpalaSqlParser.RPAREN);
                            this.state = 2153;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 271, this.context)) {
                                case 1:
                                    {
                                        this.state = 2148;
                                        this.match(ImpalaSqlParser.KW_REPEATABLE);
                                        this.state = 2149;
                                        this.match(ImpalaSqlParser.LPAREN);
                                        this.state = 2150;
                                        localContext._seed = this.expression();
                                        this.state = 2151;
                                        this.match(ImpalaSqlParser.RPAREN);
                                    }
                                    break;
                            }
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
    aliasedRelation() {
        let localContext = new AliasedRelationContext(this.context, this.state);
        this.enterRule(localContext, 310, ImpalaSqlParser.RULE_aliasedRelation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2157;
                this.relationPrimary();
                this.state = 2165;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 275, this.context)) {
                    case 1:
                        {
                            this.state = 2159;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 9) {
                                {
                                    this.state = 2158;
                                    this.match(ImpalaSqlParser.KW_AS);
                                }
                            }
                            this.state = 2161;
                            localContext._alias = this.identifier();
                            this.state = 2163;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context)) {
                                case 1:
                                    {
                                        this.state = 2162;
                                        this.columnAliases();
                                    }
                                    break;
                            }
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
    columnAliases() {
        let localContext = new ColumnAliasesContext(this.context, this.state);
        this.enterRule(localContext, 312, ImpalaSqlParser.RULE_columnAliases);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2167;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2168;
                this.columnNamePath();
                this.state = 2173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 2169;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 2170;
                            this.columnNamePath();
                        }
                    }
                    this.state = 2175;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2176;
                this.match(ImpalaSqlParser.RPAREN);
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
        this.enterRule(localContext, 314, ImpalaSqlParser.RULE_relationPrimary);
        try {
            this.state = 2182;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 277, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2178;
                        this.tableOrViewPath();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2179;
                        this.atomSubQueryTableSource();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2180;
                        this.unnest();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2181;
                        this.parenthesizedRelation();
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
    atomSubQueryTableSource() {
        let localContext = new AtomSubQueryTableSourceContext(this.context, this.state);
        this.enterRule(localContext, 316, ImpalaSqlParser.RULE_atomSubQueryTableSource);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                        this.state = 2184;
                        this.match(ImpalaSqlParser.KW_LATERAL);
                    }
                }
                this.state = 2187;
                this.subQueryRelation();
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
    subQueryRelation() {
        let localContext = new SubQueryRelationContext(this.context, this.state);
        this.enterRule(localContext, 318, ImpalaSqlParser.RULE_subQueryRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2189;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2190;
                this.queryStatement();
                this.state = 2191;
                this.match(ImpalaSqlParser.RPAREN);
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
    unnest() {
        let localContext = new UnnestContext(this.context, this.state);
        this.enterRule(localContext, 320, ImpalaSqlParser.RULE_unnest);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2193;
                this.match(ImpalaSqlParser.KW_UNNEST);
                this.state = 2194;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2195;
                this.expression();
                this.state = 2200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 2196;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 2197;
                            this.expression();
                        }
                    }
                    this.state = 2202;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2203;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2206;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 280, this.context)) {
                    case 1:
                        {
                            this.state = 2204;
                            this.match(ImpalaSqlParser.KW_WITH);
                            this.state = 2205;
                            this.match(ImpalaSqlParser.KW_ORDINALITY);
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
    parenthesizedRelation() {
        let localContext = new ParenthesizedRelationContext(this.context, this.state);
        this.enterRule(localContext, 322, ImpalaSqlParser.RULE_parenthesizedRelation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2208;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2209;
                this.relation(0);
                this.state = 2210;
                this.match(ImpalaSqlParser.RPAREN);
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
    columnItem() {
        let localContext = new ColumnItemContext(this.context, this.state);
        this.enterRule(localContext, 324, ImpalaSqlParser.RULE_columnItem);
        try {
            this.state = 2214;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 281, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2212;
                        this.columnNamePath();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2213;
                        this.expression();
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
    expression() {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 326, ImpalaSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2216;
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
        let _startState = 328;
        this.enterRecursionRule(localContext, 328, ImpalaSqlParser.RULE_booleanExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2225;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ImpalaSqlParser.KW_ARRAY:
                    case ImpalaSqlParser.KW_BERNOULLI:
                    case ImpalaSqlParser.KW_CASE:
                    case ImpalaSqlParser.KW_CAST:
                    case ImpalaSqlParser.KW_CURRENT_DATE:
                    case ImpalaSqlParser.KW_CURRENT_PATH:
                    case ImpalaSqlParser.KW_CURRENT_TIME:
                    case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                    case ImpalaSqlParser.KW_CURRENT_USER:
                    case ImpalaSqlParser.KW_DAY:
                    case ImpalaSqlParser.KW_DAYS:
                    case ImpalaSqlParser.KW_EXCLUDING:
                    case ImpalaSqlParser.KW_EXISTS:
                    case ImpalaSqlParser.KW_EXTRACT:
                    case ImpalaSqlParser.KW_FALSE:
                    case ImpalaSqlParser.KW_GROUPING:
                    case ImpalaSqlParser.KW_HOUR:
                    case ImpalaSqlParser.KW_INCLUDING:
                    case ImpalaSqlParser.KW_INTERVAL:
                    case ImpalaSqlParser.KW_KEY:
                    case ImpalaSqlParser.KW_LEFT:
                    case ImpalaSqlParser.KW_LOCALTIME:
                    case ImpalaSqlParser.KW_LOCALTIMESTAMP:
                    case ImpalaSqlParser.KW_MINUTE:
                    case ImpalaSqlParser.KW_MINUTES:
                    case ImpalaSqlParser.KW_MONTH:
                    case ImpalaSqlParser.KW_MONTHS:
                    case ImpalaSqlParser.KW_NFC:
                    case ImpalaSqlParser.KW_NFD:
                    case ImpalaSqlParser.KW_NFKC:
                    case ImpalaSqlParser.KW_NFKD:
                    case ImpalaSqlParser.KW_NORMALIZE:
                    case ImpalaSqlParser.KW_NULL:
                    case ImpalaSqlParser.KW_OPTION:
                    case ImpalaSqlParser.KW_ORDINALITY:
                    case ImpalaSqlParser.KW_POSITION:
                    case ImpalaSqlParser.KW_PRIVILEGES:
                    case ImpalaSqlParser.KW_PROPERTIES:
                    case ImpalaSqlParser.KW_REPLACE:
                    case ImpalaSqlParser.KW_RIGHT:
                    case ImpalaSqlParser.KW_ROW:
                    case ImpalaSqlParser.KW_SECOND:
                    case ImpalaSqlParser.KW_SECONDS:
                    case ImpalaSqlParser.KW_SHUTDOWN:
                    case ImpalaSqlParser.KW_SUBSTRING:
                    case ImpalaSqlParser.KW_SYSTEM:
                    case ImpalaSqlParser.KW_TRUE:
                    case ImpalaSqlParser.KW_TRY_CAST:
                    case ImpalaSqlParser.KW_TRUNCATE:
                    case ImpalaSqlParser.KW_USER:
                    case ImpalaSqlParser.KW_VIEWS:
                    case ImpalaSqlParser.KW_YEAR:
                    case ImpalaSqlParser.KW_ORC:
                    case ImpalaSqlParser.KW_DATE:
                    case ImpalaSqlParser.PLUS:
                    case ImpalaSqlParser.MINUS:
                    case ImpalaSqlParser.LPAREN:
                    case ImpalaSqlParser.QUESTION:
                    case ImpalaSqlParser.STRING:
                    case ImpalaSqlParser.UNICODE_STRING:
                    case ImpalaSqlParser.BINARY_LITERAL:
                    case ImpalaSqlParser.INTEGER_VALUE:
                    case ImpalaSqlParser.DECIMAL_VALUE:
                    case ImpalaSqlParser.DOUBLE_VALUE:
                    case ImpalaSqlParser.IDENTIFIER:
                    case ImpalaSqlParser.DIGIT_IDENTIFIER:
                    case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                    case ImpalaSqlParser.DOUBLE_PRECISION:
                        {
                            localContext = new PredicatedContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2219;
                            localContext._valueExpression = this.valueExpression(0);
                            this.state = 2221;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 282, this.context)) {
                                case 1:
                                    {
                                        this.state = 2220;
                                        this.predicate(localContext._valueExpression);
                                    }
                                    break;
                            }
                        }
                        break;
                    case ImpalaSqlParser.KW_NOT:
                        {
                            localContext = new LogicalNotContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2223;
                            this.match(ImpalaSqlParser.KW_NOT);
                            this.state = 2224;
                            this.booleanExpression(3);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2235;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 285, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2233;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 284, this.context)) {
                                case 1:
                                    {
                                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                                        this.state = 2227;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2228;
                                        localContext._operator = this.match(ImpalaSqlParser.KW_AND);
                                        this.state = 2229;
                                        localContext._right = this.booleanExpression(3);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_booleanExpression);
                                        this.state = 2230;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2231;
                                        localContext._operator = this.match(ImpalaSqlParser.KW_OR);
                                        this.state = 2232;
                                        localContext._right = this.booleanExpression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2237;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 285, this.context);
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
    predicate(value) {
        let localContext = new PredicateContext(this.context, this.state, value);
        this.enterRule(localContext, 330, ImpalaSqlParser.RULE_predicate);
        let _la;
        try {
            this.state = 2296;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 294, this.context)) {
                case 1:
                    localContext = new ComparisonContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2238;
                        this.comparisonOperator();
                        this.state = 2239;
                        localContext._right = this.valueExpression(0);
                    }
                    break;
                case 2:
                    localContext = new QuantifiedComparisonContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2241;
                        this.comparisonOperator();
                        this.state = 2242;
                        this.comparisonQuantifier();
                        this.state = 2243;
                        this.subQueryRelation();
                    }
                    break;
                case 3:
                    localContext = new BetweenContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2246;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2245;
                                this.match(ImpalaSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2248;
                        this.match(ImpalaSqlParser.KW_BETWEEN);
                        this.state = 2249;
                        localContext._lower = this.valueExpression(0);
                        this.state = 2250;
                        this.match(ImpalaSqlParser.KW_AND);
                        this.state = 2251;
                        localContext._upper = this.valueExpression(0);
                    }
                    break;
                case 4:
                    localContext = new InListContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2254;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2253;
                                this.match(ImpalaSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2256;
                        this.match(ImpalaSqlParser.KW_IN);
                        this.state = 2257;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 2258;
                        this.expression();
                        this.state = 2263;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 2259;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 2260;
                                    this.expression();
                                }
                            }
                            this.state = 2265;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2266;
                        this.match(ImpalaSqlParser.RPAREN);
                    }
                    break;
                case 5:
                    localContext = new InSubqueryContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2269;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2268;
                                this.match(ImpalaSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2271;
                        this.match(ImpalaSqlParser.KW_IN);
                        this.state = 2272;
                        this.subQueryRelation();
                    }
                    break;
                case 6:
                    localContext = new LikeContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2274;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2273;
                                this.match(ImpalaSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2276;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 106 || _la === 115 || _la === 164)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2277;
                        localContext._pattern = this.valueExpression(0);
                        this.state = 2280;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 291, this.context)) {
                            case 1:
                                {
                                    this.state = 2278;
                                    this.match(ImpalaSqlParser.KW_ESCAPE);
                                    this.state = 2279;
                                    localContext._escape = this.valueExpression(0);
                                }
                                break;
                        }
                    }
                    break;
                case 7:
                    localContext = new REGEXPContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2282;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 105 || _la === 163)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2283;
                        localContext._pattern = this.valueExpression(0);
                    }
                    break;
                case 8:
                    localContext = new NullOrUnKnownOrBooleanPredicateContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 2284;
                        this.match(ImpalaSqlParser.KW_IS);
                        this.state = 2286;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2285;
                                this.match(ImpalaSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2288;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 70 || _la === 133 || _la === 194 || _la === 208)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 9:
                    localContext = new DistinctFromContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 2289;
                        this.match(ImpalaSqlParser.KW_IS);
                        this.state = 2291;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 132) {
                            {
                                this.state = 2290;
                                this.match(ImpalaSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2293;
                        this.match(ImpalaSqlParser.KW_DISTINCT);
                        this.state = 2294;
                        this.match(ImpalaSqlParser.KW_FROM);
                        this.state = 2295;
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
    valueExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 332;
        this.enterRecursionRule(localContext, 332, ImpalaSqlParser.RULE_valueExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2302;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 295, this.context)) {
                    case 1:
                        {
                            localContext = new ValueExpressionDefaultContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2299;
                            this.primaryExpression(0);
                        }
                        break;
                    case 2:
                        {
                            localContext = new ArithmeticUnaryContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2300;
                            localContext._operator = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 255 || _la === 256)) {
                                localContext._operator = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2301;
                            this.valueExpression(4);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2315;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 297, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2313;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 296, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                                        this.state = 2304;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 2305;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(((((_la - 257)) & ~0x1F) === 0 && ((1 << (_la - 257)) & 7) !== 0))) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2306;
                                        localContext._right = this.valueExpression(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                                        this.state = 2307;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2308;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 255 || _la === 256)) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 2309;
                                        localContext._right = this.valueExpression(3);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ConcatenationContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_valueExpression);
                                        this.state = 2310;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2311;
                                        this.match(ImpalaSqlParser.CONCAT);
                                        this.state = 2312;
                                        localContext._right = this.valueExpression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2317;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 297, this.context);
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
    functionCallExpression() {
        let localContext = new FunctionCallExpressionContext(this.context, this.state);
        this.enterRule(localContext, 334, ImpalaSqlParser.RULE_functionCallExpression);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2318;
                this.functionNamePath();
                this.state = 2319;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2331;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323012) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442972447) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                    {
                        this.state = 2321;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2 || _la === 57) {
                            {
                                this.state = 2320;
                                this.setQuantifier();
                            }
                        }
                        this.state = 2323;
                        this.expression();
                        this.state = 2328;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 2324;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 2325;
                                    this.expression();
                                }
                            }
                            this.state = 2330;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 2343;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                        this.state = 2333;
                        this.match(ImpalaSqlParser.KW_ORDER);
                        this.state = 2334;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 2335;
                        this.sortItem();
                        this.state = 2340;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 2336;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 2337;
                                    this.sortItem();
                                }
                            }
                            this.state = 2342;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 2345;
                this.match(ImpalaSqlParser.RPAREN);
                this.state = 2347;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 303, this.context)) {
                    case 1:
                        {
                            this.state = 2346;
                            this.filter();
                        }
                        break;
                }
                this.state = 2350;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 304, this.context)) {
                    case 1:
                        {
                            this.state = 2349;
                            this.over();
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
    primaryExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PrimaryExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 336;
        this.enterRecursionRule(localContext, 336, ImpalaSqlParser.RULE_primaryExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2565;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 327, this.context)) {
                    case 1:
                        {
                            localContext = new NullLiteralContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2353;
                            this.match(ImpalaSqlParser.KW_NULL);
                        }
                        break;
                    case 2:
                        {
                            localContext = new IntervalLiteralContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2354;
                            this.interval();
                        }
                        break;
                    case 3:
                        {
                            localContext = new TypeConstructorContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2355;
                            this.identifier();
                            this.state = 2356;
                            this.stringLiteral();
                        }
                        break;
                    case 4:
                        {
                            localContext = new TypeConstructorContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2358;
                            this.match(ImpalaSqlParser.DOUBLE_PRECISION);
                            this.state = 2359;
                            this.stringLiteral();
                        }
                        break;
                    case 5:
                        {
                            localContext = new NumericLiteralContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2360;
                            this.number_();
                        }
                        break;
                    case 6:
                        {
                            localContext = new BooleanLiteralContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2361;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 70 || _la === 194)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                    case 7:
                        {
                            localContext = new StringLiteralValuesContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2362;
                            this.stringLiteral();
                        }
                        break;
                    case 8:
                        {
                            localContext = new BinaryLiteralContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2363;
                            this.match(ImpalaSqlParser.BINARY_LITERAL);
                        }
                        break;
                    case 9:
                        {
                            localContext = new ParameterContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2364;
                            this.match(ImpalaSqlParser.QUESTION);
                        }
                        break;
                    case 10:
                        {
                            localContext = new PositionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2365;
                            this.match(ImpalaSqlParser.KW_POSITION);
                            this.state = 2366;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2367;
                            this.valueExpression(0);
                            this.state = 2368;
                            this.match(ImpalaSqlParser.KW_IN);
                            this.state = 2369;
                            this.valueExpression(0);
                            this.state = 2370;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 11:
                        {
                            localContext = new RowConstructorContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2372;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2373;
                            this.expression();
                            this.state = 2376;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 9) {
                                {
                                    this.state = 2374;
                                    this.match(ImpalaSqlParser.KW_AS);
                                    this.state = 2375;
                                    this.type_(0);
                                }
                            }
                            this.state = 2386;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 307, this.context);
                            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1 + 1) {
                                    {
                                        {
                                            this.state = 2378;
                                            this.match(ImpalaSqlParser.COMMA);
                                            this.state = 2379;
                                            this.expression();
                                            this.state = 2382;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            if (_la === 9) {
                                                {
                                                    this.state = 2380;
                                                    this.match(ImpalaSqlParser.KW_AS);
                                                    this.state = 2381;
                                                    this.type_(0);
                                                }
                                            }
                                        }
                                    }
                                }
                                this.state = 2388;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 307, this.context);
                            }
                            this.state = 2389;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 12:
                        {
                            localContext = new RowConstructorContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2391;
                            this.match(ImpalaSqlParser.KW_ROW);
                            this.state = 2392;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2393;
                            this.expression();
                            this.state = 2398;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 263) {
                                {
                                    {
                                        this.state = 2394;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 2395;
                                        this.expression();
                                    }
                                }
                                this.state = 2400;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 2401;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 13:
                        {
                            localContext = new FunctionCallContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2403;
                            this.functionNamePath();
                            this.state = 2404;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2405;
                            this.match(ImpalaSqlParser.ASTERISK);
                            this.state = 2406;
                            this.match(ImpalaSqlParser.RPAREN);
                            this.state = 2408;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 309, this.context)) {
                                case 1:
                                    {
                                        this.state = 2407;
                                        this.filter();
                                    }
                                    break;
                            }
                            this.state = 2411;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 310, this.context)) {
                                case 1:
                                    {
                                        this.state = 2410;
                                        this.over();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 14:
                        {
                            localContext = new FunctionCallContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2413;
                            this.functionCallExpression();
                        }
                        break;
                    case 15:
                        {
                            localContext = new LambdaContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2414;
                            this.identifier();
                            this.state = 2415;
                            this.match(ImpalaSqlParser.RIGHT_ARROW);
                            this.state = 2416;
                            this.expression();
                        }
                        break;
                    case 16:
                        {
                            localContext = new LambdaContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2418;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2427;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                                {
                                    this.state = 2419;
                                    this.identifier();
                                    this.state = 2424;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 263) {
                                        {
                                            {
                                                this.state = 2420;
                                                this.match(ImpalaSqlParser.COMMA);
                                                this.state = 2421;
                                                this.identifier();
                                            }
                                        }
                                        this.state = 2426;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 2429;
                            this.match(ImpalaSqlParser.RPAREN);
                            this.state = 2430;
                            this.match(ImpalaSqlParser.RIGHT_ARROW);
                            this.state = 2431;
                            this.expression();
                        }
                        break;
                    case 17:
                        {
                            localContext = new SubqueryExpressionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2432;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2433;
                            this.queryStatement();
                            this.state = 2434;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 18:
                        {
                            localContext = new ExistsContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2436;
                            this.match(ImpalaSqlParser.KW_EXISTS);
                            this.state = 2437;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2438;
                            this.queryStatement();
                            this.state = 2439;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 19:
                        {
                            localContext = new SimpleCaseContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2441;
                            this.match(ImpalaSqlParser.KW_CASE);
                            this.state = 2442;
                            this.valueExpression(0);
                            this.state = 2444;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 2443;
                                        this.whenClause();
                                    }
                                }
                                this.state = 2446;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 214);
                            this.state = 2450;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 59) {
                                {
                                    this.state = 2448;
                                    this.match(ImpalaSqlParser.KW_ELSE);
                                    this.state = 2449;
                                    localContext._elseExpression = this.expression();
                                }
                            }
                            this.state = 2452;
                            this.match(ImpalaSqlParser.KW_END);
                        }
                        break;
                    case 20:
                        {
                            localContext = new SearchedCaseContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2454;
                            this.match(ImpalaSqlParser.KW_CASE);
                            this.state = 2456;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 2455;
                                        this.whenClause();
                                    }
                                }
                                this.state = 2458;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 214);
                            this.state = 2462;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 59) {
                                {
                                    this.state = 2460;
                                    this.match(ImpalaSqlParser.KW_ELSE);
                                    this.state = 2461;
                                    localContext._elseExpression = this.expression();
                                }
                            }
                            this.state = 2464;
                            this.match(ImpalaSqlParser.KW_END);
                        }
                        break;
                    case 21:
                        {
                            localContext = new CastContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2466;
                            this.match(ImpalaSqlParser.KW_CAST);
                            this.state = 2467;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2468;
                            this.expression();
                            this.state = 2469;
                            this.match(ImpalaSqlParser.KW_AS);
                            this.state = 2470;
                            this.type_(0);
                            this.state = 2471;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 22:
                        {
                            localContext = new CastContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2473;
                            this.match(ImpalaSqlParser.KW_TRY_CAST);
                            this.state = 2474;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2475;
                            this.expression();
                            this.state = 2476;
                            this.match(ImpalaSqlParser.KW_AS);
                            this.state = 2477;
                            this.type_(0);
                            this.state = 2478;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 23:
                        {
                            localContext = new ArrayConstructorContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2480;
                            this.match(ImpalaSqlParser.KW_ARRAY);
                            this.state = 2481;
                            this.match(ImpalaSqlParser.LSQUARE);
                            this.state = 2490;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 805323008) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1442841375) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 2218795145) !== 0) || ((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & 269631421) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 271654979) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & 537926659) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 16393) !== 0) || ((((_la - 255)) & ~0x1F) === 0 && ((1 << (_la - 255)) & 2549744643) !== 0)) {
                                {
                                    this.state = 2482;
                                    this.expression();
                                    this.state = 2487;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 263) {
                                        {
                                            {
                                                this.state = 2483;
                                                this.match(ImpalaSqlParser.COMMA);
                                                this.state = 2484;
                                                this.expression();
                                            }
                                        }
                                        this.state = 2489;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 2492;
                            this.match(ImpalaSqlParser.RSQUARE);
                        }
                        break;
                    case 24:
                        {
                            localContext = new ColumnReferenceContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2493;
                            this.columnName();
                        }
                        break;
                    case 25:
                        {
                            localContext = new SpecialDateTimeFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2494;
                            localContext._name = this.match(ImpalaSqlParser.KW_CURRENT_DATE);
                        }
                        break;
                    case 26:
                        {
                            localContext = new SpecialDateTimeFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2495;
                            localContext._name = this.match(ImpalaSqlParser.KW_CURRENT_TIME);
                            this.state = 2499;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 319, this.context)) {
                                case 1:
                                    {
                                        this.state = 2496;
                                        this.match(ImpalaSqlParser.LPAREN);
                                        this.state = 2497;
                                        localContext._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                                        this.state = 2498;
                                        this.match(ImpalaSqlParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 27:
                        {
                            localContext = new SpecialDateTimeFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2501;
                            localContext._name = this.match(ImpalaSqlParser.KW_CURRENT_TIMESTAMP);
                            this.state = 2505;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 320, this.context)) {
                                case 1:
                                    {
                                        this.state = 2502;
                                        this.match(ImpalaSqlParser.LPAREN);
                                        this.state = 2503;
                                        localContext._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                                        this.state = 2504;
                                        this.match(ImpalaSqlParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 28:
                        {
                            localContext = new SpecialDateTimeFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2507;
                            localContext._name = this.match(ImpalaSqlParser.KW_LOCALTIME);
                            this.state = 2511;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 321, this.context)) {
                                case 1:
                                    {
                                        this.state = 2508;
                                        this.match(ImpalaSqlParser.LPAREN);
                                        this.state = 2509;
                                        localContext._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                                        this.state = 2510;
                                        this.match(ImpalaSqlParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 29:
                        {
                            localContext = new SpecialDateTimeFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2513;
                            localContext._name = this.match(ImpalaSqlParser.KW_LOCALTIMESTAMP);
                            this.state = 2517;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 322, this.context)) {
                                case 1:
                                    {
                                        this.state = 2514;
                                        this.match(ImpalaSqlParser.LPAREN);
                                        this.state = 2515;
                                        localContext._precision = this.match(ImpalaSqlParser.INTEGER_VALUE);
                                        this.state = 2516;
                                        this.match(ImpalaSqlParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 30:
                        {
                            localContext = new CurrentUserContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2519;
                            localContext._name = this.match(ImpalaSqlParser.KW_CURRENT_USER);
                        }
                        break;
                    case 31:
                        {
                            localContext = new CurrentPathContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2520;
                            localContext._name = this.match(ImpalaSqlParser.KW_CURRENT_PATH);
                        }
                        break;
                    case 32:
                        {
                            localContext = new SubstringContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2521;
                            this.match(ImpalaSqlParser.KW_SUBSTRING);
                            this.state = 2522;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2523;
                            this.valueExpression(0);
                            this.state = 2524;
                            this.match(ImpalaSqlParser.KW_FROM);
                            this.state = 2525;
                            this.valueExpression(0);
                            this.state = 2528;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 78) {
                                {
                                    this.state = 2526;
                                    this.match(ImpalaSqlParser.KW_FOR);
                                    this.state = 2527;
                                    this.valueExpression(0);
                                }
                            }
                            this.state = 2530;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 33:
                        {
                            localContext = new NormalizeContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2532;
                            this.match(ImpalaSqlParser.KW_NORMALIZE);
                            this.state = 2533;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2534;
                            this.valueExpression(0);
                            this.state = 2537;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 263) {
                                {
                                    this.state = 2535;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 2536;
                                    _la = this.tokenStream.LA(1);
                                    if (!(((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 15) !== 0))) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                            this.state = 2539;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 34:
                        {
                            localContext = new ExtractContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2541;
                            this.match(ImpalaSqlParser.KW_EXTRACT);
                            this.state = 2542;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2543;
                            this.identifier();
                            this.state = 2544;
                            this.match(ImpalaSqlParser.KW_FROM);
                            this.state = 2545;
                            this.valueExpression(0);
                            this.state = 2546;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 35:
                        {
                            localContext = new ParenthesizedExpressionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2548;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2549;
                            this.expression();
                            this.state = 2550;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                    case 36:
                        {
                            localContext = new GroupingOperationContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 2552;
                            this.match(ImpalaSqlParser.KW_GROUPING);
                            this.state = 2553;
                            this.match(ImpalaSqlParser.LPAREN);
                            this.state = 2562;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0) || ((((_la - 274)) & ~0x1F) === 0 && ((1 << (_la - 274)) & 705) !== 0)) {
                                {
                                    this.state = 2554;
                                    this.qualifiedName();
                                    this.state = 2559;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 263) {
                                        {
                                            {
                                                this.state = 2555;
                                                this.match(ImpalaSqlParser.COMMA);
                                                this.state = 2556;
                                                this.qualifiedName();
                                            }
                                        }
                                        this.state = 2561;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 2564;
                            this.match(ImpalaSqlParser.RPAREN);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2577;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 329, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2575;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 328, this.context)) {
                                case 1:
                                    {
                                        localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                                        localContext._value = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                                        this.state = 2567;
                                        if (!(this.precpred(this.context, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                                        }
                                        this.state = 2568;
                                        this.match(ImpalaSqlParser.LSQUARE);
                                        this.state = 2569;
                                        localContext._index = this.valueExpression(0);
                                        this.state = 2570;
                                        this.match(ImpalaSqlParser.RSQUARE);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new DereferenceContext(new PrimaryExpressionContext(parentContext, parentState));
                                        localContext._base = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_primaryExpression);
                                        this.state = 2572;
                                        if (!(this.precpred(this.context, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                                        }
                                        this.state = 2573;
                                        this.match(ImpalaSqlParser.DOT);
                                        this.state = 2574;
                                        localContext._fieldName = this.identifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2579;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 329, this.context);
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
    stringLiteral() {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 338, ImpalaSqlParser.RULE_stringLiteral);
        try {
            this.state = 2586;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.STRING:
                    localContext = new BasicStringLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2580;
                        this.match(ImpalaSqlParser.STRING);
                    }
                    break;
                case ImpalaSqlParser.UNICODE_STRING:
                    localContext = new UnicodeStringLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2581;
                        this.match(ImpalaSqlParser.UNICODE_STRING);
                        this.state = 2584;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 330, this.context)) {
                            case 1:
                                {
                                    this.state = 2582;
                                    this.match(ImpalaSqlParser.KW_UESCAPE);
                                    this.state = 2583;
                                    this.match(ImpalaSqlParser.STRING);
                                }
                                break;
                        }
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
    comparisonOperator() {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 340, ImpalaSqlParser.RULE_comparisonOperator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2588;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & 63) !== 0))) {
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
    comparisonQuantifier() {
        let localContext = new ComparisonQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 342, ImpalaSqlParser.RULE_comparisonQuantifier);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2590;
                _la = this.tokenStream.LA(1);
                if (!(_la === 2 || _la === 6 || _la === 181)) {
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
    interval() {
        let localContext = new IntervalContext(this.context, this.state);
        this.enterRule(localContext, 344, ImpalaSqlParser.RULE_interval);
        try {
            this.state = 2606;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 332, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2592;
                        this.match(ImpalaSqlParser.INTEGER_VALUE);
                        this.state = 2593;
                        this.intervalField();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2594;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 2595;
                        this.match(ImpalaSqlParser.INTEGER_VALUE);
                        this.state = 2596;
                        this.match(ImpalaSqlParser.RPAREN);
                        this.state = 2597;
                        this.intervalField();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2598;
                        this.match(ImpalaSqlParser.KW_INTERVAL);
                        this.state = 2599;
                        this.match(ImpalaSqlParser.INTEGER_VALUE);
                        this.state = 2600;
                        this.intervalField();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2601;
                        this.match(ImpalaSqlParser.KW_INTERVAL);
                        this.state = 2602;
                        this.match(ImpalaSqlParser.LPAREN);
                        this.state = 2603;
                        this.match(ImpalaSqlParser.INTEGER_VALUE);
                        this.state = 2604;
                        this.match(ImpalaSqlParser.RPAREN);
                        this.state = 2605;
                        this.intervalField();
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
    intervalField() {
        let localContext = new IntervalFieldContext(this.context, this.state);
        this.enterRule(localContext, 346, ImpalaSqlParser.RULE_intervalField);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2608;
                _la = this.tokenStream.LA(1);
                if (!(_la === 48 || _la === 49 || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2147483651) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 7) !== 0) || _la === 172 || _la === 173 || _la === 217 || _la === 218)) {
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
    type_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 348;
        this.enterRecursionRule(localContext, 348, ImpalaSqlParser.RULE_type, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2655;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 337, this.context)) {
                    case 1:
                        {
                            this.state = 2611;
                            this.match(ImpalaSqlParser.KW_ARRAY);
                            this.state = 2612;
                            this.match(ImpalaSqlParser.LT);
                            this.state = 2613;
                            this.type_(0);
                            this.state = 2614;
                            this.match(ImpalaSqlParser.GT);
                        }
                        break;
                    case 2:
                        {
                            this.state = 2616;
                            this.match(ImpalaSqlParser.KW_MAP);
                            this.state = 2617;
                            this.match(ImpalaSqlParser.LT);
                            this.state = 2618;
                            this.type_(0);
                            this.state = 2619;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 2620;
                            this.type_(0);
                            this.state = 2621;
                            this.match(ImpalaSqlParser.GT);
                        }
                        break;
                    case 3:
                        {
                            this.state = 2623;
                            this.match(ImpalaSqlParser.KW_STRUCT);
                            this.state = 2624;
                            this.match(ImpalaSqlParser.LT);
                            this.state = 2625;
                            this.identifier();
                            this.state = 2626;
                            this.type_(0);
                            this.state = 2633;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 263) {
                                {
                                    {
                                        this.state = 2627;
                                        this.match(ImpalaSqlParser.COMMA);
                                        this.state = 2628;
                                        this.identifier();
                                        this.state = 2629;
                                        this.type_(0);
                                    }
                                }
                                this.state = 2635;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 2636;
                            this.match(ImpalaSqlParser.GT);
                        }
                        break;
                    case 4:
                        {
                            this.state = 2640;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 334, this.context)) {
                                case 1:
                                    {
                                        this.state = 2638;
                                        this.baseType();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 2639;
                                        this.dataType();
                                    }
                                    break;
                            }
                            this.state = 2653;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 336, this.context)) {
                                case 1:
                                    {
                                        this.state = 2642;
                                        this.match(ImpalaSqlParser.LPAREN);
                                        this.state = 2643;
                                        this.typeParameter();
                                        this.state = 2648;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        while (_la === 263) {
                                            {
                                                {
                                                    this.state = 2644;
                                                    this.match(ImpalaSqlParser.COMMA);
                                                    this.state = 2645;
                                                    this.typeParameter();
                                                }
                                            }
                                            this.state = 2650;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                        }
                                        this.state = 2651;
                                        this.match(ImpalaSqlParser.RPAREN);
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2661;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 338, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new TypeContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, ImpalaSqlParser.RULE_type);
                                this.state = 2657;
                                if (!(this.precpred(this.context, 5))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                                }
                                this.state = 2658;
                                this.match(ImpalaSqlParser.KW_ARRAY);
                            }
                        }
                    }
                    this.state = 2663;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 338, this.context);
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
    dataType() {
        let localContext = new DataTypeContext(this.context, this.state);
        this.enterRule(localContext, 350, ImpalaSqlParser.RULE_dataType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2664;
                _la = this.tokenStream.LA(1);
                if (!(_la === 8 || ((((_la - 227)) & ~0x1F) === 0 && ((1 << (_la - 227)) & 262143) !== 0))) {
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
    typeParameter() {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 352, ImpalaSqlParser.RULE_typeParameter);
        try {
            this.state = 2668;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.INTEGER_VALUE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2666;
                        this.match(ImpalaSqlParser.INTEGER_VALUE);
                    }
                    break;
                case ImpalaSqlParser.KW_ARRAY:
                case ImpalaSqlParser.KW_BERNOULLI:
                case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                case ImpalaSqlParser.KW_CURRENT_USER:
                case ImpalaSqlParser.KW_DAY:
                case ImpalaSqlParser.KW_DAYS:
                case ImpalaSqlParser.KW_EXCLUDING:
                case ImpalaSqlParser.KW_EXTRACT:
                case ImpalaSqlParser.KW_HOUR:
                case ImpalaSqlParser.KW_INCLUDING:
                case ImpalaSqlParser.KW_KEY:
                case ImpalaSqlParser.KW_LOCALTIME:
                case ImpalaSqlParser.KW_MINUTE:
                case ImpalaSqlParser.KW_MINUTES:
                case ImpalaSqlParser.KW_MONTH:
                case ImpalaSqlParser.KW_MONTHS:
                case ImpalaSqlParser.KW_NFC:
                case ImpalaSqlParser.KW_NFD:
                case ImpalaSqlParser.KW_NFKC:
                case ImpalaSqlParser.KW_NFKD:
                case ImpalaSqlParser.KW_OPTION:
                case ImpalaSqlParser.KW_ORDINALITY:
                case ImpalaSqlParser.KW_PRIVILEGES:
                case ImpalaSqlParser.KW_PROPERTIES:
                case ImpalaSqlParser.KW_SECOND:
                case ImpalaSqlParser.KW_SECONDS:
                case ImpalaSqlParser.KW_SHUTDOWN:
                case ImpalaSqlParser.KW_SUBSTRING:
                case ImpalaSqlParser.KW_SYSTEM:
                case ImpalaSqlParser.KW_TRY_CAST:
                case ImpalaSqlParser.KW_USER:
                case ImpalaSqlParser.KW_VIEWS:
                case ImpalaSqlParser.KW_YEAR:
                case ImpalaSqlParser.KW_ORC:
                case ImpalaSqlParser.KW_BINARY:
                case ImpalaSqlParser.KW_BIGINT:
                case ImpalaSqlParser.KW_BOOLEAN:
                case ImpalaSqlParser.KW_CHAR:
                case ImpalaSqlParser.KW_DATE:
                case ImpalaSqlParser.KW_DECIMAL:
                case ImpalaSqlParser.KW_DOUBLE:
                case ImpalaSqlParser.KW_INT:
                case ImpalaSqlParser.KW_MAP:
                case ImpalaSqlParser.KW_REAL:
                case ImpalaSqlParser.KW_SMALLINT:
                case ImpalaSqlParser.KW_FLOAT:
                case ImpalaSqlParser.KW_STRING:
                case ImpalaSqlParser.KW_STRUCT:
                case ImpalaSqlParser.KW_TIMESTAMP:
                case ImpalaSqlParser.KW_TINYINT:
                case ImpalaSqlParser.KW_VARCHAR:
                case ImpalaSqlParser.KW_COMPLEX:
                case ImpalaSqlParser.STRING:
                case ImpalaSqlParser.IDENTIFIER:
                case ImpalaSqlParser.DIGIT_IDENTIFIER:
                case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
                case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
                case ImpalaSqlParser.DOUBLE_PRECISION:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2667;
                        this.type_(0);
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
    baseType() {
        let localContext = new BaseTypeContext(this.context, this.state);
        this.enterRule(localContext, 354, ImpalaSqlParser.RULE_baseType);
        try {
            this.state = 2674;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.TIME_WITH_TIME_ZONE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2670;
                        this.match(ImpalaSqlParser.TIME_WITH_TIME_ZONE);
                    }
                    break;
                case ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2671;
                        this.match(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE);
                    }
                    break;
                case ImpalaSqlParser.DOUBLE_PRECISION:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2672;
                        this.match(ImpalaSqlParser.DOUBLE_PRECISION);
                    }
                    break;
                case ImpalaSqlParser.KW_BERNOULLI:
                case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                case ImpalaSqlParser.KW_CURRENT_USER:
                case ImpalaSqlParser.KW_DAY:
                case ImpalaSqlParser.KW_DAYS:
                case ImpalaSqlParser.KW_EXCLUDING:
                case ImpalaSqlParser.KW_EXTRACT:
                case ImpalaSqlParser.KW_HOUR:
                case ImpalaSqlParser.KW_INCLUDING:
                case ImpalaSqlParser.KW_KEY:
                case ImpalaSqlParser.KW_LOCALTIME:
                case ImpalaSqlParser.KW_MINUTE:
                case ImpalaSqlParser.KW_MINUTES:
                case ImpalaSqlParser.KW_MONTH:
                case ImpalaSqlParser.KW_MONTHS:
                case ImpalaSqlParser.KW_NFC:
                case ImpalaSqlParser.KW_NFD:
                case ImpalaSqlParser.KW_NFKC:
                case ImpalaSqlParser.KW_NFKD:
                case ImpalaSqlParser.KW_OPTION:
                case ImpalaSqlParser.KW_ORDINALITY:
                case ImpalaSqlParser.KW_PRIVILEGES:
                case ImpalaSqlParser.KW_PROPERTIES:
                case ImpalaSqlParser.KW_SECOND:
                case ImpalaSqlParser.KW_SECONDS:
                case ImpalaSqlParser.KW_SHUTDOWN:
                case ImpalaSqlParser.KW_SUBSTRING:
                case ImpalaSqlParser.KW_SYSTEM:
                case ImpalaSqlParser.KW_TRY_CAST:
                case ImpalaSqlParser.KW_USER:
                case ImpalaSqlParser.KW_VIEWS:
                case ImpalaSqlParser.KW_YEAR:
                case ImpalaSqlParser.KW_ORC:
                case ImpalaSqlParser.KW_DATE:
                case ImpalaSqlParser.STRING:
                case ImpalaSqlParser.IDENTIFIER:
                case ImpalaSqlParser.DIGIT_IDENTIFIER:
                case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2673;
                        this.identifier();
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
    whenClause() {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 356, ImpalaSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2676;
                this.match(ImpalaSqlParser.KW_WHEN);
                this.state = 2677;
                localContext._condition = this.expression();
                this.state = 2678;
                this.match(ImpalaSqlParser.KW_THEN);
                this.state = 2679;
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
    filter() {
        let localContext = new FilterContext(this.context, this.state);
        this.enterRule(localContext, 358, ImpalaSqlParser.RULE_filter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2681;
                this.match(ImpalaSqlParser.KW_FILTER);
                this.state = 2682;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2683;
                this.whereClause();
                this.state = 2684;
                this.match(ImpalaSqlParser.RPAREN);
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
    partitionByClause() {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 360, ImpalaSqlParser.RULE_partitionByClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2686;
                localContext._expression = this.expression();
                localContext._partition.push(localContext._expression);
                this.state = 2691;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 2687;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 2688;
                            localContext._expression = this.expression();
                            localContext._partition.push(localContext._expression);
                        }
                    }
                    this.state = 2693;
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
    over() {
        let localContext = new OverContext(this.context, this.state);
        this.enterRule(localContext, 362, ImpalaSqlParser.RULE_over);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2694;
                this.match(ImpalaSqlParser.KW_OVER);
                this.state = 2695;
                this.match(ImpalaSqlParser.LPAREN);
                this.state = 2699;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 145) {
                    {
                        this.state = 2696;
                        this.match(ImpalaSqlParser.KW_PARTITION);
                        this.state = 2697;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 2698;
                        this.partitionByClause();
                    }
                }
                this.state = 2711;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 139) {
                    {
                        this.state = 2701;
                        this.match(ImpalaSqlParser.KW_ORDER);
                        this.state = 2702;
                        this.match(ImpalaSqlParser.KW_BY);
                        this.state = 2703;
                        this.sortItem();
                        this.state = 2708;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 263) {
                            {
                                {
                                    this.state = 2704;
                                    this.match(ImpalaSqlParser.COMMA);
                                    this.state = 2705;
                                    this.sortItem();
                                }
                            }
                            this.state = 2710;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                this.state = 2714;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 154 || _la === 169) {
                    {
                        this.state = 2713;
                        this.windowFrame();
                    }
                }
                this.state = 2716;
                this.match(ImpalaSqlParser.RPAREN);
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
    windowFrame() {
        let localContext = new WindowFrameContext(this.context, this.state);
        this.enterRule(localContext, 364, ImpalaSqlParser.RULE_windowFrame);
        let _la;
        try {
            this.state = 2726;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 346, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2718;
                        localContext._frameType = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 154 || _la === 169)) {
                            localContext._frameType = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2719;
                        localContext._start_ = this.frameBound();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2720;
                        localContext._frameType = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 154 || _la === 169)) {
                            localContext._frameType = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2721;
                        this.match(ImpalaSqlParser.KW_BETWEEN);
                        this.state = 2722;
                        localContext._start_ = this.frameBound();
                        this.state = 2723;
                        this.match(ImpalaSqlParser.KW_AND);
                        this.state = 2724;
                        localContext._end = this.frameBound();
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
    frameBound() {
        let localContext = new FrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 366, ImpalaSqlParser.RULE_frameBound);
        let _la;
        try {
            this.state = 2737;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 347, this.context)) {
                case 1:
                    localContext = new UnboundedFrameContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2728;
                        this.match(ImpalaSqlParser.KW_UNBOUNDED);
                        this.state = 2729;
                        localContext._boundType = this.match(ImpalaSqlParser.KW_PRECEDING);
                    }
                    break;
                case 2:
                    localContext = new UnboundedFrameContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2730;
                        this.match(ImpalaSqlParser.KW_UNBOUNDED);
                        this.state = 2731;
                        localContext._boundType = this.match(ImpalaSqlParser.KW_FOLLOWING);
                    }
                    break;
                case 3:
                    localContext = new CurrentRowBoundContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2732;
                        this.match(ImpalaSqlParser.KW_CURRENT);
                        this.state = 2733;
                        this.match(ImpalaSqlParser.KW_ROW);
                    }
                    break;
                case 4:
                    localContext = new BoundedFrameContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2734;
                        this.expression();
                        this.state = 2735;
                        localContext._boundType = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 77 || _la === 149)) {
                            localContext._boundType = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
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
    pathElement() {
        let localContext = new PathElementContext(this.context, this.state);
        this.enterRule(localContext, 368, ImpalaSqlParser.RULE_pathElement);
        try {
            this.state = 2744;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 348, this.context)) {
                case 1:
                    localContext = new QualifiedArgumentContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2739;
                        this.identifier();
                        this.state = 2740;
                        this.match(ImpalaSqlParser.DOT);
                        this.state = 2741;
                        this.identifier();
                    }
                    break;
                case 2:
                    localContext = new UnqualifiedArgumentContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2743;
                        this.identifier();
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
    pathSpecification() {
        let localContext = new PathSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 370, ImpalaSqlParser.RULE_pathSpecification);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2746;
                this.pathElement();
                this.state = 2751;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 263) {
                    {
                        {
                            this.state = 2747;
                            this.match(ImpalaSqlParser.COMMA);
                            this.state = 2748;
                            this.pathElement();
                        }
                    }
                    this.state = 2753;
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
    privilege() {
        let localContext = new PrivilegeContext(this.context, this.state);
        this.enterRule(localContext, 372, ImpalaSqlParser.RULE_privilege);
        let _la;
        try {
            this.state = 2767;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_ALL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2754;
                        this.match(ImpalaSqlParser.KW_ALL);
                    }
                    break;
                case ImpalaSqlParser.KW_ALTER:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2755;
                        this.match(ImpalaSqlParser.KW_ALTER);
                    }
                    break;
                case ImpalaSqlParser.KW_DROP:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2756;
                        this.match(ImpalaSqlParser.KW_DROP);
                    }
                    break;
                case ImpalaSqlParser.KW_CREATE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2757;
                        this.match(ImpalaSqlParser.KW_CREATE);
                    }
                    break;
                case ImpalaSqlParser.KW_INSERT:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2758;
                        this.match(ImpalaSqlParser.KW_INSERT);
                    }
                    break;
                case ImpalaSqlParser.KW_REFRESH:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2759;
                        this.match(ImpalaSqlParser.KW_REFRESH);
                    }
                    break;
                case ImpalaSqlParser.KW_SELECT:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2760;
                        this.match(ImpalaSqlParser.KW_SELECT);
                        this.state = 2765;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 265) {
                            {
                                this.state = 2761;
                                this.match(ImpalaSqlParser.LPAREN);
                                this.state = 2762;
                                localContext._name = this.identifier();
                                this.state = 2763;
                                this.match(ImpalaSqlParser.RPAREN);
                            }
                        }
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
    objectType() {
        let localContext = new ObjectTypeContext(this.context, this.state);
        this.enterRule(localContext, 374, ImpalaSqlParser.RULE_objectType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2769;
                _la = this.tokenStream.LA(1);
                if (!(_la === 46 || ((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & 2147484673) !== 0))) {
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
    qualifiedName() {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 376, ImpalaSqlParser.RULE_qualifiedName);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2771;
                this.identifier();
                this.state = 2776;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 352, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 2772;
                                this.match(ImpalaSqlParser.DOT);
                                this.state = 2773;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 2778;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 352, this.context);
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
        this.enterRule(localContext, 378, ImpalaSqlParser.RULE_qualifiedNameAllowEmpty);
        try {
            let alternative;
            this.state = 2795;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 355, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2779;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
                        }
                        this.state = 2785;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 353, this.context)) {
                            case 1:
                                {
                                    this.state = 2780;
                                    this.identifier();
                                    this.state = 2781;
                                    this.match(ImpalaSqlParser.DOT);
                                    this.state = 2782;
                                    this.emptyColumn();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 2784;
                                    this.emptyColumn();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2787;
                        this.identifier();
                        this.state = 2792;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 354, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 2788;
                                        this.match(ImpalaSqlParser.DOT);
                                        this.state = 2789;
                                        this.identifier();
                                    }
                                }
                            }
                            this.state = 2794;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 354, this.context);
                        }
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
    principal() {
        let localContext = new PrincipalContext(this.context, this.state);
        this.enterRule(localContext, 380, ImpalaSqlParser.RULE_principal);
        try {
            this.state = 2803;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.KW_ROLE:
                    localContext = new RolePrincipalContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2797;
                        this.match(ImpalaSqlParser.KW_ROLE);
                        this.state = 2798;
                        this.identifier();
                    }
                    break;
                case ImpalaSqlParser.KW_USER:
                    localContext = new UserPrincipalContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2799;
                        this.match(ImpalaSqlParser.KW_USER);
                        this.state = 2800;
                        this.identifier();
                    }
                    break;
                case ImpalaSqlParser.KW_GROUP:
                    localContext = new GroupPrincipalContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2801;
                        this.match(ImpalaSqlParser.KW_GROUP);
                        this.state = 2802;
                        this.identifier();
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
        this.enterRule(localContext, 382, ImpalaSqlParser.RULE_identifier);
        try {
            this.state = 2810;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ImpalaSqlParser.IDENTIFIER:
                    localContext = new UnquotedIdentifierContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2805;
                        this.match(ImpalaSqlParser.IDENTIFIER);
                    }
                    break;
                case ImpalaSqlParser.STRING:
                    localContext = new QuotedIdentifierContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2806;
                        this.match(ImpalaSqlParser.STRING);
                    }
                    break;
                case ImpalaSqlParser.KW_BERNOULLI:
                case ImpalaSqlParser.KW_CURRENT_TIMESTAMP:
                case ImpalaSqlParser.KW_CURRENT_USER:
                case ImpalaSqlParser.KW_DAY:
                case ImpalaSqlParser.KW_DAYS:
                case ImpalaSqlParser.KW_EXCLUDING:
                case ImpalaSqlParser.KW_EXTRACT:
                case ImpalaSqlParser.KW_HOUR:
                case ImpalaSqlParser.KW_INCLUDING:
                case ImpalaSqlParser.KW_KEY:
                case ImpalaSqlParser.KW_LOCALTIME:
                case ImpalaSqlParser.KW_MINUTE:
                case ImpalaSqlParser.KW_MINUTES:
                case ImpalaSqlParser.KW_MONTH:
                case ImpalaSqlParser.KW_MONTHS:
                case ImpalaSqlParser.KW_NFC:
                case ImpalaSqlParser.KW_NFD:
                case ImpalaSqlParser.KW_NFKC:
                case ImpalaSqlParser.KW_NFKD:
                case ImpalaSqlParser.KW_OPTION:
                case ImpalaSqlParser.KW_ORDINALITY:
                case ImpalaSqlParser.KW_PRIVILEGES:
                case ImpalaSqlParser.KW_PROPERTIES:
                case ImpalaSqlParser.KW_SECOND:
                case ImpalaSqlParser.KW_SECONDS:
                case ImpalaSqlParser.KW_SHUTDOWN:
                case ImpalaSqlParser.KW_SUBSTRING:
                case ImpalaSqlParser.KW_SYSTEM:
                case ImpalaSqlParser.KW_TRY_CAST:
                case ImpalaSqlParser.KW_USER:
                case ImpalaSqlParser.KW_VIEWS:
                case ImpalaSqlParser.KW_YEAR:
                case ImpalaSqlParser.KW_ORC:
                case ImpalaSqlParser.KW_DATE:
                    localContext = new UnquotedIdentifierContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2807;
                        this.nonReserved();
                    }
                    break;
                case ImpalaSqlParser.BACKQUOTED_IDENTIFIER:
                    localContext = new BackQuotedIdentifierContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2808;
                        this.match(ImpalaSqlParser.BACKQUOTED_IDENTIFIER);
                    }
                    break;
                case ImpalaSqlParser.DIGIT_IDENTIFIER:
                    localContext = new DigitIdentifierContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2809;
                        this.match(ImpalaSqlParser.DIGIT_IDENTIFIER);
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
    number_() {
        let localContext = new NumberContext(this.context, this.state);
        this.enterRule(localContext, 384, ImpalaSqlParser.RULE_number);
        let _la;
        try {
            this.state = 2824;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 361, this.context)) {
                case 1:
                    localContext = new DecimalLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2813;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 256) {
                            {
                                this.state = 2812;
                                this.match(ImpalaSqlParser.MINUS);
                            }
                        }
                        this.state = 2815;
                        this.match(ImpalaSqlParser.DECIMAL_VALUE);
                    }
                    break;
                case 2:
                    localContext = new DoubleLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2817;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 256) {
                            {
                                this.state = 2816;
                                this.match(ImpalaSqlParser.MINUS);
                            }
                        }
                        this.state = 2819;
                        this.match(ImpalaSqlParser.DOUBLE_VALUE);
                    }
                    break;
                case 3:
                    localContext = new IntegerLiteralContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2821;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 256) {
                            {
                                this.state = 2820;
                                this.match(ImpalaSqlParser.MINUS);
                            }
                        }
                        this.state = 2823;
                        this.match(ImpalaSqlParser.INTEGER_VALUE);
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
    reservedKeywordsUsedAsFuncName() {
        let localContext = new ReservedKeywordsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 386, ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2826;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 1085443) !== 0) || _la === 68 || _la === 91 || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 1281) !== 0) || ((((_la - 158)) & ~0x1F) === 0 && ((1 << (_la - 158)) & 67125377) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 2097409) !== 0))) {
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
    nonReserved() {
        let localContext = new NonReservedContext(this.context, this.state);
        this.enterRule(localContext, 388, ImpalaSqlParser.RULE_nonReserved);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2828;
                _la = this.tokenStream.LA(1);
                if (!(_la === 14 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 37748835) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 2416443409) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 1610760439) !== 0) || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 8401155) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 134291969) !== 0))) {
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
            case 97:
                return this.columnNamePath_sempred(localContext, predIndex);
            case 99:
                return this.columnNameAllowEmpty_sempred(localContext, predIndex);
            case 134:
                return this.queryTerm_sempred(localContext, predIndex);
            case 146:
                return this.selectItem_sempred(localContext, predIndex);
            case 151:
                return this.relation_sempred(localContext, predIndex);
            case 164:
                return this.booleanExpression_sempred(localContext, predIndex);
            case 166:
                return this.valueExpression_sempred(localContext, predIndex);
            case 168:
                return this.primaryExpression_sempred(localContext, predIndex);
            case 174:
                return this.type_sempred(localContext, predIndex);
            case 189:
                return this.qualifiedNameAllowEmpty_sempred(localContext, predIndex);
        }
        return true;
    }
    columnNamePath_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    columnNameAllowEmpty_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 1:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    queryTerm_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this.context, 2);
            case 3:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    selectItem_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 4:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    relation_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 5:
                return this.precpred(this.context, 2);
        }
        return true;
    }
    booleanExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this.context, 2);
            case 7:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    valueExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 8:
                return this.precpred(this.context, 3);
            case 9:
                return this.precpred(this.context, 2);
            case 10:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    primaryExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this.context, 15);
            case 12:
                return this.precpred(this.context, 13);
        }
        return true;
    }
    type_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this.context, 5);
        }
        return true;
    }
    qualifiedNameAllowEmpty_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 14:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    static get _ATN() {
        if (!ImpalaSqlParser.__ATN) {
            ImpalaSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(ImpalaSqlParser._serializedATN);
        }
        return ImpalaSqlParser.__ATN;
    }
    get vocabulary() {
        return ImpalaSqlParser.vocabulary;
    }
}
ImpalaSqlParser.KW_ADD = 1;
ImpalaSqlParser.KW_ALL = 2;
ImpalaSqlParser.KW_ANALYTIC = 3;
ImpalaSqlParser.KW_ALTER = 4;
ImpalaSqlParser.KW_AND = 5;
ImpalaSqlParser.KW_ANY = 6;
ImpalaSqlParser.KW_ANTI = 7;
ImpalaSqlParser.KW_ARRAY = 8;
ImpalaSqlParser.KW_AS = 9;
ImpalaSqlParser.KW_ASC = 10;
ImpalaSqlParser.KW_AT = 11;
ImpalaSqlParser.KW_AGGREGATE = 12;
ImpalaSqlParser.KW_AUTHORIZATION = 13;
ImpalaSqlParser.KW_BERNOULLI = 14;
ImpalaSqlParser.KW_BETWEEN = 15;
ImpalaSqlParser.KW_BLOCK_SIZE = 16;
ImpalaSqlParser.KW_PARTITIONED = 17;
ImpalaSqlParser.KW_PREPARE_FN = 18;
ImpalaSqlParser.KW_EXTERNAL = 19;
ImpalaSqlParser.KW_CLOSEFN = 20;
ImpalaSqlParser.KW_SORT = 21;
ImpalaSqlParser.KW_PURGE = 22;
ImpalaSqlParser.KW_STORED = 23;
ImpalaSqlParser.KW_LOCATION = 24;
ImpalaSqlParser.KW_TBLPROPERTIES = 25;
ImpalaSqlParser.KW_BY = 26;
ImpalaSqlParser.KW_CASCADE = 27;
ImpalaSqlParser.KW_CASE = 28;
ImpalaSqlParser.KW_CAST = 29;
ImpalaSqlParser.KW_CACHED = 30;
ImpalaSqlParser.KW_CHANGE = 31;
ImpalaSqlParser.KW_COLUMN = 32;
ImpalaSqlParser.KW_COLUMNS = 33;
ImpalaSqlParser.KW_COMMENT = 34;
ImpalaSqlParser.KW_COMPRESSION = 35;
ImpalaSqlParser.KW_COMPUTE = 36;
ImpalaSqlParser.KW_CREATE = 37;
ImpalaSqlParser.KW_CROSS = 38;
ImpalaSqlParser.KW_CURRENT = 39;
ImpalaSqlParser.KW_CURRENT_DATE = 40;
ImpalaSqlParser.KW_CURRENT_PATH = 41;
ImpalaSqlParser.KW_CURRENT_TIME = 42;
ImpalaSqlParser.KW_CURRENT_TIMESTAMP = 43;
ImpalaSqlParser.KW_CURRENT_USER = 44;
ImpalaSqlParser.KW_DATA = 45;
ImpalaSqlParser.KW_DATABASE = 46;
ImpalaSqlParser.KW_DATABASES = 47;
ImpalaSqlParser.KW_DAY = 48;
ImpalaSqlParser.KW_DAYS = 49;
ImpalaSqlParser.KW_DELETE = 50;
ImpalaSqlParser.KW_DEFAULT = 51;
ImpalaSqlParser.KW_DELIMITED = 52;
ImpalaSqlParser.KW_DISABLE = 53;
ImpalaSqlParser.KW_UPDATE = 54;
ImpalaSqlParser.KW_DESC = 55;
ImpalaSqlParser.KW_DESCRIBE = 56;
ImpalaSqlParser.KW_DISTINCT = 57;
ImpalaSqlParser.KW_DROP = 58;
ImpalaSqlParser.KW_ELSE = 59;
ImpalaSqlParser.KW_ENCODING = 60;
ImpalaSqlParser.KW_END = 61;
ImpalaSqlParser.KW_ESCAPE = 62;
ImpalaSqlParser.KW_ESCAPED = 63;
ImpalaSqlParser.KW_EXCEPT = 64;
ImpalaSqlParser.KW_EXCLUDING = 65;
ImpalaSqlParser.KW_EXISTS = 66;
ImpalaSqlParser.KW_EXPLAIN = 67;
ImpalaSqlParser.KW_EXTRACT = 68;
ImpalaSqlParser.KW_EXTENDED = 69;
ImpalaSqlParser.KW_FALSE = 70;
ImpalaSqlParser.KW_FIELDS = 71;
ImpalaSqlParser.KW_FILEFORMAT = 72;
ImpalaSqlParser.KW_FILES = 73;
ImpalaSqlParser.KW_FILTER = 74;
ImpalaSqlParser.KW_FIRST = 75;
ImpalaSqlParser.KW_FINALIZE_FN = 76;
ImpalaSqlParser.KW_FOLLOWING = 77;
ImpalaSqlParser.KW_FOR = 78;
ImpalaSqlParser.KW_FORMAT = 79;
ImpalaSqlParser.KW_FORMATTED = 80;
ImpalaSqlParser.KW_FOREIGN = 81;
ImpalaSqlParser.KW_FROM = 82;
ImpalaSqlParser.KW_FULL = 83;
ImpalaSqlParser.KW_FUNCTION = 84;
ImpalaSqlParser.KW_FUNCTIONS = 85;
ImpalaSqlParser.KW_GRANT = 86;
ImpalaSqlParser.KW_GROUP = 87;
ImpalaSqlParser.KW_GROUPING = 88;
ImpalaSqlParser.KW_HASH = 89;
ImpalaSqlParser.KW_HAVING = 90;
ImpalaSqlParser.KW_HOUR = 91;
ImpalaSqlParser.KW_HOURS = 92;
ImpalaSqlParser.KW_IF = 93;
ImpalaSqlParser.KW_IN = 94;
ImpalaSqlParser.KW_INCLUDING = 95;
ImpalaSqlParser.KW_INCREMENTAL = 96;
ImpalaSqlParser.KW_INNER = 97;
ImpalaSqlParser.KW_INPATH = 98;
ImpalaSqlParser.KW_INSERT = 99;
ImpalaSqlParser.KW_INTERSECT = 100;
ImpalaSqlParser.KW_INTERVAL = 101;
ImpalaSqlParser.KW_INTERMEDIATE = 102;
ImpalaSqlParser.KW_INTO = 103;
ImpalaSqlParser.KW_INIT_FN = 104;
ImpalaSqlParser.KW_IREGEXP = 105;
ImpalaSqlParser.KW_ILIKE = 106;
ImpalaSqlParser.KW_INVALIDATE = 107;
ImpalaSqlParser.KW_IS = 108;
ImpalaSqlParser.KW_JOIN = 109;
ImpalaSqlParser.KW_KEY = 110;
ImpalaSqlParser.KW_KUDU = 111;
ImpalaSqlParser.KW_LAST = 112;
ImpalaSqlParser.KW_LATERAL = 113;
ImpalaSqlParser.KW_LEFT = 114;
ImpalaSqlParser.KW_LIKE = 115;
ImpalaSqlParser.KW_LIMIT = 116;
ImpalaSqlParser.KW_LINES = 117;
ImpalaSqlParser.KW_LOAD = 118;
ImpalaSqlParser.KW_LOCALTIME = 119;
ImpalaSqlParser.KW_LOCALTIMESTAMP = 120;
ImpalaSqlParser.KW_METADATA = 121;
ImpalaSqlParser.KW_MINUTE = 122;
ImpalaSqlParser.KW_MINUTES = 123;
ImpalaSqlParser.KW_MONTH = 124;
ImpalaSqlParser.KW_MONTHS = 125;
ImpalaSqlParser.KW_MERGE_FN = 126;
ImpalaSqlParser.KW_NFC = 127;
ImpalaSqlParser.KW_NFD = 128;
ImpalaSqlParser.KW_NFKC = 129;
ImpalaSqlParser.KW_NFKD = 130;
ImpalaSqlParser.KW_NORMALIZE = 131;
ImpalaSqlParser.KW_NOT = 132;
ImpalaSqlParser.KW_NULL = 133;
ImpalaSqlParser.KW_NULLS = 134;
ImpalaSqlParser.KW_OFFSET = 135;
ImpalaSqlParser.KW_ON = 136;
ImpalaSqlParser.KW_OPTION = 137;
ImpalaSqlParser.KW_OR = 138;
ImpalaSqlParser.KW_ORDER = 139;
ImpalaSqlParser.KW_ORDINALITY = 140;
ImpalaSqlParser.KW_OUTER = 141;
ImpalaSqlParser.KW_OWNER = 142;
ImpalaSqlParser.KW_OVER = 143;
ImpalaSqlParser.KW_OVERWRITE = 144;
ImpalaSqlParser.KW_PARTITION = 145;
ImpalaSqlParser.KW_PARTITIONS = 146;
ImpalaSqlParser.KW_PARQUET = 147;
ImpalaSqlParser.KW_POSITION = 148;
ImpalaSqlParser.KW_PRECEDING = 149;
ImpalaSqlParser.KW_PRIMARY = 150;
ImpalaSqlParser.KW_REPLICATION = 151;
ImpalaSqlParser.KW_PRIVILEGES = 152;
ImpalaSqlParser.KW_PROPERTIES = 153;
ImpalaSqlParser.KW_RANGE = 154;
ImpalaSqlParser.KW_RECOVER = 155;
ImpalaSqlParser.KW_RENAME = 156;
ImpalaSqlParser.KW_REPEATABLE = 157;
ImpalaSqlParser.KW_REPLACE = 158;
ImpalaSqlParser.KW_RESTRICT = 159;
ImpalaSqlParser.KW_RETURNS = 160;
ImpalaSqlParser.KW_REVOKE = 161;
ImpalaSqlParser.KW_REFRESH = 162;
ImpalaSqlParser.KW_REGEXP = 163;
ImpalaSqlParser.KW_RLIKE = 164;
ImpalaSqlParser.KW_RIGHT = 165;
ImpalaSqlParser.KW_ROLE = 166;
ImpalaSqlParser.KW_ROLES = 167;
ImpalaSqlParser.KW_ROW = 168;
ImpalaSqlParser.KW_ROWS = 169;
ImpalaSqlParser.KW_SCHEMA = 170;
ImpalaSqlParser.KW_SCHEMAS = 171;
ImpalaSqlParser.KW_SECOND = 172;
ImpalaSqlParser.KW_SECONDS = 173;
ImpalaSqlParser.KW_SELECT = 174;
ImpalaSqlParser.KW_SERDEPROPERTIES = 175;
ImpalaSqlParser.KW_SET = 176;
ImpalaSqlParser.KW_SEMI = 177;
ImpalaSqlParser.KW_SERVER = 178;
ImpalaSqlParser.KW_SHOW = 179;
ImpalaSqlParser.KW_SHUTDOWN = 180;
ImpalaSqlParser.KW_SOME = 181;
ImpalaSqlParser.KW_STATS = 182;
ImpalaSqlParser.KW_STRAIGHT_JOIN = 183;
ImpalaSqlParser.KW_SUBSTRING = 184;
ImpalaSqlParser.KW_SYSTEM = 185;
ImpalaSqlParser.KW_SYMBOL = 186;
ImpalaSqlParser.KW_SERIALIZE_FN = 187;
ImpalaSqlParser.KW_TABLE = 188;
ImpalaSqlParser.KW_TABLES = 189;
ImpalaSqlParser.KW_TABLESAMPLE = 190;
ImpalaSqlParser.KW_TERMINATED = 191;
ImpalaSqlParser.KW_THEN = 192;
ImpalaSqlParser.KW_TO = 193;
ImpalaSqlParser.KW_TRUE = 194;
ImpalaSqlParser.KW_TRY_CAST = 195;
ImpalaSqlParser.KW_TRUNCATE = 196;
ImpalaSqlParser.KW_UNCACHED = 197;
ImpalaSqlParser.KW_UESCAPE = 198;
ImpalaSqlParser.KW_UNBOUNDED = 199;
ImpalaSqlParser.KW_UNION = 200;
ImpalaSqlParser.KW_UNNEST = 201;
ImpalaSqlParser.KW_UNSET = 202;
ImpalaSqlParser.KW_USE = 203;
ImpalaSqlParser.KW_USER = 204;
ImpalaSqlParser.KW_USING = 205;
ImpalaSqlParser.KW_UPDATE_FN = 206;
ImpalaSqlParser.KW_UPSERT = 207;
ImpalaSqlParser.KW_UNKNOWN = 208;
ImpalaSqlParser.KW_URI = 209;
ImpalaSqlParser.KW_VALUE = 210;
ImpalaSqlParser.KW_VALUES = 211;
ImpalaSqlParser.KW_VIEW = 212;
ImpalaSqlParser.KW_VIEWS = 213;
ImpalaSqlParser.KW_WHEN = 214;
ImpalaSqlParser.KW_WHERE = 215;
ImpalaSqlParser.KW_WITH = 216;
ImpalaSqlParser.KW_YEAR = 217;
ImpalaSqlParser.KW_YEARS = 218;
ImpalaSqlParser.KW_TEXTFILE = 219;
ImpalaSqlParser.KW_ORC = 220;
ImpalaSqlParser.KW_AVRO = 221;
ImpalaSqlParser.KW_SEQUENCEFILE = 222;
ImpalaSqlParser.KW_RCFILE = 223;
ImpalaSqlParser.KW_REFERENCES = 224;
ImpalaSqlParser.KW_NOVALIDATE = 225;
ImpalaSqlParser.KW_RELY = 226;
ImpalaSqlParser.KW_BINARY = 227;
ImpalaSqlParser.KW_BIGINT = 228;
ImpalaSqlParser.KW_BOOLEAN = 229;
ImpalaSqlParser.KW_CHAR = 230;
ImpalaSqlParser.KW_DATE = 231;
ImpalaSqlParser.KW_DECIMAL = 232;
ImpalaSqlParser.KW_DOUBLE = 233;
ImpalaSqlParser.KW_INT = 234;
ImpalaSqlParser.KW_MAP = 235;
ImpalaSqlParser.KW_REAL = 236;
ImpalaSqlParser.KW_SMALLINT = 237;
ImpalaSqlParser.KW_FLOAT = 238;
ImpalaSqlParser.KW_STRING = 239;
ImpalaSqlParser.KW_STRUCT = 240;
ImpalaSqlParser.KW_TIMESTAMP = 241;
ImpalaSqlParser.KW_TINYINT = 242;
ImpalaSqlParser.KW_VARCHAR = 243;
ImpalaSqlParser.KW_COMPLEX = 244;
ImpalaSqlParser.STATS_NUMDVS = 245;
ImpalaSqlParser.STATS_NUMNULLS = 246;
ImpalaSqlParser.STATS_AVGSIZE = 247;
ImpalaSqlParser.STATS_MAXSIZE = 248;
ImpalaSqlParser.EQ = 249;
ImpalaSqlParser.NEQ = 250;
ImpalaSqlParser.LT = 251;
ImpalaSqlParser.LTE = 252;
ImpalaSqlParser.GT = 253;
ImpalaSqlParser.GTE = 254;
ImpalaSqlParser.PLUS = 255;
ImpalaSqlParser.MINUS = 256;
ImpalaSqlParser.ASTERISK = 257;
ImpalaSqlParser.SLASH = 258;
ImpalaSqlParser.PERCENT = 259;
ImpalaSqlParser.CONCAT = 260;
ImpalaSqlParser.DOT = 261;
ImpalaSqlParser.SEMICOLON = 262;
ImpalaSqlParser.COMMA = 263;
ImpalaSqlParser.COLON = 264;
ImpalaSqlParser.LPAREN = 265;
ImpalaSqlParser.RPAREN = 266;
ImpalaSqlParser.LSQUARE = 267;
ImpalaSqlParser.RSQUARE = 268;
ImpalaSqlParser.LCURLY = 269;
ImpalaSqlParser.RCURLY = 270;
ImpalaSqlParser.BITWISEOR = 271;
ImpalaSqlParser.QUESTION = 272;
ImpalaSqlParser.RIGHT_ARROW = 273;
ImpalaSqlParser.STRING = 274;
ImpalaSqlParser.UNICODE_STRING = 275;
ImpalaSqlParser.BINARY_LITERAL = 276;
ImpalaSqlParser.INTEGER_VALUE = 277;
ImpalaSqlParser.DECIMAL_VALUE = 278;
ImpalaSqlParser.DOUBLE_VALUE = 279;
ImpalaSqlParser.IDENTIFIER = 280;
ImpalaSqlParser.DIGIT_IDENTIFIER = 281;
ImpalaSqlParser.QUOTED_IDENTIFIER = 282;
ImpalaSqlParser.BACKQUOTED_IDENTIFIER = 283;
ImpalaSqlParser.TIME_WITH_TIME_ZONE = 284;
ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE = 285;
ImpalaSqlParser.DOUBLE_PRECISION = 286;
ImpalaSqlParser.LINE_COMMENT = 287;
ImpalaSqlParser.BRACKETED_COMMENT = 288;
ImpalaSqlParser.WHITE_SPACE = 289;
ImpalaSqlParser.RULE_program = 0;
ImpalaSqlParser.RULE_singleStatement = 1;
ImpalaSqlParser.RULE_sqlStatement = 2;
ImpalaSqlParser.RULE_useStatement = 3;
ImpalaSqlParser.RULE_createStatement = 4;
ImpalaSqlParser.RULE_createTableSelect = 5;
ImpalaSqlParser.RULE_createTableLike = 6;
ImpalaSqlParser.RULE_createKuduTableAsSelect = 7;
ImpalaSqlParser.RULE_createView = 8;
ImpalaSqlParser.RULE_createSchema = 9;
ImpalaSqlParser.RULE_createRole = 10;
ImpalaSqlParser.RULE_createAggregateFunction = 11;
ImpalaSqlParser.RULE_createFunction = 12;
ImpalaSqlParser.RULE_alterStatement = 13;
ImpalaSqlParser.RULE_alterDatabase = 14;
ImpalaSqlParser.RULE_alterStatsKey = 15;
ImpalaSqlParser.RULE_alterPartitionCache = 16;
ImpalaSqlParser.RULE_changeColumnDefine = 17;
ImpalaSqlParser.RULE_alterDropSingleColumn = 18;
ImpalaSqlParser.RULE_alterTableOwner = 19;
ImpalaSqlParser.RULE_replaceOrAddColumns = 20;
ImpalaSqlParser.RULE_addSingleColumn = 21;
ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly = 22;
ImpalaSqlParser.RULE_addPartitionByRangeOrValue = 23;
ImpalaSqlParser.RULE_alterFormat = 24;
ImpalaSqlParser.RULE_recoverPartitions = 25;
ImpalaSqlParser.RULE_dropPartitionByRangeOrValue = 26;
ImpalaSqlParser.RULE_alterView = 27;
ImpalaSqlParser.RULE_renameView = 28;
ImpalaSqlParser.RULE_alterViewOwner = 29;
ImpalaSqlParser.RULE_renameTable = 30;
ImpalaSqlParser.RULE_alterUnSetOrSetViewTblProperties = 31;
ImpalaSqlParser.RULE_truncateTableStatement = 32;
ImpalaSqlParser.RULE_describeStatement = 33;
ImpalaSqlParser.RULE_computeStatement = 34;
ImpalaSqlParser.RULE_computeStats = 35;
ImpalaSqlParser.RULE_computeIncrementalStats = 36;
ImpalaSqlParser.RULE_dropStatement = 37;
ImpalaSqlParser.RULE_dropSchema = 38;
ImpalaSqlParser.RULE_dropView = 39;
ImpalaSqlParser.RULE_dropTable = 40;
ImpalaSqlParser.RULE_dropIncrementalStats = 41;
ImpalaSqlParser.RULE_dropFunction = 42;
ImpalaSqlParser.RULE_dropRole = 43;
ImpalaSqlParser.RULE_grantStatement = 44;
ImpalaSqlParser.RULE_grantRole = 45;
ImpalaSqlParser.RULE_grant = 46;
ImpalaSqlParser.RULE_revokeStatement = 47;
ImpalaSqlParser.RULE_revokeRole = 48;
ImpalaSqlParser.RULE_revoke = 49;
ImpalaSqlParser.RULE_insertStatement = 50;
ImpalaSqlParser.RULE_deleteStatement = 51;
ImpalaSqlParser.RULE_delete = 52;
ImpalaSqlParser.RULE_deleteTableRef = 53;
ImpalaSqlParser.RULE_updateStatement = 54;
ImpalaSqlParser.RULE_upsertStatement = 55;
ImpalaSqlParser.RULE_showStatement = 56;
ImpalaSqlParser.RULE_showSchemas = 57;
ImpalaSqlParser.RULE_showTables = 58;
ImpalaSqlParser.RULE_showFunctions = 59;
ImpalaSqlParser.RULE_showCreateTable = 60;
ImpalaSqlParser.RULE_showCreateView = 61;
ImpalaSqlParser.RULE_showTableStats = 62;
ImpalaSqlParser.RULE_showColumnStats = 63;
ImpalaSqlParser.RULE_showPartitions = 64;
ImpalaSqlParser.RULE_showFiles = 65;
ImpalaSqlParser.RULE_showRoles = 66;
ImpalaSqlParser.RULE_showRoleGrant = 67;
ImpalaSqlParser.RULE_showGrants = 68;
ImpalaSqlParser.RULE_showDatabaseGrant = 69;
ImpalaSqlParser.RULE_showTableGrant = 70;
ImpalaSqlParser.RULE_showColumnGrant = 71;
ImpalaSqlParser.RULE_addCommentStatement = 72;
ImpalaSqlParser.RULE_addDatabaseComments = 73;
ImpalaSqlParser.RULE_addTableComments = 74;
ImpalaSqlParser.RULE_addColumnComments = 75;
ImpalaSqlParser.RULE_explainStatement = 76;
ImpalaSqlParser.RULE_setStatement = 77;
ImpalaSqlParser.RULE_shutdownStatement = 78;
ImpalaSqlParser.RULE_invalidateMetaStatement = 79;
ImpalaSqlParser.RULE_loadDataStatement = 80;
ImpalaSqlParser.RULE_refreshStatement = 81;
ImpalaSqlParser.RULE_refreshMeta = 82;
ImpalaSqlParser.RULE_refreshAuth = 83;
ImpalaSqlParser.RULE_refreshFunction = 84;
ImpalaSqlParser.RULE_ifExists = 85;
ImpalaSqlParser.RULE_ifNotExists = 86;
ImpalaSqlParser.RULE_tableNameCreate = 87;
ImpalaSqlParser.RULE_databaseNameCreate = 88;
ImpalaSqlParser.RULE_viewNameCreate = 89;
ImpalaSqlParser.RULE_functionNameCreate = 90;
ImpalaSqlParser.RULE_columnNamePathCreate = 91;
ImpalaSqlParser.RULE_databaseNamePath = 92;
ImpalaSqlParser.RULE_tableNamePath = 93;
ImpalaSqlParser.RULE_viewNamePath = 94;
ImpalaSqlParser.RULE_functionNamePath = 95;
ImpalaSqlParser.RULE_emptyColumn = 96;
ImpalaSqlParser.RULE_columnNamePath = 97;
ImpalaSqlParser.RULE_columnName = 98;
ImpalaSqlParser.RULE_columnNameAllowEmpty = 99;
ImpalaSqlParser.RULE_tableOrViewPath = 100;
ImpalaSqlParser.RULE_createCommonItem = 101;
ImpalaSqlParser.RULE_assignmentList = 102;
ImpalaSqlParser.RULE_assignmentItem = 103;
ImpalaSqlParser.RULE_viewColumns = 104;
ImpalaSqlParser.RULE_viewColumnItem = 105;
ImpalaSqlParser.RULE_queryStatement = 106;
ImpalaSqlParser.RULE_with = 107;
ImpalaSqlParser.RULE_constraintSpecification = 108;
ImpalaSqlParser.RULE_foreignKeySpecification = 109;
ImpalaSqlParser.RULE_columnSpec = 110;
ImpalaSqlParser.RULE_columnDefinition = 111;
ImpalaSqlParser.RULE_kuduTableElement = 112;
ImpalaSqlParser.RULE_kuduColumnDefinition = 113;
ImpalaSqlParser.RULE_commentClause = 114;
ImpalaSqlParser.RULE_columnSpecWithKudu = 115;
ImpalaSqlParser.RULE_createColumnSpecWithKudu = 116;
ImpalaSqlParser.RULE_kuduAttributes = 117;
ImpalaSqlParser.RULE_kuduStorageAttr = 118;
ImpalaSqlParser.RULE_fileFormat = 119;
ImpalaSqlParser.RULE_kuduPartitionClause = 120;
ImpalaSqlParser.RULE_hashClause = 121;
ImpalaSqlParser.RULE_rangeClause = 122;
ImpalaSqlParser.RULE_kuduPartitionSpec = 123;
ImpalaSqlParser.RULE_cacheSpec = 124;
ImpalaSqlParser.RULE_rangeOperator = 125;
ImpalaSqlParser.RULE_partitionCol = 126;
ImpalaSqlParser.RULE_likeClause = 127;
ImpalaSqlParser.RULE_properties = 128;
ImpalaSqlParser.RULE_partitionedBy = 129;
ImpalaSqlParser.RULE_sortedBy = 130;
ImpalaSqlParser.RULE_rowFormat = 131;
ImpalaSqlParser.RULE_property = 132;
ImpalaSqlParser.RULE_queryNoWith = 133;
ImpalaSqlParser.RULE_queryTerm = 134;
ImpalaSqlParser.RULE_queryPrimary = 135;
ImpalaSqlParser.RULE_sortItem = 136;
ImpalaSqlParser.RULE_querySpecification = 137;
ImpalaSqlParser.RULE_selectList = 138;
ImpalaSqlParser.RULE_whereClause = 139;
ImpalaSqlParser.RULE_havingClause = 140;
ImpalaSqlParser.RULE_groupBy = 141;
ImpalaSqlParser.RULE_groupingElement = 142;
ImpalaSqlParser.RULE_groupingSet = 143;
ImpalaSqlParser.RULE_namedQuery = 144;
ImpalaSqlParser.RULE_setQuantifier = 145;
ImpalaSqlParser.RULE_selectItem = 146;
ImpalaSqlParser.RULE_columnAlias = 147;
ImpalaSqlParser.RULE_selectLiteralColumnName = 148;
ImpalaSqlParser.RULE_selectExpressionColumnName = 149;
ImpalaSqlParser.RULE_tableAllColumns = 150;
ImpalaSqlParser.RULE_relation = 151;
ImpalaSqlParser.RULE_joinType = 152;
ImpalaSqlParser.RULE_joinCriteria = 153;
ImpalaSqlParser.RULE_sampledRelation = 154;
ImpalaSqlParser.RULE_aliasedRelation = 155;
ImpalaSqlParser.RULE_columnAliases = 156;
ImpalaSqlParser.RULE_relationPrimary = 157;
ImpalaSqlParser.RULE_atomSubQueryTableSource = 158;
ImpalaSqlParser.RULE_subQueryRelation = 159;
ImpalaSqlParser.RULE_unnest = 160;
ImpalaSqlParser.RULE_parenthesizedRelation = 161;
ImpalaSqlParser.RULE_columnItem = 162;
ImpalaSqlParser.RULE_expression = 163;
ImpalaSqlParser.RULE_booleanExpression = 164;
ImpalaSqlParser.RULE_predicate = 165;
ImpalaSqlParser.RULE_valueExpression = 166;
ImpalaSqlParser.RULE_functionCallExpression = 167;
ImpalaSqlParser.RULE_primaryExpression = 168;
ImpalaSqlParser.RULE_stringLiteral = 169;
ImpalaSqlParser.RULE_comparisonOperator = 170;
ImpalaSqlParser.RULE_comparisonQuantifier = 171;
ImpalaSqlParser.RULE_interval = 172;
ImpalaSqlParser.RULE_intervalField = 173;
ImpalaSqlParser.RULE_type = 174;
ImpalaSqlParser.RULE_dataType = 175;
ImpalaSqlParser.RULE_typeParameter = 176;
ImpalaSqlParser.RULE_baseType = 177;
ImpalaSqlParser.RULE_whenClause = 178;
ImpalaSqlParser.RULE_filter = 179;
ImpalaSqlParser.RULE_partitionByClause = 180;
ImpalaSqlParser.RULE_over = 181;
ImpalaSqlParser.RULE_windowFrame = 182;
ImpalaSqlParser.RULE_frameBound = 183;
ImpalaSqlParser.RULE_pathElement = 184;
ImpalaSqlParser.RULE_pathSpecification = 185;
ImpalaSqlParser.RULE_privilege = 186;
ImpalaSqlParser.RULE_objectType = 187;
ImpalaSqlParser.RULE_qualifiedName = 188;
ImpalaSqlParser.RULE_qualifiedNameAllowEmpty = 189;
ImpalaSqlParser.RULE_principal = 190;
ImpalaSqlParser.RULE_identifier = 191;
ImpalaSqlParser.RULE_number = 192;
ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName = 193;
ImpalaSqlParser.RULE_nonReserved = 194;
ImpalaSqlParser.literalNames = [
    null, "'ADD'", "'ALL'", "'ANALYTIC'", "'ALTER'", "'AND'", "'ANY'",
    "'ANTI'", "'ARRAY'", "'AS'", "'ASC'", "'AT'", "'AGGREGATE'", "'AUTHORIZATION'",
    "'BERNOULLI'", "'BETWEEN'", "'BLOCK_SIZE'", "'PARTITIONED'", "'PREPARE_FN'",
    "'EXTERNAL'", "'CLOSEFN'", "'SORT'", "'PURGE'", "'STORED'", "'LOCATION'",
    "'TBLPROPERTIES'", "'BY'", "'CASCADE'", "'CASE'", "'CAST'", "'CACHED'",
    "'CHANGE'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMPRESSION'",
    "'COMPUTE'", "'CREATE'", "'CROSS'", "'CURRENT'", "'CURRENT_DATE'",
    "'CURRENT_PATH'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURRENT_USER'",
    "'DATA'", "'DATABASE'", "'DATABASES'", "'DAY'", "'DAYS'", "'DELETE'",
    "'DEFAULT'", "'DELIMITED'", "'DISABLE'", "'UPDATE'", "'DESC'", "'DESCRIBE'",
    "'DISTINCT'", "'DROP'", "'ELSE'", "'ENCODING'", "'END'", "'ESCAPE'",
    "'ESCAPED'", "'EXCEPT'", "'EXCLUDING'", "'EXISTS'", "'EXPLAIN'",
    "'EXTRACT'", "'EXTENDED'", "'FALSE'", "'FIELDS'", "'FILEFORMAT'",
    "'FILES'", "'FILTER'", "'FIRST'", "'FINALIZE_FN'", "'FOLLOWING'",
    "'FOR'", "'FORMAT'", "'FORMATTED'", "'FOREIGN'", "'FROM'", "'FULL'",
    "'FUNCTION'", "'FUNCTIONS'", "'GRANT'", "'GROUP'", "'GROUPING'",
    "'HASH'", "'HAVING'", "'HOUR'", "'HOURS'", "'IF'", "'IN'", "'INCLUDING'",
    "'INCREMENTAL'", "'INNER'", "'INPATH'", "'INSERT'", "'INTERSECT'",
    "'INTERVAL'", "'INTERMEDIATE'", "'INTO'", "'INIT_FN'", "'IREGEXP'",
    "'ILIKE'", "'INVALIDATE'", "'IS'", "'JOIN'", "'KEY'", "'KUDU'",
    "'LAST'", "'LATERAL'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LINES'",
    "'LOAD'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'METADATA'", "'MINUTE'",
    "'MINUTES'", "'MONTH'", "'MONTHS'", "'MERGE_FN'", "'NFC'", "'NFD'",
    "'NFKC'", "'NFKD'", "'NORMALIZE'", "'NOT'", "'NULL'", "'NULLS'",
    "'OFFSET'", "'ON'", "'OPTION'", "'OR'", "'ORDER'", "'ORDINALITY'",
    "'OUTER'", "'OWNER'", "'OVER'", "'OVERWRITE'", "'PARTITION'", "'PARTITIONS'",
    "'PARQUET'", "'POSITION'", "'PRECEDING'", "'PRIMARY'", "'REPLICATION'",
    "'PRIVILEGES'", "'PROPERTIES'", "'RANGE'", "'RECOVER'", "'RENAME'",
    "'REPEATABLE'", "'REPLACE'", "'RESTRICT'", "'RETURNS'", "'REVOKE'",
    "'REFRESH'", "'REGEXP'", "'RLIKE'", "'RIGHT'", "'ROLE'", "'ROLES'",
    "'ROW'", "'ROWS'", "'SCHEMA'", "'SCHEMAS'", "'SECOND'", "'SECONDS'",
    "'SELECT'", "'SERDEPROPERTIES'", "'SET'", "'SEMI'", "'SERVER'",
    "'SHOW'", "'SHUTDOWN'", "'SOME'", "'STATS'", "'STRAIGHT_JOIN'",
    "'SUBSTRING'", "'SYSTEM'", "'SYMBOL'", "'SERIALIZE_FN'", "'TABLE'",
    "'TABLES'", "'TABLESAMPLE'", "'TERMINATED '", "'THEN'", "'TO'",
    "'TRUE'", "'TRY_CAST'", "'TRUNCATE'", "'UNCACHED'", "'UESCAPE'",
    "'UNBOUNDED'", "'UNION'", "'UNNEST'", "'UNSET'", "'USE'", "'USER'",
    "'USING'", "'UPDATE_FN'", "'UPSERT'", "'UNKNOWN'", "'URI'", "'VALUE'",
    "'VALUES'", "'VIEW'", "'VIEWS'", "'WHEN'", "'WHERE'", "'WITH'",
    "'YEAR'", "'YEARS'", "'TEXTFILE'", "'ORC'", "'AVRO'", "'SEQUENCEFILE'",
    "'RCFILE'", "'REFERENCES'", "'NOVALIDATE'", "'RELY'", "'BINARY'",
    "'BIGINT'", "'BOOLEAN'", "'CHAR'", "'DATE'", "'DECIMAL'", "'DOUBLE'",
    "'INT'", "'MAP'", "'REAL'", "'SMALLINT'", "'FLOAT'", "'STRING'",
    "'STRUCT'", "'TIMESTAMP'", "'TINYINT'", "'VARCHAR'", "'COMPLEX'",
    "''NUMDVS''", "''NUMNULLS''", "''AVGSIZE''", "''MAXSIZE''", "'='",
    null, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'",
    "'%'", "'||'", "'.'", "';'", "','", "':'", "'('", "')'", "'['",
    "']'", "'{'", "'}'", "'|'", "'?'", "'->'"
];
ImpalaSqlParser.symbolicNames = [
    null, "KW_ADD", "KW_ALL", "KW_ANALYTIC", "KW_ALTER", "KW_AND", "KW_ANY",
    "KW_ANTI", "KW_ARRAY", "KW_AS", "KW_ASC", "KW_AT", "KW_AGGREGATE",
    "KW_AUTHORIZATION", "KW_BERNOULLI", "KW_BETWEEN", "KW_BLOCK_SIZE",
    "KW_PARTITIONED", "KW_PREPARE_FN", "KW_EXTERNAL", "KW_CLOSEFN",
    "KW_SORT", "KW_PURGE", "KW_STORED", "KW_LOCATION", "KW_TBLPROPERTIES",
    "KW_BY", "KW_CASCADE", "KW_CASE", "KW_CAST", "KW_CACHED", "KW_CHANGE",
    "KW_COLUMN", "KW_COLUMNS", "KW_COMMENT", "KW_COMPRESSION", "KW_COMPUTE",
    "KW_CREATE", "KW_CROSS", "KW_CURRENT", "KW_CURRENT_DATE", "KW_CURRENT_PATH",
    "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP", "KW_CURRENT_USER", "KW_DATA",
    "KW_DATABASE", "KW_DATABASES", "KW_DAY", "KW_DAYS", "KW_DELETE",
    "KW_DEFAULT", "KW_DELIMITED", "KW_DISABLE", "KW_UPDATE", "KW_DESC",
    "KW_DESCRIBE", "KW_DISTINCT", "KW_DROP", "KW_ELSE", "KW_ENCODING",
    "KW_END", "KW_ESCAPE", "KW_ESCAPED", "KW_EXCEPT", "KW_EXCLUDING",
    "KW_EXISTS", "KW_EXPLAIN", "KW_EXTRACT", "KW_EXTENDED", "KW_FALSE",
    "KW_FIELDS", "KW_FILEFORMAT", "KW_FILES", "KW_FILTER", "KW_FIRST",
    "KW_FINALIZE_FN", "KW_FOLLOWING", "KW_FOR", "KW_FORMAT", "KW_FORMATTED",
    "KW_FOREIGN", "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS",
    "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_HASH", "KW_HAVING", "KW_HOUR",
    "KW_HOURS", "KW_IF", "KW_IN", "KW_INCLUDING", "KW_INCREMENTAL",
    "KW_INNER", "KW_INPATH", "KW_INSERT", "KW_INTERSECT", "KW_INTERVAL",
    "KW_INTERMEDIATE", "KW_INTO", "KW_INIT_FN", "KW_IREGEXP", "KW_ILIKE",
    "KW_INVALIDATE", "KW_IS", "KW_JOIN", "KW_KEY", "KW_KUDU", "KW_LAST",
    "KW_LATERAL", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LINES", "KW_LOAD",
    "KW_LOCALTIME", "KW_LOCALTIMESTAMP", "KW_METADATA", "KW_MINUTE",
    "KW_MINUTES", "KW_MONTH", "KW_MONTHS", "KW_MERGE_FN", "KW_NFC",
    "KW_NFD", "KW_NFKC", "KW_NFKD", "KW_NORMALIZE", "KW_NOT", "KW_NULL",
    "KW_NULLS", "KW_OFFSET", "KW_ON", "KW_OPTION", "KW_OR", "KW_ORDER",
    "KW_ORDINALITY", "KW_OUTER", "KW_OWNER", "KW_OVER", "KW_OVERWRITE",
    "KW_PARTITION", "KW_PARTITIONS", "KW_PARQUET", "KW_POSITION", "KW_PRECEDING",
    "KW_PRIMARY", "KW_REPLICATION", "KW_PRIVILEGES", "KW_PROPERTIES",
    "KW_RANGE", "KW_RECOVER", "KW_RENAME", "KW_REPEATABLE", "KW_REPLACE",
    "KW_RESTRICT", "KW_RETURNS", "KW_REVOKE", "KW_REFRESH", "KW_REGEXP",
    "KW_RLIKE", "KW_RIGHT", "KW_ROLE", "KW_ROLES", "KW_ROW", "KW_ROWS",
    "KW_SCHEMA", "KW_SCHEMAS", "KW_SECOND", "KW_SECONDS", "KW_SELECT",
    "KW_SERDEPROPERTIES", "KW_SET", "KW_SEMI", "KW_SERVER", "KW_SHOW",
    "KW_SHUTDOWN", "KW_SOME", "KW_STATS", "KW_STRAIGHT_JOIN", "KW_SUBSTRING",
    "KW_SYSTEM", "KW_SYMBOL", "KW_SERIALIZE_FN", "KW_TABLE", "KW_TABLES",
    "KW_TABLESAMPLE", "KW_TERMINATED", "KW_THEN", "KW_TO", "KW_TRUE",
    "KW_TRY_CAST", "KW_TRUNCATE", "KW_UNCACHED", "KW_UESCAPE", "KW_UNBOUNDED",
    "KW_UNION", "KW_UNNEST", "KW_UNSET", "KW_USE", "KW_USER", "KW_USING",
    "KW_UPDATE_FN", "KW_UPSERT", "KW_UNKNOWN", "KW_URI", "KW_VALUE",
    "KW_VALUES", "KW_VIEW", "KW_VIEWS", "KW_WHEN", "KW_WHERE", "KW_WITH",
    "KW_YEAR", "KW_YEARS", "KW_TEXTFILE", "KW_ORC", "KW_AVRO", "KW_SEQUENCEFILE",
    "KW_RCFILE", "KW_REFERENCES", "KW_NOVALIDATE", "KW_RELY", "KW_BINARY",
    "KW_BIGINT", "KW_BOOLEAN", "KW_CHAR", "KW_DATE", "KW_DECIMAL", "KW_DOUBLE",
    "KW_INT", "KW_MAP", "KW_REAL", "KW_SMALLINT", "KW_FLOAT", "KW_STRING",
    "KW_STRUCT", "KW_TIMESTAMP", "KW_TINYINT", "KW_VARCHAR", "KW_COMPLEX",
    "STATS_NUMDVS", "STATS_NUMNULLS", "STATS_AVGSIZE", "STATS_MAXSIZE",
    "EQ", "NEQ", "LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK",
    "SLASH", "PERCENT", "CONCAT", "DOT", "SEMICOLON", "COMMA", "COLON",
    "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "BITWISEOR",
    "QUESTION", "RIGHT_ARROW", "STRING", "UNICODE_STRING", "BINARY_LITERAL",
    "INTEGER_VALUE", "DECIMAL_VALUE", "DOUBLE_VALUE", "IDENTIFIER",
    "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER",
    "TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION",
    "LINE_COMMENT", "BRACKETED_COMMENT", "WHITE_SPACE"
];
ImpalaSqlParser.ruleNames = [
    "program", "singleStatement", "sqlStatement", "useStatement", "createStatement",
    "createTableSelect", "createTableLike", "createKuduTableAsSelect",
    "createView", "createSchema", "createRole", "createAggregateFunction",
    "createFunction", "alterStatement", "alterDatabase", "alterStatsKey",
    "alterPartitionCache", "changeColumnDefine", "alterDropSingleColumn",
    "alterTableOwner", "replaceOrAddColumns", "addSingleColumn", "alterTableNonKuduOrKuduOnly",
    "addPartitionByRangeOrValue", "alterFormat", "recoverPartitions",
    "dropPartitionByRangeOrValue", "alterView", "renameView", "alterViewOwner",
    "renameTable", "alterUnSetOrSetViewTblProperties", "truncateTableStatement",
    "describeStatement", "computeStatement", "computeStats", "computeIncrementalStats",
    "dropStatement", "dropSchema", "dropView", "dropTable", "dropIncrementalStats",
    "dropFunction", "dropRole", "grantStatement", "grantRole", "grant",
    "revokeStatement", "revokeRole", "revoke", "insertStatement", "deleteStatement",
    "delete", "deleteTableRef", "updateStatement", "upsertStatement",
    "showStatement", "showSchemas", "showTables", "showFunctions", "showCreateTable",
    "showCreateView", "showTableStats", "showColumnStats", "showPartitions",
    "showFiles", "showRoles", "showRoleGrant", "showGrants", "showDatabaseGrant",
    "showTableGrant", "showColumnGrant", "addCommentStatement", "addDatabaseComments",
    "addTableComments", "addColumnComments", "explainStatement", "setStatement",
    "shutdownStatement", "invalidateMetaStatement", "loadDataStatement",
    "refreshStatement", "refreshMeta", "refreshAuth", "refreshFunction",
    "ifExists", "ifNotExists", "tableNameCreate", "databaseNameCreate",
    "viewNameCreate", "functionNameCreate", "columnNamePathCreate",
    "databaseNamePath", "tableNamePath", "viewNamePath", "functionNamePath",
    "emptyColumn", "columnNamePath", "columnName", "columnNameAllowEmpty",
    "tableOrViewPath", "createCommonItem", "assignmentList", "assignmentItem",
    "viewColumns", "viewColumnItem", "queryStatement", "with", "constraintSpecification",
    "foreignKeySpecification", "columnSpec", "columnDefinition", "kuduTableElement",
    "kuduColumnDefinition", "commentClause", "columnSpecWithKudu", "createColumnSpecWithKudu",
    "kuduAttributes", "kuduStorageAttr", "fileFormat", "kuduPartitionClause",
    "hashClause", "rangeClause", "kuduPartitionSpec", "cacheSpec", "rangeOperator",
    "partitionCol", "likeClause", "properties", "partitionedBy", "sortedBy",
    "rowFormat", "property", "queryNoWith", "queryTerm", "queryPrimary",
    "sortItem", "querySpecification", "selectList", "whereClause", "havingClause",
    "groupBy", "groupingElement", "groupingSet", "namedQuery", "setQuantifier",
    "selectItem", "columnAlias", "selectLiteralColumnName", "selectExpressionColumnName",
    "tableAllColumns", "relation", "joinType", "joinCriteria", "sampledRelation",
    "aliasedRelation", "columnAliases", "relationPrimary", "atomSubQueryTableSource",
    "subQueryRelation", "unnest", "parenthesizedRelation", "columnItem",
    "expression", "booleanExpression", "predicate", "valueExpression",
    "functionCallExpression", "primaryExpression", "stringLiteral",
    "comparisonOperator", "comparisonQuantifier", "interval", "intervalField",
    "type", "dataType", "typeParameter", "baseType", "whenClause", "filter",
    "partitionByClause", "over", "windowFrame", "frameBound", "pathElement",
    "pathSpecification", "privilege", "objectType", "qualifiedName",
    "qualifiedNameAllowEmpty", "principal", "identifier", "number",
    "reservedKeywordsUsedAsFuncName", "nonReserved",
];
ImpalaSqlParser._serializedATN = [
    4, 1, 289, 2831, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
    7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
    13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
    20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7,
    26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7,
    39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
    46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7,
    52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2,
    59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7,
    65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2,
    72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7,
    78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2,
    85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7,
    91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2,
    98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103,
    2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
    7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114,
    2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120,
    7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125,
    2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131,
    7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136,
    2, 137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142,
    7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145, 7, 145, 2, 146, 7, 146, 2, 147, 7, 147,
    2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151, 7, 151, 2, 152, 7, 152, 2, 153,
    7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157, 7, 157, 2, 158, 7, 158,
    2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163, 7, 163, 2, 164,
    7, 164, 2, 165, 7, 165, 2, 166, 7, 166, 2, 167, 7, 167, 2, 168, 7, 168, 2, 169, 7, 169,
    2, 170, 7, 170, 2, 171, 7, 171, 2, 172, 7, 172, 2, 173, 7, 173, 2, 174, 7, 174, 2, 175,
    7, 175, 2, 176, 7, 176, 2, 177, 7, 177, 2, 178, 7, 178, 2, 179, 7, 179, 2, 180, 7, 180,
    2, 181, 7, 181, 2, 182, 7, 182, 2, 183, 7, 183, 2, 184, 7, 184, 2, 185, 7, 185, 2, 186,
    7, 186, 2, 187, 7, 187, 2, 188, 7, 188, 2, 189, 7, 189, 2, 190, 7, 190, 2, 191, 7, 191,
    2, 192, 7, 192, 2, 193, 7, 193, 2, 194, 7, 194, 1, 0, 5, 0, 392, 8, 0, 10, 0, 12, 0, 395,
    9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 401, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 425,
    8, 2, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 438, 8, 4, 1, 5,
    1, 5, 3, 5, 442, 8, 5, 1, 5, 1, 5, 3, 5, 446, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 453,
    8, 5, 10, 5, 12, 5, 456, 9, 5, 1, 5, 1, 5, 3, 5, 460, 8, 5, 1, 5, 1, 5, 3, 5, 464, 8, 5, 1,
    5, 1, 5, 1, 5, 1, 5, 3, 5, 470, 8, 5, 3, 5, 472, 8, 5, 1, 5, 1, 5, 1, 5, 3, 5, 477, 8, 5, 1,
    6, 1, 6, 3, 6, 481, 8, 6, 1, 6, 1, 6, 3, 6, 485, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 492,
    8, 6, 1, 6, 1, 6, 1, 6, 3, 6, 497, 8, 6, 1, 6, 1, 6, 1, 7, 1, 7, 3, 7, 503, 8, 7, 1, 7, 1, 7,
    3, 7, 507, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 5, 7, 514, 8, 7, 10, 7, 12, 7, 517, 9, 7, 1,
    7, 1, 7, 1, 7, 1, 7, 3, 7, 523, 8, 7, 1, 7, 1, 7, 3, 7, 527, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 532,
    8, 7, 3, 7, 534, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 539, 8, 7, 1, 7, 1, 7, 3, 7, 543, 8, 7, 1, 7,
    1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 550, 8, 7, 1, 7, 1, 7, 3, 7, 554, 8, 7, 1, 8, 1, 8, 1, 8, 3, 8,
    559, 8, 8, 1, 8, 1, 8, 3, 8, 563, 8, 8, 1, 8, 3, 8, 566, 8, 8, 1, 8, 1, 8, 3, 8, 570, 8, 8,
    1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 3, 9, 578, 8, 9, 1, 9, 1, 9, 3, 9, 582, 8, 9, 1, 9, 1, 9,
    3, 9, 586, 8, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 3, 11, 594, 8, 11, 1, 11, 1, 11,
    3, 11, 598, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 605, 8, 11, 10, 11, 12, 11,
    608, 9, 11, 3, 11, 610, 8, 11, 1, 11, 3, 11, 613, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3,
    11, 619, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 626, 8, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 637, 8, 11, 1, 11, 1, 11, 1, 11, 3, 11,
    642, 8, 11, 1, 11, 1, 11, 1, 11, 3, 11, 647, 8, 11, 1, 11, 1, 11, 1, 11, 3, 11, 652, 8,
    11, 1, 12, 1, 12, 1, 12, 3, 12, 657, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 664,
    8, 12, 10, 12, 12, 12, 667, 9, 12, 3, 12, 669, 8, 12, 1, 12, 3, 12, 672, 8, 12, 1, 12,
    1, 12, 3, 12, 676, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 3, 13, 702, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 1, 15, 3, 15, 727, 8, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16,
    736, 8, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 746, 8, 16, 1,
    16, 3, 16, 749, 8, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1,
    18, 1, 18, 1, 18, 3, 18, 763, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1,
    19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 781, 8, 20, 3, 20, 783,
    8, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 5, 20, 790, 8, 20, 10, 20, 12, 20, 793, 9, 20,
    1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 803, 8, 21, 1, 21, 1, 21,
    1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 3, 22, 812, 8, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22,
    3, 22, 819, 8, 22, 1, 22, 1, 22, 3, 22, 823, 8, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3,
    23, 830, 8, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 836, 8, 23, 1, 23, 3, 23, 839, 8, 23,
    1, 23, 1, 23, 1, 23, 3, 23, 844, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 851, 8,
    24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3,
    24, 865, 8, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1,
    26, 3, 26, 878, 8, 26, 1, 26, 1, 26, 1, 26, 3, 26, 883, 8, 26, 1, 26, 1, 26, 1, 26, 3, 26,
    888, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 894, 8, 27, 1, 27, 1, 27, 1, 27, 1, 28, 1,
    28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1,
    29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 1,
    31, 1, 31, 1, 32, 1, 32, 3, 32, 930, 8, 32, 1, 32, 3, 32, 933, 8, 32, 1, 32, 1, 32, 1, 33,
    1, 33, 3, 33, 939, 8, 33, 1, 33, 3, 33, 942, 8, 33, 1, 33, 1, 33, 1, 34, 1, 34, 3, 34, 948,
    8, 34, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 954, 8, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35,
    1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 966, 8, 35, 3, 35, 968, 8, 35, 1, 36, 1, 36, 1,
    36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 3, 36, 979, 8, 36, 1, 37, 1, 37, 1, 37, 1,
    37, 1, 37, 1, 37, 3, 37, 987, 8, 37, 1, 38, 1, 38, 1, 38, 3, 38, 992, 8, 38, 1, 38, 1, 38,
    3, 38, 996, 8, 38, 1, 39, 1, 39, 1, 39, 3, 39, 1001, 8, 39, 1, 39, 1, 39, 1, 40, 1, 40,
    1, 40, 3, 40, 1008, 8, 40, 1, 40, 1, 40, 3, 40, 1012, 8, 40, 1, 41, 1, 41, 3, 41, 1016,
    8, 41, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 1022, 8, 41, 1, 42, 1, 42, 3, 42, 1026, 8, 42,
    1, 42, 1, 42, 3, 42, 1030, 8, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 5, 42, 1037, 8, 42,
    10, 42, 12, 42, 1040, 9, 42, 3, 42, 1042, 8, 42, 1, 42, 3, 42, 1045, 8, 42, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 44, 1, 44, 3, 44, 1053, 8, 44, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1,
    45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46, 1067, 8, 46, 1, 46, 1, 46, 1, 46, 1,
    47, 1, 47, 3, 47, 1074, 8, 47, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 48, 1, 49, 1,
    49, 1, 49, 1, 49, 3, 49, 1087, 8, 49, 1, 49, 1, 49, 1, 49, 1, 49, 3, 49, 1093, 8, 49, 1,
    49, 1, 49, 1, 49, 3, 49, 1098, 8, 49, 1, 49, 3, 49, 1101, 8, 49, 1, 50, 3, 50, 1104, 8,
    50, 1, 50, 1, 50, 1, 50, 3, 50, 1109, 8, 50, 1, 50, 1, 50, 3, 50, 1113, 8, 50, 1, 50, 1,
    50, 1, 50, 1, 50, 1, 50, 5, 50, 1120, 8, 50, 10, 50, 12, 50, 1123, 9, 50, 1, 50, 1, 50,
    3, 50, 1127, 8, 50, 1, 50, 1, 50, 1, 51, 1, 51, 3, 51, 1133, 8, 51, 1, 52, 1, 52, 3, 52,
    1137, 8, 52, 1, 52, 1, 52, 3, 52, 1141, 8, 52, 1, 53, 1, 53, 1, 53, 3, 53, 1146, 8, 53,
    1, 53, 3, 53, 1149, 8, 53, 1, 53, 1, 53, 1, 53, 1, 53, 5, 53, 1155, 8, 53, 10, 53, 12,
    53, 1158, 9, 53, 3, 53, 1160, 8, 53, 1, 53, 3, 53, 1163, 8, 53, 1, 54, 1, 54, 1, 54, 1,
    54, 1, 54, 1, 54, 1, 54, 1, 54, 5, 54, 1173, 8, 54, 10, 54, 12, 54, 1176, 9, 54, 3, 54,
    1178, 8, 54, 1, 54, 3, 54, 1181, 8, 54, 1, 55, 1, 55, 1, 55, 3, 55, 1186, 8, 55, 1, 55,
    1, 55, 3, 55, 1190, 8, 55, 1, 55, 1, 55, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56,
    1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56, 1206, 8, 56, 1, 57, 1, 57, 1, 57, 3, 57, 1211,
    8, 57, 1, 57, 1, 57, 1, 57, 5, 57, 1216, 8, 57, 10, 57, 12, 57, 1219, 9, 57, 3, 57, 1221,
    8, 57, 1, 58, 1, 58, 1, 58, 1, 58, 3, 58, 1227, 8, 58, 1, 58, 3, 58, 1230, 8, 58, 1, 58,
    1, 58, 1, 58, 5, 58, 1235, 8, 58, 10, 58, 12, 58, 1238, 9, 58, 3, 58, 1240, 8, 58, 1,
    59, 1, 59, 3, 59, 1244, 8, 59, 1, 59, 1, 59, 1, 59, 3, 59, 1249, 8, 59, 1, 59, 3, 59, 1252,
    8, 59, 1, 59, 1, 59, 1, 59, 5, 59, 1257, 8, 59, 10, 59, 12, 59, 1260, 9, 59, 3, 59, 1262,
    8, 59, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 62, 1, 62,
    1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 64, 1, 64, 3, 64, 1286, 8, 64,
    1, 64, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 3, 65,
    1300, 8, 65, 1, 65, 1, 65, 3, 65, 1304, 8, 65, 1, 66, 1, 66, 3, 66, 1308, 8, 66, 1, 66,
    1, 66, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68,
    1, 68, 1, 68, 1, 68, 1, 68, 3, 68, 1328, 8, 68, 3, 68, 1330, 8, 68, 3, 68, 1332, 8, 68,
    1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 3, 69, 1341, 8, 69, 3, 69, 1343, 8, 69,
    1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 1, 70, 3, 70, 1352, 8, 70, 3, 70, 1354, 8, 70,
    1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 3, 71, 1363, 8, 71, 3, 71, 1365, 8, 71,
    1, 72, 1, 72, 1, 72, 3, 72, 1370, 8, 72, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73,
    3, 73, 1379, 8, 73, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 3, 74, 1388, 8, 74,
    1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1397, 8, 75, 1, 76, 1, 76, 1, 76,
    1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 3, 77, 1408, 8, 77, 1, 78, 1, 78, 1, 78, 1, 78,
    3, 78, 1414, 8, 78, 1, 78, 1, 78, 1, 78, 3, 78, 1419, 8, 78, 1, 78, 3, 78, 1422, 8, 78,
    1, 78, 1, 78, 1, 79, 1, 79, 1, 79, 1, 79, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 3, 80, 1435,
    8, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 3, 80, 1445, 8, 80, 1, 80,
    1, 80, 3, 80, 1449, 8, 80, 1, 81, 1, 81, 1, 81, 3, 81, 1454, 8, 81, 1, 82, 1, 82, 1, 82,
    1, 82, 1, 82, 1, 82, 1, 82, 5, 82, 1463, 8, 82, 10, 82, 12, 82, 1466, 9, 82, 1, 82, 1,
    82, 3, 82, 1470, 8, 82, 1, 83, 1, 83, 1, 83, 1, 84, 1, 84, 1, 84, 1, 84, 1, 85, 1, 85, 1,
    85, 1, 86, 1, 86, 1, 86, 1, 86, 1, 87, 1, 87, 1, 88, 1, 88, 1, 89, 1, 89, 1, 90, 1, 90, 1,
    91, 1, 91, 1, 92, 1, 92, 1, 93, 1, 93, 1, 93, 5, 93, 1501, 8, 93, 10, 93, 12, 93, 1504,
    9, 93, 1, 94, 1, 94, 1, 94, 5, 94, 1509, 8, 94, 10, 94, 12, 94, 1512, 9, 94, 1, 95, 1,
    95, 3, 95, 1516, 8, 95, 1, 96, 1, 96, 1, 97, 1, 97, 1, 97, 3, 97, 1523, 8, 97, 1, 98, 1,
    98, 1, 99, 1, 99, 1, 99, 3, 99, 1530, 8, 99, 1, 100, 1, 100, 3, 100, 1534, 8, 100, 1,
    101, 1, 101, 1, 101, 3, 101, 1539, 8, 101, 1, 101, 3, 101, 1542, 8, 101, 1, 101, 1,
    101, 1, 101, 3, 101, 1547, 8, 101, 1, 101, 1, 101, 1, 101, 3, 101, 1552, 8, 101, 1,
    101, 1, 101, 1, 101, 3, 101, 1557, 8, 101, 1, 101, 1, 101, 3, 101, 1561, 8, 101, 1,
    101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 3, 101, 1570, 8, 101, 1, 101, 3,
    101, 1573, 8, 101, 1, 101, 1, 101, 3, 101, 1577, 8, 101, 1, 102, 1, 102, 1, 102, 5,
    102, 1582, 8, 102, 10, 102, 12, 102, 1585, 9, 102, 1, 103, 1, 103, 1, 103, 1, 103,
    1, 104, 1, 104, 3, 104, 1593, 8, 104, 1, 104, 1, 104, 3, 104, 1597, 8, 104, 5, 104,
    1599, 8, 104, 10, 104, 12, 104, 1602, 9, 104, 1, 104, 1, 104, 1, 105, 1, 105, 3, 105,
    1608, 8, 105, 1, 106, 3, 106, 1611, 8, 106, 1, 106, 1, 106, 1, 107, 1, 107, 1, 107,
    1, 107, 5, 107, 1619, 8, 107, 10, 107, 12, 107, 1622, 9, 107, 1, 108, 1, 108, 1, 108,
    1, 108, 3, 108, 1628, 8, 108, 1, 108, 1, 108, 1, 108, 3, 108, 1633, 8, 108, 1, 108,
    1, 108, 1, 108, 3, 108, 1638, 8, 108, 1, 108, 1, 108, 1, 108, 3, 108, 1643, 8, 108,
    1, 108, 1, 108, 5, 108, 1647, 8, 108, 10, 108, 12, 108, 1650, 9, 108, 3, 108, 1652,
    8, 108, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 3, 109, 1661, 8, 109,
    1, 109, 3, 109, 1664, 8, 109, 1, 109, 3, 109, 1667, 8, 109, 1, 110, 1, 110, 1, 110,
    1, 110, 3, 110, 1673, 8, 110, 1, 111, 1, 111, 1, 111, 3, 111, 1678, 8, 111, 1, 112,
    1, 112, 1, 113, 1, 113, 1, 113, 1, 113, 5, 113, 1686, 8, 113, 10, 113, 12, 113, 1689,
    9, 113, 3, 113, 1691, 8, 113, 1, 113, 3, 113, 1694, 8, 113, 1, 113, 1, 113, 3, 113,
    1698, 8, 113, 1, 114, 1, 114, 1, 114, 1, 115, 1, 115, 1, 115, 5, 115, 1706, 8, 115,
    10, 115, 12, 115, 1709, 9, 115, 3, 115, 1711, 8, 115, 1, 116, 1, 116, 1, 116, 1, 116,
    3, 116, 1717, 8, 116, 1, 116, 1, 116, 5, 116, 1721, 8, 116, 10, 116, 12, 116, 1724,
    9, 116, 3, 116, 1726, 8, 116, 1, 117, 3, 117, 1729, 8, 117, 1, 117, 1, 117, 3, 117,
    1733, 8, 117, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 3, 118,
    1743, 8, 118, 1, 119, 1, 119, 1, 120, 1, 120, 1, 120, 5, 120, 1750, 8, 120, 10, 120,
    12, 120, 1753, 9, 120, 1, 120, 1, 120, 3, 120, 1757, 8, 120, 1, 120, 3, 120, 1760,
    8, 120, 1, 121, 1, 121, 3, 121, 1764, 8, 121, 1, 121, 1, 121, 1, 121, 1, 122, 1, 122,
    3, 122, 1771, 8, 122, 1, 122, 1, 122, 1, 122, 1, 122, 1, 122, 1, 122, 5, 122, 1779,
    8, 122, 10, 122, 12, 122, 1782, 9, 122, 1, 122, 1, 122, 1, 123, 1, 123, 1, 123, 1, 123,
    1, 123, 1, 123, 1, 123, 3, 123, 1793, 8, 123, 1, 123, 1, 123, 1, 123, 1, 123, 3, 123,
    1799, 8, 123, 3, 123, 1801, 8, 123, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124,
    1, 124, 3, 124, 1810, 8, 124, 1, 124, 3, 124, 1813, 8, 124, 1, 125, 1, 125, 1, 125,
    1, 125, 1, 125, 3, 125, 1820, 8, 125, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126,
    1, 126, 1, 126, 3, 126, 1830, 8, 126, 1, 127, 1, 127, 1, 127, 1, 127, 3, 127, 1836,
    8, 127, 1, 128, 1, 128, 1, 128, 1, 128, 5, 128, 1842, 8, 128, 10, 128, 12, 128, 1845,
    9, 128, 1, 128, 1, 128, 1, 129, 1, 129, 1, 129, 1, 129, 5, 129, 1853, 8, 129, 10, 129,
    12, 129, 1856, 9, 129, 1, 129, 1, 129, 1, 130, 1, 130, 1, 130, 5, 130, 1863, 8, 130,
    10, 130, 12, 130, 1866, 9, 130, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131,
    1, 131, 3, 131, 1876, 8, 131, 3, 131, 1878, 8, 131, 1, 131, 1, 131, 1, 131, 1, 131,
    3, 131, 1884, 8, 131, 1, 132, 1, 132, 1, 132, 3, 132, 1889, 8, 132, 1, 133, 1, 133,
    1, 133, 1, 133, 1, 133, 1, 133, 5, 133, 1897, 8, 133, 10, 133, 12, 133, 1900, 9, 133,
    3, 133, 1902, 8, 133, 1, 133, 1, 133, 1, 133, 1, 133, 3, 133, 1908, 8, 133, 3, 133,
    1910, 8, 133, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 3, 134, 1918, 8, 134,
    1, 134, 1, 134, 1, 134, 1, 134, 3, 134, 1924, 8, 134, 1, 134, 5, 134, 1927, 8, 134,
    10, 134, 12, 134, 1930, 9, 134, 1, 135, 1, 135, 1, 135, 1, 135, 1, 135, 1, 135, 1, 135,
    5, 135, 1939, 8, 135, 10, 135, 12, 135, 1942, 9, 135, 1, 135, 1, 135, 1, 135, 1, 135,
    3, 135, 1948, 8, 135, 1, 136, 1, 136, 3, 136, 1952, 8, 136, 1, 136, 1, 136, 3, 136,
    1956, 8, 136, 1, 137, 1, 137, 3, 137, 1960, 8, 137, 1, 137, 3, 137, 1963, 8, 137, 1,
    137, 1, 137, 1, 137, 1, 137, 1, 137, 5, 137, 1970, 8, 137, 10, 137, 12, 137, 1973,
    9, 137, 3, 137, 1975, 8, 137, 1, 137, 3, 137, 1978, 8, 137, 1, 137, 1, 137, 1, 137,
    3, 137, 1983, 8, 137, 1, 137, 3, 137, 1986, 8, 137, 1, 138, 1, 138, 1, 138, 5, 138,
    1991, 8, 138, 10, 138, 12, 138, 1994, 9, 138, 1, 139, 1, 139, 1, 139, 3, 139, 1999,
    8, 139, 1, 140, 1, 140, 1, 140, 3, 140, 2004, 8, 140, 1, 141, 3, 141, 2007, 8, 141,
    1, 141, 1, 141, 1, 141, 5, 141, 2012, 8, 141, 10, 141, 12, 141, 2015, 9, 141, 1, 142,
    1, 142, 1, 143, 1, 143, 1, 143, 1, 143, 5, 143, 2023, 8, 143, 10, 143, 12, 143, 2026,
    9, 143, 3, 143, 2028, 8, 143, 1, 143, 1, 143, 3, 143, 2032, 8, 143, 1, 144, 1, 144,
    3, 144, 2036, 8, 144, 1, 144, 1, 144, 1, 144, 1, 145, 1, 145, 1, 146, 1, 146, 3, 146,
    2045, 8, 146, 1, 146, 1, 146, 3, 146, 2049, 8, 146, 1, 146, 1, 146, 1, 146, 3, 146,
    2054, 8, 146, 1, 147, 3, 147, 2057, 8, 147, 1, 147, 1, 147, 1, 148, 1, 148, 1, 149,
    1, 149, 1, 150, 1, 150, 1, 150, 3, 150, 2068, 8, 150, 1, 150, 1, 150, 1, 151, 1, 151,
    1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 3, 151,
    2084, 8, 151, 5, 151, 2086, 8, 151, 10, 151, 12, 151, 2089, 9, 151, 1, 152, 3, 152,
    2092, 8, 152, 1, 152, 1, 152, 3, 152, 2096, 8, 152, 1, 152, 1, 152, 3, 152, 2100, 8,
    152, 1, 152, 1, 152, 3, 152, 2104, 8, 152, 1, 152, 1, 152, 3, 152, 2108, 8, 152, 1,
    152, 1, 152, 3, 152, 2112, 8, 152, 1, 152, 1, 152, 1, 152, 1, 152, 1, 152, 1, 152, 1,
    152, 1, 152, 3, 152, 2122, 8, 152, 1, 153, 1, 153, 1, 153, 3, 153, 2127, 8, 153, 1,
    153, 1, 153, 1, 153, 1, 153, 1, 153, 5, 153, 2134, 8, 153, 10, 153, 12, 153, 2137,
    9, 153, 1, 153, 1, 153, 3, 153, 2141, 8, 153, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154,
    1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 3, 154, 2154, 8, 154, 3, 154, 2156,
    8, 154, 1, 155, 1, 155, 3, 155, 2160, 8, 155, 1, 155, 1, 155, 3, 155, 2164, 8, 155,
    3, 155, 2166, 8, 155, 1, 156, 1, 156, 1, 156, 1, 156, 5, 156, 2172, 8, 156, 10, 156,
    12, 156, 2175, 9, 156, 1, 156, 1, 156, 1, 157, 1, 157, 1, 157, 1, 157, 3, 157, 2183,
    8, 157, 1, 158, 3, 158, 2186, 8, 158, 1, 158, 1, 158, 1, 159, 1, 159, 1, 159, 1, 159,
    1, 160, 1, 160, 1, 160, 1, 160, 1, 160, 5, 160, 2199, 8, 160, 10, 160, 12, 160, 2202,
    9, 160, 1, 160, 1, 160, 1, 160, 3, 160, 2207, 8, 160, 1, 161, 1, 161, 1, 161, 1, 161,
    1, 162, 1, 162, 3, 162, 2215, 8, 162, 1, 163, 1, 163, 1, 164, 1, 164, 1, 164, 3, 164,
    2222, 8, 164, 1, 164, 1, 164, 3, 164, 2226, 8, 164, 1, 164, 1, 164, 1, 164, 1, 164,
    1, 164, 1, 164, 5, 164, 2234, 8, 164, 10, 164, 12, 164, 2237, 9, 164, 1, 165, 1, 165,
    1, 165, 1, 165, 1, 165, 1, 165, 1, 165, 1, 165, 3, 165, 2247, 8, 165, 1, 165, 1, 165,
    1, 165, 1, 165, 1, 165, 1, 165, 3, 165, 2255, 8, 165, 1, 165, 1, 165, 1, 165, 1, 165,
    1, 165, 5, 165, 2262, 8, 165, 10, 165, 12, 165, 2265, 9, 165, 1, 165, 1, 165, 1, 165,
    3, 165, 2270, 8, 165, 1, 165, 1, 165, 1, 165, 3, 165, 2275, 8, 165, 1, 165, 1, 165,
    1, 165, 1, 165, 3, 165, 2281, 8, 165, 1, 165, 1, 165, 1, 165, 1, 165, 3, 165, 2287,
    8, 165, 1, 165, 1, 165, 1, 165, 3, 165, 2292, 8, 165, 1, 165, 1, 165, 1, 165, 3, 165,
    2297, 8, 165, 1, 166, 1, 166, 1, 166, 1, 166, 3, 166, 2303, 8, 166, 1, 166, 1, 166,
    1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 5, 166, 2314, 8, 166, 10, 166,
    12, 166, 2317, 9, 166, 1, 167, 1, 167, 1, 167, 3, 167, 2322, 8, 167, 1, 167, 1, 167,
    1, 167, 5, 167, 2327, 8, 167, 10, 167, 12, 167, 2330, 9, 167, 3, 167, 2332, 8, 167,
    1, 167, 1, 167, 1, 167, 1, 167, 1, 167, 5, 167, 2339, 8, 167, 10, 167, 12, 167, 2342,
    9, 167, 3, 167, 2344, 8, 167, 1, 167, 1, 167, 3, 167, 2348, 8, 167, 1, 167, 3, 167,
    2351, 8, 167, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 3, 168, 2377, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    3, 168, 2383, 8, 168, 5, 168, 2385, 8, 168, 10, 168, 12, 168, 2388, 9, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 5, 168, 2397, 8, 168, 10, 168, 12, 168,
    2400, 9, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 3, 168, 2409,
    8, 168, 1, 168, 3, 168, 2412, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 5, 168, 2423, 8, 168, 10, 168, 12, 168, 2426, 9, 168, 3, 168,
    2428, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 4, 168, 2445, 8, 168, 11, 168, 12, 168,
    2446, 1, 168, 1, 168, 3, 168, 2451, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 4, 168,
    2457, 8, 168, 11, 168, 12, 168, 2458, 1, 168, 1, 168, 3, 168, 2463, 8, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 5, 168, 2486,
    8, 168, 10, 168, 12, 168, 2489, 9, 168, 3, 168, 2491, 8, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 3, 168, 2500, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    3, 168, 2506, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 3, 168, 2512, 8, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 3, 168, 2518, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 3, 168, 2529, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 3, 168, 2538, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 5, 168, 2558, 8, 168, 10, 168, 12, 168, 2561, 9, 168, 3, 168, 2563,
    8, 168, 1, 168, 3, 168, 2566, 8, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168,
    1, 168, 1, 168, 5, 168, 2576, 8, 168, 10, 168, 12, 168, 2579, 9, 168, 1, 169, 1, 169,
    1, 169, 1, 169, 3, 169, 2585, 8, 169, 3, 169, 2587, 8, 169, 1, 170, 1, 170, 1, 171,
    1, 171, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172,
    1, 172, 1, 172, 1, 172, 1, 172, 3, 172, 2607, 8, 172, 1, 173, 1, 173, 1, 174, 1, 174,
    1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174,
    1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 1, 174, 5, 174, 2632, 8, 174,
    10, 174, 12, 174, 2635, 9, 174, 1, 174, 1, 174, 1, 174, 1, 174, 3, 174, 2641, 8, 174,
    1, 174, 1, 174, 1, 174, 1, 174, 5, 174, 2647, 8, 174, 10, 174, 12, 174, 2650, 9, 174,
    1, 174, 1, 174, 3, 174, 2654, 8, 174, 3, 174, 2656, 8, 174, 1, 174, 1, 174, 5, 174,
    2660, 8, 174, 10, 174, 12, 174, 2663, 9, 174, 1, 175, 1, 175, 1, 176, 1, 176, 3, 176,
    2669, 8, 176, 1, 177, 1, 177, 1, 177, 1, 177, 3, 177, 2675, 8, 177, 1, 178, 1, 178,
    1, 178, 1, 178, 1, 178, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 180, 1, 180, 1, 180,
    5, 180, 2690, 8, 180, 10, 180, 12, 180, 2693, 9, 180, 1, 181, 1, 181, 1, 181, 1, 181,
    1, 181, 3, 181, 2700, 8, 181, 1, 181, 1, 181, 1, 181, 1, 181, 1, 181, 5, 181, 2707,
    8, 181, 10, 181, 12, 181, 2710, 9, 181, 3, 181, 2712, 8, 181, 1, 181, 3, 181, 2715,
    8, 181, 1, 181, 1, 181, 1, 182, 1, 182, 1, 182, 1, 182, 1, 182, 1, 182, 1, 182, 1, 182,
    3, 182, 2727, 8, 182, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183,
    1, 183, 3, 183, 2738, 8, 183, 1, 184, 1, 184, 1, 184, 1, 184, 1, 184, 3, 184, 2745,
    8, 184, 1, 185, 1, 185, 1, 185, 5, 185, 2750, 8, 185, 10, 185, 12, 185, 2753, 9, 185,
    1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186, 1, 186,
    3, 186, 2766, 8, 186, 3, 186, 2768, 8, 186, 1, 187, 1, 187, 1, 188, 1, 188, 1, 188,
    5, 188, 2775, 8, 188, 10, 188, 12, 188, 2778, 9, 188, 1, 189, 1, 189, 1, 189, 1, 189,
    1, 189, 1, 189, 3, 189, 2786, 8, 189, 1, 189, 1, 189, 1, 189, 5, 189, 2791, 8, 189,
    10, 189, 12, 189, 2794, 9, 189, 3, 189, 2796, 8, 189, 1, 190, 1, 190, 1, 190, 1, 190,
    1, 190, 1, 190, 3, 190, 2804, 8, 190, 1, 191, 1, 191, 1, 191, 1, 191, 1, 191, 3, 191,
    2811, 8, 191, 1, 192, 3, 192, 2814, 8, 192, 1, 192, 1, 192, 3, 192, 2818, 8, 192, 1,
    192, 1, 192, 3, 192, 2822, 8, 192, 1, 192, 3, 192, 2825, 8, 192, 1, 193, 1, 193, 1,
    194, 1, 194, 1, 194, 10, 791, 1464, 1648, 1687, 1707, 1722, 1751, 1780, 1854, 2386,
    6, 268, 302, 328, 332, 336, 348, 195, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24,
    26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68,
    70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108,
    110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140,
    142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172,
    174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204,
    206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236,
    238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268,
    270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300,
    302, 304, 306, 308, 310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332,
    334, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364,
    366, 368, 370, 372, 374, 376, 378, 380, 382, 384, 386, 388, 0, 34, 2, 0, 46, 46, 170,
    170, 2, 0, 166, 166, 204, 204, 1, 0, 245, 248, 2, 0, 176, 176, 202, 202, 2, 0, 69, 69,
    80, 80, 2, 0, 27, 27, 159, 159, 2, 0, 103, 103, 144, 144, 2, 0, 47, 47, 171, 171, 2,
    0, 3, 3, 12, 12, 3, 0, 87, 87, 166, 166, 204, 204, 2, 0, 178, 178, 209, 209, 2, 0, 147,
    147, 219, 223, 2, 0, 65, 65, 95, 95, 2, 0, 64, 64, 200, 200, 2, 0, 10, 10, 55, 55, 2,
    0, 75, 75, 112, 112, 2, 0, 2, 2, 57, 57, 2, 0, 14, 14, 185, 185, 3, 0, 106, 106, 115,
    115, 164, 164, 2, 0, 105, 105, 163, 163, 4, 0, 70, 70, 133, 133, 194, 194, 208, 208,
    1, 0, 255, 256, 1, 0, 257, 259, 2, 0, 70, 70, 194, 194, 1, 0, 127, 130, 1, 0, 249, 254,
    3, 0, 2, 2, 6, 6, 181, 181, 5, 0, 48, 49, 91, 92, 122, 125, 172, 173, 217, 218, 2, 0,
    8, 8, 227, 244, 2, 0, 154, 154, 169, 169, 2, 0, 77, 77, 149, 149, 4, 0, 46, 46, 178,
    178, 188, 188, 209, 209, 16, 0, 28, 29, 40, 40, 43, 43, 48, 48, 68, 68, 91, 91, 114,
    114, 122, 122, 124, 124, 158, 158, 165, 165, 172, 172, 184, 184, 196, 196, 204,
    204, 217, 217, 23, 0, 14, 14, 43, 44, 48, 49, 65, 65, 68, 68, 91, 91, 95, 95, 110, 110,
    119, 119, 122, 125, 127, 130, 137, 137, 140, 140, 152, 153, 172, 173, 180, 180,
    184, 185, 195, 195, 204, 204, 213, 213, 217, 217, 220, 220, 231, 231, 3150, 0, 393,
    1, 0, 0, 0, 2, 398, 1, 0, 0, 0, 4, 424, 1, 0, 0, 0, 6, 426, 1, 0, 0, 0, 8, 437, 1, 0, 0, 0,
    10, 439, 1, 0, 0, 0, 12, 478, 1, 0, 0, 0, 14, 500, 1, 0, 0, 0, 16, 555, 1, 0, 0, 0, 18, 574,
    1, 0, 0, 0, 20, 587, 1, 0, 0, 0, 22, 591, 1, 0, 0, 0, 24, 653, 1, 0, 0, 0, 26, 701, 1, 0,
    0, 0, 28, 703, 1, 0, 0, 0, 30, 711, 1, 0, 0, 0, 32, 730, 1, 0, 0, 0, 34, 750, 1, 0, 0, 0,
    36, 757, 1, 0, 0, 0, 38, 766, 1, 0, 0, 0, 40, 774, 1, 0, 0, 0, 42, 796, 1, 0, 0, 0, 44, 806,
    1, 0, 0, 0, 46, 824, 1, 0, 0, 0, 48, 845, 1, 0, 0, 0, 50, 866, 1, 0, 0, 0, 52, 872, 1, 0,
    0, 0, 54, 889, 1, 0, 0, 0, 56, 898, 1, 0, 0, 0, 58, 905, 1, 0, 0, 0, 60, 913, 1, 0, 0, 0,
    62, 920, 1, 0, 0, 0, 64, 927, 1, 0, 0, 0, 66, 936, 1, 0, 0, 0, 68, 947, 1, 0, 0, 0, 70, 949,
    1, 0, 0, 0, 72, 969, 1, 0, 0, 0, 74, 986, 1, 0, 0, 0, 76, 988, 1, 0, 0, 0, 78, 997, 1, 0,
    0, 0, 80, 1004, 1, 0, 0, 0, 82, 1013, 1, 0, 0, 0, 84, 1023, 1, 0, 0, 0, 86, 1046, 1, 0,
    0, 0, 88, 1052, 1, 0, 0, 0, 90, 1054, 1, 0, 0, 0, 92, 1061, 1, 0, 0, 0, 94, 1073, 1, 0,
    0, 0, 96, 1075, 1, 0, 0, 0, 98, 1082, 1, 0, 0, 0, 100, 1103, 1, 0, 0, 0, 102, 1132, 1,
    0, 0, 0, 104, 1134, 1, 0, 0, 0, 106, 1142, 1, 0, 0, 0, 108, 1164, 1, 0, 0, 0, 110, 1182,
    1, 0, 0, 0, 112, 1205, 1, 0, 0, 0, 114, 1207, 1, 0, 0, 0, 116, 1222, 1, 0, 0, 0, 118, 1241,
    1, 0, 0, 0, 120, 1263, 1, 0, 0, 0, 122, 1268, 1, 0, 0, 0, 124, 1273, 1, 0, 0, 0, 126, 1278,
    1, 0, 0, 0, 128, 1283, 1, 0, 0, 0, 130, 1290, 1, 0, 0, 0, 132, 1305, 1, 0, 0, 0, 134, 1311,
    1, 0, 0, 0, 136, 1331, 1, 0, 0, 0, 138, 1333, 1, 0, 0, 0, 140, 1344, 1, 0, 0, 0, 142, 1355,
    1, 0, 0, 0, 144, 1369, 1, 0, 0, 0, 146, 1371, 1, 0, 0, 0, 148, 1380, 1, 0, 0, 0, 150, 1389,
    1, 0, 0, 0, 152, 1398, 1, 0, 0, 0, 154, 1401, 1, 0, 0, 0, 156, 1409, 1, 0, 0, 0, 158, 1425,
    1, 0, 0, 0, 160, 1429, 1, 0, 0, 0, 162, 1453, 1, 0, 0, 0, 164, 1455, 1, 0, 0, 0, 166, 1471,
    1, 0, 0, 0, 168, 1474, 1, 0, 0, 0, 170, 1478, 1, 0, 0, 0, 172, 1481, 1, 0, 0, 0, 174, 1485,
    1, 0, 0, 0, 176, 1487, 1, 0, 0, 0, 178, 1489, 1, 0, 0, 0, 180, 1491, 1, 0, 0, 0, 182, 1493,
    1, 0, 0, 0, 184, 1495, 1, 0, 0, 0, 186, 1497, 1, 0, 0, 0, 188, 1505, 1, 0, 0, 0, 190, 1515,
    1, 0, 0, 0, 192, 1517, 1, 0, 0, 0, 194, 1522, 1, 0, 0, 0, 196, 1524, 1, 0, 0, 0, 198, 1529,
    1, 0, 0, 0, 200, 1533, 1, 0, 0, 0, 202, 1538, 1, 0, 0, 0, 204, 1578, 1, 0, 0, 0, 206, 1586,
    1, 0, 0, 0, 208, 1590, 1, 0, 0, 0, 210, 1605, 1, 0, 0, 0, 212, 1610, 1, 0, 0, 0, 214, 1614,
    1, 0, 0, 0, 216, 1623, 1, 0, 0, 0, 218, 1653, 1, 0, 0, 0, 220, 1668, 1, 0, 0, 0, 222, 1674,
    1, 0, 0, 0, 224, 1679, 1, 0, 0, 0, 226, 1681, 1, 0, 0, 0, 228, 1699, 1, 0, 0, 0, 230, 1702,
    1, 0, 0, 0, 232, 1712, 1, 0, 0, 0, 234, 1732, 1, 0, 0, 0, 236, 1742, 1, 0, 0, 0, 238, 1744,
    1, 0, 0, 0, 240, 1759, 1, 0, 0, 0, 242, 1761, 1, 0, 0, 0, 244, 1768, 1, 0, 0, 0, 246, 1800,
    1, 0, 0, 0, 248, 1812, 1, 0, 0, 0, 250, 1819, 1, 0, 0, 0, 252, 1829, 1, 0, 0, 0, 254, 1831,
    1, 0, 0, 0, 256, 1837, 1, 0, 0, 0, 258, 1848, 1, 0, 0, 0, 260, 1859, 1, 0, 0, 0, 262, 1867,
    1, 0, 0, 0, 264, 1885, 1, 0, 0, 0, 266, 1890, 1, 0, 0, 0, 268, 1911, 1, 0, 0, 0, 270, 1947,
    1, 0, 0, 0, 272, 1949, 1, 0, 0, 0, 274, 1957, 1, 0, 0, 0, 276, 1987, 1, 0, 0, 0, 278, 1995,
    1, 0, 0, 0, 280, 2000, 1, 0, 0, 0, 282, 2006, 1, 0, 0, 0, 284, 2016, 1, 0, 0, 0, 286, 2031,
    1, 0, 0, 0, 288, 2033, 1, 0, 0, 0, 290, 2040, 1, 0, 0, 0, 292, 2053, 1, 0, 0, 0, 294, 2056,
    1, 0, 0, 0, 296, 2060, 1, 0, 0, 0, 298, 2062, 1, 0, 0, 0, 300, 2067, 1, 0, 0, 0, 302, 2071,
    1, 0, 0, 0, 304, 2121, 1, 0, 0, 0, 306, 2140, 1, 0, 0, 0, 308, 2142, 1, 0, 0, 0, 310, 2157,
    1, 0, 0, 0, 312, 2167, 1, 0, 0, 0, 314, 2182, 1, 0, 0, 0, 316, 2185, 1, 0, 0, 0, 318, 2189,
    1, 0, 0, 0, 320, 2193, 1, 0, 0, 0, 322, 2208, 1, 0, 0, 0, 324, 2214, 1, 0, 0, 0, 326, 2216,
    1, 0, 0, 0, 328, 2225, 1, 0, 0, 0, 330, 2296, 1, 0, 0, 0, 332, 2302, 1, 0, 0, 0, 334, 2318,
    1, 0, 0, 0, 336, 2565, 1, 0, 0, 0, 338, 2586, 1, 0, 0, 0, 340, 2588, 1, 0, 0, 0, 342, 2590,
    1, 0, 0, 0, 344, 2606, 1, 0, 0, 0, 346, 2608, 1, 0, 0, 0, 348, 2655, 1, 0, 0, 0, 350, 2664,
    1, 0, 0, 0, 352, 2668, 1, 0, 0, 0, 354, 2674, 1, 0, 0, 0, 356, 2676, 1, 0, 0, 0, 358, 2681,
    1, 0, 0, 0, 360, 2686, 1, 0, 0, 0, 362, 2694, 1, 0, 0, 0, 364, 2726, 1, 0, 0, 0, 366, 2737,
    1, 0, 0, 0, 368, 2744, 1, 0, 0, 0, 370, 2746, 1, 0, 0, 0, 372, 2767, 1, 0, 0, 0, 374, 2769,
    1, 0, 0, 0, 376, 2771, 1, 0, 0, 0, 378, 2795, 1, 0, 0, 0, 380, 2803, 1, 0, 0, 0, 382, 2810,
    1, 0, 0, 0, 384, 2824, 1, 0, 0, 0, 386, 2826, 1, 0, 0, 0, 388, 2828, 1, 0, 0, 0, 390, 392,
    3, 2, 1, 0, 391, 390, 1, 0, 0, 0, 392, 395, 1, 0, 0, 0, 393, 391, 1, 0, 0, 0, 393, 394,
    1, 0, 0, 0, 394, 396, 1, 0, 0, 0, 395, 393, 1, 0, 0, 0, 396, 397, 5, 0, 0, 1, 397, 1, 1,
    0, 0, 0, 398, 400, 3, 4, 2, 0, 399, 401, 5, 262, 0, 0, 400, 399, 1, 0, 0, 0, 400, 401,
    1, 0, 0, 0, 401, 3, 1, 0, 0, 0, 402, 425, 3, 212, 106, 0, 403, 425, 3, 6, 3, 0, 404, 425,
    3, 8, 4, 0, 405, 425, 3, 26, 13, 0, 406, 425, 3, 64, 32, 0, 407, 425, 3, 66, 33, 0, 408,
    425, 3, 68, 34, 0, 409, 425, 3, 74, 37, 0, 410, 425, 3, 88, 44, 0, 411, 425, 3, 94, 47,
    0, 412, 425, 3, 100, 50, 0, 413, 425, 3, 102, 51, 0, 414, 425, 3, 108, 54, 0, 415, 425,
    3, 110, 55, 0, 416, 425, 3, 112, 56, 0, 417, 425, 3, 144, 72, 0, 418, 425, 3, 152, 76,
    0, 419, 425, 3, 154, 77, 0, 420, 425, 3, 156, 78, 0, 421, 425, 3, 158, 79, 0, 422, 425,
    3, 160, 80, 0, 423, 425, 3, 162, 81, 0, 424, 402, 1, 0, 0, 0, 424, 403, 1, 0, 0, 0, 424,
    404, 1, 0, 0, 0, 424, 405, 1, 0, 0, 0, 424, 406, 1, 0, 0, 0, 424, 407, 1, 0, 0, 0, 424,
    408, 1, 0, 0, 0, 424, 409, 1, 0, 0, 0, 424, 410, 1, 0, 0, 0, 424, 411, 1, 0, 0, 0, 424,
    412, 1, 0, 0, 0, 424, 413, 1, 0, 0, 0, 424, 414, 1, 0, 0, 0, 424, 415, 1, 0, 0, 0, 424,
    416, 1, 0, 0, 0, 424, 417, 1, 0, 0, 0, 424, 418, 1, 0, 0, 0, 424, 419, 1, 0, 0, 0, 424,
    420, 1, 0, 0, 0, 424, 421, 1, 0, 0, 0, 424, 422, 1, 0, 0, 0, 424, 423, 1, 0, 0, 0, 425,
    5, 1, 0, 0, 0, 426, 427, 5, 203, 0, 0, 427, 428, 3, 184, 92, 0, 428, 7, 1, 0, 0, 0, 429,
    438, 3, 18, 9, 0, 430, 438, 3, 20, 10, 0, 431, 438, 3, 22, 11, 0, 432, 438, 3, 24, 12,
    0, 433, 438, 3, 16, 8, 0, 434, 438, 3, 14, 7, 0, 435, 438, 3, 12, 6, 0, 436, 438, 3, 10,
    5, 0, 437, 429, 1, 0, 0, 0, 437, 430, 1, 0, 0, 0, 437, 431, 1, 0, 0, 0, 437, 432, 1, 0,
    0, 0, 437, 433, 1, 0, 0, 0, 437, 434, 1, 0, 0, 0, 437, 435, 1, 0, 0, 0, 437, 436, 1, 0,
    0, 0, 438, 9, 1, 0, 0, 0, 439, 441, 5, 37, 0, 0, 440, 442, 5, 19, 0, 0, 441, 440, 1, 0,
    0, 0, 441, 442, 1, 0, 0, 0, 442, 443, 1, 0, 0, 0, 443, 445, 5, 188, 0, 0, 444, 446, 3,
    172, 86, 0, 445, 444, 1, 0, 0, 0, 445, 446, 1, 0, 0, 0, 446, 447, 1, 0, 0, 0, 447, 463,
    3, 174, 87, 0, 448, 449, 5, 265, 0, 0, 449, 454, 3, 222, 111, 0, 450, 451, 5, 263, 0,
    0, 451, 453, 3, 222, 111, 0, 452, 450, 1, 0, 0, 0, 453, 456, 1, 0, 0, 0, 454, 452, 1,
    0, 0, 0, 454, 455, 1, 0, 0, 0, 455, 459, 1, 0, 0, 0, 456, 454, 1, 0, 0, 0, 457, 458, 5,
    263, 0, 0, 458, 460, 3, 216, 108, 0, 459, 457, 1, 0, 0, 0, 459, 460, 1, 0, 0, 0, 460,
    461, 1, 0, 0, 0, 461, 462, 5, 266, 0, 0, 462, 464, 1, 0, 0, 0, 463, 448, 1, 0, 0, 0, 463,
    464, 1, 0, 0, 0, 464, 471, 1, 0, 0, 0, 465, 466, 5, 17, 0, 0, 466, 469, 5, 26, 0, 0, 467,
    470, 3, 312, 156, 0, 468, 470, 3, 258, 129, 0, 469, 467, 1, 0, 0, 0, 469, 468, 1, 0,
    0, 0, 470, 472, 1, 0, 0, 0, 471, 465, 1, 0, 0, 0, 471, 472, 1, 0, 0, 0, 472, 473, 1, 0,
    0, 0, 473, 476, 3, 202, 101, 0, 474, 475, 5, 9, 0, 0, 475, 477, 3, 212, 106, 0, 476,
    474, 1, 0, 0, 0, 476, 477, 1, 0, 0, 0, 477, 11, 1, 0, 0, 0, 478, 480, 5, 37, 0, 0, 479,
    481, 5, 19, 0, 0, 480, 479, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481, 482, 1, 0, 0, 0, 482,
    484, 5, 188, 0, 0, 483, 485, 3, 172, 86, 0, 484, 483, 1, 0, 0, 0, 484, 485, 1, 0, 0, 0,
    485, 486, 1, 0, 0, 0, 486, 487, 3, 174, 87, 0, 487, 491, 5, 115, 0, 0, 488, 492, 3, 186,
    93, 0, 489, 490, 5, 147, 0, 0, 490, 492, 3, 338, 169, 0, 491, 488, 1, 0, 0, 0, 491, 489,
    1, 0, 0, 0, 492, 496, 1, 0, 0, 0, 493, 494, 5, 17, 0, 0, 494, 495, 5, 26, 0, 0, 495, 497,
    3, 258, 129, 0, 496, 493, 1, 0, 0, 0, 496, 497, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498,
    499, 3, 202, 101, 0, 499, 13, 1, 0, 0, 0, 500, 502, 5, 37, 0, 0, 501, 503, 5, 19, 0, 0,
    502, 501, 1, 0, 0, 0, 502, 503, 1, 0, 0, 0, 503, 504, 1, 0, 0, 0, 504, 506, 5, 188, 0,
    0, 505, 507, 3, 172, 86, 0, 506, 505, 1, 0, 0, 0, 506, 507, 1, 0, 0, 0, 507, 508, 1, 0,
    0, 0, 508, 526, 3, 174, 87, 0, 509, 510, 5, 265, 0, 0, 510, 515, 3, 224, 112, 0, 511,
    512, 5, 263, 0, 0, 512, 514, 3, 224, 112, 0, 513, 511, 1, 0, 0, 0, 514, 517, 1, 0, 0,
    0, 515, 513, 1, 0, 0, 0, 515, 516, 1, 0, 0, 0, 516, 522, 1, 0, 0, 0, 517, 515, 1, 0, 0,
    0, 518, 519, 5, 263, 0, 0, 519, 520, 5, 150, 0, 0, 520, 521, 5, 110, 0, 0, 521, 523,
    3, 312, 156, 0, 522, 518, 1, 0, 0, 0, 522, 523, 1, 0, 0, 0, 523, 524, 1, 0, 0, 0, 524,
    525, 5, 266, 0, 0, 525, 527, 1, 0, 0, 0, 526, 509, 1, 0, 0, 0, 526, 527, 1, 0, 0, 0, 527,
    533, 1, 0, 0, 0, 528, 529, 5, 150, 0, 0, 529, 531, 5, 110, 0, 0, 530, 532, 3, 312, 156,
    0, 531, 530, 1, 0, 0, 0, 531, 532, 1, 0, 0, 0, 532, 534, 1, 0, 0, 0, 533, 528, 1, 0, 0,
    0, 533, 534, 1, 0, 0, 0, 534, 538, 1, 0, 0, 0, 535, 536, 5, 145, 0, 0, 536, 537, 5, 26,
    0, 0, 537, 539, 3, 240, 120, 0, 538, 535, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 542,
    1, 0, 0, 0, 540, 541, 5, 34, 0, 0, 541, 543, 3, 338, 169, 0, 542, 540, 1, 0, 0, 0, 542,
    543, 1, 0, 0, 0, 543, 544, 1, 0, 0, 0, 544, 545, 5, 23, 0, 0, 545, 546, 5, 9, 0, 0, 546,
    549, 5, 111, 0, 0, 547, 548, 5, 25, 0, 0, 548, 550, 3, 256, 128, 0, 549, 547, 1, 0, 0,
    0, 549, 550, 1, 0, 0, 0, 550, 553, 1, 0, 0, 0, 551, 552, 5, 9, 0, 0, 552, 554, 3, 212,
    106, 0, 553, 551, 1, 0, 0, 0, 553, 554, 1, 0, 0, 0, 554, 15, 1, 0, 0, 0, 555, 556, 5, 37,
    0, 0, 556, 558, 5, 212, 0, 0, 557, 559, 3, 172, 86, 0, 558, 557, 1, 0, 0, 0, 558, 559,
    1, 0, 0, 0, 559, 560, 1, 0, 0, 0, 560, 562, 3, 178, 89, 0, 561, 563, 3, 208, 104, 0, 562,
    561, 1, 0, 0, 0, 562, 563, 1, 0, 0, 0, 563, 565, 1, 0, 0, 0, 564, 566, 3, 228, 114, 0,
    565, 564, 1, 0, 0, 0, 565, 566, 1, 0, 0, 0, 566, 569, 1, 0, 0, 0, 567, 568, 5, 25, 0, 0,
    568, 570, 3, 256, 128, 0, 569, 567, 1, 0, 0, 0, 569, 570, 1, 0, 0, 0, 570, 571, 1, 0,
    0, 0, 571, 572, 5, 9, 0, 0, 572, 573, 3, 212, 106, 0, 573, 17, 1, 0, 0, 0, 574, 575, 5,
    37, 0, 0, 575, 577, 7, 0, 0, 0, 576, 578, 3, 172, 86, 0, 577, 576, 1, 0, 0, 0, 577, 578,
    1, 0, 0, 0, 578, 579, 1, 0, 0, 0, 579, 581, 3, 176, 88, 0, 580, 582, 3, 228, 114, 0, 581,
    580, 1, 0, 0, 0, 581, 582, 1, 0, 0, 0, 582, 585, 1, 0, 0, 0, 583, 584, 5, 24, 0, 0, 584,
    586, 3, 338, 169, 0, 585, 583, 1, 0, 0, 0, 585, 586, 1, 0, 0, 0, 586, 19, 1, 0, 0, 0, 587,
    588, 5, 37, 0, 0, 588, 589, 5, 166, 0, 0, 589, 590, 3, 382, 191, 0, 590, 21, 1, 0, 0,
    0, 591, 593, 5, 37, 0, 0, 592, 594, 5, 12, 0, 0, 593, 592, 1, 0, 0, 0, 593, 594, 1, 0,
    0, 0, 594, 595, 1, 0, 0, 0, 595, 597, 5, 84, 0, 0, 596, 598, 3, 172, 86, 0, 597, 596,
    1, 0, 0, 0, 597, 598, 1, 0, 0, 0, 598, 599, 1, 0, 0, 0, 599, 612, 3, 180, 90, 0, 600, 609,
    5, 265, 0, 0, 601, 606, 3, 348, 174, 0, 602, 603, 5, 263, 0, 0, 603, 605, 3, 348, 174,
    0, 604, 602, 1, 0, 0, 0, 605, 608, 1, 0, 0, 0, 606, 604, 1, 0, 0, 0, 606, 607, 1, 0, 0,
    0, 607, 610, 1, 0, 0, 0, 608, 606, 1, 0, 0, 0, 609, 601, 1, 0, 0, 0, 609, 610, 1, 0, 0,
    0, 610, 611, 1, 0, 0, 0, 611, 613, 5, 266, 0, 0, 612, 600, 1, 0, 0, 0, 612, 613, 1, 0,
    0, 0, 613, 614, 1, 0, 0, 0, 614, 615, 5, 160, 0, 0, 615, 618, 3, 348, 174, 0, 616, 617,
    5, 102, 0, 0, 617, 619, 3, 348, 174, 0, 618, 616, 1, 0, 0, 0, 618, 619, 1, 0, 0, 0, 619,
    620, 1, 0, 0, 0, 620, 621, 5, 24, 0, 0, 621, 625, 5, 274, 0, 0, 622, 623, 5, 104, 0, 0,
    623, 624, 5, 249, 0, 0, 624, 626, 5, 274, 0, 0, 625, 622, 1, 0, 0, 0, 625, 626, 1, 0,
    0, 0, 626, 627, 1, 0, 0, 0, 627, 628, 5, 206, 0, 0, 628, 629, 5, 249, 0, 0, 629, 630,
    5, 274, 0, 0, 630, 631, 5, 126, 0, 0, 631, 632, 5, 249, 0, 0, 632, 636, 5, 274, 0, 0,
    633, 634, 5, 18, 0, 0, 634, 635, 5, 249, 0, 0, 635, 637, 5, 274, 0, 0, 636, 633, 1, 0,
    0, 0, 636, 637, 1, 0, 0, 0, 637, 641, 1, 0, 0, 0, 638, 639, 5, 20, 0, 0, 639, 640, 5, 249,
    0, 0, 640, 642, 5, 274, 0, 0, 641, 638, 1, 0, 0, 0, 641, 642, 1, 0, 0, 0, 642, 646, 1,
    0, 0, 0, 643, 644, 5, 187, 0, 0, 644, 645, 5, 249, 0, 0, 645, 647, 5, 274, 0, 0, 646,
    643, 1, 0, 0, 0, 646, 647, 1, 0, 0, 0, 647, 651, 1, 0, 0, 0, 648, 649, 5, 76, 0, 0, 649,
    650, 5, 249, 0, 0, 650, 652, 5, 274, 0, 0, 651, 648, 1, 0, 0, 0, 651, 652, 1, 0, 0, 0,
    652, 23, 1, 0, 0, 0, 653, 654, 5, 37, 0, 0, 654, 656, 5, 84, 0, 0, 655, 657, 3, 172, 86,
    0, 656, 655, 1, 0, 0, 0, 656, 657, 1, 0, 0, 0, 657, 658, 1, 0, 0, 0, 658, 671, 3, 180,
    90, 0, 659, 668, 5, 265, 0, 0, 660, 665, 3, 348, 174, 0, 661, 662, 5, 263, 0, 0, 662,
    664, 3, 348, 174, 0, 663, 661, 1, 0, 0, 0, 664, 667, 1, 0, 0, 0, 665, 663, 1, 0, 0, 0,
    665, 666, 1, 0, 0, 0, 666, 669, 1, 0, 0, 0, 667, 665, 1, 0, 0, 0, 668, 660, 1, 0, 0, 0,
    668, 669, 1, 0, 0, 0, 669, 670, 1, 0, 0, 0, 670, 672, 5, 266, 0, 0, 671, 659, 1, 0, 0,
    0, 671, 672, 1, 0, 0, 0, 672, 675, 1, 0, 0, 0, 673, 674, 5, 160, 0, 0, 674, 676, 3, 348,
    174, 0, 675, 673, 1, 0, 0, 0, 675, 676, 1, 0, 0, 0, 676, 677, 1, 0, 0, 0, 677, 678, 5,
    24, 0, 0, 678, 679, 5, 274, 0, 0, 679, 680, 5, 186, 0, 0, 680, 681, 5, 249, 0, 0, 681,
    682, 3, 338, 169, 0, 682, 25, 1, 0, 0, 0, 683, 702, 3, 28, 14, 0, 684, 702, 3, 62, 31,
    0, 685, 702, 3, 60, 30, 0, 686, 702, 3, 58, 29, 0, 687, 702, 3, 54, 27, 0, 688, 702,
    3, 56, 28, 0, 689, 702, 3, 52, 26, 0, 690, 702, 3, 48, 24, 0, 691, 702, 3, 50, 25, 0,
    692, 702, 3, 46, 23, 0, 693, 702, 3, 44, 22, 0, 694, 702, 3, 42, 21, 0, 695, 702, 3,
    40, 20, 0, 696, 702, 3, 34, 17, 0, 697, 702, 3, 30, 15, 0, 698, 702, 3, 32, 16, 0, 699,
    702, 3, 36, 18, 0, 700, 702, 3, 38, 19, 0, 701, 683, 1, 0, 0, 0, 701, 684, 1, 0, 0, 0,
    701, 685, 1, 0, 0, 0, 701, 686, 1, 0, 0, 0, 701, 687, 1, 0, 0, 0, 701, 688, 1, 0, 0, 0,
    701, 689, 1, 0, 0, 0, 701, 690, 1, 0, 0, 0, 701, 691, 1, 0, 0, 0, 701, 692, 1, 0, 0, 0,
    701, 693, 1, 0, 0, 0, 701, 694, 1, 0, 0, 0, 701, 695, 1, 0, 0, 0, 701, 696, 1, 0, 0, 0,
    701, 697, 1, 0, 0, 0, 701, 698, 1, 0, 0, 0, 701, 699, 1, 0, 0, 0, 701, 700, 1, 0, 0, 0,
    702, 27, 1, 0, 0, 0, 703, 704, 5, 4, 0, 0, 704, 705, 5, 46, 0, 0, 705, 706, 3, 184, 92,
    0, 706, 707, 5, 176, 0, 0, 707, 708, 5, 142, 0, 0, 708, 709, 7, 1, 0, 0, 709, 710, 3,
    382, 191, 0, 710, 29, 1, 0, 0, 0, 711, 712, 5, 4, 0, 0, 712, 713, 5, 188, 0, 0, 713, 714,
    3, 186, 93, 0, 714, 715, 5, 176, 0, 0, 715, 716, 5, 32, 0, 0, 716, 717, 5, 182, 0, 0,
    717, 718, 3, 194, 97, 0, 718, 719, 5, 265, 0, 0, 719, 720, 7, 2, 0, 0, 720, 721, 5, 249,
    0, 0, 721, 726, 3, 338, 169, 0, 722, 723, 5, 263, 0, 0, 723, 724, 7, 2, 0, 0, 724, 725,
    5, 249, 0, 0, 725, 727, 3, 338, 169, 0, 726, 722, 1, 0, 0, 0, 726, 727, 1, 0, 0, 0, 727,
    728, 1, 0, 0, 0, 728, 729, 5, 266, 0, 0, 729, 31, 1, 0, 0, 0, 730, 731, 5, 4, 0, 0, 731,
    732, 5, 188, 0, 0, 732, 735, 3, 186, 93, 0, 733, 734, 5, 145, 0, 0, 734, 736, 3, 326,
    163, 0, 735, 733, 1, 0, 0, 0, 735, 736, 1, 0, 0, 0, 736, 737, 1, 0, 0, 0, 737, 748, 5,
    176, 0, 0, 738, 739, 5, 30, 0, 0, 739, 740, 5, 94, 0, 0, 740, 745, 3, 338, 169, 0, 741,
    742, 5, 216, 0, 0, 742, 743, 5, 151, 0, 0, 743, 744, 5, 249, 0, 0, 744, 746, 3, 384,
    192, 0, 745, 741, 1, 0, 0, 0, 745, 746, 1, 0, 0, 0, 746, 749, 1, 0, 0, 0, 747, 749, 5,
    197, 0, 0, 748, 738, 1, 0, 0, 0, 748, 747, 1, 0, 0, 0, 749, 33, 1, 0, 0, 0, 750, 751, 5,
    4, 0, 0, 751, 752, 5, 188, 0, 0, 752, 753, 3, 186, 93, 0, 753, 754, 5, 31, 0, 0, 754,
    755, 3, 194, 97, 0, 755, 756, 3, 230, 115, 0, 756, 35, 1, 0, 0, 0, 757, 758, 5, 4, 0,
    0, 758, 759, 5, 188, 0, 0, 759, 760, 3, 186, 93, 0, 760, 762, 5, 58, 0, 0, 761, 763,
    5, 32, 0, 0, 762, 761, 1, 0, 0, 0, 762, 763, 1, 0, 0, 0, 763, 764, 1, 0, 0, 0, 764, 765,
    3, 194, 97, 0, 765, 37, 1, 0, 0, 0, 766, 767, 5, 4, 0, 0, 767, 768, 5, 188, 0, 0, 768,
    769, 3, 186, 93, 0, 769, 770, 5, 176, 0, 0, 770, 771, 5, 142, 0, 0, 771, 772, 7, 1, 0,
    0, 772, 773, 3, 382, 191, 0, 773, 39, 1, 0, 0, 0, 774, 775, 5, 4, 0, 0, 775, 776, 5, 188,
    0, 0, 776, 782, 3, 186, 93, 0, 777, 783, 5, 158, 0, 0, 778, 780, 5, 1, 0, 0, 779, 781,
    3, 172, 86, 0, 780, 779, 1, 0, 0, 0, 780, 781, 1, 0, 0, 0, 781, 783, 1, 0, 0, 0, 782, 777,
    1, 0, 0, 0, 782, 778, 1, 0, 0, 0, 783, 784, 1, 0, 0, 0, 784, 785, 5, 33, 0, 0, 785, 786,
    5, 265, 0, 0, 786, 791, 3, 230, 115, 0, 787, 788, 5, 263, 0, 0, 788, 790, 3, 230, 115,
    0, 789, 787, 1, 0, 0, 0, 790, 793, 1, 0, 0, 0, 791, 792, 1, 0, 0, 0, 791, 789, 1, 0, 0,
    0, 792, 794, 1, 0, 0, 0, 793, 791, 1, 0, 0, 0, 794, 795, 5, 266, 0, 0, 795, 41, 1, 0, 0,
    0, 796, 797, 5, 4, 0, 0, 797, 798, 5, 188, 0, 0, 798, 799, 3, 186, 93, 0, 799, 800, 5,
    1, 0, 0, 800, 802, 5, 32, 0, 0, 801, 803, 3, 172, 86, 0, 802, 801, 1, 0, 0, 0, 802, 803,
    1, 0, 0, 0, 803, 804, 1, 0, 0, 0, 804, 805, 3, 232, 116, 0, 805, 43, 1, 0, 0, 0, 806, 807,
    5, 4, 0, 0, 807, 808, 5, 188, 0, 0, 808, 809, 3, 186, 93, 0, 809, 811, 5, 4, 0, 0, 810,
    812, 5, 32, 0, 0, 811, 810, 1, 0, 0, 0, 811, 812, 1, 0, 0, 0, 812, 813, 1, 0, 0, 0, 813,
    822, 3, 194, 97, 0, 814, 818, 5, 176, 0, 0, 815, 819, 3, 236, 118, 0, 816, 817, 5, 34,
    0, 0, 817, 819, 3, 338, 169, 0, 818, 815, 1, 0, 0, 0, 818, 816, 1, 0, 0, 0, 819, 823,
    1, 0, 0, 0, 820, 821, 5, 58, 0, 0, 821, 823, 5, 51, 0, 0, 822, 814, 1, 0, 0, 0, 822, 820,
    1, 0, 0, 0, 823, 45, 1, 0, 0, 0, 824, 825, 5, 4, 0, 0, 825, 826, 5, 188, 0, 0, 826, 827,
    3, 186, 93, 0, 827, 829, 5, 1, 0, 0, 828, 830, 3, 172, 86, 0, 829, 828, 1, 0, 0, 0, 829,
    830, 1, 0, 0, 0, 830, 843, 1, 0, 0, 0, 831, 832, 5, 145, 0, 0, 832, 835, 3, 326, 163,
    0, 833, 834, 5, 24, 0, 0, 834, 836, 3, 338, 169, 0, 835, 833, 1, 0, 0, 0, 835, 836, 1,
    0, 0, 0, 836, 838, 1, 0, 0, 0, 837, 839, 3, 248, 124, 0, 838, 837, 1, 0, 0, 0, 838, 839,
    1, 0, 0, 0, 839, 844, 1, 0, 0, 0, 840, 841, 5, 154, 0, 0, 841, 842, 5, 145, 0, 0, 842,
    844, 3, 246, 123, 0, 843, 831, 1, 0, 0, 0, 843, 840, 1, 0, 0, 0, 844, 47, 1, 0, 0, 0, 845,
    846, 5, 4, 0, 0, 846, 847, 5, 188, 0, 0, 847, 850, 3, 186, 93, 0, 848, 849, 5, 145, 0,
    0, 849, 851, 3, 326, 163, 0, 850, 848, 1, 0, 0, 0, 850, 851, 1, 0, 0, 0, 851, 852, 1,
    0, 0, 0, 852, 864, 5, 176, 0, 0, 853, 854, 5, 72, 0, 0, 854, 865, 3, 238, 119, 0, 855,
    856, 5, 168, 0, 0, 856, 857, 5, 79, 0, 0, 857, 865, 3, 262, 131, 0, 858, 859, 5, 24,
    0, 0, 859, 865, 3, 338, 169, 0, 860, 861, 5, 25, 0, 0, 861, 865, 3, 256, 128, 0, 862,
    863, 5, 175, 0, 0, 863, 865, 3, 256, 128, 0, 864, 853, 1, 0, 0, 0, 864, 855, 1, 0, 0,
    0, 864, 858, 1, 0, 0, 0, 864, 860, 1, 0, 0, 0, 864, 862, 1, 0, 0, 0, 865, 49, 1, 0, 0, 0,
    866, 867, 5, 4, 0, 0, 867, 868, 5, 188, 0, 0, 868, 869, 3, 186, 93, 0, 869, 870, 5, 155,
    0, 0, 870, 871, 5, 146, 0, 0, 871, 51, 1, 0, 0, 0, 872, 873, 5, 4, 0, 0, 873, 874, 5, 188,
    0, 0, 874, 875, 3, 186, 93, 0, 875, 877, 5, 58, 0, 0, 876, 878, 3, 170, 85, 0, 877, 876,
    1, 0, 0, 0, 877, 878, 1, 0, 0, 0, 878, 887, 1, 0, 0, 0, 879, 880, 5, 145, 0, 0, 880, 882,
    3, 326, 163, 0, 881, 883, 5, 22, 0, 0, 882, 881, 1, 0, 0, 0, 882, 883, 1, 0, 0, 0, 883,
    888, 1, 0, 0, 0, 884, 885, 5, 154, 0, 0, 885, 886, 5, 145, 0, 0, 886, 888, 3, 246, 123,
    0, 887, 879, 1, 0, 0, 0, 887, 884, 1, 0, 0, 0, 888, 53, 1, 0, 0, 0, 889, 890, 5, 4, 0, 0,
    890, 891, 5, 212, 0, 0, 891, 893, 3, 188, 94, 0, 892, 894, 3, 208, 104, 0, 893, 892,
    1, 0, 0, 0, 893, 894, 1, 0, 0, 0, 894, 895, 1, 0, 0, 0, 895, 896, 5, 9, 0, 0, 896, 897,
    3, 212, 106, 0, 897, 55, 1, 0, 0, 0, 898, 899, 5, 4, 0, 0, 899, 900, 5, 212, 0, 0, 900,
    901, 3, 188, 94, 0, 901, 902, 5, 156, 0, 0, 902, 903, 5, 193, 0, 0, 903, 904, 3, 188,
    94, 0, 904, 57, 1, 0, 0, 0, 905, 906, 5, 4, 0, 0, 906, 907, 5, 212, 0, 0, 907, 908, 3,
    188, 94, 0, 908, 909, 5, 176, 0, 0, 909, 910, 5, 142, 0, 0, 910, 911, 7, 1, 0, 0, 911,
    912, 3, 376, 188, 0, 912, 59, 1, 0, 0, 0, 913, 914, 5, 4, 0, 0, 914, 915, 5, 188, 0, 0,
    915, 916, 3, 186, 93, 0, 916, 917, 5, 156, 0, 0, 917, 918, 5, 193, 0, 0, 918, 919, 3,
    186, 93, 0, 919, 61, 1, 0, 0, 0, 920, 921, 5, 4, 0, 0, 921, 922, 5, 212, 0, 0, 922, 923,
    3, 188, 94, 0, 923, 924, 7, 3, 0, 0, 924, 925, 5, 25, 0, 0, 925, 926, 3, 256, 128, 0,
    926, 63, 1, 0, 0, 0, 927, 929, 5, 196, 0, 0, 928, 930, 5, 188, 0, 0, 929, 928, 1, 0, 0,
    0, 929, 930, 1, 0, 0, 0, 930, 932, 1, 0, 0, 0, 931, 933, 3, 170, 85, 0, 932, 931, 1, 0,
    0, 0, 932, 933, 1, 0, 0, 0, 933, 934, 1, 0, 0, 0, 934, 935, 3, 186, 93, 0, 935, 65, 1,
    0, 0, 0, 936, 938, 5, 56, 0, 0, 937, 939, 5, 46, 0, 0, 938, 937, 1, 0, 0, 0, 938, 939,
    1, 0, 0, 0, 939, 941, 1, 0, 0, 0, 940, 942, 7, 4, 0, 0, 941, 940, 1, 0, 0, 0, 941, 942,
    1, 0, 0, 0, 942, 943, 1, 0, 0, 0, 943, 944, 3, 376, 188, 0, 944, 67, 1, 0, 0, 0, 945, 948,
    3, 70, 35, 0, 946, 948, 3, 72, 36, 0, 947, 945, 1, 0, 0, 0, 947, 946, 1, 0, 0, 0, 948,
    69, 1, 0, 0, 0, 949, 950, 5, 36, 0, 0, 950, 951, 5, 182, 0, 0, 951, 953, 3, 186, 93, 0,
    952, 954, 3, 312, 156, 0, 953, 952, 1, 0, 0, 0, 953, 954, 1, 0, 0, 0, 954, 967, 1, 0,
    0, 0, 955, 956, 5, 190, 0, 0, 956, 957, 5, 185, 0, 0, 957, 958, 5, 265, 0, 0, 958, 959,
    3, 384, 192, 0, 959, 965, 5, 266, 0, 0, 960, 961, 5, 157, 0, 0, 961, 962, 5, 265, 0,
    0, 962, 963, 3, 384, 192, 0, 963, 964, 5, 266, 0, 0, 964, 966, 1, 0, 0, 0, 965, 960,
    1, 0, 0, 0, 965, 966, 1, 0, 0, 0, 966, 968, 1, 0, 0, 0, 967, 955, 1, 0, 0, 0, 967, 968,
    1, 0, 0, 0, 968, 71, 1, 0, 0, 0, 969, 970, 5, 36, 0, 0, 970, 971, 5, 96, 0, 0, 971, 972,
    5, 182, 0, 0, 972, 978, 3, 186, 93, 0, 973, 974, 5, 145, 0, 0, 974, 975, 5, 265, 0, 0,
    975, 976, 3, 326, 163, 0, 976, 977, 5, 266, 0, 0, 977, 979, 1, 0, 0, 0, 978, 973, 1,
    0, 0, 0, 978, 979, 1, 0, 0, 0, 979, 73, 1, 0, 0, 0, 980, 987, 3, 86, 43, 0, 981, 987, 3,
    84, 42, 0, 982, 987, 3, 82, 41, 0, 983, 987, 3, 78, 39, 0, 984, 987, 3, 80, 40, 0, 985,
    987, 3, 76, 38, 0, 986, 980, 1, 0, 0, 0, 986, 981, 1, 0, 0, 0, 986, 982, 1, 0, 0, 0, 986,
    983, 1, 0, 0, 0, 986, 984, 1, 0, 0, 0, 986, 985, 1, 0, 0, 0, 987, 75, 1, 0, 0, 0, 988, 989,
    5, 58, 0, 0, 989, 991, 7, 0, 0, 0, 990, 992, 3, 170, 85, 0, 991, 990, 1, 0, 0, 0, 991,
    992, 1, 0, 0, 0, 992, 993, 1, 0, 0, 0, 993, 995, 3, 184, 92, 0, 994, 996, 7, 5, 0, 0, 995,
    994, 1, 0, 0, 0, 995, 996, 1, 0, 0, 0, 996, 77, 1, 0, 0, 0, 997, 998, 5, 58, 0, 0, 998,
    1000, 5, 212, 0, 0, 999, 1001, 3, 170, 85, 0, 1000, 999, 1, 0, 0, 0, 1000, 1001, 1,
    0, 0, 0, 1001, 1002, 1, 0, 0, 0, 1002, 1003, 3, 188, 94, 0, 1003, 79, 1, 0, 0, 0, 1004,
    1005, 5, 58, 0, 0, 1005, 1007, 5, 188, 0, 0, 1006, 1008, 3, 170, 85, 0, 1007, 1006,
    1, 0, 0, 0, 1007, 1008, 1, 0, 0, 0, 1008, 1009, 1, 0, 0, 0, 1009, 1011, 3, 186, 93, 0,
    1010, 1012, 5, 22, 0, 0, 1011, 1010, 1, 0, 0, 0, 1011, 1012, 1, 0, 0, 0, 1012, 81, 1,
    0, 0, 0, 1013, 1015, 5, 58, 0, 0, 1014, 1016, 5, 96, 0, 0, 1015, 1014, 1, 0, 0, 0, 1015,
    1016, 1, 0, 0, 0, 1016, 1017, 1, 0, 0, 0, 1017, 1018, 5, 182, 0, 0, 1018, 1021, 3, 186,
    93, 0, 1019, 1020, 5, 145, 0, 0, 1020, 1022, 3, 326, 163, 0, 1021, 1019, 1, 0, 0, 0,
    1021, 1022, 1, 0, 0, 0, 1022, 83, 1, 0, 0, 0, 1023, 1025, 5, 58, 0, 0, 1024, 1026, 5,
    12, 0, 0, 1025, 1024, 1, 0, 0, 0, 1025, 1026, 1, 0, 0, 0, 1026, 1027, 1, 0, 0, 0, 1027,
    1029, 5, 84, 0, 0, 1028, 1030, 3, 170, 85, 0, 1029, 1028, 1, 0, 0, 0, 1029, 1030, 1,
    0, 0, 0, 1030, 1031, 1, 0, 0, 0, 1031, 1044, 3, 190, 95, 0, 1032, 1041, 5, 265, 0, 0,
    1033, 1038, 3, 348, 174, 0, 1034, 1035, 5, 263, 0, 0, 1035, 1037, 3, 348, 174, 0,
    1036, 1034, 1, 0, 0, 0, 1037, 1040, 1, 0, 0, 0, 1038, 1036, 1, 0, 0, 0, 1038, 1039,
    1, 0, 0, 0, 1039, 1042, 1, 0, 0, 0, 1040, 1038, 1, 0, 0, 0, 1041, 1033, 1, 0, 0, 0, 1041,
    1042, 1, 0, 0, 0, 1042, 1043, 1, 0, 0, 0, 1043, 1045, 5, 266, 0, 0, 1044, 1032, 1, 0,
    0, 0, 1044, 1045, 1, 0, 0, 0, 1045, 85, 1, 0, 0, 0, 1046, 1047, 5, 58, 0, 0, 1047, 1048,
    5, 166, 0, 0, 1048, 1049, 3, 382, 191, 0, 1049, 87, 1, 0, 0, 0, 1050, 1053, 3, 90, 45,
    0, 1051, 1053, 3, 92, 46, 0, 1052, 1050, 1, 0, 0, 0, 1052, 1051, 1, 0, 0, 0, 1053, 89,
    1, 0, 0, 0, 1054, 1055, 5, 86, 0, 0, 1055, 1056, 5, 166, 0, 0, 1056, 1057, 3, 382, 191,
    0, 1057, 1058, 5, 193, 0, 0, 1058, 1059, 5, 87, 0, 0, 1059, 1060, 3, 382, 191, 0, 1060,
    91, 1, 0, 0, 0, 1061, 1062, 5, 86, 0, 0, 1062, 1063, 3, 372, 186, 0, 1063, 1064, 5,
    136, 0, 0, 1064, 1066, 3, 374, 187, 0, 1065, 1067, 3, 376, 188, 0, 1066, 1065, 1,
    0, 0, 0, 1066, 1067, 1, 0, 0, 0, 1067, 1068, 1, 0, 0, 0, 1068, 1069, 5, 193, 0, 0, 1069,
    1070, 3, 380, 190, 0, 1070, 93, 1, 0, 0, 0, 1071, 1074, 3, 96, 48, 0, 1072, 1074, 3,
    98, 49, 0, 1073, 1071, 1, 0, 0, 0, 1073, 1072, 1, 0, 0, 0, 1074, 95, 1, 0, 0, 0, 1075,
    1076, 5, 161, 0, 0, 1076, 1077, 5, 166, 0, 0, 1077, 1078, 3, 382, 191, 0, 1078, 1079,
    5, 82, 0, 0, 1079, 1080, 5, 87, 0, 0, 1080, 1081, 3, 382, 191, 0, 1081, 97, 1, 0, 0,
    0, 1082, 1086, 5, 161, 0, 0, 1083, 1084, 5, 86, 0, 0, 1084, 1085, 5, 137, 0, 0, 1085,
    1087, 5, 78, 0, 0, 1086, 1083, 1, 0, 0, 0, 1086, 1087, 1, 0, 0, 0, 1087, 1088, 1, 0,
    0, 0, 1088, 1089, 3, 372, 186, 0, 1089, 1090, 5, 136, 0, 0, 1090, 1092, 3, 374, 187,
    0, 1091, 1093, 3, 376, 188, 0, 1092, 1091, 1, 0, 0, 0, 1092, 1093, 1, 0, 0, 0, 1093,
    1094, 1, 0, 0, 0, 1094, 1100, 5, 82, 0, 0, 1095, 1101, 3, 380, 190, 0, 1096, 1098,
    5, 166, 0, 0, 1097, 1096, 1, 0, 0, 0, 1097, 1098, 1, 0, 0, 0, 1098, 1099, 1, 0, 0, 0,
    1099, 1101, 3, 382, 191, 0, 1100, 1095, 1, 0, 0, 0, 1100, 1097, 1, 0, 0, 0, 1101, 99,
    1, 0, 0, 0, 1102, 1104, 3, 214, 107, 0, 1103, 1102, 1, 0, 0, 0, 1103, 1104, 1, 0, 0,
    0, 1104, 1105, 1, 0, 0, 0, 1105, 1106, 5, 99, 0, 0, 1106, 1108, 7, 6, 0, 0, 1107, 1109,
    5, 188, 0, 0, 1108, 1107, 1, 0, 0, 0, 1108, 1109, 1, 0, 0, 0, 1109, 1110, 1, 0, 0, 0,
    1110, 1112, 3, 186, 93, 0, 1111, 1113, 3, 312, 156, 0, 1112, 1111, 1, 0, 0, 0, 1112,
    1113, 1, 0, 0, 0, 1113, 1126, 1, 0, 0, 0, 1114, 1115, 5, 145, 0, 0, 1115, 1116, 5, 265,
    0, 0, 1116, 1121, 3, 326, 163, 0, 1117, 1118, 5, 263, 0, 0, 1118, 1120, 3, 326, 163,
    0, 1119, 1117, 1, 0, 0, 0, 1120, 1123, 1, 0, 0, 0, 1121, 1119, 1, 0, 0, 0, 1121, 1122,
    1, 0, 0, 0, 1122, 1124, 1, 0, 0, 0, 1123, 1121, 1, 0, 0, 0, 1124, 1125, 5, 266, 0, 0,
    1125, 1127, 1, 0, 0, 0, 1126, 1114, 1, 0, 0, 0, 1126, 1127, 1, 0, 0, 0, 1127, 1128,
    1, 0, 0, 0, 1128, 1129, 3, 212, 106, 0, 1129, 101, 1, 0, 0, 0, 1130, 1133, 3, 104, 52,
    0, 1131, 1133, 3, 106, 53, 0, 1132, 1130, 1, 0, 0, 0, 1132, 1131, 1, 0, 0, 0, 1133,
    103, 1, 0, 0, 0, 1134, 1136, 5, 50, 0, 0, 1135, 1137, 5, 82, 0, 0, 1136, 1135, 1, 0,
    0, 0, 1136, 1137, 1, 0, 0, 0, 1137, 1138, 1, 0, 0, 0, 1138, 1140, 3, 186, 93, 0, 1139,
    1141, 3, 278, 139, 0, 1140, 1139, 1, 0, 0, 0, 1140, 1141, 1, 0, 0, 0, 1141, 105, 1,
    0, 0, 0, 1142, 1143, 5, 50, 0, 0, 1143, 1148, 3, 186, 93, 0, 1144, 1146, 5, 9, 0, 0,
    1145, 1144, 1, 0, 0, 0, 1145, 1146, 1, 0, 0, 0, 1146, 1147, 1, 0, 0, 0, 1147, 1149,
    3, 382, 191, 0, 1148, 1145, 1, 0, 0, 0, 1148, 1149, 1, 0, 0, 0, 1149, 1150, 1, 0, 0,
    0, 1150, 1159, 5, 82, 0, 0, 1151, 1156, 3, 302, 151, 0, 1152, 1153, 5, 263, 0, 0, 1153,
    1155, 3, 302, 151, 0, 1154, 1152, 1, 0, 0, 0, 1155, 1158, 1, 0, 0, 0, 1156, 1154, 1,
    0, 0, 0, 1156, 1157, 1, 0, 0, 0, 1157, 1160, 1, 0, 0, 0, 1158, 1156, 1, 0, 0, 0, 1159,
    1151, 1, 0, 0, 0, 1159, 1160, 1, 0, 0, 0, 1160, 1162, 1, 0, 0, 0, 1161, 1163, 3, 278,
    139, 0, 1162, 1161, 1, 0, 0, 0, 1162, 1163, 1, 0, 0, 0, 1163, 107, 1, 0, 0, 0, 1164,
    1165, 5, 54, 0, 0, 1165, 1166, 3, 186, 93, 0, 1166, 1167, 5, 176, 0, 0, 1167, 1177,
    3, 204, 102, 0, 1168, 1169, 5, 82, 0, 0, 1169, 1174, 3, 302, 151, 0, 1170, 1171, 5,
    263, 0, 0, 1171, 1173, 3, 302, 151, 0, 1172, 1170, 1, 0, 0, 0, 1173, 1176, 1, 0, 0,
    0, 1174, 1172, 1, 0, 0, 0, 1174, 1175, 1, 0, 0, 0, 1175, 1178, 1, 0, 0, 0, 1176, 1174,
    1, 0, 0, 0, 1177, 1168, 1, 0, 0, 0, 1177, 1178, 1, 0, 0, 0, 1178, 1180, 1, 0, 0, 0, 1179,
    1181, 3, 278, 139, 0, 1180, 1179, 1, 0, 0, 0, 1180, 1181, 1, 0, 0, 0, 1181, 109, 1,
    0, 0, 0, 1182, 1183, 5, 207, 0, 0, 1183, 1185, 5, 103, 0, 0, 1184, 1186, 5, 188, 0,
    0, 1185, 1184, 1, 0, 0, 0, 1185, 1186, 1, 0, 0, 0, 1186, 1187, 1, 0, 0, 0, 1187, 1189,
    3, 186, 93, 0, 1188, 1190, 3, 312, 156, 0, 1189, 1188, 1, 0, 0, 0, 1189, 1190, 1, 0,
    0, 0, 1190, 1191, 1, 0, 0, 0, 1191, 1192, 3, 212, 106, 0, 1192, 111, 1, 0, 0, 0, 1193,
    1206, 3, 132, 66, 0, 1194, 1206, 3, 134, 67, 0, 1195, 1206, 3, 136, 68, 0, 1196, 1206,
    3, 130, 65, 0, 1197, 1206, 3, 128, 64, 0, 1198, 1206, 3, 126, 63, 0, 1199, 1206, 3,
    124, 62, 0, 1200, 1206, 3, 122, 61, 0, 1201, 1206, 3, 120, 60, 0, 1202, 1206, 3, 118,
    59, 0, 1203, 1206, 3, 116, 58, 0, 1204, 1206, 3, 114, 57, 0, 1205, 1193, 1, 0, 0, 0,
    1205, 1194, 1, 0, 0, 0, 1205, 1195, 1, 0, 0, 0, 1205, 1196, 1, 0, 0, 0, 1205, 1197,
    1, 0, 0, 0, 1205, 1198, 1, 0, 0, 0, 1205, 1199, 1, 0, 0, 0, 1205, 1200, 1, 0, 0, 0, 1205,
    1201, 1, 0, 0, 0, 1205, 1202, 1, 0, 0, 0, 1205, 1203, 1, 0, 0, 0, 1205, 1204, 1, 0, 0,
    0, 1206, 113, 1, 0, 0, 0, 1207, 1208, 5, 179, 0, 0, 1208, 1220, 7, 7, 0, 0, 1209, 1211,
    5, 115, 0, 0, 1210, 1209, 1, 0, 0, 0, 1210, 1211, 1, 0, 0, 0, 1211, 1212, 1, 0, 0, 0,
    1212, 1217, 3, 338, 169, 0, 1213, 1214, 5, 271, 0, 0, 1214, 1216, 3, 338, 169, 0,
    1215, 1213, 1, 0, 0, 0, 1216, 1219, 1, 0, 0, 0, 1217, 1215, 1, 0, 0, 0, 1217, 1218,
    1, 0, 0, 0, 1218, 1221, 1, 0, 0, 0, 1219, 1217, 1, 0, 0, 0, 1220, 1210, 1, 0, 0, 0, 1220,
    1221, 1, 0, 0, 0, 1221, 115, 1, 0, 0, 0, 1222, 1223, 5, 179, 0, 0, 1223, 1226, 5, 189,
    0, 0, 1224, 1225, 5, 94, 0, 0, 1225, 1227, 3, 186, 93, 0, 1226, 1224, 1, 0, 0, 0, 1226,
    1227, 1, 0, 0, 0, 1227, 1239, 1, 0, 0, 0, 1228, 1230, 5, 115, 0, 0, 1229, 1228, 1, 0,
    0, 0, 1229, 1230, 1, 0, 0, 0, 1230, 1231, 1, 0, 0, 0, 1231, 1236, 3, 338, 169, 0, 1232,
    1233, 5, 271, 0, 0, 1233, 1235, 3, 338, 169, 0, 1234, 1232, 1, 0, 0, 0, 1235, 1238,
    1, 0, 0, 0, 1236, 1234, 1, 0, 0, 0, 1236, 1237, 1, 0, 0, 0, 1237, 1240, 1, 0, 0, 0, 1238,
    1236, 1, 0, 0, 0, 1239, 1229, 1, 0, 0, 0, 1239, 1240, 1, 0, 0, 0, 1240, 117, 1, 0, 0,
    0, 1241, 1243, 5, 179, 0, 0, 1242, 1244, 7, 8, 0, 0, 1243, 1242, 1, 0, 0, 0, 1243, 1244,
    1, 0, 0, 0, 1244, 1245, 1, 0, 0, 0, 1245, 1248, 5, 85, 0, 0, 1246, 1247, 5, 94, 0, 0,
    1247, 1249, 3, 184, 92, 0, 1248, 1246, 1, 0, 0, 0, 1248, 1249, 1, 0, 0, 0, 1249, 1261,
    1, 0, 0, 0, 1250, 1252, 5, 115, 0, 0, 1251, 1250, 1, 0, 0, 0, 1251, 1252, 1, 0, 0, 0,
    1252, 1253, 1, 0, 0, 0, 1253, 1258, 3, 338, 169, 0, 1254, 1255, 5, 271, 0, 0, 1255,
    1257, 3, 338, 169, 0, 1256, 1254, 1, 0, 0, 0, 1257, 1260, 1, 0, 0, 0, 1258, 1256, 1,
    0, 0, 0, 1258, 1259, 1, 0, 0, 0, 1259, 1262, 1, 0, 0, 0, 1260, 1258, 1, 0, 0, 0, 1261,
    1251, 1, 0, 0, 0, 1261, 1262, 1, 0, 0, 0, 1262, 119, 1, 0, 0, 0, 1263, 1264, 5, 179,
    0, 0, 1264, 1265, 5, 37, 0, 0, 1265, 1266, 5, 188, 0, 0, 1266, 1267, 3, 186, 93, 0,
    1267, 121, 1, 0, 0, 0, 1268, 1269, 5, 179, 0, 0, 1269, 1270, 5, 37, 0, 0, 1270, 1271,
    5, 212, 0, 0, 1271, 1272, 3, 188, 94, 0, 1272, 123, 1, 0, 0, 0, 1273, 1274, 5, 179,
    0, 0, 1274, 1275, 5, 188, 0, 0, 1275, 1276, 5, 182, 0, 0, 1276, 1277, 3, 186, 93, 0,
    1277, 125, 1, 0, 0, 0, 1278, 1279, 5, 179, 0, 0, 1279, 1280, 5, 32, 0, 0, 1280, 1281,
    5, 182, 0, 0, 1281, 1282, 3, 186, 93, 0, 1282, 127, 1, 0, 0, 0, 1283, 1285, 5, 179,
    0, 0, 1284, 1286, 5, 154, 0, 0, 1285, 1284, 1, 0, 0, 0, 1285, 1286, 1, 0, 0, 0, 1286,
    1287, 1, 0, 0, 0, 1287, 1288, 5, 146, 0, 0, 1288, 1289, 3, 186, 93, 0, 1289, 129, 1,
    0, 0, 0, 1290, 1291, 5, 179, 0, 0, 1291, 1292, 5, 73, 0, 0, 1292, 1293, 5, 94, 0, 0,
    1293, 1303, 3, 186, 93, 0, 1294, 1295, 5, 145, 0, 0, 1295, 1296, 5, 265, 0, 0, 1296,
    1299, 3, 326, 163, 0, 1297, 1298, 5, 263, 0, 0, 1298, 1300, 3, 326, 163, 0, 1299,
    1297, 1, 0, 0, 0, 1299, 1300, 1, 0, 0, 0, 1300, 1301, 1, 0, 0, 0, 1301, 1302, 5, 266,
    0, 0, 1302, 1304, 1, 0, 0, 0, 1303, 1294, 1, 0, 0, 0, 1303, 1304, 1, 0, 0, 0, 1304, 131,
    1, 0, 0, 0, 1305, 1307, 5, 179, 0, 0, 1306, 1308, 5, 39, 0, 0, 1307, 1306, 1, 0, 0, 0,
    1307, 1308, 1, 0, 0, 0, 1308, 1309, 1, 0, 0, 0, 1309, 1310, 5, 167, 0, 0, 1310, 133,
    1, 0, 0, 0, 1311, 1312, 5, 179, 0, 0, 1312, 1313, 5, 166, 0, 0, 1313, 1314, 5, 86, 0,
    0, 1314, 1315, 5, 87, 0, 0, 1315, 1316, 3, 382, 191, 0, 1316, 135, 1, 0, 0, 0, 1317,
    1332, 3, 138, 69, 0, 1318, 1332, 3, 140, 70, 0, 1319, 1332, 3, 142, 71, 0, 1320, 1321,
    5, 179, 0, 0, 1321, 1322, 5, 86, 0, 0, 1322, 1323, 7, 9, 0, 0, 1323, 1329, 3, 382, 191,
    0, 1324, 1325, 5, 136, 0, 0, 1325, 1327, 7, 10, 0, 0, 1326, 1328, 3, 376, 188, 0, 1327,
    1326, 1, 0, 0, 0, 1327, 1328, 1, 0, 0, 0, 1328, 1330, 1, 0, 0, 0, 1329, 1324, 1, 0, 0,
    0, 1329, 1330, 1, 0, 0, 0, 1330, 1332, 1, 0, 0, 0, 1331, 1317, 1, 0, 0, 0, 1331, 1318,
    1, 0, 0, 0, 1331, 1319, 1, 0, 0, 0, 1331, 1320, 1, 0, 0, 0, 1332, 137, 1, 0, 0, 0, 1333,
    1334, 5, 179, 0, 0, 1334, 1335, 5, 86, 0, 0, 1335, 1336, 7, 9, 0, 0, 1336, 1342, 3,
    382, 191, 0, 1337, 1338, 5, 136, 0, 0, 1338, 1340, 5, 46, 0, 0, 1339, 1341, 3, 184,
    92, 0, 1340, 1339, 1, 0, 0, 0, 1340, 1341, 1, 0, 0, 0, 1341, 1343, 1, 0, 0, 0, 1342,
    1337, 1, 0, 0, 0, 1342, 1343, 1, 0, 0, 0, 1343, 139, 1, 0, 0, 0, 1344, 1345, 5, 179,
    0, 0, 1345, 1346, 5, 86, 0, 0, 1346, 1347, 7, 9, 0, 0, 1347, 1353, 3, 382, 191, 0, 1348,
    1349, 5, 136, 0, 0, 1349, 1351, 5, 188, 0, 0, 1350, 1352, 3, 186, 93, 0, 1351, 1350,
    1, 0, 0, 0, 1351, 1352, 1, 0, 0, 0, 1352, 1354, 1, 0, 0, 0, 1353, 1348, 1, 0, 0, 0, 1353,
    1354, 1, 0, 0, 0, 1354, 141, 1, 0, 0, 0, 1355, 1356, 5, 179, 0, 0, 1356, 1357, 5, 86,
    0, 0, 1357, 1358, 7, 9, 0, 0, 1358, 1364, 3, 382, 191, 0, 1359, 1360, 5, 136, 0, 0,
    1360, 1362, 5, 32, 0, 0, 1361, 1363, 3, 194, 97, 0, 1362, 1361, 1, 0, 0, 0, 1362, 1363,
    1, 0, 0, 0, 1363, 1365, 1, 0, 0, 0, 1364, 1359, 1, 0, 0, 0, 1364, 1365, 1, 0, 0, 0, 1365,
    143, 1, 0, 0, 0, 1366, 1370, 3, 146, 73, 0, 1367, 1370, 3, 148, 74, 0, 1368, 1370,
    3, 150, 75, 0, 1369, 1366, 1, 0, 0, 0, 1369, 1367, 1, 0, 0, 0, 1369, 1368, 1, 0, 0, 0,
    1370, 145, 1, 0, 0, 0, 1371, 1372, 5, 34, 0, 0, 1372, 1373, 5, 136, 0, 0, 1373, 1374,
    5, 46, 0, 0, 1374, 1375, 3, 184, 92, 0, 1375, 1378, 5, 108, 0, 0, 1376, 1379, 3, 338,
    169, 0, 1377, 1379, 5, 133, 0, 0, 1378, 1376, 1, 0, 0, 0, 1378, 1377, 1, 0, 0, 0, 1379,
    147, 1, 0, 0, 0, 1380, 1381, 5, 34, 0, 0, 1381, 1382, 5, 136, 0, 0, 1382, 1383, 5, 188,
    0, 0, 1383, 1384, 3, 186, 93, 0, 1384, 1387, 5, 108, 0, 0, 1385, 1388, 3, 338, 169,
    0, 1386, 1388, 5, 133, 0, 0, 1387, 1385, 1, 0, 0, 0, 1387, 1386, 1, 0, 0, 0, 1388, 149,
    1, 0, 0, 0, 1389, 1390, 5, 34, 0, 0, 1390, 1391, 5, 136, 0, 0, 1391, 1392, 5, 32, 0,
    0, 1392, 1393, 3, 194, 97, 0, 1393, 1396, 5, 108, 0, 0, 1394, 1397, 3, 338, 169, 0,
    1395, 1397, 5, 133, 0, 0, 1396, 1394, 1, 0, 0, 0, 1396, 1395, 1, 0, 0, 0, 1397, 151,
    1, 0, 0, 0, 1398, 1399, 5, 67, 0, 0, 1399, 1400, 3, 4, 2, 0, 1400, 153, 1, 0, 0, 0, 1401,
    1407, 5, 176, 0, 0, 1402, 1408, 5, 2, 0, 0, 1403, 1404, 3, 382, 191, 0, 1404, 1405,
    5, 249, 0, 0, 1405, 1406, 3, 326, 163, 0, 1406, 1408, 1, 0, 0, 0, 1407, 1402, 1, 0,
    0, 0, 1407, 1403, 1, 0, 0, 0, 1407, 1408, 1, 0, 0, 0, 1408, 155, 1, 0, 0, 0, 1409, 1410,
    5, 264, 0, 0, 1410, 1411, 5, 180, 0, 0, 1411, 1421, 5, 265, 0, 0, 1412, 1414, 3, 338,
    169, 0, 1413, 1412, 1, 0, 0, 0, 1413, 1414, 1, 0, 0, 0, 1414, 1422, 1, 0, 0, 0, 1415,
    1418, 3, 338, 169, 0, 1416, 1417, 5, 263, 0, 0, 1417, 1419, 3, 326, 163, 0, 1418,
    1416, 1, 0, 0, 0, 1418, 1419, 1, 0, 0, 0, 1419, 1422, 1, 0, 0, 0, 1420, 1422, 3, 326,
    163, 0, 1421, 1413, 1, 0, 0, 0, 1421, 1415, 1, 0, 0, 0, 1421, 1420, 1, 0, 0, 0, 1422,
    1423, 1, 0, 0, 0, 1423, 1424, 5, 266, 0, 0, 1424, 157, 1, 0, 0, 0, 1425, 1426, 5, 107,
    0, 0, 1426, 1427, 5, 121, 0, 0, 1427, 1428, 3, 186, 93, 0, 1428, 159, 1, 0, 0, 0, 1429,
    1430, 5, 118, 0, 0, 1430, 1431, 5, 45, 0, 0, 1431, 1432, 5, 98, 0, 0, 1432, 1434, 5,
    274, 0, 0, 1433, 1435, 5, 144, 0, 0, 1434, 1433, 1, 0, 0, 0, 1434, 1435, 1, 0, 0, 0,
    1435, 1436, 1, 0, 0, 0, 1436, 1437, 5, 103, 0, 0, 1437, 1438, 5, 188, 0, 0, 1438, 1448,
    3, 186, 93, 0, 1439, 1440, 5, 145, 0, 0, 1440, 1441, 5, 265, 0, 0, 1441, 1444, 3, 326,
    163, 0, 1442, 1443, 5, 263, 0, 0, 1443, 1445, 3, 326, 163, 0, 1444, 1442, 1, 0, 0,
    0, 1444, 1445, 1, 0, 0, 0, 1445, 1446, 1, 0, 0, 0, 1446, 1447, 5, 266, 0, 0, 1447, 1449,
    1, 0, 0, 0, 1448, 1439, 1, 0, 0, 0, 1448, 1449, 1, 0, 0, 0, 1449, 161, 1, 0, 0, 0, 1450,
    1454, 3, 164, 82, 0, 1451, 1454, 3, 166, 83, 0, 1452, 1454, 3, 168, 84, 0, 1453, 1450,
    1, 0, 0, 0, 1453, 1451, 1, 0, 0, 0, 1453, 1452, 1, 0, 0, 0, 1454, 163, 1, 0, 0, 0, 1455,
    1456, 5, 162, 0, 0, 1456, 1469, 3, 186, 93, 0, 1457, 1458, 5, 145, 0, 0, 1458, 1459,
    5, 265, 0, 0, 1459, 1464, 3, 326, 163, 0, 1460, 1461, 5, 263, 0, 0, 1461, 1463, 3,
    326, 163, 0, 1462, 1460, 1, 0, 0, 0, 1463, 1466, 1, 0, 0, 0, 1464, 1465, 1, 0, 0, 0,
    1464, 1462, 1, 0, 0, 0, 1465, 1467, 1, 0, 0, 0, 1466, 1464, 1, 0, 0, 0, 1467, 1468,
    5, 266, 0, 0, 1468, 1470, 1, 0, 0, 0, 1469, 1457, 1, 0, 0, 0, 1469, 1470, 1, 0, 0, 0,
    1470, 165, 1, 0, 0, 0, 1471, 1472, 5, 162, 0, 0, 1472, 1473, 5, 13, 0, 0, 1473, 167,
    1, 0, 0, 0, 1474, 1475, 5, 162, 0, 0, 1475, 1476, 5, 85, 0, 0, 1476, 1477, 3, 190, 95,
    0, 1477, 169, 1, 0, 0, 0, 1478, 1479, 5, 93, 0, 0, 1479, 1480, 5, 66, 0, 0, 1480, 171,
    1, 0, 0, 0, 1481, 1482, 5, 93, 0, 0, 1482, 1483, 5, 132, 0, 0, 1483, 1484, 5, 66, 0,
    0, 1484, 173, 1, 0, 0, 0, 1485, 1486, 3, 376, 188, 0, 1486, 175, 1, 0, 0, 0, 1487, 1488,
    3, 376, 188, 0, 1488, 177, 1, 0, 0, 0, 1489, 1490, 3, 376, 188, 0, 1490, 179, 1, 0,
    0, 0, 1491, 1492, 3, 376, 188, 0, 1492, 181, 1, 0, 0, 0, 1493, 1494, 3, 376, 188, 0,
    1494, 183, 1, 0, 0, 0, 1495, 1496, 3, 376, 188, 0, 1496, 185, 1, 0, 0, 0, 1497, 1502,
    3, 382, 191, 0, 1498, 1499, 5, 261, 0, 0, 1499, 1501, 3, 382, 191, 0, 1500, 1498,
    1, 0, 0, 0, 1501, 1504, 1, 0, 0, 0, 1502, 1500, 1, 0, 0, 0, 1502, 1503, 1, 0, 0, 0, 1503,
    187, 1, 0, 0, 0, 1504, 1502, 1, 0, 0, 0, 1505, 1510, 3, 382, 191, 0, 1506, 1507, 5,
    261, 0, 0, 1507, 1509, 3, 382, 191, 0, 1508, 1506, 1, 0, 0, 0, 1509, 1512, 1, 0, 0,
    0, 1510, 1508, 1, 0, 0, 0, 1510, 1511, 1, 0, 0, 0, 1511, 189, 1, 0, 0, 0, 1512, 1510,
    1, 0, 0, 0, 1513, 1516, 3, 386, 193, 0, 1514, 1516, 3, 376, 188, 0, 1515, 1513, 1,
    0, 0, 0, 1515, 1514, 1, 0, 0, 0, 1516, 191, 1, 0, 0, 0, 1517, 1518, 1, 0, 0, 0, 1518,
    193, 1, 0, 0, 0, 1519, 1520, 4, 97, 0, 0, 1520, 1523, 3, 192, 96, 0, 1521, 1523, 3,
    378, 189, 0, 1522, 1519, 1, 0, 0, 0, 1522, 1521, 1, 0, 0, 0, 1523, 195, 1, 0, 0, 0, 1524,
    1525, 3, 376, 188, 0, 1525, 197, 1, 0, 0, 0, 1526, 1527, 4, 99, 1, 0, 1527, 1530, 3,
    192, 96, 0, 1528, 1530, 3, 378, 189, 0, 1529, 1526, 1, 0, 0, 0, 1529, 1528, 1, 0, 0,
    0, 1530, 199, 1, 0, 0, 0, 1531, 1534, 3, 186, 93, 0, 1532, 1534, 3, 188, 94, 0, 1533,
    1531, 1, 0, 0, 0, 1533, 1532, 1, 0, 0, 0, 1534, 201, 1, 0, 0, 0, 1535, 1536, 5, 21, 0,
    0, 1536, 1537, 5, 26, 0, 0, 1537, 1539, 3, 312, 156, 0, 1538, 1535, 1, 0, 0, 0, 1538,
    1539, 1, 0, 0, 0, 1539, 1541, 1, 0, 0, 0, 1540, 1542, 3, 228, 114, 0, 1541, 1540, 1,
    0, 0, 0, 1541, 1542, 1, 0, 0, 0, 1542, 1546, 1, 0, 0, 0, 1543, 1544, 5, 168, 0, 0, 1544,
    1545, 5, 79, 0, 0, 1545, 1547, 3, 262, 131, 0, 1546, 1543, 1, 0, 0, 0, 1546, 1547,
    1, 0, 0, 0, 1547, 1551, 1, 0, 0, 0, 1548, 1549, 5, 216, 0, 0, 1549, 1550, 5, 175, 0,
    0, 1550, 1552, 3, 256, 128, 0, 1551, 1548, 1, 0, 0, 0, 1551, 1552, 1, 0, 0, 0, 1552,
    1556, 1, 0, 0, 0, 1553, 1554, 5, 23, 0, 0, 1554, 1555, 5, 9, 0, 0, 1555, 1557, 3, 238,
    119, 0, 1556, 1553, 1, 0, 0, 0, 1556, 1557, 1, 0, 0, 0, 1557, 1560, 1, 0, 0, 0, 1558,
    1559, 5, 24, 0, 0, 1559, 1561, 3, 338, 169, 0, 1560, 1558, 1, 0, 0, 0, 1560, 1561,
    1, 0, 0, 0, 1561, 1572, 1, 0, 0, 0, 1562, 1563, 5, 30, 0, 0, 1563, 1564, 5, 94, 0, 0,
    1564, 1569, 3, 376, 188, 0, 1565, 1566, 5, 216, 0, 0, 1566, 1567, 5, 151, 0, 0, 1567,
    1568, 5, 249, 0, 0, 1568, 1570, 5, 277, 0, 0, 1569, 1565, 1, 0, 0, 0, 1569, 1570, 1,
    0, 0, 0, 1570, 1573, 1, 0, 0, 0, 1571, 1573, 5, 197, 0, 0, 1572, 1562, 1, 0, 0, 0, 1572,
    1571, 1, 0, 0, 0, 1572, 1573, 1, 0, 0, 0, 1573, 1576, 1, 0, 0, 0, 1574, 1575, 5, 25,
    0, 0, 1575, 1577, 3, 256, 128, 0, 1576, 1574, 1, 0, 0, 0, 1576, 1577, 1, 0, 0, 0, 1577,
    203, 1, 0, 0, 0, 1578, 1583, 3, 206, 103, 0, 1579, 1580, 5, 263, 0, 0, 1580, 1582,
    3, 206, 103, 0, 1581, 1579, 1, 0, 0, 0, 1582, 1585, 1, 0, 0, 0, 1583, 1581, 1, 0, 0,
    0, 1583, 1584, 1, 0, 0, 0, 1584, 205, 1, 0, 0, 0, 1585, 1583, 1, 0, 0, 0, 1586, 1587,
    3, 376, 188, 0, 1587, 1588, 5, 249, 0, 0, 1588, 1589, 3, 326, 163, 0, 1589, 207, 1,
    0, 0, 0, 1590, 1592, 5, 265, 0, 0, 1591, 1593, 3, 210, 105, 0, 1592, 1591, 1, 0, 0,
    0, 1592, 1593, 1, 0, 0, 0, 1593, 1600, 1, 0, 0, 0, 1594, 1596, 5, 263, 0, 0, 1595, 1597,
    3, 210, 105, 0, 1596, 1595, 1, 0, 0, 0, 1596, 1597, 1, 0, 0, 0, 1597, 1599, 1, 0, 0,
    0, 1598, 1594, 1, 0, 0, 0, 1599, 1602, 1, 0, 0, 0, 1600, 1598, 1, 0, 0, 0, 1600, 1601,
    1, 0, 0, 0, 1601, 1603, 1, 0, 0, 0, 1602, 1600, 1, 0, 0, 0, 1603, 1604, 5, 266, 0, 0,
    1604, 209, 1, 0, 0, 0, 1605, 1607, 3, 182, 91, 0, 1606, 1608, 3, 228, 114, 0, 1607,
    1606, 1, 0, 0, 0, 1607, 1608, 1, 0, 0, 0, 1608, 211, 1, 0, 0, 0, 1609, 1611, 3, 214,
    107, 0, 1610, 1609, 1, 0, 0, 0, 1610, 1611, 1, 0, 0, 0, 1611, 1612, 1, 0, 0, 0, 1612,
    1613, 3, 266, 133, 0, 1613, 213, 1, 0, 0, 0, 1614, 1615, 5, 216, 0, 0, 1615, 1620,
    3, 288, 144, 0, 1616, 1617, 5, 263, 0, 0, 1617, 1619, 3, 288, 144, 0, 1618, 1616,
    1, 0, 0, 0, 1619, 1622, 1, 0, 0, 0, 1620, 1618, 1, 0, 0, 0, 1620, 1621, 1, 0, 0, 0, 1621,
    215, 1, 0, 0, 0, 1622, 1620, 1, 0, 0, 0, 1623, 1624, 5, 150, 0, 0, 1624, 1625, 5, 110,
    0, 0, 1625, 1627, 3, 312, 156, 0, 1626, 1628, 5, 53, 0, 0, 1627, 1626, 1, 0, 0, 0, 1627,
    1628, 1, 0, 0, 0, 1628, 1632, 1, 0, 0, 0, 1629, 1633, 5, 225, 0, 0, 1630, 1631, 5, 263,
    0, 0, 1631, 1633, 5, 225, 0, 0, 1632, 1629, 1, 0, 0, 0, 1632, 1630, 1, 0, 0, 0, 1632,
    1633, 1, 0, 0, 0, 1633, 1637, 1, 0, 0, 0, 1634, 1638, 5, 226, 0, 0, 1635, 1636, 5, 263,
    0, 0, 1636, 1638, 5, 226, 0, 0, 1637, 1634, 1, 0, 0, 0, 1637, 1635, 1, 0, 0, 0, 1637,
    1638, 1, 0, 0, 0, 1638, 1651, 1, 0, 0, 0, 1639, 1640, 5, 263, 0, 0, 1640, 1643, 3, 218,
    109, 0, 1641, 1643, 3, 218, 109, 0, 1642, 1639, 1, 0, 0, 0, 1642, 1641, 1, 0, 0, 0,
    1643, 1648, 1, 0, 0, 0, 1644, 1645, 5, 263, 0, 0, 1645, 1647, 3, 218, 109, 0, 1646,
    1644, 1, 0, 0, 0, 1647, 1650, 1, 0, 0, 0, 1648, 1649, 1, 0, 0, 0, 1648, 1646, 1, 0, 0,
    0, 1649, 1652, 1, 0, 0, 0, 1650, 1648, 1, 0, 0, 0, 1651, 1642, 1, 0, 0, 0, 1651, 1652,
    1, 0, 0, 0, 1652, 217, 1, 0, 0, 0, 1653, 1654, 5, 81, 0, 0, 1654, 1655, 5, 110, 0, 0,
    1655, 1656, 3, 312, 156, 0, 1656, 1657, 5, 224, 0, 0, 1657, 1658, 3, 186, 93, 0, 1658,
    1660, 3, 312, 156, 0, 1659, 1661, 5, 53, 0, 0, 1660, 1659, 1, 0, 0, 0, 1660, 1661,
    1, 0, 0, 0, 1661, 1663, 1, 0, 0, 0, 1662, 1664, 5, 225, 0, 0, 1663, 1662, 1, 0, 0, 0,
    1663, 1664, 1, 0, 0, 0, 1664, 1666, 1, 0, 0, 0, 1665, 1667, 5, 226, 0, 0, 1666, 1665,
    1, 0, 0, 0, 1666, 1667, 1, 0, 0, 0, 1667, 219, 1, 0, 0, 0, 1668, 1669, 3, 194, 97, 0,
    1669, 1672, 3, 348, 174, 0, 1670, 1671, 5, 34, 0, 0, 1671, 1673, 3, 338, 169, 0, 1672,
    1670, 1, 0, 0, 0, 1672, 1673, 1, 0, 0, 0, 1673, 221, 1, 0, 0, 0, 1674, 1675, 3, 182,
    91, 0, 1675, 1677, 3, 348, 174, 0, 1676, 1678, 3, 228, 114, 0, 1677, 1676, 1, 0, 0,
    0, 1677, 1678, 1, 0, 0, 0, 1678, 223, 1, 0, 0, 0, 1679, 1680, 3, 226, 113, 0, 1680,
    225, 1, 0, 0, 0, 1681, 1682, 3, 182, 91, 0, 1682, 1690, 3, 348, 174, 0, 1683, 1687,
    3, 234, 117, 0, 1684, 1686, 3, 234, 117, 0, 1685, 1684, 1, 0, 0, 0, 1686, 1689, 1,
    0, 0, 0, 1687, 1688, 1, 0, 0, 0, 1687, 1685, 1, 0, 0, 0, 1688, 1691, 1, 0, 0, 0, 1689,
    1687, 1, 0, 0, 0, 1690, 1683, 1, 0, 0, 0, 1690, 1691, 1, 0, 0, 0, 1691, 1693, 1, 0, 0,
    0, 1692, 1694, 3, 228, 114, 0, 1693, 1692, 1, 0, 0, 0, 1693, 1694, 1, 0, 0, 0, 1694,
    1697, 1, 0, 0, 0, 1695, 1696, 5, 150, 0, 0, 1696, 1698, 5, 110, 0, 0, 1697, 1695, 1,
    0, 0, 0, 1697, 1698, 1, 0, 0, 0, 1698, 227, 1, 0, 0, 0, 1699, 1700, 5, 34, 0, 0, 1700,
    1701, 3, 338, 169, 0, 1701, 229, 1, 0, 0, 0, 1702, 1710, 3, 220, 110, 0, 1703, 1707,
    3, 234, 117, 0, 1704, 1706, 3, 234, 117, 0, 1705, 1704, 1, 0, 0, 0, 1706, 1709, 1,
    0, 0, 0, 1707, 1708, 1, 0, 0, 0, 1707, 1705, 1, 0, 0, 0, 1708, 1711, 1, 0, 0, 0, 1709,
    1707, 1, 0, 0, 0, 1710, 1703, 1, 0, 0, 0, 1710, 1711, 1, 0, 0, 0, 1711, 231, 1, 0, 0,
    0, 1712, 1713, 3, 182, 91, 0, 1713, 1716, 3, 348, 174, 0, 1714, 1715, 5, 34, 0, 0,
    1715, 1717, 3, 338, 169, 0, 1716, 1714, 1, 0, 0, 0, 1716, 1717, 1, 0, 0, 0, 1717, 1725,
    1, 0, 0, 0, 1718, 1722, 3, 234, 117, 0, 1719, 1721, 3, 234, 117, 0, 1720, 1719, 1,
    0, 0, 0, 1721, 1724, 1, 0, 0, 0, 1722, 1723, 1, 0, 0, 0, 1722, 1720, 1, 0, 0, 0, 1723,
    1726, 1, 0, 0, 0, 1724, 1722, 1, 0, 0, 0, 1725, 1718, 1, 0, 0, 0, 1725, 1726, 1, 0, 0,
    0, 1726, 233, 1, 0, 0, 0, 1727, 1729, 5, 132, 0, 0, 1728, 1727, 1, 0, 0, 0, 1728, 1729,
    1, 0, 0, 0, 1729, 1730, 1, 0, 0, 0, 1730, 1733, 5, 133, 0, 0, 1731, 1733, 3, 236, 118,
    0, 1732, 1728, 1, 0, 0, 0, 1732, 1731, 1, 0, 0, 0, 1733, 235, 1, 0, 0, 0, 1734, 1735,
    5, 60, 0, 0, 1735, 1743, 3, 326, 163, 0, 1736, 1737, 5, 35, 0, 0, 1737, 1743, 3, 326,
    163, 0, 1738, 1739, 5, 51, 0, 0, 1739, 1743, 3, 326, 163, 0, 1740, 1741, 5, 16, 0,
    0, 1741, 1743, 3, 384, 192, 0, 1742, 1734, 1, 0, 0, 0, 1742, 1736, 1, 0, 0, 0, 1742,
    1738, 1, 0, 0, 0, 1742, 1740, 1, 0, 0, 0, 1743, 237, 1, 0, 0, 0, 1744, 1745, 7, 11, 0,
    0, 1745, 239, 1, 0, 0, 0, 1746, 1751, 3, 242, 121, 0, 1747, 1748, 5, 263, 0, 0, 1748,
    1750, 3, 242, 121, 0, 1749, 1747, 1, 0, 0, 0, 1750, 1753, 1, 0, 0, 0, 1751, 1752, 1,
    0, 0, 0, 1751, 1749, 1, 0, 0, 0, 1752, 1756, 1, 0, 0, 0, 1753, 1751, 1, 0, 0, 0, 1754,
    1755, 5, 263, 0, 0, 1755, 1757, 3, 244, 122, 0, 1756, 1754, 1, 0, 0, 0, 1756, 1757,
    1, 0, 0, 0, 1757, 1760, 1, 0, 0, 0, 1758, 1760, 3, 244, 122, 0, 1759, 1746, 1, 0, 0,
    0, 1759, 1758, 1, 0, 0, 0, 1760, 241, 1, 0, 0, 0, 1761, 1763, 5, 89, 0, 0, 1762, 1764,
    3, 312, 156, 0, 1763, 1762, 1, 0, 0, 0, 1763, 1764, 1, 0, 0, 0, 1764, 1765, 1, 0, 0,
    0, 1765, 1766, 5, 146, 0, 0, 1766, 1767, 3, 384, 192, 0, 1767, 243, 1, 0, 0, 0, 1768,
    1770, 5, 154, 0, 0, 1769, 1771, 3, 312, 156, 0, 1770, 1769, 1, 0, 0, 0, 1770, 1771,
    1, 0, 0, 0, 1771, 1772, 1, 0, 0, 0, 1772, 1773, 5, 265, 0, 0, 1773, 1774, 5, 145, 0,
    0, 1774, 1780, 3, 246, 123, 0, 1775, 1776, 5, 263, 0, 0, 1776, 1777, 5, 145, 0, 0,
    1777, 1779, 3, 246, 123, 0, 1778, 1775, 1, 0, 0, 0, 1779, 1782, 1, 0, 0, 0, 1780, 1781,
    1, 0, 0, 0, 1780, 1778, 1, 0, 0, 0, 1781, 1783, 1, 0, 0, 0, 1782, 1780, 1, 0, 0, 0, 1783,
    1784, 5, 266, 0, 0, 1784, 245, 1, 0, 0, 0, 1785, 1786, 5, 210, 0, 0, 1786, 1787, 3,
    252, 126, 0, 1787, 1788, 3, 326, 163, 0, 1788, 1801, 1, 0, 0, 0, 1789, 1790, 3, 326,
    163, 0, 1790, 1791, 3, 250, 125, 0, 1791, 1793, 1, 0, 0, 0, 1792, 1789, 1, 0, 0, 0,
    1792, 1793, 1, 0, 0, 0, 1793, 1794, 1, 0, 0, 0, 1794, 1798, 5, 211, 0, 0, 1795, 1796,
    3, 250, 125, 0, 1796, 1797, 3, 326, 163, 0, 1797, 1799, 1, 0, 0, 0, 1798, 1795, 1,
    0, 0, 0, 1798, 1799, 1, 0, 0, 0, 1799, 1801, 1, 0, 0, 0, 1800, 1785, 1, 0, 0, 0, 1800,
    1792, 1, 0, 0, 0, 1801, 247, 1, 0, 0, 0, 1802, 1803, 5, 30, 0, 0, 1803, 1804, 5, 94,
    0, 0, 1804, 1809, 3, 382, 191, 0, 1805, 1806, 5, 216, 0, 0, 1806, 1807, 5, 151, 0,
    0, 1807, 1808, 5, 249, 0, 0, 1808, 1810, 3, 384, 192, 0, 1809, 1805, 1, 0, 0, 0, 1809,
    1810, 1, 0, 0, 0, 1810, 1813, 1, 0, 0, 0, 1811, 1813, 5, 197, 0, 0, 1812, 1802, 1, 0,
    0, 0, 1812, 1811, 1, 0, 0, 0, 1813, 249, 1, 0, 0, 0, 1814, 1820, 1, 0, 0, 0, 1815, 1820,
    5, 251, 0, 0, 1816, 1820, 5, 252, 0, 0, 1817, 1820, 5, 253, 0, 0, 1818, 1820, 5, 254,
    0, 0, 1819, 1814, 1, 0, 0, 0, 1819, 1815, 1, 0, 0, 0, 1819, 1816, 1, 0, 0, 0, 1819, 1817,
    1, 0, 0, 0, 1819, 1818, 1, 0, 0, 0, 1820, 251, 1, 0, 0, 0, 1821, 1830, 5, 249, 0, 0, 1822,
    1830, 5, 250, 0, 0, 1823, 1830, 5, 115, 0, 0, 1824, 1830, 5, 164, 0, 0, 1825, 1830,
    5, 163, 0, 0, 1826, 1830, 5, 15, 0, 0, 1827, 1830, 5, 94, 0, 0, 1828, 1830, 3, 250,
    125, 0, 1829, 1821, 1, 0, 0, 0, 1829, 1822, 1, 0, 0, 0, 1829, 1823, 1, 0, 0, 0, 1829,
    1824, 1, 0, 0, 0, 1829, 1825, 1, 0, 0, 0, 1829, 1826, 1, 0, 0, 0, 1829, 1827, 1, 0, 0,
    0, 1829, 1828, 1, 0, 0, 0, 1830, 253, 1, 0, 0, 0, 1831, 1832, 5, 115, 0, 0, 1832, 1835,
    3, 376, 188, 0, 1833, 1834, 7, 12, 0, 0, 1834, 1836, 5, 153, 0, 0, 1835, 1833, 1, 0,
    0, 0, 1835, 1836, 1, 0, 0, 0, 1836, 255, 1, 0, 0, 0, 1837, 1838, 5, 265, 0, 0, 1838,
    1843, 3, 264, 132, 0, 1839, 1840, 5, 263, 0, 0, 1840, 1842, 3, 264, 132, 0, 1841,
    1839, 1, 0, 0, 0, 1842, 1845, 1, 0, 0, 0, 1843, 1841, 1, 0, 0, 0, 1843, 1844, 1, 0, 0,
    0, 1844, 1846, 1, 0, 0, 0, 1845, 1843, 1, 0, 0, 0, 1846, 1847, 5, 266, 0, 0, 1847, 257,
    1, 0, 0, 0, 1848, 1849, 5, 265, 0, 0, 1849, 1854, 3, 220, 110, 0, 1850, 1851, 5, 263,
    0, 0, 1851, 1853, 3, 220, 110, 0, 1852, 1850, 1, 0, 0, 0, 1853, 1856, 1, 0, 0, 0, 1854,
    1855, 1, 0, 0, 0, 1854, 1852, 1, 0, 0, 0, 1855, 1857, 1, 0, 0, 0, 1856, 1854, 1, 0, 0,
    0, 1857, 1858, 5, 266, 0, 0, 1858, 259, 1, 0, 0, 0, 1859, 1864, 3, 326, 163, 0, 1860,
    1861, 5, 263, 0, 0, 1861, 1863, 3, 326, 163, 0, 1862, 1860, 1, 0, 0, 0, 1863, 1866,
    1, 0, 0, 0, 1864, 1862, 1, 0, 0, 0, 1864, 1865, 1, 0, 0, 0, 1865, 261, 1, 0, 0, 0, 1866,
    1864, 1, 0, 0, 0, 1867, 1877, 5, 52, 0, 0, 1868, 1869, 5, 71, 0, 0, 1869, 1870, 5, 191,
    0, 0, 1870, 1871, 5, 26, 0, 0, 1871, 1875, 3, 338, 169, 0, 1872, 1873, 5, 63, 0, 0,
    1873, 1874, 5, 26, 0, 0, 1874, 1876, 3, 338, 169, 0, 1875, 1872, 1, 0, 0, 0, 1875,
    1876, 1, 0, 0, 0, 1876, 1878, 1, 0, 0, 0, 1877, 1868, 1, 0, 0, 0, 1877, 1878, 1, 0, 0,
    0, 1878, 1883, 1, 0, 0, 0, 1879, 1880, 5, 117, 0, 0, 1880, 1881, 5, 191, 0, 0, 1881,
    1882, 5, 26, 0, 0, 1882, 1884, 3, 338, 169, 0, 1883, 1879, 1, 0, 0, 0, 1883, 1884,
    1, 0, 0, 0, 1884, 263, 1, 0, 0, 0, 1885, 1888, 3, 382, 191, 0, 1886, 1887, 5, 249, 0,
    0, 1887, 1889, 3, 326, 163, 0, 1888, 1886, 1, 0, 0, 0, 1888, 1889, 1, 0, 0, 0, 1889,
    265, 1, 0, 0, 0, 1890, 1901, 3, 268, 134, 0, 1891, 1892, 5, 139, 0, 0, 1892, 1893,
    5, 26, 0, 0, 1893, 1898, 3, 272, 136, 0, 1894, 1895, 5, 263, 0, 0, 1895, 1897, 3, 272,
    136, 0, 1896, 1894, 1, 0, 0, 0, 1897, 1900, 1, 0, 0, 0, 1898, 1896, 1, 0, 0, 0, 1898,
    1899, 1, 0, 0, 0, 1899, 1902, 1, 0, 0, 0, 1900, 1898, 1, 0, 0, 0, 1901, 1891, 1, 0, 0,
    0, 1901, 1902, 1, 0, 0, 0, 1902, 1909, 1, 0, 0, 0, 1903, 1904, 5, 116, 0, 0, 1904, 1907,
    3, 326, 163, 0, 1905, 1906, 5, 135, 0, 0, 1906, 1908, 5, 277, 0, 0, 1907, 1905, 1,
    0, 0, 0, 1907, 1908, 1, 0, 0, 0, 1908, 1910, 1, 0, 0, 0, 1909, 1903, 1, 0, 0, 0, 1909,
    1910, 1, 0, 0, 0, 1910, 267, 1, 0, 0, 0, 1911, 1912, 6, 134, -1, 0, 1912, 1913, 3, 270,
    135, 0, 1913, 1928, 1, 0, 0, 0, 1914, 1915, 10, 2, 0, 0, 1915, 1917, 5, 100, 0, 0, 1916,
    1918, 3, 290, 145, 0, 1917, 1916, 1, 0, 0, 0, 1917, 1918, 1, 0, 0, 0, 1918, 1919, 1,
    0, 0, 0, 1919, 1927, 3, 268, 134, 3, 1920, 1921, 10, 1, 0, 0, 1921, 1923, 7, 13, 0,
    0, 1922, 1924, 3, 290, 145, 0, 1923, 1922, 1, 0, 0, 0, 1923, 1924, 1, 0, 0, 0, 1924,
    1925, 1, 0, 0, 0, 1925, 1927, 3, 268, 134, 2, 1926, 1914, 1, 0, 0, 0, 1926, 1920, 1,
    0, 0, 0, 1927, 1930, 1, 0, 0, 0, 1928, 1926, 1, 0, 0, 0, 1928, 1929, 1, 0, 0, 0, 1929,
    269, 1, 0, 0, 0, 1930, 1928, 1, 0, 0, 0, 1931, 1948, 3, 274, 137, 0, 1932, 1933, 5,
    188, 0, 0, 1933, 1948, 3, 186, 93, 0, 1934, 1935, 5, 211, 0, 0, 1935, 1940, 3, 326,
    163, 0, 1936, 1937, 5, 263, 0, 0, 1937, 1939, 3, 326, 163, 0, 1938, 1936, 1, 0, 0,
    0, 1939, 1942, 1, 0, 0, 0, 1940, 1938, 1, 0, 0, 0, 1940, 1941, 1, 0, 0, 0, 1941, 1948,
    1, 0, 0, 0, 1942, 1940, 1, 0, 0, 0, 1943, 1944, 5, 265, 0, 0, 1944, 1945, 3, 266, 133,
    0, 1945, 1946, 5, 266, 0, 0, 1946, 1948, 1, 0, 0, 0, 1947, 1931, 1, 0, 0, 0, 1947, 1932,
    1, 0, 0, 0, 1947, 1934, 1, 0, 0, 0, 1947, 1943, 1, 0, 0, 0, 1948, 271, 1, 0, 0, 0, 1949,
    1951, 3, 324, 162, 0, 1950, 1952, 7, 14, 0, 0, 1951, 1950, 1, 0, 0, 0, 1951, 1952,
    1, 0, 0, 0, 1952, 1955, 1, 0, 0, 0, 1953, 1954, 5, 134, 0, 0, 1954, 1956, 7, 15, 0, 0,
    1955, 1953, 1, 0, 0, 0, 1955, 1956, 1, 0, 0, 0, 1956, 273, 1, 0, 0, 0, 1957, 1959, 5,
    174, 0, 0, 1958, 1960, 3, 290, 145, 0, 1959, 1958, 1, 0, 0, 0, 1959, 1960, 1, 0, 0,
    0, 1960, 1962, 1, 0, 0, 0, 1961, 1963, 5, 183, 0, 0, 1962, 1961, 1, 0, 0, 0, 1962, 1963,
    1, 0, 0, 0, 1963, 1964, 1, 0, 0, 0, 1964, 1974, 3, 276, 138, 0, 1965, 1966, 5, 82, 0,
    0, 1966, 1971, 3, 302, 151, 0, 1967, 1968, 5, 263, 0, 0, 1968, 1970, 3, 302, 151,
    0, 1969, 1967, 1, 0, 0, 0, 1970, 1973, 1, 0, 0, 0, 1971, 1969, 1, 0, 0, 0, 1971, 1972,
    1, 0, 0, 0, 1972, 1975, 1, 0, 0, 0, 1973, 1971, 1, 0, 0, 0, 1974, 1965, 1, 0, 0, 0, 1974,
    1975, 1, 0, 0, 0, 1975, 1977, 1, 0, 0, 0, 1976, 1978, 3, 278, 139, 0, 1977, 1976, 1,
    0, 0, 0, 1977, 1978, 1, 0, 0, 0, 1978, 1982, 1, 0, 0, 0, 1979, 1980, 5, 87, 0, 0, 1980,
    1981, 5, 26, 0, 0, 1981, 1983, 3, 282, 141, 0, 1982, 1979, 1, 0, 0, 0, 1982, 1983,
    1, 0, 0, 0, 1983, 1985, 1, 0, 0, 0, 1984, 1986, 3, 280, 140, 0, 1985, 1984, 1, 0, 0,
    0, 1985, 1986, 1, 0, 0, 0, 1986, 275, 1, 0, 0, 0, 1987, 1992, 3, 292, 146, 0, 1988,
    1989, 5, 263, 0, 0, 1989, 1991, 3, 292, 146, 0, 1990, 1988, 1, 0, 0, 0, 1991, 1994,
    1, 0, 0, 0, 1992, 1990, 1, 0, 0, 0, 1992, 1993, 1, 0, 0, 0, 1993, 277, 1, 0, 0, 0, 1994,
    1992, 1, 0, 0, 0, 1995, 1998, 5, 215, 0, 0, 1996, 1999, 3, 328, 164, 0, 1997, 1999,
    3, 198, 99, 0, 1998, 1996, 1, 0, 0, 0, 1998, 1997, 1, 0, 0, 0, 1999, 279, 1, 0, 0, 0,
    2000, 2003, 5, 90, 0, 0, 2001, 2004, 3, 328, 164, 0, 2002, 2004, 3, 198, 99, 0, 2003,
    2001, 1, 0, 0, 0, 2003, 2002, 1, 0, 0, 0, 2004, 281, 1, 0, 0, 0, 2005, 2007, 3, 290,
    145, 0, 2006, 2005, 1, 0, 0, 0, 2006, 2007, 1, 0, 0, 0, 2007, 2008, 1, 0, 0, 0, 2008,
    2013, 3, 284, 142, 0, 2009, 2010, 5, 263, 0, 0, 2010, 2012, 3, 284, 142, 0, 2011,
    2009, 1, 0, 0, 0, 2012, 2015, 1, 0, 0, 0, 2013, 2011, 1, 0, 0, 0, 2013, 2014, 1, 0, 0,
    0, 2014, 283, 1, 0, 0, 0, 2015, 2013, 1, 0, 0, 0, 2016, 2017, 3, 286, 143, 0, 2017,
    285, 1, 0, 0, 0, 2018, 2027, 5, 265, 0, 0, 2019, 2024, 3, 324, 162, 0, 2020, 2021,
    5, 263, 0, 0, 2021, 2023, 3, 324, 162, 0, 2022, 2020, 1, 0, 0, 0, 2023, 2026, 1, 0,
    0, 0, 2024, 2022, 1, 0, 0, 0, 2024, 2025, 1, 0, 0, 0, 2025, 2028, 1, 0, 0, 0, 2026, 2024,
    1, 0, 0, 0, 2027, 2019, 1, 0, 0, 0, 2027, 2028, 1, 0, 0, 0, 2028, 2029, 1, 0, 0, 0, 2029,
    2032, 5, 266, 0, 0, 2030, 2032, 3, 324, 162, 0, 2031, 2018, 1, 0, 0, 0, 2031, 2030,
    1, 0, 0, 0, 2032, 287, 1, 0, 0, 0, 2033, 2035, 3, 382, 191, 0, 2034, 2036, 3, 312, 156,
    0, 2035, 2034, 1, 0, 0, 0, 2035, 2036, 1, 0, 0, 0, 2036, 2037, 1, 0, 0, 0, 2037, 2038,
    5, 9, 0, 0, 2038, 2039, 3, 318, 159, 0, 2039, 289, 1, 0, 0, 0, 2040, 2041, 7, 16, 0,
    0, 2041, 291, 1, 0, 0, 0, 2042, 2044, 3, 296, 148, 0, 2043, 2045, 3, 294, 147, 0, 2044,
    2043, 1, 0, 0, 0, 2044, 2045, 1, 0, 0, 0, 2045, 2054, 1, 0, 0, 0, 2046, 2048, 3, 298,
    149, 0, 2047, 2049, 3, 294, 147, 0, 2048, 2047, 1, 0, 0, 0, 2048, 2049, 1, 0, 0, 0,
    2049, 2054, 1, 0, 0, 0, 2050, 2054, 3, 300, 150, 0, 2051, 2052, 4, 146, 4, 0, 2052,
    2054, 3, 192, 96, 0, 2053, 2042, 1, 0, 0, 0, 2053, 2046, 1, 0, 0, 0, 2053, 2050, 1,
    0, 0, 0, 2053, 2051, 1, 0, 0, 0, 2054, 293, 1, 0, 0, 0, 2055, 2057, 5, 9, 0, 0, 2056,
    2055, 1, 0, 0, 0, 2056, 2057, 1, 0, 0, 0, 2057, 2058, 1, 0, 0, 0, 2058, 2059, 3, 382,
    191, 0, 2059, 295, 1, 0, 0, 0, 2060, 2061, 3, 194, 97, 0, 2061, 297, 1, 0, 0, 0, 2062,
    2063, 3, 326, 163, 0, 2063, 299, 1, 0, 0, 0, 2064, 2065, 3, 376, 188, 0, 2065, 2066,
    5, 261, 0, 0, 2066, 2068, 1, 0, 0, 0, 2067, 2064, 1, 0, 0, 0, 2067, 2068, 1, 0, 0, 0,
    2068, 2069, 1, 0, 0, 0, 2069, 2070, 5, 257, 0, 0, 2070, 301, 1, 0, 0, 0, 2071, 2072,
    6, 151, -1, 0, 2072, 2073, 3, 308, 154, 0, 2073, 2087, 1, 0, 0, 0, 2074, 2083, 10,
    2, 0, 0, 2075, 2076, 5, 38, 0, 0, 2076, 2077, 5, 109, 0, 0, 2077, 2084, 3, 308, 154,
    0, 2078, 2079, 3, 304, 152, 0, 2079, 2080, 5, 109, 0, 0, 2080, 2081, 3, 302, 151,
    0, 2081, 2082, 3, 306, 153, 0, 2082, 2084, 1, 0, 0, 0, 2083, 2075, 1, 0, 0, 0, 2083,
    2078, 1, 0, 0, 0, 2084, 2086, 1, 0, 0, 0, 2085, 2074, 1, 0, 0, 0, 2086, 2089, 1, 0, 0,
    0, 2087, 2085, 1, 0, 0, 0, 2087, 2088, 1, 0, 0, 0, 2088, 303, 1, 0, 0, 0, 2089, 2087,
    1, 0, 0, 0, 2090, 2092, 5, 97, 0, 0, 2091, 2090, 1, 0, 0, 0, 2091, 2092, 1, 0, 0, 0, 2092,
    2122, 1, 0, 0, 0, 2093, 2095, 5, 114, 0, 0, 2094, 2096, 5, 97, 0, 0, 2095, 2094, 1,
    0, 0, 0, 2095, 2096, 1, 0, 0, 0, 2096, 2122, 1, 0, 0, 0, 2097, 2099, 5, 165, 0, 0, 2098,
    2100, 5, 97, 0, 0, 2099, 2098, 1, 0, 0, 0, 2099, 2100, 1, 0, 0, 0, 2100, 2122, 1, 0,
    0, 0, 2101, 2103, 5, 114, 0, 0, 2102, 2104, 5, 141, 0, 0, 2103, 2102, 1, 0, 0, 0, 2103,
    2104, 1, 0, 0, 0, 2104, 2122, 1, 0, 0, 0, 2105, 2107, 5, 165, 0, 0, 2106, 2108, 5, 141,
    0, 0, 2107, 2106, 1, 0, 0, 0, 2107, 2108, 1, 0, 0, 0, 2108, 2122, 1, 0, 0, 0, 2109, 2111,
    5, 83, 0, 0, 2110, 2112, 5, 141, 0, 0, 2111, 2110, 1, 0, 0, 0, 2111, 2112, 1, 0, 0, 0,
    2112, 2122, 1, 0, 0, 0, 2113, 2114, 5, 114, 0, 0, 2114, 2122, 5, 177, 0, 0, 2115, 2116,
    5, 165, 0, 0, 2116, 2122, 5, 177, 0, 0, 2117, 2118, 5, 114, 0, 0, 2118, 2122, 5, 7,
    0, 0, 2119, 2120, 5, 165, 0, 0, 2120, 2122, 5, 7, 0, 0, 2121, 2091, 1, 0, 0, 0, 2121,
    2093, 1, 0, 0, 0, 2121, 2097, 1, 0, 0, 0, 2121, 2101, 1, 0, 0, 0, 2121, 2105, 1, 0, 0,
    0, 2121, 2109, 1, 0, 0, 0, 2121, 2113, 1, 0, 0, 0, 2121, 2115, 1, 0, 0, 0, 2121, 2117,
    1, 0, 0, 0, 2121, 2119, 1, 0, 0, 0, 2122, 305, 1, 0, 0, 0, 2123, 2126, 5, 136, 0, 0, 2124,
    2127, 3, 328, 164, 0, 2125, 2127, 3, 198, 99, 0, 2126, 2124, 1, 0, 0, 0, 2126, 2125,
    1, 0, 0, 0, 2127, 2141, 1, 0, 0, 0, 2128, 2129, 5, 205, 0, 0, 2129, 2130, 5, 265, 0,
    0, 2130, 2135, 3, 382, 191, 0, 2131, 2132, 5, 263, 0, 0, 2132, 2134, 3, 382, 191,
    0, 2133, 2131, 1, 0, 0, 0, 2134, 2137, 1, 0, 0, 0, 2135, 2133, 1, 0, 0, 0, 2135, 2136,
    1, 0, 0, 0, 2136, 2138, 1, 0, 0, 0, 2137, 2135, 1, 0, 0, 0, 2138, 2139, 5, 266, 0, 0,
    2139, 2141, 1, 0, 0, 0, 2140, 2123, 1, 0, 0, 0, 2140, 2128, 1, 0, 0, 0, 2141, 307, 1,
    0, 0, 0, 2142, 2155, 3, 310, 155, 0, 2143, 2144, 5, 190, 0, 0, 2144, 2145, 7, 17, 0,
    0, 2145, 2146, 5, 265, 0, 0, 2146, 2147, 3, 326, 163, 0, 2147, 2153, 5, 266, 0, 0,
    2148, 2149, 5, 157, 0, 0, 2149, 2150, 5, 265, 0, 0, 2150, 2151, 3, 326, 163, 0, 2151,
    2152, 5, 266, 0, 0, 2152, 2154, 1, 0, 0, 0, 2153, 2148, 1, 0, 0, 0, 2153, 2154, 1, 0,
    0, 0, 2154, 2156, 1, 0, 0, 0, 2155, 2143, 1, 0, 0, 0, 2155, 2156, 1, 0, 0, 0, 2156, 309,
    1, 0, 0, 0, 2157, 2165, 3, 314, 157, 0, 2158, 2160, 5, 9, 0, 0, 2159, 2158, 1, 0, 0,
    0, 2159, 2160, 1, 0, 0, 0, 2160, 2161, 1, 0, 0, 0, 2161, 2163, 3, 382, 191, 0, 2162,
    2164, 3, 312, 156, 0, 2163, 2162, 1, 0, 0, 0, 2163, 2164, 1, 0, 0, 0, 2164, 2166, 1,
    0, 0, 0, 2165, 2159, 1, 0, 0, 0, 2165, 2166, 1, 0, 0, 0, 2166, 311, 1, 0, 0, 0, 2167,
    2168, 5, 265, 0, 0, 2168, 2173, 3, 194, 97, 0, 2169, 2170, 5, 263, 0, 0, 2170, 2172,
    3, 194, 97, 0, 2171, 2169, 1, 0, 0, 0, 2172, 2175, 1, 0, 0, 0, 2173, 2171, 1, 0, 0, 0,
    2173, 2174, 1, 0, 0, 0, 2174, 2176, 1, 0, 0, 0, 2175, 2173, 1, 0, 0, 0, 2176, 2177,
    5, 266, 0, 0, 2177, 313, 1, 0, 0, 0, 2178, 2183, 3, 200, 100, 0, 2179, 2183, 3, 316,
    158, 0, 2180, 2183, 3, 320, 160, 0, 2181, 2183, 3, 322, 161, 0, 2182, 2178, 1, 0,
    0, 0, 2182, 2179, 1, 0, 0, 0, 2182, 2180, 1, 0, 0, 0, 2182, 2181, 1, 0, 0, 0, 2183, 315,
    1, 0, 0, 0, 2184, 2186, 5, 113, 0, 0, 2185, 2184, 1, 0, 0, 0, 2185, 2186, 1, 0, 0, 0,
    2186, 2187, 1, 0, 0, 0, 2187, 2188, 3, 318, 159, 0, 2188, 317, 1, 0, 0, 0, 2189, 2190,
    5, 265, 0, 0, 2190, 2191, 3, 212, 106, 0, 2191, 2192, 5, 266, 0, 0, 2192, 319, 1, 0,
    0, 0, 2193, 2194, 5, 201, 0, 0, 2194, 2195, 5, 265, 0, 0, 2195, 2200, 3, 326, 163,
    0, 2196, 2197, 5, 263, 0, 0, 2197, 2199, 3, 326, 163, 0, 2198, 2196, 1, 0, 0, 0, 2199,
    2202, 1, 0, 0, 0, 2200, 2198, 1, 0, 0, 0, 2200, 2201, 1, 0, 0, 0, 2201, 2203, 1, 0, 0,
    0, 2202, 2200, 1, 0, 0, 0, 2203, 2206, 5, 266, 0, 0, 2204, 2205, 5, 216, 0, 0, 2205,
    2207, 5, 140, 0, 0, 2206, 2204, 1, 0, 0, 0, 2206, 2207, 1, 0, 0, 0, 2207, 321, 1, 0,
    0, 0, 2208, 2209, 5, 265, 0, 0, 2209, 2210, 3, 302, 151, 0, 2210, 2211, 5, 266, 0,
    0, 2211, 323, 1, 0, 0, 0, 2212, 2215, 3, 194, 97, 0, 2213, 2215, 3, 326, 163, 0, 2214,
    2212, 1, 0, 0, 0, 2214, 2213, 1, 0, 0, 0, 2215, 325, 1, 0, 0, 0, 2216, 2217, 3, 328,
    164, 0, 2217, 327, 1, 0, 0, 0, 2218, 2219, 6, 164, -1, 0, 2219, 2221, 3, 332, 166,
    0, 2220, 2222, 3, 330, 165, 0, 2221, 2220, 1, 0, 0, 0, 2221, 2222, 1, 0, 0, 0, 2222,
    2226, 1, 0, 0, 0, 2223, 2224, 5, 132, 0, 0, 2224, 2226, 3, 328, 164, 3, 2225, 2218,
    1, 0, 0, 0, 2225, 2223, 1, 0, 0, 0, 2226, 2235, 1, 0, 0, 0, 2227, 2228, 10, 2, 0, 0, 2228,
    2229, 5, 5, 0, 0, 2229, 2234, 3, 328, 164, 3, 2230, 2231, 10, 1, 0, 0, 2231, 2232,
    5, 138, 0, 0, 2232, 2234, 3, 328, 164, 2, 2233, 2227, 1, 0, 0, 0, 2233, 2230, 1, 0,
    0, 0, 2234, 2237, 1, 0, 0, 0, 2235, 2233, 1, 0, 0, 0, 2235, 2236, 1, 0, 0, 0, 2236, 329,
    1, 0, 0, 0, 2237, 2235, 1, 0, 0, 0, 2238, 2239, 3, 340, 170, 0, 2239, 2240, 3, 332,
    166, 0, 2240, 2297, 1, 0, 0, 0, 2241, 2242, 3, 340, 170, 0, 2242, 2243, 3, 342, 171,
    0, 2243, 2244, 3, 318, 159, 0, 2244, 2297, 1, 0, 0, 0, 2245, 2247, 5, 132, 0, 0, 2246,
    2245, 1, 0, 0, 0, 2246, 2247, 1, 0, 0, 0, 2247, 2248, 1, 0, 0, 0, 2248, 2249, 5, 15,
    0, 0, 2249, 2250, 3, 332, 166, 0, 2250, 2251, 5, 5, 0, 0, 2251, 2252, 3, 332, 166,
    0, 2252, 2297, 1, 0, 0, 0, 2253, 2255, 5, 132, 0, 0, 2254, 2253, 1, 0, 0, 0, 2254, 2255,
    1, 0, 0, 0, 2255, 2256, 1, 0, 0, 0, 2256, 2257, 5, 94, 0, 0, 2257, 2258, 5, 265, 0, 0,
    2258, 2263, 3, 326, 163, 0, 2259, 2260, 5, 263, 0, 0, 2260, 2262, 3, 326, 163, 0,
    2261, 2259, 1, 0, 0, 0, 2262, 2265, 1, 0, 0, 0, 2263, 2261, 1, 0, 0, 0, 2263, 2264,
    1, 0, 0, 0, 2264, 2266, 1, 0, 0, 0, 2265, 2263, 1, 0, 0, 0, 2266, 2267, 5, 266, 0, 0,
    2267, 2297, 1, 0, 0, 0, 2268, 2270, 5, 132, 0, 0, 2269, 2268, 1, 0, 0, 0, 2269, 2270,
    1, 0, 0, 0, 2270, 2271, 1, 0, 0, 0, 2271, 2272, 5, 94, 0, 0, 2272, 2297, 3, 318, 159,
    0, 2273, 2275, 5, 132, 0, 0, 2274, 2273, 1, 0, 0, 0, 2274, 2275, 1, 0, 0, 0, 2275, 2276,
    1, 0, 0, 0, 2276, 2277, 7, 18, 0, 0, 2277, 2280, 3, 332, 166, 0, 2278, 2279, 5, 62,
    0, 0, 2279, 2281, 3, 332, 166, 0, 2280, 2278, 1, 0, 0, 0, 2280, 2281, 1, 0, 0, 0, 2281,
    2297, 1, 0, 0, 0, 2282, 2283, 7, 19, 0, 0, 2283, 2297, 3, 332, 166, 0, 2284, 2286,
    5, 108, 0, 0, 2285, 2287, 5, 132, 0, 0, 2286, 2285, 1, 0, 0, 0, 2286, 2287, 1, 0, 0,
    0, 2287, 2288, 1, 0, 0, 0, 2288, 2297, 7, 20, 0, 0, 2289, 2291, 5, 108, 0, 0, 2290,
    2292, 5, 132, 0, 0, 2291, 2290, 1, 0, 0, 0, 2291, 2292, 1, 0, 0, 0, 2292, 2293, 1, 0,
    0, 0, 2293, 2294, 5, 57, 0, 0, 2294, 2295, 5, 82, 0, 0, 2295, 2297, 3, 332, 166, 0,
    2296, 2238, 1, 0, 0, 0, 2296, 2241, 1, 0, 0, 0, 2296, 2246, 1, 0, 0, 0, 2296, 2254,
    1, 0, 0, 0, 2296, 2269, 1, 0, 0, 0, 2296, 2274, 1, 0, 0, 0, 2296, 2282, 1, 0, 0, 0, 2296,
    2284, 1, 0, 0, 0, 2296, 2289, 1, 0, 0, 0, 2297, 331, 1, 0, 0, 0, 2298, 2299, 6, 166,
    -1, 0, 2299, 2303, 3, 336, 168, 0, 2300, 2301, 7, 21, 0, 0, 2301, 2303, 3, 332, 166,
    4, 2302, 2298, 1, 0, 0, 0, 2302, 2300, 1, 0, 0, 0, 2303, 2315, 1, 0, 0, 0, 2304, 2305,
    10, 3, 0, 0, 2305, 2306, 7, 22, 0, 0, 2306, 2314, 3, 332, 166, 4, 2307, 2308, 10, 2,
    0, 0, 2308, 2309, 7, 21, 0, 0, 2309, 2314, 3, 332, 166, 3, 2310, 2311, 10, 1, 0, 0,
    2311, 2312, 5, 260, 0, 0, 2312, 2314, 3, 332, 166, 2, 2313, 2304, 1, 0, 0, 0, 2313,
    2307, 1, 0, 0, 0, 2313, 2310, 1, 0, 0, 0, 2314, 2317, 1, 0, 0, 0, 2315, 2313, 1, 0, 0,
    0, 2315, 2316, 1, 0, 0, 0, 2316, 333, 1, 0, 0, 0, 2317, 2315, 1, 0, 0, 0, 2318, 2319,
    3, 190, 95, 0, 2319, 2331, 5, 265, 0, 0, 2320, 2322, 3, 290, 145, 0, 2321, 2320, 1,
    0, 0, 0, 2321, 2322, 1, 0, 0, 0, 2322, 2323, 1, 0, 0, 0, 2323, 2328, 3, 326, 163, 0,
    2324, 2325, 5, 263, 0, 0, 2325, 2327, 3, 326, 163, 0, 2326, 2324, 1, 0, 0, 0, 2327,
    2330, 1, 0, 0, 0, 2328, 2326, 1, 0, 0, 0, 2328, 2329, 1, 0, 0, 0, 2329, 2332, 1, 0, 0,
    0, 2330, 2328, 1, 0, 0, 0, 2331, 2321, 1, 0, 0, 0, 2331, 2332, 1, 0, 0, 0, 2332, 2343,
    1, 0, 0, 0, 2333, 2334, 5, 139, 0, 0, 2334, 2335, 5, 26, 0, 0, 2335, 2340, 3, 272, 136,
    0, 2336, 2337, 5, 263, 0, 0, 2337, 2339, 3, 272, 136, 0, 2338, 2336, 1, 0, 0, 0, 2339,
    2342, 1, 0, 0, 0, 2340, 2338, 1, 0, 0, 0, 2340, 2341, 1, 0, 0, 0, 2341, 2344, 1, 0, 0,
    0, 2342, 2340, 1, 0, 0, 0, 2343, 2333, 1, 0, 0, 0, 2343, 2344, 1, 0, 0, 0, 2344, 2345,
    1, 0, 0, 0, 2345, 2347, 5, 266, 0, 0, 2346, 2348, 3, 358, 179, 0, 2347, 2346, 1, 0,
    0, 0, 2347, 2348, 1, 0, 0, 0, 2348, 2350, 1, 0, 0, 0, 2349, 2351, 3, 362, 181, 0, 2350,
    2349, 1, 0, 0, 0, 2350, 2351, 1, 0, 0, 0, 2351, 335, 1, 0, 0, 0, 2352, 2353, 6, 168,
    -1, 0, 2353, 2566, 5, 133, 0, 0, 2354, 2566, 3, 344, 172, 0, 2355, 2356, 3, 382, 191,
    0, 2356, 2357, 3, 338, 169, 0, 2357, 2566, 1, 0, 0, 0, 2358, 2359, 5, 286, 0, 0, 2359,
    2566, 3, 338, 169, 0, 2360, 2566, 3, 384, 192, 0, 2361, 2566, 7, 23, 0, 0, 2362, 2566,
    3, 338, 169, 0, 2363, 2566, 5, 276, 0, 0, 2364, 2566, 5, 272, 0, 0, 2365, 2366, 5,
    148, 0, 0, 2366, 2367, 5, 265, 0, 0, 2367, 2368, 3, 332, 166, 0, 2368, 2369, 5, 94,
    0, 0, 2369, 2370, 3, 332, 166, 0, 2370, 2371, 5, 266, 0, 0, 2371, 2566, 1, 0, 0, 0,
    2372, 2373, 5, 265, 0, 0, 2373, 2376, 3, 326, 163, 0, 2374, 2375, 5, 9, 0, 0, 2375,
    2377, 3, 348, 174, 0, 2376, 2374, 1, 0, 0, 0, 2376, 2377, 1, 0, 0, 0, 2377, 2386, 1,
    0, 0, 0, 2378, 2379, 5, 263, 0, 0, 2379, 2382, 3, 326, 163, 0, 2380, 2381, 5, 9, 0,
    0, 2381, 2383, 3, 348, 174, 0, 2382, 2380, 1, 0, 0, 0, 2382, 2383, 1, 0, 0, 0, 2383,
    2385, 1, 0, 0, 0, 2384, 2378, 1, 0, 0, 0, 2385, 2388, 1, 0, 0, 0, 2386, 2387, 1, 0, 0,
    0, 2386, 2384, 1, 0, 0, 0, 2387, 2389, 1, 0, 0, 0, 2388, 2386, 1, 0, 0, 0, 2389, 2390,
    5, 266, 0, 0, 2390, 2566, 1, 0, 0, 0, 2391, 2392, 5, 168, 0, 0, 2392, 2393, 5, 265,
    0, 0, 2393, 2398, 3, 326, 163, 0, 2394, 2395, 5, 263, 0, 0, 2395, 2397, 3, 326, 163,
    0, 2396, 2394, 1, 0, 0, 0, 2397, 2400, 1, 0, 0, 0, 2398, 2396, 1, 0, 0, 0, 2398, 2399,
    1, 0, 0, 0, 2399, 2401, 1, 0, 0, 0, 2400, 2398, 1, 0, 0, 0, 2401, 2402, 5, 266, 0, 0,
    2402, 2566, 1, 0, 0, 0, 2403, 2404, 3, 190, 95, 0, 2404, 2405, 5, 265, 0, 0, 2405,
    2406, 5, 257, 0, 0, 2406, 2408, 5, 266, 0, 0, 2407, 2409, 3, 358, 179, 0, 2408, 2407,
    1, 0, 0, 0, 2408, 2409, 1, 0, 0, 0, 2409, 2411, 1, 0, 0, 0, 2410, 2412, 3, 362, 181,
    0, 2411, 2410, 1, 0, 0, 0, 2411, 2412, 1, 0, 0, 0, 2412, 2566, 1, 0, 0, 0, 2413, 2566,
    3, 334, 167, 0, 2414, 2415, 3, 382, 191, 0, 2415, 2416, 5, 273, 0, 0, 2416, 2417,
    3, 326, 163, 0, 2417, 2566, 1, 0, 0, 0, 2418, 2427, 5, 265, 0, 0, 2419, 2424, 3, 382,
    191, 0, 2420, 2421, 5, 263, 0, 0, 2421, 2423, 3, 382, 191, 0, 2422, 2420, 1, 0, 0,
    0, 2423, 2426, 1, 0, 0, 0, 2424, 2422, 1, 0, 0, 0, 2424, 2425, 1, 0, 0, 0, 2425, 2428,
    1, 0, 0, 0, 2426, 2424, 1, 0, 0, 0, 2427, 2419, 1, 0, 0, 0, 2427, 2428, 1, 0, 0, 0, 2428,
    2429, 1, 0, 0, 0, 2429, 2430, 5, 266, 0, 0, 2430, 2431, 5, 273, 0, 0, 2431, 2566, 3,
    326, 163, 0, 2432, 2433, 5, 265, 0, 0, 2433, 2434, 3, 212, 106, 0, 2434, 2435, 5,
    266, 0, 0, 2435, 2566, 1, 0, 0, 0, 2436, 2437, 5, 66, 0, 0, 2437, 2438, 5, 265, 0, 0,
    2438, 2439, 3, 212, 106, 0, 2439, 2440, 5, 266, 0, 0, 2440, 2566, 1, 0, 0, 0, 2441,
    2442, 5, 28, 0, 0, 2442, 2444, 3, 332, 166, 0, 2443, 2445, 3, 356, 178, 0, 2444, 2443,
    1, 0, 0, 0, 2445, 2446, 1, 0, 0, 0, 2446, 2444, 1, 0, 0, 0, 2446, 2447, 1, 0, 0, 0, 2447,
    2450, 1, 0, 0, 0, 2448, 2449, 5, 59, 0, 0, 2449, 2451, 3, 326, 163, 0, 2450, 2448,
    1, 0, 0, 0, 2450, 2451, 1, 0, 0, 0, 2451, 2452, 1, 0, 0, 0, 2452, 2453, 5, 61, 0, 0, 2453,
    2566, 1, 0, 0, 0, 2454, 2456, 5, 28, 0, 0, 2455, 2457, 3, 356, 178, 0, 2456, 2455,
    1, 0, 0, 0, 2457, 2458, 1, 0, 0, 0, 2458, 2456, 1, 0, 0, 0, 2458, 2459, 1, 0, 0, 0, 2459,
    2462, 1, 0, 0, 0, 2460, 2461, 5, 59, 0, 0, 2461, 2463, 3, 326, 163, 0, 2462, 2460,
    1, 0, 0, 0, 2462, 2463, 1, 0, 0, 0, 2463, 2464, 1, 0, 0, 0, 2464, 2465, 5, 61, 0, 0, 2465,
    2566, 1, 0, 0, 0, 2466, 2467, 5, 29, 0, 0, 2467, 2468, 5, 265, 0, 0, 2468, 2469, 3,
    326, 163, 0, 2469, 2470, 5, 9, 0, 0, 2470, 2471, 3, 348, 174, 0, 2471, 2472, 5, 266,
    0, 0, 2472, 2566, 1, 0, 0, 0, 2473, 2474, 5, 195, 0, 0, 2474, 2475, 5, 265, 0, 0, 2475,
    2476, 3, 326, 163, 0, 2476, 2477, 5, 9, 0, 0, 2477, 2478, 3, 348, 174, 0, 2478, 2479,
    5, 266, 0, 0, 2479, 2566, 1, 0, 0, 0, 2480, 2481, 5, 8, 0, 0, 2481, 2490, 5, 267, 0,
    0, 2482, 2487, 3, 326, 163, 0, 2483, 2484, 5, 263, 0, 0, 2484, 2486, 3, 326, 163,
    0, 2485, 2483, 1, 0, 0, 0, 2486, 2489, 1, 0, 0, 0, 2487, 2485, 1, 0, 0, 0, 2487, 2488,
    1, 0, 0, 0, 2488, 2491, 1, 0, 0, 0, 2489, 2487, 1, 0, 0, 0, 2490, 2482, 1, 0, 0, 0, 2490,
    2491, 1, 0, 0, 0, 2491, 2492, 1, 0, 0, 0, 2492, 2566, 5, 268, 0, 0, 2493, 2566, 3, 196,
    98, 0, 2494, 2566, 5, 40, 0, 0, 2495, 2499, 5, 42, 0, 0, 2496, 2497, 5, 265, 0, 0, 2497,
    2498, 5, 277, 0, 0, 2498, 2500, 5, 266, 0, 0, 2499, 2496, 1, 0, 0, 0, 2499, 2500, 1,
    0, 0, 0, 2500, 2566, 1, 0, 0, 0, 2501, 2505, 5, 43, 0, 0, 2502, 2503, 5, 265, 0, 0, 2503,
    2504, 5, 277, 0, 0, 2504, 2506, 5, 266, 0, 0, 2505, 2502, 1, 0, 0, 0, 2505, 2506, 1,
    0, 0, 0, 2506, 2566, 1, 0, 0, 0, 2507, 2511, 5, 119, 0, 0, 2508, 2509, 5, 265, 0, 0,
    2509, 2510, 5, 277, 0, 0, 2510, 2512, 5, 266, 0, 0, 2511, 2508, 1, 0, 0, 0, 2511, 2512,
    1, 0, 0, 0, 2512, 2566, 1, 0, 0, 0, 2513, 2517, 5, 120, 0, 0, 2514, 2515, 5, 265, 0,
    0, 2515, 2516, 5, 277, 0, 0, 2516, 2518, 5, 266, 0, 0, 2517, 2514, 1, 0, 0, 0, 2517,
    2518, 1, 0, 0, 0, 2518, 2566, 1, 0, 0, 0, 2519, 2566, 5, 44, 0, 0, 2520, 2566, 5, 41,
    0, 0, 2521, 2522, 5, 184, 0, 0, 2522, 2523, 5, 265, 0, 0, 2523, 2524, 3, 332, 166,
    0, 2524, 2525, 5, 82, 0, 0, 2525, 2528, 3, 332, 166, 0, 2526, 2527, 5, 78, 0, 0, 2527,
    2529, 3, 332, 166, 0, 2528, 2526, 1, 0, 0, 0, 2528, 2529, 1, 0, 0, 0, 2529, 2530, 1,
    0, 0, 0, 2530, 2531, 5, 266, 0, 0, 2531, 2566, 1, 0, 0, 0, 2532, 2533, 5, 131, 0, 0,
    2533, 2534, 5, 265, 0, 0, 2534, 2537, 3, 332, 166, 0, 2535, 2536, 5, 263, 0, 0, 2536,
    2538, 7, 24, 0, 0, 2537, 2535, 1, 0, 0, 0, 2537, 2538, 1, 0, 0, 0, 2538, 2539, 1, 0,
    0, 0, 2539, 2540, 5, 266, 0, 0, 2540, 2566, 1, 0, 0, 0, 2541, 2542, 5, 68, 0, 0, 2542,
    2543, 5, 265, 0, 0, 2543, 2544, 3, 382, 191, 0, 2544, 2545, 5, 82, 0, 0, 2545, 2546,
    3, 332, 166, 0, 2546, 2547, 5, 266, 0, 0, 2547, 2566, 1, 0, 0, 0, 2548, 2549, 5, 265,
    0, 0, 2549, 2550, 3, 326, 163, 0, 2550, 2551, 5, 266, 0, 0, 2551, 2566, 1, 0, 0, 0,
    2552, 2553, 5, 88, 0, 0, 2553, 2562, 5, 265, 0, 0, 2554, 2559, 3, 376, 188, 0, 2555,
    2556, 5, 263, 0, 0, 2556, 2558, 3, 376, 188, 0, 2557, 2555, 1, 0, 0, 0, 2558, 2561,
    1, 0, 0, 0, 2559, 2557, 1, 0, 0, 0, 2559, 2560, 1, 0, 0, 0, 2560, 2563, 1, 0, 0, 0, 2561,
    2559, 1, 0, 0, 0, 2562, 2554, 1, 0, 0, 0, 2562, 2563, 1, 0, 0, 0, 2563, 2564, 1, 0, 0,
    0, 2564, 2566, 5, 266, 0, 0, 2565, 2352, 1, 0, 0, 0, 2565, 2354, 1, 0, 0, 0, 2565, 2355,
    1, 0, 0, 0, 2565, 2358, 1, 0, 0, 0, 2565, 2360, 1, 0, 0, 0, 2565, 2361, 1, 0, 0, 0, 2565,
    2362, 1, 0, 0, 0, 2565, 2363, 1, 0, 0, 0, 2565, 2364, 1, 0, 0, 0, 2565, 2365, 1, 0, 0,
    0, 2565, 2372, 1, 0, 0, 0, 2565, 2391, 1, 0, 0, 0, 2565, 2403, 1, 0, 0, 0, 2565, 2413,
    1, 0, 0, 0, 2565, 2414, 1, 0, 0, 0, 2565, 2418, 1, 0, 0, 0, 2565, 2432, 1, 0, 0, 0, 2565,
    2436, 1, 0, 0, 0, 2565, 2441, 1, 0, 0, 0, 2565, 2454, 1, 0, 0, 0, 2565, 2466, 1, 0, 0,
    0, 2565, 2473, 1, 0, 0, 0, 2565, 2480, 1, 0, 0, 0, 2565, 2493, 1, 0, 0, 0, 2565, 2494,
    1, 0, 0, 0, 2565, 2495, 1, 0, 0, 0, 2565, 2501, 1, 0, 0, 0, 2565, 2507, 1, 0, 0, 0, 2565,
    2513, 1, 0, 0, 0, 2565, 2519, 1, 0, 0, 0, 2565, 2520, 1, 0, 0, 0, 2565, 2521, 1, 0, 0,
    0, 2565, 2532, 1, 0, 0, 0, 2565, 2541, 1, 0, 0, 0, 2565, 2548, 1, 0, 0, 0, 2565, 2552,
    1, 0, 0, 0, 2566, 2577, 1, 0, 0, 0, 2567, 2568, 10, 15, 0, 0, 2568, 2569, 5, 267, 0,
    0, 2569, 2570, 3, 332, 166, 0, 2570, 2571, 5, 268, 0, 0, 2571, 2576, 1, 0, 0, 0, 2572,
    2573, 10, 13, 0, 0, 2573, 2574, 5, 261, 0, 0, 2574, 2576, 3, 382, 191, 0, 2575, 2567,
    1, 0, 0, 0, 2575, 2572, 1, 0, 0, 0, 2576, 2579, 1, 0, 0, 0, 2577, 2575, 1, 0, 0, 0, 2577,
    2578, 1, 0, 0, 0, 2578, 337, 1, 0, 0, 0, 2579, 2577, 1, 0, 0, 0, 2580, 2587, 5, 274,
    0, 0, 2581, 2584, 5, 275, 0, 0, 2582, 2583, 5, 198, 0, 0, 2583, 2585, 5, 274, 0, 0,
    2584, 2582, 1, 0, 0, 0, 2584, 2585, 1, 0, 0, 0, 2585, 2587, 1, 0, 0, 0, 2586, 2580,
    1, 0, 0, 0, 2586, 2581, 1, 0, 0, 0, 2587, 339, 1, 0, 0, 0, 2588, 2589, 7, 25, 0, 0, 2589,
    341, 1, 0, 0, 0, 2590, 2591, 7, 26, 0, 0, 2591, 343, 1, 0, 0, 0, 2592, 2593, 5, 277,
    0, 0, 2593, 2607, 3, 346, 173, 0, 2594, 2595, 5, 265, 0, 0, 2595, 2596, 5, 277, 0,
    0, 2596, 2597, 5, 266, 0, 0, 2597, 2607, 3, 346, 173, 0, 2598, 2599, 5, 101, 0, 0,
    2599, 2600, 5, 277, 0, 0, 2600, 2607, 3, 346, 173, 0, 2601, 2602, 5, 101, 0, 0, 2602,
    2603, 5, 265, 0, 0, 2603, 2604, 5, 277, 0, 0, 2604, 2605, 5, 266, 0, 0, 2605, 2607,
    3, 346, 173, 0, 2606, 2592, 1, 0, 0, 0, 2606, 2594, 1, 0, 0, 0, 2606, 2598, 1, 0, 0,
    0, 2606, 2601, 1, 0, 0, 0, 2607, 345, 1, 0, 0, 0, 2608, 2609, 7, 27, 0, 0, 2609, 347,
    1, 0, 0, 0, 2610, 2611, 6, 174, -1, 0, 2611, 2612, 5, 8, 0, 0, 2612, 2613, 5, 251, 0,
    0, 2613, 2614, 3, 348, 174, 0, 2614, 2615, 5, 253, 0, 0, 2615, 2656, 1, 0, 0, 0, 2616,
    2617, 5, 235, 0, 0, 2617, 2618, 5, 251, 0, 0, 2618, 2619, 3, 348, 174, 0, 2619, 2620,
    5, 263, 0, 0, 2620, 2621, 3, 348, 174, 0, 2621, 2622, 5, 253, 0, 0, 2622, 2656, 1,
    0, 0, 0, 2623, 2624, 5, 240, 0, 0, 2624, 2625, 5, 251, 0, 0, 2625, 2626, 3, 382, 191,
    0, 2626, 2633, 3, 348, 174, 0, 2627, 2628, 5, 263, 0, 0, 2628, 2629, 3, 382, 191,
    0, 2629, 2630, 3, 348, 174, 0, 2630, 2632, 1, 0, 0, 0, 2631, 2627, 1, 0, 0, 0, 2632,
    2635, 1, 0, 0, 0, 2633, 2631, 1, 0, 0, 0, 2633, 2634, 1, 0, 0, 0, 2634, 2636, 1, 0, 0,
    0, 2635, 2633, 1, 0, 0, 0, 2636, 2637, 5, 253, 0, 0, 2637, 2656, 1, 0, 0, 0, 2638, 2641,
    3, 354, 177, 0, 2639, 2641, 3, 350, 175, 0, 2640, 2638, 1, 0, 0, 0, 2640, 2639, 1,
    0, 0, 0, 2641, 2653, 1, 0, 0, 0, 2642, 2643, 5, 265, 0, 0, 2643, 2648, 3, 352, 176,
    0, 2644, 2645, 5, 263, 0, 0, 2645, 2647, 3, 352, 176, 0, 2646, 2644, 1, 0, 0, 0, 2647,
    2650, 1, 0, 0, 0, 2648, 2646, 1, 0, 0, 0, 2648, 2649, 1, 0, 0, 0, 2649, 2651, 1, 0, 0,
    0, 2650, 2648, 1, 0, 0, 0, 2651, 2652, 5, 266, 0, 0, 2652, 2654, 1, 0, 0, 0, 2653, 2642,
    1, 0, 0, 0, 2653, 2654, 1, 0, 0, 0, 2654, 2656, 1, 0, 0, 0, 2655, 2610, 1, 0, 0, 0, 2655,
    2616, 1, 0, 0, 0, 2655, 2623, 1, 0, 0, 0, 2655, 2640, 1, 0, 0, 0, 2656, 2661, 1, 0, 0,
    0, 2657, 2658, 10, 5, 0, 0, 2658, 2660, 5, 8, 0, 0, 2659, 2657, 1, 0, 0, 0, 2660, 2663,
    1, 0, 0, 0, 2661, 2659, 1, 0, 0, 0, 2661, 2662, 1, 0, 0, 0, 2662, 349, 1, 0, 0, 0, 2663,
    2661, 1, 0, 0, 0, 2664, 2665, 7, 28, 0, 0, 2665, 351, 1, 0, 0, 0, 2666, 2669, 5, 277,
    0, 0, 2667, 2669, 3, 348, 174, 0, 2668, 2666, 1, 0, 0, 0, 2668, 2667, 1, 0, 0, 0, 2669,
    353, 1, 0, 0, 0, 2670, 2675, 5, 284, 0, 0, 2671, 2675, 5, 285, 0, 0, 2672, 2675, 5,
    286, 0, 0, 2673, 2675, 3, 382, 191, 0, 2674, 2670, 1, 0, 0, 0, 2674, 2671, 1, 0, 0,
    0, 2674, 2672, 1, 0, 0, 0, 2674, 2673, 1, 0, 0, 0, 2675, 355, 1, 0, 0, 0, 2676, 2677,
    5, 214, 0, 0, 2677, 2678, 3, 326, 163, 0, 2678, 2679, 5, 192, 0, 0, 2679, 2680, 3,
    326, 163, 0, 2680, 357, 1, 0, 0, 0, 2681, 2682, 5, 74, 0, 0, 2682, 2683, 5, 265, 0,
    0, 2683, 2684, 3, 278, 139, 0, 2684, 2685, 5, 266, 0, 0, 2685, 359, 1, 0, 0, 0, 2686,
    2691, 3, 326, 163, 0, 2687, 2688, 5, 263, 0, 0, 2688, 2690, 3, 326, 163, 0, 2689,
    2687, 1, 0, 0, 0, 2690, 2693, 1, 0, 0, 0, 2691, 2689, 1, 0, 0, 0, 2691, 2692, 1, 0, 0,
    0, 2692, 361, 1, 0, 0, 0, 2693, 2691, 1, 0, 0, 0, 2694, 2695, 5, 143, 0, 0, 2695, 2699,
    5, 265, 0, 0, 2696, 2697, 5, 145, 0, 0, 2697, 2698, 5, 26, 0, 0, 2698, 2700, 3, 360,
    180, 0, 2699, 2696, 1, 0, 0, 0, 2699, 2700, 1, 0, 0, 0, 2700, 2711, 1, 0, 0, 0, 2701,
    2702, 5, 139, 0, 0, 2702, 2703, 5, 26, 0, 0, 2703, 2708, 3, 272, 136, 0, 2704, 2705,
    5, 263, 0, 0, 2705, 2707, 3, 272, 136, 0, 2706, 2704, 1, 0, 0, 0, 2707, 2710, 1, 0,
    0, 0, 2708, 2706, 1, 0, 0, 0, 2708, 2709, 1, 0, 0, 0, 2709, 2712, 1, 0, 0, 0, 2710, 2708,
    1, 0, 0, 0, 2711, 2701, 1, 0, 0, 0, 2711, 2712, 1, 0, 0, 0, 2712, 2714, 1, 0, 0, 0, 2713,
    2715, 3, 364, 182, 0, 2714, 2713, 1, 0, 0, 0, 2714, 2715, 1, 0, 0, 0, 2715, 2716, 1,
    0, 0, 0, 2716, 2717, 5, 266, 0, 0, 2717, 363, 1, 0, 0, 0, 2718, 2719, 7, 29, 0, 0, 2719,
    2727, 3, 366, 183, 0, 2720, 2721, 7, 29, 0, 0, 2721, 2722, 5, 15, 0, 0, 2722, 2723,
    3, 366, 183, 0, 2723, 2724, 5, 5, 0, 0, 2724, 2725, 3, 366, 183, 0, 2725, 2727, 1,
    0, 0, 0, 2726, 2718, 1, 0, 0, 0, 2726, 2720, 1, 0, 0, 0, 2727, 365, 1, 0, 0, 0, 2728,
    2729, 5, 199, 0, 0, 2729, 2738, 5, 149, 0, 0, 2730, 2731, 5, 199, 0, 0, 2731, 2738,
    5, 77, 0, 0, 2732, 2733, 5, 39, 0, 0, 2733, 2738, 5, 168, 0, 0, 2734, 2735, 3, 326,
    163, 0, 2735, 2736, 7, 30, 0, 0, 2736, 2738, 1, 0, 0, 0, 2737, 2728, 1, 0, 0, 0, 2737,
    2730, 1, 0, 0, 0, 2737, 2732, 1, 0, 0, 0, 2737, 2734, 1, 0, 0, 0, 2738, 367, 1, 0, 0,
    0, 2739, 2740, 3, 382, 191, 0, 2740, 2741, 5, 261, 0, 0, 2741, 2742, 3, 382, 191,
    0, 2742, 2745, 1, 0, 0, 0, 2743, 2745, 3, 382, 191, 0, 2744, 2739, 1, 0, 0, 0, 2744,
    2743, 1, 0, 0, 0, 2745, 369, 1, 0, 0, 0, 2746, 2751, 3, 368, 184, 0, 2747, 2748, 5,
    263, 0, 0, 2748, 2750, 3, 368, 184, 0, 2749, 2747, 1, 0, 0, 0, 2750, 2753, 1, 0, 0,
    0, 2751, 2749, 1, 0, 0, 0, 2751, 2752, 1, 0, 0, 0, 2752, 371, 1, 0, 0, 0, 2753, 2751,
    1, 0, 0, 0, 2754, 2768, 5, 2, 0, 0, 2755, 2768, 5, 4, 0, 0, 2756, 2768, 5, 58, 0, 0, 2757,
    2768, 5, 37, 0, 0, 2758, 2768, 5, 99, 0, 0, 2759, 2768, 5, 162, 0, 0, 2760, 2765, 5,
    174, 0, 0, 2761, 2762, 5, 265, 0, 0, 2762, 2763, 3, 382, 191, 0, 2763, 2764, 5, 266,
    0, 0, 2764, 2766, 1, 0, 0, 0, 2765, 2761, 1, 0, 0, 0, 2765, 2766, 1, 0, 0, 0, 2766, 2768,
    1, 0, 0, 0, 2767, 2754, 1, 0, 0, 0, 2767, 2755, 1, 0, 0, 0, 2767, 2756, 1, 0, 0, 0, 2767,
    2757, 1, 0, 0, 0, 2767, 2758, 1, 0, 0, 0, 2767, 2759, 1, 0, 0, 0, 2767, 2760, 1, 0, 0,
    0, 2768, 373, 1, 0, 0, 0, 2769, 2770, 7, 31, 0, 0, 2770, 375, 1, 0, 0, 0, 2771, 2776,
    3, 382, 191, 0, 2772, 2773, 5, 261, 0, 0, 2773, 2775, 3, 382, 191, 0, 2774, 2772,
    1, 0, 0, 0, 2775, 2778, 1, 0, 0, 0, 2776, 2774, 1, 0, 0, 0, 2776, 2777, 1, 0, 0, 0, 2777,
    377, 1, 0, 0, 0, 2778, 2776, 1, 0, 0, 0, 2779, 2785, 4, 189, 14, 0, 2780, 2781, 3, 382,
    191, 0, 2781, 2782, 5, 261, 0, 0, 2782, 2783, 3, 192, 96, 0, 2783, 2786, 1, 0, 0, 0,
    2784, 2786, 3, 192, 96, 0, 2785, 2780, 1, 0, 0, 0, 2785, 2784, 1, 0, 0, 0, 2786, 2796,
    1, 0, 0, 0, 2787, 2792, 3, 382, 191, 0, 2788, 2789, 5, 261, 0, 0, 2789, 2791, 3, 382,
    191, 0, 2790, 2788, 1, 0, 0, 0, 2791, 2794, 1, 0, 0, 0, 2792, 2790, 1, 0, 0, 0, 2792,
    2793, 1, 0, 0, 0, 2793, 2796, 1, 0, 0, 0, 2794, 2792, 1, 0, 0, 0, 2795, 2779, 1, 0, 0,
    0, 2795, 2787, 1, 0, 0, 0, 2796, 379, 1, 0, 0, 0, 2797, 2798, 5, 166, 0, 0, 2798, 2804,
    3, 382, 191, 0, 2799, 2800, 5, 204, 0, 0, 2800, 2804, 3, 382, 191, 0, 2801, 2802,
    5, 87, 0, 0, 2802, 2804, 3, 382, 191, 0, 2803, 2797, 1, 0, 0, 0, 2803, 2799, 1, 0, 0,
    0, 2803, 2801, 1, 0, 0, 0, 2804, 381, 1, 0, 0, 0, 2805, 2811, 5, 280, 0, 0, 2806, 2811,
    5, 274, 0, 0, 2807, 2811, 3, 388, 194, 0, 2808, 2811, 5, 283, 0, 0, 2809, 2811, 5,
    281, 0, 0, 2810, 2805, 1, 0, 0, 0, 2810, 2806, 1, 0, 0, 0, 2810, 2807, 1, 0, 0, 0, 2810,
    2808, 1, 0, 0, 0, 2810, 2809, 1, 0, 0, 0, 2811, 383, 1, 0, 0, 0, 2812, 2814, 5, 256,
    0, 0, 2813, 2812, 1, 0, 0, 0, 2813, 2814, 1, 0, 0, 0, 2814, 2815, 1, 0, 0, 0, 2815, 2825,
    5, 278, 0, 0, 2816, 2818, 5, 256, 0, 0, 2817, 2816, 1, 0, 0, 0, 2817, 2818, 1, 0, 0,
    0, 2818, 2819, 1, 0, 0, 0, 2819, 2825, 5, 279, 0, 0, 2820, 2822, 5, 256, 0, 0, 2821,
    2820, 1, 0, 0, 0, 2821, 2822, 1, 0, 0, 0, 2822, 2823, 1, 0, 0, 0, 2823, 2825, 5, 277,
    0, 0, 2824, 2813, 1, 0, 0, 0, 2824, 2817, 1, 0, 0, 0, 2824, 2821, 1, 0, 0, 0, 2825, 385,
    1, 0, 0, 0, 2826, 2827, 7, 32, 0, 0, 2827, 387, 1, 0, 0, 0, 2828, 2829, 7, 33, 0, 0, 2829,
    389, 1, 0, 0, 0, 362, 393, 400, 424, 437, 441, 445, 454, 459, 463, 469, 471, 476,
    480, 484, 491, 496, 502, 506, 515, 522, 526, 531, 533, 538, 542, 549, 553, 558,
    562, 565, 569, 577, 581, 585, 593, 597, 606, 609, 612, 618, 625, 636, 641, 646,
    651, 656, 665, 668, 671, 675, 701, 726, 735, 745, 748, 762, 780, 782, 791, 802,
    811, 818, 822, 829, 835, 838, 843, 850, 864, 877, 882, 887, 893, 929, 932, 938,
    941, 947, 953, 965, 967, 978, 986, 991, 995, 1000, 1007, 1011, 1015, 1021, 1025,
    1029, 1038, 1041, 1044, 1052, 1066, 1073, 1086, 1092, 1097, 1100, 1103, 1108,
    1112, 1121, 1126, 1132, 1136, 1140, 1145, 1148, 1156, 1159, 1162, 1174, 1177,
    1180, 1185, 1189, 1205, 1210, 1217, 1220, 1226, 1229, 1236, 1239, 1243, 1248,
    1251, 1258, 1261, 1285, 1299, 1303, 1307, 1327, 1329, 1331, 1340, 1342, 1351,
    1353, 1362, 1364, 1369, 1378, 1387, 1396, 1407, 1413, 1418, 1421, 1434, 1444,
    1448, 1453, 1464, 1469, 1502, 1510, 1515, 1522, 1529, 1533, 1538, 1541, 1546,
    1551, 1556, 1560, 1569, 1572, 1576, 1583, 1592, 1596, 1600, 1607, 1610, 1620,
    1627, 1632, 1637, 1642, 1648, 1651, 1660, 1663, 1666, 1672, 1677, 1687, 1690,
    1693, 1697, 1707, 1710, 1716, 1722, 1725, 1728, 1732, 1742, 1751, 1756, 1759,
    1763, 1770, 1780, 1792, 1798, 1800, 1809, 1812, 1819, 1829, 1835, 1843, 1854,
    1864, 1875, 1877, 1883, 1888, 1898, 1901, 1907, 1909, 1917, 1923, 1926, 1928,
    1940, 1947, 1951, 1955, 1959, 1962, 1971, 1974, 1977, 1982, 1985, 1992, 1998,
    2003, 2006, 2013, 2024, 2027, 2031, 2035, 2044, 2048, 2053, 2056, 2067, 2083,
    2087, 2091, 2095, 2099, 2103, 2107, 2111, 2121, 2126, 2135, 2140, 2153, 2155,
    2159, 2163, 2165, 2173, 2182, 2185, 2200, 2206, 2214, 2221, 2225, 2233, 2235,
    2246, 2254, 2263, 2269, 2274, 2280, 2286, 2291, 2296, 2302, 2313, 2315, 2321,
    2328, 2331, 2340, 2343, 2347, 2350, 2376, 2382, 2386, 2398, 2408, 2411, 2424,
    2427, 2446, 2450, 2458, 2462, 2487, 2490, 2499, 2505, 2511, 2517, 2528, 2537,
    2559, 2562, 2565, 2575, 2577, 2584, 2586, 2606, 2633, 2640, 2648, 2653, 2655,
    2661, 2668, 2674, 2691, 2699, 2708, 2711, 2714, 2726, 2737, 2744, 2751, 2765,
    2767, 2776, 2785, 2792, 2795, 2803, 2810, 2813, 2817, 2821, 2824
];
ImpalaSqlParser.vocabulary = new antlr.Vocabulary(ImpalaSqlParser.literalNames, ImpalaSqlParser.symbolicNames, []);
ImpalaSqlParser.decisionsToDFA = ImpalaSqlParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
export class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(ImpalaSqlParser.EOF, 0);
    }
    singleStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleStatementContext);
        }
        return this.getRuleContext(i, SingleStatementContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_program;
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
export class SingleStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    sqlStatement() {
        return this.getRuleContext(0, SqlStatementContext);
    }
    SEMICOLON() {
        return this.getToken(ImpalaSqlParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_singleStatement;
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
export class SqlStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    useStatement() {
        return this.getRuleContext(0, UseStatementContext);
    }
    createStatement() {
        return this.getRuleContext(0, CreateStatementContext);
    }
    alterStatement() {
        return this.getRuleContext(0, AlterStatementContext);
    }
    truncateTableStatement() {
        return this.getRuleContext(0, TruncateTableStatementContext);
    }
    describeStatement() {
        return this.getRuleContext(0, DescribeStatementContext);
    }
    computeStatement() {
        return this.getRuleContext(0, ComputeStatementContext);
    }
    dropStatement() {
        return this.getRuleContext(0, DropStatementContext);
    }
    grantStatement() {
        return this.getRuleContext(0, GrantStatementContext);
    }
    revokeStatement() {
        return this.getRuleContext(0, RevokeStatementContext);
    }
    insertStatement() {
        return this.getRuleContext(0, InsertStatementContext);
    }
    deleteStatement() {
        return this.getRuleContext(0, DeleteStatementContext);
    }
    updateStatement() {
        return this.getRuleContext(0, UpdateStatementContext);
    }
    upsertStatement() {
        return this.getRuleContext(0, UpsertStatementContext);
    }
    showStatement() {
        return this.getRuleContext(0, ShowStatementContext);
    }
    addCommentStatement() {
        return this.getRuleContext(0, AddCommentStatementContext);
    }
    explainStatement() {
        return this.getRuleContext(0, ExplainStatementContext);
    }
    setStatement() {
        return this.getRuleContext(0, SetStatementContext);
    }
    shutdownStatement() {
        return this.getRuleContext(0, ShutdownStatementContext);
    }
    invalidateMetaStatement() {
        return this.getRuleContext(0, InvalidateMetaStatementContext);
    }
    loadDataStatement() {
        return this.getRuleContext(0, LoadDataStatementContext);
    }
    refreshStatement() {
        return this.getRuleContext(0, RefreshStatementContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_sqlStatement;
    }
    enterRule(listener) {
        if (listener.enterSqlStatement) {
            listener.enterSqlStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSqlStatement) {
            listener.exitSqlStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSqlStatement) {
            return visitor.visitSqlStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UseStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_USE() {
        return this.getToken(ImpalaSqlParser.KW_USE, 0);
    }
    databaseNamePath() {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_useStatement;
    }
    enterRule(listener) {
        if (listener.enterUseStatement) {
            listener.enterUseStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUseStatement) {
            listener.exitUseStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUseStatement) {
            return visitor.visitUseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    createSchema() {
        return this.getRuleContext(0, CreateSchemaContext);
    }
    createRole() {
        return this.getRuleContext(0, CreateRoleContext);
    }
    createAggregateFunction() {
        return this.getRuleContext(0, CreateAggregateFunctionContext);
    }
    createFunction() {
        return this.getRuleContext(0, CreateFunctionContext);
    }
    createView() {
        return this.getRuleContext(0, CreateViewContext);
    }
    createKuduTableAsSelect() {
        return this.getRuleContext(0, CreateKuduTableAsSelectContext);
    }
    createTableLike() {
        return this.getRuleContext(0, CreateTableLikeContext);
    }
    createTableSelect() {
        return this.getRuleContext(0, CreateTableSelectContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createStatement;
    }
    enterRule(listener) {
        if (listener.enterCreateStatement) {
            listener.enterCreateStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateStatement) {
            listener.exitCreateStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateStatement) {
            return visitor.visitCreateStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableSelectContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNameCreate() {
        return this.getRuleContext(0, TableNameCreateContext);
    }
    createCommonItem() {
        return this.getRuleContext(0, CreateCommonItemContext);
    }
    KW_EXTERNAL() {
        return this.getToken(ImpalaSqlParser.KW_EXTERNAL, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    columnDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnDefinitionContext);
        }
        return this.getRuleContext(i, ColumnDefinitionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_PARTITIONED() {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONED, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    partitionedBy() {
        return this.getRuleContext(0, PartitionedByContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    constraintSpecification() {
        return this.getRuleContext(0, ConstraintSpecificationContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createTableSelect;
    }
    enterRule(listener) {
        if (listener.enterCreateTableSelect) {
            listener.enterCreateTableSelect(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateTableSelect) {
            listener.exitCreateTableSelect(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateTableSelect) {
            return visitor.visitCreateTableSelect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableLikeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNameCreate() {
        return this.getRuleContext(0, TableNameCreateContext);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    createCommonItem() {
        return this.getRuleContext(0, CreateCommonItemContext);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_PARQUET() {
        return this.getToken(ImpalaSqlParser.KW_PARQUET, 0);
    }
    KW_EXTERNAL() {
        return this.getToken(ImpalaSqlParser.KW_EXTERNAL, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    KW_PARTITIONED() {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONED, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    partitionedBy() {
        return this.getRuleContext(0, PartitionedByContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createTableLike;
    }
    enterRule(listener) {
        if (listener.enterCreateTableLike) {
            listener.enterCreateTableLike(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateTableLike) {
            listener.exitCreateTableLike(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateTableLike) {
            return visitor.visitCreateTableLike(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateKuduTableAsSelectContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNameCreate() {
        return this.getRuleContext(0, TableNameCreateContext);
    }
    KW_STORED() {
        return this.getToken(ImpalaSqlParser.KW_STORED, 0);
    }
    KW_AS(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_AS);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_AS, i);
        }
    }
    KW_KUDU() {
        return this.getToken(ImpalaSqlParser.KW_KUDU, 0);
    }
    KW_EXTERNAL() {
        return this.getToken(ImpalaSqlParser.KW_EXTERNAL, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    kuduTableElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(KuduTableElementContext);
        }
        return this.getRuleContext(i, KuduTableElementContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_PRIMARY(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_PRIMARY);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_PRIMARY, i);
        }
    }
    KW_KEY(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_KEY);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_KEY, i);
        }
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    kuduPartitionClause() {
        return this.getRuleContext(0, KuduPartitionClauseContext);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    KW_TBLPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    properties() {
        return this.getRuleContext(0, PropertiesContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    columnAliases(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnAliasesContext);
        }
        return this.getRuleContext(i, ColumnAliasesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createKuduTableAsSelect;
    }
    enterRule(listener) {
        if (listener.enterCreateKuduTableAsSelect) {
            listener.enterCreateKuduTableAsSelect(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateKuduTableAsSelect) {
            listener.exitCreateKuduTableAsSelect(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateKuduTableAsSelect) {
            return visitor.visitCreateKuduTableAsSelect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNameCreate() {
        return this.getRuleContext(0, ViewNameCreateContext);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    viewColumns() {
        return this.getRuleContext(0, ViewColumnsContext);
    }
    commentClause() {
        return this.getRuleContext(0, CommentClauseContext);
    }
    KW_TBLPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    properties() {
        return this.getRuleContext(0, PropertiesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createView;
    }
    enterRule(listener) {
        if (listener.enterCreateView) {
            listener.enterCreateView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateView) {
            listener.exitCreateView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateView) {
            return visitor.visitCreateView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateSchemaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    databaseNameCreate() {
        return this.getRuleContext(0, DatabaseNameCreateContext);
    }
    KW_SCHEMA() {
        return this.getToken(ImpalaSqlParser.KW_SCHEMA, 0);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    commentClause() {
        return this.getRuleContext(0, CommentClauseContext);
    }
    KW_LOCATION() {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createSchema;
    }
    enterRule(listener) {
        if (listener.enterCreateSchema) {
            listener.enterCreateSchema(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateSchema) {
            listener.exitCreateSchema(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateSchema) {
            return visitor.visitCreateSchema(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateRoleContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createRole;
    }
    enterRule(listener) {
        if (listener.enterCreateRole) {
            listener.enterCreateRole(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateRole) {
            listener.exitCreateRole(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateRole) {
            return visitor.visitCreateRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateAggregateFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_FUNCTION() {
        return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0);
    }
    functionNameCreate() {
        return this.getRuleContext(0, FunctionNameCreateContext);
    }
    KW_RETURNS() {
        return this.getToken(ImpalaSqlParser.KW_RETURNS, 0);
    }
    KW_LOCATION() {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    STRING(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.STRING);
        }
        else {
            return this.getToken(ImpalaSqlParser.STRING, i);
        }
    }
    KW_UPDATE_FN() {
        return this.getToken(ImpalaSqlParser.KW_UPDATE_FN, 0);
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.EQ);
        }
        else {
            return this.getToken(ImpalaSqlParser.EQ, i);
        }
    }
    KW_MERGE_FN() {
        return this.getToken(ImpalaSqlParser.KW_MERGE_FN, 0);
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        return this.getRuleContext(i, TypeContext);
    }
    KW_AGGREGATE() {
        return this.getToken(ImpalaSqlParser.KW_AGGREGATE, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_INTERMEDIATE() {
        return this.getToken(ImpalaSqlParser.KW_INTERMEDIATE, 0);
    }
    KW_INIT_FN() {
        return this.getToken(ImpalaSqlParser.KW_INIT_FN, 0);
    }
    KW_PREPARE_FN() {
        return this.getToken(ImpalaSqlParser.KW_PREPARE_FN, 0);
    }
    KW_CLOSEFN() {
        return this.getToken(ImpalaSqlParser.KW_CLOSEFN, 0);
    }
    KW_SERIALIZE_FN() {
        return this.getToken(ImpalaSqlParser.KW_SERIALIZE_FN, 0);
    }
    KW_FINALIZE_FN() {
        return this.getToken(ImpalaSqlParser.KW_FINALIZE_FN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createAggregateFunction;
    }
    enterRule(listener) {
        if (listener.enterCreateAggregateFunction) {
            listener.enterCreateAggregateFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateAggregateFunction) {
            listener.exitCreateAggregateFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateAggregateFunction) {
            return visitor.visitCreateAggregateFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_FUNCTION() {
        return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0);
    }
    functionNameCreate() {
        return this.getRuleContext(0, FunctionNameCreateContext);
    }
    KW_LOCATION() {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    STRING() {
        return this.getToken(ImpalaSqlParser.STRING, 0);
    }
    KW_SYMBOL() {
        return this.getToken(ImpalaSqlParser.KW_SYMBOL, 0);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_RETURNS() {
        return this.getToken(ImpalaSqlParser.KW_RETURNS, 0);
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        return this.getRuleContext(i, TypeContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createFunction;
    }
    enterRule(listener) {
        if (listener.enterCreateFunction) {
            listener.enterCreateFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateFunction) {
            listener.exitCreateFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateFunction) {
            return visitor.visitCreateFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    alterDatabase() {
        return this.getRuleContext(0, AlterDatabaseContext);
    }
    alterUnSetOrSetViewTblProperties() {
        return this.getRuleContext(0, AlterUnSetOrSetViewTblPropertiesContext);
    }
    renameTable() {
        return this.getRuleContext(0, RenameTableContext);
    }
    alterViewOwner() {
        return this.getRuleContext(0, AlterViewOwnerContext);
    }
    alterView() {
        return this.getRuleContext(0, AlterViewContext);
    }
    renameView() {
        return this.getRuleContext(0, RenameViewContext);
    }
    dropPartitionByRangeOrValue() {
        return this.getRuleContext(0, DropPartitionByRangeOrValueContext);
    }
    alterFormat() {
        return this.getRuleContext(0, AlterFormatContext);
    }
    recoverPartitions() {
        return this.getRuleContext(0, RecoverPartitionsContext);
    }
    addPartitionByRangeOrValue() {
        return this.getRuleContext(0, AddPartitionByRangeOrValueContext);
    }
    alterTableNonKuduOrKuduOnly() {
        return this.getRuleContext(0, AlterTableNonKuduOrKuduOnlyContext);
    }
    addSingleColumn() {
        return this.getRuleContext(0, AddSingleColumnContext);
    }
    replaceOrAddColumns() {
        return this.getRuleContext(0, ReplaceOrAddColumnsContext);
    }
    changeColumnDefine() {
        return this.getRuleContext(0, ChangeColumnDefineContext);
    }
    alterStatsKey() {
        return this.getRuleContext(0, AlterStatsKeyContext);
    }
    alterPartitionCache() {
        return this.getRuleContext(0, AlterPartitionCacheContext);
    }
    alterDropSingleColumn() {
        return this.getRuleContext(0, AlterDropSingleColumnContext);
    }
    alterTableOwner() {
        return this.getRuleContext(0, AlterTableOwnerContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterStatement;
    }
    enterRule(listener) {
        if (listener.enterAlterStatement) {
            listener.enterAlterStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterStatement) {
            listener.exitAlterStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterStatement) {
            return visitor.visitAlterStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterDatabaseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    databaseNamePath() {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_OWNER() {
        return this.getToken(ImpalaSqlParser.KW_OWNER, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterDatabase;
    }
    enterRule(listener) {
        if (listener.enterAlterDatabase) {
            listener.enterAlterDatabase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterDatabase) {
            listener.exitAlterDatabase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterDatabase) {
            return visitor.visitAlterDatabase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterStatsKeyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    KW_STATS() {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    EQ(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.EQ);
        }
        else {
            return this.getToken(ImpalaSqlParser.EQ, i);
        }
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        return this.getRuleContext(i, StringLiteralContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    STATS_NUMDVS(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.STATS_NUMDVS);
        }
        else {
            return this.getToken(ImpalaSqlParser.STATS_NUMDVS, i);
        }
    }
    STATS_NUMNULLS(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.STATS_NUMNULLS);
        }
        else {
            return this.getToken(ImpalaSqlParser.STATS_NUMNULLS, i);
        }
    }
    STATS_AVGSIZE(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.STATS_AVGSIZE);
        }
        else {
            return this.getToken(ImpalaSqlParser.STATS_AVGSIZE, i);
        }
    }
    STATS_MAXSIZE(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.STATS_MAXSIZE);
        }
        else {
            return this.getToken(ImpalaSqlParser.STATS_MAXSIZE, i);
        }
    }
    COMMA() {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterStatsKey;
    }
    enterRule(listener) {
        if (listener.enterAlterStatsKey) {
            listener.enterAlterStatsKey(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterStatsKey) {
            listener.exitAlterStatsKey(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterStatsKey) {
            return visitor.visitAlterStatsKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterPartitionCacheContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_UNCACHED() {
        return this.getToken(ImpalaSqlParser.KW_UNCACHED, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_CACHED() {
        return this.getToken(ImpalaSqlParser.KW_CACHED, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    KW_WITH() {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    KW_REPLICATION() {
        return this.getToken(ImpalaSqlParser.KW_REPLICATION, 0);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterPartitionCache;
    }
    enterRule(listener) {
        if (listener.enterAlterPartitionCache) {
            listener.enterAlterPartitionCache(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterPartitionCache) {
            listener.exitAlterPartitionCache(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterPartitionCache) {
            return visitor.visitAlterPartitionCache(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ChangeColumnDefineContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_CHANGE() {
        return this.getToken(ImpalaSqlParser.KW_CHANGE, 0);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    columnSpecWithKudu() {
        return this.getRuleContext(0, ColumnSpecWithKuduContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_changeColumnDefine;
    }
    enterRule(listener) {
        if (listener.enterChangeColumnDefine) {
            listener.enterChangeColumnDefine(this);
        }
    }
    exitRule(listener) {
        if (listener.exitChangeColumnDefine) {
            listener.exitChangeColumnDefine(this);
        }
    }
    accept(visitor) {
        if (visitor.visitChangeColumnDefine) {
            return visitor.visitChangeColumnDefine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterDropSingleColumnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterDropSingleColumn;
    }
    enterRule(listener) {
        if (listener.enterAlterDropSingleColumn) {
            listener.enterAlterDropSingleColumn(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterDropSingleColumn) {
            listener.exitAlterDropSingleColumn(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterDropSingleColumn) {
            return visitor.visitAlterDropSingleColumn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableOwnerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_OWNER() {
        return this.getToken(ImpalaSqlParser.KW_OWNER, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterTableOwner;
    }
    enterRule(listener) {
        if (listener.enterAlterTableOwner) {
            listener.enterAlterTableOwner(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterTableOwner) {
            listener.exitAlterTableOwner(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterTableOwner) {
            return visitor.visitAlterTableOwner(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReplaceOrAddColumnsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_COLUMNS() {
        return this.getToken(ImpalaSqlParser.KW_COLUMNS, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    columnSpecWithKudu(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnSpecWithKuduContext);
        }
        return this.getRuleContext(i, ColumnSpecWithKuduContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_REPLACE() {
        return this.getToken(ImpalaSqlParser.KW_REPLACE, 0);
    }
    KW_ADD() {
        return this.getToken(ImpalaSqlParser.KW_ADD, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_replaceOrAddColumns;
    }
    enterRule(listener) {
        if (listener.enterReplaceOrAddColumns) {
            listener.enterReplaceOrAddColumns(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReplaceOrAddColumns) {
            listener.exitReplaceOrAddColumns(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReplaceOrAddColumns) {
            return visitor.visitReplaceOrAddColumns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddSingleColumnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_ADD() {
        return this.getToken(ImpalaSqlParser.KW_ADD, 0);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    createColumnSpecWithKudu() {
        return this.getRuleContext(0, CreateColumnSpecWithKuduContext);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_addSingleColumn;
    }
    enterRule(listener) {
        if (listener.enterAddSingleColumn) {
            listener.enterAddSingleColumn(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddSingleColumn) {
            listener.exitAddSingleColumn(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddSingleColumn) {
            return visitor.visitAddSingleColumn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableNonKuduOrKuduOnlyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_ALTER);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_ALTER, i);
        }
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_DEFAULT() {
        return this.getToken(ImpalaSqlParser.KW_DEFAULT, 0);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    kuduStorageAttr() {
        return this.getRuleContext(0, KuduStorageAttrContext);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterTableNonKuduOrKuduOnly;
    }
    enterRule(listener) {
        if (listener.enterAlterTableNonKuduOrKuduOnly) {
            listener.enterAlterTableNonKuduOrKuduOnly(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterTableNonKuduOrKuduOnly) {
            listener.exitAlterTableNonKuduOrKuduOnly(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterTableNonKuduOrKuduOnly) {
            return visitor.visitAlterTableNonKuduOrKuduOnly(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddPartitionByRangeOrValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_ADD() {
        return this.getToken(ImpalaSqlParser.KW_ADD, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_RANGE() {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    kuduPartitionSpec() {
        return this.getRuleContext(0, KuduPartitionSpecContext);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    KW_LOCATION() {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    cacheSpec() {
        return this.getRuleContext(0, CacheSpecContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_addPartitionByRangeOrValue;
    }
    enterRule(listener) {
        if (listener.enterAddPartitionByRangeOrValue) {
            listener.enterAddPartitionByRangeOrValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddPartitionByRangeOrValue) {
            listener.exitAddPartitionByRangeOrValue(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddPartitionByRangeOrValue) {
            return visitor.visitAddPartitionByRangeOrValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterFormatContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_FILEFORMAT() {
        return this.getToken(ImpalaSqlParser.KW_FILEFORMAT, 0);
    }
    fileFormat() {
        return this.getRuleContext(0, FileFormatContext);
    }
    KW_ROW() {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    KW_FORMAT() {
        return this.getToken(ImpalaSqlParser.KW_FORMAT, 0);
    }
    rowFormat() {
        return this.getRuleContext(0, RowFormatContext);
    }
    KW_LOCATION() {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    KW_TBLPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    KW_SERDEPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_SERDEPROPERTIES, 0);
    }
    properties() {
        return this.getRuleContext(0, PropertiesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterFormat;
    }
    enterRule(listener) {
        if (listener.enterAlterFormat) {
            listener.enterAlterFormat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterFormat) {
            listener.exitAlterFormat(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterFormat) {
            return visitor.visitAlterFormat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RecoverPartitionsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_RECOVER() {
        return this.getToken(ImpalaSqlParser.KW_RECOVER, 0);
    }
    KW_PARTITIONS() {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_recoverPartitions;
    }
    enterRule(listener) {
        if (listener.enterRecoverPartitions) {
            listener.enterRecoverPartitions(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRecoverPartitions) {
            listener.exitRecoverPartitions(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRecoverPartitions) {
            return visitor.visitRecoverPartitions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropPartitionByRangeOrValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_RANGE() {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    kuduPartitionSpec() {
        return this.getRuleContext(0, KuduPartitionSpecContext);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    KW_PURGE() {
        return this.getToken(ImpalaSqlParser.KW_PURGE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropPartitionByRangeOrValue;
    }
    enterRule(listener) {
        if (listener.enterDropPartitionByRangeOrValue) {
            listener.enterDropPartitionByRangeOrValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropPartitionByRangeOrValue) {
            listener.exitDropPartitionByRangeOrValue(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropPartitionByRangeOrValue) {
            return visitor.visitDropPartitionByRangeOrValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNamePath() {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    viewColumns() {
        return this.getRuleContext(0, ViewColumnsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterView;
    }
    enterRule(listener) {
        if (listener.enterAlterView) {
            listener.enterAlterView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterView) {
            listener.exitAlterView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterView) {
            return visitor.visitAlterView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNamePath(i) {
        if (i === undefined) {
            return this.getRuleContexts(ViewNamePathContext);
        }
        return this.getRuleContext(i, ViewNamePathContext);
    }
    KW_RENAME() {
        return this.getToken(ImpalaSqlParser.KW_RENAME, 0);
    }
    KW_TO() {
        return this.getToken(ImpalaSqlParser.KW_TO, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_renameView;
    }
    enterRule(listener) {
        if (listener.enterRenameView) {
            listener.enterRenameView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRenameView) {
            listener.exitRenameView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRenameView) {
            return visitor.visitRenameView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterViewOwnerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNamePath() {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_OWNER() {
        return this.getToken(ImpalaSqlParser.KW_OWNER, 0);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterViewOwner;
    }
    enterRule(listener) {
        if (listener.enterAlterViewOwner) {
            listener.enterAlterViewOwner(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterViewOwner) {
            listener.exitAlterViewOwner(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterViewOwner) {
            return visitor.visitAlterViewOwner(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath(i) {
        if (i === undefined) {
            return this.getRuleContexts(TableNamePathContext);
        }
        return this.getRuleContext(i, TableNamePathContext);
    }
    KW_RENAME() {
        return this.getToken(ImpalaSqlParser.KW_RENAME, 0);
    }
    KW_TO() {
        return this.getToken(ImpalaSqlParser.KW_TO, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_renameTable;
    }
    enterRule(listener) {
        if (listener.enterRenameTable) {
            listener.enterRenameTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRenameTable) {
            listener.exitRenameTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRenameTable) {
            return visitor.visitRenameTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterUnSetOrSetViewTblPropertiesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNamePath() {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    KW_TBLPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    KW_UNSET() {
        return this.getToken(ImpalaSqlParser.KW_UNSET, 0);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    properties() {
        return this.getRuleContext(0, PropertiesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_alterUnSetOrSetViewTblProperties;
    }
    enterRule(listener) {
        if (listener.enterAlterUnSetOrSetViewTblProperties) {
            listener.enterAlterUnSetOrSetViewTblProperties(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterUnSetOrSetViewTblProperties) {
            listener.exitAlterUnSetOrSetViewTblProperties(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterUnSetOrSetViewTblProperties) {
            return visitor.visitAlterUnSetOrSetViewTblProperties(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TruncateTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TRUNCATE() {
        return this.getToken(ImpalaSqlParser.KW_TRUNCATE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_truncateTableStatement;
    }
    enterRule(listener) {
        if (listener.enterTruncateTableStatement) {
            listener.enterTruncateTableStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTruncateTableStatement) {
            listener.exitTruncateTableStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTruncateTableStatement) {
            return visitor.visitTruncateTableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DescribeStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DESCRIBE() {
        return this.getToken(ImpalaSqlParser.KW_DESCRIBE, 0);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    KW_FORMATTED() {
        return this.getToken(ImpalaSqlParser.KW_FORMATTED, 0);
    }
    KW_EXTENDED() {
        return this.getToken(ImpalaSqlParser.KW_EXTENDED, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_describeStatement;
    }
    enterRule(listener) {
        if (listener.enterDescribeStatement) {
            listener.enterDescribeStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDescribeStatement) {
            listener.exitDescribeStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDescribeStatement) {
            return visitor.visitDescribeStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComputeStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    computeStats() {
        return this.getRuleContext(0, ComputeStatsContext);
    }
    computeIncrementalStats() {
        return this.getRuleContext(0, ComputeIncrementalStatsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_computeStatement;
    }
    enterRule(listener) {
        if (listener.enterComputeStatement) {
            listener.enterComputeStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComputeStatement) {
            listener.exitComputeStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComputeStatement) {
            return visitor.visitComputeStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComputeStatsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMPUTE() {
        return this.getToken(ImpalaSqlParser.KW_COMPUTE, 0);
    }
    KW_STATS() {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    KW_TABLESAMPLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLESAMPLE, 0);
    }
    KW_SYSTEM() {
        return this.getToken(ImpalaSqlParser.KW_SYSTEM, 0);
    }
    LPAREN(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.LPAREN);
        }
        else {
            return this.getToken(ImpalaSqlParser.LPAREN, i);
        }
    }
    number_(i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        return this.getRuleContext(i, NumberContext);
    }
    RPAREN(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.RPAREN);
        }
        else {
            return this.getToken(ImpalaSqlParser.RPAREN, i);
        }
    }
    KW_REPEATABLE() {
        return this.getToken(ImpalaSqlParser.KW_REPEATABLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_computeStats;
    }
    enterRule(listener) {
        if (listener.enterComputeStats) {
            listener.enterComputeStats(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComputeStats) {
            listener.exitComputeStats(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComputeStats) {
            return visitor.visitComputeStats(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComputeIncrementalStatsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMPUTE() {
        return this.getToken(ImpalaSqlParser.KW_COMPUTE, 0);
    }
    KW_INCREMENTAL() {
        return this.getToken(ImpalaSqlParser.KW_INCREMENTAL, 0);
    }
    KW_STATS() {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_computeIncrementalStats;
    }
    enterRule(listener) {
        if (listener.enterComputeIncrementalStats) {
            listener.enterComputeIncrementalStats(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComputeIncrementalStats) {
            listener.exitComputeIncrementalStats(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComputeIncrementalStats) {
            return visitor.visitComputeIncrementalStats(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    dropRole() {
        return this.getRuleContext(0, DropRoleContext);
    }
    dropFunction() {
        return this.getRuleContext(0, DropFunctionContext);
    }
    dropIncrementalStats() {
        return this.getRuleContext(0, DropIncrementalStatsContext);
    }
    dropView() {
        return this.getRuleContext(0, DropViewContext);
    }
    dropTable() {
        return this.getRuleContext(0, DropTableContext);
    }
    dropSchema() {
        return this.getRuleContext(0, DropSchemaContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropStatement;
    }
    enterRule(listener) {
        if (listener.enterDropStatement) {
            listener.enterDropStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropStatement) {
            listener.exitDropStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropStatement) {
            return visitor.visitDropStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropSchemaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    databaseNamePath() {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    KW_SCHEMA() {
        return this.getToken(ImpalaSqlParser.KW_SCHEMA, 0);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    KW_CASCADE() {
        return this.getToken(ImpalaSqlParser.KW_CASCADE, 0);
    }
    KW_RESTRICT() {
        return this.getToken(ImpalaSqlParser.KW_RESTRICT, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropSchema;
    }
    enterRule(listener) {
        if (listener.enterDropSchema) {
            listener.enterDropSchema(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropSchema) {
            listener.exitDropSchema(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropSchema) {
            return visitor.visitDropSchema(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNamePath() {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropView;
    }
    enterRule(listener) {
        if (listener.enterDropView) {
            listener.enterDropView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropView) {
            listener.exitDropView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropView) {
            return visitor.visitDropView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    KW_PURGE() {
        return this.getToken(ImpalaSqlParser.KW_PURGE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropTable;
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
export class DropIncrementalStatsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_STATS() {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_INCREMENTAL() {
        return this.getToken(ImpalaSqlParser.KW_INCREMENTAL, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropIncrementalStats;
    }
    enterRule(listener) {
        if (listener.enterDropIncrementalStats) {
            listener.enterDropIncrementalStats(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropIncrementalStats) {
            listener.exitDropIncrementalStats(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropIncrementalStats) {
            return visitor.visitDropIncrementalStats(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_FUNCTION() {
        return this.getToken(ImpalaSqlParser.KW_FUNCTION, 0);
    }
    functionNamePath() {
        return this.getRuleContext(0, FunctionNamePathContext);
    }
    KW_AGGREGATE() {
        return this.getToken(ImpalaSqlParser.KW_AGGREGATE, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        return this.getRuleContext(i, TypeContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropFunction;
    }
    enterRule(listener) {
        if (listener.enterDropFunction) {
            listener.enterDropFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropFunction) {
            listener.exitDropFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropFunction) {
            return visitor.visitDropFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropRoleContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dropRole;
    }
    enterRule(listener) {
        if (listener.enterDropRole) {
            listener.enterDropRole(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropRole) {
            listener.exitDropRole(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropRole) {
            return visitor.visitDropRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GrantStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    grantRole() {
        return this.getRuleContext(0, GrantRoleContext);
    }
    grant() {
        return this.getRuleContext(0, GrantContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_grantStatement;
    }
    enterRule(listener) {
        if (listener.enterGrantStatement) {
            listener.enterGrantStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGrantStatement) {
            listener.exitGrantStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGrantStatement) {
            return visitor.visitGrantStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GrantRoleContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    KW_TO() {
        return this.getToken(ImpalaSqlParser.KW_TO, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_grantRole;
    }
    enterRule(listener) {
        if (listener.enterGrantRole) {
            listener.enterGrantRole(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGrantRole) {
            listener.exitGrantRole(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGrantRole) {
            return visitor.visitGrantRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GrantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    privilege() {
        return this.getRuleContext(0, PrivilegeContext);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    objectType() {
        return this.getRuleContext(0, ObjectTypeContext);
    }
    KW_TO() {
        return this.getToken(ImpalaSqlParser.KW_TO, 0);
    }
    principal() {
        return this.getRuleContext(0, PrincipalContext);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_grant;
    }
    enterRule(listener) {
        if (listener.enterGrant) {
            listener.enterGrant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGrant) {
            listener.exitGrant(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGrant) {
            return visitor.visitGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RevokeStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    revokeRole() {
        return this.getRuleContext(0, RevokeRoleContext);
    }
    revoke() {
        return this.getRuleContext(0, RevokeContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_revokeStatement;
    }
    enterRule(listener) {
        if (listener.enterRevokeStatement) {
            listener.enterRevokeStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRevokeStatement) {
            listener.exitRevokeStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRevokeStatement) {
            return visitor.visitRevokeStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RevokeRoleContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_REVOKE() {
        return this.getToken(ImpalaSqlParser.KW_REVOKE, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_revokeRole;
    }
    enterRule(listener) {
        if (listener.enterRevokeRole) {
            listener.enterRevokeRole(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRevokeRole) {
            listener.exitRevokeRole(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRevokeRole) {
            return visitor.visitRevokeRole(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RevokeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_REVOKE() {
        return this.getToken(ImpalaSqlParser.KW_REVOKE, 0);
    }
    privilege() {
        return this.getRuleContext(0, PrivilegeContext);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    objectType() {
        return this.getRuleContext(0, ObjectTypeContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    KW_OPTION() {
        return this.getToken(ImpalaSqlParser.KW_OPTION, 0);
    }
    KW_FOR() {
        return this.getToken(ImpalaSqlParser.KW_FOR, 0);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    principal() {
        return this.getRuleContext(0, PrincipalContext);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_revoke;
    }
    enterRule(listener) {
        if (listener.enterRevoke) {
            listener.enterRevoke(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRevoke) {
            listener.exitRevoke(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRevoke) {
            return visitor.visitRevoke(this);
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
        return this.getToken(ImpalaSqlParser.KW_INSERT, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    KW_INTO() {
        return this.getToken(ImpalaSqlParser.KW_INTO, 0);
    }
    KW_OVERWRITE() {
        return this.getToken(ImpalaSqlParser.KW_OVERWRITE, 0);
    }
    with() {
        return this.getRuleContext(0, WithContext);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_insertStatement;
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
export class DeleteStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    delete() {
        return this.getRuleContext(0, DeleteContext);
    }
    deleteTableRef() {
        return this.getRuleContext(0, DeleteTableRefContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_deleteStatement;
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
export class DeleteContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DELETE() {
        return this.getToken(ImpalaSqlParser.KW_DELETE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_delete;
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
export class DeleteTableRefContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DELETE() {
        return this.getToken(ImpalaSqlParser.KW_DELETE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    relation(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }
        return this.getRuleContext(i, RelationContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_deleteTableRef;
    }
    enterRule(listener) {
        if (listener.enterDeleteTableRef) {
            listener.enterDeleteTableRef(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeleteTableRef) {
            listener.exitDeleteTableRef(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDeleteTableRef) {
            return visitor.visitDeleteTableRef(this);
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
        return this.getToken(ImpalaSqlParser.KW_UPDATE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    assignmentList() {
        return this.getRuleContext(0, AssignmentListContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    relation(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }
        return this.getRuleContext(i, RelationContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_updateStatement;
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
export class UpsertStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_UPSERT() {
        return this.getToken(ImpalaSqlParser.KW_UPSERT, 0);
    }
    KW_INTO() {
        return this.getToken(ImpalaSqlParser.KW_INTO, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_upsertStatement;
    }
    enterRule(listener) {
        if (listener.enterUpsertStatement) {
            listener.enterUpsertStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpsertStatement) {
            listener.exitUpsertStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpsertStatement) {
            return visitor.visitUpsertStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    showRoles() {
        return this.getRuleContext(0, ShowRolesContext);
    }
    showRoleGrant() {
        return this.getRuleContext(0, ShowRoleGrantContext);
    }
    showGrants() {
        return this.getRuleContext(0, ShowGrantsContext);
    }
    showFiles() {
        return this.getRuleContext(0, ShowFilesContext);
    }
    showPartitions() {
        return this.getRuleContext(0, ShowPartitionsContext);
    }
    showColumnStats() {
        return this.getRuleContext(0, ShowColumnStatsContext);
    }
    showTableStats() {
        return this.getRuleContext(0, ShowTableStatsContext);
    }
    showCreateView() {
        return this.getRuleContext(0, ShowCreateViewContext);
    }
    showCreateTable() {
        return this.getRuleContext(0, ShowCreateTableContext);
    }
    showFunctions() {
        return this.getRuleContext(0, ShowFunctionsContext);
    }
    showTables() {
        return this.getRuleContext(0, ShowTablesContext);
    }
    showSchemas() {
        return this.getRuleContext(0, ShowSchemasContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showStatement;
    }
    enterRule(listener) {
        if (listener.enterShowStatement) {
            listener.enterShowStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowStatement) {
            listener.exitShowStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowStatement) {
            return visitor.visitShowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowSchemasContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_SCHEMAS() {
        return this.getToken(ImpalaSqlParser.KW_SCHEMAS, 0);
    }
    KW_DATABASES() {
        return this.getToken(ImpalaSqlParser.KW_DATABASES, 0);
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        return this.getRuleContext(i, StringLiteralContext);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    BITWISEOR(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.BITWISEOR);
        }
        else {
            return this.getToken(ImpalaSqlParser.BITWISEOR, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showSchemas;
    }
    enterRule(listener) {
        if (listener.enterShowSchemas) {
            listener.enterShowSchemas(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowSchemas) {
            listener.exitShowSchemas(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowSchemas) {
            return visitor.visitShowSchemas(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTablesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_TABLES() {
        return this.getToken(ImpalaSqlParser.KW_TABLES, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        return this.getRuleContext(i, StringLiteralContext);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    BITWISEOR(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.BITWISEOR);
        }
        else {
            return this.getToken(ImpalaSqlParser.BITWISEOR, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showTables;
    }
    enterRule(listener) {
        if (listener.enterShowTables) {
            listener.enterShowTables(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowTables) {
            listener.exitShowTables(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowTables) {
            return visitor.visitShowTables(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowFunctionsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_FUNCTIONS() {
        return this.getToken(ImpalaSqlParser.KW_FUNCTIONS, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    databaseNamePath() {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    KW_AGGREGATE() {
        return this.getToken(ImpalaSqlParser.KW_AGGREGATE, 0);
    }
    KW_ANALYTIC() {
        return this.getToken(ImpalaSqlParser.KW_ANALYTIC, 0);
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        return this.getRuleContext(i, StringLiteralContext);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    BITWISEOR(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.BITWISEOR);
        }
        else {
            return this.getToken(ImpalaSqlParser.BITWISEOR, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showFunctions;
    }
    enterRule(listener) {
        if (listener.enterShowFunctions) {
            listener.enterShowFunctions(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowFunctions) {
            listener.exitShowFunctions(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowFunctions) {
            return visitor.visitShowFunctions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showCreateTable;
    }
    enterRule(listener) {
        if (listener.enterShowCreateTable) {
            listener.enterShowCreateTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowCreateTable) {
            listener.exitShowCreateTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowCreateTable) {
            return visitor.visitShowCreateTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_VIEW() {
        return this.getToken(ImpalaSqlParser.KW_VIEW, 0);
    }
    viewNamePath() {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showCreateView;
    }
    enterRule(listener) {
        if (listener.enterShowCreateView) {
            listener.enterShowCreateView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowCreateView) {
            listener.exitShowCreateView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowCreateView) {
            return visitor.visitShowCreateView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTableStatsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    KW_STATS() {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showTableStats;
    }
    enterRule(listener) {
        if (listener.enterShowTableStats) {
            listener.enterShowTableStats(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowTableStats) {
            listener.exitShowTableStats(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowTableStats) {
            return visitor.visitShowTableStats(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowColumnStatsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    KW_STATS() {
        return this.getToken(ImpalaSqlParser.KW_STATS, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showColumnStats;
    }
    enterRule(listener) {
        if (listener.enterShowColumnStats) {
            listener.enterShowColumnStats(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowColumnStats) {
            listener.exitShowColumnStats(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowColumnStats) {
            return visitor.visitShowColumnStats(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowPartitionsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_PARTITIONS() {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_RANGE() {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showPartitions;
    }
    enterRule(listener) {
        if (listener.enterShowPartitions) {
            listener.enterShowPartitions(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowPartitions) {
            listener.exitShowPartitions(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowPartitions) {
            return visitor.visitShowPartitions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowFilesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_FILES() {
        return this.getToken(ImpalaSqlParser.KW_FILES, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA() {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showFiles;
    }
    enterRule(listener) {
        if (listener.enterShowFiles) {
            listener.enterShowFiles(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowFiles) {
            listener.exitShowFiles(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowFiles) {
            return visitor.visitShowFiles(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowRolesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_ROLES() {
        return this.getToken(ImpalaSqlParser.KW_ROLES, 0);
    }
    KW_CURRENT() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showRoles;
    }
    enterRule(listener) {
        if (listener.enterShowRoles) {
            listener.enterShowRoles(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowRoles) {
            listener.exitShowRoles(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowRoles) {
            return visitor.visitShowRoles(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowRoleGrantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showRoleGrant;
    }
    enterRule(listener) {
        if (listener.enterShowRoleGrant) {
            listener.enterShowRoleGrant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowRoleGrant) {
            listener.exitShowRoleGrant(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowRoleGrant) {
            return visitor.visitShowRoleGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowGrantsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    showDatabaseGrant() {
        return this.getRuleContext(0, ShowDatabaseGrantContext);
    }
    showTableGrant() {
        return this.getRuleContext(0, ShowTableGrantContext);
    }
    showColumnGrant() {
        return this.getRuleContext(0, ShowColumnGrantContext);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_SERVER() {
        return this.getToken(ImpalaSqlParser.KW_SERVER, 0);
    }
    KW_URI() {
        return this.getToken(ImpalaSqlParser.KW_URI, 0);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showGrants;
    }
    enterRule(listener) {
        if (listener.enterShowGrants) {
            listener.enterShowGrants(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowGrants) {
            listener.exitShowGrants(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowGrants) {
            return visitor.visitShowGrants(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowDatabaseGrantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    databaseNamePath() {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showDatabaseGrant;
    }
    enterRule(listener) {
        if (listener.enterShowDatabaseGrant) {
            listener.enterShowDatabaseGrant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowDatabaseGrant) {
            listener.exitShowDatabaseGrant(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowDatabaseGrant) {
            return visitor.visitShowDatabaseGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTableGrantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showTableGrant;
    }
    enterRule(listener) {
        if (listener.enterShowTableGrant) {
            listener.enterShowTableGrant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowTableGrant) {
            listener.exitShowTableGrant(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowTableGrant) {
            return visitor.visitShowTableGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowColumnGrantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(ImpalaSqlParser.KW_SHOW, 0);
    }
    KW_GRANT() {
        return this.getToken(ImpalaSqlParser.KW_GRANT, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_showColumnGrant;
    }
    enterRule(listener) {
        if (listener.enterShowColumnGrant) {
            listener.enterShowColumnGrant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowColumnGrant) {
            listener.exitShowColumnGrant(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowColumnGrant) {
            return visitor.visitShowColumnGrant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddCommentStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    addDatabaseComments() {
        return this.getRuleContext(0, AddDatabaseCommentsContext);
    }
    addTableComments() {
        return this.getRuleContext(0, AddTableCommentsContext);
    }
    addColumnComments() {
        return this.getRuleContext(0, AddColumnCommentsContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_addCommentStatement;
    }
    enterRule(listener) {
        if (listener.enterAddCommentStatement) {
            listener.enterAddCommentStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddCommentStatement) {
            listener.exitAddCommentStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddCommentStatement) {
            return visitor.visitAddCommentStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddDatabaseCommentsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    databaseNamePath() {
        return this.getRuleContext(0, DatabaseNamePathContext);
    }
    KW_IS() {
        return this.getToken(ImpalaSqlParser.KW_IS, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    KW_NULL() {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_addDatabaseComments;
    }
    enterRule(listener) {
        if (listener.enterAddDatabaseComments) {
            listener.enterAddDatabaseComments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddDatabaseComments) {
            listener.exitAddDatabaseComments(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddDatabaseComments) {
            return visitor.visitAddDatabaseComments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddTableCommentsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_IS() {
        return this.getToken(ImpalaSqlParser.KW_IS, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    KW_NULL() {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_addTableComments;
    }
    enterRule(listener) {
        if (listener.enterAddTableComments) {
            listener.enterAddTableComments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddTableComments) {
            listener.exitAddTableComments(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddTableComments) {
            return visitor.visitAddTableComments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddColumnCommentsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    KW_COLUMN() {
        return this.getToken(ImpalaSqlParser.KW_COLUMN, 0);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    KW_IS() {
        return this.getToken(ImpalaSqlParser.KW_IS, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    KW_NULL() {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_addColumnComments;
    }
    enterRule(listener) {
        if (listener.enterAddColumnComments) {
            listener.enterAddColumnComments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddColumnComments) {
            listener.exitAddColumnComments(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddColumnComments) {
            return visitor.visitAddColumnComments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_EXPLAIN() {
        return this.getToken(ImpalaSqlParser.KW_EXPLAIN, 0);
    }
    sqlStatement() {
        return this.getRuleContext(0, SqlStatementContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_explainStatement;
    }
    enterRule(listener) {
        if (listener.enterExplainStatement) {
            listener.enterExplainStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExplainStatement) {
            listener.exitExplainStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExplainStatement) {
            return visitor.visitExplainStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SET() {
        return this.getToken(ImpalaSqlParser.KW_SET, 0);
    }
    KW_ALL() {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_setStatement;
    }
    enterRule(listener) {
        if (listener.enterSetStatement) {
            listener.enterSetStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetStatement) {
            listener.exitSetStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSetStatement) {
            return visitor.visitSetStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShutdownStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLON() {
        return this.getToken(ImpalaSqlParser.COLON, 0);
    }
    KW_SHUTDOWN() {
        return this.getToken(ImpalaSqlParser.KW_SHUTDOWN, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    COMMA() {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_shutdownStatement;
    }
    enterRule(listener) {
        if (listener.enterShutdownStatement) {
            listener.enterShutdownStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShutdownStatement) {
            listener.exitShutdownStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShutdownStatement) {
            return visitor.visitShutdownStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InvalidateMetaStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_INVALIDATE() {
        return this.getToken(ImpalaSqlParser.KW_INVALIDATE, 0);
    }
    KW_METADATA() {
        return this.getToken(ImpalaSqlParser.KW_METADATA, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_invalidateMetaStatement;
    }
    enterRule(listener) {
        if (listener.enterInvalidateMetaStatement) {
            listener.enterInvalidateMetaStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInvalidateMetaStatement) {
            listener.exitInvalidateMetaStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInvalidateMetaStatement) {
            return visitor.visitInvalidateMetaStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LoadDataStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LOAD() {
        return this.getToken(ImpalaSqlParser.KW_LOAD, 0);
    }
    KW_DATA() {
        return this.getToken(ImpalaSqlParser.KW_DATA, 0);
    }
    KW_INPATH() {
        return this.getToken(ImpalaSqlParser.KW_INPATH, 0);
    }
    STRING() {
        return this.getToken(ImpalaSqlParser.STRING, 0);
    }
    KW_INTO() {
        return this.getToken(ImpalaSqlParser.KW_INTO, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_OVERWRITE() {
        return this.getToken(ImpalaSqlParser.KW_OVERWRITE, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA() {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_loadDataStatement;
    }
    enterRule(listener) {
        if (listener.enterLoadDataStatement) {
            listener.enterLoadDataStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLoadDataStatement) {
            listener.exitLoadDataStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLoadDataStatement) {
            return visitor.visitLoadDataStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefreshStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    refreshMeta() {
        return this.getRuleContext(0, RefreshMetaContext);
    }
    refreshAuth() {
        return this.getRuleContext(0, RefreshAuthContext);
    }
    refreshFunction() {
        return this.getRuleContext(0, RefreshFunctionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_refreshStatement;
    }
    enterRule(listener) {
        if (listener.enterRefreshStatement) {
            listener.enterRefreshStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRefreshStatement) {
            listener.exitRefreshStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRefreshStatement) {
            return visitor.visitRefreshStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefreshMetaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_REFRESH() {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_refreshMeta;
    }
    enterRule(listener) {
        if (listener.enterRefreshMeta) {
            listener.enterRefreshMeta(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRefreshMeta) {
            listener.exitRefreshMeta(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRefreshMeta) {
            return visitor.visitRefreshMeta(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefreshAuthContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_REFRESH() {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0);
    }
    KW_AUTHORIZATION() {
        return this.getToken(ImpalaSqlParser.KW_AUTHORIZATION, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_refreshAuth;
    }
    enterRule(listener) {
        if (listener.enterRefreshAuth) {
            listener.enterRefreshAuth(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRefreshAuth) {
            listener.exitRefreshAuth(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRefreshAuth) {
            return visitor.visitRefreshAuth(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefreshFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_REFRESH() {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0);
    }
    KW_FUNCTIONS() {
        return this.getToken(ImpalaSqlParser.KW_FUNCTIONS, 0);
    }
    functionNamePath() {
        return this.getRuleContext(0, FunctionNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_refreshFunction;
    }
    enterRule(listener) {
        if (listener.enterRefreshFunction) {
            listener.enterRefreshFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRefreshFunction) {
            listener.exitRefreshFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRefreshFunction) {
            return visitor.visitRefreshFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfExistsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_IF() {
        return this.getToken(ImpalaSqlParser.KW_IF, 0);
    }
    KW_EXISTS() {
        return this.getToken(ImpalaSqlParser.KW_EXISTS, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_ifExists;
    }
    enterRule(listener) {
        if (listener.enterIfExists) {
            listener.enterIfExists(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfExists) {
            listener.exitIfExists(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIfExists) {
            return visitor.visitIfExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfNotExistsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_IF() {
        return this.getToken(ImpalaSqlParser.KW_IF, 0);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    KW_EXISTS() {
        return this.getToken(ImpalaSqlParser.KW_EXISTS, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_ifNotExists;
    }
    enterRule(listener) {
        if (listener.enterIfNotExists) {
            listener.enterIfNotExists(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfNotExists) {
            listener.exitIfNotExists(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIfNotExists) {
            return visitor.visitIfNotExists(this);
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
        return ImpalaSqlParser.RULE_tableNameCreate;
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
export class DatabaseNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_databaseNameCreate;
    }
    enterRule(listener) {
        if (listener.enterDatabaseNameCreate) {
            listener.enterDatabaseNameCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDatabaseNameCreate) {
            listener.exitDatabaseNameCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDatabaseNameCreate) {
            return visitor.visitDatabaseNameCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ViewNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_viewNameCreate;
    }
    enterRule(listener) {
        if (listener.enterViewNameCreate) {
            listener.enterViewNameCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitViewNameCreate) {
            listener.exitViewNameCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitViewNameCreate) {
            return visitor.visitViewNameCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_functionNameCreate;
    }
    enterRule(listener) {
        if (listener.enterFunctionNameCreate) {
            listener.enterFunctionNameCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionNameCreate) {
            listener.exitFunctionNameCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionNameCreate) {
            return visitor.visitFunctionNameCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnNamePathCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnNamePathCreate;
    }
    enterRule(listener) {
        if (listener.enterColumnNamePathCreate) {
            listener.enterColumnNamePathCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnNamePathCreate) {
            listener.exitColumnNamePathCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnNamePathCreate) {
            return visitor.visitColumnNamePathCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DatabaseNamePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_databaseNamePath;
    }
    enterRule(listener) {
        if (listener.enterDatabaseNamePath) {
            listener.enterDatabaseNamePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDatabaseNamePath) {
            listener.exitDatabaseNamePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDatabaseNamePath) {
            return visitor.visitDatabaseNamePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableNamePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.DOT);
        }
        else {
            return this.getToken(ImpalaSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_tableNamePath;
    }
    enterRule(listener) {
        if (listener.enterTableNamePath) {
            listener.enterTableNamePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableNamePath) {
            listener.exitTableNamePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableNamePath) {
            return visitor.visitTableNamePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ViewNamePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.DOT);
        }
        else {
            return this.getToken(ImpalaSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_viewNamePath;
    }
    enterRule(listener) {
        if (listener.enterViewNamePath) {
            listener.enterViewNamePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitViewNamePath) {
            listener.exitViewNamePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitViewNamePath) {
            return visitor.visitViewNamePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionNamePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    reservedKeywordsUsedAsFuncName() {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_functionNamePath;
    }
    enterRule(listener) {
        if (listener.enterFunctionNamePath) {
            listener.enterFunctionNamePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionNamePath) {
            listener.exitFunctionNamePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionNamePath) {
            return visitor.visitFunctionNamePath(this);
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
        return ImpalaSqlParser.RULE_emptyColumn;
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
export class ColumnNamePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    qualifiedNameAllowEmpty() {
        return this.getRuleContext(0, QualifiedNameAllowEmptyContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnNamePath;
    }
    enterRule(listener) {
        if (listener.enterColumnNamePath) {
            listener.enterColumnNamePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnNamePath) {
            listener.exitColumnNamePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnNamePath) {
            return visitor.visitColumnNamePath(this);
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
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnName;
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
export class ColumnNameAllowEmptyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    qualifiedNameAllowEmpty() {
        return this.getRuleContext(0, QualifiedNameAllowEmptyContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnNameAllowEmpty;
    }
    enterRule(listener) {
        if (listener.enterColumnNameAllowEmpty) {
            listener.enterColumnNameAllowEmpty(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnNameAllowEmpty) {
            listener.exitColumnNameAllowEmpty(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnNameAllowEmpty) {
            return visitor.visitColumnNameAllowEmpty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableOrViewPathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    viewNamePath() {
        return this.getRuleContext(0, ViewNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_tableOrViewPath;
    }
    enterRule(listener) {
        if (listener.enterTableOrViewPath) {
            listener.enterTableOrViewPath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableOrViewPath) {
            listener.exitTableOrViewPath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableOrViewPath) {
            return visitor.visitTableOrViewPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateCommonItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SORT() {
        return this.getToken(ImpalaSqlParser.KW_SORT, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    commentClause() {
        return this.getRuleContext(0, CommentClauseContext);
    }
    KW_ROW() {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    KW_FORMAT() {
        return this.getToken(ImpalaSqlParser.KW_FORMAT, 0);
    }
    rowFormat() {
        return this.getRuleContext(0, RowFormatContext);
    }
    KW_WITH(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_WITH);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_WITH, i);
        }
    }
    KW_SERDEPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_SERDEPROPERTIES, 0);
    }
    KW_STORED() {
        return this.getToken(ImpalaSqlParser.KW_STORED, 0);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    fileFormat() {
        return this.getRuleContext(0, FileFormatContext);
    }
    KW_LOCATION() {
        return this.getToken(ImpalaSqlParser.KW_LOCATION, 0);
    }
    KW_CACHED() {
        return this.getToken(ImpalaSqlParser.KW_CACHED, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    KW_UNCACHED() {
        return this.getToken(ImpalaSqlParser.KW_UNCACHED, 0);
    }
    KW_TBLPROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_TBLPROPERTIES, 0);
    }
    properties(i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertiesContext);
        }
        return this.getRuleContext(i, PropertiesContext);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    KW_REPLICATION() {
        return this.getToken(ImpalaSqlParser.KW_REPLICATION, 0);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    INTEGER_VALUE() {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createCommonItem;
    }
    enterRule(listener) {
        if (listener.enterCreateCommonItem) {
            listener.enterCreateCommonItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateCommonItem) {
            listener.exitCreateCommonItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateCommonItem) {
            return visitor.visitCreateCommonItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignmentItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentItemContext);
        }
        return this.getRuleContext(i, AssignmentItemContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_assignmentList;
    }
    enterRule(listener) {
        if (listener.enterAssignmentList) {
            listener.enterAssignmentList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentList) {
            listener.exitAssignmentList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAssignmentList) {
            return visitor.visitAssignmentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_assignmentItem;
    }
    enterRule(listener) {
        if (listener.enterAssignmentItem) {
            listener.enterAssignmentItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentItem) {
            listener.exitAssignmentItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAssignmentItem) {
            return visitor.visitAssignmentItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ViewColumnsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    viewColumnItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(ViewColumnItemContext);
        }
        return this.getRuleContext(i, ViewColumnItemContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_viewColumns;
    }
    enterRule(listener) {
        if (listener.enterViewColumns) {
            listener.enterViewColumns(this);
        }
    }
    exitRule(listener) {
        if (listener.exitViewColumns) {
            listener.exitViewColumns(this);
        }
    }
    accept(visitor) {
        if (visitor.visitViewColumns) {
            return visitor.visitViewColumns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ViewColumnItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNamePathCreate() {
        return this.getRuleContext(0, ColumnNamePathCreateContext);
    }
    commentClause() {
        return this.getRuleContext(0, CommentClauseContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_viewColumnItem;
    }
    enterRule(listener) {
        if (listener.enterViewColumnItem) {
            listener.enterViewColumnItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitViewColumnItem) {
            listener.exitViewColumnItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitViewColumnItem) {
            return visitor.visitViewColumnItem(this);
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
    with() {
        return this.getRuleContext(0, WithContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_queryStatement;
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
export class WithContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WITH() {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    namedQuery(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }
        return this.getRuleContext(i, NamedQueryContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_with;
    }
    enterRule(listener) {
        if (listener.enterWith) {
            listener.enterWith(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWith) {
            listener.exitWith(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWith) {
            return visitor.visitWith(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstraintSpecificationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PRIMARY() {
        return this.getToken(ImpalaSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    KW_DISABLE() {
        return this.getToken(ImpalaSqlParser.KW_DISABLE, 0);
    }
    KW_NOVALIDATE() {
        return this.getToken(ImpalaSqlParser.KW_NOVALIDATE, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    KW_RELY() {
        return this.getToken(ImpalaSqlParser.KW_RELY, 0);
    }
    foreignKeySpecification(i) {
        if (i === undefined) {
            return this.getRuleContexts(ForeignKeySpecificationContext);
        }
        return this.getRuleContext(i, ForeignKeySpecificationContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_constraintSpecification;
    }
    enterRule(listener) {
        if (listener.enterConstraintSpecification) {
            listener.enterConstraintSpecification(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstraintSpecification) {
            listener.exitConstraintSpecification(this);
        }
    }
    accept(visitor) {
        if (visitor.visitConstraintSpecification) {
            return visitor.visitConstraintSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForeignKeySpecificationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_FOREIGN() {
        return this.getToken(ImpalaSqlParser.KW_FOREIGN, 0);
    }
    KW_KEY() {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0);
    }
    columnAliases(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnAliasesContext);
        }
        return this.getRuleContext(i, ColumnAliasesContext);
    }
    KW_REFERENCES() {
        return this.getToken(ImpalaSqlParser.KW_REFERENCES, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    KW_DISABLE() {
        return this.getToken(ImpalaSqlParser.KW_DISABLE, 0);
    }
    KW_NOVALIDATE() {
        return this.getToken(ImpalaSqlParser.KW_NOVALIDATE, 0);
    }
    KW_RELY() {
        return this.getToken(ImpalaSqlParser.KW_RELY, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_foreignKeySpecification;
    }
    enterRule(listener) {
        if (listener.enterForeignKeySpecification) {
            listener.enterForeignKeySpecification(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForeignKeySpecification) {
            listener.exitForeignKeySpecification(this);
        }
    }
    accept(visitor) {
        if (visitor.visitForeignKeySpecification) {
            return visitor.visitForeignKeySpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnSpecContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnSpec;
    }
    enterRule(listener) {
        if (listener.enterColumnSpec) {
            listener.enterColumnSpec(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnSpec) {
            listener.exitColumnSpec(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnSpec) {
            return visitor.visitColumnSpec(this);
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
    columnNamePathCreate() {
        return this.getRuleContext(0, ColumnNamePathCreateContext);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    commentClause() {
        return this.getRuleContext(0, CommentClauseContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnDefinition;
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
export class KuduTableElementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    kuduColumnDefinition() {
        return this.getRuleContext(0, KuduColumnDefinitionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_kuduTableElement;
    }
    enterRule(listener) {
        if (listener.enterKuduTableElement) {
            listener.enterKuduTableElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKuduTableElement) {
            listener.exitKuduTableElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKuduTableElement) {
            return visitor.visitKuduTableElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KuduColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNamePathCreate() {
        return this.getRuleContext(0, ColumnNamePathCreateContext);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    kuduAttributes(i) {
        if (i === undefined) {
            return this.getRuleContexts(KuduAttributesContext);
        }
        return this.getRuleContext(i, KuduAttributesContext);
    }
    commentClause() {
        return this.getRuleContext(0, CommentClauseContext);
    }
    KW_PRIMARY() {
        return this.getToken(ImpalaSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_kuduColumnDefinition;
    }
    enterRule(listener) {
        if (listener.enterKuduColumnDefinition) {
            listener.enterKuduColumnDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKuduColumnDefinition) {
            listener.exitKuduColumnDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKuduColumnDefinition) {
            return visitor.visitKuduColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommentClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_commentClause;
    }
    enterRule(listener) {
        if (listener.enterCommentClause) {
            listener.enterCommentClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCommentClause) {
            listener.exitCommentClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCommentClause) {
            return visitor.visitCommentClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnSpecWithKuduContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnSpec() {
        return this.getRuleContext(0, ColumnSpecContext);
    }
    kuduAttributes(i) {
        if (i === undefined) {
            return this.getRuleContexts(KuduAttributesContext);
        }
        return this.getRuleContext(i, KuduAttributesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnSpecWithKudu;
    }
    enterRule(listener) {
        if (listener.enterColumnSpecWithKudu) {
            listener.enterColumnSpecWithKudu(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnSpecWithKudu) {
            listener.exitColumnSpecWithKudu(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnSpecWithKudu) {
            return visitor.visitColumnSpecWithKudu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateColumnSpecWithKuduContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNamePathCreate() {
        return this.getRuleContext(0, ColumnNamePathCreateContext);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    KW_COMMENT() {
        return this.getToken(ImpalaSqlParser.KW_COMMENT, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    kuduAttributes(i) {
        if (i === undefined) {
            return this.getRuleContexts(KuduAttributesContext);
        }
        return this.getRuleContext(i, KuduAttributesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_createColumnSpecWithKudu;
    }
    enterRule(listener) {
        if (listener.enterCreateColumnSpecWithKudu) {
            listener.enterCreateColumnSpecWithKudu(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateColumnSpecWithKudu) {
            listener.exitCreateColumnSpecWithKudu(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateColumnSpecWithKudu) {
            return visitor.visitCreateColumnSpecWithKudu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KuduAttributesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_NULL() {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    kuduStorageAttr() {
        return this.getRuleContext(0, KuduStorageAttrContext);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_kuduAttributes;
    }
    enterRule(listener) {
        if (listener.enterKuduAttributes) {
            listener.enterKuduAttributes(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKuduAttributes) {
            listener.exitKuduAttributes(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKuduAttributes) {
            return visitor.visitKuduAttributes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KuduStorageAttrContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ENCODING() {
        return this.getToken(ImpalaSqlParser.KW_ENCODING, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_COMPRESSION() {
        return this.getToken(ImpalaSqlParser.KW_COMPRESSION, 0);
    }
    KW_DEFAULT() {
        return this.getToken(ImpalaSqlParser.KW_DEFAULT, 0);
    }
    KW_BLOCK_SIZE() {
        return this.getToken(ImpalaSqlParser.KW_BLOCK_SIZE, 0);
    }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_kuduStorageAttr;
    }
    enterRule(listener) {
        if (listener.enterKuduStorageAttr) {
            listener.enterKuduStorageAttr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKuduStorageAttr) {
            listener.exitKuduStorageAttr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKuduStorageAttr) {
            return visitor.visitKuduStorageAttr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FileFormatContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TEXTFILE() {
        return this.getToken(ImpalaSqlParser.KW_TEXTFILE, 0);
    }
    KW_PARQUET() {
        return this.getToken(ImpalaSqlParser.KW_PARQUET, 0);
    }
    KW_ORC() {
        return this.getToken(ImpalaSqlParser.KW_ORC, 0);
    }
    KW_AVRO() {
        return this.getToken(ImpalaSqlParser.KW_AVRO, 0);
    }
    KW_SEQUENCEFILE() {
        return this.getToken(ImpalaSqlParser.KW_SEQUENCEFILE, 0);
    }
    KW_RCFILE() {
        return this.getToken(ImpalaSqlParser.KW_RCFILE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_fileFormat;
    }
    enterRule(listener) {
        if (listener.enterFileFormat) {
            listener.enterFileFormat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFileFormat) {
            listener.exitFileFormat(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFileFormat) {
            return visitor.visitFileFormat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KuduPartitionClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    hashClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(HashClauseContext);
        }
        return this.getRuleContext(i, HashClauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    rangeClause() {
        return this.getRuleContext(0, RangeClauseContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_kuduPartitionClause;
    }
    enterRule(listener) {
        if (listener.enterKuduPartitionClause) {
            listener.enterKuduPartitionClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKuduPartitionClause) {
            listener.exitKuduPartitionClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKuduPartitionClause) {
            return visitor.visitKuduPartitionClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class HashClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_HASH() {
        return this.getToken(ImpalaSqlParser.KW_HASH, 0);
    }
    KW_PARTITIONS() {
        return this.getToken(ImpalaSqlParser.KW_PARTITIONS, 0);
    }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_hashClause;
    }
    enterRule(listener) {
        if (listener.enterHashClause) {
            listener.enterHashClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitHashClause) {
            listener.exitHashClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitHashClause) {
            return visitor.visitHashClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RangeClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_RANGE() {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_PARTITION(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_PARTITION);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_PARTITION, i);
        }
    }
    kuduPartitionSpec(i) {
        if (i === undefined) {
            return this.getRuleContexts(KuduPartitionSpecContext);
        }
        return this.getRuleContext(i, KuduPartitionSpecContext);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_rangeClause;
    }
    enterRule(listener) {
        if (listener.enterRangeClause) {
            listener.enterRangeClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRangeClause) {
            listener.exitRangeClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRangeClause) {
            return visitor.visitRangeClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KuduPartitionSpecContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_VALUE() {
        return this.getToken(ImpalaSqlParser.KW_VALUE, 0);
    }
    partitionCol() {
        return this.getRuleContext(0, PartitionColContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_VALUES() {
        return this.getToken(ImpalaSqlParser.KW_VALUES, 0);
    }
    rangeOperator(i) {
        if (i === undefined) {
            return this.getRuleContexts(RangeOperatorContext);
        }
        return this.getRuleContext(i, RangeOperatorContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_kuduPartitionSpec;
    }
    enterRule(listener) {
        if (listener.enterKuduPartitionSpec) {
            listener.enterKuduPartitionSpec(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKuduPartitionSpec) {
            listener.exitKuduPartitionSpec(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKuduPartitionSpec) {
            return visitor.visitKuduPartitionSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CacheSpecContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CACHED() {
        return this.getToken(ImpalaSqlParser.KW_CACHED, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_WITH() {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    KW_REPLICATION() {
        return this.getToken(ImpalaSqlParser.KW_REPLICATION, 0);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    KW_UNCACHED() {
        return this.getToken(ImpalaSqlParser.KW_UNCACHED, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_cacheSpec;
    }
    enterRule(listener) {
        if (listener.enterCacheSpec) {
            listener.enterCacheSpec(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCacheSpec) {
            listener.exitCacheSpec(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCacheSpec) {
            return visitor.visitCacheSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RangeOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LT() {
        return this.getToken(ImpalaSqlParser.LT, 0);
    }
    LTE() {
        return this.getToken(ImpalaSqlParser.LTE, 0);
    }
    GT() {
        return this.getToken(ImpalaSqlParser.GT, 0);
    }
    GTE() {
        return this.getToken(ImpalaSqlParser.GTE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_rangeOperator;
    }
    enterRule(listener) {
        if (listener.enterRangeOperator) {
            listener.enterRangeOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRangeOperator) {
            listener.exitRangeOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRangeOperator) {
            return visitor.visitRangeOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PartitionColContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQ() {
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    NEQ() {
        return this.getToken(ImpalaSqlParser.NEQ, 0);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    KW_RLIKE() {
        return this.getToken(ImpalaSqlParser.KW_RLIKE, 0);
    }
    KW_REGEXP() {
        return this.getToken(ImpalaSqlParser.KW_REGEXP, 0);
    }
    KW_BETWEEN() {
        return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    rangeOperator() {
        return this.getRuleContext(0, RangeOperatorContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_partitionCol;
    }
    enterRule(listener) {
        if (listener.enterPartitionCol) {
            listener.enterPartitionCol(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPartitionCol) {
            listener.exitPartitionCol(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPartitionCol) {
            return visitor.visitPartitionCol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikeClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    KW_PROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_PROPERTIES, 0);
    }
    KW_INCLUDING() {
        return this.getToken(ImpalaSqlParser.KW_INCLUDING, 0);
    }
    KW_EXCLUDING() {
        return this.getToken(ImpalaSqlParser.KW_EXCLUDING, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_likeClause;
    }
    enterRule(listener) {
        if (listener.enterLikeClause) {
            listener.enterLikeClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLikeClause) {
            listener.exitLikeClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLikeClause) {
            return visitor.visitLikeClause(this);
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
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    property(i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }
        return this.getRuleContext(i, PropertyContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_properties;
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
export class PartitionedByContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    columnSpec(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnSpecContext);
        }
        return this.getRuleContext(i, ColumnSpecContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_partitionedBy;
    }
    enterRule(listener) {
        if (listener.enterPartitionedBy) {
            listener.enterPartitionedBy(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPartitionedBy) {
            listener.exitPartitionedBy(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPartitionedBy) {
            return visitor.visitPartitionedBy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SortedByContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_sortedBy;
    }
    enterRule(listener) {
        if (listener.enterSortedBy) {
            listener.enterSortedBy(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSortedBy) {
            listener.exitSortedBy(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSortedBy) {
            return visitor.visitSortedBy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RowFormatContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DELIMITED() {
        return this.getToken(ImpalaSqlParser.KW_DELIMITED, 0);
    }
    KW_FIELDS() {
        return this.getToken(ImpalaSqlParser.KW_FIELDS, 0);
    }
    KW_TERMINATED(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_TERMINATED);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_TERMINATED, i);
        }
    }
    KW_BY(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_BY);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_BY, i);
        }
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        return this.getRuleContext(i, StringLiteralContext);
    }
    KW_LINES() {
        return this.getToken(ImpalaSqlParser.KW_LINES, 0);
    }
    KW_ESCAPED() {
        return this.getToken(ImpalaSqlParser.KW_ESCAPED, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_rowFormat;
    }
    enterRule(listener) {
        if (listener.enterRowFormat) {
            listener.enterRowFormat(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRowFormat) {
            listener.exitRowFormat(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRowFormat) {
            return visitor.visitRowFormat(this);
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
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_property;
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
export class QueryNoWithContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryTerm() {
        return this.getRuleContext(0, QueryTermContext);
    }
    KW_ORDER() {
        return this.getToken(ImpalaSqlParser.KW_ORDER, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    sortItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }
        return this.getRuleContext(i, SortItemContext);
    }
    KW_LIMIT() {
        return this.getToken(ImpalaSqlParser.KW_LIMIT, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    KW_OFFSET() {
        return this.getToken(ImpalaSqlParser.KW_OFFSET, 0);
    }
    INTEGER_VALUE() {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_queryNoWith;
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
    get ruleIndex() {
        return ImpalaSqlParser.RULE_queryTerm;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class QueryTermDefaultContext extends QueryTermContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    queryPrimary() {
        return this.getRuleContext(0, QueryPrimaryContext);
    }
    enterRule(listener) {
        if (listener.enterQueryTermDefault) {
            listener.enterQueryTermDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryTermDefault) {
            listener.exitQueryTermDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryTermDefault) {
            return visitor.visitQueryTermDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetOperationContext extends QueryTermContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    queryTerm(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryTermContext);
        }
        return this.getRuleContext(i, QueryTermContext);
    }
    KW_INTERSECT() {
        return this.getToken(ImpalaSqlParser.KW_INTERSECT, 0);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    KW_UNION() {
        return this.getToken(ImpalaSqlParser.KW_UNION, 0);
    }
    KW_EXCEPT() {
        return this.getToken(ImpalaSqlParser.KW_EXCEPT, 0);
    }
    enterRule(listener) {
        if (listener.enterSetOperation) {
            listener.enterSetOperation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetOperation) {
            listener.exitSetOperation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSetOperation) {
            return visitor.visitSetOperation(this);
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
    get ruleIndex() {
        return ImpalaSqlParser.RULE_queryPrimary;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class SubqueryContext extends QueryPrimaryContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    queryNoWith() {
        return this.getRuleContext(0, QueryNoWithContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    enterRule(listener) {
        if (listener.enterSubquery) {
            listener.enterSubquery(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubquery) {
            listener.exitSubquery(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubquery) {
            return visitor.visitSubquery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    querySpecification() {
        return this.getRuleContext(0, QuerySpecificationContext);
    }
    enterRule(listener) {
        if (listener.enterQueryPrimaryDefault) {
            listener.enterQueryPrimaryDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryPrimaryDefault) {
            listener.exitQueryPrimaryDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryPrimaryDefault) {
            return visitor.visitQueryPrimaryDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableContext extends QueryPrimaryContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    tableNamePath() {
        return this.getRuleContext(0, TableNamePathContext);
    }
    enterRule(listener) {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InlineTableContext extends QueryPrimaryContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_VALUES() {
        return this.getToken(ImpalaSqlParser.KW_VALUES, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterInlineTable) {
            listener.enterInlineTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInlineTable) {
            listener.exitInlineTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInlineTable) {
            return visitor.visitInlineTable(this);
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
    columnItem() {
        return this.getRuleContext(0, ColumnItemContext);
    }
    KW_NULLS() {
        return this.getToken(ImpalaSqlParser.KW_NULLS, 0);
    }
    KW_ASC() {
        return this.getToken(ImpalaSqlParser.KW_ASC, 0);
    }
    KW_DESC() {
        return this.getToken(ImpalaSqlParser.KW_DESC, 0);
    }
    KW_FIRST() {
        return this.getToken(ImpalaSqlParser.KW_FIRST, 0);
    }
    KW_LAST() {
        return this.getToken(ImpalaSqlParser.KW_LAST, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_sortItem;
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
export class QuerySpecificationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SELECT() {
        return this.getToken(ImpalaSqlParser.KW_SELECT, 0);
    }
    selectList() {
        return this.getRuleContext(0, SelectListContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    KW_STRAIGHT_JOIN() {
        return this.getToken(ImpalaSqlParser.KW_STRAIGHT_JOIN, 0);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    relation(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }
        return this.getRuleContext(i, RelationContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    groupBy() {
        return this.getRuleContext(0, GroupByContext);
    }
    havingClause() {
        return this.getRuleContext(0, HavingClauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_querySpecification;
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
export class SelectListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    selectItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectItemContext);
        }
        return this.getRuleContext(i, SelectItemContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_selectList;
    }
    enterRule(listener) {
        if (listener.enterSelectList) {
            listener.enterSelectList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectList) {
            listener.exitSelectList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectList) {
            return visitor.visitSelectList(this);
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
        return this.getToken(ImpalaSqlParser.KW_WHERE, 0);
    }
    columnNameAllowEmpty() {
        return this.getRuleContext(0, ColumnNameAllowEmptyContext);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_whereClause;
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
export class HavingClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_HAVING() {
        return this.getToken(ImpalaSqlParser.KW_HAVING, 0);
    }
    columnNameAllowEmpty() {
        return this.getRuleContext(0, ColumnNameAllowEmptyContext);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_havingClause;
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
export class GroupByContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    groupingElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupingElementContext);
        }
        return this.getRuleContext(i, GroupingElementContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_groupBy;
    }
    enterRule(listener) {
        if (listener.enterGroupBy) {
            listener.enterGroupBy(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupBy) {
            listener.exitGroupBy(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupBy) {
            return visitor.visitGroupBy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingElementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_groupingElement;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class SingleGroupingSetContext extends GroupingElementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    groupingSet() {
        return this.getRuleContext(0, GroupingSetContext);
    }
    enterRule(listener) {
        if (listener.enterSingleGroupingSet) {
            listener.enterSingleGroupingSet(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleGroupingSet) {
            listener.exitSingleGroupingSet(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSingleGroupingSet) {
            return visitor.visitSingleGroupingSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingSetContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    columnItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnItemContext);
        }
        return this.getRuleContext(i, ColumnItemContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_groupingSet;
    }
    enterRule(listener) {
        if (listener.enterGroupingSet) {
            listener.enterGroupingSet(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupingSet) {
            listener.exitGroupingSet(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupingSet) {
            return visitor.visitGroupingSet(this);
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
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    subQueryRelation() {
        return this.getRuleContext(0, SubQueryRelationContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_namedQuery;
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
export class SetQuantifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DISTINCT() {
        return this.getToken(ImpalaSqlParser.KW_DISTINCT, 0);
    }
    KW_ALL() {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_setQuantifier;
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
    selectLiteralColumnName() {
        return this.getRuleContext(0, SelectLiteralColumnNameContext);
    }
    columnAlias() {
        return this.getRuleContext(0, ColumnAliasContext);
    }
    selectExpressionColumnName() {
        return this.getRuleContext(0, SelectExpressionColumnNameContext);
    }
    tableAllColumns() {
        return this.getRuleContext(0, TableAllColumnsContext);
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_selectItem;
    }
    enterRule(listener) {
        if (listener.enterSelectItem) {
            listener.enterSelectItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectItem) {
            listener.exitSelectItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectItem) {
            return visitor.visitSelectItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnAliasContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnAlias;
    }
    enterRule(listener) {
        if (listener.enterColumnAlias) {
            listener.enterColumnAlias(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnAlias) {
            listener.exitColumnAlias(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnAlias) {
            return visitor.visitColumnAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectLiteralColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_selectLiteralColumnName;
    }
    enterRule(listener) {
        if (listener.enterSelectLiteralColumnName) {
            listener.enterSelectLiteralColumnName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectLiteralColumnName) {
            listener.exitSelectLiteralColumnName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectLiteralColumnName) {
            return visitor.visitSelectLiteralColumnName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectExpressionColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_selectExpressionColumnName;
    }
    enterRule(listener) {
        if (listener.enterSelectExpressionColumnName) {
            listener.enterSelectExpressionColumnName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectExpressionColumnName) {
            listener.exitSelectExpressionColumnName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectExpressionColumnName) {
            return visitor.visitSelectExpressionColumnName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableAllColumnsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASTERISK() {
        return this.getToken(ImpalaSqlParser.ASTERISK, 0);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    DOT() {
        return this.getToken(ImpalaSqlParser.DOT, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_tableAllColumns;
    }
    enterRule(listener) {
        if (listener.enterTableAllColumns) {
            listener.enterTableAllColumns(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableAllColumns) {
            listener.exitTableAllColumns(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableAllColumns) {
            return visitor.visitTableAllColumns(this);
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
        return ImpalaSqlParser.RULE_relation;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class RelationDefaultContext extends RelationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    sampledRelation() {
        return this.getRuleContext(0, SampledRelationContext);
    }
    enterRule(listener) {
        if (listener.enterRelationDefault) {
            listener.enterRelationDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelationDefault) {
            listener.exitRelationDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRelationDefault) {
            return visitor.visitRelationDefault(this);
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
    relation(i) {
        if (i === undefined) {
            return this.getRuleContexts(RelationContext);
        }
        return this.getRuleContext(i, RelationContext);
    }
    KW_CROSS() {
        return this.getToken(ImpalaSqlParser.KW_CROSS, 0);
    }
    KW_JOIN() {
        return this.getToken(ImpalaSqlParser.KW_JOIN, 0);
    }
    joinType() {
        return this.getRuleContext(0, JoinTypeContext);
    }
    joinCriteria() {
        return this.getRuleContext(0, JoinCriteriaContext);
    }
    sampledRelation() {
        return this.getRuleContext(0, SampledRelationContext);
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
        return this.getToken(ImpalaSqlParser.KW_INNER, 0);
    }
    KW_LEFT() {
        return this.getToken(ImpalaSqlParser.KW_LEFT, 0);
    }
    KW_RIGHT() {
        return this.getToken(ImpalaSqlParser.KW_RIGHT, 0);
    }
    KW_OUTER() {
        return this.getToken(ImpalaSqlParser.KW_OUTER, 0);
    }
    KW_FULL() {
        return this.getToken(ImpalaSqlParser.KW_FULL, 0);
    }
    KW_SEMI() {
        return this.getToken(ImpalaSqlParser.KW_SEMI, 0);
    }
    KW_ANTI() {
        return this.getToken(ImpalaSqlParser.KW_ANTI, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_joinType;
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
export class JoinCriteriaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ON() {
        return this.getToken(ImpalaSqlParser.KW_ON, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    columnNameAllowEmpty() {
        return this.getRuleContext(0, ColumnNameAllowEmptyContext);
    }
    KW_USING() {
        return this.getToken(ImpalaSqlParser.KW_USING, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_joinCriteria;
    }
    enterRule(listener) {
        if (listener.enterJoinCriteria) {
            listener.enterJoinCriteria(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoinCriteria) {
            listener.exitJoinCriteria(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoinCriteria) {
            return visitor.visitJoinCriteria(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SampledRelationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    aliasedRelation() {
        return this.getRuleContext(0, AliasedRelationContext);
    }
    KW_TABLESAMPLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLESAMPLE, 0);
    }
    LPAREN(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.LPAREN);
        }
        else {
            return this.getToken(ImpalaSqlParser.LPAREN, i);
        }
    }
    RPAREN(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.RPAREN);
        }
        else {
            return this.getToken(ImpalaSqlParser.RPAREN, i);
        }
    }
    KW_BERNOULLI() {
        return this.getToken(ImpalaSqlParser.KW_BERNOULLI, 0);
    }
    KW_SYSTEM() {
        return this.getToken(ImpalaSqlParser.KW_SYSTEM, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_REPEATABLE() {
        return this.getToken(ImpalaSqlParser.KW_REPEATABLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_sampledRelation;
    }
    enterRule(listener) {
        if (listener.enterSampledRelation) {
            listener.enterSampledRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSampledRelation) {
            listener.exitSampledRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSampledRelation) {
            return visitor.visitSampledRelation(this);
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
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    columnAliases() {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_aliasedRelation;
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
export class ColumnAliasesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    columnNamePath(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNamePathContext);
        }
        return this.getRuleContext(i, ColumnNamePathContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnAliases;
    }
    enterRule(listener) {
        if (listener.enterColumnAliases) {
            listener.enterColumnAliases(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnAliases) {
            listener.exitColumnAliases(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnAliases) {
            return visitor.visitColumnAliases(this);
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
    tableOrViewPath() {
        return this.getRuleContext(0, TableOrViewPathContext);
    }
    atomSubQueryTableSource() {
        return this.getRuleContext(0, AtomSubQueryTableSourceContext);
    }
    unnest() {
        return this.getRuleContext(0, UnnestContext);
    }
    parenthesizedRelation() {
        return this.getRuleContext(0, ParenthesizedRelationContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_relationPrimary;
    }
    enterRule(listener) {
        if (listener.enterRelationPrimary) {
            listener.enterRelationPrimary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelationPrimary) {
            listener.exitRelationPrimary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRelationPrimary) {
            return visitor.visitRelationPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtomSubQueryTableSourceContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    subQueryRelation() {
        return this.getRuleContext(0, SubQueryRelationContext);
    }
    KW_LATERAL() {
        return this.getToken(ImpalaSqlParser.KW_LATERAL, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_atomSubQueryTableSource;
    }
    enterRule(listener) {
        if (listener.enterAtomSubQueryTableSource) {
            listener.enterAtomSubQueryTableSource(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAtomSubQueryTableSource) {
            listener.exitAtomSubQueryTableSource(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAtomSubQueryTableSource) {
            return visitor.visitAtomSubQueryTableSource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubQueryRelationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_subQueryRelation;
    }
    enterRule(listener) {
        if (listener.enterSubQueryRelation) {
            listener.enterSubQueryRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubQueryRelation) {
            listener.exitSubQueryRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubQueryRelation) {
            return visitor.visitSubQueryRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnnestContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_UNNEST() {
        return this.getToken(ImpalaSqlParser.KW_UNNEST, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    KW_WITH() {
        return this.getToken(ImpalaSqlParser.KW_WITH, 0);
    }
    KW_ORDINALITY() {
        return this.getToken(ImpalaSqlParser.KW_ORDINALITY, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_unnest;
    }
    enterRule(listener) {
        if (listener.enterUnnest) {
            listener.enterUnnest(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnnest) {
            listener.exitUnnest(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnnest) {
            return visitor.visitUnnest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedRelationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    relation() {
        return this.getRuleContext(0, RelationContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_parenthesizedRelation;
    }
    enterRule(listener) {
        if (listener.enterParenthesizedRelation) {
            listener.enterParenthesizedRelation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParenthesizedRelation) {
            listener.exitParenthesizedRelation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParenthesizedRelation) {
            return visitor.visitParenthesizedRelation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNamePath() {
        return this.getRuleContext(0, ColumnNamePathContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_columnItem;
    }
    enterRule(listener) {
        if (listener.enterColumnItem) {
            listener.enterColumnItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnItem) {
            listener.exitColumnItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnItem) {
            return visitor.visitColumnItem(this);
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
        return ImpalaSqlParser.RULE_expression;
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
        return ImpalaSqlParser.RULE_booleanExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterLogicalNot) {
            listener.enterLogicalNot(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalNot) {
            listener.exitLogicalNot(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
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
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    predicate() {
        return this.getRuleContext(0, PredicateContext);
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
export class LogicalBinaryContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    booleanExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }
        return this.getRuleContext(i, BooleanExpressionContext);
    }
    KW_AND() {
        return this.getToken(ImpalaSqlParser.KW_AND, 0);
    }
    KW_OR() {
        return this.getToken(ImpalaSqlParser.KW_OR, 0);
    }
    enterRule(listener) {
        if (listener.enterLogicalBinary) {
            listener.enterLogicalBinary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalBinary) {
            listener.exitLogicalBinary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState, value) {
        super(parent, invokingState);
        this.value = value;
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_predicate;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
        this.value = ctx.value;
    }
}
export class NullOrUnKnownOrBooleanPredicateContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_IS() {
        return this.getToken(ImpalaSqlParser.KW_IS, 0);
    }
    KW_NULL() {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
    }
    KW_UNKNOWN() {
        return this.getToken(ImpalaSqlParser.KW_UNKNOWN, 0);
    }
    KW_TRUE() {
        return this.getToken(ImpalaSqlParser.KW_TRUE, 0);
    }
    KW_FALSE() {
        return this.getToken(ImpalaSqlParser.KW_FALSE, 0);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterNullOrUnKnownOrBooleanPredicate) {
            listener.enterNullOrUnKnownOrBooleanPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNullOrUnKnownOrBooleanPredicate) {
            listener.exitNullOrUnKnownOrBooleanPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNullOrUnKnownOrBooleanPredicate) {
            return visitor.visitNullOrUnKnownOrBooleanPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class REGEXPContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_REGEXP() {
        return this.getToken(ImpalaSqlParser.KW_REGEXP, 0);
    }
    KW_IREGEXP() {
        return this.getToken(ImpalaSqlParser.KW_IREGEXP, 0);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterREGEXP) {
            listener.enterREGEXP(this);
        }
    }
    exitRule(listener) {
        if (listener.exitREGEXP) {
            listener.exitREGEXP(this);
        }
    }
    accept(visitor) {
        if (visitor.visitREGEXP) {
            return visitor.visitREGEXP(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    comparisonOperator() {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikeContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_LIKE() {
        return this.getToken(ImpalaSqlParser.KW_LIKE, 0);
    }
    KW_ILIKE() {
        return this.getToken(ImpalaSqlParser.KW_ILIKE, 0);
    }
    KW_RLIKE() {
        return this.getToken(ImpalaSqlParser.KW_RLIKE, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    KW_ESCAPE() {
        return this.getToken(ImpalaSqlParser.KW_ESCAPE, 0);
    }
    enterRule(listener) {
        if (listener.enterLike) {
            listener.enterLike(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLike) {
            listener.exitLike(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLike) {
            return visitor.visitLike(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InSubqueryContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    subQueryRelation() {
        return this.getRuleContext(0, SubQueryRelationContext);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterInSubquery) {
            listener.enterInSubquery(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInSubquery) {
            listener.exitInSubquery(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInSubquery) {
            return visitor.visitInSubquery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DistinctFromContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_IS() {
        return this.getToken(ImpalaSqlParser.KW_IS, 0);
    }
    KW_DISTINCT() {
        return this.getToken(ImpalaSqlParser.KW_DISTINCT, 0);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterDistinctFrom) {
            listener.enterDistinctFrom(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDistinctFrom) {
            listener.exitDistinctFrom(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDistinctFrom) {
            return visitor.visitDistinctFrom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InListContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterInList) {
            listener.enterInList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInList) {
            listener.exitInList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInList) {
            return visitor.visitInList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    KW_BETWEEN() {
        return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0);
    }
    KW_AND() {
        return this.getToken(ImpalaSqlParser.KW_AND, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(ImpalaSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterBetween) {
            listener.enterBetween(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBetween) {
            listener.exitBetween(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBetween) {
            return visitor.visitBetween(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantifiedComparisonContext extends PredicateContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState, ctx.value);
        super.copyFrom(ctx);
    }
    comparisonOperator() {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    comparisonQuantifier() {
        return this.getRuleContext(0, ComparisonQuantifierContext);
    }
    subQueryRelation() {
        return this.getRuleContext(0, SubQueryRelationContext);
    }
    enterRule(listener) {
        if (listener.enterQuantifiedComparison) {
            listener.enterQuantifiedComparison(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuantifiedComparison) {
            listener.exitQuantifiedComparison(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuantifiedComparison) {
            return visitor.visitQuantifiedComparison(this);
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
        return ImpalaSqlParser.RULE_valueExpression;
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
        return this.getToken(ImpalaSqlParser.CONCAT, 0);
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
        return this.getToken(ImpalaSqlParser.ASTERISK, 0);
    }
    SLASH() {
        return this.getToken(ImpalaSqlParser.SLASH, 0);
    }
    PERCENT() {
        return this.getToken(ImpalaSqlParser.PERCENT, 0);
    }
    PLUS() {
        return this.getToken(ImpalaSqlParser.PLUS, 0);
    }
    MINUS() {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
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
        return this.getToken(ImpalaSqlParser.MINUS, 0);
    }
    PLUS() {
        return this.getToken(ImpalaSqlParser.PLUS, 0);
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
export class FunctionCallExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    functionNamePath() {
        return this.getRuleContext(0, FunctionNamePathContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_ORDER() {
        return this.getToken(ImpalaSqlParser.KW_ORDER, 0);
    }
    KW_BY() {
        return this.getToken(ImpalaSqlParser.KW_BY, 0);
    }
    sortItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }
        return this.getRuleContext(i, SortItemContext);
    }
    filter() {
        return this.getRuleContext(0, FilterContext);
    }
    over() {
        return this.getRuleContext(0, OverContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_functionCallExpression;
    }
    enterRule(listener) {
        if (listener.enterFunctionCallExpression) {
            listener.enterFunctionCallExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionCallExpression) {
            listener.exitFunctionCallExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionCallExpression) {
            return visitor.visitFunctionCallExpression(this);
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
        return ImpalaSqlParser.RULE_primaryExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DOT() {
        return this.getToken(ImpalaSqlParser.DOT, 0);
    }
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterDereference) {
            listener.enterDereference(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDereference) {
            listener.exitDereference(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeConstructorContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    DOUBLE_PRECISION() {
        return this.getToken(ImpalaSqlParser.DOUBLE_PRECISION, 0);
    }
    enterRule(listener) {
        if (listener.enterTypeConstructor) {
            listener.enterTypeConstructor(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeConstructor) {
            listener.exitTypeConstructor(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTypeConstructor) {
            return visitor.visitTypeConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CURRENT_DATE() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_DATE, 0);
    }
    KW_CURRENT_TIME() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIME, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    INTEGER_VALUE() {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    KW_CURRENT_TIMESTAMP() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    KW_LOCALTIME() {
        return this.getToken(ImpalaSqlParser.KW_LOCALTIME, 0);
    }
    KW_LOCALTIMESTAMP() {
        return this.getToken(ImpalaSqlParser.KW_LOCALTIMESTAMP, 0);
    }
    enterRule(listener) {
        if (listener.enterSpecialDateTimeFunction) {
            listener.enterSpecialDateTimeFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSpecialDateTimeFunction) {
            listener.exitSpecialDateTimeFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSpecialDateTimeFunction) {
            return visitor.visitSpecialDateTimeFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubstringContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_SUBSTRING() {
        return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_FOR() {
        return this.getToken(ImpalaSqlParser.KW_FOR, 0);
    }
    enterRule(listener) {
        if (listener.enterSubstring) {
            listener.enterSubstring(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubstring) {
            listener.exitSubstring(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubstring) {
            return visitor.visitSubstring(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CAST() {
        return this.getToken(ImpalaSqlParser.KW_CAST, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_AS() {
        return this.getToken(ImpalaSqlParser.KW_AS, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_TRY_CAST() {
        return this.getToken(ImpalaSqlParser.KW_TRY_CAST, 0);
    }
    enterRule(listener) {
        if (listener.enterCast) {
            listener.enterCast(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCast) {
            listener.exitCast(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LambdaContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    RIGHT_ARROW() {
        return this.getToken(ImpalaSqlParser.RIGHT_ARROW, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterLambda) {
            listener.enterLambda(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLambda) {
            listener.exitLambda(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLambda) {
            return visitor.visitLambda(this);
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
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
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
export class StringLiteralValuesContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    enterRule(listener) {
        if (listener.enterStringLiteralValues) {
            listener.enterStringLiteralValues(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStringLiteralValues) {
            listener.exitStringLiteralValues(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStringLiteralValues) {
            return visitor.visitStringLiteralValues(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParameterContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    QUESTION() {
        return this.getToken(ImpalaSqlParser.QUESTION, 0);
    }
    enterRule(listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NormalizeContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NORMALIZE() {
        return this.getToken(ImpalaSqlParser.KW_NORMALIZE, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    COMMA() {
        return this.getToken(ImpalaSqlParser.COMMA, 0);
    }
    KW_NFD() {
        return this.getToken(ImpalaSqlParser.KW_NFD, 0);
    }
    KW_NFC() {
        return this.getToken(ImpalaSqlParser.KW_NFC, 0);
    }
    KW_NFKD() {
        return this.getToken(ImpalaSqlParser.KW_NFKD, 0);
    }
    KW_NFKC() {
        return this.getToken(ImpalaSqlParser.KW_NFKC, 0);
    }
    enterRule(listener) {
        if (listener.enterNormalize) {
            listener.enterNormalize(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNormalize) {
            listener.exitNormalize(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNormalize) {
            return visitor.visitNormalize(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    interval() {
        return this.getRuleContext(0, IntervalContext);
    }
    enterRule(listener) {
        if (listener.enterIntervalLiteral) {
            listener.enterIntervalLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIntervalLiteral) {
            listener.exitIntervalLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIntervalLiteral) {
            return visitor.visitIntervalLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericLiteralContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    number() {
        return this.getRuleContext(0, NumberContext);
    }
    enterRule(listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_TRUE() {
        return this.getToken(ImpalaSqlParser.KW_TRUE, 0);
    }
    KW_FALSE() {
        return this.getToken(ImpalaSqlParser.KW_FALSE, 0);
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
export class SimpleCaseContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CASE() {
        return this.getToken(ImpalaSqlParser.KW_CASE, 0);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    KW_END() {
        return this.getToken(ImpalaSqlParser.KW_END, 0);
    }
    whenClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }
        return this.getRuleContext(i, WhenClauseContext);
    }
    KW_ELSE() {
        return this.getToken(ImpalaSqlParser.KW_ELSE, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSimpleCase) {
            listener.enterSimpleCase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimpleCase) {
            listener.exitSimpleCase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimpleCase) {
            return visitor.visitSimpleCase(this);
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
export class NullLiteralContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NULL() {
        return this.getToken(ImpalaSqlParser.KW_NULL, 0);
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
export class RowConstructorContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_AS(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_AS);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_AS, i);
        }
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        return this.getRuleContext(i, TypeContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    KW_ROW() {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    enterRule(listener) {
        if (listener.enterRowConstructor) {
            listener.enterRowConstructor(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRowConstructor) {
            listener.exitRowConstructor(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRowConstructor) {
            return visitor.visitRowConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LSQUARE() {
        return this.getToken(ImpalaSqlParser.LSQUARE, 0);
    }
    RSQUARE() {
        return this.getToken(ImpalaSqlParser.RSQUARE, 0);
    }
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSubscript) {
            listener.enterSubscript(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubscript) {
            listener.exitSubscript(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentPathContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CURRENT_PATH() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_PATH, 0);
    }
    enterRule(listener) {
        if (listener.enterCurrentPath) {
            listener.enterCurrentPath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCurrentPath) {
            listener.exitCurrentPath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCurrentPath) {
            return visitor.visitCurrentPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
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
export class BinaryLiteralContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BINARY_LITERAL() {
        return this.getToken(ImpalaSqlParser.BINARY_LITERAL, 0);
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
export class CurrentUserContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CURRENT_USER() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_USER, 0);
    }
    enterRule(listener) {
        if (listener.enterCurrentUser) {
            listener.enterCurrentUser(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCurrentUser) {
            listener.exitCurrentUser(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCurrentUser) {
            return visitor.visitCurrentUser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExtractContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_EXTRACT() {
        return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_FROM() {
        return this.getToken(ImpalaSqlParser.KW_FROM, 0);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    enterRule(listener) {
        if (listener.enterExtract) {
            listener.enterExtract(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExtract) {
            listener.exitExtract(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExtract) {
            return visitor.visitExtract(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_ARRAY() {
        return this.getToken(ImpalaSqlParser.KW_ARRAY, 0);
    }
    LSQUARE() {
        return this.getToken(ImpalaSqlParser.LSQUARE, 0);
    }
    RSQUARE() {
        return this.getToken(ImpalaSqlParser.RSQUARE, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterArrayConstructor) {
            listener.enterArrayConstructor(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayConstructor) {
            listener.exitArrayConstructor(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArrayConstructor) {
            return visitor.visitArrayConstructor(this);
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
    functionNamePath() {
        return this.getRuleContext(0, FunctionNamePathContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    ASTERISK() {
        return this.getToken(ImpalaSqlParser.ASTERISK, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    filter() {
        return this.getRuleContext(0, FilterContext);
    }
    over() {
        return this.getRuleContext(0, OverContext);
    }
    functionCallExpression() {
        return this.getRuleContext(0, FunctionCallExpressionContext);
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
export class ExistsContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_EXISTS() {
        return this.getToken(ImpalaSqlParser.KW_EXISTS, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    enterRule(listener) {
        if (listener.enterExists) {
            listener.enterExists(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExists) {
            listener.exitExists(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PositionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_POSITION() {
        return this.getToken(ImpalaSqlParser.KW_POSITION, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_IN() {
        return this.getToken(ImpalaSqlParser.KW_IN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    enterRule(listener) {
        if (listener.enterPosition) {
            listener.enterPosition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPosition) {
            listener.exitPosition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SearchedCaseContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CASE() {
        return this.getToken(ImpalaSqlParser.KW_CASE, 0);
    }
    KW_END() {
        return this.getToken(ImpalaSqlParser.KW_END, 0);
    }
    whenClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }
        return this.getRuleContext(i, WhenClauseContext);
    }
    KW_ELSE() {
        return this.getToken(ImpalaSqlParser.KW_ELSE, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSearchedCase) {
            listener.enterSearchedCase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchedCase) {
            listener.exitSearchedCase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSearchedCase) {
            return visitor.visitSearchedCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingOperationContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_GROUPING() {
        return this.getToken(ImpalaSqlParser.KW_GROUPING, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    qualifiedName(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        return this.getRuleContext(i, QualifiedNameContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterGroupingOperation) {
            listener.enterGroupingOperation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupingOperation) {
            listener.exitGroupingOperation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupingOperation) {
            return visitor.visitGroupingOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_stringLiteral;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class UnicodeStringLiteralContext extends StringLiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    UNICODE_STRING() {
        return this.getToken(ImpalaSqlParser.UNICODE_STRING, 0);
    }
    KW_UESCAPE() {
        return this.getToken(ImpalaSqlParser.KW_UESCAPE, 0);
    }
    STRING() {
        return this.getToken(ImpalaSqlParser.STRING, 0);
    }
    enterRule(listener) {
        if (listener.enterUnicodeStringLiteral) {
            listener.enterUnicodeStringLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnicodeStringLiteral) {
            listener.exitUnicodeStringLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnicodeStringLiteral) {
            return visitor.visitUnicodeStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BasicStringLiteralContext extends StringLiteralContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING() {
        return this.getToken(ImpalaSqlParser.STRING, 0);
    }
    enterRule(listener) {
        if (listener.enterBasicStringLiteral) {
            listener.enterBasicStringLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBasicStringLiteral) {
            listener.exitBasicStringLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBasicStringLiteral) {
            return visitor.visitBasicStringLiteral(this);
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
        return this.getToken(ImpalaSqlParser.EQ, 0);
    }
    NEQ() {
        return this.getToken(ImpalaSqlParser.NEQ, 0);
    }
    LT() {
        return this.getToken(ImpalaSqlParser.LT, 0);
    }
    LTE() {
        return this.getToken(ImpalaSqlParser.LTE, 0);
    }
    GT() {
        return this.getToken(ImpalaSqlParser.GT, 0);
    }
    GTE() {
        return this.getToken(ImpalaSqlParser.GTE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_comparisonOperator;
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
export class ComparisonQuantifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALL() {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    KW_SOME() {
        return this.getToken(ImpalaSqlParser.KW_SOME, 0);
    }
    KW_ANY() {
        return this.getToken(ImpalaSqlParser.KW_ANY, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_comparisonQuantifier;
    }
    enterRule(listener) {
        if (listener.enterComparisonQuantifier) {
            listener.enterComparisonQuantifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComparisonQuantifier) {
            listener.exitComparisonQuantifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComparisonQuantifier) {
            return visitor.visitComparisonQuantifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTEGER_VALUE() {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    intervalField() {
        return this.getRuleContext(0, IntervalFieldContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_INTERVAL() {
        return this.getToken(ImpalaSqlParser.KW_INTERVAL, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_interval;
    }
    enterRule(listener) {
        if (listener.enterInterval) {
            listener.enterInterval(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterval) {
            listener.exitInterval(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalFieldContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_YEAR() {
        return this.getToken(ImpalaSqlParser.KW_YEAR, 0);
    }
    KW_YEARS() {
        return this.getToken(ImpalaSqlParser.KW_YEARS, 0);
    }
    KW_MONTH() {
        return this.getToken(ImpalaSqlParser.KW_MONTH, 0);
    }
    KW_MONTHS() {
        return this.getToken(ImpalaSqlParser.KW_MONTHS, 0);
    }
    KW_DAY() {
        return this.getToken(ImpalaSqlParser.KW_DAY, 0);
    }
    KW_DAYS() {
        return this.getToken(ImpalaSqlParser.KW_DAYS, 0);
    }
    KW_HOUR() {
        return this.getToken(ImpalaSqlParser.KW_HOUR, 0);
    }
    KW_HOURS() {
        return this.getToken(ImpalaSqlParser.KW_HOURS, 0);
    }
    KW_MINUTE() {
        return this.getToken(ImpalaSqlParser.KW_MINUTE, 0);
    }
    KW_MINUTES() {
        return this.getToken(ImpalaSqlParser.KW_MINUTES, 0);
    }
    KW_SECOND() {
        return this.getToken(ImpalaSqlParser.KW_SECOND, 0);
    }
    KW_SECONDS() {
        return this.getToken(ImpalaSqlParser.KW_SECONDS, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_intervalField;
    }
    enterRule(listener) {
        if (listener.enterIntervalField) {
            listener.enterIntervalField(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIntervalField) {
            listener.exitIntervalField(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIntervalField) {
            return visitor.visitIntervalField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ARRAY() {
        return this.getToken(ImpalaSqlParser.KW_ARRAY, 0);
    }
    LT() {
        return this.getToken(ImpalaSqlParser.LT, 0);
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        return this.getRuleContext(i, TypeContext);
    }
    GT() {
        return this.getToken(ImpalaSqlParser.GT, 0);
    }
    KW_MAP() {
        return this.getToken(ImpalaSqlParser.KW_MAP, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    KW_STRUCT() {
        return this.getToken(ImpalaSqlParser.KW_STRUCT, 0);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    baseType() {
        return this.getRuleContext(0, BaseTypeContext);
    }
    dataType() {
        return this.getRuleContext(0, DataTypeContext);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    typeParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        return this.getRuleContext(i, TypeParameterContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_type;
    }
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
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
    KW_ARRAY() {
        return this.getToken(ImpalaSqlParser.KW_ARRAY, 0);
    }
    KW_BINARY() {
        return this.getToken(ImpalaSqlParser.KW_BINARY, 0);
    }
    KW_BIGINT() {
        return this.getToken(ImpalaSqlParser.KW_BIGINT, 0);
    }
    KW_BOOLEAN() {
        return this.getToken(ImpalaSqlParser.KW_BOOLEAN, 0);
    }
    KW_CHAR() {
        return this.getToken(ImpalaSqlParser.KW_CHAR, 0);
    }
    KW_DATE() {
        return this.getToken(ImpalaSqlParser.KW_DATE, 0);
    }
    KW_DECIMAL() {
        return this.getToken(ImpalaSqlParser.KW_DECIMAL, 0);
    }
    KW_DOUBLE() {
        return this.getToken(ImpalaSqlParser.KW_DOUBLE, 0);
    }
    KW_FLOAT() {
        return this.getToken(ImpalaSqlParser.KW_FLOAT, 0);
    }
    KW_INT() {
        return this.getToken(ImpalaSqlParser.KW_INT, 0);
    }
    KW_MAP() {
        return this.getToken(ImpalaSqlParser.KW_MAP, 0);
    }
    KW_REAL() {
        return this.getToken(ImpalaSqlParser.KW_REAL, 0);
    }
    KW_SMALLINT() {
        return this.getToken(ImpalaSqlParser.KW_SMALLINT, 0);
    }
    KW_STRING() {
        return this.getToken(ImpalaSqlParser.KW_STRING, 0);
    }
    KW_STRUCT() {
        return this.getToken(ImpalaSqlParser.KW_STRUCT, 0);
    }
    KW_TIMESTAMP() {
        return this.getToken(ImpalaSqlParser.KW_TIMESTAMP, 0);
    }
    KW_TINYINT() {
        return this.getToken(ImpalaSqlParser.KW_TINYINT, 0);
    }
    KW_VARCHAR() {
        return this.getToken(ImpalaSqlParser.KW_VARCHAR, 0);
    }
    KW_COMPLEX() {
        return this.getToken(ImpalaSqlParser.KW_COMPLEX, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_dataType;
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
export class TypeParameterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTEGER_VALUE() {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_typeParameter;
    }
    enterRule(listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BaseTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TIME_WITH_TIME_ZONE() {
        return this.getToken(ImpalaSqlParser.TIME_WITH_TIME_ZONE, 0);
    }
    TIMESTAMP_WITH_TIME_ZONE() {
        return this.getToken(ImpalaSqlParser.TIMESTAMP_WITH_TIME_ZONE, 0);
    }
    DOUBLE_PRECISION() {
        return this.getToken(ImpalaSqlParser.DOUBLE_PRECISION, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_baseType;
    }
    enterRule(listener) {
        if (listener.enterBaseType) {
            listener.enterBaseType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBaseType) {
            listener.exitBaseType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBaseType) {
            return visitor.visitBaseType(this);
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
        return this.getToken(ImpalaSqlParser.KW_WHEN, 0);
    }
    KW_THEN() {
        return this.getToken(ImpalaSqlParser.KW_THEN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_whenClause;
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
export class FilterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_FILTER() {
        return this.getToken(ImpalaSqlParser.KW_FILTER, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_filter;
    }
    enterRule(listener) {
        if (listener.enterFilter) {
            listener.enterFilter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFilter) {
            listener.exitFilter(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFilter) {
            return visitor.visitFilter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PartitionByClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._partition = [];
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_partitionByClause;
    }
    enterRule(listener) {
        if (listener.enterPartitionByClause) {
            listener.enterPartitionByClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPartitionByClause) {
            listener.exitPartitionByClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OverContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_OVER() {
        return this.getToken(ImpalaSqlParser.KW_OVER, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    KW_PARTITION() {
        return this.getToken(ImpalaSqlParser.KW_PARTITION, 0);
    }
    KW_BY(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.KW_BY);
        }
        else {
            return this.getToken(ImpalaSqlParser.KW_BY, i);
        }
    }
    partitionByClause() {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    KW_ORDER() {
        return this.getToken(ImpalaSqlParser.KW_ORDER, 0);
    }
    sortItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(SortItemContext);
        }
        return this.getRuleContext(i, SortItemContext);
    }
    windowFrame() {
        return this.getRuleContext(0, WindowFrameContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_over;
    }
    enterRule(listener) {
        if (listener.enterOver) {
            listener.enterOver(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOver) {
            listener.exitOver(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOver) {
            return visitor.visitOver(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowFrameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    frameBound(i) {
        if (i === undefined) {
            return this.getRuleContexts(FrameBoundContext);
        }
        return this.getRuleContext(i, FrameBoundContext);
    }
    KW_RANGE() {
        return this.getToken(ImpalaSqlParser.KW_RANGE, 0);
    }
    KW_ROWS() {
        return this.getToken(ImpalaSqlParser.KW_ROWS, 0);
    }
    KW_BETWEEN() {
        return this.getToken(ImpalaSqlParser.KW_BETWEEN, 0);
    }
    KW_AND() {
        return this.getToken(ImpalaSqlParser.KW_AND, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_windowFrame;
    }
    enterRule(listener) {
        if (listener.enterWindowFrame) {
            listener.enterWindowFrame(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindowFrame) {
            listener.exitWindowFrame(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindowFrame) {
            return visitor.visitWindowFrame(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FrameBoundContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_frameBound;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class BoundedFrameContext extends FrameBoundContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_PRECEDING() {
        return this.getToken(ImpalaSqlParser.KW_PRECEDING, 0);
    }
    KW_FOLLOWING() {
        return this.getToken(ImpalaSqlParser.KW_FOLLOWING, 0);
    }
    enterRule(listener) {
        if (listener.enterBoundedFrame) {
            listener.enterBoundedFrame(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBoundedFrame) {
            listener.exitBoundedFrame(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBoundedFrame) {
            return visitor.visitBoundedFrame(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnboundedFrameContext extends FrameBoundContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_UNBOUNDED() {
        return this.getToken(ImpalaSqlParser.KW_UNBOUNDED, 0);
    }
    KW_PRECEDING() {
        return this.getToken(ImpalaSqlParser.KW_PRECEDING, 0);
    }
    KW_FOLLOWING() {
        return this.getToken(ImpalaSqlParser.KW_FOLLOWING, 0);
    }
    enterRule(listener) {
        if (listener.enterUnboundedFrame) {
            listener.enterUnboundedFrame(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnboundedFrame) {
            listener.exitUnboundedFrame(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnboundedFrame) {
            return visitor.visitUnboundedFrame(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CurrentRowBoundContext extends FrameBoundContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CURRENT() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT, 0);
    }
    KW_ROW() {
        return this.getToken(ImpalaSqlParser.KW_ROW, 0);
    }
    enterRule(listener) {
        if (listener.enterCurrentRowBound) {
            listener.enterCurrentRowBound(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCurrentRowBound) {
            listener.exitCurrentRowBound(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCurrentRowBound) {
            return visitor.visitCurrentRowBound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathElementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_pathElement;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class QualifiedArgumentContext extends PathElementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT() {
        return this.getToken(ImpalaSqlParser.DOT, 0);
    }
    enterRule(listener) {
        if (listener.enterQualifiedArgument) {
            listener.enterQualifiedArgument(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQualifiedArgument) {
            listener.exitQualifiedArgument(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQualifiedArgument) {
            return visitor.visitQualifiedArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnqualifiedArgumentContext extends PathElementContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterUnqualifiedArgument) {
            listener.enterUnqualifiedArgument(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnqualifiedArgument) {
            listener.exitUnqualifiedArgument(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnqualifiedArgument) {
            return visitor.visitUnqualifiedArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathSpecificationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    pathElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(PathElementContext);
        }
        return this.getRuleContext(i, PathElementContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.COMMA);
        }
        else {
            return this.getToken(ImpalaSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_pathSpecification;
    }
    enterRule(listener) {
        if (listener.enterPathSpecification) {
            listener.enterPathSpecification(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPathSpecification) {
            listener.exitPathSpecification(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPathSpecification) {
            return visitor.visitPathSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrivilegeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALL() {
        return this.getToken(ImpalaSqlParser.KW_ALL, 0);
    }
    KW_ALTER() {
        return this.getToken(ImpalaSqlParser.KW_ALTER, 0);
    }
    KW_DROP() {
        return this.getToken(ImpalaSqlParser.KW_DROP, 0);
    }
    KW_CREATE() {
        return this.getToken(ImpalaSqlParser.KW_CREATE, 0);
    }
    KW_INSERT() {
        return this.getToken(ImpalaSqlParser.KW_INSERT, 0);
    }
    KW_REFRESH() {
        return this.getToken(ImpalaSqlParser.KW_REFRESH, 0);
    }
    KW_SELECT() {
        return this.getToken(ImpalaSqlParser.KW_SELECT, 0);
    }
    LPAREN() {
        return this.getToken(ImpalaSqlParser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(ImpalaSqlParser.RPAREN, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_privilege;
    }
    enterRule(listener) {
        if (listener.enterPrivilege) {
            listener.enterPrivilege(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrivilege) {
            listener.exitPrivilege(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPrivilege) {
            return visitor.visitPrivilege(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SERVER() {
        return this.getToken(ImpalaSqlParser.KW_SERVER, 0);
    }
    KW_URI() {
        return this.getToken(ImpalaSqlParser.KW_URI, 0);
    }
    KW_DATABASE() {
        return this.getToken(ImpalaSqlParser.KW_DATABASE, 0);
    }
    KW_TABLE() {
        return this.getToken(ImpalaSqlParser.KW_TABLE, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_objectType;
    }
    enterRule(listener) {
        if (listener.enterObjectType) {
            listener.enterObjectType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitObjectType) {
            listener.exitObjectType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitObjectType) {
            return visitor.visitObjectType(this);
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
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.DOT);
        }
        else {
            return this.getToken(ImpalaSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_qualifiedName;
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
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(ImpalaSqlParser.DOT);
        }
        else {
            return this.getToken(ImpalaSqlParser.DOT, i);
        }
    }
    emptyColumn() {
        return this.getRuleContext(0, EmptyColumnContext);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_qualifiedNameAllowEmpty;
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
export class PrincipalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_principal;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class GroupPrincipalContext extends PrincipalContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_GROUP() {
        return this.getToken(ImpalaSqlParser.KW_GROUP, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterGroupPrincipal) {
            listener.enterGroupPrincipal(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupPrincipal) {
            listener.exitGroupPrincipal(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupPrincipal) {
            return visitor.visitGroupPrincipal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RolePrincipalContext extends PrincipalContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_ROLE() {
        return this.getToken(ImpalaSqlParser.KW_ROLE, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterRolePrincipal) {
            listener.enterRolePrincipal(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRolePrincipal) {
            listener.exitRolePrincipal(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRolePrincipal) {
            return visitor.visitRolePrincipal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UserPrincipalContext extends PrincipalContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterUserPrincipal) {
            listener.enterUserPrincipal(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUserPrincipal) {
            listener.exitUserPrincipal(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUserPrincipal) {
            return visitor.visitUserPrincipal(this);
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
    get ruleIndex() {
        return ImpalaSqlParser.RULE_identifier;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class BackQuotedIdentifierContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BACKQUOTED_IDENTIFIER() {
        return this.getToken(ImpalaSqlParser.BACKQUOTED_IDENTIFIER, 0);
    }
    enterRule(listener) {
        if (listener.enterBackQuotedIdentifier) {
            listener.enterBackQuotedIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBackQuotedIdentifier) {
            listener.exitBackQuotedIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBackQuotedIdentifier) {
            return visitor.visitBackQuotedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuotedIdentifierContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING() {
        return this.getToken(ImpalaSqlParser.STRING, 0);
    }
    enterRule(listener) {
        if (listener.enterQuotedIdentifier) {
            listener.enterQuotedIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuotedIdentifier) {
            listener.exitQuotedIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuotedIdentifier) {
            return visitor.visitQuotedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DigitIdentifierContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DIGIT_IDENTIFIER() {
        return this.getToken(ImpalaSqlParser.DIGIT_IDENTIFIER, 0);
    }
    enterRule(listener) {
        if (listener.enterDigitIdentifier) {
            listener.enterDigitIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDigitIdentifier) {
            listener.exitDigitIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDigitIdentifier) {
            return visitor.visitDigitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IDENTIFIER() {
        return this.getToken(ImpalaSqlParser.IDENTIFIER, 0);
    }
    nonReserved() {
        return this.getRuleContext(0, NonReservedContext);
    }
    enterRule(listener) {
        if (listener.enterUnquotedIdentifier) {
            listener.enterUnquotedIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnquotedIdentifier) {
            listener.exitUnquotedIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_number;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class DecimalLiteralContext extends NumberContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DECIMAL_VALUE() {
        return this.getToken(ImpalaSqlParser.DECIMAL_VALUE, 0);
    }
    MINUS() {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
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
export class DoubleLiteralContext extends NumberContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DOUBLE_VALUE() {
        return this.getToken(ImpalaSqlParser.DOUBLE_VALUE, 0);
    }
    MINUS() {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
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
export class IntegerLiteralContext extends NumberContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    INTEGER_VALUE() {
        return this.getToken(ImpalaSqlParser.INTEGER_VALUE, 0);
    }
    MINUS() {
        return this.getToken(ImpalaSqlParser.MINUS, 0);
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
export class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TRUNCATE() {
        return this.getToken(ImpalaSqlParser.KW_TRUNCATE, 0);
    }
    KW_CAST() {
        return this.getToken(ImpalaSqlParser.KW_CAST, 0);
    }
    KW_CURRENT_DATE() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_DATE, 0);
    }
    KW_CURRENT_TIMESTAMP() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    KW_DAY() {
        return this.getToken(ImpalaSqlParser.KW_DAY, 0);
    }
    KW_EXTRACT() {
        return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0);
    }
    KW_HOUR() {
        return this.getToken(ImpalaSqlParser.KW_HOUR, 0);
    }
    KW_MINUTE() {
        return this.getToken(ImpalaSqlParser.KW_MINUTE, 0);
    }
    KW_MONTH() {
        return this.getToken(ImpalaSqlParser.KW_MONTH, 0);
    }
    KW_SECOND() {
        return this.getToken(ImpalaSqlParser.KW_SECOND, 0);
    }
    KW_YEAR() {
        return this.getToken(ImpalaSqlParser.KW_YEAR, 0);
    }
    KW_CASE() {
        return this.getToken(ImpalaSqlParser.KW_CASE, 0);
    }
    KW_LEFT() {
        return this.getToken(ImpalaSqlParser.KW_LEFT, 0);
    }
    KW_REPLACE() {
        return this.getToken(ImpalaSqlParser.KW_REPLACE, 0);
    }
    KW_RIGHT() {
        return this.getToken(ImpalaSqlParser.KW_RIGHT, 0);
    }
    KW_SUBSTRING() {
        return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_reservedKeywordsUsedAsFuncName;
    }
    enterRule(listener) {
        if (listener.enterReservedKeywordsUsedAsFuncName) {
            listener.enterReservedKeywordsUsedAsFuncName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReservedKeywordsUsedAsFuncName) {
            listener.exitReservedKeywordsUsedAsFuncName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReservedKeywordsUsedAsFuncName) {
            return visitor.visitReservedKeywordsUsedAsFuncName(this);
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
    KW_BERNOULLI() {
        return this.getToken(ImpalaSqlParser.KW_BERNOULLI, 0);
    }
    KW_DAY() {
        return this.getToken(ImpalaSqlParser.KW_DAY, 0);
    }
    KW_DATE() {
        return this.getToken(ImpalaSqlParser.KW_DATE, 0);
    }
    KW_DAYS() {
        return this.getToken(ImpalaSqlParser.KW_DAYS, 0);
    }
    KW_EXCLUDING() {
        return this.getToken(ImpalaSqlParser.KW_EXCLUDING, 0);
    }
    KW_HOUR() {
        return this.getToken(ImpalaSqlParser.KW_HOUR, 0);
    }
    KW_INCLUDING() {
        return this.getToken(ImpalaSqlParser.KW_INCLUDING, 0);
    }
    KW_MINUTE() {
        return this.getToken(ImpalaSqlParser.KW_MINUTE, 0);
    }
    KW_MINUTES() {
        return this.getToken(ImpalaSqlParser.KW_MINUTES, 0);
    }
    KW_MONTH() {
        return this.getToken(ImpalaSqlParser.KW_MONTH, 0);
    }
    KW_MONTHS() {
        return this.getToken(ImpalaSqlParser.KW_MONTHS, 0);
    }
    KW_NFC() {
        return this.getToken(ImpalaSqlParser.KW_NFC, 0);
    }
    KW_NFD() {
        return this.getToken(ImpalaSqlParser.KW_NFD, 0);
    }
    KW_NFKC() {
        return this.getToken(ImpalaSqlParser.KW_NFKC, 0);
    }
    KW_NFKD() {
        return this.getToken(ImpalaSqlParser.KW_NFKD, 0);
    }
    KW_OPTION() {
        return this.getToken(ImpalaSqlParser.KW_OPTION, 0);
    }
    KW_ORDINALITY() {
        return this.getToken(ImpalaSqlParser.KW_ORDINALITY, 0);
    }
    KW_PRIVILEGES() {
        return this.getToken(ImpalaSqlParser.KW_PRIVILEGES, 0);
    }
    KW_PROPERTIES() {
        return this.getToken(ImpalaSqlParser.KW_PROPERTIES, 0);
    }
    KW_SECOND() {
        return this.getToken(ImpalaSqlParser.KW_SECOND, 0);
    }
    KW_SECONDS() {
        return this.getToken(ImpalaSqlParser.KW_SECONDS, 0);
    }
    KW_SUBSTRING() {
        return this.getToken(ImpalaSqlParser.KW_SUBSTRING, 0);
    }
    KW_SYSTEM() {
        return this.getToken(ImpalaSqlParser.KW_SYSTEM, 0);
    }
    KW_TRY_CAST() {
        return this.getToken(ImpalaSqlParser.KW_TRY_CAST, 0);
    }
    KW_USER() {
        return this.getToken(ImpalaSqlParser.KW_USER, 0);
    }
    KW_VIEWS() {
        return this.getToken(ImpalaSqlParser.KW_VIEWS, 0);
    }
    KW_YEAR() {
        return this.getToken(ImpalaSqlParser.KW_YEAR, 0);
    }
    KW_ORC() {
        return this.getToken(ImpalaSqlParser.KW_ORC, 0);
    }
    KW_CURRENT_TIMESTAMP() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    KW_CURRENT_USER() {
        return this.getToken(ImpalaSqlParser.KW_CURRENT_USER, 0);
    }
    KW_EXTRACT() {
        return this.getToken(ImpalaSqlParser.KW_EXTRACT, 0);
    }
    KW_KEY() {
        return this.getToken(ImpalaSqlParser.KW_KEY, 0);
    }
    KW_LOCALTIME() {
        return this.getToken(ImpalaSqlParser.KW_LOCALTIME, 0);
    }
    KW_SHUTDOWN() {
        return this.getToken(ImpalaSqlParser.KW_SHUTDOWN, 0);
    }
    get ruleIndex() {
        return ImpalaSqlParser.RULE_nonReserved;
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
