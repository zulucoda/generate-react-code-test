/*
Add mocking setup here such as in the example:

jest.mock('../../../service/some-api');
import SomeApi from '../../../service/some-api';
*/

import productsReducer, {
    exampleAction,
    exampleAsyncAction
    /*
    Add all the actions you wish to test here.
    */
} from '../products.reducer';

describe('productsReducer - Unit Test', () => {
    function stateBefore() {
        return {
            exampleVariable: false
            /*
            Setup your initial state for testing here.
            */
        };
    }

    it('should return initial state when action is undefined', () => {
        const action = {};

        const actual = productsReducer(undefined, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    it('should return current state when unknown action is dispatched', () => {
        const action = { type: 'SOME_UNKNOWN_ACTION' };

        const currentState = {
            ...stateBefore()
        };

        const actual = productsReducer(currentState, action);

        const expected = {
            ...stateBefore()
        };

        expect(actual).toEqual(expected);
    });

    /*
    Add all your action tests here. Add each action in its own 'describe' and test
    each of the action's scenarios in its own 'it'. Remember to test happy and sad cases.
    "Every bug is a test that wasn't written"
    */
    describe('exampleAction', () => {
        it('should send humans to Mars to recolonise', () => {
            const action = exampleAction(false);

            const actual = productsReducer(stateBefore(), action);

            const expected = {
                ...stateBefore(),
                exampleVariable: false
            };

            expect(actual).toEqual(expected);
        });
    });

    /*
    Add all your asynchronous action tests here. Add each asynchronous action in its own 'describe' and test
    each of the asynchronous action's scenarios in its own 'it'. Remember to test happy and sad cases.
    If you have no asynchronous actions, this code may be omitted.

    NOTE: See `src\services\sub-services\content-service\test\content-services.spec.js` or
    `src\components\tabs\test\tabs.reducer.spec.js` for a examples.
    */
});
