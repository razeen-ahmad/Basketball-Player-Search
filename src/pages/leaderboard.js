import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import dbConnect from '../util/dbConnect';
import { SimpleGrid, HStack, Text } from '@chakra-ui/react';
var PlayerClickCount = require('../../models/PlayerClickCount');
import RankCard from '../components/RankCard';

const LeaderBoard = ({ rankData }) => {
    
    var currRank = 1;
    var lastClick = rankData[0].clicks;
    const cards = rankData.map(
        function(item) {
            if(item.clicks !== lastClick){
                currRank++;
                lastClick = item.clicks;
            }
            return(
                <RankCard 
                    key={item.player_id}
                    rankedPlayer={item} 
                    rank={currRank} 
                />
            );
        }
    );
    return(
        //rankData contains data from database, in descending order
        <Layout>
            <Head>
                <title>Player Search Rankings</title>
            </Head>
            <Text textAlign="center" fontSize="xxx-large" fontWeight="bold">Player Profile Leaderboard</Text>
            <HStack justifyContent="center">
                <SimpleGrid
                    spacingY="1.5em"
                    columns={[1]}
                    justifyContent="center"
                >
                    {cards}
                </SimpleGrid>
            </HStack>
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

  export default LeaderBoard;