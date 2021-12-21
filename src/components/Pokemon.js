import React from 'react'

import './generators.css'
import './Main.css'

class RandPokemon extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedChar: false,
      name: null,
      type: [],
      height: null,
      weight: null,
    }
  }

  randomPokemon() {
    const randNum = Math.ceil(Math.random() * 898)
    const url = `https://pokeapi.co/api/v2/pokemon/${randNum}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loadedChar: true,
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          height: data.height / 10,
          weight: data.weight / 10,
          image: data.sprites.front_default,
        })
      })
  }
  render() {
    return (
      <div className='generator'>
        <button onClick={() => this.randomPokemon()} className='center pokemon'>
          Generate Pokemon
        </button>
        {this.state.loadedChar && (
          <div>
            <img src={this.state.image} alt='' className='image' />
            <h2 className='pokemonName'>{this.state.name}</h2>
            <h3 className='height'>Height: {this.state.height} m</h3>
            <h3 className='weight'>Weight: {this.state.weight} kg</h3>
          </div>
        )}
      </div>
    )
  }
}

const Pokemon = () => {
  return (
    <div className='container'>
      <RandPokemon />
    </div>
  )
}

export default Pokemon
