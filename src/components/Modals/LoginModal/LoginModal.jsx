import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function LoginModal({ isOpen, onClose, onAltLinkClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <ModalWithForm 
      title="Sign in" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
      altLinkText="Sign up"
      onAltLinkClick={onAltLinkClick}
      submitButtonText="Sign in"
    >
      <label className="modal__label">Email</label>
      <input 
        type="email" 
        className="modal__input" 
        placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
      />
      <label className="modal__label">Password</label>
      <input 
        type="password" 
        className="modal__input" 
        placeholder="Enter password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required 
      />
    </ModalWithForm>
  );
}
