import React from 'react';
import { Filter, Sparkles } from 'lucide-react';
import { useApp } from '../hooks/useApp';
import { categories, priceRanges } from '../data/mockData';
import './FilterBar.css';

const FilterBar = () => {
  const {
    selectedCategory,
    selectedPriceRange,
    setCategory,
    setPriceRange,
    getAIRecommendations,
    isLoadingSuggestions,
    filteredProducts
  } = useApp();

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <div className="filter-group">
          <div className="filter-label">
            <Filter size={16} />
            Danh mục
          </div>
          <div className="filter-options">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-option ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <div className="filter-label">Giá</div>
          <div className="filter-options">
            {priceRanges.map(range => (
              <button
                key={range.id}
                className={`filter-option ${selectedPriceRange === range.id ? 'active' : ''}`}
                onClick={() => setPriceRange(range.id)}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="ai-section">
        <button
          className={`ai-button ${isLoadingSuggestions ? 'loading' : ''}`}
          onClick={getAIRecommendations}
          disabled={isLoadingSuggestions}
        >
          <Sparkles size={16} />
          {isLoadingSuggestions ? 'Đang phân tích...' : 'Gợi ý AI cho bạn'}
        </button>
      </div>

      <div className="results-count">
        Tìm thấy {filteredProducts.length} khóa học
      </div>
    </div>
  );
};

export default FilterBar;
