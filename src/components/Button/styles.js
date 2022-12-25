import styled, { css }  from 'styled-components';

export const ButtonContainer = styled.button`

background: #565656;
border-radius: 22px;
position: relative;
border: 1px solid black;
font-size: 18px;
color: #FFFF;
padding: 2px 12px;
min-width: 120px;
width: 100%;
margin-right: 10px;



${({ variant }) => variant !== "primary" && css`

min-width: 167px;
height: 33px;
margin-top: 24px;

background: #E41050;
border: transparent;


&:hover {
  opacity: 0.6;
  cursor: pointer;
}

&::after {

content: '';
position: absolute;
border: 1px solid #E41050;
top: -5px;
left: -6px;
width: calc(100% + 10px);
height: calc(100% + 10px);
border-radius: 22px;


}



`}

`