import { Box } from '@chakra-ui/react';
import UseSinglePlayer from '../../hooks/UseSinglePlayer';
import PlayerInfo from '../../components/PlayerInfo';
import SeasonStats from '../../components/SeasonStats';
import GameCard from '../../components/GameCard';
import NoStats from '../../components/NoStats';

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

    return(
        <Box>
            {errorMessage ? errorMessage : null}
            <PlayerInfo playerInfo={playerInfo} teamInfo={teamInfo}  />
            {hasStats ? <SeasonStats seasonAverages={lastSeasonAverage} /> : null}
            {hasGame ? <GameCard gameStats={lastGameStats}/> : <NoStats firstName={playerInfo.first_name} lastName={playerInfo.last_name}/>}              
        </Box>
    );
};

export default Player;