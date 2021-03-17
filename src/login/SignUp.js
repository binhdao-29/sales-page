import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

import './Login.css';

export default function () {
    return <div className="SignUp">
        <Container>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Your email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Your phone number" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Gender</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="avatar">Avatar</Label>
                    <Input type="file" name="file" id="avatar" />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        I agree to the terms of service
                    </Label>
                </FormGroup>
                <Button>Sign Up</Button>
            </Form>
        </Container>
    </div>
}