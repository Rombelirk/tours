import React, { useState, useRef } from 'react';
import Input from '../../../atoms/Input/Input'
import { Button } from '@material-ui/core'
import { Suggestions, Suggestion } from './Search.styles'
import { hot } from 'react-hot-loader'
import { debounce } from 'lodash';

const SearchSuggestions = ({ options, onSearch, onType }) => {

    const [searchString, setSearchString] = useState<string>("");
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const onTypeDebounced = useRef(
        debounce((value) => onType(value), 300)
    ).current

    const onInputChange = (e) => {
        const value = e.target.value;
        setSearchString(value)
        onTypeDebounced(value)
        setShowOptions(true)
    }

    const onSubmit = () => {
        onSearch(searchString)

    }

    const submitOption = (value) => {
        setShowOptions(false)
        setSearchString(value)
    }

    return <div>
        <Input onChange={onInputChange} value={searchString} />
        <Button onClick={onSubmit} color="default">
            Search
            </Button>
        {
            showOptions && options.length > 0 ?
                <Suggestions>
                    {
                        options.map(option =>
                            <Suggestion onClick={() =>
                                submitOption(option.value)}>{option.value}</Suggestion>)
                    }
                </Suggestions> : null
        }

    </div>
}

export default hot(module)(SearchSuggestions)