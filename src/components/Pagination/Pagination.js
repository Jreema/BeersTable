import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ pageNo, setPageNo }) => {
  const handlePrev = () => {
    if (pageNo > 1) setPageNo((prev) => prev - 1);
  };

  const handleNext = () => {
    setPageNo((prev) => prev + 1);
  };
  return (
    <div>
      <div className={classes.paginate} onClick={handlePrev}>
        Prev
      </div>
      <div className={classes.paginate} onClick={handleNext}>
        Next
      </div>
    </div>
  );
};

export default Pagination;
