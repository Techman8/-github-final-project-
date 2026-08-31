import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  cards = [],
  isLoggedIn,
  page,
  savedArticles = [],
  onCardSave,
  onCardDelete,
}) {
  const isMainPage = page === "main";

  const [visibleCount, setVisibleCount] = useState(
    isMainPage ? 3 : cards.length,
  );

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const renderedCards = isMainPage ? cards.slice(0, visibleCount) : cards;

  return (
    <section className="news-cards">
      {isMainPage && <h2 className="news-cards__title">Search results</h2>}

      <div className="news-cards__grid">
        {renderedCards.map((card) => {
          const isSaved = savedArticles.some(
            (savedItem) => savedItem.id === card.id,
          );

          return (
            <NewsCard
              key={card.id}
              image={card.urlToImage}
              date={card.publishedAt}
              title={card.title}
              text={card.description}
              source={card.source}
              keyword={card.keyword}
              isLoggedIn={isLoggedIn}
              page={page}
              isSaved={isSaved}
              onCardAction={() =>
                isMainPage ? onCardSave(card) : onCardDelete(card)
              }
            />
          );
        })}
      </div>

      {isMainPage && visibleCount < cards.length && (
        <button
          type="button"
          className="news-cards__more-btn"
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
