import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import dbConnect from '../util/dbConnect';
var PlayerClickCount = require('../../models/PlayerClickCount');

const Rankings = ({ rankData }) => {
    return(
        //rankData contains data from database, in descending order
        <Layout>
            <Head>
                <title>Player Search Rankings</title>
            </Head>
            <text>This is rankings page</text>
        </Layout>
    )
};

export async function getServerSideProps(context) {
    dbConnect();
  
    //get player count data, sorted in descending order
    const playerClickCounts = await PlayerClickCount.find({}).sort({"clicks": -1});
    
  
    //turn all data from mongodb collection into plain string objects
    const rankData = JSON.parse(JSON.stringify(playerClickCounts));
  
    return {
      props: { rankData },
    }
  };

  export default Rankings;