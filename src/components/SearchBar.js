import React, { useState } from 'react';
import { Input, Container, FormControl, HStack, Text, Button } from "@chakra-ui/react"

//pass in state variable term and change term with 'onTermChange'
//use term to track current value of string in search bar.
//'onSearch' is function that takes term and submits it to api to get results based on the search term.
const SearchBar = ({ term, onTermChange, onSearch }) => {


    const onChange = (event) => {
        event.preventDefault(); //prevent default, only want to change passed in state variable 'term'
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onSearch(term);//call api to get results with term
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
                <Button bg="brand.100" onClick={onSubmit}>Search</Button>
            </HStack>
        </Container>
    )
};

export default SearchBar;