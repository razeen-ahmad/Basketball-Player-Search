import { Box } from '@chakra-ui/react';
import UseSinglePlayer from '../../hooks/UseSinglePlayer';
import PlayerInfo from '../../components/PlayerInfo';
import SeasonStats from '../../components/SeasonStats';

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
            <br />
            {hasGame ? `last game points: ${lastGameStats.pts}` : "no game stats available for this player"}              
        </Box>
    );
};

export default Player;