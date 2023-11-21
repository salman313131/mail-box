import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import classes from "./MailForm.module.css"
import { useRef,useState } from 'react';
import axios from 'axios'
import { useSelector } from "react-redux"
const MailForm=()=>{
    const token = useSelector(state=>state.auth.token)
    const email = useRef()
    const subject = useRef()
    const [emailBody,setEmailBody] = useState('')
    const mailFormHandler= async ()=>{
        const emailValue = email.current.value
        const subjectValue = subject.current.value
        const data={
            email:emailValue,
            subject:subjectValue,
            body:emailBody.replace(/<[^>]*>/g,'')
        }
        const headers = {
            "Content-Type":"application/json",
            "Authorization": token
        }
        try {
            console.log(data)
            const res = await axios.post('http://localhost:3000/api/v1/mail',data,{headers})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className={classes.container}>
            <div className={classes.inner}>
                <input type='email' placeholder='Please enter email' ref={email}></input>
                <input type='text' placeholder="Subject" ref={subject}></input>
            </div>
            <div className={classes.froala}>
                <FroalaEditorComponent 
                tag='textarea'
                model={emailBody}
                onModelChange={e=>setEmailBody(e)} 
                config={{
                    placeholderText:'Email Body ...'
                }}
                />
            </div>
            <button className={classes.button} onClick={mailFormHandler}>Send</button>
        </div>
    )
}
export default MailForm