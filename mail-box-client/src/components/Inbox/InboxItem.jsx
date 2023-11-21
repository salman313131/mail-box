import classes from "./InboxItem.module.css"
import axios from "axios"
import { mailActions } from "../../store/mail"
import { useDispatch,useSelector } from "react-redux"
import { Link } from 'react-router-dom'
const InboxItem=(props)=>{
    const token = useSelector(state=>state.auth.token)
    const id = `/inbox/${props.id}`;
    const headers = {
        "Content-Type":"application/json",
        "Authorization": token
    }
    const dispatch = useDispatch()
    const deleteHandler=async(e)=>{
        e.preventDefault()
        try {
            await axios.delete(`http://localhost:3000/api/v1/deletemail/${props.id}`,{headers})
            dispatch(mailActions.deleteItems(props.id))
        } catch (error) {
            console.log(error)
        }
    }
    const linkStyle = {
        textDecoration: 'none',
        padding: '5px',
        color : 'black'
    }
    return(
        <li className={props.isRead ? classes.mail1: classes.mail}>
            <Link to={id} style={linkStyle}>
                <div className={classes.list}>
                    {!props.isRead && <div className={classes.blue}> </div>}
                    <span>{props.subject}</span>
                </div>
            </Link>
            <button onClick={deleteHandler}>Delete</button>
        </li>
    )
}
export default InboxItem