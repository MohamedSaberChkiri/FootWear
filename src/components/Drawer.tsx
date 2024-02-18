"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { Button } from './ui/button';

type Anchor = 'right';

interface DrawerProps {
  title: string;
  opener: React.ReactNode;
  contente: React.ReactNode;
  closeOnClick?: boolean;
}

export default function TemporaryDrawer(props: DrawerProps) {
  const [state, setState] = React.useState({
    right: false,
  });

  const handleOpen = () => {
    setState({ ...state, right: true });
  };

  const handleClose = () => {
    setState({ ...state, right: false });
  };

  const handleClickInsideDrawer = () => {
    if (props.closeOnClick) {
      handleClose();
    }
  };

  const list = (anchor: Anchor) => (
    <Box
      className="flex flex-col items-center justify-around h-fit w-[350px] p-[10px] "
      role="presentation"
      onClick={handleClickInsideDrawer}
    >
      <List className="text-black font-bold">{props.title}</List>
      <Divider className="mt-[30px]" />
      <List className="flex flex-col items-center h-full mt-[20px]">
        {props.contente}
       
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={handleOpen}>{props.opener}</div>

          <Drawer anchor={anchor} open={state[anchor]} onClose={handleClose}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
