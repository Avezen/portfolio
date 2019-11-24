import React from "react";
import styled from "styled-components";

const ProjectItem = ({item, current}) => (
    <ItemLink href={item.url} target={'_blank'}>
        <Image image={item.image}>

        </Image>
        <ProjectTitle show={current}>
            {item.name}
        </ProjectTitle>
    </ItemLink>
);

export default ProjectItem;

const ItemLink = styled.a`
    width: 25em;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: white;
    border: solid 5px ${props => props.theme.mainColor};
    overflow: hidden;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    cursor: pointer;
    background-color: rgba(255,255,255,0.9);
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    opacity: 0.5;
    
    transition: opacity 0.5s;
    
    ${ItemLink}:hover & {
        opacity: 1;
        
        transition: opacity 0.5s;
    }
`;

const ProjectTitle = styled.div`
    position: absolute;
    padding: 2em;
    bottom: ${props => props.show ? 0 : '-6em'};
    background-color: ${props => props.theme.mainSecondColor};
    color: ${props => props.theme.mainColor};
    border: solid 3px ${props => props.theme.mainColor};
    border-bottom: 0;
    transition: all 0.5s;
    
    
    ${Image}:hover & {
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
        : rebeccapurple;
        
        transition: transform 0.5s;
    }
`;

