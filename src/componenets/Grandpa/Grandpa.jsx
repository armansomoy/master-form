import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <h2>Net Money: {money} </h2>
      <MoneyContext.Provider value={[money, setMoney]}>
      <AssetContext.Provider value="Gold">
        <section className="flex">
          <Father asset={asset}></Father>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/*
1. create a contxt & export context
2. add provider for the context with a value
3. useContext to access value
*/
