import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import UsePlayers from '../hooks/UsePlayers';
import SearchBar from '../components/SearchBar';
import PlayerList from '../components/PlayerList';
import { Stack, Button, Text } from '@chakra-ui/react';

const PlayerSearch = () => {
    const [ searchName, setSearchName ] = useState('');
    const [ pageNum, setPageNum ] = useState(1);

    const [ players, searchPlayers, errorMessage, totalPages ] = UsePlayers();

    return(
        <Layout>
            <Head>
                <title>Player Search</title>
            </Head>
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
        </Layout>

    );

}

export default PlayerSearch;