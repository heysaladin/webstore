import React, { Fragment, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import { LocaleContext } from './contexts';
import * as serviceWorker from './serviceWorker';
//import ProductList from './ProductList';
//import ProductDetails from './ProductDetails';

/**
 * Code Splitting using React.lazy and Suspense
 */
function LazyImport(Component) {
    const ComponentLoadable = React.lazy(Component);
    return props => (
        <Suspense
            fallback={
                <div className="container">
                    <div>Loading...</div>
                </div>
            }
        >
            <ComponentLoadable {...props} />
        </Suspense>
    );
}

const ProductList = LazyImport(() => import('./pages/ProductList'));
const ProductDetails = LazyImport(() => import('./pages/ProductDetails'));

class AppRouter extends React.Component {
    state = {
        locale: 'en'
    };

    handleSetLocale = locale => this.setState({ locale });

    render() {
        const { locale } = this.state;
        return (
            <LocaleContext.Provider
                value={{ locale, setLocale: this.handleSetLocale }}
            >
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/product/:product" exact component={ProductDetails} />
                </Fragment>
                </BrowserRouter>
            </LocaleContext.Provider>
        );
    }
}


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
