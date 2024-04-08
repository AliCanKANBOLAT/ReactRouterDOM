import { useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './components/SiteRouts'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12"></div>
          <SiteRoutes />
        </div>
      </div>
    </>
  )
}

export default App
