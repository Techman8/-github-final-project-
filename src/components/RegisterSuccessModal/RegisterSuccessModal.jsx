import "./RegisterSuccessModal.css"; 
import closeButtonImg from "../../images/close-button.png"; 

export default function RegisterSuccessModal({ 
  isOpen, 
  onClose, 
  onSignInClick, 
}) { 
  if (!isOpen) return null; 

  return ( 
    <div className="registersuccess-modal" aria-hidden="false"> 
      <div className="registersuccess-modal__overlay" onClick={onClose}></div> 
      
      <div className="registersuccess-modal__wrapper"> 
        <button 
          className="registersuccess-modal__close-btn" 
          onClick={onClose} 
          aria-label="Close modal" 
        > 
          <img 
            src={closeButtonImg} 
            alt="Close" 
            className="registersuccess-modal__close-icon" 
          /> 
        </button> 
        
        <div className="registersuccess-modal__card"> 
          <h2 className="registersuccess-modal__title">
            Registration successfully completed
          </h2> 
          
          <button 
            type="button" 
            className="registersuccess-modal__link" 
            onClick={(e) => { 
              e.preventDefault(); 
              onSignInClick(); 
            }} 
          > 
            Sign in 
          </button> 
        </div> 
      </div> 
    </div> 
  ); 
}
