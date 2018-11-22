import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                <Link to={`/product/x`}>
                Details
                </Link>
            </div>
        );
    }
}

export default ProductList;