import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/about.css';
import $ from 'jquery';
import './loader';
import resume from './resume.jpg';

class About extends React.Component {
	constructor() {
		super()
		this.state = {
		}
	  }

	render() {
		return (
			<div className="wrapper">
				<div class="square"> 
					<div>  
						<img src=  
								{resume}
								height="200"
								width="180"
								alt="Longtail boat in Thailand" />  
					</div> 
					
					<p> 
						I started web development because of my knack for designing. 
						When HTML5, CSS and Bootstrap could not meet the dynamic 
						requirements, I went a step further to test my problem solving 
						skills with JavaScript and full-stack development. Now, I am 
						well-versed with Node.js, Express.js, React.js, MongoDB and the 
						REST API. I have started developing with Django and enjoy challenging 
						opportunities within and beyond my skillset. From my first internship 
						in marketing and design to taking up a full-stack role, I have always 
						associated myself with people who know and strive to achieve more than me. 
					</p> 
				</div> 
			</div>
		)		
	}
}

export default About;