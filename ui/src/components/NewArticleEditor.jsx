import React from 'react'
import NewArticleForm from './NewArticleForm.jsx'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const NewArticleEditor = ({ handleNewArticle }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleStartEditing = () => {
    setIsEditing(true)
  }

  const handleEndEditing = () => {
    setIsEditing(false)
  }

  return !isEditing ? (
    <Button id='new-section-btn' onClick={handleStartEditing}>New section</Button>
    )
    : isEditing ? <NewArticleForm handleCancel={handleEndEditing} handleNewArticle={handleNewArticle} />
    : null
}

export default NewArticleEditor