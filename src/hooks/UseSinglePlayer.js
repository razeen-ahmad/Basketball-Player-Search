import { useEffect, useState } from 'react';
import balldontlie from '../api/balldontlie';
import axios from 'axios';

const UseSinglePlayer = (playerId) => {
    const[playerInfo, setPlayerInfo] = useState({});
    const[teamInfo, setTeamInfo] = useState({});
    const[lastPlayerSeason, setLastPlayerSeason] = useState(0);
    const[lastGameStats, setLastGameStats] = useState([]);
    const[lastSeasonAverage, setLastSeasonAverage] = useState({});
    const[errorMessage, setErrorMessage] = useState('');

    //function to get specific player and team's basic info from balldontlie api
    //use playerid passed in as param to hook
    const getPlayerInfo = async() => {
        try{
            const response = await balldontlie.get(`/players/${playerId}}`);
            setPlayerInfo(response.data);
            setTeamInfo(response.data.team); //although this is included in playerInfo, do this to avoid getting "can't access .team of undefined error"
        } catch(err){
            setErrorMessage('Something Went Wrong');
        }
    };

    //get all available stats (if available) of specific player specified with call to hook
    const getPlayerStats = async() => {
        try{
            const response = await balldontlie.get('/stats', {
                params: {
                    "player_ids[]": playerId
                }
            });
            setLastGameStats(response.data.data[0]);
            //check if api has stat data on this player
            if(response.data.data.length !== 0){
                //get latest season this player played
                const lastSeason = response.data.data[0].game.season;
                setLastPlayerSeason(lastSeason);
                //get season average during this season
                const sznAvgResponse = await balldontlie.get('/season_averages',{
                    params: {
                        "season": lastSeason,
                        "player_ids[]": playerId,
                    }
                });
                setLastSeasonAverage(sznAvgResponse.data.data[0]);//latest season averages will be first entry in array

            }
        } catch(err) {
            setErrorMessage('Something Went Wrong- stats')
        }
    };


    useEffect( () => {
        getPlayerInfo();
        getPlayerStats();
    }, []);

    return[playerInfo, teamInfo, lastGameStats, lastSeasonAverage, errorMessage];

};

export default UseSinglePlayer;