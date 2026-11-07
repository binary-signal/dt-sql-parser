import * as antlr from "antlr4ng";
export declare abstract class SQLParserBase<T = antlr.ParserRuleContext> extends antlr.Parser {
    constructor(input: antlr.TokenStream);
    abstract program(): T;
    caretTokenIndex: number;
    entityCollecting: boolean;
    /**
     * Semantic predicate to determine whether to match empty column.
     *
     * Key design:
     * 1. Only match empty column in entityCollecting mode
     * 2. Check if caret position is at the empty column position
     * 3. In validate mode (entityCollecting=false), this predicate returns false
     *    and reports an error to ensure incomplete SQL is caught
     *
     * IMPORTANT: This predicate should be used carefully to avoid affecting
     * prediction in non-entity-collecting contexts.
     */
    shouldMatchEmpty(ruleName?: string): boolean;
    /**
     * Semantic predicate to check whether the previous token and the next token
     * are adjacent (no whitespace in between).
     *
     * Used to support hyphens inside Hive SET config property names, e.g.
     * `set tez.grouping.max-size = 1`, while still rejecting invalid spacing
     * like `set hive.a - b = 1`.
     */
    isNextTokenAdjacent(): boolean;
}
