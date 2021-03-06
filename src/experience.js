import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/exp.css';
import './loader';
import pic from './imgs/pic2.PNG'

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
                        <h1>Experience</h1>
                    </Row>
                    <Row>
                        <h1>Skills</h1>
                    </Row>
                    <Row>
                        <h1>Education</h1>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Exp;
