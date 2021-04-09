import React from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';

const playerInfo = ({ infoData }) => {

    return(
        <Box>
           <Avatar name={`${infoData.first_name} ${infoData.last_name}`}/>
           <Box>
               <Text> Name: {infoData.first_name} {infoData.last_name}  </Text>
           </Box>

        </Box>        
    );

};

export default playerInfo;
