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
import CollectionHeader from './Component/CollectionPage/Header/CollectionHeader';
function App() {

  const [showNavlinks, setNavlinks] = useState(false);
  const NavLinksHandler = () => setNavlinks(true);
  const removeLinksHandler = () => setNavlinks(false);

  return (
    <div>
      <div className='container'>
        <Router>
          <Header removeLinksHandler={removeLinksHandler} showNavlinks={showNavlinks} NavLinksHandler={NavLinksHandler} />
          <Switch>
            <Route exact path='/'>
              <HeroSection />
              <main>
                <Collection />
                <BestSeller />
                <Support />
                <Subscription />
              </main>
            </Route>
            <Route exact path='/collection'>
              <CollectionHeader/>
            </Route>
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
