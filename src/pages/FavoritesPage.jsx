import React from 'react';
import { useApp } from '../hooks/useApp';
import ProductGrid from '../components/ProductGrid';
import { mockProducts } from '../data/mockData';

const FavoritesPage = () => {
  const { favorites } = useApp();
  
  const favoriteProducts = mockProducts.filter(product => 
    favorites.includes(product.id)
  );

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>❤️ Khóa học yêu thích</h1>
          <p>Những khóa học bạn đã đánh dấu yêu thích</p>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💔</div>
            <h3>Chưa có khóa học yêu thích nào</h3>
            <p>Hãy khám phá và thêm những khóa học bạn quan tâm vào danh sách yêu thích!</p>
          </div>
        ) : (
          <ProductGrid products={favoriteProducts} />
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
