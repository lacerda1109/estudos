import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Página 1</Link>
                </li>
                <li>
                    <Link to="/page2">Página 2</Link>
                </li>
                <li>
                    <Link to="/page3">Página 3</Link>
                </li>
            </ul>
        </div>
    );
}
