# 📚 Hướng dẫn kỹ thuật - Cấu trúc Code

## 📦 Tổng quan kiến trúc

```
App.jsx (Quản lý state toàn bộ)
├── LoginModal (Modal chọn OAuth provider)
│   └── Google Login (sử dụng @react-oauth/google)
│   └── Facebook / GitHub / LinkedIn / Zalo (custom implementation)
└── HomePage
    ├── User Info (hiển thị người dùng)
    └── ProductCard (sản phẩm)
```

---

## 🔐 Cách hoạt động OAuth

### 1. Google Login (Được khuyến nghị)

**File**: `src/App.jsx`

```javascript
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const handleGoogleLogin = (credentialResponse) => {
  const decodedToken = jwtDecode(credentialResponse.credential)
  // Lấy: sub (ID), name, email, picture
  const userData = {
    id: decodedToken.sub,
    name: decodedToken.name,
    email: decodedToken.email,
    picture: decodedToken.picture,
    provider: 'google'
  }
  setUser(userData)
  localStorage.setItem('user', JSON.stringify(userData))
}
```

**Ưu điểm**:
- ✅ Sử dụng library `@react-oauth/google` - đơn giản
- ✅ Không cần backend xác thực
- ✅ JWT token được decode trực tiếp

---

### 2. Facebook Login

**File**: `src/App.jsx`

```javascript
const handleFacebookLogin = () => {
  FB.login((response) => {
    if (response.authResponse) {
      FB.api('/me', { fields: 'id,name,email,picture' }, (user) => {
        // Lấy thông tin người dùng
        setUser(userData)
      })
    }
  }, { scope: 'public_profile,email' })
}
```

**Cần thêm vào `index.html`**:
```html
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId: import.meta.env.VITE_FACEBOOK_APP_ID,
      xfbml: true,
      version: 'v18.0'
    });
  };
</script>
<script async defer crossorigin="anonymous" 
  src="https://connect.facebook.net/en_US/sdk.js"></script>
```

---

### 3. GitHub OAuth

**Luồng xác thực**:
1. Redirect đến GitHub authorization URL
2. User cho phép
3. GitHub redirect về callback URL với `code`
4. Backend trao đổi `code` lấy access token
5. Lấy thông tin user

**File**: `src/App.jsx`

```javascript
const handleGithubLogin = () => {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID
  const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI
  window.location.href = 
    `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`
}
```

**Note**: Cần backend để trao đổi code lấy token

---

### 4. LinkedIn OAuth

**Tương tự GitHub**:
```javascript
const handleLinkedinLogin = () => {
  const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID
  const redirectUri = import.meta.env.VITE_LINKEDIN_REDIRECT_URI
  window.location.href = 
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`
}
```

---

### 5. Zalo OAuth

**Tương tự GitHub và LinkedIn**:
```javascript
const handleZaloLogin = () => {
  const appId = import.meta.env.VITE_ZALO_APP_ID
  const redirectUri = import.meta.env.VITE_ZALO_REDIRECT_URI
  window.location.href = 
    `https://oauth.zaloapp.com/v4/permission?app_id=${appId}&redirect_uri=${redirectUri}`
}
```

---

## 💾 Quản lý trạng thái người dùng

**File**: `src/App.jsx`

```javascript
const [user, setUser] = useState(null)

// Lưu vào localStorage
useEffect(() => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}, [user])

// Khôi phục từ localStorage
useEffect(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    setUser(JSON.parse(savedUser))
  }
}, [])
```

---

## 🛍️ Quản lý sản phẩm

**File**: `src/services/productService.js`

```javascript
// Mock data
const mockProducts = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    description: '...',
    price: 25000000,
    emoji: '💻'
  },
  // ...
]

// Hàm fetch
export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 500)
  })
}
```

**Để sử dụng API thực tế**:
```javascript
export const getProducts = async () => {
  const response = await fetch('https://your-api.com/products')
  return response.json()
}
```

---

## 🎨 Giao diện

**File**: `src/index.css`

Chứa styles cho:
- Header (đăng nhập/đăng xuất)
- Modal đăng nhập
- Card sản phẩm
- Thông tin người dùng
- Responsive grid

---

## 🔄 Luồng dữ liệu

```
1. User nhấp "Đăng nhập"
   ↓
2. Hiển thị LoginModal
   ↓
3. User chọn OAuth provider
   ↓
4a. Google: Decode JWT → setUser
4b. Facebook: FB.api() → setUser
4c. GitHub/LinkedIn/Zalo: redirect → callback
   ↓
5. Lưu vào localStorage
   ↓
6. Hiển thị user info
   ↓
7. Show "Thêm vào giỏ hàng" buttons
```

---

## ✅ Checklist triển khai

- [ ] Lấy Google Client ID
- [ ] Cập nhật `.env.local`
- [ ] Test Google Login
- [ ] (Optional) Lấy Facebook App ID
- [ ] (Optional) Lấy GitHub Client ID
- [ ] (Optional) Lấy LinkedIn Client ID
- [ ] (Optional) Lấy Zalo App ID
- [ ] Test tất cả OAuth providers
- [ ] Build cho production: `npm run build`
- [ ] Deploy

---

## 🚀 Mở rộng dự án

### Thêm backend xác thực
```javascript
// Thay vì decode JWT trực tiếp
const response = await fetch('/api/auth/google', {
  method: 'POST',
  body: JSON.stringify({ token: credentialResponse.credential })
})
const userData = await response.json()
setUser(userData)
```

### Thêm shopping cart
1. Tạo state `cart` trong App.jsx
2. Thêm hàm `addToCart()` và `removeFromCart()`
3. Tạo component CartPage
4. Thêm route navigation

### Thêm database
1. Kết nối với MongoDB/Firebase
2. Lưu user profile
3. Lưu order history
4. Quản lý inventory

---

## 📖 Tài liệu tham khảo

- [Google OAuth](https://developers.google.com/identity)
- [Facebook Login](https://developers.facebook.com/docs/facebook-login)
- [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [LinkedIn OAuth](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authentication)
- [Zalo OAuth](https://developers.zalo.me/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
