import React, { Component } from 'react'

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  createCard = () => {
    let seats = this.createListItems(this.props.seats)
    let titles = this.createListItems(this.props.titles)
    let weapons = this.createListItems(this.props.ancestralWeapons)
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>Founded: {this.props.founded}</p>
        <p>{this.props.coatOfArms}</p>
        <p>{this.props.words}</p>
        <ul>
          {seats}
        </ul>
        <ul>
          {titles}
        </ul>
        <ul>
          {weapons}
        </ul>
      </div>
    )
  }

  createListItems = (Arr) => {
    Arr.map(item => {
      return(
        <li>{item}</li>
      )
    })
  }
 

  render() {
    let card = this.createCard(this.props)
    return(
      <div>
        {card}
      </div>
    )
  }
}

export default Card