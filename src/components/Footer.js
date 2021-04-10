import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link'


const Footer = (props) => {
  
    return (
        <Box bg="brand.200" color="brand.100">
            <Text textAlign="center">All data from <Link href="https://www.balldontlie.io/#introduction">balldontlie.io</Link></Text>
            <Text textAlign="center">Built by: Razeen Ahmad- rahmad875@gmail.com</Text>
        </Box>
    );
};

export default Footer;
  