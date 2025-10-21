import Card from "../Components/Card";
import yellow from "../assets/yellow.jpg";
import pink from "../assets/pink.jpg";
import tanshui from "../assets/tanshui.jpg";

export default function Collection() {
  const products = [
    {
      name: "Pink Corset Lehenga Co-Ord",
      image: pink,
    },
    {
      name: "Yellow Tanshui Gown",
      image: yellow,
    },
    {
      name: "Fuschia Tanshui Gown",
      image: tanshui,
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
