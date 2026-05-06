import { GoogleLogin } from '@react-oauth/google'

function LoginModal({
  onClose,
  onGoogleLogin,
  onFacebookLogin,
  onGithubLogin,
  onLinkedinLogin,
  onZaloLogin
}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-header">Chọn cách đăng nhập</div>
        
        <div className="login-options">
          {/* Google Login */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleLogin
              onSuccess={onGoogleLogin}
              onError={() => console.log('Login Failed')}
              text="signin_with"
              logo_alignment="center"
            />
          </div>

          {/* Facebook Login */}
          <button className="oauth-button facebook" onClick={onFacebookLogin}>
            <svg viewBox="0 0 24 24" fill="#1877f2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Đăng nhập bằng Facebook
          </button>

          {/* GitHub Login */}
          <button className="oauth-button github" onClick={onGithubLogin}>
            <svg viewBox="0 0 24 24" fill="#24292e">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Đăng nhập bằng GitHub
          </button>

          {/* LinkedIn Login */}
          <button className="oauth-button linkedin" onClick={onLinkedinLogin}>
            <svg viewBox="0 0 24 24" fill="#0a66c2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.395 3.74 4.393v5.497zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.708 0-.951.77-1.708 1.954-1.708 1.184 0 1.915.757 1.915 1.708 0 .95-.731 1.708-1.954 1.708zm1.646 11.019H3.692v-9.646h3.291v9.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Đăng nhập bằng LinkedIn
          </button>

          {/* Zalo Login */}
          <button className="oauth-button zalo" onClick={onZaloLogin}>
            <svg viewBox="0 0 24 24" fill="#0084ff">
              <path d="M12 0C5.37 0 0 4.475 0 10c0 3.584 2.144 6.719 5.426 8.525.31 2.85 2.645 5.475 5.574 5.475 1.16 0 2.27-.284 3.24-.786l3.21.998a.5.5 0 00.683-.495l-.54-3.257A9.96 9.96 0 0024 10c0-5.525-5.37-10-12-10z"/>
            </svg>
            Đăng nhập bằng Zalo
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
