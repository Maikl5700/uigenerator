import React, { Component } from 'react';
import * as Components from '@material-ui/core'



const FormSchema = {
    label: {
        tag: 'h2',
        text: 'Форма'
    },
    props: {
        style: {
            width: '500px',
            height: '600px',
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            padding: '10px',
            boxSizing: 'border-box'
        }
    },
    items: [
        {
            component: 'TextField',
            props: {
                label: 'Имя'
            },
            items: [{
                component: 'TextField',
                props: {
                    label: 'Фамилия'
                }}
            ]
        },
        {
            component: 'TextField',
            props: {
                label: 'Фамилия'
            }
        },
        {
            component: 'TextField',
            props: {
                label: 'E-Mail',
                fullWidth: true
            }
        }
    ]
}




export class GForm extends Component {
    keyToProps(item, index) {
        return Object.assign(item.props, { key: index })
    }

    render() {
        const { keyToProps } = this

        return (

            <form {...FormSchema.props}>
                {FormSchema.items.map((item, i) => {
                    return React.createElement(Components[item.component], keyToProps(item, i), null)
                })}
            </form>
        );
    }
}

export default GForm;
