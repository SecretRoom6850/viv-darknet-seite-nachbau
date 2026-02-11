import { useState } from 'react'
import './App.css'
import { ChatPage } from './ChatPage'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple check for demo purposes
    if (username.toLowerCase() === 'caesar' && password === 'isabellagatemartabrunhilde') {
      setIsLoggedIn(true)
      setLoginError(false)
    } else {
      setLoginError(true)
    }
  }

  if (isLoggedIn) {
    return (
      <div className="app-container logged-in">
        <ChatPage />
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="header">
        <img
          src="http://199.247.4.133/wp-content/uploads/elementor/thumbs/web-header-darknet3-pdruk6bxl4xm88hxgm46m6jg6v57k1xwszvnyvv5v4.png"
          alt="Darknet Logo"
          className="logo"
        />
      </header>

      <main className="main-content">
        <div className="login-box">
          <h2>------ LOGIN ------</h2>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Benutzername</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Passwort</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="show-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {loginError && <div style={{ color: '#ff6b6b', marginTop: '10px', fontSize: '0.9rem' }}>Zugangsdaten ungültig.</div>}

            <button type="submit" className="login-btn">ANMELDEN</button>
            <div className="form-footer">
              <a href="#" className="forgot-password">Passwort-Reminder</a>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
