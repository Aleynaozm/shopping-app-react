import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <article className="card" onClick={() => onClick(product)}>
      {/* Üst Kısım: Ürün Görseli */}
      <div className="card-image-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Alt Kısım: Ürün Bilgileri */}
      <div className="card-body">
        <span className="category-tag">{product.category}</span>
        <h2 className="card-title">{product.name}</h2>
        <div className="card-price">
          {product.price.toLocaleString('tr-TR')} TL
        </div>
      </div>
    </article>
  );
};

export default ProductCard;