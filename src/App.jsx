import { useEffect, useState } from 'react';
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

  //renderinitial items
  useEffect(()=>{
    setProducts(productsData);
    setCollectionProducts(productsData);
  },[]);


  //states
  const [products, setProducts] = useState([]);
  const [showNavlinks, setNavlinks] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [title,setTitle] = useState(null);
  const [price,setPrice] = useState(null);
  const [image,setImage] = useState(null);
  const [sizeErr,setSizeErr] = useState(false);
  const [itemAddMsg,setitemAddMsg] = useState(false);
  const [otherImages,setotherImage] = useState([]);
  const [sizes,setSizes] = useState(null);
  const [activeSize,setActiveSize] = useState(null);
  const [itemIndex,setitemIndex] = useState(null);
  const [cartItem, setcartItem] = useState([]);
  const [cartQuantity,setcartQuantity] = useState(1);
  const [collectionProducts,setCollectionProducts] = useState([]);
 

  //functions
  const NavLinksHandler = () => setNavlinks(true);
  const removeLinksHandler = () => setNavlinks(false);
  const showFilterBox = () => setShowFilter(!showFilter);
  const showSearchBar = () => {
    setSearch(true)
  };
  const hideSearchBar = () => setSearch(false);
  const productDetailHandler = (index) =>{
    const productTitle = products[index].title
    const productImage = products[index].img
    const productPrice = products[index].price
    const productSizes = products[index].size
    const DiffImages = products[index].relatedImages
    setTitle(productTitle);
    setPrice(productPrice);
    setImage(productImage);
    setSizes(productSizes);
    setotherImage(DiffImages);
    setitemIndex(index);
  }


  // eventListner add item to cart
  const ADDTOCARTHandler = () =>{

    setTimeout(() =>{
      setSizeErr(false);
      setitemAddMsg(false);
    },5000);

    if( activeSize === null) {
      setSizeErr(true);
      setitemAddMsg(false);
      return;
    }else{
      setSizeErr(false);
      setitemAddMsg(true);
    }

    const item = products[itemIndex];
    setcartItem([...cartItem,
      {...item,
        quantity:cartQuantity,
        itemSize:activeSize
      }]);
    setActiveSize(null);

  }
  
  // selectSize Handler
  const sizeHandler = (item) => {
    setActiveSize(item);
  }

  // itemSize Handler
  const quantityHandler = (event) => {
    setcartQuantity(event.target.value);
  }


  // filter handler // Categories: "Women","Men","Kids"
  const categoryHandler = (event,category) =>{
    if(event.target.checked === true){
      const filterProducts = products.filter(item => item.category.includes(category));
      setCollectionProducts(filterProducts);
    }else{
      setCollectionProducts(productsData);
    }
  }
  
  // filter handler // Type: "Topwear","BottomWear","WitnerWear"
  const typeHandler = (event,category) =>{
    if(event.target.checked === true){
      setCollectionProducts(products.filter(item => item.type.includes(category)));
    }else{
      setCollectionProducts(productsData);
    }
  } 
  
  // deleteHandler  //delete item from cart
  const deleteHandler = (id) =>{
    setcartItem(cartItem.filter((item) => {
      return item.id !== id
    }));
  }
  
  // select item related images
  const changeImageHandler = (item) => {
    setImage(item)
  }
  
  // searchBar handler
  const searchHandler = (event) =>{
    setCollectionProducts(products.filter(item => item.title.includes(event.target.value)));
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
          products,
          productDetailHandler,
          title,
          price,
          image,
          sizes,
          otherImages,
          ADDTOCARTHandler,
          cartItem,
          sizeHandler,
          activeSize,
          categoryHandler,
          collectionProducts,
          typeHandler,
          deleteHandler,
          changeImageHandler,
          searchHandler,
          sizeErr,
          itemAddMsg,
          quantityHandler,
          cartQuantity
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
