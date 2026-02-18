import React from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Şık Kapatma Çarpısı */}
        <button 
          onClick={onClose} 
          style={{position:'absolute', top:'20px', right:'20px', border:'none', background:'#f5f5f7', width:'35px', height:'35px', borderRadius:'50%', cursor:'pointer', fontSize:'16px'}}
        >
          ✕
        </button>
        
        <div className="modal-left">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-right">
          <span style={{color:'#bf4800', fontWeight:'600', fontSize:'12px'}}>YENİ</span>
          <h2 style={{fontSize: '32px', margin: '10px 0'}}>{product.name}</h2>
          <p style={{color: '#86868b', lineHeight: '1.5', marginBottom: '25px'}}>{product.description}</p>
          
          <div style={{fontSize: '24px', fontWeight: '600', marginBottom: '25px'}}>
            {product.price.toLocaleString('tr-TR')} TL
          </div>

          <button 
            className="buy-btn" 
            style={{background:'#0066cc', color:'white', border:'none', padding:'12px 30px', borderRadius:'25px', cursor:'pointer', fontWeight:'500'}}
            onClick={() => { onAddToCart(product); onClose(); }}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;