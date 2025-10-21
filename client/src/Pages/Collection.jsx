import Card from "../Components/Card";

export default function Collection() {
  const products = [
    {
      name: "Pink Corset Lehenga Co-Ord",
      image: "src/assets/pink.jpg",
    },
    {
      name: "Yellow Tanshui Gown",
      image: "src/assets/yellow.jpg",
    },
    {
      name: "Fuschia Tanshui Gown",
      image: "src/assets/tanshui.jpg",
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
