"use client"

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button } from './ui/button';

export default function CustomSeparator() {
  const pathname = usePathname();

  
  const pathParts = pathname.split('/');
  if (pathParts[0] !== '') {
    console.error('Invalid pathname format. Breadcrumbs will not be generated.');
    return null; 
  }

  const breadcrumbs = pathParts.map((part, index) => (
    <Typography key={index} className="text-gray-300 flex items-center justify-center w-fit h-fit flex-wrap">
       
      <Link underline="hover" href={`/${part}`} className="text-white">
        <Button className='text-white hover:underline p-0 bg-transparent hover:bg-transparent'>{part.toUpperCase()}</Button>
        
        </Link>
      <NavigateNextIcon fontSize="small"/>
    </Typography>
  ));

  breadcrumbs.unshift(
      
      <Link underline="hover" href="/" key="home" className="text-gray-300">
        <Button className='text-white hover:underline p-0 bg-transparent hover:bg-transparent'>HOME</Button>
        </Link>
      

  );

  return (
    <Breadcrumbs
      separator=""
      aria-label="breadcrumb"
      className="text-white">
       {breadcrumbs}
   
    </Breadcrumbs>
  );
}
