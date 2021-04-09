import React from 'react';
import { 
    Center,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Text,
    StatArrow,
    StatGroup,
    Flex,
    Spacer,
    Box,
    SimpleGrid,
    HStack,
} from '@chakra-ui/react';

const SeasonStats = ({ seasonAverages }) => {
    
    if(seasonAverages.fg_pct){
        const fgPct = (Math.round(seasonAverages.fg_pct * 10000))/100;
    }
    else{
        const fgPct = null;
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
                        <Stat borderBlock="1px" borderColor="brand.100">
                            <StatLabel>Season</StatLabel>
                            <StatNumber>{ seasonAverages.season } - { (seasonAverages.season + 1) % 100}</StatNumber>
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
                        <Stat borderBlock="1px" borderColor="brand.100">
                            <StatLabel>PPG</StatLabel>
                            <StatNumber>{ seasonAverages.pts ? seasonAverages.pts : "N/A" }</StatNumber>
                            <StatHelpText>
                                Points per Game
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100">
                            <StatLabel>AST</StatLabel>
                            <StatNumber>{ seasonAverages.ast ? seasonAverages.ast : "N/A" }</StatNumber>
                            <StatHelpText>
                                Assists per Game
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100">
                            <StatLabel>Rebs</StatLabel>
                            <StatNumber>{ seasonAverages.reb ? seasonAverages.reb : "N/A" }</StatNumber>
                            <StatHelpText>
                                Rebounds per Game
                            </StatHelpText>
                        </Stat>
                        <Stat borderBlock="1px" borderColor="brand.100">
                            <StatLabel>FG%</StatLabel>
                            <StatNumber>{ seasonAverages.fg_pct ? `${(Math.round(seasonAverages.fg_pct * 10000))/100}%`: "N/A" }</StatNumber>
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