import React from 'react';
import {Form} from "../UI/Form";
import {FormContainer} from "../UI/Containers";
import {Label, LargeLabel} from "../UI/Labels";
import {Input} from "../UI/Input";
import {SignInButton} from "../UI/Buttons";
import {TextArea} from "../UI/TextArea";

const ContactForm = () => {
    return (
        <FormContainer>
            <LargeLabel>Contact US</LargeLabel>
            <Form>
                <Label htmlFor="name2">name</Label>
                <Input type="text" id="name2"/>
                <Label htmlFor="email2">email</Label>
                <Input type="email" id="email2"/>
                <Label htmlFor="password1">password</Label>
                <Input type="password" id="password1"/>
                <Label htmlFor="message">Message</Label>
                <TextArea id="message"/>
                <SignInButton>Send</SignInButton>
            </Form>
        </FormContainer>
    );
};

export default ContactForm;
