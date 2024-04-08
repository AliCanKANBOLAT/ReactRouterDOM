import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import SiteRoutes from './components/SiteRouts'



function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user"))??null)
  }, [])

  const handleLogin = () => {
    const user = { id: 1, name:"Bora Ferit"}
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/')
  } 

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }


  return (
    <>
    <Navbar user={user} handleLogout={handleLogout}/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12"></div>
          <SiteRoutes handleLogin={handleLogin} user={user}/>
        </div>
      </div>
    </>
  )
}

export default App
