import React from 'react';
import {HeaderContainer} from "../UI/Containers";
import {LogoIcon} from "../../assets/LogoIcon";
import {LogoContainer} from "../UI/LogoContainer";
import {Nav} from "../UI/Nav";
import {Link} from "react-router-dom";
import { SmallLabel} from "../UI/Labels";
import {IconCart} from "../../assets/Icons";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoIcon/>
            </LogoContainer>
            <Nav>
                <Link to="/"><SmallLabel>SHOP</SmallLabel></Link>
                <Link to="/"><SmallLabel>CONTACT</SmallLabel></Link>
                <Link to="/"><SmallLabel>SING IN</SmallLabel></Link>
                <div>  <IconCart/> </div>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
