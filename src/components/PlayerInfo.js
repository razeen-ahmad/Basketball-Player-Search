import React from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';

const playerInfo = ({ playerInfo, teamInfo }) => {

    return(
        <Box>
           <Avatar name={`${playerInfo.first_name} ${playerInfo.last_name}`}/>
           <Box>
               <Text> Name: {playerInfo.first_name} {playerInfo.last_name}  </Text>
               <Text>Team: {teamInfo.full_name}</Text>
           </Box>

        </Box>        
    );

};

export default playerInfo;
