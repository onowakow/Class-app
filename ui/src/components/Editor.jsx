import React from 'react'
import EditCategory from './EditCategory.jsx'
import NewArticleForm from './NewArticleForm.jsx'

const Editor = ({ editView, changeEditView, handleNewArticle }) => {
  return editView === 'home' ? <EditCategory changeEditView={changeEditView} editView={editView} /> 
    : editView === 'new' ? <NewArticleForm handleNewArticle={handleNewArticle} />
    : null

}

export default Editor