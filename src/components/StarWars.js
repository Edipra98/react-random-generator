import { render } from '@testing-library/react'
import React from 'react'

import './generators.css'

class FilmItemRow extends React.Component {
  render() {
    return (
      <li style={{ listStyleType: 'none' }} className='affilSmall'>
        {this.props.url}
      </li>
    )
  }
}

class SW extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedChar: false,
      name: null,
      height: null,
      homeworld: null,
      affiliations: [],
    }
  }
  getNewChar() {
    //console.log("Get new character");
    const rand = Math.ceil(Math.random() * 87)
    const url = `https://akabab.github.io/starwars-api/api/id/${rand}.json`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.image)
        this.setState({
          loadedChar: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
          image: data.image,
        })
      })
  }
  render() {
    const affil = this.state.affiliations.map((url, i) => {
      return <FilmItemRow key={i} url={url} />
    })

    return (
      <div className='generator'>
        <button
          type='button'
          onClick={() => this.getNewChar()}
          class='center starwars'
        >
          Randomize Character
        </button>
        {this.state.loadedChar && (
          <div>
            <img src={this.state.image} className='pulledImage' />
            <h1 className='name'>{this.state.name}</h1>
            <div className='height'>Height: {this.state.height}m</div>
            <div className='world'>Homeworld: {this.state.homeworld}</div>
            <div className='affil'>
              <u>Affiliations</u>
            </div>
            {affil}
          </div>
        )}
      </div>
    )
  }
}

const StarWars = () => {
  return (
    <div className='container'>
      <SW />
    </div>
  )
}

export default StarWars
