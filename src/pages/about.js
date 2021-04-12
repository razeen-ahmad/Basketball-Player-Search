import React from 'react';
import { Image, Box, Text, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { CgLaptop } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

//About page with details about me and links to my other pages
const About = () => {
    return(
        <>
            <HStack justifyContent="center" paddingBottom="6em">
                <Box boxShadow="xl" width="90%">
                    <VStack spacing={3} paddingBottom="2em">
                        <Image 
                            width="xl"
                            height="xxl"
                            src="/AboutShot.jpg" 
                            objectFit="fill"
                            alt="Razeen Ahmad Headshot" 
                        />
                        <VStack>
                            <Text fontSize="4xl" textAlign="center" fontWeight="bold">
                                Razeen Ahmad
                            </Text>
                            <HStack>
                                <Text textAlign="center" paddingX="0.5em">
                                    I am a student at the University of Minnesota double majoring in finance and computer science,
                                    graduating in Spring 2023. I made this website to gain more experience with full-stack development while 
                                    learning more about one of my favorite past times: basketball. Although much of the data here is incomplete, 
                                    I had a great time learning more about NBA players and the data collected on them. If you want to see more of 
                                    my projects (like a basketball stat analysis with Python Pandas), feel free to
                                    <Link href="https://www.razeenahmad.com"><a> check out my website→</a></Link>
                                </Text>
                                <VStack paddingX="0.5em">
                                    <Link href="https://www.razeenahmad.com"><a><CgLaptop size={35}/></a></Link>
                                    <Link href="https://github.com/razeen-ahmad"><a><AiFillGithub size={35}/></a></Link>
                                    <Link href="https://www.linkedin.com/in/razeen-ahmad/"><a><AiFillLinkedin size={35}/></a></Link>
                                </VStack>
                            </HStack>
                        </VStack>
                    </VStack>
                </Box>
                
            </HStack>
        </>
    );
}

export default About;