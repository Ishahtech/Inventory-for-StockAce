import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import OverviewPage from "./Components/OverviewPage"
import Sigup from "./Components/Sigup"
import "./index.css"

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/signup" element={<Sigup />} />
      </Routes>
    </Router>
    
     
    </>
  )
}

export default App
