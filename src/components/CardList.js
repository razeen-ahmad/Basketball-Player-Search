import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

const CardList = ({ data, cardType }) => {
    const cards = data.map((item) => (
        <cardType
            
        />
    ));
    return(
        <Stack>
            {cards}
        </Stack> 
    );       
};

export default CardList;