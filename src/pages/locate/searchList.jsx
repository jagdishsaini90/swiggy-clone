import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SearchList = ({ deferredValue, loadAddress }) => {
  return (
    <div className="search-results z-[1000]">
      <ul>
        {deferredValue?.map((result) => {
          return (
            <li
              className="text-[13px]"
              onClick={() => loadAddress(null, null, result.place_id)}
              key={result.place_id}
            >
              <FontAwesomeIcon
                className="mr-4 text-[#535665] text-[17px]"
                icon={faLocationDot}
              />
              <span>{result.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchList;
