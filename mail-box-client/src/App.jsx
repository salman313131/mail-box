import { useState } from 'react'
import SignUpForm from './components/forms/SignUpForm'
import LoginForm from './components/forms/LogInForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm />
      <LoginForm />
    </>
  )
}

export default App
