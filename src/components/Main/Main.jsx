import "./Main.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";

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
  savedArticles,
}) {
  const hasArticles = cards.length > 0;
  const isNothingFound =
    searchAttempted && !isLoading && cards.length === 0 && !apiError;
  const showResultsSection =
    isLoading || hasArticles || isNothingFound || apiError;

  return (
    <main className="main">
      <div className="main__hero">
        <Header
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
          onLogout={onLogout}
          theme="dark"
        />
        <SearchForm onSearch={onSearch} />
      </div>

      {showResultsSection && (
        <section className="main__results">
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

          {isNothingFound && <NothingFound />}

          {apiError && <NothingFound errorText={apiError} />}
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
