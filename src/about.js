import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/about.css';
import $ from 'jquery';
import './loader';
import resume from './resume.jpg';
import Typical from 'react-typical'

class About extends React.Component {
	constructor() {
		super()
		this.state = {
		}
	  }

	render() {
		return (
			<div class="wrapper">
				<div class="square"> 
					<div class="hey">
					<Typical
						steps={['Hey!👋 I\'m Bhawna!🌈', 20000]}
						loop={1}
						wrapper="h2"
					/> 
					</div> 
					<br />
					<div class="description">
					<p>I'm{' '}
						
					<Typical 
					loop={Infinity}
					wrapper="b"
					steps={[
						'a developer 💻', 500,
						'a blogger ✍🏻', 500,
						'a dancer 💃', 500,
						'an actor 🎭 ', 500,
						'an artist 🎨', 500,	
						'a freelancer 😀', 500
					]}
					
					/>	
					</p>
					<Typical 
						steps={['This is my story.', 1000]}
						loop={1}
						wrapper="p"
					/>	
					<Typical 
						steps={[
								'I am a full-stack developer with experience in Node, Express, React, Flask, and Django. I aim at creating beautiful projects with the maximum utility. [Wait a bit if you wanna know more 😉] ',20000,
								'When HTML5, CSS and Bootstrap could not meet the dynamic requirements,', 500, 
								'I went a step further to test my problem solving skills with JavaScript and full-stack development', 500, 
								'Now, I am well-versed with Node.js' , 500,
								'Now, I am well-versed with Express.js' , 500,
								'Now, I am well-versed with React.js' , 500,
								'Now, I am well-versed with MongoDB' , 500,
								'Now, I am well-versed with and the REST API.' , 500,
								'I have started developing with Django and flask too.', 400,
								'I enjoy challenging opportunities within and beyond my skillset. ' , 500,
								'From my first internship', 500,
								'in marketing and design', 500,
								'to taking up a full-stack role, ', 500,
								'I have always associated myself', 500,
								'I have always with people ', 500,
								'I have always who know and strive to achieve more than me.', 500,
								'I take a keen interest in co-curricular activities', 500,
								'I take a keen interest in co-curricular activities like', 500,
								'I take a keen interest in dancing.', 500,
								'I take a keen interest in painting.', 500 ,
								'I take a keen interest in acting.', 500, 
								'I take a keen interest in creative writing.', 500, 
								'I take a keen interest in debates.', 500, 
								'I have been an active member in many societies', 500 
						]}
						loop={Infinity}
						wrapper="p"
					/> 
					</div>
				</div> 
			</div>
		)		
	}
}

export default About;