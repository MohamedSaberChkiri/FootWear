"use client"

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

// Define InputAdornments as a separate component
function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
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
  );
}


const LoginForm = () => {
  return <div className='flex flex-col items-center justify-center w-full mt-[30px]'>


    <TextField id="outlined-basic" label="Email" variant="outlined" className='w-[300px]' />
    <InputAdornments/>

    <div className='flex items-center justify-between w-[300px] mt-[25px]'>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
    <Button variant="contained" className='bg-black text-white hover:bg-black'>Login</Button>

    </div>
    <div className='flex flex-col items-start w-[300px] mt-[30px]'>
        <p className='text-gray hover:text-black cursor-pointer'>CREATE ACCOUNT</p>
        <p className='text-gray hover:text-black cursor-pointer'>FORGOT PASSWORD</p>
        
    </div>
    
  </div>;
};

export default LoginForm;
