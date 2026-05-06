# Ứng dụng E-Commerce với Đăng nhập OAuth

Một ứng dụng thương mại điện tử được xây dựng bằng **React** và **Vite** với hỗ trợ đăng nhập thông qua nhiều nền tảng OAuth:
- Google
- Facebook
- GitHub
- LinkedIn
- Zalo

## Yêu cầu

- Node.js 16+ 
- npm hoặc yarn

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Hoặc với yarn
yarn install
```

## Cấu hình Environment

Tạo file `.env.local` trong thư mục gốc dự án:

```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id

# Facebook OAuth
VITE_FACEBOOK_APP_ID=your_facebook_app_id

# GitHub OAuth
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GITHUB_REDIRECT_URI=http://localhost:3000/auth/github/callback

# LinkedIn OAuth
VITE_LINKEDIN_CLIENT_ID=your_linkedin_client_id
VITE_LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback

# Zalo OAuth
VITE_ZALO_APP_ID=your_zalo_app_id
VITE_ZALO_REDIRECT_URI=http://localhost:3000/auth/zalo/callback
```

## Lấy OAuth Credentials

### Google
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Tạo dự án mới
3. Bật **Google+ API**
4. Tạo OAuth 2.0 Credentials (Web Application)
5. Sao chép **Client ID**

### Facebook
1. Truy cập [Facebook Developers](https://developers.facebook.com/)
2. Tạo ứng dụng mới
3. Thêm **Facebook Login** product
4. Sao chép **App ID**

### GitHub
1. Truy cập [GitHub Developer Settings](https://github.com/settings/developers)
2. Tạo **OAuth App** mới
3. Sao chép **Client ID** và **Client Secret**

### LinkedIn
1. Truy cập [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Tạo ứng dụng mới
3. Sao chép **Client ID**

### Zalo
1. Truy cập [Zalo Developers](https://developers.zalo.me/)
2. Tạo ứng dụng mới
3. Sao chép **App ID**

## Chạy ứng dụng

```bash
# Chế độ phát triển
npm run dev

# Build cho sản xuất
npm run build

# Xem trước bản build
npm run preview
```

Ứng dụng sẽ mở tại `http://localhost:3000`

## Tính năng

### Trang chủ
- ✅ Hiển thị thông tin về cửa hàng
- ✅ Danh sách sản phẩm (tĩnh hoặc từ Mock API)
- ✅ Chức năng đăng nhập/đăng xuất

### Đăng nhập
- ✅ Hỗ trợ đăng nhập bằng Google
- ✅ Hỗ trợ đăng nhập bằng Facebook
- ✅ Hỗ trợ đăng nhập bằng GitHub
- ✅ Hỗ trợ đăng nhập bằng LinkedIn
- ✅ Hỗ trợ đăng nhập bằng Zalo

### Sau khi đăng nhập
- ✅ Hiển thị tên và email người dùng
- ✅ Thay đổi nút "Đăng nhập" thành "Đăng xuất"
- ✅ Hiển thị button "Thêm vào giỏ hàng" cho mỗi sản phẩm
- ✅ Lưu thông tin đăng nhập trong localStorage

## Cấu trúc Dự án

```
API/
├── src/
│   ├── components/
│   │   ├── LoginModal.jsx      # Component modal đăng nhập
│   │   └── ProductCard.jsx     # Component thẻ sản phẩm
│   ├── pages/
│   │   └── HomePage.jsx        # Trang chủ
│   ├── services/
│   │   └── productService.js   # Service sản phẩm (mock API)
│   ├── App.jsx                 # Component chính
│   ├── main.jsx                # Entry point
│   └── index.css               # Styles toàn cục
├── public/                     # Static files
├── index.html                  # HTML template
├── vite.config.js              # Cấu hình Vite
├── package.json                # Dependencies
└── README.md                   # Tài liệu này
```

## Dependencies

- **react**: 18.3.1
- **react-dom**: 18.3.1
- **@react-oauth/google**: 0.12.1
- **axios**: 1.6.7
- **vite**: 5.2.0
- **@vitejs/plugin-react**: 4.3.0

## Notes

- Thông tin đăng nhập được lưu trong `localStorage` để duy trì phiên làm việc
- Mock data sản phẩm có thể thay thế bằng thực tế API
- Lưu ý: Cần cấu hình Redirect URI đúng cho mỗi OAuth provider

## Hỗ trợ

Nếu gặp bất kỳ vấn đề nào, vui lòng kiểm tra:
1. Environment variables được cấu hình đúng
2. Redirect URI khớp với cấu hình OAuth
3. Dependencies được cài đặt đầy đủ
# baitapnhom16
