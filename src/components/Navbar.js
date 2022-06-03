import React from 'react'
import PropTypes from 'prop-types'
// import {
//     Link
//   } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand"  to="/">{props.title}</Link> */}
                <a className="navbar-brand"  href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page"  to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page"  href='#'>Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link"  to="/about">{props.aboutTxt}</Link>
                        </li> */}

                    </ul>
                    {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onClick={props.ColorPalet} value="red"  />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Red
                            </label>
                    </div>
                    &nbsp;
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios"  id="exampleRadios2" onClick={props.ColorPalet} value="green" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Green
                            </label>
                    </div>
                    &nbsp;
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" onClick={props.ColorPalet} value="blue"/>
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Blue
                            </label>
                    </div>
                    &nbsp;
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTxt: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutTxt: 'Set defult text here'
}

export default Navbar