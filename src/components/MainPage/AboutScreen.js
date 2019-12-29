import React from 'react';
import styled from 'styled-components';
import me from "../../assets/img/me2.jpg";


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
                    <h3>
                        Hello,
                    </h3>
                    <p>
                        I am self organized person who loves creating beautiful things, focused on fine-tuned,
                        easy-in-use interfaces, that people would love to interact with. That is my main goal as a
                        front-end/full-stack developer besides creating high quality, reusable
                        code. I recently got interested in UI/UX design.
                    </p>
                    <p>
                        I used to work as a backend/full-stack developer with modern PHP framework called Symfony
                        but when i tried ReactJS at my home I felt like this is what i truly want to do.
                    </p>
                    <p>
                        I am inspired by nature and talented people. Also big fan of electronic music and DJing for my friends.
                    </p>
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
    box-shadow: ${props => props.theme.mainShadow};
    padding-top: 10em;
`;

const StyledHeader = styled.h2`
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
    padding: 1em 5em 3em 5em;
    font-size: 1.2em;
    color: ${props => props.theme.mainFourthColor};
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        padding-left: 1em;
        padding-right: 1em;
    }
`;

