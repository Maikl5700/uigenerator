import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as Components from '@material-ui/core'
import { Provider, inject, observer } from 'mobx-react'
import { observable } from 'mobx';

const store = observable({})

function renderItems(items, state) {

  const arItems = []

  items.forEach((item, i) => {
    let childs = null

    if (item.state) {
      console.log(item.state)
    }

    // CHILDS
    if (item.items && item.items.length) {
      childs = renderItems(item.items, item.state ? item.state : null)
    } else if (item.value && typeof item.value === 'string') {
      childs = item.value
    } else if (item.value && typeof item.value === 'number') {
      childs = item.value
    }

    arItems.push(React.createElement(
      item.store ? inject(item.store)(observer(Components[item.component])) : Components[item.component],
      Object.assign(item.props, { key: i }),
      childs
    ))
  })

  return arItems
}

export default function GGrid({ schema }) {
  // if (schema.store) {
  //   let stores = {}
  // }
  // for (var key in schema.store) {
  //   stores[key] = observable(schema.store[key])
  // }

  return (
    <Provider store={store}>
      {schema.items.map((item, i) => {
        return React.createElement(Grid, Object.assign(item.props, { key: i }), renderItems(item.items, store))
      })}
    </Provider>
  )
}