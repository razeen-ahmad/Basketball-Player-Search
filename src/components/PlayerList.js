import React from 'react';
import PlayerCard from './PlayerCard';
import { Center, Container, Wrap, Stack, Grid, SimpleGrid } from '@chakra-ui/react';

const PlayerList = ({ players }) => {
    const cards = players.map((item) => (
        <PlayerCard 
            key={item.id}
            player={item}
        />
    ));
    return(
           <SimpleGrid
                spacing="20px"
                columns={[1, 2, 3]}
                padding="3em"
                justifyContent="space-around"
            >
                {cards}
            </SimpleGrid>
    );       
};

export default PlayerList;