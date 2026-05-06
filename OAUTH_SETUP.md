# Hướng dẫn lấy OAuth Credentials

## 1. Google OAuth

### Bước 1: Tạo dự án trên Google Cloud Console
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Nhấp vào dự án hiện tại → Tạo Dự án mới
3. Đặt tên dự án (ví dụ: "E-Commerce OAuth")
4. Nhấp "Tạo"

### Bước 2: Kích hoạt Google+ API
1. Trong tìm kiếm, gõ "Google+ API"
2. Nhấp vào nó rồi chọn "Bật"

### Bước 3: Tạo OAuth Credentials
1. Truy cập "Credentials" (Thông tin xác thực) ở menu bên trái
2. Nhấp "Tạo Thông tin xác thực" → "OAuth client ID"
3. Chọn "Ứng dụng Web"
4. Thêm Authorized redirect URI:
   - `http://localhost:3000`
   - `http://localhost:3000/*`
5. Sao chép **Client ID** vào `.env.local`

```
VITE_GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
```

---

## 2. Facebook OAuth

### Bước 1: Tạo ứng dụng Facebook
1. Truy cập [Facebook Developers](https://developers.facebook.com/)
2. Đăng nhập hoặc tạo tài khoản
3. Nhấp "Ứng dụng của tôi" → "Tạo Ứng dụng"
4. Chọn loại ứng dụng: "Consumer"
5. Điền thông tin ứng dụng

### Bước 2: Cấu hình Facebook Login
1. Thêm sản phẩm "Facebook Login"
2. Chọn "Web"
3. Đặt URL trang web: `http://localhost:3000`

### Bước 3: Lấy App ID
1. Trong "Cài đặt" → "Cơ bản"
2. Sao chép **App ID** vào `.env.local`

```
VITE_FACEBOOK_APP_ID=your_app_id
```

---

## 3. GitHub OAuth

### Bước 1: Truy cập GitHub Developer Settings
1. Truy cập [GitHub Developer Settings](https://github.com/settings/developers)
2. Nhấp "OAuth Apps" → "New OAuth App"

### Bước 2: Điền thông tin
- **Application name**: E-Commerce OAuth
- **Homepage URL**: `http://localhost:3000`
- **Authorization callback URL**: `http://localhost:3000/auth/github/callback`

### Bước 3: Lấy Credentials
1. Sao chép **Client ID** vào `.env.local`

```
VITE_GITHUB_CLIENT_ID=your_client_id
VITE_GITHUB_REDIRECT_URI=http://localhost:3000/auth/github/callback
```

---

## 4. LinkedIn OAuth

### Bước 1: Tạo ứng dụng LinkedIn
1. Truy cập [LinkedIn Developers](https://www.linkedin.com/developers/apps)
2. Nhấp "Tạo ứng dụng"
3. Điền thông tin yêu cầu

### Bước 2: Cấu hình Redirect URI
1. Trong "Cài đặt ứng dụng" → "Authorized redirect URLs for your app"
2. Thêm: `http://localhost:3000/auth/linkedin/callback`

### Bước 3: Lấy Client ID
1. Sao chép **Client ID** vào `.env.local`

```
VITE_LINKEDIN_CLIENT_ID=your_client_id
VITE_LINKEDIN_REDIRECT_URI=http://localhost:3000/auth/linkedin/callback
```

---

## 5. Zalo OAuth

### Bước 1: Đăng ký Zalo Developer
1. Truy cập [Zalo Developer](https://developers.zalo.me/)
2. Đăng nhập tài khoản Zalo
3. Tạo ứng dụng mới

### Bước 2: Lấy App ID
1. Trong phần "Thông tin ứng dụng"
2. Sao chép **App ID** vào `.env.local`

```
VITE_ZALO_APP_ID=your_app_id
VITE_ZALO_REDIRECT_URI=http://localhost:3000/auth/zalo/callback
```

---

## Cập nhật .env.local

Sau khi có tất cả credentials, cập nhật file `.env.local`:

```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com

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

Sau đó chạy:
```bash
npm run dev
```

**Ứng dụng sẽ tự động mở tại `http://localhost:3000`**

---

## Ghi chú quan trọng

- **Localhost**: Chỉ hoạt động trên `localhost:3000`
- **Production**: Cần cấu hình Redirect URI chính xác khi triển khai
- **Security**: Không commit file `.env.local` (đã được thêm vào `.gitignore`)
