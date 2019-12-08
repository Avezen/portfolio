import React from "react";
import styled from "styled-components";

const ProjectItem = ({item}) => (
    <ItemLink href={item.url} target={'_blank'}>
        <Image image={item.image}>

        </Image>
        <ProjectTitle>
            {item.name}
        </ProjectTitle>
    </ItemLink>
);

export default ProjectItem;

const ItemLink = styled.a`
    width: 24em;
    height: 15em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: solid 5px ${props => props.theme.mainColor};
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 1;
    
    transition: all 0.5s;
    
    ${ItemLink}:hover & {
        opacity: 0.2;
        background-size: 110% 110%;
        
        transition: all 0.5s;
    }
`;

const ProjectTitle = styled.div`
    position: absolute;
    padding: 2em;
    color: ${props => props.theme.mainColor};
    opacity: 0;
    transition: opacity 0.5s;
    
    ${ItemLink}:hover & {
        opacity: 1;
        
        transition: opacity 0.5s;
    }
`;

