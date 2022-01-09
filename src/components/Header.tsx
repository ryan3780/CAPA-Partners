import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BusinessIcon from '@mui/icons-material/Business';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {NotMobile} from './Interface';
import Drawer from './Drawer';


export default function ButtonAppBar({NotMobile} : NotMobile) {
  
  const NotMobileView = (
  <Grid
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
  >
    <Button sx={{color : '#ffffff', padding : 0}} startIcon={<Drawer />}  ></Button>
    <Box
          component="img"
          sx={{
            height: 12,
            width: 92,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="카파 파트너스"
          src={require('../img/capa-p.png')}
        />
  </Grid>
  )
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static">
        <Toolbar>
          {NotMobile ? 
          <Box
          component="img"
          sx={{
            height: 20,
            width: 152,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="카파 파트너스"
          src={require('../img/capa-p.png')}
          /> : NotMobileView}  
        
          {NotMobile ?  
          <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          >
           <BusinessIcon />
           <Box component='div' sx={{display : 'inline', ml : '8px', fontSize : 14, fontFamily : 'Noto Sans KR Medium'}}>A 가공업체</Box>
           <Box component='div' sx={{display : 'inline', ml : '32px' , mt : '2px', bgcolor:'#ffffff', width: '1px', height : '16px'}}></Box>
           <Button variant="text" sx={{color : '#ffffff', ml : '32px', padding:0, fontFamily : 'Noto Sans KR Medium'}}>로그아웃</Button>
          </Grid>
          : ''}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
