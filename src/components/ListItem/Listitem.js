import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import "./ListItem.css";

const ListItem = ({
  listItem,
  setSelectedItems,
  selectedItems,
  currList,
  setCurrList,
}) => {
  const isItemSelected = (listItem, selectedItems) => {
    let isSelected = false;
    selectedItems.forEach((item) => {
      if (item.id === listItem.id) isSelected = true;
    });
    return isSelected;
  };
  const handleSelection = (isSelected) => {
    if (isSelected) {
      let updatedSelectedlist = [];
      updatedSelectedlist = selectedItems.filter((item) => {
        if (item.id !== listItem.id) return true;
        return false;
      });
      setSelectedItems(updatedSelectedlist);
    } else {
      setSelectedItems([...selectedItems, listItem]);
    }
  };
  const handledeletion = (listItem) => {
    let updatedList = [];
    updatedList = currList.filter((item) => {
      return item.id === listItem.id ? false : true;
    });
    setCurrList(updatedList);
  };
  return (
    <div>
      {isItemSelected(listItem, selectedItems) ? (
        <Grid container alignItems={"center"} className="istItem selected">
          <Grid item xs={2.4}>
            <input
              type="checkbox"
              checked
              onClick={() => handleSelection(true)}
            />
          </Grid>
          <Grid item xs={2.4}>
            <p>{listItem.name}</p>
          </Grid>
          <Grid item xs={2.4}>
            <p>{listItem.email}</p>
          </Grid>
          <Grid item xs={2.4}>
            <p>{listItem.role}</p>
          </Grid>
          <Grid item xs={2.4}>
            <div className="list-icons">
              <EditIcon className="edit-icon" />
              <DeleteOutlineIcon color="error" className="delete-icon" />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems={"center"} className="listItem">
          <Grid item xs={2.4}>
            <input type="checkbox" onClick={() => handleSelection(false)} />
          </Grid>
          <Grid item xs={2.4}>
            <p>{listItem.name}</p>
          </Grid>
          <Grid item xs={2.4}>
            <p>{listItem.email}</p>
          </Grid>
          <Grid item xs={2.4}>
            <p>{listItem.role}</p>
          </Grid>
          <Grid item xs={2.4}>
            <div className="list-icons">
              <EditIcon className="edit-icon" />
              <DeleteOutlineIcon
                onClick={() => handledeletion(listItem)}
                color="error"
                className="delete-icon"
              />
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ListItem;
