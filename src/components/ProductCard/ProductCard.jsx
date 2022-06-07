import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, price, image, type } = product;
  return (
    <div className="card-product shadow">
      <img className="card-product__img" src={image} alt={name} />
      <div className="card-product__texts">
        <p className="card-product__text">
          Nombre: <span>{name}</span>
        </p>
        <p className="card-product__text">
          Precio: <span>${price}</span>
        </p>
        <p className="card-product__text">
          Tipo: <span>{type}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
