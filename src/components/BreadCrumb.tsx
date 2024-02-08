"use client"

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';



export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" className='text-gray-300' href="/" >
      HOME
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      className='text-gray-300'
      
     
    >
      COLLECTION
    </Link>,
    <Typography key="3" className='text-gray-300'>
      ITEM
    </Typography>,
  ];

  return (
   
   
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className='text-white'
      >
        {breadcrumbs}
      </Breadcrumbs>
   
  );
}