import { useState } from 'react'
import Nav from './components/Nav'
import Home from './screens/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  )
}

export default App
