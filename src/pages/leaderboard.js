import React from 'react';
import Head from 'next/head';
import dbConnect from '../util/dbConnect';
import { SimpleGrid, HStack, Text } from '@chakra-ui/react';
var PlayerClickCount = require('../../models/PlayerClickCount');
import RankCard from '../components/RankCard';

//page that displays all data from database and ranks each entry based on number of visits/clicks
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

const LeaderBoard = ({ rankData }) => {
    //rankData holds all playerclicks data in descending order
    
    //function to assign each entry a rank
    var currRank = 1;//start with rank 1, because data will be passed-in, by descending order.
    var lastClick = rankData[0].clicks;//variable to track whether there are duplicates, start with first entry
    //function to return rank cards with correct rank assigned
    const cards = rankData.map(
        function(item) {
            //if current entry's click is not a duplicate, then move move onto next rank
            //otherwise if current entry's click is a duplicate, then maintain same rank
            if(item.clicks !== lastClick){
                currRank++;
                lastClick = item.clicks;//update variable to keep track of duplicates to current entry's clicks
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
        <>
            <Head>
                <title>Player Leaderboard</title>
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
        </>
    );
};

  export default LeaderBoard;