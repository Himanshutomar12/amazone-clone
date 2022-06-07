import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="link">
        <a href="https://www.amazon.com/gp/video/storefront/ref=atv_tc_prime?filterId=OFFER_FILTER=PRIME">
          Browse movies and TV shows
        </a>
      </div>
    </div>
  );
}

export default Home;
