import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Text, Image, VStack, Center, Button, SlideFade } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Basketball Player Search</title>
      </Head>
      <SlideFade in={true}>
        <Center paddingBottom="2em">
          <VStack spacing={2}>
            <Image 
              maxH="xl"
              src="/bballcourt.jpg" 
              objectFit="scale-down"
              alt="Basketball Court with Sunset" 
            />
            <VStack>
              <Text textAlign="center" fontSize="4xl" fontWeight="extrabold">
                Welcome to NBA Player Search!
              </Text>
              <Text width="70%">
                This is a fullstack app that allows users to search for NBA player info with data from 
                <Link href="https://www.balldontlie.io/#attributes"> an open source basketball API↗. </Link>
                You can search for any NBA player (1979-Present) in the 'Player Search' page and view each player's data by clicking
                on their card. The number of visits to each player's individual page is counted and logged in a back-end
                database, which is then ranked and displayed in the 'Leaderboard' page. This app was built using
                MongoDB, Express.js, React.js, Next.js, and Chakra-UI. Take a look and let me know what you think!
              </Text>
              <Link href="/player-search">
                <a>
                  <Button rightIcon={<ArrowForwardIcon />} bg="brand.100" size="lg">
                    Get Started
                  </Button>
                </a>
              </Link>
            </VStack>
          </VStack>
        </Center>
      </SlideFade>
    </Layout>
  )
}
