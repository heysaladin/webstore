import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
// import { LocaleContext } from '../contexts';
// import trans from '../trans';
import products from '../products';
class ProductList extends Component {
    render() {
        return (
            < Layout >
            
                {/*
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
                */}

            <div className="columns">
                <div className="column is-full">
                    <div>
                        <h3 className="title">Our Products</h3>
                        <div className="columns">
                            {products.map((product, index) => (
                                <div className="column" key={index}>
                                    <Link to={`/product/${product.slug}`}>
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img alt={product.title} src={product.imageUrl} />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">{product.title}</p>
                                                        <div className="content">
                                                            {product.description}
                                                            <br />
                                                        </div>
                                                        <h5>{product.price}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </Layout >
        );
    }
}

export default ProductList;