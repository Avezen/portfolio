import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterWrapper>
            Copyright 2019, Maciej Borzymowski
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    width: 100%;
    padding: 2em;
    background-color: ${props => props.theme.mainSecondColor};
    color: ${props => props.theme.mainThirdColor};
    padding-top: 2em;
`;
