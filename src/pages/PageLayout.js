import React from 'react';
import Header from "../components/Layout/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Layout/Footer";


const LayoutPage = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default LayoutPage;
