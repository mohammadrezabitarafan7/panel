import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/material';
import axios from '../../axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function FullWidthTextField(props) {

    const { userName, password, usernameHandler, passwoedHandler, handleClick, errorMassege } = props;

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >

            <h5>{errorMassege}</h5>
            <TextField margin='normal' fullWidth label="UserName" id="fullWidth" onChange={usernameHandler} value={userName} />

            <TextField type='password' fullWidth label="Password" id="fullWidth" onChange={passwoedHandler} value={password} />
                <button style={{ padding: "12px", margin: "12px", borderRadius: "20px", width: "50%", cursor: "pointer" }} onClick={handleClick}>LogIn</button>

        
            <h4>If You Dont Have Account Please Sign Up</h4>
        </Box>
    );
}