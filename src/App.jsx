import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";
import Login from "./actions/Login";
import ItemToevoegen from "./actions/itemtoevoegen";
import BoodschappenRegel from "./BoodschappenRegel";

//import {Decrement} from './actions/Decrement'

function App() {
  const ingelogd = useSelector((state) => state.isLogged);
  const counter = useSelector((state) => state.counter);
  const boodschappenlijst = useSelector((state) => state.boodschappenlijst);
  const dispatch = useDispatch();
  const [item_title, setItem] = useState("");

  let text = "Log in";
  if (ingelogd) text = "Log uit";

  const voegItemToe = (item) => {
    console.log("het begin " + item);
    dispatch(ItemToevoegen(item));
    setItem(item);
    document.getElementById("item").value = "";
  };

  const boodschappenWeergave = boodschappenlijst.map((element, index) => (
    <BoodschappenRegel key={index} element={element.title} />
  ));

  return (
    <div className="App">
      <h1>De counter is {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>plus</button>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(Login())}>{text}</button>
      {ingelogd ? <p>You're allowed to see this data</p> : ""}
      <br />
      <form
        onSubmit={(e) => {
          voegItemToe(document.getElementById("item").value);
          e.preventDefault();
        }}
      >
        <input id="item" type="text" name="item" />
        <button>toevoegen</button>
      </form>
      <ul>{boodschappenWeergave}</ul>
    </div>
  );
}

export default App;
