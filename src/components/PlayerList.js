import React from 'react';
import PlayerCard from './PlayerCard';
import { Box, Stack } from '@chakra-ui/react';

const PlayerList = ({ players }) => {
    const cards = players.map((item) => (
        <PlayerCard 
            key={item.id}
            player={item}
        />
    ));
    return(
        <Stack>
            {cards}
        </Stack> 
    );       
};

export default PlayerList;