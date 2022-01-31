import React from 'react'
import NewArticleForm from './NewArticleForm.jsx'
import Button from 'react-bootstrap/Button'

const Editor = ({ editView, changeEditView, handleNewArticle }) => {
  console.log('editor:', editView)
  return editView === 'home' ? (
    <Button id='new-section-btn' onClick={()=>changeEditView('new')}>New section</Button>
    )
    : editView === 'new' ? <NewArticleForm handleCancel={()=>changeEditView('home')} handleNewArticle={handleNewArticle} />
    : null
}

export default Editor