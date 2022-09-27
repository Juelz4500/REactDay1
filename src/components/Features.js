import React, { Component } from 'react'

export default class Features extends Component {
  render() {
    return (
      <div>
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <h1>{this.props.mystate}</h1>
      </div>
    )
  }
}
