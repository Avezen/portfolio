import React from "react";
import styled from "styled-components";


const SocialIcons = ({items}) => {
    return (
        <React.Fragment>
            {items.map((item, key) => {
                return (

                        <SocialIcon key={key} href={item.url} target={'_blank'}>
                            <SocialName>
                                {item.name}
                            </SocialName>
                            <Image src={item.logo}/>

                        </SocialIcon>
                );
            })}
        </React.Fragment>
    );
};

export default SocialIcons;


const SocialIcon = styled.a`
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
        left: -5.5em;
    }
`;

const SocialName = styled.div`
    width: 5em;
    text-align: left;
`;

const Image = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.theme.mainSecondColor};
    mask: url(${props => props.src});
    mask-size: auto 100%;
    mask-repeat: no-repeat;
    mask-position: center;
`;