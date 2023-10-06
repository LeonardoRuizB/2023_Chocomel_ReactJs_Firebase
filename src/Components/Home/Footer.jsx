import React from "react";
import styled from "styled-components";

const MainFooter = styled.footer`
    background-color: #2a1510;
`;

const TextReserved = styled.p`
    color: white;
    padding: 20px;
    text-align: center;
    line-height: 1.5;

    a {
        color: white;

        &:hover {
            color: gray;
        }
    }
`;

export default function Footer() {
    return (
        <MainFooter>
            <p>Sobre nós</p>
            
            <TextReserved>&copy; {new Date().getFullYear()} Chocomel | Todos os direitos reservados. 
            <br/> created by <a href="https://www.linkedin.com/in/leonardobottura/" target="_blank">Leonardo Bottura</a>.</TextReserved> 
        </MainFooter>
    );
}