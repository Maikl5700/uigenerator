export default {
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
                            height: '100px',
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
                            name: 'txtfld1',
                            props: {
                                variant1: 'contained',
                                value1: 'BTN'
                            },
                            state: {
                                value1: 'FEFEF'
                            }
                        }
                    ]
                },
                {
                    component: 'Grid',
                    name: 'grid_item2',
                    props: {
                        item: true,
                        style: {
                            height: '100px',
                            backgroundColor: '#0000ff',
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
                    }
                },
            ]
        }
    ]
}

                
                    // items: [
                    //     {
                    //         component: 'TextField',
                    //         name: 'text_field1',
                    //         props: {
                    //             label: 'Имя',
                    //             fullWidth: true
                    //         },
                    //         state: {
                    //             label: 'Имя',
                    //             fullWidth: true
                    //         }
                    //     },
                    //     {
                    //         component: 'TextField',
                    //         name: 'text_field2',
                    //         props: {
                    //             label: 'Фамилия',
                    //             onInput: function () { console.log(this) },
                    //             fullWidth: true,
                    //             // value: this.props.store.count
                    //         },
                    //         state: {
                    //             label: 'Имя',
                    //             fullWidth: true
                    //         }
                    //     },
                    //     {
                    //         component: 'Button',
                    //         name: 'button1',
                    //         props: {
                    //             onClick: function () { return console.log(this) },
                    //             variant: 'contained'
                    //         },
                    //         state: {
                    //             label: 'Имя',
                    //             fullWidth: true
                    //         },
                    //         value: 'CLICK'
                    //     }
                    // ]