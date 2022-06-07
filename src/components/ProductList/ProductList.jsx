import ProductCard from "../ProductCard";

const ProductList = ({ products }) => {
  const productsList = products.map((product) => {
    return <ProductCard product={product} />;
  });

  return <>{productsList}</>;
};

export default ProductList;
