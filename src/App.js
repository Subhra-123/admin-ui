import React, { useState } from "react";
import List from "./components/List/List";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "./components/deleteButton/Button";
import Pagination from "./components/pagination/Pagination";
import "./App.css";

const App = () => {
  const [globalList, setGlobalList] = useState([]);
  const [list, setList] = useState([]);
  const [currList, setCurrList] = useState([]);
  const [noOfPage, setNoOfPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (searchTerm) => {
    let updatedList = [];
    if (searchTerm !== "") {
      updatedList = globalList.filter((item) => {
        if (
          item.name.includes(searchTerm) ||
          item.email.includes(searchTerm) ||
          item.role.includes(searchTerm)
        )
          return true;
        return false;
      });
      setList(updatedList);
    } else {
      setList(globalList);
    }
    console.log(updatedList);
  };

  return (
    <div className="adminPanel">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <List
        list={list}
        setGlobalList={setGlobalList}
        setList={setList}
        setNoOfPage={setNoOfPage}
        setCurrList={setCurrList}
        currList={currList}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        searchTerm={searchTerm}
      />
      <div className="navigation">
        <Button
          currList={currList}
          setCurrList={setCurrList}
          selectedItems={selectedItems}
        />
        <Pagination
          noOfPage={noOfPage}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
      </div>
    </div>
  );
};

export default App;
