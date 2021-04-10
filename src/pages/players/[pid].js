import { useEffect } from 'react';
import UseSinglePlayer from '../../hooks/UseSinglePlayer';
import UsePlayerClickCount from '../../hooks/UsePlayerClickCount';
import PlayerInfo from '../../components/PlayerInfo';
import SeasonStats from '../../components/SeasonStats';
import GameCard from '../../components/GameCard';
import NoStats from '../../components/NoStats';
import Layout from '../../components/Layout';

export function getServerSideProps(context) {
    return {
      props: {params: context.params}
    };
  }

const Player = ({ params }) => {
    const {pid} = params;

    const[playerInfo, teamInfo, lastGameStats, lastPlayerSeason, lastSeasonAverage, errorMessage] = UseSinglePlayer(pid);
    const hasStats = lastGameStats !== undefined;
    const hasGame = (hasStats && lastGameStats.pts !== null);

    
    UsePlayerClickCount(pid, playerInfo.first_name, playerInfo.last_name, teamInfo.full_name);

    return(
        <Layout>
            {errorMessage ? errorMessage : null}
            <PlayerInfo playerInfo={playerInfo} teamInfo={teamInfo}  />
            {hasStats ? <SeasonStats seasonAverages={lastSeasonAverage} /> : null}
            {hasGame ? <GameCard gameStats={lastGameStats}/> : <NoStats firstName={playerInfo.first_name} lastName={playerInfo.last_name}/>}              
        </Layout>
    );
};

export default Player;