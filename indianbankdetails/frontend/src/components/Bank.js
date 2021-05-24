import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BankName from "../data/banks.json";

function Bank(favouriteBanks, setFavourite) {
  const location = useLocation();
  const { data } = location.state;
  const [isFavourite, setIsFavourite] = useState(
    favouriteBanks["favouriteBanks"].find((o) => o.ifsc == data.ifsc)
      ? true
      : false
  );
    const handleFavourite = (data) => {
      console.log('clicked');
    let array = favouriteBanks["favouriteBanks"]
    let addArray = true;
    array.map((item, key) => {
      if (item.ifsc === data.ifsc) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(data);
    }
    () => setFavourite(...array);
        setIsFavourite(!isFavourite);
    localStorage.setItem("favourites", JSON.stringify(favouriteBanks["favouriteBanks"]));

    var storage = localStorage.getItem("favItem" + data.ifsc || "0");
    if (storage == null) {
      localStorage.setItem("favItem" + data.ifsc, JSON.stringify(data));
    } else {
      localStorage.removeItem("favItem" + data.ifsc);
    }
  };
  return (
    <div>
      <div className=" container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div
          className="card mb-3 text-white bg-success"
          style={{
            maxWidth: "25rem",
            minHeight: "25rem",
          }}
          wfd-id="92"
        >
          <div className="d-flex">
            <h3 class="card-header text-center ">{BankName[data.bank].name}</h3>
            <div className="ms-auto p-2 bd-highlight">
              {isFavourite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#f00"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                  onClick={() => handleFavourite(data)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  fill="#fff"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                  onClick={() => handleFavourite(data)}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              )}
            </div>
          </div>
          <div class="card-header text-center h3">{"IFSC: " + data.ifsc}</div>

          <div className="d-flex ps-1 h5">
            Branch:
            <p class="card-text text-start ps-2">{" " + data.branch}</p>
          </div>
          <div className="d-flex ps-1 h5">
            District:
            <p class="card-text text-start ps-2 ">{" " + data.district}</p>
          </div>
          <div className="d-flex ps-1 h5">
            City:
            <p class="card-text text-start ps-2 ">{" " + data.city}</p>
          </div>

          <div className="d-flex ps-1 h5">
            State:
            <p class="card-text text-start ps-2">{" " + data.state}</p>
          </div>

          <div className="d-flex ps-1 h5">
            Address:
            <p class="card-text text-start ps-2">{" " + data.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bank;
