import React, { createContext, useReducer, useEffect } from 'react';
import { mockProducts, getAISuggestions } from '../data/mockData';

// Initial state
const initialState = {
  products: mockProducts,
  filteredProducts: mockProducts,
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  viewHistory: JSON.parse(localStorage.getItem('viewHistory') || '[]'),
  searchTerm: '',
  selectedCategory: 'Tất cả',
  selectedPriceRange: 'all',
  aiSuggestions: [],
  isLoadingSuggestions: false,
  selectedProduct: null,
  showProductModal: false,
  chatMessages: [],
  isChatOpen: false
};

// Action types
const ACTIONS = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_PRICE_RANGE: 'SET_PRICE_RANGE',
  FILTER_PRODUCTS: 'FILTER_PRODUCTS',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  ADD_TO_VIEW_HISTORY: 'ADD_TO_VIEW_HISTORY',
  SET_AI_SUGGESTIONS: 'SET_AI_SUGGESTIONS',
  SET_LOADING_SUGGESTIONS: 'SET_LOADING_SUGGESTIONS',
  SHOW_PRODUCT_MODAL: 'SHOW_PRODUCT_MODAL',
  HIDE_PRODUCT_MODAL: 'HIDE_PRODUCT_MODAL',
  ADD_CHAT_MESSAGE: 'ADD_CHAT_MESSAGE',
  TOGGLE_CHAT: 'TOGGLE_CHAT',
  CLEAR_CHAT: 'CLEAR_CHAT'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    
    case ACTIONS.SET_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    
    case ACTIONS.SET_PRICE_RANGE:
      return { ...state, selectedPriceRange: action.payload };
    
    case ACTIONS.FILTER_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    
    case ACTIONS.ADD_TO_FAVORITES: {
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return { ...state, favorites: newFavorites };
    }
    
    case ACTIONS.REMOVE_FROM_FAVORITES: {
      const updatedFavorites = state.favorites.filter(id => id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    }
    
    case ACTIONS.ADD_TO_VIEW_HISTORY: {
      const productId = action.payload;
      const updatedHistory = [productId, ...state.viewHistory.filter(id => id !== productId)].slice(0, 20);
      localStorage.setItem('viewHistory', JSON.stringify(updatedHistory));
      return { ...state, viewHistory: updatedHistory };
    }
    
    case ACTIONS.SET_AI_SUGGESTIONS:
      return { ...state, aiSuggestions: action.payload };
    
    case ACTIONS.SET_LOADING_SUGGESTIONS:
      return { ...state, isLoadingSuggestions: action.payload };
    
    case ACTIONS.SHOW_PRODUCT_MODAL:
      return { ...state, selectedProduct: action.payload, showProductModal: true };
    
    case ACTIONS.HIDE_PRODUCT_MODAL:
      return { ...state, selectedProduct: null, showProductModal: false };
    
    case ACTIONS.ADD_CHAT_MESSAGE:
      return { ...state, chatMessages: [...state.chatMessages, action.payload] };
    
    case ACTIONS.TOGGLE_CHAT:
      return { ...state, isChatOpen: !state.isChatOpen };
    
    case ACTIONS.CLEAR_CHAT:
      return { ...state, chatMessages: [] };
    
    default:
      return state;
  }
};

// Create context
export const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Filter products effect
  useEffect(() => {
    let filtered = mockProducts;

    // Filter by search term
    if (state.searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (state.selectedCategory !== 'Tất cả') {
      filtered = filtered.filter(product => product.category === state.selectedCategory);
    }

    // Filter by price range
    if (state.selectedPriceRange !== 'all') {
      const priceRanges = {
        'under-500k': { min: 0, max: 500000 },
        '500k-1m': { min: 500000, max: 1000000 },
        'over-1m': { min: 1000000, max: Infinity }
      };
      const range = priceRanges[state.selectedPriceRange];
      if (range) {
        filtered = filtered.filter(product => product.price >= range.min && product.price < range.max);
      }
    }

    dispatch({ type: ACTIONS.FILTER_PRODUCTS, payload: filtered });
  }, [state.searchTerm, state.selectedCategory, state.selectedPriceRange]);

  // Actions
  const setSearchTerm = (term) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TERM, payload: term });
  };

  const setCategory = (category) => {
    dispatch({ type: ACTIONS.SET_CATEGORY, payload: category });
  };

  const setPriceRange = (range) => {
    dispatch({ type: ACTIONS.SET_PRICE_RANGE, payload: range });
  };

  const addToFavorites = (productId) => {
    dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: productId });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: productId });
  };

  const addToViewHistory = (productId) => {
    dispatch({ type: ACTIONS.ADD_TO_VIEW_HISTORY, payload: productId });
  };

  const getAIRecommendations = async () => {
    dispatch({ type: ACTIONS.SET_LOADING_SUGGESTIONS, payload: true });
    
    // Simulate API call delay
    setTimeout(() => {
      const suggestions = getAISuggestions('user123', state.viewHistory, state.favorites);
      dispatch({ type: ACTIONS.SET_AI_SUGGESTIONS, payload: suggestions });
      dispatch({ type: ACTIONS.SET_LOADING_SUGGESTIONS, payload: false });
    }, 1500);
  };

  const showProductDetails = (product) => {
    addToViewHistory(product.id);
    dispatch({ type: ACTIONS.SHOW_PRODUCT_MODAL, payload: product });
  };

  const hideProductDetails = () => {
    dispatch({ type: ACTIONS.HIDE_PRODUCT_MODAL });
  };

  const addChatMessage = (message) => {
    dispatch({ type: ACTIONS.ADD_CHAT_MESSAGE, payload: message });
  };

  const toggleChat = () => {
    dispatch({ type: ACTIONS.TOGGLE_CHAT });
  };

  const clearChat = () => {
    dispatch({ type: ACTIONS.CLEAR_CHAT });
  };

  const value = {
    ...state,
    setSearchTerm,
    setCategory,
    setPriceRange,
    addToFavorites,
    removeFromFavorites,
    addToViewHistory,
    getAIRecommendations,
    showProductDetails,
    hideProductDetails,
    addChatMessage,
    toggleChat,
    clearChat
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
