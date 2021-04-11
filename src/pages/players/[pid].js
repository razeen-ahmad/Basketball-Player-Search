import UseSinglePlayer from '../../hooks/UseSinglePlayer';
import UsePlayerClickCount from '../../hooks/UsePlayerClickCount';
import PlayerInfo from '../../components/player/PlayerInfo';
import SeasonStats from '../../components/player/SeasonStats';
import GameCard from '../../components/player/GameCard';
import NoStats from '../../components/player/NoStats';
import Layout from '../../components/Layout';

//page for each individual player. first, need to get player_id from router path.
export function getServerSideProps(context) {
    return {
      props: {params: context.params}
    };
  }

const Player = ({ params }) => {
    const {pid} = params;//get player_id

    //UseSinglePlayer hook to get all available data from balldontlie api for this player
    const[playerInfo, teamInfo, lastGameStats, lastSeasonAverage, errorMessage] = UseSinglePlayer(pid);
    //boolean to check if this player has season average stats (meaning they will have a last game entry)
    const hasStats = lastGameStats !== undefined; 
    //boolean to check if this player individual game stats (if last game entry is not null)
    const hasGame = (hasStats && lastGameStats.pts !== null);

    //hook to update player clickcount in database, because we are loading this page. 
    //hook params depend on fetched data from previous hook
    UsePlayerClickCount(pid, playerInfo.first_name, playerInfo.last_name, teamInfo.full_name);

    return(
        <>
            {errorMessage ? errorMessage : null}
            <PlayerInfo playerInfo={playerInfo} teamInfo={teamInfo}  />
            {hasStats ? <SeasonStats seasonAverages={lastSeasonAverage} /> : null}
            {hasGame ? <GameCard gameStats={lastGameStats}/> : <NoStats firstName={playerInfo.first_name} lastName={playerInfo.last_name}/>}              
        </>
    );
};

export default Player;