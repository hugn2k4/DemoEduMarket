import React from 'react';
import { Search, Heart, MessageCircle, GraduationCap } from 'lucide-react';
import { useApp } from '../hooks/useApp';
import './Header.css';

const Header = ({ currentPage, onPageChange }) => {
  const { searchTerm, setSearchTerm, favorites, toggleChat } = useApp();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo" onClick={() => onPageChange('home')}>
            <GraduationCap size={32} />
            <span>EduMarket</span>
          </div>
        </div>

        <div className="header-center">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm khóa học, giáo trình..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="header-right">
          <nav className="nav-menu">
            <button
              className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => onPageChange('home')}
            >
              Trang chủ
            </button>
            <button
              className={`nav-item ${currentPage === 'favorites' ? 'active' : ''}`}
              onClick={() => onPageChange('favorites')}
            >
              <Heart size={18} />
              Yêu thích ({favorites.length})
            </button>
            <button
              className={`nav-item ${currentPage === 'history' ? 'active' : ''}`}
              onClick={() => onPageChange('history')}
            >
              Lịch sử
            </button>
          </nav>
          
          <button className="chat-button" onClick={toggleChat}>
            <MessageCircle size={20} />
            <span>AI Tư vấn</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
