import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import HistoryPage from './pages/HistoryPage';
import ProductModal from './components/ProductModal';
import AIChatbot from './components/AIChatbot';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'favorites':
        return <FavoritesPage />;
      case 'history':
        return <HistoryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppProvider>
      <div className="app">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="main-content">
          {renderCurrentPage()}
        </main>
        <ProductModal />
        <AIChatbot />
      </div>
    </AppProvider>
  );
}

export default App;
