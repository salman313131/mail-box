import SignUpForm from './components/forms/SignUpForm'
import LoginForm from './components/forms/LogInForm'
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
      <Route path='*'>
        <Redirect to='/login'/>
      </Route>
    </Switch>
  )
}

export default App
