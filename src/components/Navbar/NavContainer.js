import React from 'react';
import { Flex } from '@chakra-ui/react';

const NavContainer = ({ children, ...props }) => {
    //container for all navbar elements
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={10}
            bg="brand.200"
            opacity="1"
            color="brand.100"
            position="sticky"
            top="0px"
            zIndex={100}
            {...props}
        >
            {children}
        </Flex>
    )
};

export default NavContainer;