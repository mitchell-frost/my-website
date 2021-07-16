import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div className="topnav" id="myTopnav" >
                <ul>
                    <a><li><NavLink to="/about/">About</NavLink></li></a>
                    <a><li><NavLink to="/exp/">Experience, Skills and Education</NavLink></li></a>
                    <a><li><NavLink to="/Projects/">Projects</NavLink></li></a>
                    <a><li><NavLink to="/contact/">Contact</NavLink></li></a>
                    <a><li><NavLink to="/blog/">Blog</NavLink></li></a>
                    <a href="javascript:void(0);" class="icon" onClick={()=>this.myFunction()}>
                    <i class="fa fa-bars" color="#fff"></i></a>
                </ul>
            </div>
        );
    }
}
export default Navbar;