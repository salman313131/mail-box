import classes from './Inbox.module.css'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { mailActions } from '../../store/mail'
import InboxItem from './InboxItem'
import { useHistory } from 'react-router-dom'
import SendItem from './SendItem'
const Inbox = ()=>{
    const [isInbox,setIsInbox] = useState(true)
    const token = useSelector(state=>state.auth.token)
    const items = useSelector(state=>state.mail.items)
    const sentItems = useSelector(state=>state.mail.sentItems)
    const notread = useSelector(state=>state.mail.notRead)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(()=>{
        async function getData(){
            const headers = {
            "Content-Type":"application/json",
            "Authorization": token
        }
            try{
                const res = await axios.get('http://localhost:3000/api/v1/getmail',{headers})
                const res1 = await axios.get('http://localhost:3000/api/v1/sentmail',{headers})
                dispatch(mailActions.addInitial(res.data.data))
                dispatch(mailActions.addSentItems(res1.data.data))
            }catch(err){
                console.log(err)
            }
        }
        getData()
    },[])
    const inboxItem = <ul>
        {items.map((item)=>(<InboxItem key={item._id} id={item._id} subject={item.subject} body={item.body} isRead={item.isRead}/>))}
    </ul> 
    const sentItem = <ul>
        {sentItems.map((item)=>(<SendItem key={item._id} id={item._id} subject={item.subject} body={item.body}/>))}
    </ul>
    const composeHandler=()=>{
        history.replace('/compose')
    }
    const inboxHandler=()=>{
        setIsInbox(true)
    }
    const sendHandler=()=>{
        setIsInbox(false)
    }
    return (
        <>
        <div className={classes.container}>
            <div className={classes.boxButton}>
                <button onClick={composeHandler} className={classes.inactiveButton}>Compose</button>
                <button onClick={inboxHandler} className={isInbox? classes.activeButton : classes.inactiveButton}>Inbox<span style={{margin:'10px'}}>{notread}</span></button>
                <button onClick={sendHandler} className={!isInbox? classes.activeButton: classes.inactiveButton}>Send</button>
            </div>
            <div className={classes.boxInbox}>
                {isInbox && <h1>Inbox</h1>}
                {!isInbox && <h1>Send Mails</h1>}
                {isInbox && inboxItem}
                {!isInbox && sentItem}
            </div>
        </div>
        </>

    )
}

export default Inbox