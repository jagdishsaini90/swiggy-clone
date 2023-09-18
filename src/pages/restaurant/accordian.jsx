import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

const Accordian = ({ data = {}, titleBold = false }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div
        className={`cursor-pointer ${
          titleBold ? "font-bold" : ""
        } mb-7 flex justify-between ${
          !titleBold ? "pb-4 border-b-[1px] border-gray-500" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {open ? (
        <div>
          {data.itemCards.map((card) => {
            return <Card data={card.card.info} key={card.card.info.id} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;
