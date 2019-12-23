import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
    width: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height + 'px'};
`;

export const Image = styled.img<{ zoomOnHover: boolean; height: number }>`
    min-width: fit-content;
    object-fit: contain;
    transition: all 0.5s ease-in-out;
    height: ${(props) => props.height + 'px'};
    &:hover {
        transform: ${(props) => (props.zoomOnHover ? 'scale(1.1)' : 'none')};
    }
`;
