import React from 'react';
import styles from './_ContactUs.scss';

import { Alert,
         Grid, Row, Col,
         Form, FormGroup, FormControl, 
         Button } from 'react-bootstrap'

import bg from './images/green_dust_scratch.png'

class ContactUs extends React.Component {
  constructor (props) {
    super(props);
    this.state = { name: '', email: '', phone: '', captcha: '', description: '', 
                   alert: 'alert text', alertVisible: false, success: '', successVisible: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // let url = 'http://wasya.local/contact_us.php';
    let url = `http://${document.domain}/contact_us.php`;

    if (this.state.captcha === '14' || true) {
      this.setState({ ['alertVisible']: false });
      let payload = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        verification: this.state.captcha,
        descr: this.state.description
      };
      
      fetch( url, { method: 'POST', 
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'applicaton/json'
                    },
                    body: JSON.stringify(payload) 
      }).then(res => res.json()).then(res => {
        if (res === 'ok') {
          this.setState({ ['success']: 'Message successfully sent',
                          ['successVisible']: true,
                          ['alertVisible']: false });
        } else {
          this.setState({ ['alert']: 'Page says: ' + res, 
                          ['successVisible']: false, 
                          ['alertVisible']: true });
        }
      });
    } else {
      this.setState({ ['alert']: 'Check captcha please', ['alertVisible']: true });
    }
  }

  render () {
    let alert   = this.state.alertVisible   ? <Row><Col xs={8} xsOffset={2}><Alert bsStyle="warning">{this.state.alert}</Alert></Col></Row>   : '';
    let success = this.state.successVisible ? <Row><Col xs={8} xsOffset={2}><Alert bsStyle="success">{this.state.success}</Alert></Col></Row> : '';
    return (
      <div className={styles.contactUs} style={{ backgroundImage: `url(${bg})` }} id="contact" >
        <Grid  >
          <Form onSubmit={this.handleSubmit} >
            <Row>
              <Col xs={12}>
                <h1 className={styles.center} >Contact Us</h1>
              </Col>
            </Row>
            {alert}
            {success}
            <Row>
              <Col xs={12} md={8} mdOffset={2} >
                <p>Let us know a bit about you and about your project to start a conversation.</p>
              </Col>
              <Col xs={12} md={4} mdOffset={2} >
                <FormGroup controlId="name">
                  <FormControl name="name" type="text" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId="email">
                  <FormControl name="email" type="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId="phone">
                  <FormControl name="phone" type="text" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId="captcha">
                  <FormControl name="captcha" type="text" placeholder="What's 5 + 9?" value={this.state.captcha} onChange={this.handleChange} />
                </FormGroup>
              </Col> 
              <Col xs={12} md={4} >
                <FormGroup controlId="description">
                  <FormControl name="description" componentClass="textarea" style={{ height: '120px' }} placeholder="A Brief Description of your project" onChange={this.handleChange} />
                </FormGroup>
                <Button bsStyle="primary" bsSize="small" onClick={this.handleSubmit} >Send</Button>
              </Col>
            </Row>
          </Form>
        </Grid>
        <br /><br /><br /><br />
      </div>
    )
  }
}

export default ContactUs

