import { useRouter } from 'next/router';
import { Box, Text } from '@chakra-ui/react';
import UseSinglePlayer from '../../hooks/UseSinglePlayer';
import PlayerInfo from '../../components/PlayerInfo';

export function getServerSideProps(context) {
    return {
      props: {params: context.params}
    };
  }

const Player = ({ params }) => {
    const {pid} = params;

    const[playerInfo, teamInfo, lastGameStats, lastPlayerSeason, lastSeasonAverage, errorMessage] = UseSinglePlayer(pid);
    const hasData = lastGameStats !== undefined;
    const hasGameStats = (hasData && lastGameStats.pts !== null);

    return(
        <Box>
            {errorMessage ? errorMessage : null}
            <PlayerInfo playerInfo={playerInfo} teamInfo={teamInfo}  />
            {hasData ? `Last active season: ${lastPlayerSeason}, averaging ${lastSeasonAverage.pts} points` : null}
            <br />
            {hasGameStats ? `last game points: ${lastGameStats.pts}` : "no game stats available for this player"}              
        </Box>
    );
};

export default Player;