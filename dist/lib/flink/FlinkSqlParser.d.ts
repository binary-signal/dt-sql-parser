import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";
import { FlinkSqlParserListener } from "./FlinkSqlParserListener.js";
import { FlinkSqlParserVisitor } from "./FlinkSqlParserVisitor.js";
import { SQLParserBase } from '../SQLParserBase';
export declare class FlinkSqlParser extends SQLParserBase {
    static readonly WHITE_SPACE = 1;
    static readonly BRACKETED_COMMENT = 2;
    static readonly LINE_COMMENT = 3;
    static readonly KW_ABS = 4;
    static readonly KW_ALL = 5;
    static readonly KW_ALLOCATE = 6;
    static readonly KW_ALLOW = 7;
    static readonly KW_ALTER = 8;
    static readonly KW_ANALYZE = 9;
    static readonly KW_AND = 10;
    static readonly KW_ANY = 11;
    static readonly KW_ARE = 12;
    static readonly KW_ARRAY = 13;
    static readonly KW_ARRAY_AGG = 14;
    static readonly KW_ARRAY_CONCAT_AGG = 15;
    static readonly KW_ARRAY_MAX_CARDINALITY = 16;
    static readonly KW_AS = 17;
    static readonly KW_ASENSITIVE = 18;
    static readonly KW_ASYMMETRIC = 19;
    static readonly KW_AT = 20;
    static readonly KW_ATOMIC = 21;
    static readonly KW_AUTHORIZATION = 22;
    static readonly KW_AVG = 23;
    static readonly KW_BEGIN = 24;
    static readonly KW_BEGIN_FRAME = 25;
    static readonly KW_BEGIN_PARTITION = 26;
    static readonly KW_BETWEEN = 27;
    static readonly KW_BIGINT = 28;
    static readonly KW_BINARY = 29;
    static readonly KW_BIT = 30;
    static readonly KW_BITMAP = 31;
    static readonly KW_BLOB = 32;
    static readonly KW_BOOLEAN = 33;
    static readonly KW_BOTH = 34;
    static readonly KW_BUCKETS = 35;
    static readonly KW_BY = 36;
    static readonly KW_BYTES = 37;
    static readonly KW_CALL = 38;
    static readonly KW_CALLED = 39;
    static readonly KW_CARDINALITY = 40;
    static readonly KW_CASCADED = 41;
    static readonly KW_CASE = 42;
    static readonly KW_CAST = 43;
    static readonly KW_CATALOGS = 44;
    static readonly KW_CEIL = 45;
    static readonly KW_CEILING = 46;
    static readonly KW_CHANGELOG_MODE = 47;
    static readonly KW_CHAR = 48;
    static readonly KW_CHARACTER = 49;
    static readonly KW_CHARACTER_LENGTH = 50;
    static readonly KW_CHAR_LENGTH = 51;
    static readonly KW_CHECK = 52;
    static readonly KW_CLASSIFIER = 53;
    static readonly KW_CLOB = 54;
    static readonly KW_CLOSE = 55;
    static readonly KW_COALESCE = 56;
    static readonly KW_COLLATE = 57;
    static readonly KW_COLLECT = 58;
    static readonly KW_COLUMN = 59;
    static readonly KW_COLUMNS = 60;
    static readonly KW_COMMENT = 61;
    static readonly KW_COMMIT = 62;
    static readonly KW_COMPUTE = 63;
    static readonly KW_CONDITION = 64;
    static readonly KW_CONNECT = 65;
    static readonly KW_CONNECTIONS = 66;
    static readonly KW_CONSTRAINT = 67;
    static readonly KW_CONTAINS = 68;
    static readonly KW_CONTINUOUS = 69;
    static readonly KW_CONVERT = 70;
    static readonly KW_CORR = 71;
    static readonly KW_CORRESPONDING = 72;
    static readonly KW_COUNT = 73;
    static readonly KW_COVAR_POP = 74;
    static readonly KW_COVAR_SAMP = 75;
    static readonly KW_CREATE = 76;
    static readonly KW_CROSS = 77;
    static readonly KW_CUBE = 78;
    static readonly KW_CUME_DIST = 79;
    static readonly KW_CURRENT = 80;
    static readonly KW_CURRENT_CATALOG = 81;
    static readonly KW_CURRENT_DATE = 82;
    static readonly KW_CURRENT_DEFAULT_TRANSFORM_GROUP = 83;
    static readonly KW_CURRENT_PATH = 84;
    static readonly KW_CURRENT_ROLE = 85;
    static readonly KW_CURRENT_ROW = 86;
    static readonly KW_CURRENT_SCHEMA = 87;
    static readonly KW_CURRENT_TIME = 88;
    static readonly KW_CURRENT_TIMESTAMP = 89;
    static readonly KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE = 90;
    static readonly KW_CURRENT_USER = 91;
    static readonly KW_CURSOR = 92;
    static readonly KW_CYCLE = 93;
    static readonly KW_DATABASES = 94;
    static readonly KW_DATE = 95;
    static readonly KW_DATETIME = 96;
    static readonly KW_DATETIME_DIFF = 97;
    static readonly KW_DATETIME_TRUNC = 98;
    static readonly KW_DATE_DIFF = 99;
    static readonly KW_DATE_TRUNC = 100;
    static readonly KW_DAY = 101;
    static readonly KW_DAYOFWEEK = 102;
    static readonly KW_DAYOFYEAR = 103;
    static readonly KW_DEALLOCATE = 104;
    static readonly KW_DEC = 105;
    static readonly KW_DECIMAL = 106;
    static readonly KW_DECLARE = 107;
    static readonly KW_DEFAULT = 108;
    static readonly KW_DEFINE = 109;
    static readonly KW_DELETE = 110;
    static readonly KW_DENSE_RANK = 111;
    static readonly KW_DEREF = 112;
    static readonly KW_DESCRIBE = 113;
    static readonly KW_DETERMINISTIC = 114;
    static readonly KW_DISALLOW = 115;
    static readonly KW_DISCONNECT = 116;
    static readonly KW_DISTINCT = 117;
    static readonly KW_DISTRIBUTED = 118;
    static readonly KW_DISTRIBUTION = 119;
    static readonly KW_DOT = 120;
    static readonly KW_DOUBLE = 121;
    static readonly KW_DROP = 122;
    static readonly KW_DYNAMIC = 123;
    static readonly KW_EACH = 124;
    static readonly KW_ELEMENT = 125;
    static readonly KW_ELSE = 126;
    static readonly KW_EMPTY = 127;
    static readonly KW_END = 128;
    static readonly KW_END_FRAME = 129;
    static readonly KW_END_PARTITION = 130;
    static readonly KW_ENFORCED = 131;
    static readonly KW_EQUALS = 132;
    static readonly KW_ESCAPE = 133;
    static readonly KW_ESTIMATED_COST = 134;
    static readonly KW_EVERY = 135;
    static readonly KW_EXCEPT = 136;
    static readonly KW_EXEC = 137;
    static readonly KW_EXECUTE = 138;
    static readonly KW_EXISTS = 139;
    static readonly KW_EXP = 140;
    static readonly KW_EXPLAIN = 141;
    static readonly KW_EXTEND = 142;
    static readonly KW_EXTENDED = 143;
    static readonly KW_EXTERNAL = 144;
    static readonly KW_EXTRACT = 145;
    static readonly KW_FALSE = 146;
    static readonly KW_FETCH = 147;
    static readonly KW_FILTER = 148;
    static readonly KW_FIRST_VALUE = 149;
    static readonly KW_FLOAT = 150;
    static readonly KW_FLOOR = 151;
    static readonly KW_FOLLOWING = 152;
    static readonly KW_FOR = 153;
    static readonly KW_FOREIGN = 154;
    static readonly KW_FRAME_ROW = 155;
    static readonly KW_FREE = 156;
    static readonly KW_FRESHNESS = 157;
    static readonly KW_FRIDAY = 158;
    static readonly KW_FROM = 159;
    static readonly KW_FULL = 160;
    static readonly KW_FUNCTION = 161;
    static readonly KW_FUNCTIONS = 162;
    static readonly KW_FUSION = 163;
    static readonly KW_GET = 164;
    static readonly KW_GLOBAL = 165;
    static readonly KW_GRANT = 166;
    static readonly KW_GROUP = 167;
    static readonly KW_GROUPING = 168;
    static readonly KW_GROUPS = 169;
    static readonly KW_GROUP_CONCAT = 170;
    static readonly KW_HASH = 171;
    static readonly KW_HAVING = 172;
    static readonly KW_HOLD = 173;
    static readonly KW_HOUR = 174;
    static readonly KW_IDENTITY = 175;
    static readonly KW_IF = 176;
    static readonly KW_ILIKE = 177;
    static readonly KW_IMPORT = 178;
    static readonly KW_IN = 179;
    static readonly KW_INCLUDE = 180;
    static readonly KW_INDICATOR = 181;
    static readonly KW_INITIAL = 182;
    static readonly KW_INNER = 183;
    static readonly KW_INOUT = 184;
    static readonly KW_INSENSITIVE = 185;
    static readonly KW_INSERT = 186;
    static readonly KW_INT = 187;
    static readonly KW_INTEGER = 188;
    static readonly KW_INTERSECT = 189;
    static readonly KW_INTERSECTION = 190;
    static readonly KW_INTERVAL = 191;
    static readonly KW_INTO = 192;
    static readonly KW_IS = 193;
    static readonly KW_JOIN = 194;
    static readonly KW_JSON = 195;
    static readonly KW_JSON_ARRAY = 196;
    static readonly KW_JSON_ARRAYAGG = 197;
    static readonly KW_JSON_EXECUTION_PLAN = 198;
    static readonly KW_JSON_EXISTS = 199;
    static readonly KW_JSON_OBJECT = 200;
    static readonly KW_JSON_OBJECTAGG = 201;
    static readonly KW_JSON_QUERY = 202;
    static readonly KW_JSON_VALUE = 203;
    static readonly KW_LAG = 204;
    static readonly KW_LANGUAGE = 205;
    static readonly KW_LARGE = 206;
    static readonly KW_LAST_VALUE = 207;
    static readonly KW_LATERAL = 208;
    static readonly KW_LEAD = 209;
    static readonly KW_LEADING = 210;
    static readonly KW_LEFT = 211;
    static readonly KW_LIKE = 212;
    static readonly KW_LIKE_REGEX = 213;
    static readonly KW_LIMIT = 214;
    static readonly KW_LN = 215;
    static readonly KW_LOCAL = 216;
    static readonly KW_LOCALTIME = 217;
    static readonly KW_LOCALTIMESTAMP = 218;
    static readonly KW_LOWER = 219;
    static readonly KW_MATCH = 220;
    static readonly KW_MATCHES = 221;
    static readonly KW_MATCH_NUMBER = 222;
    static readonly KW_MATCH_RECOGNIZE = 223;
    static readonly KW_MATERIALIZED = 224;
    static readonly KW_MAX = 225;
    static readonly KW_MEASURES = 226;
    static readonly KW_MEMBER = 227;
    static readonly KW_MERGE = 228;
    static readonly KW_METADATA = 229;
    static readonly KW_METHOD = 230;
    static readonly KW_MIN = 231;
    static readonly KW_MINUS = 232;
    static readonly KW_MINUTE = 233;
    static readonly KW_MOD = 234;
    static readonly KW_MODELS = 235;
    static readonly KW_MODIFIES = 236;
    static readonly KW_MODIFY = 237;
    static readonly KW_MODULE = 238;
    static readonly KW_MODULES = 239;
    static readonly KW_MONDAY = 240;
    static readonly KW_MONTH = 241;
    static readonly KW_MORE = 242;
    static readonly KW_MULTISET = 243;
    static readonly KW_NATIONAL = 244;
    static readonly KW_NATURAL = 245;
    static readonly KW_NCHAR = 246;
    static readonly KW_NCLOB = 247;
    static readonly KW_NEW = 248;
    static readonly KW_NEXT = 249;
    static readonly KW_NO = 250;
    static readonly KW_NONE = 251;
    static readonly KW_NORMALIZE = 252;
    static readonly KW_NOT = 253;
    static readonly KW_NTH_VALUE = 254;
    static readonly KW_NTILE = 255;
    static readonly KW_NULL = 256;
    static readonly KW_NULLIF = 257;
    static readonly KW_NUMERIC = 258;
    static readonly KW_OCCURRENCES_REGEX = 259;
    static readonly KW_OCTET_LENGTH = 260;
    static readonly KW_OF = 261;
    static readonly KW_OFFSET = 262;
    static readonly KW_OLD = 263;
    static readonly KW_OMIT = 264;
    static readonly KW_ON = 265;
    static readonly KW_ONE = 266;
    static readonly KW_ONLY = 267;
    static readonly KW_OPEN = 268;
    static readonly KW_OR = 269;
    static readonly KW_ORDER = 270;
    static readonly KW_ORDINAL = 271;
    static readonly KW_OUT = 272;
    static readonly KW_OUTER = 273;
    static readonly KW_OVER = 274;
    static readonly KW_OVERLAPS = 275;
    static readonly KW_OVERLAY = 276;
    static readonly KW_OVERWRITE = 277;
    static readonly KW_OVERWRITING = 278;
    static readonly KW_PARAMETER = 279;
    static readonly KW_PARTITION = 280;
    static readonly KW_PARTITIONED = 281;
    static readonly KW_PARTITIONS = 282;
    static readonly KW_PATTERN = 283;
    static readonly KW_PER = 284;
    static readonly KW_PERCENT = 285;
    static readonly KW_PERCENTILE_CONT = 286;
    static readonly KW_PERCENTILE_DISC = 287;
    static readonly KW_PERCENT_RANK = 288;
    static readonly KW_PERIOD = 289;
    static readonly KW_PERMUTE = 290;
    static readonly KW_PIVOT = 291;
    static readonly KW_PORTION = 292;
    static readonly KW_POSITION = 293;
    static readonly KW_POSITION_REGEX = 294;
    static readonly KW_POWER = 295;
    static readonly KW_PRECEDES = 296;
    static readonly KW_PRECISION = 297;
    static readonly KW_PREPARE = 298;
    static readonly KW_PREV = 299;
    static readonly KW_PRIMARY = 300;
    static readonly KW_PROCEDURE = 301;
    static readonly KW_PROCEDURES = 302;
    static readonly KW_QUALIFY = 303;
    static readonly KW_QUARTERS = 304;
    static readonly KW_RANGE = 305;
    static readonly KW_RANK = 306;
    static readonly KW_RAW = 307;
    static readonly KW_READS = 308;
    static readonly KW_REAL = 309;
    static readonly KW_RECURSIVE = 310;
    static readonly KW_REF = 311;
    static readonly KW_REFERENCES = 312;
    static readonly KW_REFERENCING = 313;
    static readonly KW_REFRESH = 314;
    static readonly KW_REFRESH_MODE = 315;
    static readonly KW_REGR_AVGX = 316;
    static readonly KW_REGR_AVGY = 317;
    static readonly KW_REGR_COUNT = 318;
    static readonly KW_REGR_INTERCEPT = 319;
    static readonly KW_REGR_R2 = 320;
    static readonly KW_REGR_SLOPE = 321;
    static readonly KW_REGR_SXX = 322;
    static readonly KW_REGR_SXY = 323;
    static readonly KW_REGR_SYY = 324;
    static readonly KW_RELEASE = 325;
    static readonly KW_RENAME = 326;
    static readonly KW_RESET = 327;
    static readonly KW_RESULT = 328;
    static readonly KW_RESUME = 329;
    static readonly KW_RETURN = 330;
    static readonly KW_RETURNS = 331;
    static readonly KW_REVOKE = 332;
    static readonly KW_RIGHT = 333;
    static readonly KW_RLIKE = 334;
    static readonly KW_ROLLBACK = 335;
    static readonly KW_ROLLUP = 336;
    static readonly KW_ROW = 337;
    static readonly KW_ROWS = 338;
    static readonly KW_ROW_NUMBER = 339;
    static readonly KW_RUNNING = 340;
    static readonly KW_SAFE_CAST = 341;
    static readonly KW_SAFE_OFFSET = 342;
    static readonly KW_SAFE_ORDINAL = 343;
    static readonly KW_SATURDAY = 344;
    static readonly KW_SAVEPOINT = 345;
    static readonly KW_SCALA = 346;
    static readonly KW_SCOPE = 347;
    static readonly KW_SCROLL = 348;
    static readonly KW_SEARCH = 349;
    static readonly KW_SECOND = 350;
    static readonly KW_SEEK = 351;
    static readonly KW_SELECT = 352;
    static readonly KW_SENSITIVE = 353;
    static readonly KW_SEPARATOR = 354;
    static readonly KW_SESSION_USER = 355;
    static readonly KW_SET = 356;
    static readonly KW_SHOW = 357;
    static readonly KW_SIMILAR = 358;
    static readonly KW_SKIP = 359;
    static readonly KW_SMALLINT = 360;
    static readonly KW_SOME = 361;
    static readonly KW_SPECIFIC = 362;
    static readonly KW_SPECIFICTYPE = 363;
    static readonly KW_SQL = 364;
    static readonly KW_SQLEXCEPTION = 365;
    static readonly KW_SQLSTATE = 366;
    static readonly KW_SQLWARNING = 367;
    static readonly KW_SQRT = 368;
    static readonly KW_START = 369;
    static readonly KW_STATEMENT = 370;
    static readonly KW_STATIC = 371;
    static readonly KW_STATISTICS = 372;
    static readonly KW_STDDEV_POP = 373;
    static readonly KW_STDDEV_SAMP = 374;
    static readonly KW_STREAM = 375;
    static readonly KW_STRING = 376;
    static readonly KW_STRING_AGG = 377;
    static readonly KW_STRUCTURED = 378;
    static readonly KW_SUBMULTISET = 379;
    static readonly KW_SUBSET = 380;
    static readonly KW_SUBSTRING = 381;
    static readonly KW_SUBSTRING_REGEX = 382;
    static readonly KW_SUCCEEDS = 383;
    static readonly KW_SUM = 384;
    static readonly KW_SUNDAY = 385;
    static readonly KW_SUSPEND = 386;
    static readonly KW_SYMMETRIC = 387;
    static readonly KW_SYSTEM = 388;
    static readonly KW_SYSTEM_TIME = 389;
    static readonly KW_SYSTEM_USER = 390;
    static readonly KW_TABLE = 391;
    static readonly KW_TABLES = 392;
    static readonly KW_TABLESAMPLE = 393;
    static readonly KW_THEN = 394;
    static readonly KW_THURSDAY = 395;
    static readonly KW_TIME = 396;
    static readonly KW_TIMESTAMP = 397;
    static readonly KW_TIMESTAMP_DIFF = 398;
    static readonly KW_TIMESTAMP_LTZ = 399;
    static readonly KW_TIMESTAMP_TRUNC = 400;
    static readonly KW_TIMEZONE_HOUR = 401;
    static readonly KW_TIMEZONE_MINUTE = 402;
    static readonly KW_TIME_DIFF = 403;
    static readonly KW_TIME_TRUNC = 404;
    static readonly KW_TINYINT = 405;
    static readonly KW_TO = 406;
    static readonly KW_TRAILING = 407;
    static readonly KW_TRANSLATE = 408;
    static readonly KW_TRANSLATE_REGEX = 409;
    static readonly KW_TRANSLATION = 410;
    static readonly KW_TREAT = 411;
    static readonly KW_TRIGGER = 412;
    static readonly KW_TRIM = 413;
    static readonly KW_TRIM_ARRAY = 414;
    static readonly KW_TRUE = 415;
    static readonly KW_TRUNCATE = 416;
    static readonly KW_TRY_CAST = 417;
    static readonly KW_TUESDAY = 418;
    static readonly KW_UESCAPE = 419;
    static readonly KW_UNBOUNDED = 420;
    static readonly KW_UNION = 421;
    static readonly KW_UNIQUE = 422;
    static readonly KW_UNKNOWN = 423;
    static readonly KW_UNNEST = 424;
    static readonly KW_UNPIVOT = 425;
    static readonly KW_UPDATE = 426;
    static readonly KW_UPPER = 427;
    static readonly KW_UPSERT = 428;
    static readonly KW_USE = 429;
    static readonly KW_USER = 430;
    static readonly KW_USING = 431;
    static readonly KW_VALUE = 432;
    static readonly KW_VALUES = 433;
    static readonly KW_VALUE_OF = 434;
    static readonly KW_VARBINARY = 435;
    static readonly KW_VARCHAR = 436;
    static readonly KW_VARYING = 437;
    static readonly KW_VAR_POP = 438;
    static readonly KW_VAR_SAMP = 439;
    static readonly KW_VERSIONING = 440;
    static readonly KW_VIEWS = 441;
    static readonly KW_VIRTUAL = 442;
    static readonly KW_WATERMARK = 443;
    static readonly KW_WATERMARKS = 444;
    static readonly KW_WEDNESDAY = 445;
    static readonly KW_WEEKS = 446;
    static readonly KW_WHEN = 447;
    static readonly KW_WHENEVER = 448;
    static readonly KW_WHERE = 449;
    static readonly KW_WIDTH_BUCKET = 450;
    static readonly KW_WINDOW = 451;
    static readonly KW_WITH = 452;
    static readonly KW_WITHIN = 453;
    static readonly KW_WITHOUT = 454;
    static readonly KW_YEAR = 455;
    static readonly KW_ADD = 456;
    static readonly KW_AFTER = 457;
    static readonly KW_ARTIFACT = 458;
    static readonly KW_ASC = 459;
    static readonly KW_CASCADE = 460;
    static readonly KW_CATALOG = 461;
    static readonly KW_CENTURY = 462;
    static readonly KW_COMPILE = 463;
    static readonly KW_CONFIG = 464;
    static readonly KW_CONFLICT = 465;
    static readonly KW_CONNECTION = 466;
    static readonly KW_CONSTRAINTS = 467;
    static readonly KW_CUMULATE = 468;
    static readonly KW_DATA = 469;
    static readonly KW_DATABASE = 470;
    static readonly KW_DAYS = 471;
    static readonly KW_DECADE = 472;
    static readonly KW_DEDUPLICATE = 473;
    static readonly KW_DESC = 474;
    static readonly KW_DESCRIPTOR = 475;
    static readonly KW_DIV = 476;
    static readonly KW_DO = 477;
    static readonly KW_DRAIN = 478;
    static readonly KW_ENGINE = 479;
    static readonly KW_EPOCH = 480;
    static readonly KW_ERROR = 481;
    static readonly KW_EXCLUDING = 482;
    static readonly KW_FILE = 483;
    static readonly KW_FIRST = 484;
    static readonly KW_FROM_BEGINNING = 485;
    static readonly KW_FROM_NOW = 486;
    static readonly KW_FROM_TIMESTAMP = 487;
    static readonly KW_GENERATED = 488;
    static readonly KW_HOP = 489;
    static readonly KW_HOURS = 490;
    static readonly KW_IGNORE = 491;
    static readonly KW_INCLUDING = 492;
    static readonly KW_INPUT = 493;
    static readonly KW_JAR = 494;
    static readonly KW_JARS = 495;
    static readonly KW_JAVA = 496;
    static readonly KW_JOB = 497;
    static readonly KW_JOBS = 498;
    static readonly KW_KEY = 499;
    static readonly KW_LAST = 500;
    static readonly KW_LOAD = 501;
    static readonly KW_MAP = 502;
    static readonly KW_MICROSECOND = 503;
    static readonly KW_MILLENNIUM = 504;
    static readonly KW_MILLISECOND = 505;
    static readonly KW_MINUTES = 506;
    static readonly KW_MODEL = 507;
    static readonly KW_MONTHS = 508;
    static readonly KW_NANOSECOND = 509;
    static readonly KW_NOTHING = 510;
    static readonly KW_NULLS = 511;
    static readonly KW_OPTIONS = 512;
    static readonly KW_ORDINALITY = 513;
    static readonly KW_OUTPUT = 514;
    static readonly KW_PAST = 515;
    static readonly KW_PLAN = 516;
    static readonly KW_PLAN_ADVICE = 517;
    static readonly KW_PRECEDING = 518;
    static readonly KW_PYTHON = 519;
    static readonly KW_PYTHON_ARCHIVES = 520;
    static readonly KW_PYTHON_DEPENDENCIES = 521;
    static readonly KW_PYTHON_FILES = 522;
    static readonly KW_PYTHON_JAR = 523;
    static readonly KW_PYTHON_PARAMETER = 524;
    static readonly KW_PYTHON_REQUIREMENTS = 525;
    static readonly KW_QUARTER = 526;
    static readonly KW_REMOVE = 527;
    static readonly KW_REPLACE = 528;
    static readonly KW_RESPECT = 529;
    static readonly KW_RESTRICT = 530;
    static readonly KW_RESUME_OR_FROM_BEGINNING = 531;
    static readonly KW_RESUME_OR_FROM_NOW = 532;
    static readonly KW_RESUME_OR_FROM_TIMESTAMP = 533;
    static readonly KW_SECONDS = 534;
    static readonly KW_SESSION = 535;
    static readonly KW_SETS = 536;
    static readonly KW_SIZE = 537;
    static readonly KW_SLIDE = 538;
    static readonly KW_START_MODE = 539;
    static readonly KW_STEP = 540;
    static readonly KW_STOP = 541;
    static readonly KW_TEMPORARY = 542;
    static readonly KW_TIMECOL = 543;
    static readonly KW_TUMBLE = 544;
    static readonly KW_UNLOAD = 545;
    static readonly KW_VARIANT = 546;
    static readonly KW_VIEW = 547;
    static readonly KW_WEEK = 548;
    static readonly KW_YEARS = 549;
    static readonly KW_ZONE = 550;
    static readonly EQUAL_SYMBOL = 551;
    static readonly GREATER_SYMBOL = 552;
    static readonly LESS_SYMBOL = 553;
    static readonly EXCLAMATION_SYMBOL = 554;
    static readonly BIT_NOT_OP = 555;
    static readonly BIT_OR_OP = 556;
    static readonly BIT_AND_OP = 557;
    static readonly BIT_XOR_OP = 558;
    static readonly DOT = 559;
    static readonly LS_BRACKET = 560;
    static readonly RS_BRACKET = 561;
    static readonly LR_BRACKET = 562;
    static readonly RR_BRACKET = 563;
    static readonly LB_BRACKET = 564;
    static readonly RB_BRACKET = 565;
    static readonly COMMA = 566;
    static readonly SEMICOLON = 567;
    static readonly AT_SIGN = 568;
    static readonly SINGLE_QUOTE_SYMB = 569;
    static readonly DOUBLE_QUOTE_SYMB = 570;
    static readonly REVERSE_QUOTE_SYMB = 571;
    static readonly COLON_SYMB = 572;
    static readonly ASTERISK_SIGN = 573;
    static readonly UNDERLINE_SIGN = 574;
    static readonly HYPHEN_SIGN = 575;
    static readonly ADD_SIGN = 576;
    static readonly PERCENT_SIGN = 577;
    static readonly DOUBLE_VERTICAL_SIGN = 578;
    static readonly DOUBLE_HYPHEN_SIGN = 579;
    static readonly SLASH_SIGN = 580;
    static readonly QUESTION_MARK_SIGN = 581;
    static readonly DOUBLE_RIGHT_ARROW = 582;
    static readonly STRING_LITERAL = 583;
    static readonly DIG_LITERAL = 584;
    static readonly REAL_LITERAL = 585;
    static readonly BIT_STRING = 586;
    static readonly ID_LITERAL = 587;
    static readonly RULE_program = 0;
    static readonly RULE_singleStatement = 1;
    static readonly RULE_sqlStatement = 2;
    static readonly RULE_ddlStatement = 3;
    static readonly RULE_dmlStatement = 4;
    static readonly RULE_executeQueryStatement = 5;
    static readonly RULE_describeStatement = 6;
    static readonly RULE_explainStatement = 7;
    static readonly RULE_explainDetails = 8;
    static readonly RULE_explainDetail = 9;
    static readonly RULE_useStatement = 10;
    static readonly RULE_useModuleStatement = 11;
    static readonly RULE_showStatement = 12;
    static readonly RULE_showLikePredicate = 13;
    static readonly RULE_partitionSpec = 14;
    static readonly RULE_stopJobStatement = 15;
    static readonly RULE_truncateTableStatement = 16;
    static readonly RULE_analyzeTableStatement = 17;
    static readonly RULE_compilePlanStatement = 18;
    static readonly RULE_executePlanStatement = 19;
    static readonly RULE_loadStatement = 20;
    static readonly RULE_unloadStatement = 21;
    static readonly RULE_setStatement = 22;
    static readonly RULE_resetStatement = 23;
    static readonly RULE_jarStatement = 24;
    static readonly RULE_dtAddStatement = 25;
    static readonly RULE_dtFilePath = 26;
    static readonly RULE_createTable = 27;
    static readonly RULE_simpleCreateTable = 28;
    static readonly RULE_createTableAsSelect = 29;
    static readonly RULE_tableElement = 30;
    static readonly RULE_tableColumnsOrIdentifiers = 31;
    static readonly RULE_partitionedByClause = 32;
    static readonly RULE_distribution = 33;
    static readonly RULE_distributionSpec = 34;
    static readonly RULE_columnOptionDefinition = 35;
    static readonly RULE_physicalColumnDefinition = 36;
    static readonly RULE_columnNameCreate = 37;
    static readonly RULE_emptyColumn = 38;
    static readonly RULE_columnName = 39;
    static readonly RULE_columnNamePath = 40;
    static readonly RULE_columnNamePathAllowEmpty = 41;
    static readonly RULE_columnNameList = 42;
    static readonly RULE_columnType = 43;
    static readonly RULE_nestedColumnType = 44;
    static readonly RULE_lengthOneDimension = 45;
    static readonly RULE_lengthTwoOptionalDimension = 46;
    static readonly RULE_lengthTwoStringDimension = 47;
    static readonly RULE_lengthOneTypeDimension = 48;
    static readonly RULE_mapTypeDimension = 49;
    static readonly RULE_rowTypeDimension = 50;
    static readonly RULE_rowTypeField = 51;
    static readonly RULE_columnConstraint = 52;
    static readonly RULE_metadataColumnDefinition = 53;
    static readonly RULE_computedColumnDefinition = 54;
    static readonly RULE_watermarkDefinition = 55;
    static readonly RULE_tableConstraint = 56;
    static readonly RULE_constraintName = 57;
    static readonly RULE_selfDefinitionClause = 58;
    static readonly RULE_transform = 59;
    static readonly RULE_transformArgument = 60;
    static readonly RULE_likeDefinition = 61;
    static readonly RULE_likeOption = 62;
    static readonly RULE_createCatalog = 63;
    static readonly RULE_createDatabase = 64;
    static readonly RULE_createModel = 65;
    static readonly RULE_createConnection = 66;
    static readonly RULE_createMaterializedTable = 67;
    static readonly RULE_materializedTableStartMode = 68;
    static readonly RULE_createView = 69;
    static readonly RULE_createFunction = 70;
    static readonly RULE_usingClause = 71;
    static readonly RULE_resourceInfo = 72;
    static readonly RULE_alterTable = 73;
    static readonly RULE_alterTableAdd = 74;
    static readonly RULE_alterTableModify = 75;
    static readonly RULE_alterTableSchemaChange = 76;
    static readonly RULE_columnPosition = 77;
    static readonly RULE_alterTableDrop = 78;
    static readonly RULE_propertyKeyList = 79;
    static readonly RULE_alterMaterializedTable = 80;
    static readonly RULE_alterModel = 81;
    static readonly RULE_alterConnection = 82;
    static readonly RULE_renameDefinition = 83;
    static readonly RULE_setKeyValueDefinition = 84;
    static readonly RULE_addConstraint = 85;
    static readonly RULE_dropConstraint = 86;
    static readonly RULE_addUnique = 87;
    static readonly RULE_alterCatalog = 88;
    static readonly RULE_alterView = 89;
    static readonly RULE_alterDatabase = 90;
    static readonly RULE_alterFunction = 91;
    static readonly RULE_dropCatalog = 92;
    static readonly RULE_dropTable = 93;
    static readonly RULE_dropDatabase = 94;
    static readonly RULE_dropView = 95;
    static readonly RULE_dropFunction = 96;
    static readonly RULE_dropModel = 97;
    static readonly RULE_dropConnection = 98;
    static readonly RULE_dropMaterializedTable = 99;
    static readonly RULE_insertStatement = 100;
    static readonly RULE_insertSimpleStatement = 101;
    static readonly RULE_insertExtendedColumns = 102;
    static readonly RULE_onConflictClause = 103;
    static readonly RULE_valuesDefinition = 104;
    static readonly RULE_valuesRowDefinition = 105;
    static readonly RULE_valueDefinition = 106;
    static readonly RULE_insertMulStatementCompatibility = 107;
    static readonly RULE_insertMulStatement = 108;
    static readonly RULE_queryStatement = 109;
    static readonly RULE_valuesClause = 110;
    static readonly RULE_withClause = 111;
    static readonly RULE_withItem = 112;
    static readonly RULE_selectStatement = 113;
    static readonly RULE_selectClause = 114;
    static readonly RULE_selectList = 115;
    static readonly RULE_columnProjectItem = 116;
    static readonly RULE_selectWindowItemColumnName = 117;
    static readonly RULE_selectExpressionColumnName = 118;
    static readonly RULE_selectLiteralColumnName = 119;
    static readonly RULE_columnAlias = 120;
    static readonly RULE_projectItemDefinition = 121;
    static readonly RULE_tableAllColumns = 122;
    static readonly RULE_overWindowItem = 123;
    static readonly RULE_fromClause = 124;
    static readonly RULE_tableExpression = 125;
    static readonly RULE_tableReference = 126;
    static readonly RULE_tablePrimary = 127;
    static readonly RULE_atomFunctionTable = 128;
    static readonly RULE_tableFunctionCall = 129;
    static readonly RULE_atomExpressionTable = 130;
    static readonly RULE_systemTimePeriod = 131;
    static readonly RULE_inlineDataValueClause = 132;
    static readonly RULE_windowTVFClause = 133;
    static readonly RULE_windowTVFExpression = 134;
    static readonly RULE_windowTVFName = 135;
    static readonly RULE_windowTVFParam = 136;
    static readonly RULE_timeIntervalParamName = 137;
    static readonly RULE_columnDescriptor = 138;
    static readonly RULE_joinCondition = 139;
    static readonly RULE_whereClause = 140;
    static readonly RULE_groupByClause = 141;
    static readonly RULE_groupItemDefinition = 142;
    static readonly RULE_groupWindowFunction = 143;
    static readonly RULE_groupWindowFunctionName = 144;
    static readonly RULE_havingClause = 145;
    static readonly RULE_windowClause = 146;
    static readonly RULE_namedWindow = 147;
    static readonly RULE_windowSpec = 148;
    static readonly RULE_matchRecognizeClause = 149;
    static readonly RULE_orderByClause = 150;
    static readonly RULE_orderItemDefinition = 151;
    static readonly RULE_limitClause = 152;
    static readonly RULE_partitionByClause = 153;
    static readonly RULE_quantifiers = 154;
    static readonly RULE_measuresClause = 155;
    static readonly RULE_patternDefinition = 156;
    static readonly RULE_patternVariable = 157;
    static readonly RULE_outputMode = 158;
    static readonly RULE_afterMatchStrategy = 159;
    static readonly RULE_patternVariablesDefinition = 160;
    static readonly RULE_windowFrame = 161;
    static readonly RULE_frameBound = 162;
    static readonly RULE_frameStart = 163;
    static readonly RULE_frameEnd = 164;
    static readonly RULE_withinClause = 165;
    static readonly RULE_expression = 166;
    static readonly RULE_booleanExpression = 167;
    static readonly RULE_predicate = 168;
    static readonly RULE_jsonFunctionBranch = 169;
    static readonly RULE_likePredicate = 170;
    static readonly RULE_valueExpression = 171;
    static readonly RULE_functionCallExpression = 172;
    static readonly RULE_primaryExpression = 173;
    static readonly RULE_functionNameCreate = 174;
    static readonly RULE_functionName = 175;
    static readonly RULE_functionNameAndParams = 176;
    static readonly RULE_functionNameWithParams = 177;
    static readonly RULE_functionParam = 178;
    static readonly RULE_jsonValueParams = 179;
    static readonly RULE_jsonQueryParams = 180;
    static readonly RULE_jsonObjectParams = 181;
    static readonly RULE_jsonArrayParams = 182;
    static readonly RULE_dereferenceDefinition = 183;
    static readonly RULE_qualifiedName = 184;
    static readonly RULE_timeIntervalExpression = 185;
    static readonly RULE_errorCapturingMultiUnitsInterval = 186;
    static readonly RULE_multiUnitsInterval = 187;
    static readonly RULE_errorCapturingUnitToUnitInterval = 188;
    static readonly RULE_unitToUnitInterval = 189;
    static readonly RULE_intervalValue = 190;
    static readonly RULE_tableAlias = 191;
    static readonly RULE_errorCapturingIdentifier = 192;
    static readonly RULE_errorCapturingIdentifierExtra = 193;
    static readonly RULE_identifierList = 194;
    static readonly RULE_identifierSeq = 195;
    static readonly RULE_identifier = 196;
    static readonly RULE_unquotedIdentifier = 197;
    static readonly RULE_quotedIdentifier = 198;
    static readonly RULE_whenClause = 199;
    static readonly RULE_catalogPath = 200;
    static readonly RULE_catalogPathCreate = 201;
    static readonly RULE_databasePath = 202;
    static readonly RULE_databasePathCreate = 203;
    static readonly RULE_tablePathCreate = 204;
    static readonly RULE_tablePath = 205;
    static readonly RULE_viewPath = 206;
    static readonly RULE_viewPathCreate = 207;
    static readonly RULE_uid = 208;
    static readonly RULE_uidAllowEmpty = 209;
    static readonly RULE_withOption = 210;
    static readonly RULE_ifNotExists = 211;
    static readonly RULE_ifExists = 212;
    static readonly RULE_tablePropertyList = 213;
    static readonly RULE_tableProperty = 214;
    static readonly RULE_tablePropertyKey = 215;
    static readonly RULE_tablePropertyValue = 216;
    static readonly RULE_logicalOperator = 217;
    static readonly RULE_comparisonOperator = 218;
    static readonly RULE_bitOperator = 219;
    static readonly RULE_mathOperator = 220;
    static readonly RULE_unaryOperator = 221;
    static readonly RULE_constant = 222;
    static readonly RULE_timePointLiteral = 223;
    static readonly RULE_stringLiteral = 224;
    static readonly RULE_decimalLiteral = 225;
    static readonly RULE_booleanLiteral = 226;
    static readonly RULE_setQuantifier = 227;
    static readonly RULE_timePointUnit = 228;
    static readonly RULE_timeIntervalUnit = 229;
    static readonly RULE_reservedKeywordsUsedAsFuncParam = 230;
    static readonly RULE_reservedKeywordsNoParamsUsedAsFuncName = 231;
    static readonly RULE_reservedKeywordsFollowParamsUsedAsFuncName = 232;
    static readonly RULE_reservedKeywordsUsedAsFuncName = 233;
    static readonly RULE_nonReservedKeywords = 234;
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
    singleStatement(): SingleStatementContext;
    sqlStatement(): SqlStatementContext;
    ddlStatement(): DdlStatementContext;
    dmlStatement(): DmlStatementContext;
    executeQueryStatement(): ExecuteQueryStatementContext;
    describeStatement(): DescribeStatementContext;
    explainStatement(): ExplainStatementContext;
    explainDetails(): ExplainDetailsContext;
    explainDetail(): ExplainDetailContext;
    useStatement(): UseStatementContext;
    useModuleStatement(): UseModuleStatementContext;
    showStatement(): ShowStatementContext;
    showLikePredicate(): ShowLikePredicateContext;
    partitionSpec(): PartitionSpecContext;
    stopJobStatement(): StopJobStatementContext;
    truncateTableStatement(): TruncateTableStatementContext;
    analyzeTableStatement(): AnalyzeTableStatementContext;
    compilePlanStatement(): CompilePlanStatementContext;
    executePlanStatement(): ExecutePlanStatementContext;
    loadStatement(): LoadStatementContext;
    unloadStatement(): UnloadStatementContext;
    setStatement(): SetStatementContext;
    resetStatement(): ResetStatementContext;
    jarStatement(): JarStatementContext;
    dtAddStatement(): DtAddStatementContext;
    dtFilePath(): DtFilePathContext;
    createTable(): CreateTableContext;
    simpleCreateTable(): SimpleCreateTableContext;
    createTableAsSelect(): CreateTableAsSelectContext;
    tableElement(): TableElementContext;
    tableColumnsOrIdentifiers(): TableColumnsOrIdentifiersContext;
    partitionedByClause(): PartitionedByClauseContext;
    distribution(): DistributionContext;
    distributionSpec(): DistributionSpecContext;
    columnOptionDefinition(): ColumnOptionDefinitionContext;
    physicalColumnDefinition(): PhysicalColumnDefinitionContext;
    columnNameCreate(): ColumnNameCreateContext;
    emptyColumn(): EmptyColumnContext;
    columnName(): ColumnNameContext;
    columnNamePath(): ColumnNamePathContext;
    columnNamePathAllowEmpty(): ColumnNamePathAllowEmptyContext;
    columnNameList(): ColumnNameListContext;
    columnType(): ColumnTypeContext;
    columnType(_p: number): ColumnTypeContext;
    nestedColumnType(): NestedColumnTypeContext;
    lengthOneDimension(): LengthOneDimensionContext;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext;
    lengthTwoStringDimension(): LengthTwoStringDimensionContext;
    lengthOneTypeDimension(): LengthOneTypeDimensionContext;
    mapTypeDimension(): MapTypeDimensionContext;
    rowTypeDimension(): RowTypeDimensionContext;
    rowTypeField(): RowTypeFieldContext;
    columnConstraint(): ColumnConstraintContext;
    metadataColumnDefinition(): MetadataColumnDefinitionContext;
    computedColumnDefinition(): ComputedColumnDefinitionContext;
    watermarkDefinition(): WatermarkDefinitionContext;
    tableConstraint(): TableConstraintContext;
    constraintName(): ConstraintNameContext;
    selfDefinitionClause(): SelfDefinitionClauseContext;
    transform(): TransformContext;
    transformArgument(): TransformArgumentContext;
    likeDefinition(): LikeDefinitionContext;
    likeOption(): LikeOptionContext;
    createCatalog(): CreateCatalogContext;
    createDatabase(): CreateDatabaseContext;
    createModel(): CreateModelContext;
    createConnection(): CreateConnectionContext;
    createMaterializedTable(): CreateMaterializedTableContext;
    materializedTableStartMode(): MaterializedTableStartModeContext;
    createView(): CreateViewContext;
    createFunction(): CreateFunctionContext;
    usingClause(): UsingClauseContext;
    resourceInfo(): ResourceInfoContext;
    alterTable(): AlterTableContext;
    alterTableAdd(): AlterTableAddContext;
    alterTableModify(): AlterTableModifyContext;
    alterTableSchemaChange(): AlterTableSchemaChangeContext;
    columnPosition(): ColumnPositionContext;
    alterTableDrop(): AlterTableDropContext;
    propertyKeyList(): PropertyKeyListContext;
    alterMaterializedTable(): AlterMaterializedTableContext;
    alterModel(): AlterModelContext;
    alterConnection(): AlterConnectionContext;
    renameDefinition(): RenameDefinitionContext;
    setKeyValueDefinition(): SetKeyValueDefinitionContext;
    addConstraint(): AddConstraintContext;
    dropConstraint(): DropConstraintContext;
    addUnique(): AddUniqueContext;
    alterCatalog(): AlterCatalogContext;
    alterView(): AlterViewContext;
    alterDatabase(): AlterDatabaseContext;
    alterFunction(): AlterFunctionContext;
    dropCatalog(): DropCatalogContext;
    dropTable(): DropTableContext;
    dropDatabase(): DropDatabaseContext;
    dropView(): DropViewContext;
    dropFunction(): DropFunctionContext;
    dropModel(): DropModelContext;
    dropConnection(): DropConnectionContext;
    dropMaterializedTable(): DropMaterializedTableContext;
    insertStatement(): InsertStatementContext;
    insertSimpleStatement(): InsertSimpleStatementContext;
    insertExtendedColumns(): InsertExtendedColumnsContext;
    onConflictClause(): OnConflictClauseContext;
    valuesDefinition(): ValuesDefinitionContext;
    valuesRowDefinition(): ValuesRowDefinitionContext;
    valueDefinition(): ValueDefinitionContext;
    insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext;
    insertMulStatement(): InsertMulStatementContext;
    queryStatement(): QueryStatementContext;
    queryStatement(_p: number): QueryStatementContext;
    valuesClause(): ValuesClauseContext;
    withClause(): WithClauseContext;
    withItem(): WithItemContext;
    selectStatement(): SelectStatementContext;
    selectClause(): SelectClauseContext;
    selectList(): SelectListContext;
    columnProjectItem(): ColumnProjectItemContext;
    selectWindowItemColumnName(): SelectWindowItemColumnNameContext;
    selectExpressionColumnName(): SelectExpressionColumnNameContext;
    selectLiteralColumnName(): SelectLiteralColumnNameContext;
    columnAlias(): ColumnAliasContext;
    projectItemDefinition(): ProjectItemDefinitionContext;
    tableAllColumns(): TableAllColumnsContext;
    overWindowItem(): OverWindowItemContext;
    fromClause(): FromClauseContext;
    tableExpression(): TableExpressionContext;
    tableExpression(_p: number): TableExpressionContext;
    tableReference(): TableReferenceContext;
    tablePrimary(): TablePrimaryContext;
    atomFunctionTable(): AtomFunctionTableContext;
    tableFunctionCall(): TableFunctionCallContext;
    atomExpressionTable(): AtomExpressionTableContext;
    systemTimePeriod(): SystemTimePeriodContext;
    inlineDataValueClause(): InlineDataValueClauseContext;
    windowTVFClause(): WindowTVFClauseContext;
    windowTVFExpression(): WindowTVFExpressionContext;
    windowTVFName(): WindowTVFNameContext;
    windowTVFParam(): WindowTVFParamContext;
    timeIntervalParamName(): TimeIntervalParamNameContext;
    columnDescriptor(): ColumnDescriptorContext;
    joinCondition(): JoinConditionContext;
    whereClause(): WhereClauseContext;
    groupByClause(): GroupByClauseContext;
    groupItemDefinition(): GroupItemDefinitionContext;
    groupWindowFunction(): GroupWindowFunctionContext;
    groupWindowFunctionName(): GroupWindowFunctionNameContext;
    havingClause(): HavingClauseContext;
    windowClause(): WindowClauseContext;
    namedWindow(): NamedWindowContext;
    windowSpec(): WindowSpecContext;
    matchRecognizeClause(): MatchRecognizeClauseContext;
    orderByClause(): OrderByClauseContext;
    orderItemDefinition(): OrderItemDefinitionContext;
    limitClause(): LimitClauseContext;
    partitionByClause(): PartitionByClauseContext;
    quantifiers(): QuantifiersContext;
    measuresClause(): MeasuresClauseContext;
    patternDefinition(): PatternDefinitionContext;
    patternVariable(): PatternVariableContext;
    outputMode(): OutputModeContext;
    afterMatchStrategy(): AfterMatchStrategyContext;
    patternVariablesDefinition(): PatternVariablesDefinitionContext;
    windowFrame(): WindowFrameContext;
    frameBound(): FrameBoundContext;
    frameStart(): FrameStartContext;
    frameEnd(): FrameEndContext;
    withinClause(): WithinClauseContext;
    expression(): ExpressionContext;
    booleanExpression(): BooleanExpressionContext;
    booleanExpression(_p: number): BooleanExpressionContext;
    predicate(): PredicateContext;
    jsonFunctionBranch(): JsonFunctionBranchContext;
    likePredicate(): LikePredicateContext;
    valueExpression(): ValueExpressionContext;
    valueExpression(_p: number): ValueExpressionContext;
    functionCallExpression(): FunctionCallExpressionContext;
    primaryExpression(): PrimaryExpressionContext;
    primaryExpression(_p: number): PrimaryExpressionContext;
    functionNameCreate(): FunctionNameCreateContext;
    functionName(): FunctionNameContext;
    functionNameAndParams(): FunctionNameAndParamsContext;
    functionNameWithParams(): FunctionNameWithParamsContext;
    functionParam(): FunctionParamContext;
    jsonValueParams(): JsonValueParamsContext;
    jsonQueryParams(): JsonQueryParamsContext;
    jsonObjectParams(): JsonObjectParamsContext;
    jsonArrayParams(): JsonArrayParamsContext;
    dereferenceDefinition(): DereferenceDefinitionContext;
    qualifiedName(): QualifiedNameContext;
    timeIntervalExpression(): TimeIntervalExpressionContext;
    errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext;
    multiUnitsInterval(): MultiUnitsIntervalContext;
    errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext;
    unitToUnitInterval(): UnitToUnitIntervalContext;
    intervalValue(): IntervalValueContext;
    tableAlias(): TableAliasContext;
    errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
    errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
    identifierList(): IdentifierListContext;
    identifierSeq(): IdentifierSeqContext;
    identifier(): IdentifierContext;
    unquotedIdentifier(): UnquotedIdentifierContext;
    quotedIdentifier(): QuotedIdentifierContext;
    whenClause(): WhenClauseContext;
    catalogPath(): CatalogPathContext;
    catalogPathCreate(): CatalogPathCreateContext;
    databasePath(): DatabasePathContext;
    databasePathCreate(): DatabasePathCreateContext;
    tablePathCreate(): TablePathCreateContext;
    tablePath(): TablePathContext;
    viewPath(): ViewPathContext;
    viewPathCreate(): ViewPathCreateContext;
    uid(): UidContext;
    uidAllowEmpty(): UidAllowEmptyContext;
    withOption(): WithOptionContext;
    ifNotExists(): IfNotExistsContext;
    ifExists(): IfExistsContext;
    tablePropertyList(): TablePropertyListContext;
    tableProperty(): TablePropertyContext;
    tablePropertyKey(): TablePropertyKeyContext;
    tablePropertyValue(): TablePropertyValueContext;
    logicalOperator(): LogicalOperatorContext;
    comparisonOperator(): ComparisonOperatorContext;
    bitOperator(): BitOperatorContext;
    mathOperator(): MathOperatorContext;
    unaryOperator(): UnaryOperatorContext;
    constant(): ConstantContext;
    timePointLiteral(): TimePointLiteralContext;
    stringLiteral(): StringLiteralContext;
    decimalLiteral(): DecimalLiteralContext;
    booleanLiteral(): BooleanLiteralContext;
    setQuantifier(): SetQuantifierContext;
    timePointUnit(): TimePointUnitContext;
    timeIntervalUnit(): TimeIntervalUnitContext;
    reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext;
    reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext;
    reservedKeywordsFollowParamsUsedAsFuncName(): ReservedKeywordsFollowParamsUsedAsFuncNameContext;
    reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext;
    nonReservedKeywords(): NonReservedKeywordsContext;
    sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean;
    private columnName_sempred;
    private columnNamePathAllowEmpty_sempred;
    private columnType_sempred;
    private queryStatement_sempred;
    private columnProjectItem_sempred;
    private tableExpression_sempred;
    private booleanExpression_sempred;
    private valueExpression_sempred;
    private primaryExpression_sempred;
    private uidAllowEmpty_sempred;
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
    singleStatement(): SingleStatementContext[];
    singleStatement(i: number): SingleStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SingleStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    sqlStatement(): SqlStatementContext | null;
    SEMICOLON(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SqlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ddlStatement(): DdlStatementContext | null;
    dmlStatement(): DmlStatementContext | null;
    describeStatement(): DescribeStatementContext | null;
    explainStatement(): ExplainStatementContext | null;
    useStatement(): UseStatementContext | null;
    showStatement(): ShowStatementContext | null;
    loadStatement(): LoadStatementContext | null;
    unloadStatement(): UnloadStatementContext | null;
    setStatement(): SetStatementContext | null;
    resetStatement(): ResetStatementContext | null;
    jarStatement(): JarStatementContext | null;
    dtAddStatement(): DtAddStatementContext | null;
    stopJobStatement(): StopJobStatementContext | null;
    truncateTableStatement(): TruncateTableStatementContext | null;
    analyzeTableStatement(): AnalyzeTableStatementContext | null;
    compilePlanStatement(): CompilePlanStatementContext | null;
    executePlanStatement(): ExecutePlanStatementContext | null;
    KW_BEGIN(): antlr.TerminalNode | null;
    KW_STATEMENT(): antlr.TerminalNode | null;
    KW_SET(): antlr.TerminalNode | null;
    KW_END(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DdlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    createTable(): CreateTableContext | null;
    createDatabase(): CreateDatabaseContext | null;
    createView(): CreateViewContext | null;
    createFunction(): CreateFunctionContext | null;
    createCatalog(): CreateCatalogContext | null;
    createModel(): CreateModelContext | null;
    createConnection(): CreateConnectionContext | null;
    createMaterializedTable(): CreateMaterializedTableContext | null;
    alterCatalog(): AlterCatalogContext | null;
    alterTable(): AlterTableContext | null;
    alterMaterializedTable(): AlterMaterializedTableContext | null;
    alterModel(): AlterModelContext | null;
    alterConnection(): AlterConnectionContext | null;
    alterView(): AlterViewContext | null;
    alterDatabase(): AlterDatabaseContext | null;
    alterFunction(): AlterFunctionContext | null;
    dropCatalog(): DropCatalogContext | null;
    dropTable(): DropTableContext | null;
    dropDatabase(): DropDatabaseContext | null;
    dropView(): DropViewContext | null;
    dropFunction(): DropFunctionContext | null;
    dropModel(): DropModelContext | null;
    dropConnection(): DropConnectionContext | null;
    dropMaterializedTable(): DropMaterializedTableContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DmlStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    queryStatement(): QueryStatementContext | null;
    insertStatement(): InsertStatementContext | null;
    executeQueryStatement(): ExecuteQueryStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExecuteQueryStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_EXECUTE(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DescribeStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CATALOG(): antlr.TerminalNode | null;
    catalogPath(): CatalogPathContext | null;
    KW_DESCRIBE(): antlr.TerminalNode | null;
    KW_DESC(): antlr.TerminalNode | null;
    KW_EXTENDED(): antlr.TerminalNode | null;
    KW_DATABASE(): antlr.TerminalNode | null;
    databasePath(): DatabasePathContext | null;
    KW_FUNCTION(): antlr.TerminalNode | null;
    functionName(): FunctionNameContext | null;
    uid(): UidContext | null;
    KW_MODEL(): antlr.TerminalNode | null;
    KW_CONNECTION(): antlr.TerminalNode | null;
    KW_JOB(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    tablePath(): TablePathContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_EXPLAIN(): antlr.TerminalNode;
    dmlStatement(): DmlStatementContext | null;
    insertSimpleStatement(): InsertSimpleStatementContext | null;
    insertMulStatement(): InsertMulStatementContext | null;
    createTable(): CreateTableContext | null;
    explainDetails(): ExplainDetailsContext | null;
    KW_PLAN(): antlr.TerminalNode | null;
    KW_FOR(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainDetailsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    explainDetail(): ExplainDetailContext[];
    explainDetail(i: number): ExplainDetailContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExplainDetailContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CHANGELOG_MODE(): antlr.TerminalNode | null;
    KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode | null;
    KW_ESTIMATED_COST(): antlr.TerminalNode | null;
    KW_PLAN_ADVICE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UseStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_USE(): antlr.TerminalNode | null;
    KW_CATALOG(): antlr.TerminalNode | null;
    catalogPath(): CatalogPathContext | null;
    databasePath(): DatabasePathContext | null;
    useModuleStatement(): UseModuleStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UseModuleStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_USE(): antlr.TerminalNode;
    KW_MODULES(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_SHOW(): antlr.TerminalNode;
    KW_CATALOGS(): antlr.TerminalNode | null;
    showLikePredicate(): ShowLikePredicateContext | null;
    KW_CURRENT(): antlr.TerminalNode | null;
    KW_CATALOG(): antlr.TerminalNode | null;
    KW_DATABASE(): antlr.TerminalNode | null;
    KW_DATABASES(): antlr.TerminalNode | null;
    catalogPath(): CatalogPathContext | null;
    KW_FROM(): antlr.TerminalNode | null;
    KW_IN(): antlr.TerminalNode | null;
    KW_TABLES(): antlr.TerminalNode | null;
    KW_VIEWS(): antlr.TerminalNode | null;
    KW_MATERIALIZED(): antlr.TerminalNode | null;
    databasePath(): DatabasePathContext | null;
    KW_COLUMNS(): antlr.TerminalNode | null;
    viewPath(): ViewPathContext | null;
    tablePath(): TablePathContext | null;
    KW_CREATE(): antlr.TerminalNode | null;
    KW_TABLE(): antlr.TerminalNode | null;
    KW_VIEW(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    KW_MODEL(): antlr.TerminalNode | null;
    KW_CONNECTION(): antlr.TerminalNode | null;
    KW_OR(): antlr.TerminalNode | null;
    KW_ALTER(): antlr.TerminalNode | null;
    KW_FUNCTIONS(): antlr.TerminalNode | null;
    KW_USER(): antlr.TerminalNode | null;
    KW_PROCEDURES(): antlr.TerminalNode | null;
    KW_MODELS(): antlr.TerminalNode | null;
    KW_CONNECTIONS(): antlr.TerminalNode | null;
    KW_PARTITIONS(): antlr.TerminalNode | null;
    partitionSpec(): PartitionSpecContext | null;
    KW_MODULES(): antlr.TerminalNode | null;
    KW_FULL(): antlr.TerminalNode | null;
    KW_JOBS(): antlr.TerminalNode | null;
    KW_JARS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ShowLikePredicateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode;
    KW_LIKE(): antlr.TerminalNode | null;
    KW_ILIKE(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionSpecContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PARTITION(): antlr.TerminalNode;
    tablePropertyList(): TablePropertyListContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class StopJobStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_STOP(): antlr.TerminalNode;
    KW_JOB(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    KW_WITH(): antlr.TerminalNode[];
    KW_WITH(i: number): antlr.TerminalNode | null;
    KW_SAVEPOINT(): antlr.TerminalNode | null;
    KW_DRAIN(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TruncateTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TRUNCATE(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AnalyzeTableStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ANALYZE(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    KW_COMPUTE(): antlr.TerminalNode;
    KW_STATISTICS(): antlr.TerminalNode;
    partitionSpec(): PartitionSpecContext | null;
    KW_FOR(): antlr.TerminalNode | null;
    KW_COLUMNS(): antlr.TerminalNode | null;
    columnName(): ColumnNameContext[];
    columnName(i: number): ColumnNameContext | null;
    KW_ALL(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CompilePlanStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_COMPILE(): antlr.TerminalNode;
    KW_PLAN(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    KW_FOR(): antlr.TerminalNode;
    insertMulStatement(): InsertMulStatementContext | null;
    insertSimpleStatement(): InsertSimpleStatementContext | null;
    KW_AND(): antlr.TerminalNode | null;
    KW_EXECUTE(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExecutePlanStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_EXECUTE(): antlr.TerminalNode;
    KW_PLAN(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LoadStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_LOAD(): antlr.TerminalNode;
    KW_MODULE(): antlr.TerminalNode;
    uid(): UidContext;
    KW_WITH(): antlr.TerminalNode | null;
    tablePropertyList(): TablePropertyListContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnloadStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_UNLOAD(): antlr.TerminalNode;
    KW_MODULE(): antlr.TerminalNode;
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SetStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_SET(): antlr.TerminalNode;
    tableProperty(): TablePropertyContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ResetStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_RESET(): antlr.TerminalNode;
    tablePropertyKey(): TablePropertyKeyContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JarStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_JAR(): antlr.TerminalNode;
    STRING_LITERAL(): antlr.TerminalNode;
    KW_ADD(): antlr.TerminalNode | null;
    KW_REMOVE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DtAddStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ADD(): antlr.TerminalNode;
    KW_JAR(): antlr.TerminalNode | null;
    KW_WITH(): antlr.TerminalNode | null;
    dtFilePath(): DtFilePathContext;
    KW_AS(): antlr.TerminalNode | null;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    KW_FILE(): antlr.TerminalNode | null;
    KW_RENAME(): antlr.TerminalNode | null;
    KW_PYTHON_FILES(): antlr.TerminalNode | null;
    KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null;
    KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null;
    KW_PYTHON_JAR(): antlr.TerminalNode | null;
    KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null;
    KW_PYTHON_PARAMETER(): antlr.TerminalNode | null;
    KW_ENGINE(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    KW_CONFIG(): antlr.TerminalNode | null;
    KW_FOR(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DtFilePathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    SLASH_SIGN(): antlr.TerminalNode[];
    SLASH_SIGN(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    simpleCreateTable(): SimpleCreateTableContext | null;
    createTableAsSelect(): CreateTableAsSelectContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SimpleCreateTableContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePathCreate(): TablePathCreateContext;
    LR_BRACKET(): antlr.TerminalNode;
    tableElement(): TableElementContext[];
    tableElement(i: number): TableElementContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    distribution(): DistributionContext | null;
    partitionedByClause(): PartitionedByClauseContext | null;
    withOption(): WithOptionContext | null;
    likeDefinition(): LikeDefinitionContext | null;
    KW_AS(): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateTableAsSelectContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TABLE(): antlr.TerminalNode;
    tablePathCreate(): TablePathCreateContext;
    KW_CREATE(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    tableColumnsOrIdentifiers(): TableColumnsOrIdentifiersContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    distribution(): DistributionContext | null;
    partitionedByClause(): PartitionedByClauseContext | null;
    withOption(): WithOptionContext | null;
    likeDefinition(): LikeDefinitionContext | null;
    KW_AS(): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    KW_OR(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableElementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnOptionDefinition(): ColumnOptionDefinitionContext | null;
    watermarkDefinition(): WatermarkDefinitionContext | null;
    tableConstraint(): TableConstraintContext | null;
    selfDefinitionClause(): SelfDefinitionClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableColumnsOrIdentifiersContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableElement(): TableElementContext[];
    tableElement(i: number): TableElementContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    columnNameCreate(): ColumnNameCreateContext[];
    columnNameCreate(i: number): ColumnNameCreateContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionedByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PARTITIONED(): antlr.TerminalNode;
    KW_BY(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    transform(): TransformContext[];
    transform(i: number): TransformContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DistributionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DISTRIBUTED(): antlr.TerminalNode;
    distributionSpec(): DistributionSpecContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DistributionSpecContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_BY(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    columnName(): ColumnNameContext[];
    columnName(i: number): ColumnNameContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    KW_INTO(): antlr.TerminalNode | null;
    DIG_LITERAL(): antlr.TerminalNode | null;
    KW_BUCKETS(): antlr.TerminalNode | null;
    KW_HASH(): antlr.TerminalNode | null;
    KW_RANGE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnOptionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    physicalColumnDefinition(): PhysicalColumnDefinitionContext | null;
    metadataColumnDefinition(): MetadataColumnDefinitionContext | null;
    computedColumnDefinition(): ComputedColumnDefinitionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PhysicalColumnDefinitionContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNameCreate(): ColumnNameCreateContext;
    columnType(): ColumnTypeContext;
    columnConstraint(): ColumnConstraintContext[];
    columnConstraint(i: number): ColumnConstraintContext | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class EmptyColumnContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uidAllowEmpty(): UidAllowEmptyContext | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNamePathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNamePathAllowEmptyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uidAllowEmpty(): UidAllowEmptyContext | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnNameListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    columnName(): ColumnNameContext[];
    columnName(i: number): ColumnNameContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnTypeContext extends antlr.ParserRuleContext {
    _colType?: Token | null;
    _userDefinedType?: UidContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DATE(): antlr.TerminalNode | null;
    KW_BOOLEAN(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode | null;
    KW_CHAR(): antlr.TerminalNode | null;
    KW_VARCHAR(): antlr.TerminalNode | null;
    KW_STRING(): antlr.TerminalNode | null;
    KW_BINARY(): antlr.TerminalNode | null;
    KW_VARBINARY(): antlr.TerminalNode | null;
    KW_BYTES(): antlr.TerminalNode | null;
    KW_TINYINT(): antlr.TerminalNode | null;
    KW_SMALLINT(): antlr.TerminalNode | null;
    KW_INT(): antlr.TerminalNode | null;
    KW_INTEGER(): antlr.TerminalNode | null;
    KW_BIGINT(): antlr.TerminalNode | null;
    KW_TIME(): antlr.TerminalNode | null;
    KW_TIMESTAMP_LTZ(): antlr.TerminalNode | null;
    KW_DATETIME(): antlr.TerminalNode | null;
    lengthOneDimension(): LengthOneDimensionContext[];
    lengthOneDimension(i: number): LengthOneDimensionContext | null;
    KW_TIMESTAMP(): antlr.TerminalNode | null;
    KW_ZONE(): antlr.TerminalNode | null;
    KW_WITHOUT(): antlr.TerminalNode | null;
    KW_WITH(): antlr.TerminalNode | null;
    KW_LOCAL(): antlr.TerminalNode | null;
    KW_DECIMAL(): antlr.TerminalNode | null;
    KW_DEC(): antlr.TerminalNode | null;
    KW_NUMERIC(): antlr.TerminalNode | null;
    KW_FLOAT(): antlr.TerminalNode | null;
    KW_DOUBLE(): antlr.TerminalNode | null;
    KW_PRECISION(): antlr.TerminalNode | null;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | null;
    KW_ARRAY(): antlr.TerminalNode | null;
    KW_MULTISET(): antlr.TerminalNode | null;
    lengthOneTypeDimension(): LengthOneTypeDimensionContext | null;
    KW_MAP(): antlr.TerminalNode | null;
    mapTypeDimension(): MapTypeDimensionContext | null;
    KW_ROW(): antlr.TerminalNode | null;
    rowTypeDimension(): RowTypeDimensionContext | null;
    KW_RAW(): antlr.TerminalNode | null;
    lengthTwoStringDimension(): LengthTwoStringDimensionContext | null;
    KW_VARIANT(): antlr.TerminalNode | null;
    KW_BITMAP(): antlr.TerminalNode | null;
    timeIntervalUnit(): TimeIntervalUnitContext[];
    timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    KW_INTERVAL(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    LESS_SYMBOL(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    GREATER_SYMBOL(): antlr.TerminalNode | null;
    KW_STRUCTURED(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    rowTypeField(): RowTypeFieldContext[];
    rowTypeField(i: number): RowTypeFieldContext | null;
    uid(): UidContext | null;
    columnType(): ColumnTypeContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NestedColumnTypeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnType(): ColumnTypeContext;
    KW_NULL(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthOneDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthTwoStringDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    stringLiteral(): StringLiteralContext[];
    stringLiteral(i: number): StringLiteralContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LengthOneTypeDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LESS_SYMBOL(): antlr.TerminalNode;
    nestedColumnType(): NestedColumnTypeContext;
    GREATER_SYMBOL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MapTypeDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LESS_SYMBOL(): antlr.TerminalNode;
    nestedColumnType(): NestedColumnTypeContext[];
    nestedColumnType(i: number): NestedColumnTypeContext | null;
    GREATER_SYMBOL(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RowTypeDimensionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LESS_SYMBOL(): antlr.TerminalNode | null;
    rowTypeField(): RowTypeFieldContext[];
    rowTypeField(i: number): RowTypeFieldContext | null;
    GREATER_SYMBOL(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RowTypeFieldContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnName(): ColumnNameContext;
    nestedColumnType(): NestedColumnTypeContext;
    STRING_LITERAL(): antlr.TerminalNode | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PRIMARY(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    KW_UNIQUE(): antlr.TerminalNode | null;
    KW_CONSTRAINT(): antlr.TerminalNode | null;
    constraintName(): ConstraintNameContext | null;
    KW_ENFORCED(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MetadataColumnDefinitionContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNameCreate(): ColumnNameCreateContext;
    columnType(): ColumnTypeContext;
    KW_METADATA(): antlr.TerminalNode;
    KW_FROM(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode[];
    STRING_LITERAL(i: number): antlr.TerminalNode | null;
    KW_VIRTUAL(): antlr.TerminalNode | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComputedColumnDefinitionContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNameCreate(): ColumnNameCreateContext;
    KW_AS(): antlr.TerminalNode;
    expression(): ExpressionContext;
    KW_COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WatermarkDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WATERMARK(): antlr.TerminalNode;
    KW_FOR(): antlr.TerminalNode;
    columnName(): ColumnNameContext;
    KW_AS(): antlr.TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNameList(): ColumnNameListContext;
    KW_PRIMARY(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    KW_UNIQUE(): antlr.TerminalNode | null;
    KW_CONSTRAINT(): antlr.TerminalNode | null;
    constraintName(): ConstraintNameContext | null;
    KW_ENFORCED(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstraintNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelfDefinitionClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PERIOD(): antlr.TerminalNode;
    KW_FOR(): antlr.TerminalNode;
    KW_SYSTEM_TIME(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TransformContext): void;
}
export declare class IdentityTransformContext extends TransformContext {
    constructor(ctx: TransformContext);
    columnName(): ColumnNameContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ApplyTransformContext extends TransformContext {
    constructor(ctx: TransformContext);
    LR_BRACKET(): antlr.TerminalNode;
    transformArgument(): TransformArgumentContext[];
    transformArgument(i: number): TransformArgumentContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TransformArgumentContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    qualifiedName(): QualifiedNameContext | null;
    constant(): ConstantContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LikeDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_LIKE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    likeOption(): LikeOptionContext[];
    likeOption(i: number): LikeOptionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LikeOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_INCLUDING(): antlr.TerminalNode | null;
    KW_EXCLUDING(): antlr.TerminalNode | null;
    KW_OVERWRITING(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    KW_CONSTRAINTS(): antlr.TerminalNode | null;
    KW_DISTRIBUTION(): antlr.TerminalNode | null;
    KW_GENERATED(): antlr.TerminalNode | null;
    KW_METADATA(): antlr.TerminalNode | null;
    KW_OPTIONS(): antlr.TerminalNode | null;
    KW_PARTITIONS(): antlr.TerminalNode | null;
    KW_WATERMARKS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateCatalogContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_CATALOG(): antlr.TerminalNode;
    catalogPathCreate(): CatalogPathCreateContext;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    withOption(): WithOptionContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateDatabaseContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_DATABASE(): antlr.TerminalNode;
    databasePathCreate(): DatabasePathCreateContext;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    withOption(): WithOptionContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateModelContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_MODEL(): antlr.TerminalNode;
    uid(): UidContext;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    KW_INPUT(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    tableElement(): TableElementContext[];
    tableElement(i: number): TableElementContext | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    KW_OUTPUT(): antlr.TerminalNode | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    withOption(): WithOptionContext | null;
    KW_AS(): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateConnectionContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_CONNECTION(): antlr.TerminalNode;
    uid(): UidContext;
    withOption(): WithOptionContext;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_SYSTEM(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateMaterializedTableContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_MATERIALIZED(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePathCreate(): TablePathCreateContext;
    KW_AS(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    KW_OR(): antlr.TerminalNode | null;
    KW_ALTER(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    tableColumnsOrIdentifiers(): TableColumnsOrIdentifiersContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    distribution(): DistributionContext | null;
    partitionedByClause(): PartitionedByClauseContext | null;
    withOption(): WithOptionContext | null;
    KW_START_MODE(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode[];
    EQUAL_SYMBOL(i: number): antlr.TerminalNode | null;
    materializedTableStartMode(): MaterializedTableStartModeContext | null;
    KW_FRESHNESS(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    KW_REFRESH_MODE(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    KW_FULL(): antlr.TerminalNode | null;
    KW_CONTINUOUS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MaterializedTableStartModeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_FROM_BEGINNING(): antlr.TerminalNode | null;
    KW_RESUME_OR_FROM_BEGINNING(): antlr.TerminalNode | null;
    KW_FROM_NOW(): antlr.TerminalNode | null;
    KW_RESUME_OR_FROM_NOW(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    KW_FROM_TIMESTAMP(): antlr.TerminalNode | null;
    KW_RESUME_OR_FROM_TIMESTAMP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateViewContext extends antlr.ParserRuleContext {
    _comment?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_VIEW(): antlr.TerminalNode;
    viewPathCreate(): ViewPathCreateContext;
    KW_AS(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    columnNameList(): ColumnNameListContext | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CreateFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CREATE(): antlr.TerminalNode;
    KW_FUNCTION(): antlr.TerminalNode;
    functionNameCreate(): FunctionNameCreateContext;
    KW_AS(): antlr.TerminalNode;
    identifier(): IdentifierContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    KW_OR(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_SYSTEM(): antlr.TerminalNode | null;
    ifNotExists(): IfNotExistsContext | null;
    KW_LANGUAGE(): antlr.TerminalNode | null;
    usingClause(): UsingClauseContext | null;
    withOption(): WithOptionContext | null;
    KW_JAVA(): antlr.TerminalNode | null;
    KW_SCALA(): antlr.TerminalNode | null;
    KW_SQL(): antlr.TerminalNode | null;
    KW_PYTHON(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UsingClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_USING(): antlr.TerminalNode;
    resourceInfo(): ResourceInfoContext[];
    resourceInfo(i: number): ResourceInfoContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ResourceInfoContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode;
    KW_JAR(): antlr.TerminalNode | null;
    KW_ARTIFACT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    renameDefinition(): RenameDefinitionContext | null;
    setKeyValueDefinition(): SetKeyValueDefinitionContext | null;
    KW_RESET(): antlr.TerminalNode | null;
    propertyKeyList(): PropertyKeyListContext | null;
    addConstraint(): AddConstraintContext | null;
    dropConstraint(): DropConstraintContext | null;
    addUnique(): AddUniqueContext | null;
    alterTableAdd(): AlterTableAddContext | null;
    alterTableModify(): AlterTableModifyContext | null;
    alterTableDrop(): AlterTableDropContext | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableAddContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ADD(): antlr.TerminalNode;
    ifNotExists(): IfNotExistsContext | null;
    partitionSpec(): PartitionSpecContext[];
    partitionSpec(i: number): PartitionSpecContext | null;
    withOption(): WithOptionContext[];
    withOption(i: number): WithOptionContext | null;
    KW_DISTRIBUTION(): antlr.TerminalNode | null;
    distributionSpec(): DistributionSpecContext | null;
    alterTableSchemaChange(): AlterTableSchemaChangeContext[];
    alterTableSchemaChange(i: number): AlterTableSchemaChangeContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableModifyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_MODIFY(): antlr.TerminalNode;
    KW_DISTRIBUTION(): antlr.TerminalNode | null;
    distributionSpec(): DistributionSpecContext | null;
    alterTableSchemaChange(): AlterTableSchemaChangeContext[];
    alterTableSchemaChange(i: number): AlterTableSchemaChangeContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableSchemaChangeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnOptionDefinition(): ColumnOptionDefinitionContext | null;
    columnPosition(): ColumnPositionContext | null;
    tableConstraint(): TableConstraintContext | null;
    watermarkDefinition(): WatermarkDefinitionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnPositionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_AFTER(): antlr.TerminalNode | null;
    columnName(): ColumnNameContext | null;
    KW_FIRST(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterTableDropContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    partitionSpec(): PartitionSpecContext[];
    partitionSpec(i: number): PartitionSpecContext | null;
    ifExists(): IfExistsContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    columnNameList(): ColumnNameListContext | null;
    KW_PRIMARY(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    KW_CONSTRAINT(): antlr.TerminalNode | null;
    constraintName(): ConstraintNameContext | null;
    KW_DISTRIBUTION(): antlr.TerminalNode | null;
    KW_WATERMARK(): antlr.TerminalNode | null;
    columnName(): ColumnNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PropertyKeyListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    tablePropertyKey(): TablePropertyKeyContext[];
    tablePropertyKey(i: number): TablePropertyKeyContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterMaterializedTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_MATERIALIZED(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    KW_SUSPEND(): antlr.TerminalNode | null;
    KW_RESUME(): antlr.TerminalNode | null;
    KW_REFRESH(): antlr.TerminalNode | null;
    KW_SET(): antlr.TerminalNode | null;
    KW_RESET(): antlr.TerminalNode | null;
    propertyKeyList(): PropertyKeyListContext | null;
    KW_AS(): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    alterTableAdd(): AlterTableAddContext | null;
    alterTableModify(): AlterTableModifyContext | null;
    alterTableDrop(): AlterTableDropContext | null;
    KW_FRESHNESS(): antlr.TerminalNode | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    KW_REFRESH_MODE(): antlr.TerminalNode | null;
    tablePropertyList(): TablePropertyListContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    withOption(): WithOptionContext | null;
    partitionSpec(): PartitionSpecContext | null;
    KW_FULL(): antlr.TerminalNode | null;
    KW_CONTINUOUS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterModelContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_MODEL(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    KW_RENAME(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    KW_SET(): antlr.TerminalNode | null;
    tablePropertyList(): TablePropertyListContext | null;
    KW_RESET(): antlr.TerminalNode | null;
    propertyKeyList(): PropertyKeyListContext | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterConnectionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_CONNECTION(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    KW_RENAME(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    KW_SET(): antlr.TerminalNode | null;
    tablePropertyList(): TablePropertyListContext | null;
    KW_RESET(): antlr.TerminalNode | null;
    propertyKeyList(): PropertyKeyListContext | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_SYSTEM(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RenameDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_RENAME(): antlr.TerminalNode;
    KW_TO(): antlr.TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SetKeyValueDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_SET(): antlr.TerminalNode;
    tablePropertyList(): TablePropertyListContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AddConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ADD(): antlr.TerminalNode;
    KW_CONSTRAINT(): antlr.TerminalNode;
    constraintName(): ConstraintNameContext;
    KW_PRIMARY(): antlr.TerminalNode;
    KW_KEY(): antlr.TerminalNode;
    columnNameList(): ColumnNameListContext;
    KW_NOT(): antlr.TerminalNode | null;
    KW_ENFORCED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropConstraintContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_CONSTRAINT(): antlr.TerminalNode;
    constraintName(): ConstraintNameContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AddUniqueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ADD(): antlr.TerminalNode;
    KW_UNIQUE(): antlr.TerminalNode;
    columnNameList(): ColumnNameListContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterCatalogContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_CATALOG(): antlr.TerminalNode;
    catalogPath(): CatalogPathContext;
    KW_SET(): antlr.TerminalNode | null;
    tablePropertyList(): TablePropertyListContext | null;
    KW_RESET(): antlr.TerminalNode | null;
    propertyKeyList(): PropertyKeyListContext | null;
    KW_COMMENT(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterViewContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_VIEW(): antlr.TerminalNode;
    viewPath(): ViewPathContext;
    renameDefinition(): RenameDefinitionContext | null;
    KW_AS(): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterDatabaseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_DATABASE(): antlr.TerminalNode;
    databasePath(): DatabasePathContext;
    setKeyValueDefinition(): SetKeyValueDefinitionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AlterFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALTER(): antlr.TerminalNode;
    KW_FUNCTION(): antlr.TerminalNode;
    functionName(): FunctionNameContext;
    KW_AS(): antlr.TerminalNode;
    identifier(): IdentifierContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_SYSTEM(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    KW_LANGUAGE(): antlr.TerminalNode | null;
    KW_JAVA(): antlr.TerminalNode | null;
    KW_SCALA(): antlr.TerminalNode | null;
    KW_SQL(): antlr.TerminalNode | null;
    KW_PYTHON(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropCatalogContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_CATALOG(): antlr.TerminalNode;
    catalogPath(): CatalogPathContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropDatabaseContext extends antlr.ParserRuleContext {
    _dropType?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_DATABASE(): antlr.TerminalNode;
    databasePath(): DatabasePathContext;
    ifExists(): IfExistsContext | null;
    KW_RESTRICT(): antlr.TerminalNode | null;
    KW_CASCADE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropViewContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_VIEW(): antlr.TerminalNode;
    viewPath(): ViewPathContext;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_FUNCTION(): antlr.TerminalNode;
    functionName(): FunctionNameContext;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_SYSTEM(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropModelContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_MODEL(): antlr.TerminalNode;
    uid(): UidContext;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropConnectionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_CONNECTION(): antlr.TerminalNode;
    uid(): UidContext;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_SYSTEM(): antlr.TerminalNode | null;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DropMaterializedTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DROP(): antlr.TerminalNode;
    KW_MATERIALIZED(): antlr.TerminalNode;
    KW_TABLE(): antlr.TerminalNode;
    tablePath(): TablePathContext;
    ifExists(): IfExistsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    insertSimpleStatement(): InsertSimpleStatementContext | null;
    KW_EXECUTE(): antlr.TerminalNode | null;
    insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext | null;
    insertMulStatement(): InsertMulStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertSimpleStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tablePath(): TablePathContext;
    KW_INSERT(): antlr.TerminalNode | null;
    KW_UPSERT(): antlr.TerminalNode | null;
    KW_INTO(): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    valuesDefinition(): ValuesDefinitionContext | null;
    KW_OVERWRITE(): antlr.TerminalNode | null;
    insertExtendedColumns(): InsertExtendedColumnsContext | null;
    onConflictClause(): OnConflictClauseContext | null;
    KW_PARTITION(): antlr.TerminalNode | null;
    tablePropertyList(): TablePropertyListContext | null;
    columnNameList(): ColumnNameListContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertExtendedColumnsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    columnName(): ColumnNameContext[];
    columnName(i: number): ColumnNameContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    columnType(): ColumnTypeContext[];
    columnType(i: number): ColumnTypeContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OnConflictClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ON(): antlr.TerminalNode;
    KW_CONFLICT(): antlr.TerminalNode;
    KW_DO(): antlr.TerminalNode;
    KW_ERROR(): antlr.TerminalNode | null;
    KW_NOTHING(): antlr.TerminalNode | null;
    KW_DEDUPLICATE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_VALUES(): antlr.TerminalNode;
    valuesRowDefinition(): ValuesRowDefinitionContext[];
    valuesRowDefinition(i: number): ValuesRowDefinitionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesRowDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    valueDefinition(): ValueDefinitionContext[];
    valueDefinition(i: number): ValueDefinitionContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValueDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    constant(): ConstantContext | null;
    functionCallExpression(): FunctionCallExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertMulStatementCompatibilityContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_BEGIN(): antlr.TerminalNode;
    KW_STATEMENT(): antlr.TerminalNode;
    KW_SET(): antlr.TerminalNode;
    SEMICOLON(): antlr.TerminalNode[];
    SEMICOLON(i: number): antlr.TerminalNode | null;
    KW_END(): antlr.TerminalNode;
    insertSimpleStatement(): InsertSimpleStatementContext[];
    insertSimpleStatement(i: number): InsertSimpleStatementContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InsertMulStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_STATEMENT(): antlr.TerminalNode;
    KW_SET(): antlr.TerminalNode;
    KW_BEGIN(): antlr.TerminalNode;
    KW_END(): antlr.TerminalNode;
    insertSimpleStatement(): InsertSimpleStatementContext[];
    insertSimpleStatement(i: number): InsertSimpleStatementContext | null;
    SEMICOLON(): antlr.TerminalNode[];
    SEMICOLON(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QueryStatementContext extends antlr.ParserRuleContext {
    _left?: QueryStatementContext;
    _operator?: Token | null;
    _right?: QueryStatementContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    valuesClause(): ValuesClauseContext | null;
    withClause(): WithClauseContext | null;
    queryStatement(): QueryStatementContext[];
    queryStatement(i: number): QueryStatementContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    selectClause(): SelectClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    limitClause(): LimitClauseContext | null;
    selectStatement(): SelectStatementContext | null;
    KW_INTERSECT(): antlr.TerminalNode | null;
    KW_UNION(): antlr.TerminalNode | null;
    KW_EXCEPT(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValuesClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_VALUES(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WITH(): antlr.TerminalNode;
    withItem(): WithItemContext[];
    withItem(i: number): WithItemContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithItemContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    KW_AS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    columnName(): ColumnNameContext[];
    columnName(i: number): ColumnNameContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectStatementContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    selectClause(): SelectClauseContext;
    fromClause(): FromClauseContext | null;
    whereClause(): WhereClauseContext | null;
    groupByClause(): GroupByClauseContext | null;
    havingClause(): HavingClauseContext | null;
    windowClause(): WindowClauseContext | null;
    matchRecognizeClause(): MatchRecognizeClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_SELECT(): antlr.TerminalNode;
    selectList(): SelectListContext;
    setQuantifier(): SetQuantifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnProjectItem(): ColumnProjectItemContext[];
    columnProjectItem(i: number): ColumnProjectItemContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnProjectItemContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    selectWindowItemColumnName(): SelectWindowItemColumnNameContext | null;
    selectLiteralColumnName(): SelectLiteralColumnNameContext | null;
    columnAlias(): ColumnAliasContext | null;
    expression(): ExpressionContext | null;
    KW_AS(): antlr.TerminalNode | null;
    tableAllColumns(): TableAllColumnsContext | null;
    selectExpressionColumnName(): SelectExpressionColumnNameContext | null;
    columnName(): ColumnNameContext | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectWindowItemColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    overWindowItem(): OverWindowItemContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectExpressionColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SelectLiteralColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnName(): ColumnNameContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnAliasContext extends antlr.ParserRuleContext {
    _alias?: IdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    KW_AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ProjectItemDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    overWindowItem(): OverWindowItemContext | null;
    expression(): ExpressionContext | null;
    columnName(): ColumnNameContext | null;
    KW_AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableAllColumnsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ASTERISK_SIGN(): antlr.TerminalNode;
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OverWindowItemContext extends antlr.ParserRuleContext {
    _alias?: IdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    primaryExpression(): PrimaryExpressionContext;
    KW_OVER(): antlr.TerminalNode;
    windowSpec(): WindowSpecContext | null;
    KW_AS(): antlr.TerminalNode;
    identifier(): IdentifierContext;
    errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FromClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_FROM(): antlr.TerminalNode;
    tableExpression(): TableExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tableReference(): TableReferenceContext[];
    tableReference(i: number): TableReferenceContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    inlineDataValueClause(): InlineDataValueClauseContext | null;
    windowTVFClause(): WindowTVFClauseContext | null;
    tableExpression(): TableExpressionContext[];
    tableExpression(i: number): TableExpressionContext | null;
    KW_CROSS(): antlr.TerminalNode | null;
    KW_JOIN(): antlr.TerminalNode | null;
    KW_NATURAL(): antlr.TerminalNode | null;
    KW_OUTER(): antlr.TerminalNode | null;
    joinCondition(): JoinConditionContext | null;
    KW_LEFT(): antlr.TerminalNode | null;
    KW_RIGHT(): antlr.TerminalNode | null;
    KW_FULL(): antlr.TerminalNode | null;
    KW_INNER(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableReferenceContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tablePrimary(): TablePrimaryContext;
    tableAlias(): TableAliasContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePrimaryContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tablePath(): TablePathContext | null;
    KW_TABLE(): antlr.TerminalNode | null;
    systemTimePeriod(): SystemTimePeriodContext | null;
    viewPath(): ViewPathContext | null;
    atomFunctionTable(): AtomFunctionTableContext | null;
    atomExpressionTable(): AtomExpressionTableContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AtomFunctionTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TABLE(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    functionCallExpression(): FunctionCallExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    KW_LATERAL(): antlr.TerminalNode | null;
    tableFunctionCall(): TableFunctionCallContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableFunctionCallContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    functionNameWithParams(): FunctionNameWithParamsContext;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    functionParam(): FunctionParamContext[];
    functionParam(i: number): FunctionParamContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AtomExpressionTableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    KW_LATERAL(): antlr.TerminalNode | null;
    KW_UNNEST(): antlr.TerminalNode | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    KW_WITH(): antlr.TerminalNode | null;
    KW_ORDINALITY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SystemTimePeriodContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_FOR(): antlr.TerminalNode;
    KW_SYSTEM_TIME(): antlr.TerminalNode;
    KW_AS(): antlr.TerminalNode;
    KW_OF(): antlr.TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class InlineDataValueClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    valuesDefinition(): ValuesDefinitionContext;
    RR_BRACKET(): antlr.TerminalNode;
    tableAlias(): TableAliasContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowTVFClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TABLE(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    windowTVFExpression(): WindowTVFExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowTVFExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    windowTVFName(): WindowTVFNameContext;
    LR_BRACKET(): antlr.TerminalNode;
    windowTVFParam(): WindowTVFParamContext[];
    windowTVFParam(i: number): WindowTVFParamContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowTVFNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TUMBLE(): antlr.TerminalNode | null;
    KW_HOP(): antlr.TerminalNode | null;
    KW_CUMULATE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowTVFParamContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TABLE(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    columnDescriptor(): ColumnDescriptorContext | null;
    timeIntervalExpression(): TimeIntervalExpressionContext | null;
    KW_DATA(): antlr.TerminalNode | null;
    DOUBLE_RIGHT_ARROW(): antlr.TerminalNode | null;
    KW_TIMECOL(): antlr.TerminalNode | null;
    timeIntervalParamName(): TimeIntervalParamNameContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeIntervalParamNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DATA(): antlr.TerminalNode | null;
    KW_TIMECOL(): antlr.TerminalNode | null;
    KW_SIZE(): antlr.TerminalNode | null;
    KW_OFFSET(): antlr.TerminalNode | null;
    KW_STEP(): antlr.TerminalNode | null;
    KW_SLIDE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnDescriptorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DESCRIPTOR(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    columnName(): ColumnNameContext;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JoinConditionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ON(): antlr.TerminalNode | null;
    booleanExpression(): BooleanExpressionContext | null;
    columnNamePathAllowEmpty(): ColumnNamePathAllowEmptyContext[];
    columnNamePathAllowEmpty(i: number): ColumnNamePathAllowEmptyContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    KW_USING(): antlr.TerminalNode | null;
    columnNameList(): ColumnNameListContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WhereClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WHERE(): antlr.TerminalNode;
    booleanExpression(): BooleanExpressionContext | null;
    columnNamePathAllowEmpty(): ColumnNamePathAllowEmptyContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_GROUP(): antlr.TerminalNode;
    KW_BY(): antlr.TerminalNode;
    groupItemDefinition(): GroupItemDefinitionContext[];
    groupItemDefinition(i: number): GroupItemDefinitionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupItemDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnName(): ColumnNameContext | null;
    groupWindowFunction(): GroupWindowFunctionContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    KW_CUBE(): antlr.TerminalNode | null;
    KW_ROLLUP(): antlr.TerminalNode | null;
    KW_GROUPING(): antlr.TerminalNode | null;
    KW_SETS(): antlr.TerminalNode | null;
    groupItemDefinition(): GroupItemDefinitionContext[];
    groupItemDefinition(i: number): GroupItemDefinitionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupWindowFunctionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    groupWindowFunctionName(): GroupWindowFunctionNameContext;
    LR_BRACKET(): antlr.TerminalNode;
    uid(): UidContext;
    COMMA(): antlr.TerminalNode;
    timeIntervalExpression(): TimeIntervalExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class GroupWindowFunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TUMBLE(): antlr.TerminalNode | null;
    KW_HOP(): antlr.TerminalNode | null;
    KW_SESSION(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class HavingClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_HAVING(): antlr.TerminalNode;
    booleanExpression(): BooleanExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WINDOW(): antlr.TerminalNode;
    namedWindow(): NamedWindowContext[];
    namedWindow(i: number): NamedWindowContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NamedWindowContext extends antlr.ParserRuleContext {
    _name?: ErrorCapturingIdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_AS(): antlr.TerminalNode;
    windowSpec(): WindowSpecContext;
    errorCapturingIdentifier(): ErrorCapturingIdentifierContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowSpecContext extends antlr.ParserRuleContext {
    _name?: ErrorCapturingIdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    partitionByClause(): PartitionByClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    windowFrame(): WindowFrameContext | null;
    errorCapturingIdentifier(): ErrorCapturingIdentifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MatchRecognizeClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_MATCH_RECOGNIZE(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    patternVariablesDefinition(): PatternVariablesDefinitionContext;
    RR_BRACKET(): antlr.TerminalNode;
    partitionByClause(): PartitionByClauseContext | null;
    orderByClause(): OrderByClauseContext | null;
    measuresClause(): MeasuresClauseContext | null;
    outputMode(): OutputModeContext | null;
    afterMatchStrategy(): AfterMatchStrategyContext | null;
    patternDefinition(): PatternDefinitionContext | null;
    identifier(): IdentifierContext | null;
    KW_AS(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OrderByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ORDER(): antlr.TerminalNode;
    KW_BY(): antlr.TerminalNode;
    orderItemDefinition(): OrderItemDefinitionContext[];
    orderItemDefinition(i: number): OrderItemDefinitionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OrderItemDefinitionContext extends antlr.ParserRuleContext {
    _ordering?: Token | null;
    _nullOrder?: Token | null;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnName(): ColumnNameContext | null;
    valueExpression(): ValueExpressionContext | null;
    KW_NULLS(): antlr.TerminalNode | null;
    KW_ASC(): antlr.TerminalNode | null;
    KW_DESC(): antlr.TerminalNode | null;
    KW_LAST(): antlr.TerminalNode | null;
    KW_FIRST(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LimitClauseContext extends antlr.ParserRuleContext {
    _limit?: ExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_LIMIT(): antlr.TerminalNode;
    KW_ALL(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PartitionByClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PARTITION(): antlr.TerminalNode;
    KW_BY(): antlr.TerminalNode;
    columnName(): ColumnNameContext[];
    columnName(i: number): ColumnNameContext | null;
    primaryExpression(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QuantifiersContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ASTERISK_SIGN(): antlr.TerminalNode | null;
    ADD_SIGN(): antlr.TerminalNode | null;
    QUESTION_MARK_SIGN(): antlr.TerminalNode | null;
    LB_BRACKET(): antlr.TerminalNode | null;
    DIG_LITERAL(): antlr.TerminalNode[];
    DIG_LITERAL(i: number): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode | null;
    RB_BRACKET(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MeasuresClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_MEASURES(): antlr.TerminalNode;
    projectItemDefinition(): ProjectItemDefinitionContext[];
    projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PatternDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PATTERN(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    patternVariable(): PatternVariableContext[];
    patternVariable(i: number): PatternVariableContext | null;
    withinClause(): WithinClauseContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PatternVariableContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    unquotedIdentifier(): UnquotedIdentifierContext;
    quantifiers(): QuantifiersContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class OutputModeContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ALL(): antlr.TerminalNode | null;
    KW_ROWS(): antlr.TerminalNode | null;
    KW_PER(): antlr.TerminalNode;
    KW_MATCH(): antlr.TerminalNode;
    KW_ONE(): antlr.TerminalNode | null;
    KW_ROW(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class AfterMatchStrategyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_AFTER(): antlr.TerminalNode;
    KW_MATCH(): antlr.TerminalNode;
    KW_SKIP(): antlr.TerminalNode;
    KW_PAST(): antlr.TerminalNode | null;
    KW_LAST(): antlr.TerminalNode | null;
    KW_ROW(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    KW_NEXT(): antlr.TerminalNode | null;
    unquotedIdentifier(): UnquotedIdentifierContext | null;
    KW_FIRST(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PatternVariablesDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DEFINE(): antlr.TerminalNode;
    projectItemDefinition(): ProjectItemDefinitionContext[];
    projectItemDefinition(i: number): ProjectItemDefinitionContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WindowFrameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_RANGE(): antlr.TerminalNode | null;
    KW_BETWEEN(): antlr.TerminalNode;
    timeIntervalExpression(): TimeIntervalExpressionContext | null;
    frameBound(): FrameBoundContext | null;
    frameStart(): FrameStartContext | null;
    KW_AND(): antlr.TerminalNode | null;
    frameEnd(): FrameEndContext | null;
    KW_ROWS(): antlr.TerminalNode | null;
    DIG_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FrameBoundContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_PRECEDING(): antlr.TerminalNode;
    KW_AND(): antlr.TerminalNode;
    KW_CURRENT(): antlr.TerminalNode;
    KW_ROW(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FrameStartContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_UNBOUNDED(): antlr.TerminalNode | null;
    KW_PRECEDING(): antlr.TerminalNode | null;
    DIG_LITERAL(): antlr.TerminalNode | null;
    KW_CURRENT(): antlr.TerminalNode | null;
    KW_ROW(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FrameEndContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_CURRENT(): antlr.TerminalNode | null;
    KW_ROW(): antlr.TerminalNode | null;
    DIG_LITERAL(): antlr.TerminalNode | null;
    KW_FOLLOWING(): antlr.TerminalNode | null;
    KW_UNBOUNDED(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithinClauseContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WITHIN(): antlr.TerminalNode;
    timeIntervalExpression(): TimeIntervalExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    booleanExpression(): BooleanExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: BooleanExpressionContext): void;
}
export declare class LogicalNotContext extends BooleanExpressionContext {
    constructor(ctx: BooleanExpressionContext);
    KW_NOT(): antlr.TerminalNode;
    booleanExpression(): BooleanExpressionContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PredicatedContext extends BooleanExpressionContext {
    constructor(ctx: BooleanExpressionContext);
    valueExpression(): ValueExpressionContext;
    predicate(): PredicateContext | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExistsContext extends BooleanExpressionContext {
    constructor(ctx: BooleanExpressionContext);
    KW_EXISTS(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LogicalNestedContext extends BooleanExpressionContext {
    _kind?: Token | null;
    constructor(ctx: BooleanExpressionContext);
    booleanExpression(): BooleanExpressionContext;
    KW_IS(): antlr.TerminalNode;
    KW_TRUE(): antlr.TerminalNode | null;
    KW_FALSE(): antlr.TerminalNode | null;
    KW_UNKNOWN(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LogicalBinaryContext extends BooleanExpressionContext {
    _left?: BooleanExpressionContext;
    _operator?: Token | null;
    _right?: BooleanExpressionContext;
    constructor(ctx: BooleanExpressionContext);
    booleanExpression(): BooleanExpressionContext[];
    booleanExpression(i: number): BooleanExpressionContext | null;
    KW_AND(): antlr.TerminalNode | null;
    KW_OR(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PredicateContext extends antlr.ParserRuleContext {
    _kind?: Token | null;
    _lower?: ValueExpressionContext;
    _upper?: ValueExpressionContext;
    _pattern?: ValueExpressionContext;
    _right?: ValueExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_AND(): antlr.TerminalNode | null;
    KW_BETWEEN(): antlr.TerminalNode | null;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    KW_NOT(): antlr.TerminalNode | null;
    KW_ASYMMETRIC(): antlr.TerminalNode | null;
    KW_SYMMETRIC(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    KW_IN(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    queryStatement(): QueryStatementContext | null;
    KW_EXISTS(): antlr.TerminalNode | null;
    KW_RLIKE(): antlr.TerminalNode | null;
    likePredicate(): LikePredicateContext | null;
    KW_IS(): antlr.TerminalNode | null;
    KW_TRUE(): antlr.TerminalNode | null;
    KW_FALSE(): antlr.TerminalNode | null;
    KW_UNKNOWN(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode | null;
    KW_FROM(): antlr.TerminalNode | null;
    KW_DISTINCT(): antlr.TerminalNode | null;
    KW_TO(): antlr.TerminalNode | null;
    KW_SIMILAR(): antlr.TerminalNode | null;
    KW_ESCAPE(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    KW_JSON(): antlr.TerminalNode | null;
    KW_VALUE(): antlr.TerminalNode | null;
    KW_ARRAY(): antlr.TerminalNode | null;
    identifier(): IdentifierContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JsonFunctionBranchContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_NULL(): antlr.TerminalNode | null;
    KW_EMPTY(): antlr.TerminalNode | null;
    KW_ARRAY(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    KW_TRUE(): antlr.TerminalNode | null;
    KW_FALSE(): antlr.TerminalNode | null;
    KW_UNKNOWN(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LikePredicateContext extends antlr.ParserRuleContext {
    _kind?: Token | null;
    _quantifier?: Token | null;
    _pattern?: ValueExpressionContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_LIKE(): antlr.TerminalNode;
    KW_ANY(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    KW_NOT(): antlr.TerminalNode | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    valueExpression(): ValueExpressionContext | null;
    KW_ESCAPE(): antlr.TerminalNode | null;
    stringLiteral(): StringLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ValueExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ValueExpressionContext): void;
}
export declare class ValueExpressionDefaultContext extends ValueExpressionContext {
    constructor(ctx: ValueExpressionContext);
    primaryExpression(): PrimaryExpressionContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonContext extends ValueExpressionContext {
    _left?: ValueExpressionContext;
    _right?: ValueExpressionContext;
    constructor(ctx: ValueExpressionContext);
    comparisonOperator(): ComparisonOperatorContext;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ArithmeticBinaryContext extends ValueExpressionContext {
    _left?: ValueExpressionContext;
    _operator?: Token | null;
    _right?: ValueExpressionContext;
    constructor(ctx: ValueExpressionContext);
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    ASTERISK_SIGN(): antlr.TerminalNode | null;
    SLASH_SIGN(): antlr.TerminalNode | null;
    PERCENT_SIGN(): antlr.TerminalNode | null;
    KW_DIV(): antlr.TerminalNode | null;
    ADD_SIGN(): antlr.TerminalNode | null;
    HYPHEN_SIGN(): antlr.TerminalNode | null;
    DOUBLE_VERTICAL_SIGN(): antlr.TerminalNode | null;
    BIT_AND_OP(): antlr.TerminalNode | null;
    BIT_XOR_OP(): antlr.TerminalNode | null;
    BIT_OR_OP(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ArithmeticUnaryContext extends ValueExpressionContext {
    _operator?: Token | null;
    constructor(ctx: ValueExpressionContext);
    valueExpression(): ValueExpressionContext;
    HYPHEN_SIGN(): antlr.TerminalNode | null;
    ADD_SIGN(): antlr.TerminalNode | null;
    BIT_NOT_OP(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext | null;
    functionNameAndParams(): FunctionNameAndParamsContext | null;
    functionNameWithParams(): FunctionNameWithParamsContext | null;
    LR_BRACKET(): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode | null;
    functionParam(): FunctionParamContext[];
    functionParam(i: number): FunctionParamContext | null;
    KW_NULLS(): antlr.TerminalNode | null;
    orderByClause(): OrderByClauseContext | null;
    KW_RESPECT(): antlr.TerminalNode | null;
    KW_IGNORE(): antlr.TerminalNode | null;
    setQuantifier(): SetQuantifierContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PrimaryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrimaryExpressionContext): void;
}
export declare class DereferenceContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    dereferenceDefinition(): DereferenceDefinitionContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SimpleCaseContext extends PrimaryExpressionContext {
    _value?: ExpressionContext;
    _elseExpression?: ExpressionContext;
    constructor(ctx: PrimaryExpressionContext);
    KW_CASE(): antlr.TerminalNode;
    KW_END(): antlr.TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext | null;
    whenClause(): WhenClauseContext[];
    whenClause(i: number): WhenClauseContext | null;
    KW_ELSE(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ColumnReferenceContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    columnNamePath(): ColumnNamePathContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LastContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_LAST(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    KW_IGNORE(): antlr.TerminalNode | null;
    KW_NULLS(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class StarContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    ASTERISK_SIGN(): antlr.TerminalNode;
    uid(): UidContext | null;
    DOT(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SubscriptContext extends PrimaryExpressionContext {
    _value?: PrimaryExpressionContext;
    _index?: ValueExpressionContext;
    constructor(ctx: PrimaryExpressionContext);
    LS_BRACKET(): antlr.TerminalNode;
    RS_BRACKET(): antlr.TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    valueExpression(): ValueExpressionContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SubqueryExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    LR_BRACKET(): antlr.TerminalNode;
    queryStatement(): QueryStatementContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CastContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_CAST(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    KW_AS(): antlr.TerminalNode;
    columnType(): ColumnTypeContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantDefaultContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    constant(): ConstantContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ExtractContext extends PrimaryExpressionContext {
    _field?: IdentifierContext;
    _source?: ValueExpressionContext;
    constructor(ctx: PrimaryExpressionContext);
    KW_EXTRACT(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    KW_FROM(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    identifier(): IdentifierContext;
    valueExpression(): ValueExpressionContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    functionCallExpression(): FunctionCallExpressionContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SearchedCaseContext extends PrimaryExpressionContext {
    _elseExpression?: ExpressionContext;
    constructor(ctx: PrimaryExpressionContext);
    KW_CASE(): antlr.TerminalNode;
    KW_END(): antlr.TerminalNode;
    whenClause(): WhenClauseContext[];
    whenClause(i: number): WhenClauseContext | null;
    KW_ELSE(): antlr.TerminalNode | null;
    expression(): ExpressionContext | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class PositionContext extends PrimaryExpressionContext {
    _substr?: ValueExpressionContext;
    _str?: ValueExpressionContext;
    constructor(ctx: PrimaryExpressionContext);
    KW_POSITION(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    KW_IN(): antlr.TerminalNode;
    RR_BRACKET(): antlr.TerminalNode;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FirstContext extends PrimaryExpressionContext {
    constructor(ctx: PrimaryExpressionContext);
    KW_FIRST(): antlr.TerminalNode;
    LR_BRACKET(): antlr.TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): antlr.TerminalNode;
    KW_IGNORE(): antlr.TerminalNode | null;
    KW_NULLS(): antlr.TerminalNode | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null;
    reservedKeywordsNoParamsUsedAsFuncName(): ReservedKeywordsNoParamsUsedAsFuncNameContext | null;
    reservedKeywordsFollowParamsUsedAsFuncName(): ReservedKeywordsFollowParamsUsedAsFuncNameContext | null;
    uid(): UidContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameAndParamsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    reservedKeywordsFollowParamsUsedAsFuncName(): ReservedKeywordsFollowParamsUsedAsFuncNameContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    timeIntervalExpression(): TimeIntervalExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionNameWithParamsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext | null;
    uid(): UidContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class FunctionParamContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext | null;
    DOUBLE_RIGHT_ARROW(): antlr.TerminalNode | null;
    functionParam(): FunctionParamContext | null;
    KW_TABLE(): antlr.TerminalNode | null;
    tablePath(): TablePathContext | null;
    KW_MODEL(): antlr.TerminalNode | null;
    uid(): UidContext | null;
    columnDescriptor(): ColumnDescriptorContext | null;
    reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext | null;
    timeIntervalUnit(): TimeIntervalUnitContext | null;
    timePointUnit(): TimePointUnitContext | null;
    expression(): ExpressionContext | null;
    jsonValueParams(): JsonValueParamsContext | null;
    jsonQueryParams(): JsonQueryParamsContext | null;
    jsonObjectParams(): JsonObjectParamsContext | null;
    jsonArrayParams(): JsonArrayParamsContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JsonValueParamsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNamePath(): ColumnNamePathContext;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    columnType(): ColumnTypeContext | null;
    KW_ON(): antlr.TerminalNode[];
    KW_ON(i: number): antlr.TerminalNode | null;
    KW_EMPTY(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode[];
    KW_NULL(i: number): antlr.TerminalNode | null;
    KW_DEFAULT(): antlr.TerminalNode[];
    KW_DEFAULT(i: number): antlr.TerminalNode | null;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JsonQueryParamsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNamePath(): ColumnNamePathContext;
    uid(): UidContext[];
    uid(i: number): UidContext | null;
    jsonFunctionBranch(): JsonFunctionBranchContext[];
    jsonFunctionBranch(i: number): JsonFunctionBranchContext | null;
    KW_ON(): antlr.TerminalNode[];
    KW_ON(i: number): antlr.TerminalNode | null;
    KW_EMPTY(): antlr.TerminalNode | null;
    KW_WITHOUT(): antlr.TerminalNode | null;
    KW_WITH(): antlr.TerminalNode | null;
    KW_ARRAY(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JsonObjectParamsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    columnNamePath(): ColumnNamePathContext[];
    columnNamePath(i: number): ColumnNamePathContext | null;
    KW_ON(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode[];
    KW_NULL(i: number): antlr.TerminalNode | null;
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    KW_JSON(): antlr.TerminalNode[];
    KW_JSON(i: number): antlr.TerminalNode | null;
    LR_BRACKET(): antlr.TerminalNode[];
    LR_BRACKET(i: number): antlr.TerminalNode | null;
    RR_BRACKET(): antlr.TerminalNode[];
    RR_BRACKET(i: number): antlr.TerminalNode | null;
    uid(): UidContext | null;
    KW_KEY(): antlr.TerminalNode[];
    KW_KEY(i: number): antlr.TerminalNode | null;
    KW_VALUE(): antlr.TerminalNode[];
    KW_VALUE(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class JsonArrayParamsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    valueExpression(): ValueExpressionContext[];
    valueExpression(i: number): ValueExpressionContext | null;
    KW_ON(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode[];
    KW_NULL(i: number): antlr.TerminalNode | null;
    uid(): UidContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DereferenceDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    uid(): UidContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QualifiedNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext | null;
    dereferenceDefinition(): DereferenceDefinitionContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeIntervalExpressionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_INTERVAL(): antlr.TerminalNode;
    errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext | null;
    errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    multiUnitsInterval(): MultiUnitsIntervalContext;
    unitToUnitInterval(): UnitToUnitIntervalContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    intervalValue(): IntervalValueContext[];
    intervalValue(i: number): IntervalValueContext | null;
    timeIntervalUnit(): TimeIntervalUnitContext[];
    timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingUnitToUnitIntervalContext extends antlr.ParserRuleContext {
    _body?: UnitToUnitIntervalContext;
    _error1?: MultiUnitsIntervalContext;
    _error2?: UnitToUnitIntervalContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    unitToUnitInterval(): UnitToUnitIntervalContext[];
    unitToUnitInterval(i: number): UnitToUnitIntervalContext | null;
    multiUnitsInterval(): MultiUnitsIntervalContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
    _value?: IntervalValueContext;
    _from_?: TimeIntervalUnitContext;
    _to?: TimeIntervalUnitContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TO(): antlr.TerminalNode;
    intervalValue(): IntervalValueContext;
    timeIntervalUnit(): TimeIntervalUnitContext[];
    timeIntervalUnit(i: number): TimeIntervalUnitContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IntervalValueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DIG_LITERAL(): antlr.TerminalNode | null;
    REAL_LITERAL(): antlr.TerminalNode | null;
    ADD_SIGN(): antlr.TerminalNode | null;
    HYPHEN_SIGN(): antlr.TerminalNode | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TableAliasContext extends antlr.ParserRuleContext {
    _alias?: IdentifierContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    KW_AS(): antlr.TerminalNode | null;
    identifierList(): IdentifierListContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void;
}
export declare class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
    constructor(ctx: ErrorCapturingIdentifierExtraContext);
    KW_MINUS(): antlr.TerminalNode[];
    KW_MINUS(i: number): antlr.TerminalNode | null;
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
    constructor(ctx: ErrorCapturingIdentifierExtraContext);
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    identifierSeq(): IdentifierSeqContext;
    RR_BRACKET(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierSeqContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IdentifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IdentifierContext): void;
}
export declare class QuotedIdentifierAlternativeContext extends IdentifierContext {
    constructor(ctx: IdentifierContext);
    quotedIdentifier(): QuotedIdentifierContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedKeywordsAlternativeContext extends IdentifierContext {
    constructor(ctx: IdentifierContext);
    nonReservedKeywords(): NonReservedKeywordsContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierAlternativeContext extends IdentifierContext {
    constructor(ctx: IdentifierContext);
    unquotedIdentifier(): UnquotedIdentifierContext;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnquotedIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DIG_LITERAL(): antlr.TerminalNode | null;
    ID_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class QuotedIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
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
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CatalogPathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class CatalogPathCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DatabasePathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DatabasePathCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePathCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewPathContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ViewPathCreateContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UidContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UidAllowEmptyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext[];
    identifier(i: number): IdentifierContext | null;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    emptyColumn(): EmptyColumnContext | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class WithOptionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_WITH(): antlr.TerminalNode;
    tablePropertyList(): TablePropertyListContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IfNotExistsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_IF(): antlr.TerminalNode;
    KW_NOT(): antlr.TerminalNode;
    KW_EXISTS(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class IfExistsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_IF(): antlr.TerminalNode;
    KW_EXISTS(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LR_BRACKET(): antlr.TerminalNode;
    tableProperty(): TablePropertyContext[];
    tableProperty(i: number): TablePropertyContext | null;
    RR_BRACKET(): antlr.TerminalNode;
    COMMA(): antlr.TerminalNode[];
    COMMA(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyContext extends antlr.ParserRuleContext {
    _key?: TablePropertyKeyContext;
    _value?: TablePropertyValueContext;
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    tablePropertyKey(): TablePropertyKeyContext;
    tablePropertyValue(): TablePropertyValueContext | null;
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyKeyContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    identifier(): IdentifierContext | null;
    dereferenceDefinition(): DereferenceDefinitionContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TablePropertyValueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DIG_LITERAL(): antlr.TerminalNode | null;
    REAL_LITERAL(): antlr.TerminalNode | null;
    booleanLiteral(): BooleanLiteralContext | null;
    STRING_LITERAL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class LogicalOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_AND(): antlr.TerminalNode | null;
    BIT_AND_OP(): antlr.TerminalNode[];
    BIT_AND_OP(i: number): antlr.TerminalNode | null;
    KW_OR(): antlr.TerminalNode | null;
    BIT_OR_OP(): antlr.TerminalNode[];
    BIT_OR_OP(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ComparisonOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EQUAL_SYMBOL(): antlr.TerminalNode | null;
    GREATER_SYMBOL(): antlr.TerminalNode | null;
    LESS_SYMBOL(): antlr.TerminalNode | null;
    EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class BitOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    LESS_SYMBOL(): antlr.TerminalNode[];
    LESS_SYMBOL(i: number): antlr.TerminalNode | null;
    GREATER_SYMBOL(): antlr.TerminalNode[];
    GREATER_SYMBOL(i: number): antlr.TerminalNode | null;
    BIT_AND_OP(): antlr.TerminalNode | null;
    BIT_XOR_OP(): antlr.TerminalNode | null;
    BIT_OR_OP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class MathOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    ASTERISK_SIGN(): antlr.TerminalNode | null;
    SLASH_SIGN(): antlr.TerminalNode | null;
    PERCENT_SIGN(): antlr.TerminalNode | null;
    KW_DIV(): antlr.TerminalNode | null;
    ADD_SIGN(): antlr.TerminalNode | null;
    HYPHEN_SIGN(): antlr.TerminalNode | null;
    DOUBLE_HYPHEN_SIGN(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class UnaryOperatorContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    EXCLAMATION_SYMBOL(): antlr.TerminalNode | null;
    BIT_NOT_OP(): antlr.TerminalNode | null;
    ADD_SIGN(): antlr.TerminalNode | null;
    HYPHEN_SIGN(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ConstantContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    timeIntervalExpression(): TimeIntervalExpressionContext | null;
    timePointLiteral(): TimePointLiteralContext | null;
    stringLiteral(): StringLiteralContext | null;
    decimalLiteral(): DecimalLiteralContext | null;
    HYPHEN_SIGN(): antlr.TerminalNode | null;
    booleanLiteral(): BooleanLiteralContext | null;
    REAL_LITERAL(): antlr.TerminalNode | null;
    BIT_STRING(): antlr.TerminalNode | null;
    KW_NULL(): antlr.TerminalNode | null;
    KW_NOT(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimePointLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    timePointUnit(): TimePointUnitContext;
    stringLiteral(): StringLiteralContext;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class StringLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class DecimalLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    DIG_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class BooleanLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_TRUE(): antlr.TerminalNode | null;
    KW_FALSE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class SetQuantifierContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DISTINCT(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimePointUnitContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_YEAR(): antlr.TerminalNode | null;
    KW_QUARTER(): antlr.TerminalNode | null;
    KW_MONTH(): antlr.TerminalNode | null;
    KW_WEEK(): antlr.TerminalNode | null;
    KW_DAY(): antlr.TerminalNode | null;
    KW_HOUR(): antlr.TerminalNode | null;
    KW_MINUTE(): antlr.TerminalNode | null;
    KW_SECOND(): antlr.TerminalNode | null;
    KW_MILLISECOND(): antlr.TerminalNode | null;
    KW_MICROSECOND(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class TimeIntervalUnitContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_MILLENNIUM(): antlr.TerminalNode | null;
    KW_CENTURY(): antlr.TerminalNode | null;
    KW_DECADE(): antlr.TerminalNode | null;
    KW_YEAR(): antlr.TerminalNode | null;
    KW_YEARS(): antlr.TerminalNode | null;
    KW_QUARTER(): antlr.TerminalNode | null;
    KW_MONTH(): antlr.TerminalNode | null;
    KW_MONTHS(): antlr.TerminalNode | null;
    KW_WEEK(): antlr.TerminalNode | null;
    KW_WEEKS(): antlr.TerminalNode | null;
    KW_DAY(): antlr.TerminalNode | null;
    KW_DAYS(): antlr.TerminalNode | null;
    KW_HOUR(): antlr.TerminalNode | null;
    KW_HOURS(): antlr.TerminalNode | null;
    KW_MINUTE(): antlr.TerminalNode | null;
    KW_MINUTES(): antlr.TerminalNode | null;
    KW_SECOND(): antlr.TerminalNode | null;
    KW_SECONDS(): antlr.TerminalNode | null;
    KW_MILLISECOND(): antlr.TerminalNode | null;
    KW_MICROSECOND(): antlr.TerminalNode | null;
    KW_NANOSECOND(): antlr.TerminalNode | null;
    KW_EPOCH(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsUsedAsFuncParamContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ARRAY(): antlr.TerminalNode | null;
    KW_ALL(): antlr.TerminalNode | null;
    KW_BOTH(): antlr.TerminalNode | null;
    KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
    KW_CURRENT_DATE(): antlr.TerminalNode | null;
    KW_CURRENT_TIME(): antlr.TerminalNode | null;
    KW_LOCALTIME(): antlr.TerminalNode | null;
    KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
    KW_DISTINCT(): antlr.TerminalNode | null;
    KW_LEADING(): antlr.TerminalNode | null;
    KW_TRAILING(): antlr.TerminalNode | null;
    KW_VALUE(): antlr.TerminalNode | null;
    ASTERISK_SIGN(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsNoParamsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_LOCALTIME(): antlr.TerminalNode | null;
    KW_LOCALTIMESTAMP(): antlr.TerminalNode | null;
    KW_CURRENT_TIME(): antlr.TerminalNode | null;
    KW_CURRENT_DATE(): antlr.TerminalNode | null;
    KW_CURRENT_TIMESTAMP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsFollowParamsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_DATE(): antlr.TerminalNode | null;
    KW_TIME(): antlr.TerminalNode | null;
    KW_TIMESTAMP(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ABS(): antlr.TerminalNode | null;
    KW_ARRAY(): antlr.TerminalNode | null;
    KW_AVG(): antlr.TerminalNode | null;
    KW_CARDINALITY(): antlr.TerminalNode | null;
    KW_CAST(): antlr.TerminalNode | null;
    KW_CEIL(): antlr.TerminalNode | null;
    KW_CEILING(): antlr.TerminalNode | null;
    KW_COALESCE(): antlr.TerminalNode | null;
    KW_COLLECT(): antlr.TerminalNode | null;
    KW_COUNT(): antlr.TerminalNode | null;
    KW_CUME_DIST(): antlr.TerminalNode | null;
    KW_DAYOFWEEK(): antlr.TerminalNode | null;
    KW_DAYOFYEAR(): antlr.TerminalNode | null;
    KW_DENSE_RANK(): antlr.TerminalNode | null;
    KW_ELEMENT(): antlr.TerminalNode | null;
    KW_EXP(): antlr.TerminalNode | null;
    KW_EXTRACT(): antlr.TerminalNode | null;
    KW_FIRST_VALUE(): antlr.TerminalNode | null;
    KW_FLOOR(): antlr.TerminalNode | null;
    KW_GROUPING(): antlr.TerminalNode | null;
    KW_HOUR(): antlr.TerminalNode | null;
    KW_IF(): antlr.TerminalNode | null;
    KW_LAG(): antlr.TerminalNode | null;
    KW_LAST_VALUE(): antlr.TerminalNode | null;
    KW_LEAD(): antlr.TerminalNode | null;
    KW_LEFT(): antlr.TerminalNode | null;
    KW_LN(): antlr.TerminalNode | null;
    KW_LOWER(): antlr.TerminalNode | null;
    KW_MAP(): antlr.TerminalNode | null;
    KW_MAX(): antlr.TerminalNode | null;
    KW_MIN(): antlr.TerminalNode | null;
    KW_MINUTE(): antlr.TerminalNode | null;
    KW_MOD(): antlr.TerminalNode | null;
    KW_MONTH(): antlr.TerminalNode | null;
    KW_NULLIF(): antlr.TerminalNode | null;
    KW_NTILE(): antlr.TerminalNode | null;
    KW_OVERLAY(): antlr.TerminalNode | null;
    KW_PERCENT_RANK(): antlr.TerminalNode | null;
    KW_POSITION(): antlr.TerminalNode | null;
    KW_POWER(): antlr.TerminalNode | null;
    KW_QUARTER(): antlr.TerminalNode | null;
    KW_ROW(): antlr.TerminalNode | null;
    KW_ROWS(): antlr.TerminalNode | null;
    KW_ROW_NUMBER(): antlr.TerminalNode | null;
    KW_RANK(): antlr.TerminalNode | null;
    KW_RIGHT(): antlr.TerminalNode | null;
    KW_SECOND(): antlr.TerminalNode | null;
    KW_STDDEV_POP(): antlr.TerminalNode | null;
    KW_STDDEV_SAMP(): antlr.TerminalNode | null;
    KW_SUBSTRING(): antlr.TerminalNode | null;
    KW_SUM(): antlr.TerminalNode | null;
    KW_TIMESTAMP_DIFF(): antlr.TerminalNode | null;
    KW_TRIM(): antlr.TerminalNode | null;
    KW_TRUNCATE(): antlr.TerminalNode | null;
    KW_TRY_CAST(): antlr.TerminalNode | null;
    KW_UPPER(): antlr.TerminalNode | null;
    KW_VAR_POP(): antlr.TerminalNode | null;
    KW_VAR_SAMP(): antlr.TerminalNode | null;
    KW_WEEK(): antlr.TerminalNode | null;
    KW_YEAR(): antlr.TerminalNode | null;
    KW_JSON_VALUE(): antlr.TerminalNode | null;
    KW_JSON_EXISTS(): antlr.TerminalNode | null;
    KW_JSON_QUERY(): antlr.TerminalNode | null;
    KW_JSON_OBJECT(): antlr.TerminalNode | null;
    KW_JSON_OBJECTAGG(): antlr.TerminalNode | null;
    KW_JSON_ARRAY(): antlr.TerminalNode | null;
    KW_JSON_ARRAYAGG(): antlr.TerminalNode | null;
    KW_ARRAY_AGG(): antlr.TerminalNode | null;
    KW_DATE_DIFF(): antlr.TerminalNode | null;
    KW_DATETIME_DIFF(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
export declare class NonReservedKeywordsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    KW_ADD(): antlr.TerminalNode | null;
    KW_AFTER(): antlr.TerminalNode | null;
    KW_ANALYZE(): antlr.TerminalNode | null;
    KW_ARTIFACT(): antlr.TerminalNode | null;
    KW_ASC(): antlr.TerminalNode | null;
    KW_CASCADE(): antlr.TerminalNode | null;
    KW_CATALOG(): antlr.TerminalNode | null;
    KW_CENTURY(): antlr.TerminalNode | null;
    KW_CHANGELOG_MODE(): antlr.TerminalNode | null;
    KW_COLUMNS(): antlr.TerminalNode | null;
    KW_COMPILE(): antlr.TerminalNode | null;
    KW_COMPUTE(): antlr.TerminalNode | null;
    KW_CONFIG(): antlr.TerminalNode | null;
    KW_CONFLICT(): antlr.TerminalNode | null;
    KW_CONNECTION(): antlr.TerminalNode | null;
    KW_CONSTRAINTS(): antlr.TerminalNode | null;
    KW_CUMULATE(): antlr.TerminalNode | null;
    KW_DATA(): antlr.TerminalNode | null;
    KW_DATABASE(): antlr.TerminalNode | null;
    KW_DAYS(): antlr.TerminalNode | null;
    KW_DECADE(): antlr.TerminalNode | null;
    KW_DEDUPLICATE(): antlr.TerminalNode | null;
    KW_DESC(): antlr.TerminalNode | null;
    KW_DESCRIPTOR(): antlr.TerminalNode | null;
    KW_DIV(): antlr.TerminalNode | null;
    KW_DO(): antlr.TerminalNode | null;
    KW_DRAIN(): antlr.TerminalNode | null;
    KW_ENFORCED(): antlr.TerminalNode | null;
    KW_ENGINE(): antlr.TerminalNode | null;
    KW_EPOCH(): antlr.TerminalNode | null;
    KW_ERROR(): antlr.TerminalNode | null;
    KW_ESTIMATED_COST(): antlr.TerminalNode | null;
    KW_EXCLUDING(): antlr.TerminalNode | null;
    KW_FILE(): antlr.TerminalNode | null;
    KW_FIRST(): antlr.TerminalNode | null;
    KW_FROM_BEGINNING(): antlr.TerminalNode | null;
    KW_FROM_NOW(): antlr.TerminalNode | null;
    KW_FROM_TIMESTAMP(): antlr.TerminalNode | null;
    KW_GENERATED(): antlr.TerminalNode | null;
    KW_HOP(): antlr.TerminalNode | null;
    KW_HOURS(): antlr.TerminalNode | null;
    KW_IGNORE(): antlr.TerminalNode | null;
    KW_INCLUDING(): antlr.TerminalNode | null;
    KW_INPUT(): antlr.TerminalNode | null;
    KW_JAR(): antlr.TerminalNode | null;
    KW_JARS(): antlr.TerminalNode | null;
    KW_JAVA(): antlr.TerminalNode | null;
    KW_JOB(): antlr.TerminalNode | null;
    KW_JOBS(): antlr.TerminalNode | null;
    KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode | null;
    KW_KEY(): antlr.TerminalNode | null;
    KW_LAST(): antlr.TerminalNode | null;
    KW_LOAD(): antlr.TerminalNode | null;
    KW_MAP(): antlr.TerminalNode | null;
    KW_METADATA(): antlr.TerminalNode | null;
    KW_MICROSECOND(): antlr.TerminalNode | null;
    KW_MILLENNIUM(): antlr.TerminalNode | null;
    KW_MILLISECOND(): antlr.TerminalNode | null;
    KW_MINUTES(): antlr.TerminalNode | null;
    KW_MODEL(): antlr.TerminalNode | null;
    KW_MONTHS(): antlr.TerminalNode | null;
    KW_NANOSECOND(): antlr.TerminalNode | null;
    KW_NOTHING(): antlr.TerminalNode | null;
    KW_NULLS(): antlr.TerminalNode | null;
    KW_OPTIONS(): antlr.TerminalNode | null;
    KW_ORDINALITY(): antlr.TerminalNode | null;
    KW_OUTPUT(): antlr.TerminalNode | null;
    KW_OVERWRITE(): antlr.TerminalNode | null;
    KW_OVERWRITING(): antlr.TerminalNode | null;
    KW_PARTITIONED(): antlr.TerminalNode | null;
    KW_PARTITIONS(): antlr.TerminalNode | null;
    KW_PAST(): antlr.TerminalNode | null;
    KW_PLAN(): antlr.TerminalNode | null;
    KW_PLAN_ADVICE(): antlr.TerminalNode | null;
    KW_PRECEDING(): antlr.TerminalNode | null;
    KW_PYTHON(): antlr.TerminalNode | null;
    KW_PYTHON_ARCHIVES(): antlr.TerminalNode | null;
    KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode | null;
    KW_PYTHON_FILES(): antlr.TerminalNode | null;
    KW_PYTHON_JAR(): antlr.TerminalNode | null;
    KW_PYTHON_PARAMETER(): antlr.TerminalNode | null;
    KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode | null;
    KW_QUARTER(): antlr.TerminalNode | null;
    KW_REMOVE(): antlr.TerminalNode | null;
    KW_REPLACE(): antlr.TerminalNode | null;
    KW_RESPECT(): antlr.TerminalNode | null;
    KW_RESTRICT(): antlr.TerminalNode | null;
    KW_RESUME_OR_FROM_BEGINNING(): antlr.TerminalNode | null;
    KW_RESUME_OR_FROM_NOW(): antlr.TerminalNode | null;
    KW_RESUME_OR_FROM_TIMESTAMP(): antlr.TerminalNode | null;
    KW_SECONDS(): antlr.TerminalNode | null;
    KW_SESSION(): antlr.TerminalNode | null;
    KW_SETS(): antlr.TerminalNode | null;
    KW_SIZE(): antlr.TerminalNode | null;
    KW_SLIDE(): antlr.TerminalNode | null;
    KW_START_MODE(): antlr.TerminalNode | null;
    KW_STATISTICS(): antlr.TerminalNode | null;
    KW_STEP(): antlr.TerminalNode | null;
    KW_STOP(): antlr.TerminalNode | null;
    KW_TEMPORARY(): antlr.TerminalNode | null;
    KW_TIMECOL(): antlr.TerminalNode | null;
    KW_TUMBLE(): antlr.TerminalNode | null;
    KW_UNLOAD(): antlr.TerminalNode | null;
    KW_VARIANT(): antlr.TerminalNode | null;
    KW_VIEW(): antlr.TerminalNode | null;
    KW_VIRTUAL(): antlr.TerminalNode | null;
    KW_WEEK(): antlr.TerminalNode | null;
    KW_YEARS(): antlr.TerminalNode | null;
    KW_ZONE(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: FlinkSqlParserListener): void;
    exitRule(listener: FlinkSqlParserListener): void;
    accept<Result>(visitor: FlinkSqlParserVisitor<Result>): Result | null;
}
