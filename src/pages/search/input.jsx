import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ search, setSearch, setShowSingleRest, showSingleRest }) => {
  return (
    <div>
      <div className="rbcmH">
        <div className="_1JbgW _1jet9" data-testid="search-bar">
          <form>
            <div className="_1QBzC">
              <div className="_2O4-3">
                <input
                  type="text"
                  className="_2FkHZ"
                  placeholder="Search for restaurants and food"
                  maxLength={200}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    if (showSingleRest.show) {
                      setShowSingleRest({
                        show: false,
                        name: "",
                      });
                    }
                  }}
                />
              </div>
              <div className="_2p8XD">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <input type="submit" hidden="" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
