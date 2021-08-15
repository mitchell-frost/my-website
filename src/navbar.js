import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.myFunction = this.myFunction.bind(this);
    }


    myFunction() {
        var x = document.getElementById("myTopnav");
        var y = document.getElementById("ham");
        var z = document.getElementById("cross");
        if (x.className === "topnav") {
          x.className += " responsive";
          y.style.display = "none";
          z.style.display = "block";
        } else {
          x.className = "topnav";
          y.style.display = "block";
          z.style.display = "none";
        }
      }

    render(){
        return(
            <div className="topnav" id="myTopnav">
                <ul>
                    <a><li><NavLink to="/about/">About</NavLink></li></a>
                    <a><li><NavLink to="/exp/">Experience, Skills and Education</NavLink></li></a>
                    <a><li><NavLink to="/Projects/">Projects</NavLink></li></a>
                    <a><li><NavLink to="/contact/">Contact</NavLink></li></a>
                    <a><li><NavLink to="/blog/">Blog</NavLink></li></a>
                    <a href="#" class="icon" onClick={()=>this.myFunction()}>
                    {/* <div id="ham">
                        <p>Menu</p>
                    </div> */}
                    <i className="fa fa-bars" id="ham" color="#fff"></i>
                    <i className="fa fa-times fa-lg" id="cross" color="#fff"></i></a>
                </ul>
            </div>
        );
    }
}
export default Navbar;