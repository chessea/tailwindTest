import { About } from "./componets/About"
import { Landing } from "./componets/Landing"
import { NavBar } from "./componets/NavBar"
import { Skills } from "./componets/Skills"


export const App = () => {
  return (
    <>
      <NavBar/>
      <Landing/>   
      <About/>
      <Skills/>
    </>
  )
}