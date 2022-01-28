import React from 'react'
import NewArticleForm from './NewArticleForm.jsx'
import Button from 'react-bootstrap/Button'

const Editor = ({ handleCancel, editView, changeEditView, handleNewArticle }) => {
  return editView === 'home' ? (
    <Button id='new-section-btn' onClick={()=>changeEditView('new')}>New section</Button>
    )
    : editView === 'new' ? <NewArticleForm handleCancel={handleCancel} handleNewArticle={handleNewArticle} />
    : null
}

export default Editor