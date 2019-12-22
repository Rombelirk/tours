import React, { FC, ReactChild, useState, FormEvent } from 'react';
import { Container, Header, Sidebar, Body } from './Layout.styles';
import Search from './Search/SearchContainer'

interface Props {
    children: ReactChild;
    onSearch: (string) => void;
}

const Layout: FC<Props> = ({ children, onSearch }) => {
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
