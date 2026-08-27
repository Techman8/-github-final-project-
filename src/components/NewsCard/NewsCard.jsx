import './NewsCard.css'; 

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
  onCardAction 
}) { 
  const isMainPage = page === "main";

  const formatDate = (rawDateString) => {
    if (!rawDateString) return "";
    const parsedDate = new Date(rawDateString);
    
    return parsedDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return ( 
    <article className="news-card"> 
      <div className="news-card__image-container"> 
        <img 
          src={image || null} 
          alt={image ? title : ""} 
          className="news-card__image" 
        />  
        
        <div className="news-card__actions"> 
          <div className="news-card__tooltip-wrapper"> 
            <button 
              type="button" 
              className={`news-card__action-btn news-card__action-btn_type_${isMainPage ? 'save' : 'delete'} ${
                isMainPage && isSaved ? 'news-card__action-btn_state_saved' : ''
              }`} 
              aria-label={isMainPage ? (isSaved ? "Unsave article" : "Save article") : "Remove article"} 
              onClick={isLoggedIn ? onCardAction : undefined}
            > 
              {isMainPage ? (
                /* Save Bookmark Flag Icon SVG */
                <svg className="news-card__icon" width="24" height="24" viewBox="0 0 24 24"> 
                  <path d="M5 3h14a2 2 0 0 1 2 2v16l-9-5-9 5V5a2 2 0 0 1 2-2z" strokeWidth="2"/> 
                </svg> 
              ) : (
                /* Trash/Delete Bin Icon SVG */
                <svg className="news-card__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
      
      <div className="news-card__content"> 
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
