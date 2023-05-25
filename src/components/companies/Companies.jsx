import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div
        className="flexCenter innerWidth paddings c-container"
        style={{ justifyContent: "space-around" }}
      >
        <img src="./prologis.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
