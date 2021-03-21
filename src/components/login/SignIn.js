import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import './Login.css';

export default function SignIn(props) {

    return <div className="SignUp">
        <Container>
            <h1 style={{marginBottom: 40}}>Login</h1>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" 
                            id="exampleEmail" placeholder="Your email"
                             />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" 
                            id="examplePassword" placeholder="Enter your password"
                            />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Remember your password?
                    </Label>
                </FormGroup>
                <Button type="button">Sign In</Button>
            </Form>
        </Container>
    </div>
}