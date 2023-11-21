import { useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import { mailActions } from "../../store/mail";
import { useDispatch,useSelector } from "react-redux";
import classes from "./SingleMail.module.css"
const SingleMail=(props)=>{
    const { mailId } = useParams();
    const current = useSelector(state=>state.mail.currentItem)
    const dispatch = useDispatch()
    useEffect(()=>{
        async function currentItem(){
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/getmail/${mailId}`)
                console.log(res)
                dispatch(mailActions.addCurrent(res.data.current))
                if(!res.data.current.isRead){
                    dispatch(mailActions.updateItems(mailId))
                }
            } catch (error) {
                console.log(error)
            }
        }
        currentItem()
    },[])
    return(
        <div className={classes.main}>
            {!current && <p>Loading...</p>}
            {current && <h5>From : {current.sender_user_id?.email}</h5>}
            {current && <h1>Subject : {current.subject}</h1>}
            {current && <p>body : {current.body}</p>}
        </div>
    )
}
export default SingleMail