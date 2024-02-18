"use client"

import { Checkbox, CircularProgress, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React, { useState } from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}

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

  {/* ------------------authentication start ------------------------------ */}
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };



  const handleRegister = () => {
    const user: User = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    registerUser(user);
 
  };

  
  function registerUser(user: User): void {
   
    localStorage.setItem("registeredUser", JSON.stringify(user));
    window.location.href = '/login'
  
    
  
  }
  
  function loginUser(email: string, password: string): boolean {
    const storedUserString = localStorage.getItem("registeredUser");
  
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString) as User;
      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", 'true');
        localStorage.setItem("registeredUser", JSON.stringify(storedUser));
        window.location.href = '/';
        return true;

      }
    }
    alert('USER DOESNT EXIST')
    return false;
  }
  
  {/* ------------------authentication ends ------------------------------ */}


  return (
    <div className='w-full flex items-center justify-center h-full'>
    {
    
    props.reset_password ? <div className='border p-12 flex flex-col gap-4 max-w-[400px] mt-[10vh] mx-[10px]'>
      <p className='font-bold'>Reset Your Password</p>
      <TextField label="Email" required></TextField>
      <Button>Reset</Button>
    </div> :
    
    
    props.register ? (
      <div className='flex flex-col my-[10vh] mx-auto w-fit border items-center gap-6'>
        <p className='font-bold text-2xl mt-[5vh]'>REGISTER</p>

        <div className='flex flex-col gap-6 px-[3vh] sm:px-[10vh] pb-[10vh]'>
          <div className='w-full flex sm:gap-2 '>
            <TextField id="outlined-basic" className='w-[150px] sm:w-full' label="First Name" variant="outlined" value={firstName} onChange={handleFirstNameChange} required />
            <TextField id="outlined-basic" className='w-[150px] sm:w-full' label="Last Name" variant="outlined" value={lastName} onChange={handleLastNameChange} required />
          </div>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmailChange} required />
          <FormControl className='w-full' variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
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
          <Button onClick={handleRegister} className='w-full rounded-none'>Create Account</Button>
          <Link href='/login'><p className='underline text-[13px]'>I HAVE AN ACCOUNT</p></Link>
        </div>
      </div>
    ) 
    : (
      <div className='flex flex-col my-[10vh] mx-auto w-fit border items-center gap-6'>
        <p className='font-bold text-xl mt-[5vh]'>LOGIN</p>

        <div className='flex flex-col gap-6 px-[5vh] sm:px-[10vh] pb-[10vh]'>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmailChange} />
          <FormControl className='w-full' variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
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
            <Button  onClick={() =>{
              loginUser(email, password)
                        }}>LOGIN</Button>
          </div>
          <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
          </div>
          <div>
            <Link href='/forgot_password'> <p className='underline text-gray-600 text-[13px]'>RESET PASSWORD</p></Link>
            <Link href='/register'> <p className='underline text-gray-600 text-[13px]'>CREATE AN ACCOUNT</p></Link>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Authentication