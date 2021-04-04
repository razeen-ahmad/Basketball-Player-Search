import React, { useState } from 'react';
import { Input, Container, FormControl } from "@chakra-ui/react"

const SearchBar = ({ term, onTermChange, onSearch }) => {


    const onChange = (event) => {
        event.preventDefault();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    }

    return (
        <Container maxWidth="100ch" mt={50}>
            <form onChange={onChange} onSubmit={onSubmit}>
                <FormControl id="search bar">
                    <Input 
                        type="text"
                        placeholder="Search..." 
                        size="lg" 
                        variant="flushed" 
                        value={term}
                        onChange={(e) => onTermChange(e.target.value)}
                    />
                </FormControl>
            </form>
        </Container>
    )
};

export default SearchBar;