import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import "../User/Login.css";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h2 {
    font-size: 30px;
    padding: 10px;
  }
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

export default function Login() {
  return (
    <>
      <Link to="/">Voltar para o Site</Link>

      <LoginContainer>
        <LoginForm>
          <h2>LOGIN</h2>
          <InputField type="email" required placeholder="Email" />
          <InputField type="password" required placeholder="Senha" />
          <SubmitButton type="submit">Entrar</SubmitButton>
        </LoginForm>
      </LoginContainer>
    </>
  );
}
