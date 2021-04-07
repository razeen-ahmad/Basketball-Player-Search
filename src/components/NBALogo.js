import * as NBAIcons from 'react-nba-logos';

const NBALogo = ({ thisTeam }) => {
    switch(thisTeam) {
        case 'ATL':
            return <NBAIcons.ATL />
        case 'BKN':
            return <NBAIcons.BKN />
        case 'BOS':
            return <NBAIcons.BOS />
        case 'CHA':
            return <NBAIcons.CHA />
        case 'CHI':
            return <NBAIcons.CHI />
        case 'CLE':
            return <NBAIcons.CLE />
        case 'DAL':
            return <NBAIcons.DAL />
        case 'DEN':
            return <NBAIcons.DEN />
        case 'DET':
            return <NBAIcons.DET />
        case 'GSW':
            return <NBAIcons.GSW />
        case 'HOU':
            return <NBAIcons.HOU />
        case 'IND':
            return <NBAIcons.IND />
        case 'LAC':
            return <NBAIcons.LAC />
        case 'LAL':
            return <NBAIcons.LAL />
        case 'MEM':
            return <NBAIcons.MEM />
        case 'MIA':
            return <NBAIcons.MIA />
        case 'MIL':
            return <NBAIcons.MIL />
        case 'MIN':
            return <NBAIcons.MIN />
        case 'NOP':
            return <NBAIcons.NOP />
        case 'NYK':
            return <NBAIcons.NYK />
        case 'OKC':
            return <NBAIcons.OKC />
        case 'ORL':
            return <NBAIcons.ORL />
        case 'PHI':
            return <NBAIcons.PHI />
        case 'PHX':
            return <NBAIcons.PHX />
        case 'POR':
            return <NBAIcons.POR />
        case 'SAC':
            return <NBAIcons.SAC />
        case 'SAS':
            return <NBAIcons.SAS />
        case 'TOR':
            return <NBAIcons.TOR />
        case 'UTA':
            return <NBAIcons.UTA />
        case 'WAS':
            return <NBAIcons.WAS />
        default:
            return <NBAIcons.MIN />

    }
};

export default NBALogo;