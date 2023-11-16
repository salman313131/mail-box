import classes from './Inbox.module.css'
import MailForm from '../forms/MailForm'
const Inbox = ()=>{
    return (
        <>
        <div className={classes.container}>
            <div className={classes.boxButton}>
                <button>Inbox</button>
                <button>Send</button>
            </div>
            <div className={classes.boxInbox}>
                <h1>Inbox</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
        <MailForm />
        </>

    )
}

export default Inbox