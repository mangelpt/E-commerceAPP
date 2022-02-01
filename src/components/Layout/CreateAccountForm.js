import React from 'react';
import {Form} from "../UI/Form";
import {FormContainer} from "../UI/Containers";
import {Label, MediumLabel} from "../UI/Labels";
import {Input} from "../UI/Input";
import {SignInButton} from "../UI/Buttons";

const CreateAccountForm = () => {
    return (
        <FormContainer>
            <MediumLabel> Sign up here</MediumLabel>
            <Form>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name"/>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email"/>
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password"/>
                <Label htmlFor="passwordConfirm">Confirm password</Label>
                <Input type="password" id="passwordConfirm"/>
                <SignInButton>SIGN UP</SignInButton>
            </Form>
        </FormContainer>
    );
};

export default CreateAccountForm;
