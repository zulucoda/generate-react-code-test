import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductsReduxView from './products-redux.view';
import {
    exampleAction,
    exampleAsyncAction
    /*
    Import all the actions you wish to expose to the view here.
    */
} from './products-redux.reducer';

export function mapStateToProps({ productsReduxReducer }) {
    return {
        exampleVariable: productsReduxReducer.exampleVariable
        /*
        Add all the state variables you wish to expose to the view here.
        */
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            exampleAction,
            exampleAsyncAction
            /*
            Add all the actions you wish to expose to the view here.
            */
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsReduxView);
