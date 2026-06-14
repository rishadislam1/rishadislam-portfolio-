
import './App.css'
import Navbar from "#components/Navbar.jsx";
import Welcome from "#components/Welcome.jsx";
import Dock from "#components/Dock.jsx";
import {Draggable} from "gsap/Draggable"
import gsap from "gsap";
import Terminal from "#windows/Terminal.jsx";

gsap.registerPlugin(Draggable);

function App() {


  return (
    <main>
      <Navbar/>
        <Welcome/>
        <Dock/>
      <Terminal/>
    </main>
  )
}

export default App
