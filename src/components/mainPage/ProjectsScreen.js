import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import przetarg from '../../assets/img/projects/przetarg.png';
import chata from '../../assets/img/projects/chata.png';
import strefa from '../../assets/img/projects/strefa.png';
import ProjectItem from "../common/ProjectItem";
import Carousel from "../../containers/Carousel";


const projects = [
    {
        name: 'Teatralna Strefa VIP',
        url: 'https://teatralnastrefavip.pl/',
        image: strefa
    },
    {
        name: 'Zrobimy Ci Chatę',
        url: 'http://zrobimy-ci-chate.maciejborzymowski.com/',
        image: chata
    },
    {
        name: 'Przetarg Expert',
        url: 'https://przetarg.expert/',
        image: przetarg
    },
    {
        name: 'Przetarg Expert',
        url: 'https://przetarg.expert/',
        image: przetarg
    },
    {
        name: 'Przetarg Expert',
        url: 'https://przetarg.expert/',
        image: przetarg
    }
];

const ProjectsScreen = () => {



    useEffect(() => {

    }, []);




    return (
        <Container>
            <ProjectsDiv>
                <LineCircle/>

                <StyledHeader>
                    PROJECTS
                </StyledHeader>
                <CarouselContainer>
                    <Carousel items={projects}/>
                </CarouselContainer>
            </ProjectsDiv>
        </Container>
    );
};

export default ProjectsScreen;

const Container = styled.div`
    width: 100%;
    height: 30em;
    margin-bottom: 16em;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const ProjectsDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: ${props => props.theme.mainSecondColor};
    box-shadow: ${props => props.theme.mainShadow};
`;

const LineCircle = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 32.5%;
    top: 9.25em;
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
      left: 34%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 33.5%;
    }
`;


const StyledHeader = styled.h1`
    position: relative;
    text-align: center;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    top: 5em;
    color: ${props => props.theme.mainColor};
    
    &:after {
        content: "";
        display: block;
        width: 45%;
        height: 4px;
        position: absolute;
        bottom: -10px;
        left: 50%;
        margin-left: -45px;
        background-color: ${props => props.theme.mainColor};
    }
`;

const CarouselContainer = styled.div`
    width: 100%;
    position: relative;
    top: 15em;
`;

