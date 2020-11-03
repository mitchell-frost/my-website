import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/contact.css';
import './loader';
import pic from './imgs/pic2.PNG'
import Typical from 'react-typical'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="contact-div">
                <Container>
                <div class="card">
                    <Row>   
                        <Col className="social-sidebar">
                            <div class="icon-bar">
                                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="#" class="github"><i class="fa fa-github"></i></a>
                                <a href="#" class="whatsapp"><i class="fa fa-whatsapp"></i></a>
                            </div>
                        </Col>                         
                        <Col className="form-check-inline">
                            <form>
                            <Typical
                                steps={['Contact Me!', 100]}
                                loop={6}
                                wrapper="p"
                            /> 
                                <p style={{color: '#000', marginBottom: 30, marginTop: 0}}>Contact Me!</p>
                                <input id="line" type="text" placeholder="Enter your name" /> <br />
                                <input id="line" type="email" placeholder="Enter your e-mail" /> <br />
                                <input id="line" type="textarea" placeholder="Enter your message" /> <br />
                                <button type="submit" form="form1" value="Submit" style={{margin: 20}}>Send a message!</button>
                            </form>
                            <p style={{color: '#000'}}></p>
                        </Col>   
                        <Col>
                        <img src={pic} alt="Bhawna" height="400" width="300" />
                        </Col>     
                        <Col>
                            <p style={{color: '#000', fontSize: 20}}>Find me!</p>
                            <div id="mapid" style={{width: 300, height: 300}}></div>
                        </Col>                
                    </Row>
                </div>
                </Container>
            </div>

        )
    }
}

export default Contact;
