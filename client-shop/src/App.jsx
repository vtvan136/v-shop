import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Page404 from './pages/Page404'
const App = () => {
  return (
    <>  
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>} />
      </Routes>
    </>
  )
}   

export default App