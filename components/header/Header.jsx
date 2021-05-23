import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src="1520014833894.jpg" alt="hello there"/>
                <a href="https://youtu.be/I2UBjN5ER4s" className="hidden-msg">
                    <h1>Click Me</h1>
                </a>
            </div>
        )
    }
}