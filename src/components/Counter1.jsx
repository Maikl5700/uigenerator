import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Counter = observer(class Counter extends Component {

    decr = () => { this.props.store.decrement() }

    render() {
        return (
            <div>
                <h1 style={{margin:0}}>{this.props.store.count}</h1>
                <button onClick={this.decr}>-1</button>
            </div>
        );
    }
})

export default Counter;
