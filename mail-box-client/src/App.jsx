import SignUpForm from './components/forms/SignUpForm'
import LoginForm from './components/forms/LogInForm'
import Inbox from './components/Inbox/Inbox'
import MailForm from './components/forms/MailForm'
import SingleMail from './components/Inbox/SingleMail'
import './App.css'
import { Switch, Route, Redirect } from "react-router-dom"

function App() {

  return (
    <Switch>
      <Route path='/signup'>
        <SignUpForm />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/inbox' exact>
        <Inbox />
      </Route>
      <Route path='/inbox/:mailId'>
        <SingleMail />
      </Route>
      <Route path='/compose'>
        <MailForm />
      </Route>
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  )
}

export default App
