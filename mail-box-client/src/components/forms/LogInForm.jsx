import { useRef, useState } from "react"
import classes from './LoginForm.module.css'
import axios from "axios"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/auth"
import { Link } from "react-router-dom"
const LoginForm=()=>{
    const [message,setMessage] = useState('')
    const dispatch = useDispatch()
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
            localStorage.setItem('token',res.data.token)
            dispatch(authActions.login(res.data.token))
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
            <button className={classes.button}>LogIn</button>
            <Link to='/signup'><p>New User, click to Sign Up</p></Link>
            {message && <p style={{color:'red'}}>{message}</p>}
        </form>
    )
}
export default LoginForm