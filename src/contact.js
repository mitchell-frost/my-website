import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/contact.css';
import './loader';
import pic from './imgs/pic2.PNG'

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
                        <Col>
                        <img src={pic} alt="Bhawna" height="400" width="300" />
                        </Col>
                        <Col className="form-check-inline">
                            <form>
                                <p style={{color: '#000'}}>Contact Me</p>
                                <input type="text" placeholder="Enter your name" /> <br />
                                <input type="email" placeholder="Enter your e-mail" /> <br />
                                <input type="textarea" placeholder="Enter your message" /> <br />
                                <input type="submit" />
                            </form>
                        </Col>                        
                    </Row>
                </div>
                </Container>
            </div>
        )
    }
}

export default Contact;
