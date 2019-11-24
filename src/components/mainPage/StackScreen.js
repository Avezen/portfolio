import React from 'react';
import styled from 'styled-components';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import line2 from "../../assets/img/line2.png";
import php from "../../assets/img/logo/php.png";
import symfony from "../../assets/img/logo/symfony.png";
import html from "../../assets/img/logo/html.png";
import css from "../../assets/img/logo/css.png";
import react from "../../assets/img/logo/react.png";
import ts from "../../assets/img/logo/ts.png";
import StackItem from "../common/StackItem";

const stackItems = [
    {
        name: 'HTML',
        image: html,
        experience: '20 months'
    },
    {
        name: 'CSS',
        image: css,
        experience: '20 months'
    },
    {
        name: 'PHP',
        image: php,
        experience: '18 months'
    },
    {
        name: 'Symfony',
        image: symfony,
        experience: '18 months'
    },
    {
        name: 'ReactJS',
        image: react,
        experience: '6 months'
    },
    {
        name: 'TypeScript',
        image: ts,
        experience: '6 months'
    }
];

const StackScreen = () => {
    return (
        <Container>
            <LineImage image={line2}/>
            <LineCircle/>
            <StyledHeader>
                STACK
            </StyledHeader>
            <StyledRow>
                {stackItems.map((item, key) =>
                    <StyledCol lg={4} sm={6} key={key}>
                        <ItemContainer>
                            <StackItem item={item}/>
                        </ItemContainer>
                    </StyledCol>
                )}
            </StyledRow>
        </Container>
    );
};

export default StackScreen;


const StyledRow = styled(Row)`
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 3em;
    padding: 0 3em;
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      padding: 0 2em;
    }
`;

const StyledCol = styled(Col)`
    padding: 0 !important;
`;

const ItemContainer = styled.div`
    padding: 2em;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      padding: 1em;
    }
`;

const Container = styled.div`
    width: 100%;
    padding-top: 6em;
    position: relative;
`;

const LineImage = styled.div`
    background-image: url(${props => props.image});
    position: absolute;
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: 80% 0;
    z-index: 1000;
    background-size: 69% 90%;
    top: -7.5em;
    max-width: 1140px;
`;

const LineCircle = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 27.05%;
    top: -1.8em;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 26.7%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 26%;
    }
`;

const StyledHeader = styled.h1`
    position: relative;
    left: 25%;
    width: 200px;
    color: ${props => props.theme.mainColor};
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
      left: 15%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 5%;
    }
    
    &:after {
        content: "";
        display: block;
        width: 35%;
        height: 4px;
        position: absolute;
        bottom: -10px;
        left: 64px;
        background-color: ${props => props.theme.mainColor};
    }
`;


