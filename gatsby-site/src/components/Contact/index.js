import React from 'react';
import Link from 'gatsby-link';
import "./contact.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className="form-container">
                <div className="left-image">
                </div>
                    <div className="right-form">
                        <h1 className="form-title">Get in touch</h1>
                        <Form>
                            <FormGroup>
                            <Input type="name" name="name" id="name" placeholder="Name" required/>
                            </FormGroup>
                            <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Email" required/>
                            </FormGroup>
                            <FormGroup>
                            <Input type="textarea" name="text" id="exampleText" placeholder="Message" required/>
                            </FormGroup>
                            <Button className="submitbtn">Send</Button>
                        </Form>
                    </div>
        </div>
    );
  }
}