import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Counter = observer(class Counter extends Component {

    incr = () => { this.props.store.increment() }

    render() {
        return ( 
            <div>
                <h1 style={{margin:0}}>{this.props.store.count}</h1>
                <button onClick={this.incr}>+1</button>
            </div>
        );
    }
})

export default Counter;
