import { render } from '@testing-library/react'
import React from 'react'

import './generators.css'

class RandSW extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedChar: false,
      name: null,
      weight: 'N/A',
      height: null,
      birthYear: null,
    }
  }
  randomCharacter() {
    const randNum = Math.floor(Math.random() * 83)
    const url = `https://swapi.dev/api/people/${randNum}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loadedChar: true,
          name: data.name,
          height: data.height / 100,
          weight: data.mass,
          birthYear: data.birth_year,
        })
      })
  }
  render() {
    return (
      <div className='generator'>
        <button
          onClick={() => this.randomCharacter()}
          className='center starwars'
        >
          Generate Star Wars Character
        </button>
        {this.state.loadedChar && (
          <div>
            <h2 className='name'>{this.state.name}</h2>
            <h3 className='height'>Height: {this.state.height} m</h3>
            <h3 className='weight'>Weight: {this.state.weight} kg</h3>
            <h3 className='planet'>Birth Year: {this.state.birthYear}</h3>
          </div>
        )}
      </div>
    )
  }
}

const StarWars = () => {
  return (
    <div className='container'>
      <RandSW />
    </div>
  )
}

export default StarWars
