import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import index from './components/index'


export default function Routes(){


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={index}></Route>
      </Switch>
    </BrowserRouter>
  )
}