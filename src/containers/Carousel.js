import React, {Component} from 'react';
import styled from "styled-components";
import ProjectItem from "../components/common/ProjectItem";
import {isMobile} from 'react-device-detect';

class Carousel extends Component {
    state = {
        project: 0,
        step: 0
    };
    firstProjectTranslate = 0;
    pointerDown = false;
    pointerDownValue = 0;
    pointerUpValue = 0;

    carouselWrapper = React.createRef();
    projectWrapper = React.createRef();
    buttonsWrapper = React.createRef();
    carousel = React.createRef();

    componentDidMount() {
        if(this.carouselWrapper.current){
            this.carouselWrapper.current.style.cssText = `height: ${this.projectWrapper.current.offsetHeight + this.buttonsWrapper.current.offsetHeight}px`;
        }


        let currentProject = 1;
        // if (this.props.items.length > 4) {
        //     currentProject = 1;
        // } else {
        //     currentProject = this.props.items.length / 2;
        // }

        this.setState({project: currentProject});


        if (this.projectWrapper.current) {
            this.setState({step: this.projectWrapper.current.offsetWidth / 16}, () => {
                this.pointerUpValue = this.projectTranslateByNumber(currentProject);
            });
        }

        if (this.carousel.current) {
            const carouselElement = this.carousel.current;
            // let pointerDownTime;
            // let pointerUpTime;


            carouselElement.addEventListener('mousedown', (e) => {
                e.preventDefault();
                this.pointerDown = true;
                this.pointerDownValue = e.pageX;
                // let time = new Date();
                // pointerDownTime = time.getTime();

            });

            carouselElement.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if (!this.pointerDown) return false;

                let translateBy = this.pointerUpValue - (this.pointerDownValue - e.pageX);

                // if(Math.abs((translateBy-this.projectTranslateByNumber(1))%this.projectWrapper.current.offsetWidth) < 10){
                //     this.setState({project: this.projectNumberByTranslate(translateBy)})
                // }

                carouselElement.style.cssText = `transform: translateX(${translateBy}px)`;
            });

            carouselElement.addEventListener('mouseup', (e) => {
                e.preventDefault();
                this.pointerDown = false;
                // let time = new Date();
                // pointerUpTime = time.getTime();

                // let distance;
                // let startCoord = this.pointerUpValue;

                this.pointerUpValue = this.pointerUpValue - (this.pointerDownValue - e.pageX);
                this.setState({project: this.projectNumberByTranslate(this.pointerUpValue)});

                if(
                    this.projectTranslateByNumber(1) < this.pointerUpValue
                ){
                    this.pointerUpValue = this.projectTranslateByNumber(1);
                    this.setState({project: 1});

                    carouselElement.style.cssText = `transform: translateX(${this.pointerUpValue}px)`;
                    carouselElement.style.cssText = `
                        transition: all 0.3s;
                        `;

                }else if(this.projectTranslateByNumber(this.props.items.length - 2) > this.pointerUpValue){
                    this.pointerUpValue = this.projectTranslateByNumber(this.props.items.length - 2);
                    this.setState({project: this.props.items.length - 2});

                    carouselElement.style.cssText = `transform: translateX(${this.pointerUpValue}px)`;
                    carouselElement.style.cssText = `
                        transition: all 0.3s;
                        `;
                }

                // distance = Math.abs(startCoord - this.pointerUpValue);
                //
                // let dragRatio = distance / (pointerUpTime - pointerDownTime);
                //
                // if (dragRatio > 1) {
                //     // carouselElement.style.transition = 'transform 0.5s';
                //     let transitionDrag = Math.round(dragRatio * 250);
                //
                //     if (this.pointerDownValue > e.pageX) {
                //         carouselElement.style.cssText = `
                //         transform: translateX(${(this.pointerUpValue - transitionDrag)}px);
                //         transition: all 0.3s;
                //         `;
                //         this.pointerUpValue = this.pointerUpValue - transitionDrag;
                //     } else {
                //         carouselElement.style.cssText = `
                //         transform: translateX(${(this.pointerUpValue + transitionDrag)}px);
                //         transition: all 0.3s;
                //         `;
                //         this.pointerUpValue = this.pointerUpValue + transitionDrag;
                //     }
                // }

            });

            carouselElement.addEventListener('mouseleave', (e) => {
                e.preventDefault();
                if(this.pointerDown === true){
                    this.pointerDown = false;

                    this.pointerUpValue = this.pointerUpValue - (this.pointerDownValue - e.pageX);
                    this.setState({project: this.projectNumberByTranslate(this.pointerUpValue)});

                    if(
                        this.projectTranslateByNumber(1) < this.pointerUpValue
                    ){
                        this.pointerUpValue = this.projectTranslateByNumber(1);
                        this.setState({project: 1});

                        carouselElement.style.cssText = `transform: translateX(${this.pointerUpValue}px)`;
                        carouselElement.style.cssText = `
                        transition: all 0.3s;
                        `;

                    }else if(this.projectTranslateByNumber(this.props.items.length - 2) > this.pointerUpValue){
                        this.pointerUpValue = this.projectTranslateByNumber(this.props.items.length - 2);
                        this.setState({project: this.props.items.length - 2});

                        carouselElement.style.cssText = `transform: translateX(${this.pointerUpValue}px)`;
                        carouselElement.style.cssText = `
                        transition: all 0.3s;
                        `;
                    }
                }
            });


            // carouselElement.addEventListener('touchstart', (e) => {
            //     e.preventDefault();
            //     this.pointerDown = true;
            //     this.pointerDownValue = e.pageX;
            // });
            //
            // carouselElement.addEventListener('touchmove', (e) => {
            //     e.preventDefault();
            //     if (!this.pointerDown) return false;
            //
            //     let translateBy = this.pointerUpValue - (this.pointerDownValue - e.pageX);
            //
            //     carouselElement.style.cssText = `transform: translateX(${translateBy}px)`;
            // });
            //
            // carouselElement.addEventListener('touchend', (e) => {
            //     e.preventDefault();
            //     this.pointerDown = false;
            //
            //     this.pointerUpValue = this.pointerUpValue - (this.pointerDownValue - e.pageX);
            //     this.setState({project: this.projectNumberByTranslate(this.pointerUpValue)})
            // });
        }
    }

    projectTranslateByNumber = (projectNumber) => {
        const {step} = this.state;

        return (this.firstProjectTranslate - projectNumber * step + step) * 16;
    };

    projectNumberByTranslate = (translate) => {
        const {step} = this.state;

        return Math.round(-((translate / 16) + this.firstProjectTranslate - step) / step)
    };

    prevProject = () => {
        const {items} = this.props;
        const {project} = this.state;

        this.carousel.current.style.cssText = `
                        transition: all 0.3s;
                        `;

        if (project > (isMobile ? 0 : 1)) {
            this.setState(prevProject => ({
                project: prevProject.project - 1
            }), () => {
                this.pointerUpValue = this.projectTranslateByNumber(this.state.project);
            });
        } else {
            this.setState({project: isMobile ? items.length - 1 : items.length - 2}, () => {
                this.pointerUpValue = this.projectTranslateByNumber(this.state.project);
            });
        }
    };

    nextProject = () => {
        const {items} = this.props;
        const {project} = this.state;

        this.carousel.current.style.cssText = `
                        transition: all 0.3s;
                        `;

        if (project < (isMobile ? items.length - 1 : items.length - 2)) {
            this.setState(prevProject => ({
                project: prevProject.project + 1
            }), () => {
                this.pointerUpValue = this.projectTranslateByNumber(this.state.project);
            });
        } else {
            this.setState({project: isMobile ? 0 : 1}, () => {
                this.pointerUpValue = this.projectTranslateByNumber(this.state.project);
            });
        }
    };


    render() {
        const {items} = this.props;
        const {project, step} = this.state;

        return (
            <React.Fragment>
                <CarouselWrapper ref={this.carouselWrapper}>
                    <ProjectsContainer showProject={this.projectTranslateByNumber(project)} centerProjects={(step*3*16)/2} ref={this.carousel}>
                        {items.map((item, key) => {
                            return (
                                <ProjectWrapper key={key} ref={this.projectWrapper}>
                                    <ProjectItem item={item}/>
                                </ProjectWrapper>
                            );
                        })}
                    </ProjectsContainer>
                    <ButtonsWrapper ref={this.buttonsWrapper}>
                        <PrevButton onClick={this.prevProject} disable={project === 0}>
                            <ArrowLeft disable={project === 0}/>
                        </PrevButton>
                        <NextButton onClick={this.nextProject} disable={project === items.length - 1}>
                            <ArrowRight disable={project === items.length - 1}/>
                        </NextButton>
                    </ButtonsWrapper>
                </CarouselWrapper>

            </React.Fragment>
        );
    }
}

export default Carousel;


const CarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ProjectsContainer = styled.div`
    //padding: 0 5em 0 5em;
    display: flex;
    width: auto;
    position: absolute;
    transform: translateX(${props => props.showProject}px);
    //transition: transform 0s;
    left: 50%;
    margin-left: -${props => props.centerProjects}px;
    opacity: 1;
    
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    
    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
`;

const ProjectWrapper = styled.div`
    padding: 0 2em;
`;

const ButtonsWrapper = styled.div`
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding-top: 1em;
`;

const CarouselButton = styled.div`
    z-index: 1000;
    color: ${props => props.theme.mainThirdColor};
    cursor: pointer;
    transition: all 0.5s;
`;

const PrevButton = styled(CarouselButton)`
    margin: 0 1em 0 1em;
    padding: 1em 0 3em 2em;
`;

const NextButton = styled(CarouselButton)`
    margin: 0 1em 0 1em;
    padding: 1em 2em 3em 0;
`;

const Arrow = styled.div`
    border: solid ${props => props.theme.mainColor};
    border-width: 0 3px 3px 0;
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
