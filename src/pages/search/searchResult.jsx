/* eslint-disable react/prop-types */
import React from "react";
import SearchShimmer from "./searchShimmer";

const SearchResult = ({
  data = [],
  isLoading = false,
  query = "",
  setShowSingleRest,
}) => {
  if (isLoading) {
    return <SearchShimmer />;
  }
  return (
    <div>
      <div className="_2NSqs">
        <div className="_3X3Bt">
          <div className="_1VxLu">
            {data.map((value, index) => {
              const name = value.highlightedText.split("}}");
              const boldText = name[0].split("{{")[1];
              return (
                <button
                  key={index}
                  className="_37IIF"
                  data-testid="autosuggest-item"
                  onClick={() =>
                    setShowSingleRest({
                      show: true,
                      name: value.text,
                    })
                  }
                >
                  <div className="_2f0cx">
                    <img
                      className="_2tuBw _12_oN _2f0cx"
                      alt=""
                      src={
                        import.meta.env.VITE_SWIGGY_CLOUDINARY_API +
                        `/${value.cloudinaryId}`
                      }
                    />
                  </div>
                  <div className="_23LIV">
                    <div className="RNzoC">
                      <b>{boldText || value.highlightedText}</b>
                      {name[1]}
                    </div>
                    <div className="_1Z_E6">{value.subCategory}</div>
                  </div>
                </button>
              );
            })}
            <button className="_37IIF _1rZ-i" data-testid="autosuggest-no-item">
              <div className="_1zEmH">
                <img
                  className="_2tuBw _12_oN _1zEmH"
                  alt=""
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/Icons-Autosuggest/AS_Search_3x"
                />
              </div>
              <div className="_3sa8N">
                <div className="_1BoSg">
                  See all results for <b>&apos;{query}&apos;</b>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
