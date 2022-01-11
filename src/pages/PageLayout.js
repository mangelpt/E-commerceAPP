import React from 'react';
import Header from "../components/Layout/Header";
import {Outlet} from "react-router-dom";
import {Main} from "../components/UI/MainContainer";
import Footer from "../components/Layout/Footer";


const LayoutPage = () => {
    return (
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    );
};

export default LayoutPage;
