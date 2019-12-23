import React, { FC, ReactChild } from 'react';
import { Container, Header, Body } from './Layout.styles';
import Search from './Search/SearchContainer';

interface Props {
    children: ReactChild;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <Header>
                <Search />
            </Header>
            <Body>{children}</Body>
        </Container>
    );
};

export default Layout;
