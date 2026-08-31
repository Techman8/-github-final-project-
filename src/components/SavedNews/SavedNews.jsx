import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

export default function SavedNews({
  isLoggedIn,
  currentUser /* 1. Accept your new user state parameter profile prop */,
  savedArticles,
  onCardDelete,
  onNavigateToHome,
  onLogout,
}) {
  // Dynamic Keyword Logic: Extracts unique keywords and sorts them by frequency
  const getKeywordSummary = () => {
    const keywords = savedArticles
      .map((article) => article.keyword)
      .filter(Boolean);
    const countMap = keywords.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    const sortedKeywords = Object.keys(countMap).sort(
      (a, b) => countMap[b] - countMap[a],
    );

    if (sortedKeywords.length <= 3) {
      return sortedKeywords.join(", ");
    }
    return `${sortedKeywords.slice(0, 2).join(", ")}, and ${sortedKeywords.length - 2} other(s)`;
  };

  return (
    <div className="saved-news">
      <Header
        isLoggedIn={isLoggedIn}
        theme="light"
        onHomeClick={onNavigateToHome}
        onLogout={onLogout}
      />

      {/* Info Author/Summary Block */}
      <section className="saved-news__info-block">
        <span className="saved-news__subtitle">Saved articles</span>
        <h2 className="saved-news__title">
          {/* 2. Dynamically displays the logged in user's name (e.g., "Elise") */}
          {currentUser ? currentUser.name : "User"}, you have{" "}
          {savedArticles.length} saved article
          {savedArticles.length !== 1 ? "s" : ""}
        </h2>

        {savedArticles.length > 0 && (
          <p className="saved-news__keywords">
            By keywords:{" "}
            <span className="saved-news__keywords-bold">
              {getKeywordSummary()}
            </span>
          </p>
        )}
      </section>

      {/* Main Content Grid Area */}
      <main className="saved-news__content">
        {savedArticles.length > 0 ? (
          <NewsCardList
            cards={savedArticles}
            isLoggedIn={isLoggedIn}
            page="saved-news"
            savedArticles={savedArticles}
            onCardDelete={onCardDelete}
          />
        ) : (
          <div className="saved-news__empty-state">
            <p className="saved-news__empty-text">
              Your bookmarked collection is empty.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
