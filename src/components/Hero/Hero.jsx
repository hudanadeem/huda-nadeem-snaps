import "./Hero.scss";

const Hero = ({drawerOpen}) => {
  return (
    <div className={`hero ${drawerOpen ? "hero--active" : ""}`}>
      <p className="hero__title">Our mission:</p>
      <h2 className="hero__content">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,{" "}
        <span className="hero__content--italic">
          expressed in their unique style.
        </span>
      </h2>
    </div>
  );
};

export default Hero;
