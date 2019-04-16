import React, { Component } from 'react'
import Card from '../Card/Card'
import './cardArea.css'

export class CardArea extends Component {

  makeCards = (data) => {
    let cards = data.map(item => {
      return(
        <Card {...item}/>
      )
    })
    return cards
  }

  render() {
    let cards = this.makeCards(this.props.data)
    return(
      <div className='card-container'>
        {cards}
      </div>
    )
  }
}

export default CardArea