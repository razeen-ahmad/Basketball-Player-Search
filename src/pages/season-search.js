import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import UseGames from '../hooks/UseGames';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import CardList from '../components/CardList';
import GameCard from '../components/GameCard';


const SeasonSearch = () =>  {

    const[searchTerm, setSearchTerm] = useState("");

    const [ games, searchGames, errorMessage ] = UseGames();
    
    
    return (
        <Layout>
            <Head>
                <title>Season Search</title>
            </Head>
            
            {/*search bar*/}
            <SearchBar 
                term = {searchTerm}
                onTermChange = {setSearchTerm}
                onSearch={searchGames}
            />

            {/* render results from search bar */}
            {errorMessage ? <text>{errorMessage}</text> : null}
            <GameList games={games}/>
        </Layout>
    );
};

export default SeasonSearch;