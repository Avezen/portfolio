import React from "react";
import styled from "styled-components";
import git from "../../assets/img/logo/git.png";
import linked from "../../assets/img/logo/linked.png";


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
    }
];

const SocialIcons = () => {
    return (
        <Wrapper>
            {socials.map((item, key) => {
                return (
                    <a key={key} href={item.url} target={'_blank'}>
                        <SocialIcon>
                            <SocialName>
                                {item.name}
                            </SocialName>
                            <img src={item.logo} alt={item.name} width={40}/>
                        </SocialIcon>
                    </a>
                );
            })}
        </Wrapper>
    );
};

export default SocialIcons;


const Wrapper = styled.div`
    position: fixed;
    top: 25%;
    z-index: 10000;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
        top: 15%;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        top: 5%;
    }
`;

const SocialIcon = styled.div`
    position: relative;
    margin: 1em;
    display: flex;
    align-items: center;
    left: -5.5em;
    cursor: pointer;
    transition: left 0.5s;

    &:hover {
      left: 0;
      transition: left 0.5s;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        left: -6em;
    }
`;

const SocialName = styled.div`
    width: 5em;
    text-align: left;
`;