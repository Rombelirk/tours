import React, { FC, ReactChild, useState, FormEvent } from 'react';
import { Container, Header, Sidebar, Body } from './Layout.styles';
import Input from '../../atoms/Input/Input'
import { Button } from '@material-ui/core'

interface Props {
    children: ReactChild;
    onSearch: (string) => void;
}

const Layout: FC<Props> = ({ children, onSearch }) => {

    const [searchString, setSearchString] = useState<string>("")

    const onSearchFieldChange = (e: FormEvent<HTMLInputElement>) => {
        setSearchString(e.currentTarget.value)
    }

    const onSearchSubmit: () => void = () => {
        onSearch(searchString)
    }

    return (
        <Container>
            <Header>
                <Input onChange={onSearchFieldChange} value={searchString} />
                <Button onClick={onSearchSubmit} color="default">Search</Button>
            </Header>
            {/* <Sidebar>Sidebar</Sidebar> */}
            <Body>{children}</Body>
        </Container>
    );
};

export default Layout;
