import './ModalWithForm.css';

function ModalWithForm({ children, title, isOpen, onClose, onSubmit, altLinkText, onAltLinkClick, submitButtonText }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__container">
        <button type="button" className="modal__close-button" onClick={onClose} />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          {/* Dynamically reads the passed action text parameter */}
          <button type="submit" className="modal__submit-button">
            {submitButtonText || "Submit"}
          </button>
        </form>
        <p className="modal__alt-text">
          or <span className="modal__alt-link" onClick={onAltLinkClick}>{altLinkText}</span>
        </p>
      </div>
    </div>
  );
}

export default ModalWithForm;