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
import meme from './projects/meme.png';
import score from './projects/score.png';
// ==============================================
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typical from 'react-typical'

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
				<Typical
					loop={Infinity}
					wrapper="p"
					steps={['Click on the specific project to see code or demo 🌈!', 1000]}					
				/>
				{/*<p style={{fontSize: 10, color: 'grey'}}>Click on the specific project to see code or demo</p>*/}
					<Row className="justify-content-md-center">
					<Col style={{margin: 20}}>
							<Flippy // YELP CAMP
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '260px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#ffffff',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="yelpCamp">
									<img src={yelpCamp} alt="yelpCamp" height="200" width="300" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#175852'}}>
								<br /><br />
								<Button variant="danger" 
										href="https://github.com/mitchell-frost/Yelp_Camp" 
										target="_blank"
								>CODE</Button><br /><br />
								<p id="description">
								YELP CAMP <br /><br />
								A MEN stack project that has user authentication and allows to add, remove and edit campgrounds and comments.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col style={{margin: 20}}>
							<Flippy // COLOR GAME
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="vertical" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '260px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#ffffff',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="yelpCamp">
									<img src={colorGame} alt="color game" height="240" width="280" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#8A2BE2'}}>
								<br /><br />
								<Button variant="danger"
										href="https://github.com/mitchell-frost/RGB-Color-Game"
										target="_blank"
										style = {{margin: 10}}
										>CODE
								</Button>
								<Button variant="light"
										href="https://rgb-color-game-sigma.vercel.app/"
										target="_blank"
										style = {{margin: 10}}
										>DEMO
								</Button><br /><br />
								<p id="description">
									THE GREAT RGB COLOR GAME <br /><br />
								A simple project built with HTML, CSS and JS that lets you choose a color based on the RGB values given.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col style={{margin: 20}}> 
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '260px' }} /// these are optional style, it is not necessary
							>
								<FrontSide
								style={{
									backgroundColor: '#61dbfb',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>

								<div class="yelpCamp">
									<img src={todoReact} alt="React JS ToDo" height="200" width="280" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: '#61dbfb'}}>
								<br /><br />
								<Button variant="danger"
										href="https://github.com/mitchell-frost/To-Do-App"
										target="_blank"
										style = {{margin: 10}}
										>CODE
								</Button>
								<Button variant="light"
										href="https://to-do-app-silk.vercel.app/"
										target="_blank"
										style = {{margin: 10}}
										>DEMO
								</Button><br />
								<p id="description" style={{color: "darkblue", fontSize: 15}}>
									TO-DO APP with ReactJS <br /><br />
								A simple to-do list to add, remove elements built with ReactJS.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
					</Row>
					<br /><br />
					<Row>

						<Col style={{margin: 20}}>
							<Flippy
								flipOnHover={false} // default false
								flipOnClick={true} // default false
								flipDirection="horizontal" // horizontal or vertical
								ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
								// if you pass isFlipped prop component will be controlled component.
								// and other props, which will go to div
								style={{ width: '300px', height: '260px' }} /// these are optional style, it is not necessary
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
								style={{ backgroundColor: '#FF1493'}}>
								<br /><br />
								<Button variant="danger"
										href="https://github.com/mitchell-frost/Frontend-Tutorial_website"
										target="_blank"
										style = {{margin: 10}}
										>CODE
								</Button>
								<Button variant="light"
										href="https://frontend-tutorial.herokuapp.com/"
										target="_blank"
										style = {{margin: 10}}
										>DEMO
								</Button><br /><br />
								<p id="description">
									FRONTEND TUTORIAL WEBSITE
								<br /><br />
								This is a tutorial built with HTML, CSS and a little bit of JavaScript about HTML and CSS
									
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col style={{margin: 20}}>
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
								style={{ backgroundColor: '#FF8C00'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								<p id="description">
									WORDCOUNTER WEBSITE
								<br /><br />
								This site takes a text input from the user and displays the number of words present in the text 
								in alphabtical order.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col style={{margin: 20}}>
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
									backgroundColor: 'maroon',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="wordcount">
									<p class="tutor">MEME GENERATOR</p>
									<img src={meme} alt="meme generator" height="200" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: 'maroon'}}>
								<br /><br />
								<Button variant="danger"
										href="https://github.com/mitchell-frost/meme-generator"
										target="_blank"
										style = {{margin: 10}}
										>CODE
								</Button>
								<Button variant="light"
										href="https://meme-generator-lovat.vercel.app/"
										target="_blank"
										style = {{margin: 10}}
										>DEMO
								</Button><br /><br />
								<p id="description">
									MEME GENERATOR
								<br /><br />
								You can give a top and bottm text and the site generates a random meme from an API.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
					</Row>
					<br /><br />
					<Row>
						<Col style={{margin: 20}}>
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
								style={{ backgroundColor: '#00FF7F'}}>
								<br /><br />
								<Button variant="danger">CODE</Button>
								<p id="description" style={{color: 'darkblue', fontSize: 15}}>
									RESTFUL BLOG APP
								<br /><br />
								An app built with Node, Express and MongoDB that uses the REST API.	
								</p> 
								</BackSide>
							</Flippy>
						</Col>
						<Col style={{margin: 20}}>
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
									backgroundColor: 'darkblue',
									display: 'flex', 
									justifyContent: 'center'
								}}
								>
								<div class="wordcount">
									<p class="tutor">SCORE KEEPER</p>
									<img src={score} alt="score keeper" height="180" width="240" />
								</div>
								
								</FrontSide>
								<BackSide
								style={{ backgroundColor: 'darkblue'}}>
								<br /><br />
								<Button variant="danger">CODE</Button><br /><br />
								
								</BackSide>
							</Flippy>
						</Col>
						<Col style={{margin: 20}}>
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
								style={{ backgroundColor: '#00FF7F'}}>
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
					<div className="explore-github">
						<p>
							Explore all my projects on <button>Github<i class="fab fa-github"></i></button>
							<i class="fa fa-github" style={{fontSize:38, color:'lightgrey'}}></i>
						</p>
					</div>
					</Container>				
			</div>
		)		
	}
}

export default Projects;