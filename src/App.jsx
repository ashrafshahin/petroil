import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Blog from "./components/blog/Blog"
import Copyright from "./components/copyright/Copyright"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Logo from "./components/logo/Logo"
import Map from "./components/map/Map"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/services/Services"
import Slider from "./components/slider/Slider"
import Supplier from "./components/supplier/Supplier"


function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Slider />
      <Services />
      <About />
      <Logo />
      <Blog />
      <Map />
      <Footer />
      <Copyright />
      
      
  
    </>
  )
}

export default App
