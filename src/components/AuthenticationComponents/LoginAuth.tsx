"use client"

import React, { useState } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5500/user/login', { email, password });
      console.log(response.data); 
     
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto flex flex-col items-left justify-center border w-fit p-12 gap-6 mt-[5vh]'>
        <div className='w-full flex items-center justify-center'>LOGIN</div>
      <div>
        
        <Input type="email" id="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
      
        <Input type="password" id="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div>{error}</div>}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;

