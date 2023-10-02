import React from "react";
import styled from "styled-components";

const TitleNot = styled.h2`
    font-size: 35px;
    text-align: center;
    margin-top: 5%;
    margin-left: 5%;
`;

const TextNot = styled.p`
    font-size: 25px;
    text-align: center;
    margin-top: 25px;
    margin-left: 5%;
`;

const ButtonNot = styled.button`
    margin-top: 25px;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`;

export default function NotFound() {
    return (
        <div>
            <title>Página não encontrada</title>

            <TitleNot>Página não encontrada - Error 404 Not Found</TitleNot>
            <TextNot>
                A página que você está procurando não existe. <br/> 
                <a href="/"><ButtonNot>Clique aqui para voltar ao site</ButtonNot></a>
            </TextNot>
        </div>
    )
}