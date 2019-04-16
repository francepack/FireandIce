import React from 'react'

export const Loading = () => {

  const wolf = '../assets/wolf.gif'
  return(
    <div>
      <h3>Loading</h3>
      <img src={require('../assets/wolf.gif')} />
    </div>
  )
}

// src={require('../assets/load.gif')}