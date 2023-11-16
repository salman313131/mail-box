import { useRef, useState } from "react"
import classes from './LoginForm.module.css'
import axios from "axios"
const LoginForm=()=>{
    const [message,setMessage] = useState('')
    const email = useRef()
    const password = useRef()
    const submitHandler= async (e)=>{
        e.preventDefault()
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        if(emailValue == '' || passwordValue == ''){
            setMessage('Please fill all the details')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        const data={
            email: emailValue,
            password: passwordValue
        }
        try {
            const res = await axios.post('http://localhost:3000/api/v1/login',data)
            console.log('success')
            console.log(res)
        } catch (error) {
            setMessage(error.message)
            setTimeout(()=>setMessage(''),2000)
            console.log(error)
        }
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <h1>Log In</h1>
            <div className={classes.formdiv}>
                <label>Email</label>
                <input type='text' ref={email}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Password</label>
                <input type='password' ref={password}></input>
            </div>
            <p>Forgot Password</p>
            <button className={classes.button}>LogIn</button>
            <p>New User, click to Sign Up</p>
            {message && <p style={{color:'red'}}>{message}</p>}
        </form>
    )
}
export default LoginForm