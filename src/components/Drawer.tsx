import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessIcon from '@mui/icons-material/Business';
import Grid from '@mui/material/Grid';

type Anchor = 'left';

export default function TemporaryDrawer() {
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 280, height : '100%' }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['img'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
            <Box
              component="img"
              sx={{
                height: 12,
                width: 91.52,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="카파 파트너스"
              src={require('../img/capa-p-b.png')}
            />
            </ListItemIcon>
            <ListItemText/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['partner'].map((text, index) => (
          <ListItem button key={text} sx={{fontSize : '14px', fontFamily: 'Noto Sans KR Medium', fontWeight : 500, mt : 3}}>
            <ListItemIcon sx={{minWidth : '32px'}}>
              <BusinessIcon />
            </ListItemIcon>
            파트너정밀가공
            <ListItemText />
          </ListItem>
        ))}
      </List>
      <List >
        {['logout'].map((text, index) => (
          <ListItem button key={text} sx={{fontSize : '14px', fontFamily: 'Noto Sans KR Medium', fontWeight : 500, mt: 1}}>
            로그아웃
            <ListItemText />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          >
          <MenuIcon sx={{color : '#ffffff'}} onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          </Grid>
        </React.Fragment>
      ))}
    </div>
  );
}
