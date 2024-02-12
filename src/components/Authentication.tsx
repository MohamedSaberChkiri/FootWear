"use client"

import { Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

function Authentication(props:{
    login? : boolean
    register? : boolean
    reset_password? : boolean
}) {


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };


  return (
    <div className='w-full '>
        {props.login ? 

        <div className='flex flex-col my-[10vh] mx-auto w-fit border items-center gap-6'>
        <p className='font-bold text-2xl mt-[5vh]'>LOGIN</p> 

        <div className='flex flex-col gap-6 px-[5vh] sm:px-[10vh] pb-[10vh]'>

        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <FormControl className='w-full' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </div>
        <div>
        <Link href='/forgot_password'> <p className='underline text-gray-600 text-[13px]'>RESET PASSWORD</p></Link>
        <Link href='/register'> <p className='underline text-gray-600 text-[13px]'>CREATE AN ACCOUNT</p></Link>
       
        </div>
        


        </div>
        </div>

        : props.register ? 
        
        <div className='flex flex-col my-[10vh] mx-auto w-fit border items-center gap-6'>
        <p className='font-bold text-2xl mt-[5vh]'>REGISTER</p> 

        <div className='flex flex-col gap-6 px-[3vh] sm:px-[10vh] pb-[10vh]'>

            <div className='w-full flex sm:gap-2 '>
            <TextField id="outlined-basic" className='w-[150px] sm:w-full'  label="First Name" variant="outlined" required />
            <TextField id="outlined-basic" className='w-[150px] sm:w-full' label="Last Name" variant="outlined" required />
            </div>
        <TextField id="outlined-basic" label="Email" variant="outlined" required />
        <FormControl className='w-full' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl className='w-full' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" required>Repeat Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
       <Button className='w-full rounded-none'>Create Account</Button>
       <Link href='/login'><p className='underline text-[13px]'>I HAVE AN ACCOUNT</p></Link>
       
       


        </div>
        </div>
        
        
        
        
        :         
        
        <div className='flex flex-col my-[10vh] mx-auto w-fit border items-center gap-6'>
        <p className='font-bold text-xl mt-[5vh]'>RESET YOUR PASSWORD</p> 

        <div className='flex flex-col items-start gap-6 px-[5vh] sm:px-[10vh] pb-[5vh]'>

        <TextField id="outlined-basic" className='w-[300px]' label="Enter Your Email" variant="outlined" />
        <Button className='rounded-none'>RESET</Button>
       
        


        </div>
        </div>}

       
    
        



    </div>
  )
}

export default Authentication