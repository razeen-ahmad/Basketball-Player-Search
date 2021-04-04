import React from 'react';
import { Box } from '@chakra-ui/react';

const GameCard = ({ game }) => {
    return(
        <Box bg="tomato" w="30%" p={4} color="navy">
            {game.home_team.full_name}
            vs. 
            {game.visitor_team.full_name}
        </Box>

)};

export default GameCard;