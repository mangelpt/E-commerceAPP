import React from 'react';
import SignIn from "../components/Layout/SignInForm";
import CreateAccountForm from "../components/Layout/CreateAccountForm";
import {Grid} from "../components/Layout/Grid";

const Login = () => {
    return (
        <>
            <Grid size={350} gap={10} rows={"auto"}>
                <SignIn/>
                <CreateAccountForm/>
            </Grid>
        </>
    );
};

export default Login;
