import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const navigate = useNavigate();

  const { search, pathname } = useLocation();

  //ASSES THE ENTIRE QUERY PARAMS FROM search
  //ACCESS THE ROUTE FROM pathname

  //HANDLE PAGE CHANGE
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageBtn = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    //first button
    pageButtons.push(addPageBtn({ pageNumber: 1, activeClass: page === 1 }));

    // dots
    if (page > 2) {
      pageButtons.push(
        <button
          className="btn btn-xs sm:btn-md border-none join-item"
          key="dots-1"
        >
          ...
        </button>
      );
    }

    //Current page button
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageBtn({ pageNumber: page, activeClass: true }));
    }

    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button
          className="btn btn-xs sm:btn-md border-none join-item"
          key="dots-1"
        >
          ...
        </button>
      );
    }

    //last button
    pageButtons.push(
      addPageBtn({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            //SET THE PAGE TO THE LAST PAGE IF THE VALUE OF prevPage IS LESS THAN ONE
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
