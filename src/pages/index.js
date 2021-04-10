import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout';
import { Box, Text, Image, HStack, Center } from '@chakra-ui/react';
// import Image from 'next/image';

export default function Home({ properties }) {
  //properties === all data in 'player_clicks' collection
  return (
    <Layout>
      <Head>
        <title>Basketball Player Search</title>
      </Head>
      <Center>
        <Box justifyContent="center" boxSize="xl">
          <Image 
            src="/bballcourt.jpg" 
            objectFit="fill"
            alt="Basketball Court with Sunset" />
        </Box>
      </Center>
      {/* <Box objectFit="contain">
        <Image 
          src="/bballcourt.jpg"
          height={20}
          width={50}
          layout="responsive"
        />
      </Box> */}
      <Link href='/player-search'>
        <a>To player search!</a>
      </Link>
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
