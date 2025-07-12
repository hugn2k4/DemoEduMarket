import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { useApp } from '../hooks/useApp';
import { mockProducts } from '../data/mockData';
import './AIChatbot.css';

const AIChatbot = () => {
  const { isChatOpen, toggleChat, chatMessages, addChatMessage, clearChat } = useApp();
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Simple AI logic for educational product recommendations
    if (message.includes('react') || message.includes('javascript')) {
      const reactCourses = mockProducts.filter(p => 
        p.name.toLowerCase().includes('react') || 
        p.name.toLowerCase().includes('javascript')
      );
      if (reactCourses.length > 0) {
        return `Tôi khuyên bạn nên xem khóa học "${reactCourses[0].name}" - ${reactCourses[0].description}. Giá chỉ ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(reactCourses[0].price)}!`;
      }
    }
    
    if (message.includes('python') || message.includes('data science')) {
      const pythonCourses = mockProducts.filter(p => 
        p.name.toLowerCase().includes('python') || 
        p.category === 'Data Science'
      );
      if (pythonCourses.length > 0) {
        return `Để học Python và Data Science, tôi gợi ý khóa "${pythonCourses[0].name}". Khóa này có rating ${pythonCourses[0].rating}/5 và đã có ${pythonCourses[0].students.toLocaleString()} học viên!`;
      }
    }
    
    if (message.includes('design') || message.includes('ui') || message.includes('ux')) {
      const designCourses = mockProducts.filter(p => p.category === 'Design');
      if (designCourses.length > 0) {
        return `Cho thiết kế UI/UX, tôi khuyên bạn khóa "${designCourses[0].name}". Khóa này sẽ giúp bạn thành thạo các công cụ thiết kế chuyên nghiệp!`;
      }
    }
    
    if (message.includes('marketing') || message.includes('digital')) {
      const marketingCourses = mockProducts.filter(p => p.category === 'Marketing');
      if (marketingCourses.length > 0) {
        return `Về digital marketing, "${marketingCourses[0].name}" là lựa chọn tuyệt vời! Bạn sẽ học được SEO, social media marketing và nhiều kỹ năng khác.`;
      }
    }
    
    if (message.includes('tiếng anh') || message.includes('english')) {
      const languageCourses = mockProducts.filter(p => p.category === 'Language');
      if (languageCourses.length > 0) {
        return `Để cải thiện tiếng Anh, hãy thử "${languageCourses[0].name}". Khóa học này có giảng viên người Mỹ bản địa và tập trung vào kỹ năng speaking!`;
      }
    }
    
    if (message.includes('giá rẻ') || message.includes('cheap') || message.includes('budget')) {
      const cheapCourses = mockProducts.sort((a, b) => a.price - b.price).slice(0, 2);
      return `Các khóa học giá tốt mà tôi khuyên: "${cheapCourses[0].name}" (${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cheapCourses[0].price)}) và "${cheapCourses[1].name}" (${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cheapCourses[1].price)})`;
    }
    
    if (message.includes('người mới') || message.includes('beginner') || message.includes('cơ bản')) {
      const beginnerCourses = mockProducts.filter(p => p.level.includes('Beginner'));
      if (beginnerCourses.length > 0) {
        return `Cho người mới bắt đầu, tôi gợi ý "${beginnerCourses[0].name}". Khóa này được thiết kế đặc biệt cho người chưa có kinh nghiệm!`;
      }
    }
    
    // Default responses
    const defaultResponses = [
      "Tôi có thể giúp bạn tìm khóa học phù hợp! Bạn quan tâm đến lĩnh vực nào? (React, Python, Design, Marketing, Tiếng Anh...)",
      "Hãy cho tôi biết bạn muốn học gì? Tôi sẽ gợi ý những khóa học tốt nhất cho bạn!",
      "Bạn có thể hỏi tôi về các khóa học Programming, Design, Marketing, Data Science, hay Language đều được!",
      "Tôi có thể giúp bạn tìm khóa học theo budget, trình độ, hoặc theo chủ đề cụ thể. Bạn cần tư vấn gì?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    addChatMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: getAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      addChatMessage(aiResponse);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isChatOpen) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <Bot size={24} />
          <div>
            <h3>AI Tư vấn khóa học</h3>
            <span>Luôn sẵn sàng hỗ trợ bạn</span>
          </div>
        </div>
        <div className="chatbot-controls">
          <button onClick={clearChat} className="clear-button">
            Xóa chat
          </button>
          <button onClick={toggleChat} className="close-button">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="chatbot-messages">
        {chatMessages.length === 0 && (
          <div className="welcome-message">
            <Bot size={32} />
            <p>Xin chào! Tôi là AI tư vấn khóa học. Hãy hỏi tôi về bất kỳ khóa học nào bạn quan tâm!</p>
            <div className="suggested-questions">
              <button onClick={() => setInputValue("Tôi muốn học React")}>
                Tôi muốn học React
              </button>
              <button onClick={() => setInputValue("Khóa học nào phù hợp cho người mới?")}>
                Khóa học cho người mới
              </button>
              <button onClick={() => setInputValue("Tôi cần học tiếng Anh")}>
                Học tiếng Anh
              </button>
            </div>
          </div>
        )}

        {chatMessages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-avatar">
              {message.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString('vi-VN', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message ai">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Hỏi tôi về khóa học bạn quan tâm..."
          disabled={isTyping}
        />
        <button 
          onClick={handleSendMessage} 
          disabled={!inputValue.trim() || isTyping}
          className="send-button"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
