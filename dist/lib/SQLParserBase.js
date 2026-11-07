import * as antlr from "antlr4ng";
export class SQLParserBase extends antlr.Parser {
    constructor(input) {
        super(input);
        this.caretTokenIndex = -1;
        this.entityCollecting = false;
    }
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
    shouldMatchEmpty(ruleName) {
        var _a, _b;
        // Only match in entityCollecting mode or when caret position is specified (suggestion mode)
        if (this.entityCollecting || this.caretTokenIndex >= 0) {
            // If no caret position specified, match all empty columns
            if (this.caretTokenIndex < 0) {
                return true;
            }
            // Check if caret is at the position where empty column would be
            const prevTokenIndex = (_a = this.tokenStream.LT(-1)) === null || _a === void 0 ? void 0 : _a.tokenIndex;
            const nextTokenIndex = (_b = this.tokenStream.LT(1)) === null || _b === void 0 ? void 0 : _b.tokenIndex;
            // Match if caret is between previous and next token
            if (prevTokenIndex !== undefined && nextTokenIndex !== undefined) {
                return prevTokenIndex <= this.caretTokenIndex && nextTokenIndex >= this.caretTokenIndex;
            }
            // If only previous token exists, match if caret is after it
            if (prevTokenIndex !== undefined) {
                return prevTokenIndex <= this.caretTokenIndex;
            }
            // If only next token exists, match if caret is before it
            if (nextTokenIndex !== undefined) {
                return nextTokenIndex >= this.caretTokenIndex;
            }
            return false;
        }
        // In pure validate mode, don't match empty columns
        // This allows ANTLR to report errors naturally
        return false;
    }
    /**
     * Semantic predicate to check whether the previous token and the next token
     * are adjacent (no whitespace in between).
     *
     * Used to support hyphens inside Hive SET config property names, e.g.
     * `set tez.grouping.max-size = 1`, while still rejecting invalid spacing
     * like `set hive.a - b = 1`.
     */
    isNextTokenAdjacent() {
        const previousToken = this.tokenStream.LT(-1);
        const nextToken = this.tokenStream.LT(1);
        return (previousToken !== null &&
            nextToken !== null &&
            previousToken.stop + 1 === nextToken.start);
    }
}
