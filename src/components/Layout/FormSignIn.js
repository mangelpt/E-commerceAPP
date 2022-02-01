import React from 'react';
import {Form} from "../UI/Form";
import {FormContainer, ItemDetailsContainer} from "../UI/Containers";
import {Label, LargeLabel} from "../UI/Labels";
import {Input} from "../UI/Input";
import {SignInButton, SignInGoogleButton} from "../UI/Buttons";

const SignIn = () => {
    return (
        <FormContainer>
            <LargeLabel>Login</LargeLabel>
            <Form>
                <Label htmlFor="email">email</Label>
                <Input type="email" id="email"/>
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password"/>
                <ItemDetailsContainer>
                    <SignInButton>SIGN IN</SignInButton>
                    <SignInGoogleButton>SIGN IN WITH GOOGLE</SignInGoogleButton>
                </ItemDetailsContainer>
            </Form>
        </FormContainer>
    );
};

export default SignIn;
