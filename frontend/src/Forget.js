import { Password } from '@mui/icons-material'
import { useState } from 'react';
import React from 'react'
export const Forget = () => {
const [password, setPassword] = useState('');
const handlePassword = (e) => {
    setPassword(e.target.value);
    };
  return (
      <div>

          <label className="label">New Password</label>
          <input className="input" placeholder='New password'/>
          <label className='label'>Confirm Password</label>
          <input className='input' placeholder='Confirm password'></input>
      </div>
      )
}
