import React from 'react';
import {SignInForm} from "../UI/SignInForm";
import {FormContainer} from "../UI/Containers";
import {Label, LargeLabel} from "../UI/Labels";
import {Input} from "../UI/Input";

const SignIn = () => {
    return (
        <FormContainer>
            <LargeLabel>Login</LargeLabel>
            <SignInForm>
                <Label htmlFor="email">email</Label>
                <Input type="email" id="email"/>
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password"/>
            </SignInForm>
        </FormContainer>
    );
};

export default SignIn;
