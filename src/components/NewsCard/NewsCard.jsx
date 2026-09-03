import "./NewsCard.css";
import bookmark from "../../images/bookmark.svg";
import trash from "../../images/trash.svg";

export default function NewsCard({
  image,
  date,
  title,
  text,
  source,
  keyword,
  isLoggedIn,
  page,
  isSaved,
  onCardAction,
}) {
  const isMainPage = page === "main";

  const formatDate = (rawDateString) => {
    if (!rawDateString) return "";
    const parsedDate = new Date(rawDateString);
    return parsedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img 
          src={image || ""} 
          alt={image ? title : "News banner placeholder"} 
          className="news-card__image" 
        />
        
        <div className="news-card__actions">
          <div className="news-card__tooltip-wrapper">
            <button
              type="button"
              className={`news-card__action-btn news-card__action-btn_type_${isMainPage ? "save" : "delete"} ${
                isMainPage && isSaved ? "news-card__action-btn_state_saved" : ""
              }`}
              aria-label={isMainPage ? (isSaved ? "Unsave article" : "Save article") : "Remove article"}
              onClick={isLoggedIn ? onCardAction : undefined}
            >
              {isMainPage ? (
                <img src={bookmark} alt="" className="news-card__icon" />
              ) : (
                <img src={trash} alt="" className="news-card__icon" />
              )}
            </button>

            {!isLoggedIn && isMainPage && (
              <span className="news-card__tooltip" role="tooltip">
                Sign in to save articles
              </span>
            )}
            {isLoggedIn && !isMainPage && (
              <span className="news-card__tooltip" role="tooltip">
                Remove from saved
              </span>
            )}
          </div>
        </div>

        {!isMainPage && keyword && (
          <span className="news-card__category">{keyword}</span>
        )}
      </div>

      <div className="news-card__text-container">
        <time className="news-card__date" dateTime={date}>
          {formatDate(date)}
        </time>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}
