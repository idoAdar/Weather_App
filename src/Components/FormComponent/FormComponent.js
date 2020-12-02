import React, { Component } from 'react';
import './FormComponent.css';

class Form extends Component {
    render() {
        if(!this.props.status) {
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => input.value = '');
        }

        return (
            <form onSubmit={this.props.getRequestFunc}>
                <input type="text" name="city" placeholder="City..."></input>
                <input type="text" name="country" placeholder="Country..."></input>
                <button>GET</button>
                <button onClick={this.props.clear}>Clear</button>
            </form>
        )
    }
}

export default Form;