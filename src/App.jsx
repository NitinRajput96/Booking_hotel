import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
import { Home } from "./Components/Dashboard/Home"
import { Contact } from "./Components/Contact/Contact"
import { About } from "./Components/About/About"
import { Hotels } from "./Components/Hotels/Hotels"
import UseContaxtProvider from "./context/Context"
import { CarRentls } from "./Components/carRentls/CarRentls"
import { CarvList } from "./Components/carRentls/CarvList"
import { ViewCars } from "./Components/carRentls/ViewCars"





function App() {
  

  return (
    <>
      <UseContaxtProvider>
      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="hotels" element={<Hotels/>} />
          <Route path="carsrentl" element={<CarRentls/>} />
          <Route path="carlist" element={<CarvList/>}/>
          <Route path="carview" element={<ViewCars/>}/>
         
         
        </Routes>
        <Footer/>
      </BrowserRouter>
      </UseContaxtProvider>
    </>

  )
}

export default App
