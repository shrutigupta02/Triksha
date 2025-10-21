import portrait from "../assets/portrait.jpg";
import machine from "../assets/machine.jpg";
import invite from "../assets/invite.jpg";

export default function AboutUs() {
  return (
    <div className="aboutus">
      <h2>Behind the screens</h2>
      <div className="aboutus-container">
        <img src={portrait} />
        <div className="aboutus-paragraph">
          <p>
            Triksha was founded by Priyanka Gupta, alongside her daughter, to
            honor their shared passion for Indian Ethnicwear. With over a decade
            of being closely aligned with this industry, Priyanka brings a
            vision and zeal that only flies higher.
            <br></br>
            <br></br>
            More than just a business, Triksha is a celebration of heritage
            passed down through generations. We believe that true luxury lies in
            the stories woven into every thread and the confident joy a woman
            feels when she embraces her culture.
          </p>
        </div>
      </div>
      <div className="aboutus-container">
        <img src={machine} />
        <div className="aboutus-paragraph">
          <h2>Our Promises</h2>
          <p>
            As a new venture, Triksha is committed to redefining modern Indian
            wear. We meticulously hand-select fabrics to ensure every lehenga,
            saree, and ensemble is a timeless piece of art. Our designs fuse
            traditional silhouettes with a contemporary aesthetic, making them
            perfect for the modern woman who cherishes her roots.
            <br />
            <br />
            We don't just sell clothes; we offer statement pieces built on the
            foundation of intricate embroidery, superior fit, and enduring
            quality.
          </p>
        </div>
      </div>
      <div className="aboutus-container">
        <img src={invite} />
        <div className="aboutus-paragraph">
          <h2>Join the Triksha Journey</h2>
          <p>
            Though our story is just beginning, our vision is vast: to become a
            leading voice in Indian luxury fashion. We are building this brand
            for you and with you. We invite you to explore our upcoming
            collection and experience the dedication that goes into every
            stitch. Thank you for trusting us to be a part of your most
            treasured moments.
          </p>
        </div>
      </div>
    </div>
  );
}
