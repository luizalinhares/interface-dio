import {MdEmail, MdLock, MdPerson} from 'react-icons/md'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { api } from '../../services/api'
import { Column, Container, CriarText, Row, SubtitleLogin , Title, TitleLogin, Wrapper, TenhoLogin, HighLight  } from './styles';

const schema = yup.object({
  

email: yup.string().email('email não é válido').required('Campo obrigatório'),
password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),

}).required();


const Cadastro = () => {

  

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    node: 'onChange'
  });



  const onSubmit = async formData => {

    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}&name=${formData.name}`);
      console.log('retorno api', data)
    }catch{
      alert('Houve um erro, tente novamente')
    }
  };



  return (<>
    <Header />
    <Container>
      <Column>
        <Title>
        A plataforma para você aprender com experts, dominar as principais tecnologias 
        e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
      <Wrapper>
        <TitleLogin>Comece agora grátis</TitleLogin>
        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" type="name" leftIcon={<MdPerson />}/>
          <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
          <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
          <Button title="Criar minha conta" variant="secondary" type="submit" />
        </form>
        <Row>
          
          <CriarText>Ao clicar em "criar minha conta grátis" 
            declaro que aceito as Políticas de 
            Privacidade e os Termos de Uso da DIO 
            <br />
            </CriarText>
            
          
        </Row>
        <TenhoLogin>Já tenho conta.<HighLight> Fazer login</HighLight></TenhoLogin>
        
      </Wrapper>
      </Column>
    </Container>
  </>)
}

export { Cadastro }