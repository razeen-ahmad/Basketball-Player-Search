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
              width="xxl"
              height="xl"
              src="/bballcourt.jpg" 
              objectFit="fill"
              alt="Basketball Court with Sunset" 
            />
            <VStack>
              <Text fontSize="4xl" fontWeight="extrabold">
                Welcome to NBA Player Search!
              </Text>
              <Text paddingX="25em">
                This is a fullstack app that allows users to search for NBA player info with data from the 
                <Link href="https://www.balldontlie.io/#attributes"> an open source basketball API↗. </Link>
                You can search for any player in the NBA in the 'Search' page and view each player's data by clicking
                on their card. Visits to each each player's page increments a counter to measure how many times their page
                has been visited. This data is ranked and displayed on the 'Leaderboard' page. This app was built using
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

// export async function getServerSideProps(context) {
//   const { client } = await connectToDatabase();

//   //manually get 'players' database
//   const db = await client.db('players');
//   const data = await db.collection("player_clicks").find({}).toArray();

//   //turn all data from mongodb collection into plain string objects
//   const properties = JSON.parse(JSON.stringify(data));

//   return {
//     props: {properties: properties },
//   }
// }
