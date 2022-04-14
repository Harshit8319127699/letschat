import React,{ useState, useContext } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
// import { Assignment, Phone, PhoneDisabled } from '@mui/material/Icon
import "../Side.css"
import { SocketContext } from '../Context';

// import { CopyToClipboard } from 'react-copy-to-clipboard*';

function Sidebar({children}) {
  const {  callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('')
  
  return (
    <>
     <Container className='container'>
      <Paper elevation={10} className='paper'>
        <form className='root' noValidate autoComplete="off">
          <Grid container className='gridContainer'>
            <Grid item xs={12} md={6} className='padding'>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} md={6} className='padding'>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary"  fullWidth onClick={leaveCall} className='margin'>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary"  fullWidth onClick={() => callUser(idToCall)} className='margin'>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
    </>
  )
}

export default Sidebar