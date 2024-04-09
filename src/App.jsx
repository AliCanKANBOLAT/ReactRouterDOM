import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import SiteRoutes from './components/SiteRouts'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Her bileşen yüklendiğinde kullanıcı oturumunu kontrol et
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const handleLogin = (username, password) => {
    const user = { username, password }; // Kullanıcı bilgileri
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user)); // Local storage'a kaydet
    navigate('/');
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12"></div>
          <SiteRoutes handleLogin={handleLogin} user={user} />
        </div>
      </div>
    </>
  )
}

export default App
