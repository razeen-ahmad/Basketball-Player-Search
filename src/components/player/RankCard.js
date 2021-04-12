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
import UseWindowDimensions from '../../hooks/UseWindowDimentions';
import { BiHash } from "react-icons/bi";

//each player card on 'leaderboard' page. pass in rank because have to account for same number of profile visits
//between players. e.g. if two players have 5 "clicks" according to our MongoDB, then they should have the same rank
const RankCard = ({ rankedPlayer, rank }) => {
    const { width } = UseWindowDimensions();
    return(
        <Box borderTop="2px" paddingY="1em" borderColor="brand.100" overflow="hidden">
            <Link href={`/players/${rankedPlayer.player_id}`}>
                <a>
                    <HStack justify="space-between">
                        <HStack spacing={5}>
                            <Text fontWeight="extrabold" letterSpacing="wider" fontSize="xl">#{rank}</Text>
                            <Box>
                                <Text fontSize="lg" fontWeight="bold">
                                    {rankedPlayer.first_name} {rankedPlayer.last_name}
                                </Text>
                                <Text fontSize="sm" width="100%">
                                    {rankedPlayer.team} ⇨
                                </Text>
                            </Box>
                        </HStack>
                        <Box>
                            <Stat>
                                <StatNumber>{rankedPlayer.clicks}</StatNumber>
                                <StatHelpText>Visits</StatHelpText>
                            </Stat>
                        </Box>
                    </HStack>
                </a>
            </Link>
        </Box>

)};

export default RankCard;