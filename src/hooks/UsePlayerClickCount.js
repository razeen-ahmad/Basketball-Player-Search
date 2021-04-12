import { useState, useEffect } from 'react';
import axios from 'axios';

//hook to fetch data from MongoDB storing data on how many times each player's page
//was visited or "clicked"
const UsePlayerClickCount = async (playerId, playerFirstName, playerLastName, playerTeam) => {
    const[errorMessage, setErrorMessage] = useState("");

    

    const updatePlayerClicks = async () => {
        //if playerTeam undefined, then we do not have all necessary query paramaters.
        if(playerTeam === undefined){
            return;
        }
        else{
            try{
                //make put request to MongoDB with required query params populated correctly
                const response = await 
                    axios.put(`https://bballplayersearch.herokuapp.com/api/playerclicks?player_id=${playerId}&first_name=${playerFirstName}&last_name=${playerLastName}&team=${playerTeam}`);
            } catch(err){
                setErrorMessage('Something Went Wrong');
            }
        }      
    }

    //make put request every team playerTeam changes. 
    //playerTeam data comes from call to balldontlieapi, which may take time
    //however, updatePlayerClicks may only get called before this data is available. 
    //therefore, we set up useEffect to run whenever playerTeam data changes.
    useEffect( () => {
        updatePlayerClicks();
    }, [playerTeam]);

};

export default UsePlayerClickCount;