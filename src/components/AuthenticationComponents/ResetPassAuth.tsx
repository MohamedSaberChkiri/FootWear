import React, { FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function ResetPassAuth() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://foot-wear-server.vercel.app/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };


  return (
    
    <form onSubmit={handleSubmit} className='mx-auto border flex flex-col items-left justify-center w-fit gap-6 p-12 mt-12'>
      <p className=' w-full text-xl flex items-center justify-center'>RESET PASSWORD</p>
      <Input className='w-[300px]' value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></Input>
      <Button type="submit">Reset Password</Button>
      <div> {message} </div>
    </form>
  )
}

export default ResetPassAuth