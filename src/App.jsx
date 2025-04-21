import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manager from './components/Manager'
import Docs from './pages/docs'

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Manager />} />
        <Route path='/docs' element={<Docs />} />
      </Routes>
    </Router>
  )
}

export default App;
