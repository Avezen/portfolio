import styled from "styled-components";


export const PrimaryButton = styled.button`
    background: ${props => props.theme.mainColor};
    color: ${props => props.theme.mainThirdColor};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #816b4c;
    min-width: 200px;
    
    &:hover{
        opacity: 0.9;
    }
`;