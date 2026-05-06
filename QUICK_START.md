# 🚀 Hướng dẫn nhanh - E-Commerce OAuth Login

## ⚡ Bước đầu tiên

### 1. Chuẩn bị môi trường
```bash
# Đã cài đặt sẵn dependencies
# Chỉ cần chạy:
npm run dev
```

### 2. Cấu hình OAuth (Quan trọng!)
Tham khảo file `OAUTH_SETUP.md` để lấy OAuth credentials từ:
- ✅ Google (bắt buộc cho bắt đầu)
- ✅ Facebook
- ✅ GitHub
- ✅ LinkedIn
- ✅ Zalo

### 3. Cập nhật `.env.local`
Thay thế placeholder bằng thực tế credentials:
```env
VITE_GOOGLE_CLIENT_ID=your_actual_client_id
VITE_FACEBOOK_APP_ID=your_actual_app_id
# ... v.v.
```

### 4. Chạy ứng dụng
```bash
npm run dev
# Ứng dụng tự động mở tại http://localhost:3000
```

---

## 📋 Tính năng chính

### Trang chủ
- 📊 Thông tin cửa hàng
- 🛍️ Danh sách 8 sản phẩm mặc định
- 👤 Phần tông đăng nhập/đăng xuất

### Đăng nhập
- 🔐 Google Login (được khuyến nghị)
- 📘 Facebook Login
- 🐙 GitHub Login
- 💼 LinkedIn Login
- 📱 Zalo Login

### Sau khi đăng nhập
- ✅ Hiển thị tên và email
- ✅ Nút "Thêm vào giỏ hàng" xuất hiện
- ✅ Dữ liệu được lưu trong localStorage

---

## 🛠️ Các lệnh có sẵn

```bash
# Chế độ phát triển (development)
npm run dev

# Build cho production
npm run build

# Xem trước build
npm run preview
```

---

## 📁 Cấu trúc dự án

```
src/
├── components/
│   ├── LoginModal.jsx        # Modal đăng nhập
│   └── ProductCard.jsx       # Card sản phẩm
├── pages/
│   └── HomePage.jsx          # Trang chủ
├── services/
│   └── productService.js     # Dữ liệu sản phẩm (mock)
├── App.jsx                   # Component chính
├── main.jsx                  # Entry point
└── index.css                 # Styles
```

---

## 💡 Để sử dụng từng OAuth provider:

### Google (Khuyến nghị)
1. Tham khảo OAUTH_SETUP.md - Google OAuth
2. Sao chép Client ID
3. Cập nhật .env.local
4. Reload ứng dụng

### Facebook
1. Tham khảo OAUTH_SETUP.md - Facebook OAuth
2. Thêm sản phẩm "Facebook Login"
3. Sao chép App ID
4. Thêm SDK Facebook vào index.html (nếu cần)

### GitHub / LinkedIn / Zalo
Tương tự như trên

---

## 🐛 Troubleshooting

| Vấn đề | Giải pháp |
|--------|----------|
| "Client ID not found" | Kiểm tra `.env.local` có chứa `VITE_GOOGLE_CLIENT_ID` không |
| Redirect URI không match | Kiểm tra redirect URI khớp với cấu hình OAuth |
| CORS error | Đảm bảo localhost được phép trong OAuth settings |
| Sản phẩm không hiển thị | Kiểm tra console có lỗi nào không |

---

## 📝 Ghi chú

- File `.env.local` không được commit (an toàn)
- Mock data sản phẩm có thể thay thế bằng API thực tế
- Ứng dụng hỗ trợ đa nền tảng OAuth
- Dữ liệu người dùng lưu trong localStorage

---

## 🎯 Tiếp theo

1. ✅ Cấu hình Google OAuth (bắt đầu từ đây)
2. ⬜ Thêm các OAuth provider khác (tuỳ chọn)
3. ⬜ Tích hợp shopping cart (nếu cần)
4. ⬜ Kết nối backend API (nếu cần)

**Happy coding! 🎉**
