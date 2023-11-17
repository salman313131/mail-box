import classes from './Inbox.module.css'
import MailForm from '../forms/MailForm'
import { useEffect } from 'react'
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { mailActions } from '../../store/mail'
import InboxItem from './InboxItem'
const Inbox = ()=>{
    const token = useSelector(state=>state.auth.token)
    const items = useSelector(state=>state.mail.items)
    const dispatch = useDispatch()
    useEffect(()=>{
        async function getData(){
            const headers = {
            "Content-Type":"application/json",
            "Authorization": token
        }
            try{
                const res = await axios.get('http://localhost:3000/api/v1/getmail',{headers})
                dispatch(mailActions.addInitial(res.data.data))
            }catch(err){
                console.log(err)
            }
        }
        getData()
    },[])
    const inboxItem = <ul>
        {items.map((item)=>(<InboxItem key={item._id} subject={item.subject} body={item.body}/>))}
    </ul> 
    return (
        <>
        <div className={classes.container}>
            <div className={classes.boxButton}>
                <button>Inbox</button>
                <button>Send</button>
            </div>
            <div className={classes.boxInbox}>
                <h1>Inbox</h1>
                {inboxItem}
            </div>
        </div>
        <MailForm />
        </>

    )
}

export default Inbox