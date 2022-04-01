
import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Foo from "./components/footer/foot";


import'./app.css';
// import me from "./img/me.png";

const App = () => {

  return (
    <div className="app"
      // /* style={{
      //   background: darkMode ? "#222" : "peach",
      //   color: darkMode && "white",
      // }} */
    >
  
      <Intro />
      <About />
      <div className="col">
      <ProductList />    
      </div>
      <Foo />
    </div>
  );
};

export default App;
