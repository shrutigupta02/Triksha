export default function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <p className="product title">{product.name}</p>
    </div>
  );
}
