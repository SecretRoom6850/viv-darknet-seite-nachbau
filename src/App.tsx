import { useState } from 'react'
import './App.css'
import { ChatPage } from './ChatPage'

import { HackingScreen } from './HackingScreen'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isHacking, setIsHacking] = useState(false)
  const [loginError, setLoginError] = useState(false)
  const [showReminder, setShowReminder] = useState(false)

  // Pre-calculated SHA-256 hash for 'isabellagatemartabrunhilde'
  const TARGET_HASH = 'd52c1f04b523dfb3f0454cfac9f7f899a511fea2014ebe280090bee1e5b74f8d';

  const VALID_USERS = ['caesar', 'gaius', 'julius', 'agnus', 'imperator'];

  const hashPassword = async (str: string) => {
    const msgBuffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Hash the input password to compare with stored hash
    const inputHash = await hashPassword(password);

    if (VALID_USERS.includes(username.toLowerCase()) && inputHash === TARGET_HASH) {
      setIsHacking(true)
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

  if (isHacking) {
    return <HackingScreen onComplete={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="app-container">
      <header className="header">
        <img
          src="/logo.png"
          alt="Darknet Logo"
          className="logo"
        />
      </header>

      <main className="main-content">
        <h2>------ LOGIN ------</h2>
        <div className="login-box">


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
              <a href="#" className="forgot-password" onClick={(e) => { e.preventDefault(); setShowReminder(true); }}>Passwort-Reminder</a>
            </div>
          </form>
        </div>
      </main>

      {showReminder && (
        <div className="reminder-overlay" onClick={() => setShowReminder(false)}>
          <div className="reminder-box" onClick={(e) => e.stopPropagation()}>
            <div className="reminder-header">
              <h3>Login-Erinnerung</h3>
            </div>
            <div className="reminder-body">
              <p>Passwort: Namen meiner Cousininnen von links nach rechts... Alles zusammen an einem Stück... Bsp: cornelianadinesarahconny</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
