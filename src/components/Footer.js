import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link'

//bar at bottom of every screen
const Footer = () => {
    return (
        <Box p={2} bg="brand.200" color="brand.100">
            <Text textAlign="center">
                <Link href="https://www.balldontlie.io/#introduction">All data from balldontlie.io</Link>
            </Text>
        </Box>
    );
};

export default Footer;
  