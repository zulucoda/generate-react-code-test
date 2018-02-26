import { shallow } from 'enzyme';

import ProductsNativeView from '../products-native.view';

describe('ProductsNativeView - DOES IT RENDER', () => {
    /*
    Here you can mock out any view function props not needed for rendering
    (i.e. state read/write functions from the reducer) so as to only test the view.

    These mocks may be omitted if no function props need to be mocked.
    */
    const exampleAsyncActionMock = jest.fn();

    it('should render without crashing', () => {
        shallow(<ProductsNativeView exampleAsyncAction={exampleAsyncActionMock} />);
    });
});
