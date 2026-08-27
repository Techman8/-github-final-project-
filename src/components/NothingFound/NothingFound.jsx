import './NothingFound.css';

export default function NothingFound({ errorText }) {
  return (
    <div className="nothing-found">
      <div className="nothing-found__container">
        {/* If an error prop is passed, display the error layout variant configuration */}
        {errorText ? (
          <>
            <div className="nothing-found__icon nothing-found__icon_type_error" />
            <h3 className="nothing-found__title">An error occurred</h3>
            <p className="nothing-found__description">{errorText}</p>
          </>
        ) : (
          <>
            <div className="nothing-found__icon nothing-found__icon_type_search" />
            <h3 className="nothing-found__title">Nothing Found</h3>
            <p className="nothing-found__description">Sorry, but nothing matched your search terms.</p>
          </>
        )}
      </div>
    </div>
  );
}
