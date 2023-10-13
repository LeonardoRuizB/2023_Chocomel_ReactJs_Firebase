import React from "react";
import styled from "styled-components";

import LogoFacebook from "../../assets/icons/logo-facebook.png";
import LogoInstagram from "../../assets/icons/logo-instagram.png";
import LogoEmail from "../../assets/icons/logo-gmail.png";
import MapLocation from "../../assets/icons/mapa-localizacao.png";

const MainFooter = styled.footer`
    background-color: #2a1510;
    margin-top: 5%;
    color: white;
   
    @media (max-width: 480px) {
        margin-top: 10%;
    }
`;

const TextReserved = styled.p`
    color: white;
    padding: 10px 20px 20px 20px;
    text-align: center;
    line-height: 1.5;

    a {
        color: white;

        &:hover {
            color: gray;
        }
    }

    @media (max-width: 480px) {
        padding: 15px 20px 30px 20px
    }

`;

const ImageIcon = styled.img`
    width: 50px;
    margin-top: 42px;
    margin-right: 30px;

    @media (max-width: 480px) {
        margin: 20px 20px; 20px 0;
    }

    &:hover {
        transform: scale(1.5);
        transition: transform 0.3s ease;
    }
`;

const DivFooter = styled.div`
    padding: 15px 140px 0 140px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 1.5;

    h2 {
        margin-top: 10px;
    }

    p {
        margin-top: 30px;

        @media (max-width: 480px) {
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        padding: 15px 20px 0 20px;
    }

    .endereco {
        img {
            margin-top: 10px;
            height: 120px;
            border-radius: 10px;

            &:hover {
                transform: scale(0.8);
                transition: transform 0.3s ease;
            }

            @media (max-width: 480px) {
                margin-bottom: 20px;
            }
        }
    }
`;

export default function Footer() {
    return (
        <MainFooter>
            <DivFooter>
                <div className="siga-nos">
                    <h2>Siga - nos</h2>
                    <a href="https://www.facebook.com/profile.php?id=100086276622209" target="_blank">
                        <ImageIcon src={LogoFacebook} alt="Logo Facebook" />
                    </a>
                    <a href="https://www.instagram.com/chocomelsp/" target="_blank">
                        <ImageIcon src={LogoInstagram} alt="Logo Instagram" />
                    </a>
                    <a href="mailto:contato.cdconfeitaria@gmail.com" target="_blank">
                        <ImageIcon src={LogoEmail} alt="Logo Email" />
                    </a>
                </div>
                <div className="contato">
                    <h2>Contato</h2>
                    <p>
                        R. Dr. Bento Teobaldo Ferraz, 330 <br />
                        contato.cdconfeitaria@gmail.com <br />
                        Cel: (11) 94545-5177
                    </p>

                </div>
                <div className="horarios">
                    <h2>Horários</h2>
                    <p>
                        Segunda a Sexta: 08:00 - 19:00 <br />
                        Sábado: 09:00 - 13:00 <br />
                        Domingo: Fechado
                    </p>
                </div>
                <div className="endereco">
                    <h2>Como Chegar</h2>
                    <a href="https://maps.app.goo.gl/Lu92JSSKSSxZqTDx9" target="_blank">
                        <img src={MapLocation} alt="Localização endereço" />
                    </a>
                </div>
            </DivFooter>

            <TextReserved>&copy; {new Date().getFullYear()} Chocomel | Todos os direitos reservados.
                <br /> created by <a href="https://www.linkedin.com/in/leonardobottura/" target="_blank">Leonardo Bottura</a>.
            </TextReserved>
        </MainFooter>
    );
}