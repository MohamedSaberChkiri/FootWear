'use client'

import React, { use, useState } from 'react';
import axios from 'axios'; 
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
const RegistrationForm: React.FC = () => {
  

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://foot-wear-server.vercel.app/user/register', { username, email, password });
      console.log(response.data); 
      
      
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto border p-12 flex flex-col items-left my-10 justify-center gap-6 max-w-[400px]'>
      <div className='flex items-center justify-center w-full'>REGISTER</div>
      <div>
        
        <Input className='w-[300px]' type="text" placeholder='Username' id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
       
        <Input className='w-[300px]' type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        
        <Input className='w-[300px]' type="password" placeholder='Password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        
        <Input
        className='w-[300px]'
          type="password"
          placeholder='Confirm Password'
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      <Button type="submit">Register</Button>
      <Link href='/login'>
        <Button className='bg-transparent w-full hover:bg-transparent text-gray-500 underline'>Already have an Account ?</Button>
      </Link>
    </form>
  );
};

export default RegistrationForm;
