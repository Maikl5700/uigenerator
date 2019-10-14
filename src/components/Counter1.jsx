import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

class Counter extends Component {

    decr = () => { this.props.store.decrement() }

    render() {
        return (
            <div>
                <h1 style={{ margin: 0 }}>{this.props.store.count}</h1>
                <button onClick={this.decr}>-1</button>
            </div>
        );
    }
}

// export default inject(, Counter);
export default inject('store')(observer(Counter));