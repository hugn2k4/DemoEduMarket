import React from 'react';
import { X, Heart, Star, Users, Clock, CheckCircle } from 'lucide-react';
import { useApp } from '../hooks/useApp';
import { formatPrice } from '../data/mockData';
import './ProductModal.css';

const ProductModal = () => {
  const { 
    selectedProduct, 
    showProductModal, 
    hideProductDetails, 
    favorites, 
    addToFavorites, 
    removeFromFavorites 
  } = useApp();

  if (!showProductModal || !selectedProduct) return null;

  const isFavorite = favorites.includes(selectedProduct.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(selectedProduct.id);
    } else {
      addToFavorites(selectedProduct.id);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      hideProductDetails();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={hideProductDetails}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="modal-image-container">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              className="modal-image"
            />
            {selectedProduct.originalPrice > selectedProduct.price && (
              <div className="discount-badge">
                -{Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
              </div>
            )}
          </div>

          <div className="modal-info">
            <div className="modal-category">{selectedProduct.category}</div>
            <h2 className="modal-title">{selectedProduct.name}</h2>
            <div className="modal-instructor">Giảng viên: {selectedProduct.instructor}</div>
            
            <div className="modal-meta">
              <div className="rating">
                <Star size={18} fill="#fbbf24" color="#fbbf24" />
                <span>{selectedProduct.rating}</span>
                <span className="students">
                  <Users size={16} />
                  {selectedProduct.students.toLocaleString()} học viên
                </span>
              </div>
              <div className="duration">
                <Clock size={16} />
                {selectedProduct.duration}
              </div>
              <div className="level">
                Trình độ: {selectedProduct.level}
              </div>
            </div>

            <div className="price-section">
              <div className="current-price">{formatPrice(selectedProduct.price)}</div>
              {selectedProduct.originalPrice > selectedProduct.price && (
                <div className="original-price">{formatPrice(selectedProduct.originalPrice)}</div>
              )}
            </div>

            <div className="modal-actions">
              <button className="enroll-button">
                Đăng ký ngay
              </button>
              <button 
                className={`modal-favorite-button ${isFavorite ? 'active' : ''}`}
                onClick={handleFavoriteClick}
              >
                <Heart 
                  fill={isFavorite ? '#e11d48' : 'none'} 
                  stroke={isFavorite ? '#e11d48' : '#6b7280'}
                  strokeWidth={2}
                />
                {isFavorite ? 'Đã yêu thích' : 'Yêu thích'}
              </button>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="description-section">
            <h3>Mô tả khóa học</h3>
            <p>{selectedProduct.fullDescription}</p>
          </div>

          <div className="features-section">
            <h3>Bạn sẽ học được gì</h3>
            <ul className="features-list">
              {selectedProduct.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <CheckCircle size={16} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
