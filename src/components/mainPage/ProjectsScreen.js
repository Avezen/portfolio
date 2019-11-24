import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import przetarg from '../../assets/img/projects/przetarg.png';
import chata from '../../assets/img/projects/chata.png';
import strefa from '../../assets/img/projects/strefa.png';
import ProjectItem from "../common/ProjectItem";


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
    }
];

const ProjectsScreen = () => {
    let firstProjectTranslate = -14.5; //obliczyć na podstawie szerokości okna
    const [project, setProject] = useState(Math.floor(projects.length / 2));
    const [step, setStep] = useState(0);

    const projectWrapper = React.createRef();


    useEffect(() => {
        if (projectWrapper.current) {
            setStep(projectWrapper.current.offsetWidth / 16);
            //setProject(firstProjectTranslate - Math.floor(projects.length/2)*carouselStep)
        }
    }, []);

    const currentProject = (projectNumber) => {

        return firstProjectTranslate - projectNumber * step
    };

    const prevProject = () => {
        if (project > 0) {
            setProject(prevProject => prevProject - 1);
        } else {
            setProject(projects.length - 1);
        }
    };

    const nextProject = () => {
        if (project < projects.length - 1) {
            setProject(prevState => prevState + 1);
        } else {
            setProject(0);
        }
    };

    return (
        <Container>
            <ProjectsDiv>
                <LineCircle/>

                <StyledHeader>
                    PROJECTS
                </StyledHeader>
                <CarouselContainer>
                    <Carousel>
                        <PrevButton onClick={prevProject} disable={project === 0}>
                            <ArrowLeft disable={project === 0}/>
                        </PrevButton>
                        <ProjectsContainer showProject={currentProject(project)}>
                            {projects.map((item, key) => {
                                return (
                                    <ProjectWrapper key={key} ref={projectWrapper}>
                                        <ProjectItem item={item} current={project === key}/>
                                    </ProjectWrapper>
                                );
                            })}
                        </ProjectsContainer>
                        <NextButton onClick={nextProject} disable={project === projects.length - 1}>
                            <ArrowRight disable={project === projects.length - 1}/>
                        </NextButton>
                    </Carousel>
                </CarouselContainer>
                <LineCircleBottom/>
            </ProjectsDiv>
        </Container>
    );
};

export default ProjectsScreen;

const Container = styled.div`
    width: 100%;
    height: 58em;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      height: 54em;
    }
`;

const ProjectsDiv = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 8em;
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
    top: 13.25em;
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
      left: 34%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 33.5%;
    }
`;

const LineCircleBottom = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 69.65%;
    top: 12.95em;
    
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 69%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 68.5%;
    }
`;

const StyledHeader = styled.h1`
    position: relative;
    text-align: center;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    top: 6em;
    color: ${props => props.theme.mainColor};
    
    &:after {
        content: "";
        display: block;
        width: 45%;
        height: 4px;
        position: absolute;
        bottom: -10px;
        left: 53px;
        background-color: ${props => props.theme.mainColor};
    }
`;

const CarouselContainer = styled.div`
    width: 100%;
    position: relative;
    height: 38em;
    top: 15em;
    padding: 5em;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      padding: 4em 2em;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      height: 34em;
      padding: 3em 0.5em;
    }
`;

const Carousel = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    background-color: ${props => props.theme.mainSecondColor};
    overflow: hidden;
    padding: 0 3em;
`;

const ProjectsContainer = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    position: absolute;
    transform: translateX(${props => props.showProject}em);
    transition: all 0.5s;
    left: 50%;
`;

const ProjectWrapper = styled.div`
    padding: 0 2em;
`;

const CarouselButton = styled.div`
    width: 3em;
    height: 105%;
    position: absolute;
    margin-top: -0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.mainSecondColor};
    z-index: 1000;
    box-shadow: ${props => props.disable ? '0' : '10px 0 10px -0px rgba(0,0,0,0.30)'};
    color: ${props => props.theme.mainThirdColor};
    cursor: pointer;
    transition: all 0.5s;
`;

const PrevButton = styled(CarouselButton)`
    left: 0;
    
    @media (max-width: 520px) {
        border-right: solid 5px ${props => props.disable ? props.theme.mainColor : '#746044'};
    }
`;

const NextButton = styled(CarouselButton)`
    right: 0;
    
    @media (max-width: 520px) {
        border-left: solid 5px ${props => props.disable ? props.theme.mainColor : '#746044'};
    }
`;

const Arrow = styled.div`
    border: solid ${props => props.theme.mainColor};
    border-width: ${props => props.disable ? '3px 3px 3px 3px' : '0 3px 3px 0'};
    display: inline-block;
    padding: 0.8em;
    margin-bottom: 0.8em;
    transition: all 0.2s;
`;

const ArrowLeft = styled(Arrow)`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

const ArrowRight = styled(Arrow)`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;
