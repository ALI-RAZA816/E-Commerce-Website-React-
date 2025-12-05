import './App.css'
import BestSeller from './Component/HomePage/BestSeller/BestSeller'
import Collection from './Component/HomePage/Collection/Collection'
import Footer from './Component/HomePage/Footer/Footer'
import Header from './Component/HomePage/Header/Header'
import HeroSection from './Component/HomePage/HeroSection/HeroSection'
import Subscription from './Component/HomePage/Subscription/Subscription'
import Support from './Component/HomePage/Support/Support'
function App() {
  return (
    <div>
      <div className='container'>
        <Header />
        <HeroSection />
        <main>
          <Collection />
          <BestSeller />
          <Support />
          <Subscription />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default App
