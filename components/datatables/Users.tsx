import {useCallback, useState} from 'react'
import {useQuery} from '@apollo/client'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import {GET_USERS} from 'helpers/graphql/queries/user'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130},
  { field: 'companyId', headerName: 'Company ID', width: 130}
];


export default function Users() {
    const { loading, error, data } = useQuery(GET_USERS);
    const [addUserModalOpen, setAddUserModalOpen] = useState(false) 

    const toggleAddUserModal = useCallback(() => setAddUserModalOpen(modalOpen => !modalOpen), [])
    
    return (<><Stack spacing={1} sx={{ height: 400, width: '100%' }}>
        {loading && (<LinearProgress color="inherit" />)}
        <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography sx={{textAlign: "left"}} variant="h5" component="h5">
                Users
            </Typography>
            <Button 
                variant="outlined" 
                onClick={() => setAddUserModalOpen(true)} 
                startIcon={<PersonAddAltIcon />}
            >Add User</Button>
        </Container>
        <DataGrid
            rows={data?.users || []}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        {error && (<Alert severity="error">{error.message}</Alert>)}
        <Dialog open={addUserModalOpen} onClose={toggleAddUserModal}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Added users will receive an invitation email at the address provided here.
                </DialogContentText>
                <Stack 
                    direction="row" 
                    justifyContent="space-between"
                >
                    <TextField
                        sx={{mr: 1}}
                        autoFocus
                        margin="dense"
                        id="addUserFirstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        sx={{ml: 1}}
                        autoFocus
                        margin="dense"
                        id="addUserLastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </Stack>
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="addUserEmail"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    autoFocus
                    margin="dense"
                    id="addUserPassword"
                    label="Password"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleAddUserModal}>Cancel</Button>
            </DialogActions>
        </Dialog>    
    </Stack></>)
}
