import React from 'react';
import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import NBALogo from '../NBALogo';

//card for each player that fits search paramaters in '/player-search' page
const PlayerCard = ({ player }) => {
    return(
        <Box boxShadow="xl" borderRadius="lg" bg="brand.100">
            <Link href={`/players/${player.id}`}>
                <a>
                    <Stack direction="row">
                        <NBALogo thisTeam={player.team.id}/>
                        <Box justifyContent="center">
                            <Heading paddingTop="0.3em" paddingRight="0.1em">
                            {player.first_name} {player.last_name}
                            </Heading>
                            <Text fontSize="lg">
                                {player.position ? `${player.position} | ${player.team.full_name}` : `${player.team.full_name}`}
                            </Text>
                        </Box>  
                    </Stack>
                </a>
            </Link>
        </Box>

)};

export default PlayerCard;