import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

const Player = () => {
    const router = useRouter();
    const { pid } = router.query;

    return(
        <Box>
            Player: {pid}
        </Box>
    );
};

export default Player;