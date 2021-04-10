import React from 'react';
import {
    Box,
    HStack,
    VStack,
    Stack,
    Text,
    SimpleGrid,
    Table,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import NBALogo from '../components/NBALogo';

const GameCard = ({ gameStats }) => {
    if(!gameStats || gameStats.game === undefined){
        return null;
    }
    else{
        var date = new Date(gameStats.game.date);
        var dateString = date.toDateString();

        const fgPct = (Math.round(gameStats.fg_pct * 10000))/100;
        const threePtPct = (Math.round(gameStats.fg3_pct * 10000))/100;


        var withHomeTeam = gameStats.team.id === gameStats.game.home_team_id;
        return(
            <>
                <Text textAlign="center" fontSize="2xl" fontWeight="bold" paddingTop="3em">Latest Game Played</Text>
                <Text textAlign="center" fontSize="sm" fontStyle="italic">(from available data)</Text>
                <HStack justifyContent="center">
                    <Box fontSize="lg" borderBlock="2px" borderColor="brand.200" width="80%">
                        <Text textAlign="center" paddingTop="1em">{dateString}</Text>
                        <Text textAlign="center" fontStyle="italic">
                            {gameStats.player.first_name} {gameStats.player.last_name} played for the {gameStats.team.full_name} 
                            {withHomeTeam ? " (home team)" : " (away team)"}
                        </Text>
                        <HStack justifyContent="center">
                            <HStack>
                                <VStack>
                                    <Text textAlign="left" fontWeight="semibold" marginTop="1em">Home Team</Text>
                                    <NBALogo thisTeam={gameStats.game.home_team_id} size = {120}/>
                                </VStack>
                                <Text fontSize="x-large" fontWeight="bold">{gameStats.game.home_team_score}</Text>
                            </HStack>
                            <Text fontSize="x-large" fontWeight="bold">-</Text>
                            <HStack>
                                <Text fontSize="x-large" fontWeight="bold">{gameStats.game.visitor_team_score}</Text>
                                <VStack>
                                    <Text textAlign="right" fontWeight="semibold" marginTop="1em">Away Team</Text>
                                    <NBALogo thisTeam={gameStats.game.visitor_team_id} size = {120}/>
                                </VStack>
                            </HStack>
                        </HStack>
                        <Text textAlign="center">{gameStats.player.last_name}'s Performance:</Text>
                        <HStack justifyContent="center">
                            <Table size="md" width="max-content">                       
                                <Tbody>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Points:</Th>
                                        <Td>{gameStats.pts}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Assists:</Th>
                                        <Td>{gameStats.ast}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Rebounds:</Th>
                                        <Td>{gameStats.reb}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Steals:</Th>
                                        <Td>{gameStats.stl}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>FG %:</Th>
                                        <Td>{fgPct > 100 ? gameStats.fg_pct : fgPct}% on {gameStats.fga} attempt(s)</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>3 PT %:</Th>
                                        <Td>{threePtPct > 100 ? gameStats.fg3_pct : threePtPct}% on {gameStats.fg3a} attempt(s)</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Turnovers:</Th>
                                        <Td>{gameStats.turnover}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </HStack>
                    </Box>
                </HStack>
            </>
        )};

};

export default GameCard;