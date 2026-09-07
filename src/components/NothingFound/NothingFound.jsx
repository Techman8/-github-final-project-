import "./NothingFound.css";
import figmaIcon from "../../images/not-found_v1.png";

export default function NothingFound({ errorText }) {
  return (
    <div className="nothing-found">
      <div className="nothing-found__container">
        {errorText ? (
          <>
            <div className="nothing-found__icon nothing-found__icon_type_error" />
            <h2 className="nothing-found__title">An error occurred</h2>
            <p className="nothing-found__description">{errorText}</p>
          </>
        ) : (
          <>
            <img
              src={figmaIcon}
              alt="Nothing found icon"
              className="nothing-found__icon"
            />
            <h2 className="nothing-found__title">Nothing found</h2>
            <p className="nothing-found__description">
              Sorry, but nothing matched your search results.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
