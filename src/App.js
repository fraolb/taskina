import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Border from "./Components/Border";
import Checkbox from "./Components/Checkbox";
import BlockContainer from "./Components/BlockContainer";

function App() {
  const [selectAll, setSelectAll] = useState(false);
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
  ]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedPages = pages.map((page) => ({
      ...page,
      checked: !selectAll,
    }));
    setPages(updatedPages);
  };

  const handlePageCheck = (id) => {
    const updatedPages = pages.map((page) =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(updatedPages);
    setSelectAll(updatedPages.every((page) => page.checked));
  };

  return (
    <div className="App">
      <div className="container">
        <BlockContainer
          name="All Pages"
          onChange={handleSelectAll}
          checked={selectAll}
        />
        <Border />
        <div className="blockWrap">
          {pages.map((page) => (
            <BlockContainer
              key={page.id}
              name={page.name}
              onChange={() => handlePageCheck(page.id)}
              checked={page.checked}
            />
          ))}
        </div>
        <Border />
        <Button />
      </div>
    </div>
  );
}

export default App;
