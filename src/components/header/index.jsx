import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlingBall,
  faCartShopping,
  faChevronDown,
  faCircleQuestion,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import ChangeAddress from "./changeAddress";
import Auth from "./auth";
import UserDropdown from "./userDropdown";
import { fetchCart } from "../../redux/action-creators";

const headerRoutes = [
  {
    title: "Search",
    icon: faMagnifyingGlass,
    badge: "",
    to: "/search",
  },
  {
    title: "Offers",
    icon: faBowlingBall,
    badge: "NEW",
    to: "/",
  },
  {
    title: "Help",
    icon: faCircleQuestion,
    badge: "",
    to: "/",
  },
  {
    title: "Sign In",
    icon: faUser,
    badge: "",
    to: "",
  },
  {
    title: "Cart",
    icon: faCartShopping,
    badge: "",
    to: "/cart",
  },
];

const Header = () => {
  const [cart, setCart] = useState(0);
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(false);
  const address = JSON.parse(localStorage.getItem("user_address"));
  const navigate = useNavigate();

  if (!address) {
    return navigate("/locate");
  }
  const formatted_address = address.formatted_address.split(",");
  const primaryAddress = formatted_address[0];
  formatted_address.shift();
  const secondaryAddress = formatted_address;
  const cartSelector = useSelector((state) => state.cart);
  const userSelector = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  useEffect(() => {
    setCart(
      cartSelector.data?.documents?.reduce(
        (acc, item) => item.quantity + acc,
        0
      )
    );
  }, [cartSelector]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user_data"))) {
      dispatch(fetchCart());
    }
  }, []);

  return (
    <>
      <header className="_76q0O">
        <div className="global-nav">
          <div className="_1EuBh">
            <Link
              to="/"
              className="hover:scale-[1.1] transition-all"
              title="Swiggy"
            >
              <svg
                className="_8pSp-"
                viewBox="0 0 559 825"
                height="49"
                width="34"
                fill="#fc8019"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                  fill="url(#paint0_linear_19447_66107)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_19447_66107"
                    x1="445.629"
                    y1="63.8626"
                    x2="160.773"
                    y2="537.598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF993A"></stop>
                    <stop offset="1" stopColor="#F15700"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div onClick={() => setOpen((prev) => !prev)} className="_2z2N5">
              <span className="_1tcx6">
                <span className="_3odgy">{primaryAddress}</span>
              </span>
              <span className="_3HusE">{secondaryAddress}</span>
              <FontAwesomeIcon className="expand-icon" icon={faChevronDown} />
            </div>
            <ul className="flex-1 flex justify-between items-center ml-[235px]">
              {headerRoutes.map((route) => {
                return (
                  <Link
                    className={`hover:text-[#fc8019] relative top-0 text-[#3D4152] text-ellipsis overflow-hidden whitespace-nowrap max-w-[100px]`}
                    key={route.title}
                    to={route.to}
                    onClick={() =>
                      route.title === "Sign In"
                        ? setEnable((prev) => !prev)
                        : {}
                    }
                    onMouseOver={() => {
                      if (
                        route.title === "Sign In" &&
                        userSelector.data?.name
                      ) {
                        setEnable(true);
                      }
                    }}
                  >
                    <FontAwesomeIcon className="mr-3" icon={route.icon} />
                    {route.title === "Sign In"
                      ? userSelector.data?.name
                        ? userSelector.data?.name
                        : "Sign In"
                      : route.title}
                    {route.badge ? (
                      <div className="text-[10px] top-[-4px] right-[-25px] font-semibold text-[#fc8019] absolute">
                        {route.badge}
                      </div>
                    ) : null}
                    {route.title === "Cart" ? (
                      <div className="absolute top-[-4px] left-[5px] font-bold text-[#fc8019]">
                        {cart}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <ChangeAddress open={open} setOpen={setOpen} />
      {userSelector.data?.name ? (
        <UserDropdown enable={enable} setEnable={setEnable} />
      ) : (
        <Auth enable={enable} setEnable={setEnable} />
      )}
    </>
  );
};

export default Header;
