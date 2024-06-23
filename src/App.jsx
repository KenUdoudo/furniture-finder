import { useState } from 'react'
import './App.css'
import Top from './components/section1'
import Middle from './components/section2'
import Bottom from './components/section3'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import L1 from './pages/L1'
import P1 from './pages/P1'
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
      
          <Top />
    
          <Middle />
            
          <Bottom />  
        </div>
        } />
        <Route path='/L1' element={<L1 />} />
        <Route path='/P1' element={<P1 />} />
      </Routes>
    
    </Router>
  )
}

export default App
