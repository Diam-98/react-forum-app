import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Question from './pages/own/Question.jsx'
import Responses from './pages/own/Responses.jsx'
import Save from './pages/own/Save.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index='/home' element={<Home />} />
          <Route path='/questions' element={<Question />} />
          <Route path='/responses' element={<Responses />} />
          <Route path='/save' element={<Save />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)
