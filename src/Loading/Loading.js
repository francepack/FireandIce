import React from 'react'
import './loading.css'

export const Loading = () => {
  return(
    <div className='loading'>
      <img src={require('../assets/wolf.gif')} />
      <h3>Loading</h3>
    </div>
  )
}