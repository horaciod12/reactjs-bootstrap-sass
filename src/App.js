import { Fragment } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "../src/assets/scss/app.scss";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
