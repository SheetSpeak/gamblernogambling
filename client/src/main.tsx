import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import axios from 'axios'
import './index.css'
import Menu from './components/Menu.tsx'
import Stocks from './components/Stocks.tsx'

axios.defaults.baseURL = `http://localhost:5000`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<><Menu/></>}/>
        <Route path='/stocks' element={<><Stocks/></>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
