import Card from "../Components/Card";

export default function Collection() {
  const products = [
    {
      name: "Blue Skirt",
      image: "image-src",
    },
    {
      name: "Lehenga",
      image: "image-src",
    },
    {
      name: "Red Kurta",
      image: "image-src",
    },
  ];

  return (
    <div className="collection">
      <div className="heading">Collections</div>
      <div className="collection-container">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
