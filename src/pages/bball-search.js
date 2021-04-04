import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import UseGames from '../hooks/UseGames';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import balldontlie from '../api/balldontlie';


const BballSearch = () =>  {

    const [games, setGames] = useState([]);

    const getData = async() => {
        const response = await balldontlie.get('/games');
        setGames(response.data.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const onSearch = async season => {
        if(season.length === 0){
            getData();
        }
        else {
            const response = await balldontlie.get('/games', {
                params: {
                    "seasons[]": season
                }
            });
            setGames(response.data.data);
        }
    };
    
    
    return (
        <Layout>
            <Head>
                <title>Season Search</title>
            </Head>
            
            {/*search bar*/}
            <SearchBar onSearch={onSearch}/>

            {/* render results from search bar */}
            <GameList games={games}/>
        </Layout>
    );
};

export default BballSearch;