import React from 'react';
import { Box } from '@chakra-ui/react';

const GameCard = ({ key, hometeam, awayteam }) => {
    return(
        <Box bg="tomato" w="30%" p={4} color="navy">
            {hometeam}
            vs. 
            {awayteam}
        </Box>

)};

export default GameCard;