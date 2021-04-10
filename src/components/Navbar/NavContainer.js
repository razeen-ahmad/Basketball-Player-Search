import React from 'react';
import { Flex } from '@chakra-ui/react';

const NavContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            margin="0 0 0 0"
            mb={8}
            p={10}
            bg="brand.200"
            color="brand.100"
            {...props}
        >
            {children}
        </Flex>
    )
};

export default NavContainer;