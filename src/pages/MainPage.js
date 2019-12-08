import React, {Component, createRef} from 'react';
import styled from 'styled-components';
import WelcomeScreen from "../components/mainPage/WelcomeScreen";
import ProjectsScreen from "../components/mainPage/ProjectsScreen";
import StackScreen from "../components/mainPage/StackScreen";
import ContactScreen from "../components/mainPage/ContactScreen";
import Footer from "../components/mainPage/Footer";
import scrollToComponent from 'react-scroll-to-component';
import SocialIcons from "../components/common/SocialIcons";
import {isMobile} from 'react-device-detect';


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
                    <SocialIcons/>
                </nav>
                <main>
                    <StyledSection windowHeight={isMobile && windowHeight}>
                        <WelcomeScreen executeScroll={this.executeScroll}/>
                    </StyledSection>
                    <OverflowSection ref={this.myRef}>
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
                    <Footer/>
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

const StyledSection = styled.section`
    height: ${props => props.windowHeight ? `${props.windowHeight}px` : '100vh'};
    min-height: 600px;
`;

const OverflowSection = styled.section`
    overflow: hidden;
`;

