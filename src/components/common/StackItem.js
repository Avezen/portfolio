import React from "react";
import styled from "styled-components";

const StackItem = ({item}) => (
    <Item>
        <ItemContent>
            <PhotoWrapper>
                <Logo src={item.image}/>
            </PhotoWrapper>
            <ExperienceText>
                {item.experience}
            </ExperienceText>
        </ItemContent>
    </Item>
);

export default StackItem;


const Item = styled.div`
    width: 100%;
    position: relative;

    &:after {
      display: block;
      padding-bottom: 100%;
      content: "";
    }
`;

const ItemContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 2em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    
    @media (max-width: ${props => props.theme.rwd.md}px) {
        padding: 1em;
    }
    
    @media (max-width: ${props => props.theme.rwd.sm}px) {
        padding: 2em;
    }
`;

const Logo = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.mainSecondColor};
    mask: url(${props => props.src});
    mask-size: auto 100%;
    mask-repeat: no-repeat;
    mask-position: center;

    ${Item}:hover & {
        background: ${props => props.theme.mainColor};
    }
`;

const ExperienceText = styled.p`
    margin: 0;
    bottom: 0;
    z-index: 3;
    color: ${props => props.theme.mainSecondColor};
    font-size: 2em;
    font-family: 'Josefin Sans', sans-serif;
    
`;

const PhotoWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

