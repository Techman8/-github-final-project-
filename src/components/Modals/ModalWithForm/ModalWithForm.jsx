import "./ModalWithForm.css";
import closebutton from "../../../images/close-button.png";

function ModalWithForm({
  children,
  title,
  isOpen,
  onClose,
  onSubmit,
  altLinkText,
  onAltLinkClick,
  submitButtonText,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />

      <div className="modal__container">
        <header className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            type="button"
            className="modal__close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <img
              src={closebutton}
              alt="Close modal"
              className="modal__close-icon"
            />
          </button>
        </header>

        <div className="modal__body">
          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <button type="submit" className="modal__submit-button">
              {submitButtonText || "Submit"}
            </button>
          </form>

          <p className="modal__alt-text">
            or{" "}
            <span className="modal__alt-link" onClick={onAltLinkClick}>
              {altLinkText}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
