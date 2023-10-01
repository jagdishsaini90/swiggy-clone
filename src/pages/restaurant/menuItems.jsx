import React, { useEffect, useRef } from "react";
import Accordian from "./accordian";

const Categories = ({ card = {}, setListCoords }) => {
  const ref = useRef();

  useEffect(() => {
    setListCoords((prev) => [...prev, ref]);
  }, []);
  return (
    <div ref={ref}>
      <h2 className="font-bold mb-2">{card.title}</h2>
      {card.categories.map((subCard) => {
        return <Accordian key={subCard.title} data={subCard} />;
      })}
      <div className="min-h-[16px] border-b-[16px] border-[#f1f1f6] mb-[40px]"></div>
    </div>
  );
};

const ItemCards = ({ card = {}, setListCoords }) => {
  const ref = useRef();

  useEffect(() => {
    setListCoords((prev) => [...prev, ref]);
  }, []);

  return (
    <div ref={ref}>
      <Accordian titleBold={true} data={card} />
      <div className="min-h-[16px] border-b-[16px] border-[#f1f1f6] mb-[40px]"></div>
    </div>
  );
};

const MenuItems = ({ data = [], setListCoords }) => {
  return (
    <div>
      {data[2]?.groupedCard?.cardGroupMap["REGULAR"]?.cards?.map((card) => {
        if (card.card.card?.categories) {
          return (
            <Categories
              setListCoords={setListCoords}
              key={card.card.card.title}
              card={card.card.card}
            />
          );
        } else if (card.card.card?.itemCards) {
          return (
            <ItemCards
              setListCoords={setListCoords}
              key={card.card.card?.title}
              card={card.card.card}
            />
          );
        }
      })}
    </div>
  );
};

export default MenuItems;
