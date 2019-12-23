import styled from 'styled-components';

export const BaseButton = styled.div`
    background-color: #3862bb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    max-width: fit-content;
    &:hover {
        background-color: #2b58b9;
    }
`;
