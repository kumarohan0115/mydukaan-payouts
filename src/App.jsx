import { useState } from "react"
import Navbar from "./components/Navbar/Navigationbar"
import SidePanel from "./components/Sidebar/Sidebar"
import TransactionContainer from "./components/TnxContainer/TnxContainer"
import Dashboard from "./components/Dashboard/Dashboard"

function App() {
  const [sidePanelActive, setSidePanelActive] = useState(false)

  return (
    <div className="App">
      <div className="main">
          <SidePanel sidePanelActive = {sidePanelActive} setSidePanelActive={setSidePanelActive}/>
          <section className="navbar-section" style={{width:'100%', background:"#f7f7f7"}}>
            <Navbar sidePanelActive = {sidePanelActive} setSidePanelActive={setSidePanelActive} />
            <Dashboard />
            <TransactionContainer />
          </section>
      </div>
    </div>
  )
}

export default App
