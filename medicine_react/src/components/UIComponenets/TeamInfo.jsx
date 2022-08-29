import { List, ListItem, ListItemAvatar, Avatar, ListItemText,ListSubheader,Paper } from '@mui/material';
import LandscapeIcon from '@mui/icons-material/Landscape';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import { useSelector } from 'react-redux';
function TeamInfo() {
    const teamData = useSelector((state) => state.teamInfo);
    return (
        <Paper elevation={1} sx={{ width: '100%'}}>
            <List subheader={<ListSubheader>隊伍資訊</ListSubheader>}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PlaceIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="隊伍名稱" secondary={teamData.teamName} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LandscapeIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="最高海拔" secondary={teamData.teamAttitude} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <CalendarTodayIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="天數" secondary={teamData.teamDays} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PeopleIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="人數" secondary={teamData.teamPerson} />
            </ListItem>
            </List>
            </Paper>);
}
export default TeamInfo;