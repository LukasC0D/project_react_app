import React from "react";
import {
  Box,
  Container,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h3 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       <div className="d-flex justify-content-around pb-3">
         <div><i>REACT APP</i></div>
          <div><i>REACT APP</i></div>
          <div><i>REACT APP</i></div>
          <div><i>REACT APP</i></div>
       </div>
      </h3>
      <Container>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
          </Column>
          <Column>
            <Heading>Service</Heading>
            <FooterLink href="#">Coding</FooterLink>
          </Column>
      </Container>
    </Box>
  );
};
export default Footer;