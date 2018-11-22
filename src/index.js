import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

class AppRouter extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/product/:product" exact component={ProductDetails} />
                </Fragment>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
