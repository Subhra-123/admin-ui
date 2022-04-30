import React from "react";
import "./button.css";

const Button = ({ currList, setCurrList, selectedItems }) => {
  const handleDeletion = () => {
    let updatedList = [];
    if (selectedItems.length === 0) updatedList = [...currList];
    else {
      currList.forEach((currItem) => {
        let isSelected = false;
        selectedItems.forEach((selectedItem) => {
          if (selectedItem.id === currItem.id) isSelected = true;
        });
        if (!isSelected) updatedList.push(currItem);
      });
    }
    setCurrList(updatedList);
  };
  return (
    <div>
      <button className="delete-button" onClick={handleDeletion}>
        Delete Selected
      </button>
    </div>
  );
};

export default Button;
