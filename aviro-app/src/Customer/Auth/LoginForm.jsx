import React from "react";
import {Button,Grid,TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    

    const handleSubmit=(event)=>{
        event.preventDefault()

        const data=new FormData(event.currentTarget);

        const userData={
            email:data.get(email),
            password:data.get("password")
        }

        dispatch(login(userData))
        console.log("userData",userData)
    }


    return(
        <div>
            <form onsubmit={handleSubmit}>
                <Grid container spacing={3}>
                    
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                        
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        
                        required
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                        className='bg-[#9155FD] w-full'
                        type='submit'
                        variant='contained'
                        size='large'
                        sx={{padding:".8rem 0",bgcolor:"#9155FD"}}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you hdon't have an account ?</p>
                    <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm