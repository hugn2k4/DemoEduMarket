import React from 'react';
import { useApp } from '../hooks/useApp';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  const { filteredProducts, aiSuggestions, isLoadingSuggestions } = useApp();

  return (
    <div className="page">
      <div className="container">
        <FilterBar />
        
        {aiSuggestions.length > 0 && (
          <div className="ai-suggestions">
            <h2>🤖 Gợi ý dành riêng cho bạn</h2>
            <ProductGrid products={aiSuggestions} isLoading={isLoadingSuggestions} />
            <hr style={{ margin: '2rem 0', border: 'none', height: '1px', background: '#e5e7eb' }} />
          </div>
        )}

        <div className="main-products">
          <h2>📚 Tất cả khóa học</h2>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
