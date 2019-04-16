import React, { Component } from 'react'
import './card.css'

export class Card extends Component {

  createCard = () => {
    const seats = this.createListItems(this.props.seats)
    const titles = this.createListItems(this.props.titles)
    const weapons = this.createListItems(this.props.ancestralWeapons)
    return(
      <div className='card'>
        <h2>{this.props.name}</h2>
        <p>Founded: {this.props.founded}</p>
        <p>Coat of Arms: {this.props.coatOfArms}</p>
        <p>House Words: {this.props.words}</p>
        <h4>Seats</h4>
        {seats}
        <h4>Titles</h4>
        {titles}
        <h4>Ancestral Weapons</h4>
        {weapons}
      </div>
    )
  }

  createListItems = (Arr) => {
    return Arr.map(item => <p>{item}</p>)
  }
 
  render() {
    let card = this.createCard(this.props)
    return(
      <div className='card-area'>
        {card}
      </div>
    )
  }
}

export default Card