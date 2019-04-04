import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Count: {this.props.count}</h1>
            </div>
        );
    }
}

export default Counter;