const InboxItem=(props)=>{
    return(
        <li>
            <span>{props.subject}</span>
            <span>{props.body}</span>
        </li>
    )
}
export default InboxItem