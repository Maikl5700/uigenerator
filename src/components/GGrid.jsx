import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as Components from '@material-ui/core'
import Button from '@material-ui/core/Button'

function keyToProps(item, index) {
  return Object.assign(item.props, { key: index })
}


function renderJsonArray(items) {

  const array = []


  items.forEach((item, i) => {
    let childs = null

    // CHILDS
    if (item.items && item.items.length) {
      childs = renderJsonArray(item.items)
    } else if (item.value && typeof item.value === 'string') {
      childs = item.value
    } else if (item.value && typeof item.value === 'number') {
      childs = item.value
    }

    array.push(React.createElement(
      Components[item.component],
      Object.assign(item.props, { key: i }),
      childs
    ))
  })

  return array
}

export default function GGrid({ schema }) {
  return (
    <Grid container {...schema.props}>
      {schema.items.map((item, i) => {
        return React.createElement(Grid, keyToProps(item, i), renderJsonArray(item.items))
      })}
    </Grid>
  );
}