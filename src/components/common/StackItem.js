import React from "react";
import styled from "styled-components";

const StackItem = ({item}) => (
    <Item>
        <ItemContent>
            <PhotoWrapper>
                <img src={item.image} width={'80%'} alt={item.name}/>
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
    box-shadow: ${props => props.theme.mainShadow};
    border-radius: 25px;

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
    background-color: ${props => props.theme.mainSecondColor};
    border-radius: 25px;
`;

const ExperienceText = styled.p`
    position: absolute;
    margin: 0;
    bottom: 0.5em;
    z-index: 3;
    color: ${props => props.theme.mainColor};
    font-size: 2em;
    
    &:before {
        width: 50%;
        height: 4px;
        display: block;
        position: absolute;
        bottom: 45px;
        left: 40px;
        background-color: ${props => props.theme.mainColor};   
        content: "";     
    }
`;

const PhotoWrapper = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background-color: ${props => props.theme.mainThirdColor};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;