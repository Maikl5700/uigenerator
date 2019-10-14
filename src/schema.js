export default {
    // store: {
    //     counters: {
    //         count: 0,
    //         increment: function () {
    //             this.count++
    //         },
    //         decrement: function () {
    //             this.count--
    //         }
    //     },
    //     formStore: {}
    // },
    items: [
        {
            component: 'Grid',
            name: 'grid_cont',
            props: {
                container: true,
                spacing: 0,
                style: {
                    padding: 0, // 4 * spacing
                    margin: 0,
                    width: '100%',
                    height: '100%'
                }
            },
            state: {
                container: true,
                spacing: 0,
                style: {
                    padding: 0, // 4 * spacing
                    margin: 0,
                    width: '100%',
                    height: '100%'
                }
            },
            items: [
                {
                    component: 'Grid',
                    name: 'grid_item1',
                    props: {
                        item: true,
                        style: {
                            height: '100%',
                            backgroundColor: '#ff0000',
                            width: '100%',
                            boxSizing: 'border-box',
                            border: '1px solid #000'
                        },
                        md: 6,
                        sm: 12
                    },
                    state: {
                        item: true,
                        style: {
                            height: '100%',
                            backgroundColor: '#ff0000',
                            width: '100%',
                            boxSizing: 'border-box',
                            border: '1px solid #000'
                        },
                        md: 6,
                        sm: 12
                    },
                    items: [
                        {
                            component: 'TextField',
                            props: {
                                label: 'Имя',
                                fullWidth: true
                            }
                        },
                        {
                            component: 'TextField',
                            props: {
                                label: 'Фамилия',
                                onInput: function () { console.log(this) },
                                fullWidth: true,
                                // value: this.props.store.count
                            }
                        },
                        {
                            component: 'Button',
                            props: {
                                onClick: function () { return console.log(this) },
                                variant: 'contained'
                            },
                            value: 'CLICK'
                        }
                    ]
                }
            ]
        }
    ]
}