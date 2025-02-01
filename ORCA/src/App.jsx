import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Formic } from './components/Formic'
import { Office } from './components/Office'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/form' element={<Formic/>}/>
        <Route path='/office' element={<Office/>}/>
      </Routes>
    </Router>
  )
}

export default App
