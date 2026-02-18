import { useState, useEffect } from 'react';
import './App.css';
import productsData from './data/products.json';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="apple-app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Apple Market</div>
          <div className="nav-menu">
            <span>Mağaza</span><span>Mac</span><span>iPhone</span><span>iPad</span><span>AirPods</span><span>Destek</span>
          </div>
          <div className="nav-cart">
            <div className="cart-icon-container">
              <span>🛒</span>
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </div>
            <div className="cart-dropdown">
              <h3 style={{fontSize: '16px', marginBottom: '10px'}}>Sepetiniz</h3>
              {cart.length === 0 ? <p style={{fontSize: '12px', color: '#999'}}>Sepet boş</p> : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} style={{display:'flex', justifyContent:'space-between', fontSize:'12px', marginBottom: '5px'}}>
                      <span>{item.name}</span><span>{item.price.toLocaleString()} TL</span>
                    </div>
                  ))}
                  <div style={{borderTop:'1px solid #eee', marginTop:'10px', paddingTop:'10px', fontWeight:'bold'}}>
                    Toplam: {totalPrice.toLocaleString()} TL
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="main-container">
        <header className="page-header">
          <h1>Mağaza. <span style={{color: '#86868b'}}>Sevdiğiniz ürünlere ulaşmanın en iyi yolu.</span></h1>
        </header>
        <div className="product-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} onClick={setSelectedProduct} />
          ))}
        </div>
      </main>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;