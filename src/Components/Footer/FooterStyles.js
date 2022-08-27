import styled from 'styled-components';
   
export const Box = styled.div`
  padding:70px 50px;
  background: black;
  position: fixed;
  bottom: -50px;
  width: 100%;
  opacity:0.8;
`;
   
export const Container = styled.div`
    display: flex;
    justify-content: space-around;

  
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
 
`;
   
   
export const FooterLink = styled.a`
  text-align: center;
  color: #fff;
  text-decoration: none;
  &:hover {
      color: green;
      transition: 200ms ease-in;
    
  }
`;
   
export const Heading = styled.p`

  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 0;
`;