import { SplitListener } from '../common/splitListener';
export class GenericSplitListener extends SplitListener {
    exitSingleStatement(ctx) {
        this._statementsContext.push(ctx);
    }
}
