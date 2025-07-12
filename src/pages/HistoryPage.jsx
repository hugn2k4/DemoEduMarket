import React from 'react';
import { useApp } from '../hooks/useApp';
import ProductGrid from '../components/ProductGrid';
import { mockProducts } from '../data/mockData';

const HistoryPage = () => {
  const { viewHistory } = useApp();
  
  const historyProducts = viewHistory.map(productId => 
    mockProducts.find(product => product.id === productId)
  ).filter(Boolean);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <h1>🕒 Lịch sử xem</h1>
          <p>Những khóa học bạn đã xem gần đây</p>
        </div>

        {historyProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📖</div>
            <h3>Chưa có lịch sử xem nào</h3>
            <p>Hãy khám phá các khóa học để xem lịch sử của bạn ở đây!</p>
          </div>
        ) : (
          <ProductGrid products={historyProducts} />
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
