import React from "react";
import prodimg from "../assets/amazoncart-feat.png";
import freedelivery from "../assets/truck.svg";
import cod from "../assets/alipay.svg";
import servicecenter from "../assets/servicecenter.svg";
import warranty from "../assets/shield-check.svg";
import securepayment from "../assets/shield-lock.svg";

const ViewProduct = () => {
  return (
    <div>
      <div className="containers">
        <div className="productsview my-4 py-4" style={{display:'grid',gridTemplateColumns:'auto auto auto auto'}}>
          <div className="image-list" style={{width:'100%',textAlign:'center'}}>
            <div className="stockimg">
              <img src={freedelivery} alt="..." srcSet="" />
            </div>
            <div className="stockimg">
              <img src={freedelivery} alt="..." srcSet="" />
            </div>
            <div className="stockimg">
              <img src={freedelivery} alt="..." srcSet="" />
            </div>
            <div className="stockimg">
              <img src={freedelivery} alt="..." srcSet="" />
            </div>
            <div className="stockimg">
              <img src={freedelivery} alt="..." srcSet="" />
            </div>
            <div className="stockimg">
              <img src={freedelivery} alt="..." srcSet="" />
            </div>
          </div>

          <div className="product-images">
            <div>
              <img src={prodimg} alt="" srcSet="" />
            </div>
          </div>

          <div className="product-descriptions">
            <div className="prod-title">
              <p>
                Redmi 12 5G (Moonstone Silver, 6GB 128GB) India's 1st Snapdragon
                4 Gen 2
              </p>
              <div>*****</div>
            </div>

            <div className="prod-price">
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vitae sunt deserunt molestiae, totam veniam culpa exercitationem quam dicta corporis obcaecati ipsum asperiores magnam iusto adipisci laborum facilis sequi quisquam.</span>
            </div>

            <div className="prod-feature d-grid" style={{gridTemplateColumns: "20% 20% 20% 20% 20%",gridAutoRows: "50px"}}>
              <div>
                <img
                  src={freedelivery}
                  // style={{ transform: "perspective(400px) rotateY(180deg)" }}
                  alt="..."
                  srcSet=""
                />
                <p>Free Delivery</p>
              </div>
              <div>-
                <img src={cod} alt="" srcSet="" />
                <p>Pay on Delivery</p>
              </div>
              <div>
                <img src={servicecenter} alt="" srcSet="" />
                <p>7 Days garentee service center replacement</p>
              </div>
              <div>
                <img src={warranty} alt="" srcSet="" />
                <p>1 Year Warranty</p>
              </div>
              <div>
                <img src={securepayment} alt="" srcSet="" />
                <p>Secured Payments</p>
              </div>
            </div>
          </div>

          <div className="addtocartoptions">
            <div>
              <button className="btn btn-primary addtocart">
                Add to cart
              </button>
              <button className="btn btn-primary buynou">
                Buy Now

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
