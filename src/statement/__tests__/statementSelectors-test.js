import { fromJS } from 'immutable';
import expect from 'expect';
import statementSelectors from '../statementSelectors';

describe('statementSelectors', () => {
    const emptyState = () => ({
        account: fromJS([]),
        transactions: fromJS({}),
    });

    it('should be able to execute', () => {
        const state = emptyState();

        const actual = statementSelectors(state);

        expect(actual).toExist();
    });

    it('should return the same result for the same state', () => {
        const state = emptyState();

        const first = statementSelectors(state);
        const second = statementSelectors(state);

        expect(first.currency).toBe(second.currency);
        expect(first.transactionsToday).toBe(second.transactionsToday);
        expect(first.tradingTimesFilter).toBe(second.tradingTimesFilter);

        expect(first).toBe(second);
    });
});