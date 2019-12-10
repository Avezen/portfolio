import React from 'react';
import styled from 'styled-components';
import line3 from "../../assets/img/line3.webp";
import ContactForm from "../common/ContactForm";

const ContactScreen = () => (
    <Container>
        <LineCircle/>
        <LineImage image={line3}/>
        <LineCircleBottom/>
        <StyledHeader>
            GET IN TOUCH
        </StyledHeader>
        <FormWrapper>
            <ContactForm/>
        </FormWrapper>
    </Container>
);


export default ContactScreen;

const Container = styled.div`
    width: 100%;
    position: relative;
    padding-top: 12em;
`;

const LineCircle = styled.div`
    width: 1em;
    height: 1em;
    left: 12.1%;
    top: -11.2em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 11.81%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 11.1%;
    }
`;

const LineCircleBottom = styled.div`
    width: 1em;
    height: 1em;
    left: 88.2%;
    top: -1.3em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 87.8%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 87.2%;
    }
`;

const LineImage = styled.div`
    width: 100%;
    max-width: 1140px;
    height: 250px;
    position: absolute;
    top: 0.5em;
    z-index: 1000;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: 78% 98%;
`;

const StyledHeader = styled.h1`
    width: 300px;
    position: relative;
    left: 15%;
    color: ${props => props.theme.mainColor};
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
      left: 10%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        top: 1em;
        left: 50%;
        margin-left: -150px;
    }
    
    &:after {
        width: 54%;
        height: 4px;
        display: block;
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -81px;
        content: "";
        background-color: ${props => props.theme.mainColor};        
    }
`;

const FormWrapper = styled.div`
    padding: 0 5em;
    margin-top: 5em;
    margin-bottom: 5em;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      padding: 0 1em;
    }
`;

