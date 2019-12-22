import styled from 'styled-components';

export const Suggestions = styled.div`
    position: absolute;
    width: 240px;
    border: 1px solid lightgray;
    border-radius: 3px;
    background-color: white;
    z-index: 1; 
`;

export const Suggestion = styled.div`
    color: black;
    box-sizing: border-box;
    position: relative;
    width: 100%;    
    height: fit-content;
    padding: 6px 4px;
    cursor: pointer;
    &:hover {
        background-color: #efefef;
    }
`;









