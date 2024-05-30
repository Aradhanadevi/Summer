import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import PendingTask from "./pages/PendingTask";

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} >
            <Route index element={<AllTask/>}/>
            <Route path="/importanttask" element={<ImportantTask/>}/>
            <Route path="/completedtask" element={<CompletedTask/>}/>
            <Route path="/pendingtask" element={<PendingTask/>}/>
          </Route>
        </Routes>
      </Router> 
    </div>
  )
}

export default App