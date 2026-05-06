# 🎬 Bắt đầu ngay - 5 bước

## ✅ Step 1: Verify Project Setup (2 phút)

```bash
cd d:\API
npm run build  # Should show "✓ built in XXXms"
```

Nếu build thành công, dự án được cấu hình đúng ✅

---

## ✅ Step 2: Lấy Google Client ID (10 phút) - **REQUIRED**

Đây là bước bắt buộc để ứng dụng hoạt động!

### Hướng dẫn nhanh:

1. **Truy cập**: https://console.cloud.google.com/
2. **Tạo dự án mới**:
   - Nhấp dropdown dự án → "Tạo Dự án"
   - Tên: "E-Commerce OAuth"
   - Nhấp "Tạo"

3. **Bật API**:
   - Tìm kiếm: "Google+ API"
   - Nhấp "Bật"

4. **Tạo Credentials**:
   - Menu trái: "Credentials"
   - "Tạo Thông tin xác thực" → "OAuth client ID"
   - Chọn "Ứng dụng Web"
   - **Thêm Authorized origins**: `http://localhost:3000`
   - **Thêm Authorized redirect URIs**: 
     - `http://localhost:3000`
     - `http://localhost:3000/*`
   - Nhấp "Tạo"

5. **Sao chép Client ID**:
   - Copy đoạn: `xxx.apps.googleusercontent.com`

---

## ✅ Step 3: Cấu hình Environment (2 phút)

**Mở file**: `d:\API\.env.local`

**Tìm dòng**:
```env
VITE_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com
```

**Thay thế** `YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com` 
**Bằng** Client ID từ Step 2

**Ví dụ**:
```env
VITE_GOOGLE_CLIENT_ID=1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com
```

**Lưu file** (Ctrl+S)

---

## ✅ Step 4: Chạy ứng dụng (1 phút)

### Option A: Dùng VS Code Terminal

```bash
cd d:\API
npm run dev
```

### Option B: Dùng VS Code Tasks

1. Nhấp `Ctrl+Shift+B`
2. Chọn "npm: dev"
3. Terminal sẽ chạy

**Ứng dụng sẽ tự động mở**: `http://localhost:3000`

---

## ✅ Step 5: Test Google Login (2 phút)

### Trên trang chủ:
1. Nhấp nút "Đăng nhập"
2. Nhấp "Continue with Google"
3. Chọn tài khoản Google
4. Cho phép quyền
5. ✅ Nên thấy tên + email + button "Thêm vào giỏ"

---

## 🎉 Xong! Ứng dụng sẵn sàng

```
✅ Google Login hoạt động
✅ Danh sách sản phẩm hiển thị
✅ Button "Thêm vào giỏ" xuất hiện sau khi đăng nhập
✅ Đăng xuất hoạt động
```

---

## 📚 Bước tiếp theo (tuỳ chọn)

### Thêm Facebook Login
→ Xem `OAUTH_SETUP.md` - Facebook OAuth

### Thêm GitHub / LinkedIn / Zalo
→ Xem `OAUTH_SETUP.md` - mục tương ứng

### Triển khai lên Internet
→ Xem `DEPLOYMENT.md` (chưa tạo)

### Thêm Shopping Cart
→ Xem `TECHNICAL_GUIDE.md` - Mở rộng dự án

---

## 🆘 Troubleshooting

### ❌ "Client ID not found"
**Giải pháp**:
- Kiểm tra `.env.local` đã cấu hình `VITE_GOOGLE_CLIENT_ID` chưa?
- Reload trang (F5)

### ❌ "Google button không hiển thị"
**Giải pháp**:
- Kiểm tra console (F12) có lỗi nào không?
- Kiểm tra Client ID có hợp lệ không?

### ❌ "Redirect URI mismatch"
**Giải pháp**:
- Kiểm tra Google Console có `http://localhost:3000` không?
- Chính xác cả `Authorized origins` và `Authorized redirect URIs`

### ❌ "npm run dev không hoạt động"
**Giải pháp**:
```bash
# 1. Kiểm tra Node.js đã cài chưa
node --version  # Should show v16+

# 2. Cài lại dependencies
npm install

# 3. Thử lại
npm run dev
```

---

## 💡 Tips

### Reload nhanh
- **F5**: Reload toàn bộ
- **Ctrl+Shift+R**: Hard refresh (xóa cache)

### Debug
- **F12**: Mở Developer Tools
- **Console tab**: Xem lỗi
- **Network tab**: Xem API calls

### Logout & Login lại
- Nhấp "Đăng xuất"
- Reload trang
- Đăng nhập lại với tài khoản khác

---

## 📞 Cần giúp đỡ?

1. **Xem README.md**: Tài liệu chính
2. **Xem OAUTH_SETUP.md**: Hướng dẫn lấy credentials
3. **Xem TECHNICAL_GUIDE.md**: Chi tiết kỹ thuật
4. **Xem QUICK_START.md**: Hướng dẫn nhanh
5. **Xem UI_DESIGN.md**: Giao diện

---

**⏱️ Tổng thời gian: ~20 phút**

**🚀 Ready to code!**
