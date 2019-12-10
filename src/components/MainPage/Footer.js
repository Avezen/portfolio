import React from 'react';
import styled from 'styled-components';

const Footer = ({items}) => {
    return (
        <FooterWrapper>
            <SocialIconsWrapper>
                {items.map((item, key) => {
                    return (
                        <a  key={key} href={item.url} target={'_blank'}>
                            <Image src={item.logo}/>
                        </a>
                    );
                })}
            </SocialIconsWrapper>
            <p>
                Designed and coded by
                <br/>
                <b>
                    Maciej Borzymowski
                </b>
            </p>
            <p>
                © Copyright All rights reserved 2019
            </p>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    width: 100%;
    padding: 2em;
    background-color: ${props => props.theme.mainSecondColor};
    color: ${props => props.theme.mainFourthColor};
    padding-top: 2em;
`;

const SocialIconsWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 4em;
`;

const Image = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.theme.mainFourthColor};
    mask: url(${props => props.src});
    mask-size: auto 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    margin: 1em;
    cursor: pointer;
    transition: all 0.3s;

    
    &:hover{
        background: ${props => props.theme.mainColor};
        transform: translateY(-5px);
        transition: all 0.3s;
    }
`;