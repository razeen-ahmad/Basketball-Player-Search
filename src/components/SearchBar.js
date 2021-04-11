import React, { useState } from 'react';
import { Input, Container, FormControl, HStack, Text, Button } from "@chakra-ui/react"

const SearchBar = ({ term, onTermChange, onSearch }) => {


    const onChange = (event) => {
        event.preventDefault();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    }

    return (
        <Container width="100%" overflowX="hidden" mt={50} color="brand.300">
             <HStack justifyContent="center">
                <form onChange={onChange} onSubmit={onSubmit}>
                    <FormControl id="search bar">
                            <Input 
                            type="text"
                            placeholder="Player Name" 
                            size="lg" 
                            variant="outline"
                            value={term}
                            onChange={(e) => onTermChange(e.target.value)}
                            width="100%"
                        />
                    </FormControl>
                </form>
                <Button bg="brand.100" onClick={onSubmit}>Search Player</Button>
            </HStack>
        </Container>
    )
};

export default SearchBar;