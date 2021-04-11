import React from 'react';
import PlayerCard from './PlayerCard';
import { Center, Container, Wrap, Stack, Grid, SimpleGrid } from '@chakra-ui/react';

//display all search result player cards as a grid in '/search-players' page
const PlayerList = ({ players }) => {
    const cards = players.map((item) => (
        <PlayerCard 
            key={item.id}
            player={item}
        />
    ));
    return(
           <SimpleGrid
                spacingX="4em"
                spacingY="1.5em"
                columns={[1, null, 2]}
                padding="3em"
                justifyContent="space-around"
            >
                {cards}
            </SimpleGrid>
    );       
};

export default PlayerList;