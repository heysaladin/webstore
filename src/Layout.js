import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LocaleSelect from './LocaleSelect';
import { LocaleContext } from './contexts';
import trans from './trans';

export default function Layout({ children }) {
    return (
        <div className="container">
                <LocaleContext.Consumer>
                    {({ locale }) => (
                        <div className="navbar-end">
                            <a className="navbar-item">{trans[locale]['Home']}</a>
                            <LocaleSelect />
                        </div>
                    )}
                </LocaleContext.Consumer>
            {children}
        </div>
    );
}