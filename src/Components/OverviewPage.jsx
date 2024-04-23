import Home from "./Overview/Home"
import Records from "./Overview/Records"
import Sidebar from "./Overview/Sidebar"



function OverviewPage() {
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

export default OverviewPage
