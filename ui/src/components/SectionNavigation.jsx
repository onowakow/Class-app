import React from 'react'

// Side bar article nav
const SectionNavigation = ({ articles, handleArticleSelect }) => {
  return (
    articles.map((article, i)=> (
      <button 
        key={i} 
        className='section-nav-button'
        onClick={() => handleArticleSelect(i)}
      >
        <b>{article.title}</b>
      </button>
    ))
  )
}

export default SectionNavigation