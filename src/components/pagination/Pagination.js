import React from "react";
import Number from "./Number";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "./Pagination.css";

const Pagination = ({ noOfPage, setSelectedPage, selectedPage }) => {
  const handlePageSelection = (type) => {
    if (type === "leftmost") setSelectedPage(1);
    else if (type === "rightmost") setSelectedPage(noOfPage);
    else if (type === "right") {
      if (selectedPage < noOfPage) setSelectedPage(selectedPage + 1);
    } else {
      if (selectedPage > 1) setSelectedPage(selectedPage - 1);
    }
  };
  const renderNumbers = () => {
    const renderElements = [];
    for (let i = 1; i <= noOfPage; i++) {
      renderElements.push(
        <Number
          key={i}
          number={i}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
        />
      );
    }
    return renderElements;
  };
  return (
    <div className="pagination">
      <KeyboardDoubleArrowLeftIcon
        className={`arrow-icon ${selectedPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageSelection("leftmost")}
      />
      <ChevronLeftIcon
        className={`arrow-icon ${selectedPage === 1 ? "disabled" : ""}`}
        onClick={() => handlePageSelection("left")}
      />
      {renderNumbers()}
      <ChevronRightIcon
        className={`arrow-icon ${selectedPage === noOfPage ? "disabled" : ""}`}
        onClick={() => handlePageSelection("right")}
      />
      <KeyboardDoubleArrowRightIcon
        className={`arrow-icon ${selectedPage === noOfPage ? "disabled" : ""}`}
        onClick={() => handlePageSelection("rightmost")}
      />
    </div>
  );
};

export default Pagination;
