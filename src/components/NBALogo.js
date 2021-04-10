import * as NBAIcons from 'react-nba-logos';

const NBALogo = ({ thisTeam, size }) => {
    switch(thisTeam) {
        case 1:
            return <NBAIcons.ATL size={size}/>
        case 2:
            return <NBAIcons.BOS size={size}/>
        case 3:
            return <NBAIcons.BKN size={size}/>
        case 4:
            return <NBAIcons.CHA size={size}/>
        case 5:
            return <NBAIcons.CHI size={size}/>
        case 6:
            return <NBAIcons.CLE size={size}/>
        case 7:
            return <NBAIcons.DAL size={size}/>
        case 8:
            return <NBAIcons.DEN size={size}/>
        case 9:
            return <NBAIcons.DET size={size}/>
        case 10:
            return <NBAIcons.GSW size={size}/>
        case 11:
            return <NBAIcons.HOU size={size}/>
        case 12:
            return <NBAIcons.IND size={size}/>
        case 13:
            return <NBAIcons.LAC size={size}/>
        case 14:
            return <NBAIcons.LAL size={size}/>
        case 15:
            return <NBAIcons.MEM size={size}/>
        case 16:
            return <NBAIcons.MIA size={size}/>
        case 17:
            return <NBAIcons.MIL size={size}/>
        case 18:
            return <NBAIcons.MIN size={size}/>
        case 19:
            return <NBAIcons.NOP size={size}/>
        case 20:
            return <NBAIcons.NYK size={size}/>
        case 21:
            return <NBAIcons.OKC size={size}/>
        case 22:
            return <NBAIcons.ORL size={size}/>
        case 23:
            return <NBAIcons.PHI size={size}/>
        case 24:
            return <NBAIcons.PHX size={size}/>
        case 25:
            return <NBAIcons.POR size={size}/>
        case 26:
            return <NBAIcons.SAC size={size}/>
        case 27:
            return <NBAIcons.SAS size={size}/>
        case 28:
            return <NBAIcons.TOR size={size}/>
        case 29:
            return <NBAIcons.UTA size={size}/>
        case 30:
            return <NBAIcons.WAS size={size}/>
        default:
            return <NBAIcons.MIN size={size}/>

    }
};

export default NBALogo;