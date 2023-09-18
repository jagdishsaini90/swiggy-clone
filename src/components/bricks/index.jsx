import React, { useState } from "react";
import "./style.scss";

const Bricks = ({ cities = [], title }) => {
  const [showCities, setShowCities] = useState(false);

  return (
    <>
      <div className="sc-gPpHY sc-geuGuN dsbFcD hDZbee"></div>
      <div className="bricks-container w-[1066px]">
        <div className="sc-jTYCaT BuvAm">
          <h2
            style={{ color: "rgba(2, 6, 12, 0.92)" }}
            className=" m-auto text-[24px] mb-6 font-bold"
          >
            {title}
          </h2>
        </div>
        <div className="flex justify-between items-start flex-wrap">
          {cities.map((city, index) => {
            return (
              <a
                key={city.text}
                href={city.link}
                className="sc-hNKHps fpFQyQ"
                style={{
                  display: index > 10 && !showCities ? "none" : "block",
                }}
              >
                <div width="100%" className="sc-grREDI chcZjF">
                  <div className="sc-bWXABl gHbiYH">
                    {" "}
                    <div className="sc-bczRLJ dpCzHT">{city.text}</div>{" "}
                  </div>
                </div>
              </a>
            );
          })}
          <button
            style={{
              display: showCities || cities.length < 10 ? "none" : "block",
            }}
            onClick={() => setShowCities(true)}
            className="sc-dsQDmV jgcYbS"
          >
            <div width="100%" className="sc-grREDI chcZjF">
              <div className="sc-bWXABl gHbiYH">
                <div className="sc-bczRLJ gMzRfV">Show More</div>
                <div className="sc-cZwWEu kqtGB">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.30875 4.27703C0.931854 4.60108 0.889014 5.16932 1.21307 5.54622L4.57534 9.45679C4.58439 9.46731 4.59351 9.47793 4.6027 9.48863C4.75431 9.66514 4.92366 9.86231 5.08944 10.0078C5.28433 10.1788 5.5905 10.385 6.01603 10.385C6.44156 10.385 6.74773 10.1788 6.94262 10.0078C7.1084 9.86232 7.27776 9.66515 7.42937 9.48865C7.43856 9.47795 7.44768 9.46733 7.45673 9.4568L10.7864 5.58418C11.1105 5.20729 11.0677 4.63905 10.6908 4.31499C10.3139 3.99093 9.74563 4.03377 9.42157 4.41066L6.09187 8.28328C6.06476 8.3148 6.0396 8.34406 6.01604 8.37135C5.99247 8.34406 5.96732 8.3148 5.94021 8.28328L2.57794 4.37271C2.25389 3.99581 1.68565 3.95297 1.30875 4.27703Z"
                      fill="rgba(2, 6, 12, 0.6)"
                      fillOpacity="0.92"
                    ></path>
                  </svg>
                </div>{" "}
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Bricks;
