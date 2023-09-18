import React from "react";
import "./style.scss";

const SearchShimmer = () => {
  return (
    <div>
      <div className="_2NSqs">
        <div className="_3X3Bt">
          <div className="_1VxLu">
            {Array(10)
              .fill()
              .map((value, index) => {
                return (
                  <button
                    key={index}
                    className="_37IIF"
                    data-testid="autosuggest-item"
                  >
                    <div
                      style={{
                        background: "#dcdcdd",
                      }}
                      className="_2f0cx"
                    ></div>
                    <div className="_23LIV">
                      <div
                        style={{
                          width: "100px",
                          height: "10px",
                          background: "#dcdcdd",
                        }}
                        className="RNzoC"
                      ></div>
                      <div
                        style={{
                          width: "60px",
                          height: "10px",
                          marginTop: "5px",
                          background: "#dcdcdd",
                        }}
                        className="_1Z_E6"
                      ></div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShimmer;
