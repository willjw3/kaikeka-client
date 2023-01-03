import {styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ManageLayout() {

    return (<Box sx={{ flexGrow: 1, marginTop: '80px' }}>
    <Grid container sx={{height: '100%'}} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid>
  </Box>)
}