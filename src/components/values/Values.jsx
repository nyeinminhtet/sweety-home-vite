import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Values.css";
import data from "../../utils/accordion";

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="innerWidth flexCenter paddings v-container">
        {/* left side */}
        <div className="v-left">
          <div className="img-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="v-right flexColStart">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value that We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItems ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className="Buttons flexCenter"
                      style={{ justifyContent: "space-between" }}
                    >
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="icon flexCenter">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
