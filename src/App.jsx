import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { LanguageProvider } from './components/LanguageContext'

const App = () => {
  return (
    <LanguageProvider>
    <Routes>
      <Route path="/" index element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </LanguageProvider>
  )
}

export default App