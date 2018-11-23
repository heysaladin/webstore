import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { LocaleContext } from '../contexts';
import trans from '../trans';
import products from '../products';
class ProductDetails extends Component {
    // export default function ProductDetails(props) {
    render() {
        const props = this.props;
        const product = products.find(
            product => product.slug === props.match.params.product
        );
        return (
            < Layout >

                {/*
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
                */}

            <div className="columns">
                <div className="column is-12">
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <li>
                                <Link to="/">Products</Link>
                            </li>
                            <li className="is-active">
                                <a href="#" aria-current="page">
                                    {product.title}
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h3 className="title">{product.title}</h3>
                </div>
            </div>
            <div className="columns">
                <div className="column is-5">
                    <figure className="image">
                        <img alt={product.title} src={product.imageUrl} />
                    </figure>
                </div>
                <LocaleContext.Consumer>
                    {({ locale }) => (
                        <div className="column is-5">
                            <div className="column has-text-weight-semibold has-text-dark is-size-4">
                                {product.price}
                            </div>
                            <div className="column">{product.description}</div>
                            <div className="column">
                                <a className="button is-primary is-uppercase">
                                    {trans[locale]['Add to Cart']}
                                </a>
                            </div>
                        </div>
                    )}
                </LocaleContext.Consumer>
            </div>
    </Layout >
        );
    }    
}

export default ProductDetails;
