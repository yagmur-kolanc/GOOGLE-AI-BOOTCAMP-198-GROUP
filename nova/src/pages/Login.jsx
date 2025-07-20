import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('token', 'fakeToken')
      navigate('/dashboard')
    } else {
      alert('Hatalı kullanıcı adı veya şifre')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div style={{textAlign:'center'}}>
        <img style={{width:'150px',margin:'auto'}} src='nova.jpg'></img>
        </div>
        <h2>Giriş Yap</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            id="username"
            type="text"
            placeholder="admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            placeholder="1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Giriş Yap</button>
        </form>
        <p className="info">Kullanıcı adı: <b>admin</b> | Şifre: <b>1234</b></p>
      </div>
    </div>
  )
}