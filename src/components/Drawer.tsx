"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import  Link  from 'next/link';
import { Button } from './ui/button';


type Anchor = 'right';

export default function TemporaryDrawer(props: {
  title: string;
  opener: React.ReactNode;
  contente: React.ReactNode;
  badgeContent: number;
 
  
}) {
  const [state, setState] = React.useState({
    right: false ,
  });

  const handleOpen = () => {
    setState({ ...state, right: true });
  };

  const handleClose = () => {
    setState({ ...state, right: false});
  };

  const handleClickInsideDrawer = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent closing the drawer when clicking inside
  };

  const list = (anchor: Anchor) => (
    <Box
      className="flex flex-col items-center justify-around h-[650px] w-[350px] p-[10px] "
      role="presentation"
      onClick={handleClickInsideDrawer}
    >
      <List className="text-black font-bold">{props.title}</List>
      <Divider className="mt-[30px]" />
      <List className="flex flex-col items-center h-full mt-[20px]">
        {props.contente}
        {
          props.title === "YOUR CART" ? <Link href='/cart' className='absolute bottom-[-20vh]'>
          <Button className='rounded-none w-[20vh] bg-green-600 hover:bg-green-700 font-bold '>Go To Cart</Button>
        </Link> : ''
        }
        
        </List>
      
  
        
     
      
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Badge badgeContent={props.badgeContent} color="success">
            <div onClick={handleOpen}>{props.opener}</div>
          </Badge>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={handleClose}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
