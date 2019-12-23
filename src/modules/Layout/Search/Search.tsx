import React, { useState, useRef, FC } from 'react';
import Input from '../../../atoms/Input/Input';
import Button from '../../../atoms/Button/Button';
import { Container, Suggestions, Suggestion } from './Search.styles';
import { hot } from 'react-hot-loader';
import { debounce } from 'lodash';
import { IOption } from '../../../interfaces/data';

interface Props {
    options: IOption[];
    onSearch: (string: string) => void;
    onType: (string: string) => void;
}

const SearchSuggestions: FC<Props> = ({ options, onSearch, onType }) => {
    const [searchString, setSearchString] = useState<string>('');
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const onTypeDebounced = useRef(debounce((value) => onType(value), 300)).current;

    const onInputChange = (e) => {
        const value = e.target.value;
        setSearchString(value);
        onTypeDebounced(value);
        setShowOptions(true);
    };

    const onSubmit = () => {
        onSearch(searchString);
    };

    const submitOption = (value) => {
        setShowOptions(false);
        setSearchString(value);
    };

    return (
        <Container onSubmit={onSubmit}>
            <Input onChange={onInputChange} value={searchString} />
            <Button onClick={onSubmit}>Search</Button>
            {showOptions && options.length > 0 ? (
                <Suggestions>
                    {options.map((option) => (
                        <Suggestion onClick={() => submitOption(option.value)}>{option.value}</Suggestion>
                    ))}
                </Suggestions>
            ) : null}
        </Container>
    );
};

export default hot(module)(SearchSuggestions);
