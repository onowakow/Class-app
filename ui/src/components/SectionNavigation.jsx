import React from "react";
import WarningModal from "./WarningModal.jsx";
import { useState } from "react";

// Side bar article nav
const SectionNavigation = ({ isEdit, articles, handleArticleSelect }) => {
  const [showModal, setShowModal] = useState(false);
  // State for modal
  const [articleIdHold, setArticleIdHold] = useState(null)

  const handleNavClick = async (id) => {
    if (isEdit) {
      setArticleIdHold(id)
      setShowModal(true)
      return
    }
    handleArticleSelect(id)
  }

  const handleArticleNavigation = () => {
    setShowModal(false)
    handleArticleSelect(articleIdHold)
  }

  const handleModalClose = () => setShowModal(false)
  const handleModalOpen = () => setShowModal(true)

  return (
    <>
      <WarningModal
        title="Are you sure you want to continue?"
        body="Navigating to another article will cause unsaved edits to be lost. Click 'Go back' to return to the current edit."
        closeBtnText="Go back"
        continueBtnText="Go to selected article"
        show={showModal}
        handleContinue={handleArticleNavigation}
        handleClose={handleModalClose}
      />
      {articles.map((article) => (
        <button
          key={article.id}
          className="section-nav-button"
          onClick={() => handleNavClick(article.id)}
        >
          <b>{article.title}</b>
        </button>
      ))}
    </>
  );
};

export default SectionNavigation;
