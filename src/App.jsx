import './App.css'
import BestSeller from './Component/BestSeller/BestSeller'
import Collection from './Component/HomePage/Collection/Collection'
import Header from './Component/HomePage/Header/Header'
import HeroSection from './Component/HomePage/HeroSection/HeroSection'
function App() {
  return (
    <div>
        <div className='container'>
          <Header/>
          <HeroSection/>
          <Collection/>  
          <BestSeller/>  
        </div>
    </div>
  )
}

export default App
