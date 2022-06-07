import React from "react";
import "./product.css";
import Card from "../card/Card";

function Product() {
  return (
    <div className="product">
      <div className="first_row row">
        <div className="col-lg-6">
          <Card
            key={1}
            id={143983422}
            title={
              "Rich Dad Poor Dad: Thoughts about money and investing, What the Rich Teach their Kids About Money That The Poor And Middle Class Do Not!"
            }
            value={2000.32}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51fbpKt3-JL._SX331_BO1,204,203,200_.jpg"
            }
          />
        </div>
        <div className="col-lg-6">
          <Card
            key={2}
            id={332493479}
            title={
              "Mivi DuoPods A25 True Wireless Earbuds with 40Hours Battery, 13mm Bass Drivers & Made in India. Bluetooth Wireless Ear Buds with Immersive Sound Quality."
            }
            value={21}
            rating={2}
            image={
              "https://m.media-amazon.com/images/I/61d4hVRb+dS._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
        </div>
      </div>
      <div className="second_row row">
        <div className="col-lg-4">
          <Card
            key={3}
            id={154789642}
            title={"Apple iPhone 12 (128GB) - White"}
            value={22}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/711wsjBtWeL._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
        </div>
        <div className="col-lg-4">
          <Card
            key={4}
            id={215974652}
            title={"Apple Clear Case with Magsafe (for iPhone 12 Mini)"}
            value={23}
            rating={4}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/714xPCYlacL._AC_UL160_SR160,160_.jpg"
            }
          />
        </div>
        <div className="col-lg-4">
          <Card
            key={5}
            id={125874626}
            title={
              "13 Exercise Modes,Blood Oxygen Saturation (SpO2),Heart Rate tracker."
            }
            value={24}
            rating={3}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/71X8NdnCsvL._AC_UL450_SR450,320_.jpg"
            }
          />
        </div>
        <div className="third_row row">
          <Card
            key={6}
            id={210365087}
            title={
              "AmazonBasics 127cm (50 inch) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black)"
            }
            value={25}
            rating={2}
            image={
              "https://m.media-amazon.com/images/I/71YTwU1IexL._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
