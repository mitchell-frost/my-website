import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './css/contact.css';
import './loader';
import pic from './imgs/pic2.PNG';
import Typical from 'react-typical';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
    address: 'IIIT Bhubaneshwar, India',
    lat: 20.2947,
    lng: 85.7434,
  }

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBmvnFdT0EC1O25w-_HUAyNemd0lkaTPHY' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )


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
                                <a href="https://www.facebook.com/patnaik.bhawna/" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/PatnaikBhawna" class="twitter"><i class="fa fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/bhawna-patnaik-mitch/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/mostly._.surreal/" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="https://github.com/mitchell-frost" class="github"><i class="fa fa-github"></i></a>
                                <a href="https://wa.me/+917328033635" class="whatsapp"><i class="fa fa-whatsapp"></i></a>
                            </div>
                        </Col>                         
                        <Col className="form-check-inline">
                            <form action="bhawna.patnaik.professional@gmail.com" method="post" enctype="text/plain">
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
                        </Col>                
                    </Row>
                </div>
                </Container>
            </div>

        )
    }

}

export default Contact;
