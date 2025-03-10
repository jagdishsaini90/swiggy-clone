import React, { Suspense } from "react";
import "./style.scss";
import City from "./city";
import CityLinks from "./cityLinks";
import Cuisine from "./cuisine";

const Footer = () => {
  return (
    <div className="d_rQj">
      <div className="_25jJQ">
        <div className="_3ipKA">
          <div className="_2Im4A">
            <div className="T_dbb">Company</div>
            <ul className="_2gbMt">
              <li className="b-Hy9">
                <a className="_3TjLz" href="/about" alt="" target="_blank">
                  About us
                </a>
              </li>
              <li className="b-Hy9">
                <a className="_3TjLz" href="/team" alt="" target="_blank">
                  Team
                </a>
              </li>
              <li className="b-Hy9">
                <a className="_3TjLz" href="/careers" alt="" target="_blank">
                  Careers
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="https://blog.swiggy.com"
                  rel="noreferrer"
                  alt=""
                  target="_blank"
                >
                  Swiggy Blog
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/bug-bounty"
                  rel="nofollow noopener"
                  alt=""
                  target="_blank"
                >
                  Bug Bounty
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/swiggy-super"
                  rel="nofollow noopener"
                  alt=""
                  target="_blank"
                >
                  Swiggy One
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="https://corporate.swiggy.com"
                  rel="noreferrer"
                  alt=""
                  target="_blank"
                >
                  Swiggy Corporate
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/swiggy-instamart"
                  rel="nofollow noopener"
                  alt=""
                  target="_blank"
                >
                  Swiggy Instamart
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/swiggy-genie"
                  rel="nofollow noopener"
                  alt=""
                  target="_blank"
                >
                  Swiggy Genie
                </a>
              </li>
            </ul>
          </div>
          <div className="_2Im4A">
            <div className="T_dbb">Contact</div>
            <ul className="_2gbMt">
              <li className="b-Hy9">
                <a className="_3TjLz" href="/support" alt="Help &amp; Support">
                  Help &amp; Support
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="https://partner-with-us.swiggy.com/onboard#/swiggy"
                  rel="nofollow noopener noreferrer"
                  alt=""
                  target="_blank"
                >
                  Partner with us
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="https://ride.swiggy.com/"
                  rel="noreferrer"
                  alt=""
                  target="_blank"
                >
                  Ride with us
                </a>
              </li>
            </ul>
          </div>
          <div className="_2Im4A">
            <div className="T_dbb">Legal</div>
            <ul className="_2gbMt">
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/terms-and-conditions"
                  alt=""
                  target="_blank"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/refund-policy"
                  alt=""
                  target="_blank"
                >
                  Refund &amp; Cancellation
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/privacy-policy"
                  alt=""
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/cookie-policy"
                  alt=""
                  target="_blank"
                >
                  Cookie Policy
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/offer-terms"
                  alt=""
                  target="_blank"
                >
                  Offer Terms
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/beware-of-phishing-and-fraud"
                  alt=""
                  target="_blank"
                >
                  Phishing &amp; Fraud
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/tnc-corporate-sm"
                  alt=""
                  target="_blank"
                >
                  Corporate – Swiggy Money Codes Terms and Conditions
                </a>
              </li>
              <li className="b-Hy9">
                <a
                  className="_3TjLz"
                  href="/tnc-corporate-discount"
                  alt=""
                  target="_blank"
                >
                  Corporate - Swiggy Discount Voucher Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="_1Jvc1">
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
              rel="noreferrer"
              alt=""
              target="_blank"
              className="AppDownloadLinks_appLink__3lQqz"
              data-testid="ios-appstore"
            >
              <img
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              rel="noreferrer"
              alt=""
              target="_blank"
              className="AppDownloadLinks_appLink__3lQqz"
              data-testid="android-playstore"
            >
              <img
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              />
            </a>
          </div>
        </div>
        <Suspense fallback={<p>loading...</p>}>
          <City />
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
          <CityLinks />
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
          <Cuisine />
        </Suspense>
        <div id="near-me-links" className="RB8ET">
          <h4 className="T_dbb">Explore Every Restaurants Near Me</h4>
          <div className="_1_sSy">
            <ul className="_1w9D3">
              <li className="_2JILy">
                <a className="_3TjLz b-Hy9" href="/restaurants-near-me">
                  explore restaurants near me
                </a>
              </li>
            </ul>
            <ul className="_1w9D3">
              <li className="_2JILy">
                <a className="_3TjLz b-Hy9" href="/best-restaurants-near-me">
                  explore top rated restaurants near me
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="_3zqGM">
          <div className="_26WmF">
            <a href="/">
              <img
                className=""
                width="142"
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
              />
            </a>
          </div>
          <div className="_2BWW_">© 2023 Swiggy</div>
          <div className="_2-f1I">
            <a
              className="_1Az3W"
              href="https://www.facebook.com/swiggy.in"
              rel="noreferrer"
              alt="facebook"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
              />
            </a>
            <a
              className="_1Az3W"
              href="https://pinterest.com/swiggyindia"
              rel="noreferrer"
              alt="pintrest"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
              />
            </a>
            <a
              className="_1Az3W"
              href="https://instagram.com/swiggyindia/"
              rel="noreferrer"
              alt="instagram"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
              />
            </a>
            <a
              className="_1Az3W"
              href="https://twitter.com/swiggy"
              rel="noreferrer"
              alt="twitter"
              target="_blank"
            >
              <img
                className=""
                width="24"
                height="24"
                alt=""
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
