import React from 'react';
import { 
    Box, 
    Circle, 
    HStack, 
    Heading, 
    Text, 
    Stat, 
    StatLabel,
    StatNumber,
    StatHelpText,
} from '@chakra-ui/react';
import Link from 'next/link';

const RankCard = ({ rankedPlayer, rank }) => {
    return(
        <Box borderTop="4px" paddingY="1em" borderColor="brand.100" overflow="auto" overflowY="hidden">
            <Link href={`/players/${rankedPlayer.player_id}`}>
                <a>
                    <HStack>
                        <Circle size="80px" bg="brand.100">
                            <Text fontSize="xl"> #{rank} </Text>
                        </Circle>
                        <Box paddingLeft="2em" width="100%">
                            <Heading paddingRight="0.1em">
                                {rankedPlayer.first_name}&nbsp;{rankedPlayer.last_name}
                            </Heading>
                            <Text fontSize="xl">
                                {rankedPlayer.team} ⇨
                            </Text>
                        </Box>
                        <Stat top="1.5em" paddingBottom="3em" width="max-content">
                            <StatNumber>{rankedPlayer.clicks}</StatNumber>
                            <StatHelpText>Visits</StatHelpText>
                        </Stat>
                    </HStack>
                </a>
            </Link>
        </Box>

)};

export default RankCard;