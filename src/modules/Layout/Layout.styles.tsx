import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export const Header = styled.div`
    grid-area: header;
    color: white;
    display: flex;
    background-color: #2e3130;
    justify-content: center;
    align-items: center;
    height: 60px;
    display: flex;
    flex-shrink: 0;
`;

export const Sidebar = styled.div`
    background-color: blue;
`;

export const Body = styled.div`
   width: 1000px;
   margin: auto;
`;
