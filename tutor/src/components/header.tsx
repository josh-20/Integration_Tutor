import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="topnav">
            <Link to="/">Home</Link>
            <Link to="/Question1">Question1 U Substitution</Link>
            <Link to="/Question2">Question2 Integration by Parts</Link>
        </nav>
    );
}