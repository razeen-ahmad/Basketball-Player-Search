import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout';

export default function Home({ properties }) {
  //properties === all data in 'player_clicks' collection
  return (
    <Layout>
      <Head>
        <title>Basketball Player Search</title>
      </Head>
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
