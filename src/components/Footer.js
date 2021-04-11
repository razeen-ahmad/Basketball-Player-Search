import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link'


const Footer = (props) => {
  
    return (
        <Box p={2} bg="brand.200" color="brand.100">
            <Text textAlign="center">
                <Link href="https://www.balldontlie.io/#introduction">All data from balldontlie.io</Link>
            </Text>
        </Box>
    );
};

export default Footer;
  