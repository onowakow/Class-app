import React from 'react'
import Button from 'react-bootstrap/Button'

const EditingControlBar = () => {
  return (
    <nav id='edit-control-bar'>
      <Button className='edit-control-button' variant='primary'>Add paragraph</Button>
      <Button className='edit-control-button' variant='secondary'>Edit</Button>
      <Button className='edit-control-button' variant='warning'>Close editor</Button>
      <Button className='edit-control-button' variant='danger'>Delete section</Button>
    </nav>
  )
}

export default EditingControlBar