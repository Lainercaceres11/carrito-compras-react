import { data } from "../data";

export default function ProductList({
  allProduct,
  setAllProduct,
  total,
  setTotal,
  counterProduct,
  setCounterProduct,
}) {
  const onAddProduct = (product) => {
    if (allProduct.find((item) => item.id === product.id)) {
      const newProduct = allProduct.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCounterProduct(counterProduct + product.quantity);
      return setAllProduct([...newProduct]);
    }
    setCounterProduct(counterProduct + product.quantity);
    setTotal(total + product.price * product.quantity);
    setAllProduct([...allProduct, product]);
  };
  return (
    <div className="container-items">
      {data.map((product, index) => {
        return (
          <>
            <div className="items" key={index}>
              <figure>
                <img src={product.urlImage} alt={product.nameProduct} />
              </figure>
              <div className="info-product">
                <h2>{product.nameProduct}</h2>
                <p className="price">{product.price}</p>
                <button
                  className="btn-add-cart"
                  onClick={() => onAddProduct(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
