import React from "react";
import styled from "styled-components";

import imageLogo from "../../assets/logos/logo-chocomel.jpg";
import LogoFacebook from "../../assets/icons/logo-facebook.png";
import LogoInstagram from "../../assets/icons/logo-instagram.png";
import LogoEmail from "../../assets/icons/logo-email.png";

const MainHeader = styled.header`
    background-color: #2a1510;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end; 
    padding: 20px; 
    position: sticky;
    top: 0;
    z-index: 100;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const ImageLogo = styled.img`
    width: 150px;
    height: 100%;
    margin-left: 40px;
    
    @media (max-width: 480px) {
        margin-left: 0px;
    }
`;

const ImageIcon = styled.img`
    width: 50px;
    margin-right: 40px;

    @media (max-width: 480px) {
        margin-top: 10%;
        margin-right: 20px;
    }

    &:hover {
        transform: scale(1.5);
        transition: transform 0.3s ease;
    }
`;

export default function Header() {
    return (
        <MainHeader>
            <div>
                <a href="/">
                    <ImageLogo src={imageLogo} alt="Logo Chocomel"/>
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100086276622209" target="_blank">
                    <ImageIcon src={LogoFacebook} alt="Logo Facebook"/>
                </a>
                <a href="https://www.instagram.com/chocomelsp/" target="_blank">
                    <ImageIcon src={LogoInstagram} alt="Logo Instagram"/>
                </a>
                <a href="mailto:contato.cdconfeitaria@gmail.com" target="_blank">
                    <ImageIcon src={LogoEmail} alt="Logo Email"/>
                </a>
            </div>
        </MainHeader>
    );
}