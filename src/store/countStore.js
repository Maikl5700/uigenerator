import { observable } from 'mobx';

const counterState = observable({
    count: 0,
    increment: function () {
        this.count++
    },
    decrement: function () {
        this.count--
    }
})

export default counterState