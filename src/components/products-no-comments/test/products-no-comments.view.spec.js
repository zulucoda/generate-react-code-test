import React from 'react';
import { shallow } from 'enzyme';

import ProductsNoCommentsView from '../products-no-comments.view';

describe('ProductsNoCommentsView - Unit Test', () => {
    

    it('should render without crashing', () => {
        shallow(<ProductsNoCommentsView />);
    });
});
