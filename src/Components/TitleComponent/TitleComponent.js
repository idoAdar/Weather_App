import React, { Component } from 'react';
import './titleComponent.css';

class Title extends Component {
    render() {
        return (
            <div className="mainTitle">
                <h1>Weather Finder</h1>
                <p>find out temperature, conditions and more...</p>
            </div>
        )
    }
}

export default Title;