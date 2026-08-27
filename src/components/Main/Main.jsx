import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import NothingFound from '../NothingFound/NothingFound'; 
import About from '../About/About';

// 2. Accept live API parameters from App.jsx instead of local dev hooks
function Main({ 
  isLoggedIn, 
  onLoginClick, 
  onSearch, 
  cards, 
  onLogout, 
  onCardSave,
  isLoading,      
  apiError,        
  searchAttempted, 
  savedArticles    
}) {

  // Helper flags to calculate display states cleanly
  const hasArticles = cards.length > 0;
  const isNothingFound = searchAttempted && !isLoading && cards.length === 0 && !apiError;

  return (
    <main className="main">
      <div className="main__hero">
        <Header isLoggedIn={isLoggedIn} onLoginClick={onLoginClick} onLogout={onLogout} theme="dark" />
        <SearchForm onSearch={onSearch} />
      </div>
      
      {/* 3. Render preloader animation inside results section while request is active */}
      {isLoading && <Preloader />} 
      
      {/* 4. Display cards only if the response returned one or more matching articles */}
      {hasArticles && !isLoading && (
        <NewsCardList 
          cards={cards} 
          isLoggedIn={isLoggedIn} 
          page="main" 
          savedArticles={savedArticles}
          onCardSave={onCardSave} 
        />
      )}

      {/* 5. Display Nothing Found layout if the array comes back completely empty */}
      {isNothingFound && <NothingFound />}

      {/* 6. Display custom error prompt template if a network failure happens during fetch */}
      {apiError && <NothingFound errorText={apiError} />}

      <About />
    </main>
  );
}

export default Main;
