import React from "react";
import "./style.scss";

const LinkBanner = ({ card }) => {
  return (
    <div className="sc-BrFsL lidxXy">
      <div>
        <div className="sc-dSuTWQ fMatGN">
          <div className="sc-gHLcSH cvaOsE">
            <div className="sc-bczRLJ goOXz">{card.title}</div>
          </div>
          <div className="sc-hZFzCs jgNdgG">
            <a
              href={card.androidAppLink}
              rel="noreferrer"
              target="_blank"
              className="sc-cHPgQl bKzNUb"
            >
              <img
                className="sc-hKMtZM ehLqCq sc-KfMfS fMlcRh"
                src={
                  import.meta.env.VITE_SWIGGY_CLOUDINARY_API +
                  `/${card.androidAppImage}`
                }
                alt="Download Android App"
              />
            </a>
            <a
              href={card.iosAppLink}
              rel="noreferrer"
              target="_blank"
              className="sc-cHPgQl bKzNUb"
            >
              <img
                className="sc-hKMtZM ehLqCq sc-KfMfS fMlcRh"
                src={
                  import.meta.env.VITE_SWIGGY_CLOUDINARY_API +
                  `/${card.iosAppImage}`
                }
                alt="Download iOS App"
              />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LinkBanner;
