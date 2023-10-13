import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import "../../index.css";
import ImageLogo from "../../assets/logos/logo-chocomel.jpg";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 91.8vh;

  h2 {
    font-size: 30px;
    padding: 10px;
  }
`;

const LogoChoco = styled.img`
  width: 200px;
  border-radius: 60px;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%; 
  margin: 0 auto;
`;

const InputField = styled.input`
  width: 100%; 
  padding: 15px; 
  font-size: 17px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px; 
`;

const SubmitButton = styled.button`
  width: 150px; 
  padding: 15px;
  margin: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  } 
`;

const LinkBack = styled.a`
    display: flex;

    p {
      color: black;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      background-color: #fff;
      margin-top: 2%;
      margin-left: 2%;
      width: 150px;
      border-radius: 10px;

      @media (max-width: 480px) {
        margin-top: 10%;
        margin-left: 10%;
      }
    }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      localStorage.setItem('authenticated', 'true');
      navigateTo('/controlpanel');
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <>
      <title>Chocomel | Login</title>

      <div className='Login-bg'>

        <LinkBack href="../">
          <p>Voltar para o site</p>
        </LinkBack>

        <LoginContainer>

          <LogoChoco src={ImageLogo} alt="Logo Chocomel" />

          <LoginForm onSubmit={handleLogin}>
            <h2>LOGIN</h2>
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required    
            />
            <InputField
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required    
            />
            <SubmitButton type="submit">Entrar</SubmitButton>
          </LoginForm>
        </LoginContainer>
      </div>
    </>
  );
};

export default Login;