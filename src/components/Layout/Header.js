import React from 'react';
import {HeaderContainer} from "../UI/Containers";
import {LogoIcon} from "../../assets/LogoIcon";
import {LogoContainer} from "../UI/LogoContainer";
import {Nav} from "../UI/Nav";
import {Link} from "react-router-dom";
import { SmallLabel} from "../UI/Labels";
import CollapsedComponent from "./CollapsiveCard";

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <LogoContainer>
                    <LogoIcon/>
                </LogoContainer>
            </Link>
            <Nav>
                <Link to="/"><SmallLabel>SHOP</SmallLabel></Link>
                <Link to="Contact"><SmallLabel>CONTACT</SmallLabel></Link>
                <Link to="/"><SmallLabel>SING IN</SmallLabel></Link>
                <CollapsedComponent/>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
