import { useState } from "react";
import Button from "../../components/Button";
import ProductList from "../../components/ProductList";
import Title from "../../components/Title";
import { data } from "../../data/data";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => setProducts(data);

  return (
    <>
      <div className="container mt-3">
        <Button action={getProducts}>Listar</Button>

        <Title align="center" transorm="uppercase">
          {products.length > 0 ? "Productos" : "Sin Productos"}
        </Title>

        <section className="grid mt-3">
          <ProductList products={products} />
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
