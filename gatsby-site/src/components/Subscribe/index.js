import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './subscribe.css'

export default function Subscribe(props) {
  return(
    <div className="subscription-container">
        <Form>
            <FormGroup>
                <div className="subscription-header">
                    <Label for="subscribption-mail">Subscribe to our Newsletter</Label>
                </div>
                <div className="subscription-input">
                    <Input type="email" name="email" id="subscribe-email" placeholder="Enter your Email to subscribe" required/>
                    <Button className="subscribesubmit">Submit</Button>
                </div>
            </FormGroup>
        </Form>
    </div>
  );
}