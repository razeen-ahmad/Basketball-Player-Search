import { useState, useEffect } from 'react';
import axios from 'axios';

const UsePlayerClickCount = async (playerId, playerFirstName, playerLastName, playerTeam) => {
    const[errorMessage, setErrorMessage] = useState("");

    

    const updatePlayerClicks = async () => {
        if(playerTeam === undefined){
            return;
        }
        else{
            try{
                const response = await 
                    axios.put(`http://localhost:3000/api/playerclicks?player_id=${playerId}&first_name=${playerFirstName}&last_name=${playerLastName}&team=${playerTeam}`);
            } catch(err){
                setErrorMessage('Something Went Wrong');
            }
        }      
    }

    useEffect( () => {
        updatePlayerClicks();
    }, [playerTeam]);

};

export default UsePlayerClickCount;