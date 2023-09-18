import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Shimmer = () => {
  return (
    <div className="search-shimmer">
      <h1></h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <h1></h1>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <h1></h1>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <h1></h1>
        </li>
      </ul>
    </div>
  );
};

export default Shimmer;
