import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';

import './Login.css';
import { on } from '../../models/user.model';

export default function (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePass = (event) => {
        setPassword(event.target.value);
    }

    const onChangePhone = (event) => {
        setPhoneNumber(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const user = {
            email : email,
            password : password,
            phoneNumber : phoneNumber
        }
        axios.post('http://localhost:4000/users/signup', user)
            .then(res => console.log(res.data));
        setEmail('');
        setPassword('');
        setPhoneNumber('');
    }

    return <div className="SignUp">
        <Container>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" 
                    id="exampleEmail" placeholder="Your email" 
                    value={email} onChange={onChangeEmail} />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password"
                     id="examplePassword" placeholder="Enter your password"
                     value={password} onChange={onChangePass} />
                </FormGroup>
                <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="text" name="phoneNumber"
                     id="phoneNumber" placeholder="Your phone number"
                     value={phoneNumber} onChange={onChangePhone} />
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
                <Button color="primary">Submit</Button>{' '}
            </Form>
        </Container>
    </div>
}