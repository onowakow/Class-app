import React from 'react'

// Side bar article nav
const SectionNavigation = ({ articles, handleArticleSelect }) => {
  return (
    articles.map((article)=> (
      <button 
        key={article.id} 
        className='section-nav-button'
        onClick={() => handleArticleSelect(article.id)}
      >
        <b>{article.title}</b>
      </button>
    ))
  )
}

export default SectionNavigation