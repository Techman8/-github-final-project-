import { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

export default function RegisterModal({ isOpen, onClose, onAltLinkClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, username);
  };

  return (
    <ModalWithForm 
      title="Sign up" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
      altLinkText="Sign in"
      onAltLinkClick={onAltLinkClick}
      submitButtonText="Sign up"
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
      <label className="modal__label">Username</label>
      <input 
        type="text" 
        className="modal__input" 
        placeholder="Enter your username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required 
      />
    </ModalWithForm>
  );
}
