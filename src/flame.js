import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/flame.css';
import $ from 'jquery';
import './loader';

class Flame extends React.Component {
	constructor() {
		super()
		this.state = {
		}
      }
      
    componentDidMount() {
        $("#switch").on('click', function () {
            if ($("body").hasClass("fire-off")) {
                $("body").removeClass("fire-off");
                $("#switch").removeClass("switched");
            }
            else {
                $("body").addClass("fire-off");
                $("#switch").addClass("switched");
    
            }
        });
    }

	render() {
		return (
			<div className="wrapper">
				
                <div class="fire-on"></div>
                <div class="switch-wrap">
                    <div id="switch">
                        <div id="circle"></div>
                    </div>
                </div>
                
                <div class="section-center">
                    <div class="moon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="shooting-star"></div>
                    <div class="shooting-star-2"></div>
                    <div class="star"></div>
                    <div class="star snd"></div>
                    <div class="star trd"></div>
                    <div class="star fth"></div>
                    <div class="star fith"></div>
                    <div class="circle"></div>
                    <div class="wood-circle"></div>
                    <div class="wood"></div>
                    <div class="tree-1"></div>
                    <div class="tree-2"></div>
                    <div class="fire">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="smoke">
                        <span class="s-0"></span>
                        <span class="s-1"></span>
                        <span class="s-2"></span>
                        <span class="s-3"></span>
                        <span class="s-4"></span>
                        <span class="s-5"></span>
                        <span class="s-6"></span>
                        <span class="s-7"></span>
                        <span class="s-8"></span>
                        <span class="s-9"></span>
                    </div>
                </div>
			</div>
		)		
	}
}

export default Flame;