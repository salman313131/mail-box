import classes from './Inbox.module.css'
import { useEffect } from 'react'
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { mailActions } from '../../store/mail'
import InboxItem from './InboxItem'
import { useHistory } from 'react-router-dom'
const Inbox = ()=>{
    const token = useSelector(state=>state.auth.token)
    const items = useSelector(state=>state.mail.items)
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
    const composeHandler=()=>{
        history.replace('/compose')
    }
    return (
        <>
        <div className={classes.container}>
            <div className={classes.boxButton}>
                <button onClick={composeHandler}>Compose</button>
                <button>Inbox<span style={{margin:'10px'}}>0</span></button>
                <button>Send</button>
            </div>
            <div className={classes.boxInbox}>
                <h1>Inbox</h1>
                {inboxItem}
            </div>
        </div>
        </>

    )
}

export default Inbox