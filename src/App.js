import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AddCommand from "./components/AddCommand";
import MovedRoverList from "./components/MovedRoverList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import elzama from "./assets/elzama.jpg";

const App = () => {
  return (
    <div className="container wrapper p-4 mt-5 ">
      <h1 className="text-primary-50 text-light"> <img className="elzama" src={elzama} alt={elzama} /> Hello Peter
      </h1>
      <AddCommand />
      <MovedRoverList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
