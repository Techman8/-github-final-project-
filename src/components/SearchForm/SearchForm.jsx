import { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [placeholderText, setPlaceholderText] = useState("Enter topic");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!keyword.trim()) {
      setIsInvalid(true);
      setKeyword(""); 
      setPlaceholderText("Please enter a keyword"); 
      return;
    }
    
    onSearch(keyword);
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  
    if (isInvalid) {
      setIsInvalid(false);
      setPlaceholderText("Enter topic");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal account.
      </p>
      
      <div className="search-form__input-wrapper">
        <input 
          type="text" 
          className={`search-form__input ${isInvalid ? 'search-form__input_type_error' : ''}`} 
          placeholder={placeholderText} 
          value={keyword}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-form__button">Search</button>
      </div>
    </form>
  );
}
