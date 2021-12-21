import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'

import RandomQuote from './RandomQuote'
import Pokemon from './Pokemon'
import './Header.css'
import './Main.css'

const Header = () => {
  return (
    <>
      <RandomQuote />
      <div className='container'>
        <div className='col even-justify generator-name'>
          <Link
            to='/pokemon'
            style={{ textDecoration: 'none' }}
            className='link'
          >
            Random Pokemon
          </Link>
        </div>
        <div className='col even-justify generator-name'>
          <Link
            to='/starwars'
            style={{ textDecoration: 'none' }}
            className='link'
          >
            Random Star Wars Character
          </Link>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Header
