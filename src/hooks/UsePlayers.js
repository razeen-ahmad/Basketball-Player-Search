import { useEffect, useState } from 'react';
import balldontlie from '../api/balldontlie';

const UsePlayers = () => {
    //state variables for data from api or error message
    const [players, setPlayers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [ totalPages, setTotalPages ] = useState(0);

    const getPlayers = async(num) => {
        try{
            const response = await balldontlie.get('/players', {
                params: {
                    "per_page": 8,
                    "page": num
                }
            });
            setPlayers(response.data.data);
            setTotalPages(response.data.meta.total_pages);
        } catch(err){
            setErrorMessage('Something Went Wrong');
        }
    };

    useEffect( () => {
        getPlayers(0);
    }, []);

    const searchPlayers = async (name, num) => {
        if(name.length === 0){
            getPlayers(num);
        }
        else {
            try{
                const response = await balldontlie.get('/players', {
                    params: {
                        "search": name.toLowerCase(),
                        "per_page": 8,
                        "page": num
                    }
                });
                setPlayers(response.data.data);
                setTotalPages(response.data.meta.total_pages);
            } catch(err){
                setErrorMessage("Something went wrong");
            }
        }
    };
    
    return [players, searchPlayers, errorMessage, totalPages];
};

export default UsePlayers;