import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
    height: ${props => props.height + "px"};
    width: auto;
    overflow: hidden;
    display: flex;
    align-items: center; 
    justify-content: stretch;   
`;

export const Image = styled.img<{ zoomOnHover: boolean; height: number }>`
    width: 100%;
    object-fit: contain;
    transition: all .5s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: ${props => props.zoomOnHover ? 'scale(1.1)' : 'none'};
    }
`
