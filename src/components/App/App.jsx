import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../Modals/LoginModal/LoginModal";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import { searchNews } from "../../utils/newsApi";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => setActiveModal("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setTimeout(() => {
        setIsLoggedIn(true);
        setCurrentUser({ name: "Elise", email: "elise@explorer.com" });
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  const handleLoginSubmit = (email, password) => {
    console.log("Simulating mock login with credentials:", { email, password });
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem("jwt", "mock-jwt-token-string");
        setIsLoggedIn(true);
        setCurrentUser({ name: "Elise", email: email });
        closeModal();
        resolve();
      }, 800);
    });
  };

  const handleRegisterSubmit = (email, password, username) => {
    console.log("Simulating mock registration fields setup:", {
      email,
      password,
      username,
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        setActiveModal("login");
        resolve();
      }, 800);
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles([]);
    setCards([]);
    setSearchAttempted(false);
    navigate("/");
  };

  const handleSearchSubmit = (keyword) => {
    setIsLoading(true);
    setApiError("");
    setCards([]);
    setSearchAttempted(true);

    searchNews(keyword)
      .then((data) => {
        if (data.articles) {
          const formattedCards = data.articles.map((article, index) => ({
            id: article.url + index,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            title: article.title,
            description: article.description,
            source: article.source.name,
            keyword: keyword,
          }));
          setCards(formattedCards);
        }
      })
      .catch((err) => {
        console.error(err);
        setApiError(
          "Sorry, something went wrong during the request. Please try again later.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardSaveToggle = (clickedCard) => {
    setSavedArticles((prevSaved) => {
      const isAlreadySaved = prevSaved.some(
        (item) => item.id === clickedCard.id,
      );
      if (isAlreadySaved) {
        return prevSaved.filter((item) => item.id !== clickedCard.id);
      } else {
        return [...prevSaved, clickedCard];
      }
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              onLoginClick={() => setActiveModal("login")}
              onLogout={handleLogout}
              onSearch={handleSearchSubmit}
              cards={cards}
              isLoading={isLoading}
              apiError={apiError}
              searchAttempted={searchAttempted}
              savedArticles={savedArticles}
              onCardSave={handleCardSaveToggle}
            />
          }
        />

        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
            <SavedNews
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
              onLogout={handleLogout}
              savedArticles={savedArticles}
              onCardDelete={handleCardSaveToggle}
            />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />

      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          onClose={closeModal}
          onAltLinkClick={() => setActiveModal("register")}
          onLogin={handleLoginSubmit}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          onClose={closeModal}
          onAltLinkClick={() => setActiveModal("login")}
          onRegister={handleRegisterSubmit}
        />
      )}
    </div>
  );
}

export default App;
