import React from 'react';
import { Image, Box, Text, Center, HStack, VStack } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => {
    return(
        <Layout>
            <HStack justifyContent="center" paddingBottom="6em">
                <Box boxShadow="dark-lg" width="30%">
                    <VStack spacing={3} paddingBottom="2em">
                        <Image 
                            width="xl"
                            height="xxl"
                            src="/AboutShot.jpg" 
                            objectFit="fill"
                            alt="Razeen Ahmad Headshot" 
                        />
                        <VStack>
                            <Text fontSize="4xl" fontWeight="bold">
                                Razeen Ahmad
                            </Text>
                            <Text paddingX="4em">
                                I am a student at the University of Minnesota double majoring in finance and computer science,
                                graduating in May 2023. I made this website to gain more experience with full-stack development while 
                                learning more about one of my favorite past times: basketball. Although much of the data here is incomplete, 
                                I had a great time learning more about basketball players and the amount of data collected on them. If you 
                                want to see more of my projects (like a basketball stat analysis with Python), feel free to check out my website!
                            </Text>
                        </VStack>
                    </VStack>
                </Box>
                
            </HStack>
        </Layout>
    );
}

export default About;