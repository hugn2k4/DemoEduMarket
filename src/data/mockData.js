// Dữ liệu mẫu cho các khóa học
export const mockProducts = [
  {
    id: 1,
    name: "Khóa học React từ cơ bản đến nâng cao",
    price: 599000,
    originalPrice: 899000,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    description: "Học React từ cơ bản, hooks, context, Redux",
    fullDescription: "Khóa học React đầy đủ từ cơ bản đến nâng cao. Bao gồm hooks, context, Redux, testing và các best practices. Phù hợp cho người mới và dev có kinh nghiệm muốn nâng cao kỹ năng React.",
    category: "Programming",
    instructor: "Nguyễn Văn A",
    rating: 4.8,
    students: 12453,
    duration: "24 giờ",
    level: "Cơ bản đến Nâng cao",
    features: ["24 giờ video", "Source code", "Chứng chỉ", "Truy cập trọn đời"]
  },
  {
    id: 2,
    name: "JavaScript nâng cao và ES6+",
    price: 450000,
    originalPrice: 650000,
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
    description: "Tìm hiểu sâu về JavaScript hiện đại",
    fullDescription: "Học các concept nâng cao của JavaScript bao gồm closures, prototypes, async programming, ES6+ features và performance optimization.",
    category: "Programming",
    instructor: "Trần Thị B",
    rating: 4.9,
    students: 8765,
    duration: "18 giờ",
    level: "Trung cấp đến Nâng cao",
    features: ["18 giờ video", "Bài tập thực hành", "Code challenges", "Hỗ trợ Q&A"]
  },
  {
    id: 3,
    name: "UI/UX Design cơ bản",
    price: 399000,
    originalPrice: 599000,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    description: "Học thiết kế UI/UX từ cơ bản",
    fullDescription: "Khóa học UI/UX design toàn diện bao gồm design principles, user research, wireframing, prototyping và các tool như Figma, Adobe XD.",
    category: "Design",
    instructor: "Lê Văn C",
    rating: 4.7,
    students: 9876,
    duration: "20 giờ",
    level: "Cơ bản",
    features: ["Template design", "File Figma", "Project thực tế", "Review thiết kế"]
  },
  {
    id: 4,
    name: "Python cho Data Science",
    price: 699000,
    originalPrice: 999000,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
    description: "Làm chủ Python để phân tích dữ liệu và machine learning",
    fullDescription: "Khóa học Python data science đầy đủ với NumPy, Pandas, Matplotlib, Scikit-learn và các project phân tích dữ liệu thực tế.",
    category: "Data Science",
    instructor: "TS. Phạm Thị D",
    rating: 4.9,
    students: 15678,
    duration: "30 giờ",
    level: "Cơ bản đến Trung cấp",
    features: ["Jupyter notebooks", "Dataset thực tế", "ML projects", "Tư vấn career"]
  },
  {
    id: 5,
    name: "Digital Marketing toàn diện",
    price: 349000,
    originalPrice: 499000,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description: "Hướng dẫn digital marketing từ A-Z",
    fullDescription: "Học SEO, social media marketing, content marketing, email marketing và quảng cáo trả phí để phát triển business online.",
    category: "Marketing",
    instructor: "Hoàng Văn E",
    rating: 4.6,
    students: 7890,
    duration: "16 giờ",
    level: "Cơ bản",
    features: ["Template marketing", "Case studies", "Tools & resources", "Cộng đồng"]
  },
  {
    id: 6,
    name: "React Native - Lập trình Mobile",
    price: 799000,
    originalPrice: 1199000,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    description: "Xây dựng app iOS và Android với React Native",
    fullDescription: "Khóa học React Native đầy đủ bao gồm navigation, state management, API integration và publish app lên App Store, Google Play.",
    category: "Programming",
    instructor: "Võ Thị F",
    rating: 4.8,
    students: 6543,
    duration: "28 giờ",
    level: "Trung cấp",
    features: ["Build 3 app thực tế", "Hướng dẫn publish", "Native modules", "Tối ưu performance"]
  },
  {
    id: 7,
    name: "Giao tiếp tiếng Anh cho IT",
    price: 299000,
    originalPrice: 449000,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop",
    description: "Cải thiện tiếng Anh giao tiếp trong môi trường IT",
    fullDescription: "Khóa học tiếng Anh tương tác với giảng viên bản xứ. Tập trung vào pronunciation, conversation skills và business English cho ngành IT.",
    category: "Language",
    instructor: "Michael Johnson",
    rating: 4.7,
    students: 11234,
    duration: "12 giờ",
    level: "Trung cấp",
    features: ["Live sessions", "Speaking practice", "Pronunciation guide", "Business English"]
  },
  {
    id: 8,
    name: "Nhiếp ảnh cơ bản",
    price: 249000,
    originalPrice: 399000,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    description: "Học nhiếp ảnh từ cơ bản và kỹ thuật composition",
    fullDescription: "Khóa học nhiếp ảnh cơ bản về camera, composition, ánh sáng và edit ảnh với Lightroom, Photoshop.",
    category: "Creative",
    instructor: "Lý Thị G",
    rating: 4.5,
    students: 5432,
    duration: "14 giờ",
    level: "Cơ bản",
    features: ["Bài tập chụp ảnh", "Preset edit", "Hướng dẫn thiết bị", "Review portfolio"]
  }
];

// Phạm vi giá để lọc
export const priceRanges = [
  { id: 'all', label: 'Tất cả', min: 0, max: Infinity },
  { id: 'under-500k', label: 'Dưới 500K', min: 0, max: 500000 },
  { id: '500k-1m', label: '500K - 1 triệu', min: 500000, max: 1000000 },
  { id: 'over-1m', label: 'Trên 1 triệu', min: 1000000, max: Infinity }
];

// Danh mục
export const categories = [
  'Tất cả',
  'Programming',
  'Design', 
  'Data Science',
  'Marketing',
  'Language',
  'Creative'
];

// Gợi ý AI dựa trên hành vi user
export const getAISuggestions = (userId, viewHistory = [], favorites = []) => {
  // Logic AI đơn giản dựa trên preference của user
  const viewedCategories = viewHistory.map(id => {
    const product = mockProducts.find(p => p.id === id);
    return product?.category;
  }).filter(Boolean);

  const favoriteCategories = favorites.map(id => {
    const product = mockProducts.find(p => p.id === id);
    return product?.category;
  }).filter(Boolean);

  const preferredCategories = [...new Set([...viewedCategories, ...favoriteCategories])];

  // Trả về sản phẩm từ category ưa thích
  let suggestions = mockProducts.filter(product => 
    preferredCategories.includes(product.category) && 
    !favorites.includes(product.id)
  );

  // Nếu không có preference, trả về khóa học phổ biến
  if (suggestions.length < 3) {
    suggestions = mockProducts
      .filter(product => !favorites.includes(product.id))
      .sort((a, b) => (b.rating * b.students) - (a.rating * a.students));
  }

  return suggestions.slice(0, 4);
};

// Format giá VND
export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};
