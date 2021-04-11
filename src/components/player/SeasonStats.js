import React from 'react';
import { 
    Center,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Text,
    SimpleGrid,
    HStack,
} from '@chakra-ui/react';

//stack of cards that display season average stats (as available) from balldontlieapi
const SeasonStats = ({ seasonAverages }) => {
    const fgPct = (Math.round(seasonAverages.fg_pct * 10000))/100;
    var nextSeason = ((seasonAverages.season + 1) % 100).toString();
    if(nextSeason < 10){
        nextSeason = `0${nextSeason}`;
    }
    return(
        <>
            <Text textAlign="center" fontSize="2xl" fontWeight="bold" paddingTop="3em">Latest Season Average</Text>
            <Text textAlign="center" fontSize="sm" fontStyle="italic" paddingBottom="3em">(from available data)</Text>
            <HStack justifyContent="center">
                <Center>
                    <SimpleGrid
                        spacingX="5em"
                        spacingY="2em"
                        columns={[1, null, 3]}
                        justifyContent="center"
                        width="80%"
                    >
                        <Stat borderBlock="1px" borderColor="brand.100" width="max-content">
                            <StatLabel>Season</StatLabel>
                            <StatNumber>{ seasonAverages.season } - {nextSeason}</StatNumber>
                            <StatHelpText>
                                NBA season
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100">
                            <StatLabel>Games Played</StatLabel>
                            <StatNumber>{ seasonAverages.games_played ? seasonAverages.games_played : "N/A" }</StatNumber>
                            <StatHelpText>
                                Games
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100" width="max-content">
                            <StatLabel>PPG</StatLabel>
                            <StatNumber>{ seasonAverages.pts ? seasonAverages.pts : "N/A" }</StatNumber>
                            <StatHelpText>
                                Points per Game
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100" width="max-content">
                            <StatLabel>AST</StatLabel>
                            <StatNumber>{ seasonAverages.ast ? seasonAverages.ast : "N/A" }</StatNumber>
                            <StatHelpText>
                                Assists per Game
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100" width="max-content">
                            <StatLabel>Rebs</StatLabel>
                            <StatNumber>{ seasonAverages.reb ? seasonAverages.reb : "N/A" }</StatNumber>
                            <StatHelpText>
                                Rebounds per Game
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100" width="max-content">
                            <StatLabel>FG%</StatLabel>
                            <StatNumber>{ seasonAverages.fg_pct ? `${fgPct}%`: "N/A" }</StatNumber>
                            <StatHelpText>
                                Field Goal Percentage
                            </StatHelpText>
                        </Stat>
                    </SimpleGrid>
                </Center>
            </HStack>
        </>
    );

}

export default SeasonStats;