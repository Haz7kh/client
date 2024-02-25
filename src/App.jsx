import { useState } from "react";
import "./App.css";
import data from "../src/data/data";

import Wallet from "./components/wallet/Wallet";

function App() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  return (
    <div className="App">
      <h3>E-WALLET</h3>
      <div className="wallet-container">
        <Wallet
          cards={data}
          activeCardIndex={activeCardIndex}
          setActiveCardIndex={setActiveCardIndex}
        />
      </div>
      <button className="add-btn">Add New Card</button>
    </div>
  );
}

export default App;
