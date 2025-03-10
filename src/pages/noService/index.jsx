import "./style.scss";
import Bricks from "../../components/bricks";
import LinkBanner from "../../components/LinkBanner";

const NoService = ({ data }) => {
  const { cities, title } = data[1]?.card?.card;
  const appLinks = data[2]?.card?.card;

  return (
    <div>
      <div className="sc-BrFsL lidxXy">
        <div>
          <div className="sc-DdwlG iGSmSY">
            <div className="sc-dwVMhp hRA-DuF">
              <img
                className="sc-hKMtZM gXNoYr"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
                width="238"
                height="238"
                alt="location unservicable image"
              />
            </div>
            <div className="sc-bczRLJ duPbln">Location Unserviceable</div>
            <div className="sc-bczRLJ gRCWUT sc-gVAlfg iQcrzC">
              {
                "We don’t have any services here till now. Try changing location."
              }
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="sc-BrFsL lidxXy">
        <Bricks title={title} cities={cities} />
        <div>
          <LinkBanner card={appLinks} />
        </div>
      </div>
    </div>
  );
};

export default NoService;
