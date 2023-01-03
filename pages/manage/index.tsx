import {styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Users from 'components/datatables/Users'
import TableContainer from '@mui/material/TableContainer'
import GroupsIcon from '@mui/icons-material/Groups';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Manage() {
    return (<Box sx={{ flexGrow: 1, marginTop: '80px' }}>
    <Grid container sx={{height: '100%'}} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Item sx={{background: "#faface"}}>
            <Typography sx={{textAlign: "left"}} variant="h5" component="h5">
                Navigation
            </Typography>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PendingActionsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Pending Cases" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
            <Divider />
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Item>
            <Users />
        </Item>
      </Grid>
    </Grid>
  </Box>)
}