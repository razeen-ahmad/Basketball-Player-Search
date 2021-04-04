import { useEffect, useState } from 'react';
import balldontlie from '../api/balldontlie';

const UsePlayers = () => {
    //state variables for data from api or error message
    const [players, setPlayers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getPlayers = async() => {
        try{
            const response = await balldontlie.get('/players');
            setPlayers(response.data.data);
        } catch(err){
            setErrorMessage('Something Went Wrong');
        }
    };

    useEffect( () => {
        getPlayers();
    }, []);

    const searchPlayers = async name => {
        if(name.length === 0){
            getPlayers();
        }
        else {
            const response = await balldontlie.get('/players', {
                params: {
                    "search": name.toLowerCase()
                }
            });
            console.log(response.data.data);
            setPlayers(response.data.data);
        }
    };
    
    return [players, searchPlayers, errorMessage];
};

export default UsePlayers;