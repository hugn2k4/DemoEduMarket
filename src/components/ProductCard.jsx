import React from 'react';
import { Heart, Star, Users, Clock } from 'lucide-react';
import { useApp } from '../hooks/useApp';
import { formatPrice } from '../data/mockData';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { favorites, addToFavorites, removeFromFavorites, showProductDetails } = useApp();
  const isFavorite = favorites.includes(product.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const handleCardClick = () => {
    showProductDetails(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <button 
          className={`card-favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <Heart 
            fill={isFavorite ? '#e11d48' : 'none'} 
            stroke={isFavorite ? '#e11d48' : '#6b7280'}
            strokeWidth={2}
          />
        </button>
        {product.originalPrice > product.price && (
          <div className="discount-badge">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-title">{product.name}</h3>
          <div className="product-instructor">bởi {product.instructor}</div>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-meta">
          <div className="rating">
            <Star size={16} fill="#fbbf24" color="#fbbf24" />
            <span>{product.rating}</span>
            <span className="students">
              <Users size={14} />
              {product.students.toLocaleString()}
            </span>
          </div>
          <div className="duration">
            <Clock size={14} />
            {product.duration}
          </div>
        </div>

        <div className="product-footer">
          <div className="price-container">
            <div className="current-price">{formatPrice(product.price)}</div>
            {product.originalPrice > product.price && (
              <div className="original-price">{formatPrice(product.originalPrice)}</div>
            )}
          </div>
          <div className="category-tag">{product.category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
