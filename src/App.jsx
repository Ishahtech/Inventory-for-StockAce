

import Home from "./Components/Overview/Home"
import Records from "./Components/Overview/Records"
import Sidebar from "./Components/Overview/Sidebar"
import "./index.css"

function App() {
  return (
    <>
     <div className="grid-container">
     <Sidebar />
     <Home />
     <Records />
     </div> 
     
     
    </>
  )
}

export default App
