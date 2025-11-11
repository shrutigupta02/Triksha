import Card from "../Components/Card";
import purple from "../assets/shreya.jpg";
import pink from "../assets/vinni.jpg";
import tanshui from "../assets/shivi.jpg";
import yellow from "../assets/lakshita.jpg";
import tanya from "../assets/tanya.jpg";

export default function Collection() {
  const products = [
    {
      name: "RANG Pink Lehenga Co-Ord",
      image: pink,
    },
    {
      name: "RANG Purple Lehenga",
      image: purple,
    },
    {
      name: "RANG Rani Tanshui Gown",
      image: tanshui,
    },
    {
      name: "RANG Yellow Organza Lehenga",
      image: yellow,
    },
    {
      name: "RANG Crepe Yellow Lehenga",
      image: tanya,
    },
  ];

  return (
    <div className="collection">
      <div className="heading">Collection</div>
      <div className="collection-container">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
