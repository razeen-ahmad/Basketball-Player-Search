import Head from 'next/head';
import React, { useState } from 'react';
import UsePlayers from '../hooks/UsePlayers';
import SearchBar from '../components/SearchBar';
import PlayerList from '../components/player/PlayerList';
import { Stack, Button, Text, Kbd, VStack } from '@chakra-ui/react';

//page to search for players using search bar
const PlayerSearch = () => {
    const [ searchName, setSearchName ] = useState('');
    const [ pageNum, setPageNum ] = useState(1);

    //get player data based on search bar 
    const [ players, searchPlayers, errorMessage, totalPages ] = UsePlayers();

    return(
        <>
            <Head>
                <title>Player Search</title>
            </Head>
            <VStack justifyContent="center">
                <Text textAlign="center" fontSize="3xl" fontWeight="bold">Player Profile Search</Text>
                <Text width="70%" textAlign="center" fontSize="lg">
                    This is the page where you can search for any NBA player from 1979-Present. Type in any part of a player's name 
                    into the search bar and hit <Kbd>Enter</Kbd> to fetch players from the available data. To see an individual player's 
                    data, click on their name!
                </Text>
            </VStack>
            <SearchBar 
                term = {searchName}
                onTermChange = {setSearchName}
                onSearch = {(term) => {
                        searchPlayers(term, 0); 
                        setPageNum(1);
                    }}
            />
            {/* render results from search bar */}
            {errorMessage ? <text>{errorMessage}</text> : null}
            <PlayerList players={players}/>


            {/* pagination buttons */}
            <Stack direction="row" spacing={4} justifyContent="space-around" padding="2em" paddingTop="0em">
                <Button
                    bg="brand.100"
                    onClick = {() => {
                        if(pageNum-1 > 0){
                            searchPlayers(searchName, pageNum-1);
                            setPageNum(pageNum-1);
                        }
                    }}
                >
                    Prev. Page
                </Button>
                <Text color="brand.300" paddingTop="0.7em">Page {pageNum} of {totalPages}</Text>
                <Button
                    bg="brand.100"
                    onClick = {() => {
                        if(pageNum+1 <= totalPages){
                            searchPlayers(searchName, pageNum+1);
                            setPageNum(pageNum+1);
                        }
                    }}
                >
                    Next Page
                </Button>
            </Stack>
        </>

    );

}

export default PlayerSearch;