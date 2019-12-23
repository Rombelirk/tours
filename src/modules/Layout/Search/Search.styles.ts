import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    display: flex;
    position: relative;
    & > :first-child {
        margin-right: 10px;
    }
`;

export const Suggestions = styled.div`
    position: absolute;
    top: 110%;
    width: 100%;
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
