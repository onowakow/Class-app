import React from 'react'
import Button from 'react-bootstrap/Button'

const EditingControlBar = () => {
  return (
    <nav className='bin' id='edit-control-bar'>
      <div className='left-controls'>
        <Button className='nav-btn' variant='primary'>New section</Button>
      </div>
      <div className='right-controls'>
      <Button className='nav-btn' variant='primary'>Add paragraph</Button>
      <Button className='nav-btn' variant='secondary'>Edit</Button>
      <Button className='nav-btn' variant='warning'>Close editor</Button>
      <Button className='nav-btn' variant='danger'>Delete section</Button>
      </div>
    </nav>
  )
}

export default EditingControlBar