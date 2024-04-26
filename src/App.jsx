import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import OverviewPage from "./Components/OverviewPage"
import Sigup from "./Components/Sigup"
import Signin from "./Components/Signin"
import "./index.css"

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/signup" element={<Sigup />} />
          < Route path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
    
     
    </>
  )
}

export default App
