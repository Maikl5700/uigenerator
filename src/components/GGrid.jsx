import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as Components from '@material-ui/core'

function keyToProps(item, index) {
  return Object.assign(item.props, { key: index })
}

function renderJson(json){

}

function renderJsonArray(items){

  const array = []


  items.map((item, i) => { 
    let childs = null

    // CHILDS
    console.log(item)
    if(item.items && Array.isArray(item.items) && item.items.length){
      childs = renderJsonArray(item.items)
    }

    array.push(React.createElement(
      Components[item.component],
      Object.assign(item.props, {key:i}),
      childs 
    ))
  })

  return array
}

export default function GGrid({ schema }) {
  return (
    <Grid container {...schema.props}>
      {schema.items.map((item , i) => {
        return React.createElement(Grid,keyToProps(item, i), renderJsonArray(item.items))
      })}
    </Grid>
  );
}