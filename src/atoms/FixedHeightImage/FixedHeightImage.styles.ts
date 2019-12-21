import styled from 'styled-components';

export const Container = styled.div`
    height: 160px;
    width: auto;
    overflow: hidden;
    display: flex;
    /* flex-shrink: 0; */
    align-items: center; 
    justify-content: stretch;   
`;

export const Image = styled.img`
    width: 100%;
    transition: all .5s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`
