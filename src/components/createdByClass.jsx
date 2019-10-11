import React from 'react';
import createReactClass from 'create-react-class';
import schema from '../schema'



const Contacts = createReactClass({
    getInitialState() {
        return {
            count: 0
        };
    },
    increaseCount(){
        this.setState({count: this.state.count + 1})
    },
    render() {
        return ([
            React.createElement('h1',{key: 1},this.state.count),
            React.createElement('button',{key: 2, onClick: () => {this.increaseCount()}},'CLICK')
        ])
    }
});

export default Contacts;