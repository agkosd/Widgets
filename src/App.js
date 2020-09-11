import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is react?",
    content: "react is a front end js framework",
  },
  {
    title: "why use react?",
    content: "react is a facorite JS library among engineers",
  },
  {
    title: "how do you use react ? ",
    content: "you use react by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [dDown, setdDown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button
          onClick={() => {
            setdDown(!dDown);
          }}
        >
          Toggle DropDown
        </button>
        {dDown ? (
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            label="Select a Color"
          />
        ) : null}
      </Route>
    </div>
  );
};
