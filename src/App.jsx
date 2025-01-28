import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
import { Home } from "./Components/Dashboard/Home"
import { Contact } from "./Components/Contact/Contact"
import { About } from "./Components/About/About"
import { Hotels } from "./Components/Hotels/Hotels"






function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="hotels" element={<Hotels/>} />
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  )
}

export default App
