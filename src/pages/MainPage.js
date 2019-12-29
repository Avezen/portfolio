import React, {Component, createRef} from 'react';
import styled from 'styled-components';
import WelcomeScreen from "../components/MainPage/WelcomeScreen";
import ProjectsScreen from "../components/MainPage/ProjectsScreen";
import StackScreen from "../components/MainPage/StackScreen";
import ContactScreen from "../components/MainPage/ContactScreen";
import Footer from "../components/MainPage/Footer";
import scrollToComponent from 'react-scroll-to-component';
import SocialIcons from "../components/common/SocialIcons";
import {isMobile} from 'react-device-detect';
import AboutScreen from "../components/MainPage/AboutScreen";
import git from "../assets/img/logo/git.svg";
import linked from "../assets/img/logo/linked.svg";
import cv from "../assets/img/logo/cv.svg";


const socials = [
    {
        name: 'Github',
        logo: git,
        url: 'https://github.com/Avezen'
    },
    {
        name: 'LinkedIn',
        logo: linked,
        url: 'https://www.linkedin.com/in/maciej-borzymowski-130321155/'
    },
    {
        name: 'CV',
        logo: cv,
        url: '/cv/Maciej Borzymowski__CV.pdf'
    }
];


class MainPage extends Component {
    state = {
        windowHeight: null,
    };

    componentDidMount() {
        this.setState({windowHeight: window.innerHeight})
    }


    myRef = createRef();
    executeScroll = () => {
        scrollToComponent(this.myRef.current, {
            offset: 0,
            align: 'middle',
            duration: 500,
            ease: 'outQuad'
        });
    };

    render() {
        const {windowHeight} = this.state;

        return (
            <React.Fragment>
                <nav>
                    <IconsContainer isMobile={isMobile}>
                        <SocialIcons items={socials}/>
                    </IconsContainer>
                </nav>
                <main>
                    <StyledSection windowHeight={isMobile && windowHeight}>
                        <WelcomeScreen executeScroll={this.executeScroll}/>
                    </StyledSection>
                    <section ref={this.myRef}>
                        <StyledContainer>
                            <AboutScreen/>
                        </StyledContainer>
                    </section>
                    <OverflowSection>
                        <StyledContainer>
                            <ProjectsScreen/>
                        </StyledContainer>
                    </OverflowSection>
                    <section>
                        <StyledContainer>
                            <StackScreen/>
                        </StyledContainer>
                    </section>
                    <section>
                        <StyledContainer>
                            <ContactScreen/>
                        </StyledContainer>
                    </section>
                </main>
                <footer>
                    <Footer items={socials}/>
                </footer>
            </React.Fragment>
        );
    }
}

export default MainPage;

const StyledContainer = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 1040px;
`;

const IconsContainer = styled.div`
    position: ${props => props.isMobile ? 'absolute' : 'fixed'};
    top: ${props => props.isMobile ? '0' : '25%'};
    z-index: 10000;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
        top: ${props => props.isMobile ? '0' : '15%'};
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        top: ${props => props.isMobile ? '0' : '5%'};
    }
`;

const StyledSection = styled.section`
    height: ${props => props.windowHeight ? `${props.windowHeight}px` : '100vh'};
    min-height: 600px;
`;

const OverflowSection = styled.section`
    overflow: hidden;
`;

