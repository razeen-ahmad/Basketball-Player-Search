import React from 'react';
import { Stack } from '@chakra-ui/react';

const CardList = ({ data, cardType }) => {
    const cards = data.map((item) => (
        <Card
            data={item}
            cardType={cardType}
        />
    ));
    return(
        <Stack>
            {cards}
        </Stack> 
    );       
};

export default CardList;