import "./FirstView.css";
import {} from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export const FirstView = () => {
  return (
    <section className="f-wrapper">
      <div
        className="f-container flexCenter paddings innerWidth"
        style={{ justifyContent: "space-around", alignItems: "flex-start" }}
      >
        {/*left  section */}
        <div className="f-left flexColStart">
          <div className="f-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Most Sutiable <br /> Property
            </motion.h1>
          </div>
          <div className="f-des flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easility
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div
            className="flexCenter stats"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1800} end={2500} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={2000} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Our Customers</span>
            </div>{" "}
            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} duration={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Wining</span>
            </div>
          </div>
        </div>
        {/*right  section */}
        <div className="f-right flexCenter">
          <motion.div
            className="img-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
