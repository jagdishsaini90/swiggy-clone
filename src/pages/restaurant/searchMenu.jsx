import React, { useEffect, useState } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./card";

const SearchMenu = ({
  name = "",
  open,
  setShowSearch,
  data = {},
  restaurantsData,
}) => {
  const [search, setSearch] = useState("");
  const [resData, setRestaurantsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (search) {
      setFilteredData([
        ...resData.filter((card) =>
          card.card.info.name?.toLowerCase().includes(search.toLowerCase())
        ),
      ]);
    } else {
      setFilteredData([]);
    }
  }, [search]);

  useEffect(() => {
    let cardsData = [];
    data?.groupedCard?.cardGroupMap["REGULAR"]?.cards?.map((cards) => {
      const { categories, itemCards } = cards.card.card;
      if (categories) {
        categories?.map((items) => {
          cardsData.push(...items.itemCards);
        });
      } else if (itemCards) {
        cardsData.push(...itemCards);
      }
    });
    setRestaurantsData(cardsData);
  }, [restaurantsData]);

  return (
    <>
      <div
        className={`w-full ${
          open
            ? "border-b-[1px] border-gray-300 justify-between"
            : "justify-end"
        } flex h-[52px] items-center`}
      >
        {open ? (
          <>
            <svg
              className="mr-4 text-[#686b78] cursor-pointer"
              viewBox="0 0 32 32"
              height="18"
              width="18"
              onClick={() => {
                setShowSearch((prev) => !prev);
                setSearch("");
              }}
            >
              <path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path>
            </svg>
            <input
              className="flex-1 focus:outline-none"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search in ${name}`}
            />
          </>
        ) : null}
        {search ? (
          <FontAwesomeIcon
            className="text-[#686b78] w-[20px] h-[20px] cursor-pointer"
            onClick={() => setSearch("")}
            icon={faCircleXmark}
          />
        ) : (
          <FontAwesomeIcon
            className="text-[#686b78] w-[20px] h-[20px] cursor-pointer"
            icon={faMagnifyingGlass}
            onClick={() => (open ? {} : setShowSearch((prev) => !prev))}
          />
        )}
      </div>
      {open ? (
        <div className="w-full min-h-screen mt-5">
          {filteredData.map((card) => {
            return <Card key={card.card.info.id} data={card.card.info} />;
          })}
        </div>
      ) : null}
    </>
  );
};

export default SearchMenu;
