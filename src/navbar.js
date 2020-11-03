import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {
    constructor() {
        super()
        this.state = {

        }

        this.myFunction = this.myFunction.bind(this);
    }

    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    render(){
        return(
            <nav class="topnav" id="myTopnav" className="navBar">
                <ul>
                    <li><NavLink to="/about/">About</NavLink></li>
                    <li><NavLink to="/contact/">Contact</NavLink></li>
                    <li><NavLink to="/exp/">Experience</NavLink></li>
                    <li><NavLink to="/Projects/">Projects</NavLink></li>
                    <li><NavLink to="/blog/">Blog</NavLink></li>
                    <li>&#9776;</li>
                    <li><a href="javascript:void(0);" style={{fontSize: 15}} class="icon" onclick="myFunction()">&#9776;</a></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;