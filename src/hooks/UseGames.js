import { useEffect, useState } from 'react';
import balldontlie from '../api/balldontlie';

const UseGames = () => {
    //state variables for data from api or error message
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchGamesApi = async (season) => {
        try{
            const response = await balldontlie.get('/games', {
                params: {
                    "seasons[]": season
                }
            });

            console.log(response);
            //setResults(response.data);
        } catch(err) {
            setErrorMessage('Something Went Wrong');
        }
    };

    useEffect( () => {
        searchGamesApi('2010');
    }, []);
    
    return [searchGamesApi, results, errorMessage];
};

export default UseGames;