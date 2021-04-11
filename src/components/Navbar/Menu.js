import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import MenuItem from './MenuItem';

const Menu = ({ isOpen }) => {
    return(
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                    spacing={8}
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/player-search">Player Search</MenuItem>
                <MenuItem to="/leaderboard">Leaderboard</MenuItem>
                <MenuItem to="/about">About</MenuItem>
            </Stack>
        </Box>
    )
}

export default Menu;