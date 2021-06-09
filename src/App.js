import React from "react";
//global styles
import GlobalStyle from "./components/GlobalStyle";

//import pages
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <GlobalStyle />
    </div>
  );
}

export default App;
