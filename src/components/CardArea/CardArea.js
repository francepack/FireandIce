import React, { Component } from 'react'
import Card from '../Card/Card'

export class CardArea extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

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
      <div>
        {cards}
      </div>
    )
  }
}

export default CardArea