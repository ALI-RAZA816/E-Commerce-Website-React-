import './App.css'
import BestSeller from './Component/HomePage/BestSeller/BestSeller'
import Collection from './Component/HomePage/Collection/Collection'
import Header from './Component/HomePage/Header/Header'
import HeroSection from './Component/HomePage/HeroSection/HeroSection'
import Support from './Component/HomePage/Support/Support'
function App() {
  return (
    <div>
        <div className='container'>
          <Header/>
          <HeroSection/>
          <Collection/>  
          <BestSeller/>
          <Support/> 
        </div>
    </div>
  )
}

export default App
