import { useState } from 'react';
import './App.css';
import BestSeller from './Component/HomePage/BestSeller/BestSeller';
import Collection from './Component/HomePage/Collection/Collection';
import Footer from './Component/HomePage/Footer/Footer';
import Header from './Component/HomePage/Header/Header';
import HeroSection from './Component/HomePage/HeroSection/HeroSection';
import Subscription from './Component/HomePage/Subscription/Subscription';
import Support from './Component/HomePage/Support/Support';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CollectionPage from './Component/CollectionPage/Header/CollectionPage';
import ProductPageDetail from './Component/ProductDetail/ProductPageDetail';
import Cart from './Component/Cart/Cart';
import Delivery from './Component/DeliveryPage/Delivery';
import About from './Component/AboutPage/About';
import Contact from './Component/ContactPage/Contact';


function App() {

  const [showNavlinks, setNavlinks] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const NavLinksHandler = () => setNavlinks(true);
  const removeLinksHandler = () => setNavlinks(false);
  const showFilterBox = () => setShowFilter(!showFilter);

  return (
    <div>
      <div className='container'>
        <Router>
          <Header removeLinksHandler={removeLinksHandler} showNavlinks={showNavlinks} NavLinksHandler={NavLinksHandler} />
          <Switch>
            <main>
              <Route exact path='/'>
                <HeroSection />
                <Collection />
                <BestSeller />
                <Support />
                <Subscription />
              </Route>
              <Route exact path='/collection'>
                <CollectionPage showFilter = {showFilter} showFilterBox = {showFilterBox} />
              </Route>
              <Route exact path='/about'>
                <About/>
              </Route>
              <Route exact path='/contact'>
                <Contact/>
              </Route>
              <Route exact path='/productDetail'>
                <ProductPageDetail/>
              </Route>
              <Route exact path='/cart'>
                <Cart/>
              </Route>
              <Route exact path='/delivery'>
                <Delivery/>
              </Route>
            </main>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    </div>
  )
}

export default App
