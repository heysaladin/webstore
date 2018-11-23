import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { LocaleContext } from './contexts';
import trans from './trans';
class ProductDetails extends Component {
    render() {
        return (
            <Layout>
            <LocaleContext.Consumer>
                {({ locale }) => (
            <div>
                        <h1>{trans[locale]['Details']}</h1>
                <Link to={`/`}>
                            {trans[locale]['List']}
                </Link>
                    </div>
                )}
                </LocaleContext.Consumer>
            </Layout>
        );
    }    
}

export default ProductDetails;
