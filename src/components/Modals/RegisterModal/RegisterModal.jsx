import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  isOpen,
  onClose,
  onAltLinkClick,
  onRegister,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
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

  const handleUsernameChange = (e) => {
    const input = e.target;
    setUsername(input.value);
    setUsernameError(input.validationMessage);
    setIsValid(input.closest("form").checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister(email, password, username);
    }
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

      <label className="modal__label">Username</label>
      <input
        type="text"
        className="modal__input"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
        required
        minLength={2}
      />
      <span className="modal__error">{usernameError}</span>
    </ModalWithForm>
  );
}
