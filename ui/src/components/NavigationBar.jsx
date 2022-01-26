import React from 'react'
import Button from 'react-bootstrap/Button'

const NavigationBar = ({ handleModeChange, mode }) => {

  const handleClick = () => {
    if (mode === 'editing') {
      handleModeChange('viewing')
    } else {
      handleModeChange('editing')
    }
  }

  return (
    <nav className='nav-bar'>
      <h1 className='nav-element'>Class app</h1>
      <Button className='nav-element' id='mode-change-btn' onClick={handleClick} variant='dark'>{mode}</Button>
    </nav>
  )
}

export default NavigationBar