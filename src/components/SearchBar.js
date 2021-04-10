import React, { useState } from 'react';
import { Input, Container, FormControl, HStack, Text } from "@chakra-ui/react"

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
                <Text width="max-content" fontWeight="bold">Player Name:</Text>
                <form onChange={onChange} onSubmit={onSubmit}>
                    <FormControl id="search bar">
                            <Input 
                            type="text"
                            placeholder="Search..." 
                            size="lg" 
                            variant="outline"
                            value={term}
                            onChange={(e) => onTermChange(e.target.value)}
                            width="120%"
                        />
                    </FormControl>
                </form>
            </HStack>
        </Container>
    )
};

export default SearchBar;