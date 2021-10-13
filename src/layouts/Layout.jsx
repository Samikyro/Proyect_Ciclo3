import '../styles/styles.css';
import React from 'react';
import Header from '../components/Header';

const Layout = ({children}) => {
    return (
        <div className = "mainContainer">
            <Header/>
            <main>{children}</main>
        </div>
    )
}

export default Layout
