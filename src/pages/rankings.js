import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { connectToDatabase } from '../util/mongodb'

const Rankings = ({ data }) => {
    console.log(data);
    return(
        <Layout>
            <Head>
                <title>Player Search Rankings</title>
            </Head>
            <text>This is rankings page</text>
        </Layout>
    )
};

export async function getServerSideProps(context) {
    const { client } = await connectToDatabase();
  
    //manually get 'players' database
    const db = await client.db('players');
    const db_data = await db.collection("player_clicks").find({}).toArray();
  
    //turn all data from mongodb collection into plain string objects
    const data = JSON.parse(JSON.stringify(db_data));
  
    return {
      props: { data },
    }
  }