import { useState, useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import HomePage from './pages/HomePage'
import LoginModal from './components/LoginModal'
import './index.css'

function App() {
  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [authProvider, setAuthProvider] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleGoogleLogin = (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential)
      const userData = {
        id: decodedToken.sub,
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
        provider: 'google'
      }
      setUser(userData)
      setAuthProvider('google')
      setShowLoginModal(false)
      localStorage.setItem('user', JSON.stringify(userData))
    } catch (error) {
      console.error('Error decoding token:', error)
    }
  }

  const handleFacebookLogin = () => {
    FB.login((response) => {
      if (response.authResponse) {
        FB.api('/me', { fields: 'id,name,email,picture' }, (user) => {
          const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            picture: user.picture.data.url,
            provider: 'facebook'
          }
          setUser(userData)
          setAuthProvider('facebook')
          setShowLoginModal(false)
          localStorage.setItem('user', JSON.stringify(userData))
        })
      }
    }, { scope: 'public_profile,email' })
  }

  const handleGithubLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`
  }

  const handleLinkedinLogin = () => {
    const clientId = import.meta.env.VITE_LINKEDIN_CLIENT_ID
    const redirectUri = import.meta.env.VITE_LINKEDIN_REDIRECT_URI
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=profile%20email`
  }

  const handleZaloLogin = () => {
    const appId = import.meta.env.VITE_ZALO_APP_ID
    const redirectUri = import.meta.env.VITE_ZALO_REDIRECT_URI
    window.location.href = `https://oauth.zaloapp.com/v4/permission?app_id=${appId}&redirect_uri=${redirectUri}`
  }

  const handleLogout = () => {
    setUser(null)
    setAuthProvider(null)
    localStorage.removeItem('user')
  }

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <div className="logo">🛍️ E-Commerce</div>
          <div className="header-info">
            <h2>Cửa hàng trực tuyến</h2>
            <p>Mua sắm dễ dàng - Thanh toán an toàn</p>
          </div>
          <div className="auth-buttons">
            {!user ? (
              <button
                className="btn btn-login"
                onClick={() => setShowLoginModal(true)}
              >
                Đăng nhập
              </button>
            ) : (
              <>
                <span style={{ alignSelf: 'center', marginRight: '10px' }}>
                  👤 {user.name}
                </span>
                <button
                  className="btn btn-logout"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onGoogleLogin={handleGoogleLogin}
          onFacebookLogin={handleFacebookLogin}
          onGithubLogin={handleGithubLogin}
          onLinkedinLogin={handleLinkedinLogin}
          onZaloLogin={handleZaloLogin}
        />
      )}

      <div className="container">
        <HomePage user={user} />
      </div>
    </div>
  )
}

export default App
