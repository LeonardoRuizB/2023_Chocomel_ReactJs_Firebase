import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import imageLogo from "../../assets/logos/logo-chocomel.jpg";
import SearchIcon from "../../assets/icons/icon_search.png";
import IconOpen from "../../assets/icons/icon-open-category.png";
import IconClosed from "../../assets/icons/icon-closed-category.png";

const MainHeader = styled.header`
    background-color: #2a1510;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end; 
    padding: 20px; 
    position: sticky;
    top: 0;
    z-index: 100;

    @media (max-width: 480px) {
        padding: 20px 0 0 0; 
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

const SearchInput = styled.input`
    width: 330px;
    height: 40px;
    padding: 10px;
    margin: 10px auto;
    display: block;
    border: 2px solid white;
    border-radius: 20px 0px 0px 20px;

    @media(max-width: 480px) {
        margin-top: 20px;
        width: 200px;
    }
`;

const SearchButton = styled.button`
    height: 40px;
    width: 70px;
    padding: 5px;
    align-items: center;    
    background-color: #ab9680;
    border: 2px solid white;
    border-radius: 0px 20px 20px 0px;
    color: #2a1510;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    img {
        width: 30px;
    }

    @media(max-width: 480px) {
        margin-top: 10px;
    }
`;

const DivSearch = styled.div`
    display: flex;
    align-items: center;    
`;

const ButtonCategory = styled.button`
    background-color: #2a1510;
    border-radius: 10px;
    border: 2px solid #2a1510;
    margin: 0 100px 0 90px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;

        @media (max-width: 480px) {
            transform: scale(1.0);
        }
    }

    @media (max-width: 480px) {
        margin: 0;
    }

    img {
        width: 50px;
    }
`;

export default function Header({ onToggleCategory, isCategoryVisible }) {
    const [searchTerm, setSearchTerm] = useState('');
    const navigateTo = useNavigate();

    const handleSearch = () => {
        navigateTo(`/produtos?search=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <MainHeader>
            <div>
                <a href="/">
                    <ImageLogo src={imageLogo} alt="Logo Chocomel" />
                </a>
            </div>

            <DivSearch>
                <SearchInput
                    type="text"
                    placeholder="Procurar Doces 😀🎂"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton onClick={handleSearch}><img src={SearchIcon} alt="Icone de busca" /></SearchButton>
            </DivSearch>

            <ButtonCategory onClick={onToggleCategory}>
                {isCategoryVisible ? <img src={IconOpen}/> : <img src={IconClosed}/>}
            </ButtonCategory>
        </MainHeader>
    );
}