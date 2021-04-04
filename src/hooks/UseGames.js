import { useEffect, useState } from 'react';
import balldontlie from '../api/balldontlie';

const UseGames = () => {
    //state variables for data from api or error message
    const [games, setGames] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getGames = async() => {
        try{
            const response = await balldontlie.get('/games');
            setErrorMessage('');
            setGames(response.data.data);
        } catch(err){
            setErrorMessage('Something Went Wrong');
        }
    };

    useEffect( () => {
        getGames();
    }, []);

    const searchGames = async season => {
        if(season.length === 0){
            getGames();
        }
        else {
            const response = await balldontlie.get('/games', {
                params: {
                    "seasons[]": season
                }
            });
            setGames(response.data.data);
        }
    };
    
    return [games, searchGames, errorMessage];
};

export default UseGames;