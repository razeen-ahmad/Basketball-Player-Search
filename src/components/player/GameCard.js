import React from 'react';
import {
    Box,
    HStack,
    VStack,
    Text,
    Table,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import NBALogo from '../NBALogo';
import UseWindowDimensions from '../../hooks/UseWindowDimentions';

//component that displays individual game stats, if available in data
const GameCard = ({ gameStats }) => {
    //state variables to get device width
    const { width } = UseWindowDimensions();

    if(!gameStats || gameStats.game === undefined){
        return null;
    }
    else{
        //gameStats.game.date returns the date of the first game of the season.
        //parse ISO-8601 date format to string
        var date = new Date(gameStats.game.date);
        var dateString = date.toDateString();
        
        //get season year in format: AAAA-AA e.g. 2015-16
        var startSeasonYear = date.getFullYear();
        var nextSeasonYear = ((startSeasonYear + 1) % 100).toString();
        //if nextSeasonYear is in single digits
        if(nextSeasonYear < 10){
            nextSeasonYear = `0${nextSeasonYear}`;
        }

        //get field goal and 3pt shot % to decomal point
        const fgPct = (Math.round(gameStats.fg_pct * 10000))/100;
        const threePtPct = (Math.round(gameStats.fg3_pct * 10000))/100;

        //check whether this player plays on the home or away team for this game
        var withHomeTeam = gameStats.team.id === gameStats.game.home_team_id;

        return(
            <>
                <Text textAlign="center" fontSize="2xl" fontWeight="bold" paddingTop="3em">First Game of {startSeasonYear} - {nextSeasonYear} Season Played</Text>
                <Text textAlign="center" fontSize="sm" fontStyle="italic">(from available data)</Text>
                <HStack justifyContent="center">
                    <Box fontSize="lg" borderBlock="2px" borderColor="brand.200" width="80%">
                        <Text textAlign="center" paddingTop="1em">{dateString}</Text>
                        <Text textAlign="center" fontStyle="italic">
                            {gameStats.player.first_name} {gameStats.player.last_name} played for the {gameStats.team.full_name} 
                            {withHomeTeam ? " (home team)" : " (away team)"}
                        </Text>
                        <Box width="100%">
                            <HStack justifyContent="center">
                                <HStack>
                                    <VStack>
                                        <Text textAlign="center" fontWeight="semibold" marginTop="1em">Home Team</Text>
                                        <Box>
                                            <NBALogo thisTeam={gameStats.game.home_team_id} size={0.25*width}/>
                                        </Box>
                                    </VStack>
                                    <Text fontSize="x-large" fontWeight="bold">{gameStats.game.home_team_score}</Text>
                                </HStack>
                                <Text fontSize="x-large" fontWeight="bold">-</Text>
                                <HStack>
                                    <Text fontSize="x-large" fontWeight="bold">{gameStats.game.visitor_team_score}</Text>
                                    <VStack>
                                        <Text textAlign="center" fontWeight="semibold" marginTop="1em">Away Team</Text>
                                        <Box>
                                            <NBALogo thisTeam={gameStats.game.visitor_team_id} size={0.25*width}/>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </HStack>
                        </Box>
                        <Text textDecoration="underline" textAlign="center">{gameStats.player.last_name}'s Performance:</Text>
                        <HStack justifyContent="center">
                            <Table size="md" width="90%">                       
                                <Tbody>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Points:</Th>
                                        <Td>{gameStats.pts ? gameStats.pts : 'N/A'}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Assists:</Th>
                                        <Td>{gameStats.ast ? gameStats.ast : 'N/A'}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Rebounds:</Th>
                                        <Td>{gameStats.reb ? gameStats.reb : 'N/A'}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>Steals:</Th>
                                        <Td>{gameStats.stl ? gameStats.stl : 'N/A'}</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>FG %:</Th>
                                        {/* handle data inconsistentcies in balldontlie api where 50% maybe entered as '0.50' or '50' */}
                                        <Td>{fgPct > 100 ? gameStats.fg_pct : fgPct}% on {gameStats.fga ? gameStats.fga : '0'} attempt(s)</Td>
                                    </Tr>
                                    <Tr borderBottom="2px" borderColor="brand.400">
                                        <Th>3 PT %:</Th>
                                        {/* handle data inconsistentcies in balldontlie api where 50% maybe entered as '0.50' or '50' */}
                                        <Td>{threePtPct > 100 ? gameStats.fg3_pct : threePtPct}% on {gameStats.fg3a ? gameStats.fg3a : '0'} attempt(s)</Td>
                                    </Tr>
                                    <Tr>
                                        <Th>Turnovers:</Th>
                                        <Td>{gameStats.turnover ? gameStats.turnover : 'N/A'}</Td>
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