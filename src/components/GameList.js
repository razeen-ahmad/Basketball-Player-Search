import React from 'react';
import GameCard from './GameCard';
import { Box, Stack } from '@chakra-ui/react';

const GameList = ({ games }) => {
    const cards = games.map((item) => (
        <GameCard 
            key={item.id}
            game={item}
        />
    ));
    return(
        <Stack>
            {cards}
        </Stack> 
    );       
};

export default GameList;