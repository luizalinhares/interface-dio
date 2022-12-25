import styled from 'styled-components'

export const Container = styled.main`

width: 100%;
max-width 80%;
margin: 0 auto;
margin-top: -120px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`

export const Wrapper = styled.div`
max-width: 300px;
margin-top: 240px;
margin-bottom: 100px;



`


export const Column = styled.div`
flex:1;
`
export const Row = styled.div`


display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`

export const Title = styled.h2`

font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
max-width: 70%;
margin-bottom: 20px;
line-height: 44px;

color: #FFFFFF;


`
export const TitleLogin = styled.p`

font-family: 'Open Sans';
font-style: bolder;
font-weight: 1000;
font-size: 30px;
margin-bottom: 8px;
line-height: 44px;
color: #FFFFFF;

`
export const SubtitleLogin = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
margin-bottom: 35px;
line-height: 25px;
color: #FFFFFF;

`
export const TenhoLogin = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 12px;
margin-top: 15px;


color:#FFFFFF;

`
export const HighLight = styled.span`

color: #03fca5;

&:hover {
  opacity: 0.6;
  cursor: pointer;
}

`


export const CriarText = styled.p`

font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color:#FFFFFF;
`

