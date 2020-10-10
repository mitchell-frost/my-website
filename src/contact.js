import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Table } from 'reactstrap';
import './css/contact.css';
import $ from 'jquery';
import './loader';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="contact-div">
                <h1>Hey there!!</h1>
                    <div class="background">
                    <div class="container">
                        <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                            <div class="screen-header-button close"></div>
                            <div class="screen-header-button maximize"></div>
                            <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                            <div class="app-title">
                                <span>CONTACT</span>
                                <span>ME</span>
                            </div>
                            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                            </div>
                            <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                <input class="app-form-control" placeholder="NAME" />
                                </div>
                                <div class="app-form-group">
                                <input class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                <input class="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div class="app-form-group message">
                                <input class="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div class="app-form-group buttons">
                                <button class="app-form-button">CANCEL</button>
                                <button class="app-form-button">SEND</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="credits">

                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}

export default Contact;
