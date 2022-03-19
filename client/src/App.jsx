import React from "react";
import {
  Welcome,
  Navbar,
  Loader,
  Services,
  Footer,
  Transctions,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transctions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
