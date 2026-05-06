# Ứng dụng E-Commerce với Đăng nhập OAuth

## Tổng quan
Dự án này là một ứng dụng thương mại điện tử được xây dựng bằng React và Vite, với hỗ trợ đăng nhập qua nhiều nền tảng OAuth:
- Google
- Facebook
- GitHub
- LinkedIn
- Zalo

## Yêu cầu

Node.js 16 trở lên, npm hoặc yarn

## Các bước cài đặt

### 1. Cài đặt Dependencies
```bash
npm install
```

### 2. Cấu hình Environment Variables
Tạo file `.env.local`:
```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_FACEBOOK_APP_ID=your_facebook_app_id
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GITHUB_REDIRECT_URI=http://localhost:3000/auth/github/callback
VITE_LINKEDIN_CLIENT_ID=your_linkedin_client_id
VITE_LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback
VITE_ZALO_APP_ID=your_zalo_app_id
VITE_ZALO_REDIRECT_URI=http://localhost:3000/auth/zalo/callback
```

### 3. Chạy Development Server
```bash
npm run dev
```

### 4. Build cho Production
```bash
npm run build
```

## Tính năng Chính

- ✅ Đăng nhập/Đăng xuất qua OAuth (Google, Facebook, GitHub, LinkedIn, Zalo)
- ✅ Hiển thị danh sách sản phẩm
- ✅ Button "Thêm vào giỏ hàng" chỉ hiển thị khi đã đăng nhập
- ✅ Lưu trữ phiên đăng nhập
- ✅ Giao diện responsive

## Cấu hình OAuth

Tham khảo file `README.md` để biết hướng dẫn chi tiết cách lấy OAuth credentials từ mỗi provider.
