import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { MdOutlineVideoCall } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="innerWidth paddings flexCenter c-container">
        {/* left side */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            Our services is always open! Now Contact us what you want.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">012 345 6789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/* second mod */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">012 345 6789</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdOutlineVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">012 345 6789</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* second mod */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">012 345 6789</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="img-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
