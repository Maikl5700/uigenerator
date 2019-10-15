import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import * as Components from '@material-ui/core'
import { Provider, inject, observer } from 'mobx-react'
import { observable } from 'mobx';

// const store = observable({})
let firstItem = true
let rootStore = {}

function renderItems(items, states) {

  let arItems = []

  for (let i = 0; i < items.length; i++) {
    let childs = null;



    // CHILDS
    if (items[i].items && items[i].items.length) {
      const result = renderItems(items[i].items, items[i].state)
      states[items[i].name] = result.states
      childs = result.arItems
    } else if (items[i].value && typeof items[i].value === 'string') {
      childs = items[i].value
      states[items[i].name] = items[i].state
    } else if (items[i].value && typeof items[i].value === 'number') {
      childs = items[i].value
      states[items[i].name] = items[i].state
    } else {
      states[items[i].name] = items[i].state 
    }


    // ITEMS
    arItems.push(React.createElement(
      // inject(items[i].store)(observer(Components[items[i].component])),
      Components[items[i].component],
      Object.assign(items[i].props, { key: i }),
      childs
    ))
  }
  
  return { arItems, states }
}


export default function GGrid({ schema }) {

  const items = schema.items.map((item, i) => {
    const result = renderItems(item.items, item.state)
    Object.assign(rootStore, result.states)
    console.log('ROOT',rootStore)
    return React.createElement(Grid, Object.assign(item.props, { key: i }), result.arItems)
  })

  return (
    <Provider store={rootStore}>
      {items}
    </Provider>
  )
}
