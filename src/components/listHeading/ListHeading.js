import React from "react";
import "./listheading.css";
import Grid from "@mui/material/Grid";

const ListHeading = ({
  listHeading,
  setSelectedItems,
  currList,
  selectedItems,
  allSelected,
  setAllSelected,
}) => {
  const handleSelected = () => {
    if (selectedItems.length < currList.length) {
      setSelectedItems(currList);
    } else {
      setSelectedItems([]);
    }
    setAllSelected(!allSelected);
  };
  return (
    <Grid container alignItems={"center"} className="listHeading">
      <Grid item xs={2.4}>
        <input type="checkbox" onClick={handleSelected} />
      </Grid>
      <Grid item xs={2.4}>
        <h4>{listHeading.name}</h4>
      </Grid>
      <Grid item xs={2.4}>
        <h4>{listHeading.email}</h4>
      </Grid>
      <Grid item xs={2.4}>
        <h4>{listHeading.role}</h4>
      </Grid>
      <Grid item xs={2.4}>
        <h4>{listHeading.actions}</h4>
      </Grid>
    </Grid>
  );
};

export default ListHeading;
