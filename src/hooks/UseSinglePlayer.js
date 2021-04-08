import { useEffect, useState } from 'react';
import balldontlie from '../api/balldontlie';

const UseSinglePlayer = (playerId) => {
    const[playerInfo, setPlayerInfo] = useState({});
    const[teamInfo, setTeamInfo] = useState({});
    const[lastPlayerSeason, setLastPlayerSeason] = useState(0);
    const[lastGameStats, setLastGameStats] = useState([]);
    const[lastSeasonAverage, setLastSeasonAverage] = useState({});
    const[errorMessage, setErrorMessage] = useState('');

    const getPlayerInfo = async() => {
        try{
            const response = await balldontlie.get(`/players/${playerId}}`);
            setPlayerInfo(response.data);
            setTeamInfo(response.data.team);
        } catch(err){
            setErrorMessage('Something Went Wrong');
        }
    };

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
                setLastSeasonAverage(sznAvgResponse.data.data[0]);

            }
        } catch(err) {
            setErrorMessage('Something Went Wrong- stats')
        }
    };


    useEffect( () => {
        getPlayerInfo();
        getPlayerStats();
    }, []);

    return[playerInfo, teamInfo, lastGameStats, lastPlayerSeason, lastSeasonAverage, errorMessage];

};

export default UseSinglePlayer;