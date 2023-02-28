import React from 'react';
import './MyInput.css'
import TextField from '@mui/material/TextField';


const MyInput = ({...props}) => {
 
    return (
            <TextField {...props} id="outlined-basic" variant="outlined" />    
    );
};

export default MyInput;