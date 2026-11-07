import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { GenericSqlLexer } from '../../lib/generic/GenericSqlLexer';
import { GenericSqlParser, ProgramContext } from '../../lib/generic/GenericSqlParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, CaretPosition, SemanticCollectOptions } from '../common/types';
import { ErrorListener, ParseError } from '../common/parseErrorListener';
import { GenericEntityCollector } from './genericEntityCollector';
import { GenericErrorListener } from './genericErrorListener';
import { GenericSplitListener } from './genericSplitListener';
import { GenericSemanticContextCollector } from './genericSemanticContextCollector';
export { GenericEntityCollector, GenericSplitListener };
export interface GenericSQLOptions {
    /** Enable or disable diagnostics (parse error collection). Defaults to true. */
    diagnostics?: boolean;
}
export declare class GenericSQL extends BasicSQL<GenericSqlLexer, ProgramContext, GenericSqlParser> {
    private _diagnostics;
    constructor(options?: GenericSQLOptions);
    protected createLexerFromCharStream(charStreams: CharStream): GenericSqlLexer;
    validate(input: string): ParseError[];
    protected createParserFromTokenStream(tokenStream: CommonTokenStream): GenericSqlParser;
    /**
     * The rules that keywords you don't want to be suggested.
     */
    protected excludeKeywordRules: Set<number>;
    protected preferredRules: Set<number>;
    protected get splitListener(): GenericSplitListener;
    protected createErrorListener(_errorListener: ErrorListener): GenericErrorListener;
    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number): GenericEntityCollector;
    protected createSemanticContextCollector(input: string, caretPosition: CaretPosition, allTokens: Token[], options?: SemanticCollectOptions): GenericSemanticContextCollector;
    protected processCandidates(candidates: CandidatesCollection, allTokens: Token[], caretTokenIndex: number): Suggestions<Token>;
}
