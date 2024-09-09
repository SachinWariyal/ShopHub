import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { fetchProducts } from '../api/productsApi';
import './ProductDetails.css'; 
import Spinner from './Spinner'; 

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true); 
      const products = await fetchProducts();
      const selectedProduct = products.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
      setLoading(false); 
    };

    loadProduct();
  }, [id]);

  // If loading, show the spinner
  if (loading) return <Spinner />;

  // If no product is found, show a fallback message
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
