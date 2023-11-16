import { useRef } from "react"
import { useState } from "react"
import classes from "./SignUpForm.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
const SignUpForm=()=>{
    const [message,setMessage] = useState('')
    const email=useRef()
    const password=useRef()
    const confirmPassword=useRef()
    const submitHandler= async (e)=>{
        e.preventDefault()
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const confirmPasswordValue = confirmPassword.current.value;
        if (emailValue =='' || passwordValue =='' || confirmPasswordValue == ''){
            setMessage('Please fill all the fields')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        if (passwordValue !== confirmPasswordValue){
            setMessage('Password and confimPassword not matched')
            setTimeout(()=>setMessage(''),2000)
            return
        }
        const data={
            email:emailValue,
            password:passwordValue
        }
        try {
            const res = await axios.post('http://localhost:3000/api/v1/signup',data)
            
        } catch (error) {
            setMessage('Something went wrong')
            setTimeout(()=>setMessage(''),2000)
            console.log(error)
        }
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <div className={classes.formdiv}>
                <label>Email</label>
                <input type='text' ref={email}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Password</label>
                <input type='password' ref={password}></input>
            </div>
            <div className={classes.formdiv}>
                <label>Confirm Password</label>
                <input type='password' ref={confirmPassword}></input>
            </div>
            <button className={classes.button}>SignUp</button>
            <Link to='/login'><p>Already signUp, click to Login</p></Link>
            {message && <p style={{color:'red'}}>{message}</p>}
        </form>
    )
}
export default SignUpForm