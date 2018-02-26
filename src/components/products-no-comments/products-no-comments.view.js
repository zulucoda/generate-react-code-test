import React, { Component } from 'react';
import PropTypes from 'prop-types';




export default class ProductsNoCommentsView extends Component {
    constructor(props) {
        super(props);

        
        this.renderTextExample = this.renderTextExample.bind(this);
    }

    componentDidMount() {
        
    }

    render() {
        return <div className="products-no-comments">{this.renderTextExample()}</div>;
    }

    
    renderTextExample() {
        const message = `Welcome to our template view ${this.props.exampleVariable || '( ͡° ͜ʖ ͡°)'}`;
        return <h1>{message}</h1>;
    }
}


ProductsNoCommentsView.propTypes = {
    exampleVariable: PropTypes.string
};
