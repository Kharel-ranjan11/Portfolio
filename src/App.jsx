import './App.css'
import { Collection } from './Components/Collection'
import { ParallaxProvider } from "react-scroll-parallax";
function App() {

  return (
    <>
      <ParallaxProvider>

        <Collection />
      </ParallaxProvider>
    </>
  )
}

export default App
