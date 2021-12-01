import React from "react";

const Pagination = ({ goToPrevPage, goToNextPage }) => (
  <div>
    { goToPrevPage && <button onClick={goToPrevPage}>Prev</button> }
    { goToNextPage && <button onClick={goToNextPage}>Next</button> }
  </div>
)

export default Pagination