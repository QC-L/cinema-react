import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <img src={require('./assets/images/timg.jpg')} />
      </div>
    )
  }
}

module.exports = App
