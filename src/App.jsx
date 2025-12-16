import { useState } from 'react';
import './App.css';
import BestSeller from './Component/HomePage/BestSeller/BestSeller';
import Collection from './Component/HomePage/Collection/Collection';
import Footer from './Component/HomePage/Footer/Footer';
import Header from './Component/HomePage/Header/Header';
import HeroSection from './Component/HomePage/HeroSection/HeroSection';
import Subscription from './Component/HomePage/Subscription/Subscription';
import Support from './Component/HomePage/Support/Support';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import CollectionPage from './Component/CollectionPage/Header/CollectionPage';
import ProductPageDetail from './Component/ProductDetail/ProductPageDetail';
import Cart from './Component/Cart/Cart';
import Delivery from './Component/DeliveryPage/Delivery';
import About from './Component/AboutPage/About';
import Contact from './Component/ContactPage/Contact';
import SearchBar from './Component/SearchBar/SearchBar';
import contextProvider from './assets/ContextProvider/ContextStore';
import {productsData} from '../items';

function App() {

  //states
  const [showNavlinks, setNavlinks] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [title,setTitle] = useState(null);
  const [price,setPrice] = useState(null);
  const [image,setImage] = useState(null);
 

  //functions
  const NavLinksHandler = () => setNavlinks(true);
  const removeLinksHandler = () => setNavlinks(false);
  const showFilterBox = () => setShowFilter(!showFilter);
  const showSearchBar = () => setSearch(true);
  const hideSearchBar = () => setSearch(false);
  const productDetailHandler = (index) =>{
    const productTitle = productsData[index].title
    const productImage = productsData[index].img
    const productPrice = productsData[index].price
    setTitle(productTitle);
    setPrice(productPrice);
    setImage(productImage);
  }
  
  return (
    <div>
      <div className='container'>
        <contextProvider.Provider value={{
          removeLinksHandler,
          showNavlinks,
          NavLinksHandler,
          showFilter,
          showFilterBox,
          search,
          showSearchBar,
          hideSearchBar,
          productsData,
          productDetailHandler,
          title,
          price,
          image
        }}>
          <Router>
            <Header />
            <SearchBar />
            <Switch>
              <Route exact path='/'>
                <HeroSection />
                <Collection />
                <BestSeller />
                <Support />
                <Subscription />
              </Route>
              <Route exact path='/collection'>
                <CollectionPage />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/productDetail'>
                <ProductPageDetail />
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <Route exact path='/delivery'>
                <Delivery />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </contextProvider.Provider >
      </div>
    </div>

  )
}

export default App
