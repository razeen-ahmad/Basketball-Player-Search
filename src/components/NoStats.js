import { Text } from '@chakra-ui/layout';
import React from 'react';

const NoStats = ({ firstName, lastName }) => {
    return(
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" paddingTop="3em">No Game Stats Available for {firstName} {lastName}</Text>
    );
}

export default NoStats;