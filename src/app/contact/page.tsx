import React from 'react'
import { TextField } from '@mui/material'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <div className='w-fit mx-auto my-[10vh]'>
   
        <p className='text-center w-full mb-[3vh] text-4xl font-bold'>CONTACT US</p>

    <div className="flex flex-col gap-4 ">

            <div className="flex gap-2">
            <TextField id="outlined-basic" label="First Name" className='userinputname ' variant="outlined" required/>
            <TextField id="outlined-basic" label="Last Name" className='userinputname' variant="outlined" required/>

            </div>
            <TextField id="outlined-basic" label="Subject" className='w-full ' variant="outlined" required/>
            <TextField id="outlined-basic" label="Email" className='w-full ' variant="outlined" required/>
            <Textarea placeholder="Write Your Message Here ..." className='h-[250px] outline-none ' required/>
            
            <Button className="w-[350px] h-[5vh] rounded-none bg-gray-700 hover:bg-black mx-auto sm:ml-0">SEND MESSAGE</Button>
            


    </div>

</div>
)
  
}

export default page