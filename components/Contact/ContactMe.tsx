import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
const ContactMe = () => {
  return (
    <div className='contact_me'>
      <TextField id="outlined-basic" label="Your Name" variant='outlined'/>
      <TextareaAutosize/>
    </div>
  )
}

export default ContactMe
