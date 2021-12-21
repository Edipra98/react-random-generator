import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Pokemon from './components/Pokemon'
import StarWars from './components/StarWars'
import HomeScreen from './components/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/starwars' element={<StarWars />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
