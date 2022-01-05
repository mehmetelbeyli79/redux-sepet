import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';/* Not Switch yerine Routes gelmiş son versiyonda */
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import "./App.css"
function App() {
  return (
    <div className="">
    <Router>
      
      <Header/>
      <Routes>
        <Route path="/" exact  element={<ProductListing/>}></Route>
        <Route path="/product/:productId"  element={<ProductDetail/>}></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
       
    </div>
  );
}

export default App;
