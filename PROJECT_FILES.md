# 📋 Danh sách tập tin dự án

## Cấu trúc dự án hoàn chỉnh

```
d:\API/
│
├── 📄 Tập tin cấu hình
│   ├── package.json              # Quản lý dependencies
│   ├── package-lock.json         # Lock version dependencies
│   ├── vite.config.js            # Cấu hình Vite
│   ├── index.html                # HTML template
│   ├── .env.local                # Environment variables (LOCAL)
│   ├── .env.example              # Template biến môi trường
│   └── .gitignore                # Git ignore rules
│
├── 📚 Tài liệu
│   ├── README.md                 # Tài liệu chính
│   ├── QUICK_START.md            # Hướng dẫn nhanh
│   ├── OAUTH_SETUP.md            # Hướng dẫn lấy OAuth credentials
│   ├── TECHNICAL_GUIDE.md        # Hướng dẫn kỹ thuật
│   └── PROJECT_FILES.md          # File này - danh sách tập tin
│
├── 📁 Thư mục chính
│   ├── src/
│   │   ├── App.jsx               # Component chính (quản lý auth)
│   │   ├── main.jsx              # Entry point React
│   │   ├── index.css             # Styles toàn bộ app
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── LoginModal.jsx    # Modal chọn OAuth provider
│   │   │   └── ProductCard.jsx   # Component thẻ sản phẩm
│   │   │
│   │   ├── 📁 pages/
│   │   │   └── HomePage.jsx      # Trang chủ (sản phẩm + user info)
│   │   │
│   │   └── 📁 services/
│   │       └── productService.js # Mock data & API sản phẩm
│   │
│   ├── public/                   # Tài nguyên tĩnh
│   │
│   ├── dist/                     # Build output (production)
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-*.css
│   │       └── index-*.js
│   │
│   ├── node_modules/             # Dependencies (npm install)
│   │
│   └── 📁 .github/
│       └── copilot-instructions.md # Hướng dẫn Copilot
│
└── 📁 .vscode/
    └── tasks.json                # VS Code tasks
```

---

## 📊 Danh sách tập tin chi tiết

### Tập tin cấu hình

| Tập tin | Mục đích | Ghi chú |
|---------|---------|--------|
| `package.json` | Dependencies & scripts | npm run dev, build |
| `vite.config.js` | Cấu hình Vite | Port 3000 |
| `index.html` | HTML template | Google GSI script |
| `.env.local` | Biến môi trường (LOCAL) | ⚠️ Không commit |
| `.env.example` | Template .env | Để tham khảo |
| `.gitignore` | Git ignore rules | Loại trừ node_modules |

### Tài liệu

| Tập tin | Nội dung |
|---------|---------|
| `README.md` | Tài liệu chính, cài đặt |
| `QUICK_START.md` | Hướng dẫn nhanh |
| `OAUTH_SETUP.md` | Hướng dẫn lấy credentials từng provider |
| `TECHNICAL_GUIDE.md` | Hướng dẫn kỹ thuật, kiến trúc code |
| `PROJECT_FILES.md` | File này |

### React Components

| Tập tin | Chức năng |
|---------|---------|
| `src/App.jsx` | Component root, quản lý authentication |
| `src/main.jsx` | Entry point, GoogleOAuthProvider wrapper |
| `src/index.css` | CSS styles toàn bộ ứng dụng |
| `src/components/LoginModal.jsx` | Modal chọn OAuth provider |
| `src/components/ProductCard.jsx` | Component thẻ sản phẩm |
| `src/pages/HomePage.jsx` | Trang chủ - danh sách sản phẩm |
| `src/services/productService.js` | Mock data & API sản phẩm |

### Build & VS Code

| Tập tin | Mục đích |
|---------|---------|
| `dist/` | Thư mục build production |
| `.vscode/tasks.json` | VS Code tasks (dev, build, preview) |
| `node_modules/` | Dependencies sau npm install |

---

## 🔧 Dependencies chính

| Package | Phiên bản | Mục đích |
|---------|----------|---------|
| `react` | 18.3.1 | UI framework |
| `react-dom` | 18.3.1 | React DOM rendering |
| `@react-oauth/google` | 0.12.1 | Google Login component |
| `jwt-decode` | 4.0.0 | Decode JWT token |
| `axios` | 1.6.7 | HTTP client (tuỳ chọn) |
| `vite` | 5.2.0 | Build tool |
| `@vitejs/plugin-react` | 4.3.0 | React plugin cho Vite |

---

## 📈 Kích thước tập tin

```
Thư mục root: ~350 MB (chủ yếu node_modules)
src/: ~15 KB
dist/ (production build): ~155 KB
```

---

## ⚙️ Các lệnh NPM

```bash
npm install      # Cài đặt dependencies
npm run dev      # Chế độ phát triển (localhost:3000)
npm run build    # Build production
npm run preview  # Xem trước build
```

---

## 📝 Các biến môi trường

| Biến | Bắt buộc? | Mô tả |
|------|----------|-------|
| `VITE_GOOGLE_CLIENT_ID` | ✅ | Client ID từ Google |
| `VITE_FACEBOOK_APP_ID` | ⬜ | App ID từ Facebook |
| `VITE_GITHUB_CLIENT_ID` | ⬜ | Client ID từ GitHub |
| `VITE_GITHUB_REDIRECT_URI` | ⬜ | Callback URL GitHub |
| `VITE_LINKEDIN_CLIENT_ID` | ⬜ | Client ID từ LinkedIn |
| `VITE_LINKEDIN_REDIRECT_URI` | ⬜ | Callback URL LinkedIn |
| `VITE_ZALO_APP_ID` | ⬜ | App ID từ Zalo |
| `VITE_ZALO_REDIRECT_URI` | ⬜ | Callback URL Zalo |

---

## 🎯 Những gì có thể mở rộng

### Thêm OAuth Provider mới
1. Thêm hàm `handleNewProvider()` trong App.jsx
2. Thêm button trong LoginModal.jsx
3. Thêm endpoint callback (nếu cần)

### Thêm Shopping Cart
1. Tạo state `cart` trong App.jsx
2. Tạo CartPage component
3. Thêm route navigation

### Kết nối Backend
1. Tạo API endpoints
2. Thay mock data bằng fetch API thực tế
3. Lưu dữ liệu vào database

### Thêm Database
1. Firebase (recommended)
2. MongoDB + Express
3. PostgreSQL + Node.js

---

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder
```

### Vercel/Netlify
```bash
# Kết nối repo GitHub
# Auto deploy từ main branch
```

### Server riêng
```bash
# Build: npm run build
# Copy dist/ to server
# Serve với nginx/apache
```

---

## 📞 Support

- **Documentation**: Xem README.md
- **Quick Start**: Xem QUICK_START.md
- **OAuth Setup**: Xem OAUTH_SETUP.md
- **Technical Details**: Xem TECHNICAL_GUIDE.md

---

**Last Updated**: 2024-05-06
**Version**: 1.0.0
