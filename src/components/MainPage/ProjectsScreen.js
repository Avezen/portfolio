import React from 'react';
import styled from 'styled-components';
import przetarg from '../../assets/img/projects/przetarg.png';
import chata from '../../assets/img/projects/chata.png';
import strefa from '../../assets/img/projects/strefa.png';
import compendium from '../../assets/img/projects/compendium.png';
import Carousel from "../../containers/Carousel";
import line4 from "../../assets/img/line4.png";


const projects = [
    {
        name: 'Teatralna Strefa VIP',
        url: 'https://teatralnastrefavip.pl/',
        image: strefa
    },
    {
        name: 'Compendium',
        url: 'http://compendium.maciejborzymowski.com/symfony',
        image: compendium
    },
    {
        name: 'Przetarg Expert',
        url: 'https://przetarg.expert/',
        image: przetarg
    },
    {
        name: 'Zrobimy Ci Chatę',
        url: 'http://zrobimy-ci-chate.maciejborzymowski.com/',
        image: chata
    }
];

const ProjectsScreen = () => {
    
    return (
        <Container>
            <ProjectsDiv>
                <LineCircleLeft />
                <LineImage image={line4} />
                <LineCircleRight />
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
    height: 31em;
    margin-bottom: 20em;
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

const LineImage = styled.div`
    background-image: url(${props => props.image});
    position: absolute;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: 48% 0;
    z-index: 1000;
    background-size: 85% 90%;
    max-width: 1140px;
`;

const LineCircleLeft = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 6.6%;
    top: 7.6em;

    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 6%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 5%;
    }
`;

const LineCircleRight = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 90%;
    top: 16.2em;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 89.2%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 88.5%;
    }
`;

const StyledHeader = styled.h2`
    position: relative;
    text-align: center;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    top: 7.5em;
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
    top: 18em;
`;

