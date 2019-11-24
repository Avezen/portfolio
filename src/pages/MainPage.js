import React, {Component, createRef} from 'react';
import styled from 'styled-components';
import WelcomeScreen from "../components/mainPage/WelcomeScreen";
import ProjectsScreen from "../components/mainPage/ProjectsScreen";
import StackScreen from "../components/mainPage/StackScreen";
import ContactScreen from "../components/mainPage/ContactScreen";
import Footer from "../components/mainPage/Footer";
import scrollToComponent from 'react-scroll-to-component';
import SocialIcons from "../components/common/SocialIcons";


class MainPage extends Component {

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
        return (
            <React.Fragment>
                <nav>
                    <SocialIcons/>
                </nav>
                <main>
                    <StyledSection>
                        <WelcomeScreen executeScroll={this.executeScroll}/>
                    </StyledSection>
                    <section ref={this.myRef}>
                        <StyledContainer>
                            <ProjectsScreen/>
                        </StyledContainer>
                    </section>
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
    height: 100vh;
`;

