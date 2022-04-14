import React,{useContext} from 'react'
import { SocketContext } from '../Context'
import '../Video.css'
import { Grid, Typography, Paper  } from '@mui/material';

function Videoplayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext); 
 
//  console.log(callAccepted)
  return (
    <>
    <Grid container className='gridContainer'>
      {stream && (
        <Paper className="paper">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className="paper">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className="video" />
          </Grid>
        </Paper>
      )}
    </Grid>
    
    </>
  )
}

export default Videoplayer