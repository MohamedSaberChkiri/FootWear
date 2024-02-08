"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import  Badge  from '@mui/material/Badge';

type Anchor = 'right'

export default function TemporaryDrawer( props : {
  title : string,
  opener : React.ReactNode,
  contente : string,
  badgeContent: number
}) {
  const [state, setState] = React.useState({
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
      sx={{ width: 350 , padding : 5}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='text-black font-bold'>
            {props.title}
      </List>
      <Divider className='mt-[30px]'/>
      <List className='flex flex-col items-center font-bold text-2xl mt-[20px]'>
            {props.contente}
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <Badge badgeContent={props.badgeContent} color='success'>
                <div onClick={toggleDrawer(anchor, true)}>{props.opener}</div>
            </Badge>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}