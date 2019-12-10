import React from 'react';
import styled from 'styled-components';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import line2 from "../../assets/img/line2.webp";
import php from "../../assets/img/logo/php.svg";
import symfony from "../../assets/img/logo/symfony.svg";
import html from "../../assets/img/logo/html5.svg";
import css from "../../assets/img/logo/css3.svg";
import react from "../../assets/img/logo/react.svg";
import ts from "../../assets/img/logo/typescript.svg";
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
            <LineCircleRight />
            <LineImage image={line2} />
            <LineCircleLeft />
            <StyledHeader>
                EXPERIENCE
            </StyledHeader>
            <StyledRow>
                {stackItems.map((item, key) =>
                    <StyledCol lg={4} sm={6} xs={6} key={key}>
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
      padding: 1.5em;
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

const LineCircleLeft = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 27.05%;
    top: -3.1em;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 26.7%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 26%;
    }
`;

const LineCircleRight = styled.div`
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: solid 2px ${props => props.theme.mainColor};
    position: relative;
    left: 71%;
    top: -12.6em;

    @media (max-width: ${props => props.theme.rwd.md}px) {
      left: 70.6%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
      left: 69%;
    }
`;

const StyledHeader = styled.h1`
    position: relative;
    left: 25%;
    width: 300px;
    color: ${props => props.theme.mainColor};
    text-align: center;
    
    @media (max-width: ${props => props.theme.rwd.lg}px) {
        left: 15%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        left: 50%;
        margin-left: -150px;
        margin-top: 1.5em;
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


