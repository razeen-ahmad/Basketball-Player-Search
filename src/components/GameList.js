import React from 'react';
import GameCard from './GameCard';
import { Box, Stack } from '@chakra-ui/react';

class GameList extends React.Component {

    render() {
        const cards = this.props.games.map((item) => (
            <GameCard 
                key={item.id}
                hometeam={item.home_team.full_name}
                awayteam={item.visitor_team.full_name}
            />
        ));
        return(
            <Stack>
                <Box>
                    test box
                </Box>
                {cards}
            </Stack> 
        );       
    };
};

export default GameList;