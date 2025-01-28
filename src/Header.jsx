import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

const Header = () => {
    return (
        <div className='dd'>
            <Link className='ss'  to="/"><h1>StoreHub</h1></Link>
            <div className='aa'>
            <Link className='p' to="/">Home</Link>
            <Link className='p' to="/p">Panier</Link>
            <Link className='p' to="/a">AjouterProduct</Link>
            </div>
        </div>
    );
};

export default Header;