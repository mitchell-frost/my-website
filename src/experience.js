import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import './css/exp.css';
import './loader';
import Carousel from 'react-bootstrap/Carousel';
import parch from './imgs/parch-h25.jpg'
import { DiNodejsSmall } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiJsBadge } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { DiWindows } from 'react-icons/di';
import { DiLinux } from 'react-icons/di';
import Card from "react-bootstrap/Card";
// images 
import svcs from "./imgs/svcs.jpg";
import iiit from "./imgs/iiitbbsr.jpg";
import kollur from "./imgs/narayana.jpg";


class Exp extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (
            <Container>
                <div>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}><h1 className="head">Internships</h1></Col>
                        <Col md={4}></Col>
                    </Row>
                    <br />
                    <Row>
                        
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={parch}
                            alt="OmniPresent Robot Tech. Pvt. Ltd."
                            />
                            <Carousel.Caption>
                            <h3 className="intern">Full Stack Engineer</h3>
                            <h4 className="intern">OmniPresent Robot Tech. Pvt. Ltd.</h4>
                            <p className="italic intern">Tasks/Achievements</p>
                            <p className="task">► Implemented the whole front-end and backend for a dashboard for Mahindra.</p>
                            <p className="task">► Designed and created the front-end for various dashboards with Flask and JInja2 templates.</p>
                            <p className="task">► Developed dashboards for JK Cement and Webel.</p>
                            <p className="task">► Working on the back-end implementation of APIs in Flask.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={parch}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 className="intern">Technical Script Writer</h3>
                            <h4 className="intern">Focus Edumatics Pvt. Ltd</h4>
                            <p className="italic intern">Tasks/Achievements</p>
                            <p className="task">► Single-handedly wrote technical blogs and created scripts for teaching.</p>
                            <p className="task">► Implemented codes in JavaScript and Python and helped students with doubt solving.</p>
                            <p className="task">► Designed session organizers for students with clear concept details.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={parch}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 className="intern">Web Developer</h3>
                            <h4 className="intern">Page Infinity</h4>
                            <p className="italic intern">Tasks/Achievements</p>
                            <p className="task">► Worked on the design and implementation of http://magicstoursandevents.com/</p>
                            <p className="task">► Designed specific parts in https://www.verzeo.in/</p>
                            <p className="task">► Worked on the designing of other websites.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={parch}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 className="intern">Technical Script Writer</h3>
                            <h4 className="intern">CodeUpKid</h4>
                            <p className="italic intern">Tasks/Achievements</p>
                            <p className="task">Created more than 20 scripts on various coding concepts including:</p>
                            <p className="task">► Events, functions, conditionals, loops, OOPS.</p>
                            <p className="task">► Programming with Python and a mega project of Snake and Ladders game.</p>
                            <p className="task">These are being taught to school kids from classes 8 to 10.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={parch}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 className="intern">Web Developer and Marketing Intern</h3>
                            <h4 className="intern">Airbucks</h4>
                            <p className="italic intern">Tasks/Achievements</p>
                            <p className="task">► Developed content for the social media platforms for the company.</p>
                            <p className="task">► Created wireframes and designed the UI/UX of the official website.</p>
                            <p className="task">► Worked on various photo editing softwares including Photoshop to design banners when required.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}><h1 className="head">Technical Skills</h1></Col>
                        <Col md={4}></Col>
                    </Row>
                    <Row><br /></Row>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10}>
                            <Row>
                                <div class="button_slide slide_right">WEB DEVELOPMENT</div>&nbsp;
                                <Button variant="dark"><DiNodejsSmall size="2.5em" color="#68a063" />NodeJS</Button>&nbsp;
                                <Button variant="dark"><DiReact size="2.5em" color="#61dbfb" />ReactJS</Button>&nbsp;
                                <Button variant="dark"><DiMongodb size="2.5em" color="green" />MongoDB</Button>&nbsp;
                                <Button variant="dark"><DiGithubBadge size="2.5em" color="#000" />Git</Button>&nbsp;
                                <Button variant="dark"><DiHtml5 size="2.5em" color="red" />HTML5</Button>&nbsp;
                                <Button variant="dark"><DiCss3 size="2.5em" color="blue" />CSS</Button>&nbsp;
                            </Row>
                            <br />
                            <Row>
                                <div class="button_slide slide_right">PROGAMMING LANGUAGES</div>&nbsp;
                                <Button variant="dark">C++</Button>&nbsp;
                                <Button variant="dark"><DiPython size="2.5em" color="yellow" />Python</Button>&nbsp;
                                <Button variant="dark"><DiJsBadge size="1.5em" color="#fff" /> JavaScript</Button>&nbsp;
                                <Button variant="dark">C</Button>&nbsp;
                                <Button variant="dark"><DiJava size="2.5em" color="blue" />Java</Button>&nbsp;
                                <Button variant="dark"><DiMysql size="2.5em" color="blue" />MySQL</Button>&nbsp;
                            </Row>
                            <br />
                            <Row>
                                <div class="button_slide slide_right">Operating Systems</div>&nbsp;
                                <Button variant="dark"><DiWindows size="2.5em" color="blue" />Windows</Button>&nbsp;
                                <Button variant="dark"><DiLinux size="1.5em" color="black" /> Linux (Ubuntu and Kali)</Button>&nbsp;
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}><h1 className="head">Education</h1></Col>
                        <Col md={4}></Col>
                    </Row>
                    <br /><br />
                    <Row>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={iiit} />
                            <Card.Body>
                                <Card.Title>Bachelor's in Technology</Card.Title>
                                <Card.Text>
                                IIIT (International Institute of Information Technology), Bhubaneshwar
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={kollur} />
                            <Card.Body>
                                <Card.Title>Higher Secondary</Card.Title>
                                <Card.Text>
                                Narayana IIT Academy, Hyderabad (Kollur Campus)
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={svcs} />
                            <Card.Body>
                                <Card.Title>High School</Card.Title>
                                <Card.Text>
                                St. Vincent's Convent School, Balasore
                                </Card.Text>
                                <p className="ac">Achievements: ICSE District topper</p>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Exp;
