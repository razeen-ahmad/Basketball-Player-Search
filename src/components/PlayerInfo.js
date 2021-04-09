import React from 'react';
import { 
    Avatar, 
    Stack,
    Text, 
    Container, 
    Center,
    Table,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption, 
    useMediaQuery, 
} from '@chakra-ui/react';


const playerInfo = ({ playerInfo, teamInfo }) => {
    const [isLargerThan760] = useMediaQuery("(min-width: 760px)")

    return(
        <Container minWidth="90%">
            <Stack justifyContent="space-evenly">
                <Center>
                    <Avatar 
                        name={`${playerInfo.first_name} ${playerInfo.last_name}`} 
                        size="2xl"
                    />
                </Center>
                <Stack>
                    <Text textAlign="center" fontSize="xl" fontWeight="bold">Player Bio</Text>
                    <Center>
                        <Table size="md" bg="brand.100" width="70%">                       
                            <Tbody>
                                <Tr>
                                    <Th>First Name</Th>
                                    <Td>{playerInfo.first_name}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Last Name</Th>
                                    <Td>{playerInfo.last_name}</Td>
                                </Tr>
                                { playerInfo.height_feet ? 
                                    <Tr>
                                        <Th>Height</Th>
                                        <Td>{playerInfo.height_feet} ft. {playerInfo.height_inches} in.</Td>
                                    </Tr>
                                    :
                                    null
                                }
                                { playerInfo.weight_pounds ? 
                                    <Tr>
                                        <Th>Weight</Th>
                                        <Td>{playerInfo.weight_pounds} lbs</Td>
                                    </Tr>
                                    :
                                    null
                                }
                                { playerInfo.position ? 
                                    <Tr>
                                        <Th>Position</Th>
                                        <Td>{playerInfo.position}</Td>
                                    </Tr>
                                    :
                                    null
                                }
                                <Tr>
                                    <Th>Team City</Th>
                                    <Td>{teamInfo.city}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Team</Th>
                                    <Td>{teamInfo.name} | {teamInfo.abbreviation}</Td>
                                </Tr>
                            </Tbody>
                            <TableCaption>
                                <Text fontStyle="italic">Note: data from balldontlie API may be inaccurate/incomplete</Text>
                            </TableCaption>
                        </Table>
                    </Center>  
                </Stack> 
            </Stack>
        </Container>
        );

};

export default playerInfo;
