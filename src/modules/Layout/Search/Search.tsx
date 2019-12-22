import React, { useState } from 'react';
import Input from '../../../atoms/Input/Input'
import { Button } from '@material-ui/core'
import { Suggestions, Suggestion } from './Search.styles'

const SearchSuggestions = ({ options, onSearch, onType }) => {
    const [searchString, setSearchString] = useState<string>("");
    const [showOptions, setShowOptions] = useState<boolean>(false)
    console.log(options)
    const onInputChange = (e) => {
        setSearchString(e.target.value)
        onType(e.target.value)
        setShowOptions(true)
    }

    const onSubmit = () => {


        onSearch(searchString)

    }

    const submitOption = (value) => {
        setShowOptions(false)
        setSearchString(value)
    }

    console.log(showOptions, "showOptions")

    return <div>
        <Input onChange={onInputChange} value={searchString} />
        <Button onClick={onSubmit} color="default">
            Search
            </Button>
        {showOptions ?
            <Suggestions>
                {
                    options.map(option => <Suggestion onClick={() => submitOption(option.value)}>{option.value}</Suggestion>)
                }
            </Suggestions> : null
        }

    </div>
}

export default SearchSuggestions