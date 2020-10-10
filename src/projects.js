import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/projects.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// IMAGE FILES
import yelpCamp from './projects/yelpCamp.gif';
import colorGame from './projects/colorGame.gif';
import todoReact from './projects/todoReact.gif';
import tutorial from './projects/tutorial.gif';
import wordcount from './projects/wordcount.gif';
import blog from './projects/blog.jpg';
// ==============================================
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Projects extends React.Component {
	constructor() {
		super()
		this.state = {
		}
	  }

	render() {
		return (
			<div className="wrapper">
				<Container>
					<Row>
						<Col xs={5}>
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '500px', height: '360px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#41669d',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="yelpCamp">
									<p>YELP CAMP</p>
									<img src={yelpCamp} alt="yelpCamp" height="270" width="470" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#175852'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col xs={2}></Col>
						<Col xs={5}>
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="vertical" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '400px', height: '360px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#ffffff',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="yelpCamp">
									<img src={colorGame} alt="color game" height="320" width="360" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
					</Row>
					<br /><br />
					<Row>
					<Col xs={5}>
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '380px', height: '270px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#61dbfb',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>

								<div class="yelpCamp">
									<img src={todoReact} alt="color game" height="235" width="350" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col xs={4}>
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '270px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#FF1493',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								
								<div class="tutorial">
									<p class="tutor">TUTORIAL WEBSITE</p>
									<img src={tutorial} alt="color game" height="190" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col xs={3}>
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '270px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#FF8C00',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="wordcount">
									<p class="tutor">WORD COUNTER SITE</p>
									<img src={wordcount} alt="color game" height="160" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
					</Row>
					<br /><br />
					<Row>
						<Col>
						<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '270px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#00FF7F',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="wordcount">
									<p class="tutor" style={{color: 'green'}}>RESTful BLOG APP</p>
									<img src={blog} alt="blog" height="160" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col>
						<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '270px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#00FF7F',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="wordcount">
									<p class="tutor">WORD COUNTER SITE</p>
									<img src={wordcount} alt="color game" height="160" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col>
						<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '270px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#00FF7F',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="wordcount">
									<p class="tutor">WORD COUNTER SITE</p>
									<img src={wordcount} alt="color game" height="160" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
					</Row>
					</Container>
				

				
			</div>
		)		
	}
}

export default Projects;