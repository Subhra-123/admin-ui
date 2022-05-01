import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import ListItem from "../ListItem/Listitem";
import ListHeading from "../listHeading/ListHeading";
import "./list.css";

const List = ({
  list,
  setList,
  setNoOfPage,
  currList,
  setCurrList,
  selectedPage,
  setSelectedPage,
  selectedItems,
  setSelectedItems,
  searchTerm,
  setGlobalList,
}) => {
  const [allSelected, setAllSelected] = useState(false);
  const listHeading = {
    name: "Name",
    email: "Email",
    role: "Role",
    actions: "Actions",
  };
  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const fetchList = async () => {
    const res = await axios.get(url);
    return res;
  };

  const selectedList = (list, pageNo) => {
    const startIndex = (pageNo - 1) * 10;
    const endIndex = pageNo * 10;

    const currList = list.slice(startIndex, endIndex);

    return currList;
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const result = await fetchList();
        setGlobalList(result.data);
        setList(result.data);

        const numOfPage = Math.ceil(result.data.length / 10);

        setNoOfPage(numOfPage);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, [setList,setGlobalList,setNoOfPage]);

  useEffect(() => {
    setCurrList(selectedList(list, selectedPage));
  }, [selectedPage, searchTerm,list,setCurrList]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <ListHeading
          listHeading={listHeading}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          currList={currList}
          setAllSelected={setAllSelected}
          allSelected={allSelected}
        />
      </Grid>
      <Grid item xs={12}>
        {currList.map((listItem) => (
          <ListItem
            key={listItem.id}
            currList={currList}
            setCurrList={setCurrList}
            listItem={listItem}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default List;
