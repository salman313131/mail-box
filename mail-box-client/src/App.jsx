import { useState } from 'react'
import SignUpForm from './components/forms/SignUpForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm />
    </>
  )
}

export default App
