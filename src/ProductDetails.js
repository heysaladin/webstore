import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
    render() {
        return (
            <div>
                <h1>Details</h1>
                <Link to={`/`}>
                List
                </Link>
            </div>
        );
    }    
}

export default ProductDetails;
