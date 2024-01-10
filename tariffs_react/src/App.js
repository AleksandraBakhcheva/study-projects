import tariffs from "./assets/tariffs-array";
import Tariff from "./assets/components/Tariff";
import "./assets/styles/index.css";
import { useState } from "react";

function App() {
  const [isActive, setActive] = useState();

  return (
    <div className="container">
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.index}
          header={tariff.header}
          amount={tariff.amount}
          currency={tariff.currency}
          price={tariff.price}
          option={tariff.option}
          note={tariff.note}
          index={tariff.index}
          isActive={isActive}
          onClick={setActive}
        />
      ))}
    </div>
  );
}

export default App;
