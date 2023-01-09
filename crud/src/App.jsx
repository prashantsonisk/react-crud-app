import React from 'react'
import Create from './components/pages/Create'
import PageError from './components/pages/PageError'
import { Routes, Route } from 'react-router-dom'
import Read from './components/pages/Read'
import Edit from './components/pages/Edit'

function App() {
  
  return (
      <div>
        <Routes>
          <Route exact path='/' element={<Read/>}></Route>
          <Route exact path='/create' element={<Create/>}></Route>
          <Route exact path='/edit' element={<Edit/>}></Route>
          <Route path='*' element={<PageError/>}></Route>
        </Routes>
      </div>
    )
}

export default App

