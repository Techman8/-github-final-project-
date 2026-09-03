import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  isOpen,
  onClose,
  onAltLinkClick,
  onLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const input = e.target;
    setEmail(input.value);
    setEmailError(input.validationMessage);
    setIsValid(input.closest("form").checkValidity());
  };

  const handlePasswordChange = (e) => {
    const input = e.target;
    setPassword(input.value);
    setPasswordError(input.validationMessage);
    setIsValid(input.closest("form").checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin(email, password);
    }
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
      isDisabled={!isValid}
    >
      <label className="modal__label">Email</label>
      <input
        type="email"
        className="modal__input"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <span className="modal__error">{emailError}</span>

      <label className="modal__label">Password</label>
      <input
        type="password"
        className="modal__input"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        required
        minLength={6}
      />
      <span className="modal__error">{passwordError}</span>
    </ModalWithForm>
  );
}
