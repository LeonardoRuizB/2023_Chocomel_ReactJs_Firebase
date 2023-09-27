import React from "react";
import styled from "styled-components";

const LinkWhats = styled.a`
    img {
        text-decoration: none;
        padding: 10px;
        position: fixed;
        right: 10px;
        bottom: 10px;
        width: 100px;
        height: 100px;
    
        &:hover {
        transform: scale(1.3);
        transition: transform 0.3s ease;
        }
    
        @media (max-width: 480px) {
        bottom: 40px;
        }
    }
`;

export default function ButtonWhats() {
    return (
        <>
            <LinkWhats href="https://wa.me/5511945455177" target="_blank">
                <img src="src/assets/icons/logo-whatsapp.png" alt="Logo WhatsApp" />
            </LinkWhats>
        </>
    );
}