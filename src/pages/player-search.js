import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import UsePlayers from '../hooks/UsePlayers';
import SearchBar from '../components/SearchBar';
import PlayerList from '../components/PlayerList';

const PlayerSearch = () => {
    const [ searchName, setSearchName ] = useState('');

    const [ players, searchPlayers, errorMessage ] = UsePlayers();

    return(

        <>
            <Head>
                <title>Player Search</title>
            </Head>
            <SearchBar 
                term = {searchName}
                onTermChange = {setSearchName}
                onSearch = {searchPlayers}
            />
            {/* render results from search bar */}
            {errorMessage ? <text>{errorMessage}</text> : null}
            <PlayerList players={players}/>
        </>

    );

}

export default PlayerSearch;