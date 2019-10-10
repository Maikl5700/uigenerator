export default {
    props: {
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
                        fullWidth: true
                    }
                },
                {
                    component: 'Button',
                    props: {
                        onClick: (e) => { console.log(e) },
                        variant: 'contained'
                    },
                    value: 'CLICK'
                }
            ]
        },
        {
            component: 'Grid',
            props: {
                item: true,
                style: {
                    height: '100%',
                    backgroundColor: '#0000ff',
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
                        fullWidth: true
                    }
                },
                {
                    component: 'Grid',
                    props: {
                        // label: 'E-Mail',
                        // fullWidth: true,
                        container: true,
                        style: {
                            height: '80%',
                            backgroundColor: '#00ff00'
                        }
                    },
                    items: [
                        {
                            component: 'Grid',
                            props: {
                                item: true,
                                style: {
                                    height: '90%',
                                    backgroundColor: '#2c2c2c'
                                },
                                lg: 6,
                                sm: 12
                            }
                        }
                    ]
                }
            ]
        },
    ]
}