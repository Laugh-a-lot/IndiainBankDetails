import React, { useState, useEffect } from "react";
import InnerFilter from "./InnerFilter";
import BankName from "../data/banks.json";
import Pagination from "./Pagination";

function ShowDetails({filteredData,
  setFilteredData,
  setDataFor,
  data,
  setFavourite,
  favouriteBanks,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(6);
  
  const handleFavourite = (bank) => {
    let array = favouriteBanks;
    let addArray = true;
    array.map((item, key) => {
      if (item.ifsc === bank.ifsc) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(bank);
    }
    setFavourite([...array]);

    localStorage.setItem("favourites", JSON.stringify(favouriteBanks));

    var storage = localStorage.getItem("favItem" + bank.ifsc || "0");
    if (storage == null) {
      localStorage.setItem("favItem" + bank.ifsc, JSON.stringify(bank));
    } else {
      localStorage.removeItem("favItem" + bank.ifsc);
    }
  };

  const handleSearch = (event) => {
    let value = event.target.value.toUpperCase();
    setCurrentPage(1);
    let result = [];
    result = data.filter((data) => {
      return (
        data.address.search(value) != -1 ||
        BankName[data.bank].name.search(value) != -1 ||
        data.ifsc.search(value) != -1 ||
        data.state.search(value) != -1 ||
        data.city.search(value) != -1 ||
        data.district.search(value) != -1
      );
    });
    setFilteredData(result);
    console.log(result);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <div>
      <div
        style={{ minHeight: "90vh" }}
        className="container-fluid shadow-lg rounded-3 bg-white"
      >
        <InnerFilter
          setPageLimit={setPageLimit}
          setDataFor={setDataFor}
          setCurrentPage={setCurrentPage}
          setFilteredData={setFilteredData}
          handleSearch={handleSearch}
        />
        <h2 className="text-muted d-flex text-center align-items-center">
          {filteredData?(filteredData.length == 0 ? "Try searching in the filter section." : ""):""}
        </h2>
        {filteredData ? (
          <div className="gridwrapper justify-content-center">
            {Object.keys(filteredData)
              .slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
              .map((data) => (
                <div
                  className="card text-white bg-info"
                  style={{
                    maxWidth: "18rem",
                    minHeight: "18rem",
                    maxHeight: "2rem",
                  }}
                  wfd-id="92"
                >
                  <div className="d-flex">
                    <h6 class="card-header text-center ">
                      {BankName[filteredData[data].bank].name}{" "}
                    </h6>
                    <div className="ms-auto p-2 bd-highlight">
                      {favouriteBanks.find(
                        (o) => o.ifsc === filteredData[data].ifsc
                      ) ? (
                        <svg
                          onClick={() =>
                            handleFavourite(filteredData[data])
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="20"
                          fill="#f00"
                          class="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      ) : (
                        <svg
                          onClick={() =>
                            handleFavourite(filteredData[data])
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="20"
                          fill="#fff"
                          class="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div class="card-header text-center h5">
                    {"IFSC: " + filteredData[data].ifsc}
                  </div>

                  <div className="d-flex ps-1">
                    Branch:
                    <p class="card-text text-start ps-2">
                      {" " + filteredData[data].branch}
                    </p>
                  </div>

                  <div className="d-flex ps-1">
                    City:
                    <p class="card-text text-start ps-2">
                      {" " + filteredData[data].city}
                    </p>
                  </div>

                  <div className="d-flex ps-1">
                    State:
                    <p class="card-text text-start ps-2">
                      {" " + filteredData[data].state}
                    </p>
                  </div>

                  <div className="d-flex ps-1">
                    Address:
                    <p class="card-text text-start ps-2">
                      {" " + filteredData[data].address}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          ""
        )}
        {filteredData ? (
          <Pagination
            data={filteredData}
            pageLimit={pageLimit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ShowDetails;
