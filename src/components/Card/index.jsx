import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import HeaderDio from '../../assets/header.jpg'
import image from '../../assets/profilepic.jpg'

import {
CardContainer,
Content,
HasInfo,
ImageBackground,
PostInfo,
UserInfo,
UserPicture


} from './styles'


const Card = () => {
  return (
<CardContainer>
<ImageBackground src={HeaderDio} />
<Content>
  <UserInfo>
    <UserPicture src={image} />
    <div>
      <h4>Luiza Linhares</h4>
      <p>Há 3 minutos</p>
    </div>
  </UserInfo>
  <PostInfo>
    <h4>Projeto para o curso de Biblioteca React</h4>
    <p>Projeto feito para o curso de Biblioteca React no bootcamp dio da OrangeTech...<strong>Saiba Mais</strong></p>
  </PostInfo>
  <HasInfo>
    <h4>#CSS #Javascript #React</h4>
    <p>
      <FiThumbsUp /> 20
    </p>
  </HasInfo>
</Content>
</CardContainer>
  )
}

export { Card }
