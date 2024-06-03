import { ChangeEvent, useState, useCallback } from 'react';
import styles from './ProductPage.module.css';
import { useBasket } from '../../hooks/useBasket';
import { ProductsType } from '../../data/product-type';

type ProductPagePropsType = {
  pageTitle: string;
  products: ProductsType;
  initialSelectedSize: string;
  welcomeTextOne: string | null;
  welcomeTextTwo: string | null;
};

export default function ProductPage({
  pageTitle,
  products,
  initialSelectedSize,
  welcomeTextOne,
  welcomeTextTwo,
}: ProductPagePropsType) {
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>(
    Object.keys(products).reduce((acc, key) => {
      acc[key] = initialSelectedSize;
      return acc;
    }, {} as { [key: string]: string })
  );
  const [infoID, setInfoID] = useState<string | null>(null);
  const { addToBasket } = useBasket();

  const handleChangeSize = (event: ChangeEvent<HTMLSelectElement>, id: string) => {
    setSelectedSize({
      ...selectedSize,
      [id]: event.target.value,
    });
  };

  const handleOpenInfo = (id: string) => {
    setInfoID(id);
  };

  const handleCloseInfo = () => {
    setInfoID(null);
  };

  const handleAddToBasket = useCallback(
    (id: string) => {
      const product = products[id];
      const size = selectedSize[id];
      const price = product.sizes[size.toLowerCase() as keyof typeof product.sizes].price;
      const item = {
        id: product.id,
        name: product.name,
        size,
        price,
      };

      addToBasket(item);
    },
    [products, selectedSize, addToBasket]
  );

  return (
    <section className={styles.productPage}>
      <h2 className={styles.pageTitle}>{pageTitle}</h2>
      <div className={styles.pageWelcomeText}>
        <p>{welcomeTextOne}</p>
        <p>{welcomeTextTwo}</p>
      </div>
      <div className={styles.productsContainer}>
        {Object.values(products).map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.alt} />
            <div className={styles.productCardInfo}>
              <h3 className={styles.productTitle}>{product.name}</h3>
              <div className={styles.dropdownContainer}>
                <select
                  value={selectedSize[product.id]}
                  className={styles.select}
                  onChange={event => handleChangeSize(event, product.id)}>
                  {Object.values(product.sizes).map(size => (
                    <option key={size.size} value={size.size}>
                      {size.size}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.productButtonsContainer}>
                <button className={styles.infoButton} onClick={() => handleOpenInfo(product.id)}>
                  Info
                </button>
                <button className={styles.addButton} onClick={() => handleAddToBasket(product.id)}>
                  <i className='fa-solid fa-plus'></i>
                  <p>{`£${
                    product.sizes[selectedSize[product.id].toLowerCase() as keyof typeof product.sizes].price
                  }`}</p>
                </button>
              </div>
            </div>
            {infoID === product.id && (
              <div className={styles.productInfo}>
                <p className={styles.productIngredients}>
                  <span>Ingredients:</span> {product.info.ingredients}.
                </p>
                <p className={styles.productDescription}>{product.info.description}</p>
                <button onClick={handleCloseInfo}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
