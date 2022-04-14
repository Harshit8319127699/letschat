import React from 'react';

import { Typography, AppBar } from '@mui/material';
import '../src/Style.css'
import Notifications from'../src/components/Notifications'
import Sidebar from'../src/components/Sidebar'
import Videoplayer from'../src/components/Videoplayer'


function App() {
  return (
    <>
    <div className="wrapper">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography variant="h2" align="center">Lets Chat</Typography>
      </AppBar>
      <Videoplayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>

    </>
  )
}

export default App