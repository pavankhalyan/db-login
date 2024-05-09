import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './assets/Signup'
import { BrowserRouter,Router, Routes, Route} from 'react-router-dom'
import Login from './assets/Login'




function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}> </Route>
      <Route path='/login' element= {<Login />} > </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
