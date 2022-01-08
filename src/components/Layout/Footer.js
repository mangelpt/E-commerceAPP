import React from 'react';
import {FooterContainer} from "../UI/Containers";
import {IconGit, IconLinkedin, IconTwitter} from "../../assets/Icons";
import {SmallLabel} from "../UI/Labels";

const Footer = () => {
    return (
        <FooterContainer>
            <SmallLabel>
                <a href="https://github.com/mangelpt" target="_blank">
                    <IconGit/>
                </a>
            </SmallLabel>
            <SmallLabel>
                Designed by
                <a href="https://github.com/mangelpt" target="_blank"> mangelpt </a>
            </SmallLabel>
            <SmallLabel>
                <a href="https://twitter.com/mg20101994" target="_blank">
                    <IconTwitter/>
                </a>
            </SmallLabel>
            <SmallLabel>
                <a href="https://www.linkedin.com/in/miguelpalmatalaverano/" target="_blank">
                    <IconLinkedin/>
                </a>
            </SmallLabel>
        </FooterContainer>
    );
};

export default Footer;
