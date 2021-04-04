import React from 'react';
import { Box } from '@chakra-ui/react';

const PlayerCard = ({ player }) => {
    return(
        <Box bg="tomato" w="30%" p={4} color="navy">
            {player.first_name} {player.last_name} 
        </Box>

)};

export default PlayerCard;