import React from "react";
import {Link} from 'react-router-dom';  
import icon from '../../assets/img/favicon.ico';


class Navbar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm main-nav">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src={icon} width="20px" height="20px"></img>
                            Full Stack Developer</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item px-2">
                                    <Link to="/" className="nav-link">  <i className="fa fa-home"></i>Home</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/about" className="nav-link"><i className="fa fa-id-card"></i>About</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/about" className="nav-link"><i className="fa fa-cog"></i> Courses</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to="/extra" className="nav-link"> <i className="fa fa-envelope"></i>Extra</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;