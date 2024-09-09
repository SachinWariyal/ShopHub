import  { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { fetchProducts } from '../api/productsApi';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Paginations';
import './ProductList.css';
import Spinner from './Spinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const productList = await fetchProducts();
      setProducts(productList);
      setLoading(false);
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart'); 
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Available';
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  if (loading) return <Spinner />;

  return (
    <div className="product-list-container">
      <h1>Products</h1>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                onError={handleImageError}
              />
              <h2>{product.title}</h2>
            </Link>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductList;
