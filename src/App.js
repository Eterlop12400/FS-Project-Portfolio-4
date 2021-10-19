import Header from './components/Header';
import Routes from "./components/Routes";
import Footer from "./components/Footer";

import { HashRouter as Router} from "react-router-dom";

function App() {

  return (
      <Router>
          <Header header='Yu-Gi-Oh Card Vault' />
          <Routes />
          <Footer footer='©Copyright 2021. All rights reserved.' />
      </Router>
  );
}


export default App;
