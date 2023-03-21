import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import About from "./pages/About/About";
import { Pokemon } from './pages/Pokemon/Pokemon';
function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const onClickMenuItem = (itemClicked)=>{
    setSelectedPage(itemClicked);
  }
  return (
    <section className="App">
      <h1>Mi Primer App de React</h1>
      <Menu
        onClickHandler={onClickMenuItem}
        arrItems={
          [ "Home",
            "About",
            "Contact",
            "Pokemon",
            "Sign In",
            "Sign Up",
          ]
        }
      />
      <hr />
      {("Home" === selectedPage)?<Home />: null}
      {("About"=== selectedPage)?<About />: null}
      {("Pokemon" === selectedPage)?<Pokemon />:null}
    </section>
  );
}

export default App;
