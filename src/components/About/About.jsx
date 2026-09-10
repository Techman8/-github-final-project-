import "./About.css";
import authorAvatar from "../../images/authorAvatar.jpg";

function About() {
  return (
    <section className="about">
      <img
        src={authorAvatar}
        alt="Author biography headshot portrait"
        className="about__image"
      />
      <div className="about__text-container">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          I am a full-stack web developer experienced in building responsive,
          user-friendly applications using HTML5, CSS3, JavaScript, React,
          Node.js, Express.js, and MongoDB. Through my training at TripleTen, I
          mastered writing clean, maintainable code across full-project sprints,
          debugging complex issues, and successfully integrating frontend
          interfaces with robust backend databases.
        </p>
      </div>
    </section>
  );
}

export default About;
