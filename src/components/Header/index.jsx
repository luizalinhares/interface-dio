import { useNavigate } from "react-router-dom";

import React from 'react'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import image from '../../assets/profilepic.jpg'

import {

  BuscarInputContainer,

  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper


} from './styles';






const Header = ({ autenticado }) => {

const navigate = useNavigate();

const handleClickSignOut = () => {
  navigate('/telacadastro')
}

const handleClickSignIn = () => {
  navigate('/login')
}


  return (

    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
              <Input placeholder='Buscar...' />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>

          ) : null}

        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src={image} />
          ) : ( <>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Login" onClick={handleClickSignIn}/>
          <Button title="Cadastrar" onClick={handleClickSignOut}/>
          </>

          )}
          
        </Row>
      </Container>
    </Wrapper>

  )

}

export { Header }