import { Link } from "react-router-dom";

import bannerImage from '../../assets/banner.png'
import image from '../../assets/profilepic.jpg'
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Header } from "../../components/Header"

import { Container, Column, Title, TitleHighlight } from './styles';


const Feed = () => {
  return (<>
    <Header autenticado={true} />
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </Column>
    <Column flex={1}>
      <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
      <UserInfo percentual={85} nome="Luiza Linhares" image={image}/>
      <UserInfo percentual={15} nome="Luiza Linhares" image={image}/>
      <UserInfo percentual={35} nome="Luiza Linhares" image={image}/>
      <UserInfo percentual={45} nome="Luiza Linhares" image={image}/>
      <UserInfo percentual={65} nome="Luiza Linhares" image={image}/>
    </Column>
    
    </Container>
  </>)
}

export { Feed }