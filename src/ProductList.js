import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { LocaleContext } from './contexts';
import trans from './trans';
class ProductList extends Component {
    render() {
        return (
            <Layout>
            <LocaleContext.Consumer>
                {({ locale }) => (
            <div>
                        <h1>{trans[locale]['List']}</h1>
                <Link to={`/product/x`}>
                            {trans[locale]['Details']}
                </Link>
            </div>
                  )}
                </LocaleContext.Consumer>
            </Layout>
        );
    }
}

export default ProductList;