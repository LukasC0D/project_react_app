import React from "react";
import {
  Box,
  Container,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./Footer.css"
  
const Footer = () => {
  return (
    <Box>
      <h3 style={{ color: "azure", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       <div className="d-flex justify-content-around ">
         <div className="gothic"><i>Cube</i></div>
         <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-box  me-3 mb-1 ms-2 text-danger" viewBox="0 0 16 16 " >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
         </div>
          <div style={{
          color: "rgb(0, 208, 245)"}}><i>REACT</i></div>
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-box ms-2  me-3 mb-1 text-danger boxMt" viewBox="0 0 16 16 " >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
         </div>
          <div style={{
          color: "rgb(0, 208, 245)"}}><i>REACT</i></div>
          <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-box ms-2 me-3 mb-1 text-danger" viewBox="0 0 16 16 " >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
         </div>
          <div className="gothic"><i>Cube</i></div>
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