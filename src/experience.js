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
            <div>
                <h1>Experience</h1>
                <h1>Skills</h1>
                <h1>Education</h1>
            </div>
        )
    }
}

export default Exp;
