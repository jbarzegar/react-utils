// @flow
import React, { Component } from 'react'
import { renderComponent } from '../utils';


export default class Container extends Component {
  render = () =>
    renderComponent(this.props, this)
}
