import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Greet">Julian's React App</Link>
                <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Greet">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Features">Features</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    )
  }
}
