import React from 'react';
import styled from 'styled-components';
import me from "../../assets/img/me.webp";


const AboutScreen = () => {

    return (
        <Container>
            <AboutDiv>
                <StyledHeader>
                    ABOUT ME
                </StyledHeader>
                <PhotoContainer>
                    <Photo img={me}/>
                </PhotoContainer>
                <TextContainer>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </TextContainer>
            </AboutDiv>
        </Container>
    );
};

export default AboutScreen;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const AboutDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${props => props.theme.mainSecondColor};
    background: ${props => props.theme.mainSecondColor};
    box-shadow: ${props => props.theme.mainShadow};
    padding-top: 10em;
`;

const StyledHeader = styled.h1`
    position: relative;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    color: ${props => props.theme.mainColor};
    text-align: center;
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
    }
    
    &:after {
        content: "";
        display: block;
        width: 35%;
        height: 4px;
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -52px;
        background-color: ${props => props.theme.mainColor};
    }
`;

const PhotoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3em;
`;

const Photo = styled.div`
    width: 200px;
    height: 200px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: solid 3px ${props => props.theme.mainFourthColor};
    background-image: url(${props => props.img});
    background-size: 150%;
    background-position: 42% 5%;
    background-repeat: no-repeat;
`;

const TextContainer = styled.div`
    padding: 1em 2em 3em 2em;
    font-size: 1.5em;
    color: ${props => props.theme.mainFourthColor};
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        padding-left: 1em;
        padding-right: 1em;
    }
`;

