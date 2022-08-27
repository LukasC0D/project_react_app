import styled from 'styled-components';
   
export const Box = styled.div`
  padding:70px 50px;
  background: black;
  position: fixed;
  bottom: -50px;
  width: 100%;
  opacity:0.8;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin:  auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  text-align: center;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  margin-bottom:0px ;
  &:hover {
      color: green;
      transition: 200ms ease-in;
    
  }
`;
   
export const Heading = styled.p`

  text-align: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin: 0;
`;