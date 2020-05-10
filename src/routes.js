import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import index from './components/index'
import listpost from './components/blog/listpost/listpost'


export default function Routes(){


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={index}></Route>
        <Route path="/blog" component={listpost}></Route>
      </Switch>
    </BrowserRouter>
  )
}