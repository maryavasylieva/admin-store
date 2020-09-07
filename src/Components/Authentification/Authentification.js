import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import css from "./Auth.module.css";
import LogoImg from "../../assets/ArtistShopLogo.png";

const Authentification = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur
}) => {
  return (
    <div className={css.container}>
      <FormContainer>
        <ContainerImg>
          <Logo src={LogoImg} alt="artist-shop logo" />
        </ContainerImg>
        <LoginForm method="GET" onSubmit={handleSubmit}>
          <label htmlFor="1">
            <Text>
              Логин<RequireField>*</RequireField>
            </Text>
            <Input
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              type="username"
              name="username"
              placeholder="Ваш логин"
              required
            ></Input>
          </label>
          {errors.username && touched.username && (
            <div className={css.inputError}>{errors.username}</div>
          )}
          <label htmlFor="2">
            <Text>
              Пароль<RequireField>*</RequireField>
            </Text>
            <Input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="Ваш пароль"
              required
            ></Input>
          </label>
          {errors.password && touched.password && (
            <div className={css.inputError}>{errors.password}</div>
          )}
        </LoginForm>
        <Button type="submit">Войти</Button>
      </FormContainer>
      <Link to="/main">Dashboard(test)</Link>
    </div>
  );
};

const ContainerImg = styled.div`
  margin-top: 12px;
  /* outline: 2px solid red; */
`;

const FormContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 40px 40px 40px 40px;
    border-radius: 8px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  /* outline: 2px solid red; */
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
`;

const RequireField = styled.span`
  color: ${({ theme }) => theme.colors.requireRed};
`;

const Input = styled.input`
  padding-left: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.lightYellow};
  border-radius: 4px;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  box-shadow: 0px -2px 2px 0px rgba(29, 29, 27, 0.1);
  width: 312px;
  margin: 0 auto;
  height: 38px;
  margin-bottom: 24px;
`;

const Logo = styled.img`
  width: 250px;
  height: 200px;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 312px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  background-color: #f5ead0;
  color: #000000;
  border-radius: 4px;
  border: transparent;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  transition: all 0.5s;
`;

export default Authentification;
