import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import Layout from '../components/layout';
import UseGames from '../hooks/UseGames';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import balldontlie from '../api/balldontlie';


class BballSearch extends React.Component {
    state = {
        games: []
    };
    getData = async() => {
        const response = await balldontlie.get('/games');
        this.setState({ games: response.data.data });
    };
    componentDidMount() {
        this.getData();
    };

    onSearch = async season => {
        if(season.length === 0){
            this.getData();
        }
        else {
            const response = await balldontlie.get('/games', {
                params: {
                    "seasons[]": season
                }
            });
            this.setState({ games: response.data.data });
        }
    };
    
    
    render() {
        return (
            <Layout>
                <Head>
                    <title>Season Search</title>
                </Head>
                
                {/*search bar*/}
                <SearchBar onSearch={this.onSearch}/>

                {/* render results from search bar */}
                <GameList games={this.state.games}/>
            </Layout>
        );
    };
};

export default BballSearch;