# EduMarket - Sàn thương mại điện tử giáo dục

Dự án website thương mại điện tử cho các khóa học online với tính năng AI gợi ý.

## Chức năng

- Hiển thị danh sách khóa học
- Tìm kiếm và lọc theo danh mục, giá
- Gợi ý khóa học bằng AI
- Quản lý yêu thích
- Lịch sử xem
- Chatbot AI tư vấn

## Công nghệ sử dụng

- React 18
- Vite
- CSS3
- Lucide Icons
- React Router DOM
- Axios

## Yêu cầu hệ thống

- Node.js >= 16.0.0
- npm >= 8.0.0 hoặc yarn >= 1.22.0

## Cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/hugn2k4/DemoEduMarket.git
```

### 2. Cài đặt dependencies

```bash
npm install
```

hoặc nếu sử dụng yarn:

```bash
yarn install
```

### 3. Chạy development server

```bash
npm run dev
```

hoặc:

```bash
yarn dev
```

Ứng dụng sẽ chạy trên: **http://localhost:5173**

### 4. Build cho production

```bash
npm run build
```

hoặc:

```bash
yarn build
```

File build sẽ được tạo trong thư mục `dist/`

### 5. Preview build production

```bash
npm run preview
```

hoặc:

```bash
yarn preview
```

### 6. Lint code

```bash
npm run lint
```

hoặc:

```bash
yarn lint
```

## Scripts có sẵn

| Script | Mô tả |
|--------|-------|
| `npm run dev` | Chạy development server với hot reload |
| `npm run build` | Build ứng dụng cho production |
| `npm run preview` | Preview bản build production |
| `npm run lint` | Kiểm tra lỗi code với ESLint |

## Deploy

### Deploy tự động
Sau khi build, upload thư mục `dist/` lên hosting (Netlify, Vercel, v.v.)

### Deploy với Netlify
1. Build project: `npm run build`
2. Drag & drop thư mục `dist/` vào Netlify
3. Hoặc kết nối với Git repository

### Deploy với Vercel
```bash
npm install -g vercel
vercel --prod
```

## Tính năng

### Trang chủ
- Hiển thị danh sách khóa học với ảnh, giá, mô tả
- Thanh tìm kiếm 
- Bộ lọc danh mục và giá
- Nút gợi ý AI

### Yêu thích
- Thêm/xóa khóa học yêu thích
- Lưu vào localStorage

### Lịch sử
- Theo dõi khóa học đã xem
- Tự động lưu khi click vào khóa học

### AI Chatbot
- Tư vấn khóa học
- Hỗ trợ tiếng Việt

## Cấu trúc thư mục

```
src/
├── components/     # Components UI
│   ├── Header.jsx/css           # Header navigation
│   ├── ProductCard.jsx/css      # Card hiển thị khóa học
│   ├── ProductGrid.jsx/css      # Lưới sản phẩm
│   ├── ProductModal.jsx/css     # Modal chi tiết khóa học  
│   ├── FilterBar.jsx/css        # Thanh lọc tìm kiếm
│   └── AIChatbot.jsx/css        # Chatbot AI
├── pages/          # Các trang chính
│   ├── HomePage.jsx             # Trang chủ
│   ├── FavoritesPage.jsx        # Trang yêu thích
│   └── HistoryPage.jsx          # Trang lịch sử
├── context/        # State management
│   └── AppContext.jsx           # Context quản lý state toàn cục
├── hooks/          # Custom hooks
│   └── useApp.js                # Hook sử dụng AppContext
├── data/           # Mock data
│   └── mockData.js              # Dữ liệu mẫu khóa học
└── assets/         # Tài nguyên tĩnh
```

## Lưu ý

- Dự án sử dụng mock data, không kết nối database thật
- AI chatbot chỉ là UI demo, chưa tích hợp API thật
- Responsive design hỗ trợ mobile và desktop
- State được lưu trong localStorage (favorites, history)

## Troubleshooting

### Port đã được sử dụng
Nếu port 5173 đã được sử dụng, Vite sẽ tự động chọn port khác và hiển thị trong terminal.

### Lỗi dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Lỗi build
Kiểm tra lỗi lint trước:
```bash
npm run lint
```

## Liên hệ

Nếu có vấn đề hoặc đóng góp, vui lòng tạo issue hoặc pull request.
