import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/home';
import { About } from './Components/About/about';
import { Registration } from './Components/Registration/registration';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
