import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">useContext() 1</Link>
                </li>
                <li>
                    <Link to="/page2">useContext() 2</Link>
                </li>
                <li>
                    <Link to="/page3">useContext() 3</Link>
                </li>
                <div style={{borderBottom: '1px solid black'}}></div>
                <li>
                    <Link to="/page4">useReducer() 1</Link>
                </li>
            </ul>
        </div>
    );
}
