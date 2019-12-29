import React from 'react';
import styled, {keyframes} from 'styled-components';
import line1 from '../../assets/img/line1.png'

const WelcomeScreen = ({executeScroll}) => {
    return (
        <Container>
            <CenteredDiv>
                <StyledSmall>
                    Full-Stack Developer
                </StyledSmall>
                <Divider>
                    <Small/>
                    <Big/>
                    <Small/>
                </Divider>
                <StyledHeader>
                    Maciej Borzymowski
                </StyledHeader>
            </CenteredDiv>
            <Arrow onClick={executeScroll}>
                <Animation>
                    <ArrowDownUpper/>
                    <ArrowDown/>
                </Animation>
            </Arrow>
            <ImageContainer>
                <LineImage image={line1}/>
                <LineCircle/>

            </ImageContainer>

            <Foot />
        </Container>
    );
};

export default WelcomeScreen;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 6em;
    position: relative;
`;

const CenteredDiv = styled.div`
    
`;

const StyledSmall = styled.small`
    font-family: 'PT Serif', serif;
    font-size: 18px;
    color: ${props => props.theme.mainFourthColor};
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
`;

const Small = styled.div`
    width: 0.4em;
    height: 0.4em;
    background-color: ${props => props.theme.mainFourthColor};
`;

const Big = styled.div`
    width: 0.8em;
    height: 0.8em;
    background-color: ${props => props.theme.mainColor};
    margin: 0 1em;
`;

const StyledHeader = styled.h1`
    font-family: 'PT Serif', serif;
    font-size: 4rem;
    color: ${props => props.theme.mainColor};
    font-weight: 700;
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        font-size: 3rem;
    }
`;

const ImageContainer = styled.div`
    max-width: 1140px;
    padding: 0 15px;
    position: absolute;
    width: 100%;
    height: 500px;
    bottom: -20.7em;
`;

const LineImage = styled.div`
    background-image: url(${props => props.image});
    position: relative;
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-position: 68.4% 0;
    z-index: 1000;
    background-size: 50% 93%;
    box-sizing: border-box;
`;


const LineCircle = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 33.5%;
    top: -2.2em;
    z-index: 100;
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
      left: 33.2%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 32%;
    }
`;


const rotate = keyframes`
  0% {
    transform: translateY(-3px);
  }

  50% {
    transform: translateY(5px);
  }
  
  100% {
    transform: translateY(-3px);
  }
`;

const Arrow = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 10em;
    border: solid 3px ${props => props.theme.mainFourthColor};
    border-radius: 50%;
    cursor: pointer; 
    
`;

const Animation = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;   
    transition: all 1s ease;
    animation: ${rotate} 1s ease infinite;

`;

const ArrowDownUpper = styled.div`
    border: solid ${props => props.theme.mainColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 0.8em;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-bottom: -1em;
`;

const ArrowDown = styled.div`
    border: solid ${props => props.theme.mainColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 0.8em;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-bottom: 0.8em;
`;

const Foot = styled.div`
    height: 5em;
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    background-color: ${props => props.theme.mainSecondColor};
    box-shadow: ${props => props.theme.mainShadow};
`;