import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, isLoading = false }) => {
  const renderSkeletonCards = () => {
    return Array.from({ length: 8 }, (_, index) => (
      <div key={`skeleton-${index}`} className="product-card-skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-line"></div>
          <div className="skeleton-line short"></div>
          <div className="skeleton-line medium"></div>
          <div className="skeleton-line short"></div>
        </div>
      </div>
    ));
  };

  if (isLoading) {
    return (
      <div className="product-grid">
        {renderSkeletonCards()}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>
        <h3>Không tìm thấy khóa học nào</h3>
        <p>Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
