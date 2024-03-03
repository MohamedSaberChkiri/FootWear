import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { FormEvent } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';

function page() {

  const router = useRouter();

  const { resetToken } = router.query;

  const [message, setMessage] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (newPassword !== newPasswordRepeat) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://foot-wear-server.vercel.app/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resetToken, newPassword })
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

      <Input className='w-[300px]' type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required></Input>
      <Input className='w-[300px]' type="password" value={newPasswordRepeat} onChange={(e) => {setNewPasswordRepeat(e.target.value)} } placeholder="Repeat New Password" required></Input>
      <Button type="submit">Reset Password</Button>
      <div> {message} </div>
      </form>
  )
}

export default page