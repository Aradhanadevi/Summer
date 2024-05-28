import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
        </Routes>
      </Router> 
    </div>
  )
}

export default App