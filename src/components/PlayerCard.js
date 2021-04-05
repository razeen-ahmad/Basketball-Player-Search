import React from 'react';
import { Box, Flex, Center } from '@chakra-ui/react';
import Link from 'next/link';

const PlayerCard = ({ player }) => {
    return(
        <Box 
            bg="tomato"
            p="6" 
            color="navy"
        >
            <Link href={`/players/${player.id}`}>
                <a>
                    <Box>
                        {player.first_name} {player.last_name}
                    </Box>  
                </a>
            </Link>
        </Box>

)};

export default PlayerCard;