import React, { useState, useEffect } from "react";

function Filter({setDataFor}) {
  
  const [limit, setLimit] = useState(128000)
  const [offset, setOffset] = useState('0')
  var params = null
  
  $(document).ready(function () {
    $("#525").popover();
  });
  
  
  

 // }
  
  // const HandleFetchBranchData = (params) => {
  //   const { data, error } = useSWR(params, fetcher)
  //       props.setBankDetails(data);
  //       props.setFilteredData(data);
  //     };
  //   setDataFor(false);
  //   console.log("it should work");
  // };
  // const HandleFetchData = (params) => {
  //   if (data) {
  //     props.setBankDetails(data);
  //     props.setFilteredData(data);
  //   }
  //     };
  

  
  ;
  return (
    <div>
      <div className="container-fluid rounded shadow-lg bg-light pb-5">
        
        <div className="d-flex bd-highlight pt-3">
          <h3 className="w-100 bd-highlight text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#008BDC"
              class="bi bi-funnel"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
            </svg>
            Filters
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            data-bs-toggle="popover"
            data-bs-placement="right"
            data-bs-content={`Search here to filter all the bank details available. You can search here by address,ifsc or branch. Limit field is to control the number of results . Limit and Offset are optional.Note: Fill any of the bottom two fields.`}
            id="525"
            class="bi bi-question-circle flex-shrink-1 bd-highlight help"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
        </div>
        <form action="" >
          <div class="form-group" wfd-id="297">
            <div className="row">
              <h6 className="col col-4 mt-3">Limit(Optional): </h6>
              <input
                type="text"
                class="col-8 form-control"
                type="number"
                placeholder="100"
                onChange={(e)=> setLimit(e.target.value)}
              />
            </div>

            <div className="row">
              <h6 className="col-4 mt-3">Offset(Optional): </h6>
              <input
                type="text"
                class="col-8 form-control"
                type="number"
                placeholder="0"
                onChange={(e)=> setOffset(e.target.value)}
              />
            </div>
            <label class="form-label mt-4">
              Search for banks here by branches.
            </label>
            <div class="form-floating mb-3">
              <input class="form-control" placeholder="name@example.com" onChange={(e)=> setDataFor(`/autocomplete/?q=${e.target.value}&limit=${limit}&offset=${offset}`)} />
              <label> e.g. Rtgs, Bangalore, Pune, Mumbai</label>
              <div className="text-center mt-2">
                
              </div>
            </div>
            <label class="form-label ">
              Search for banks here by address or ifsc.
            </label>
            <div class="form-floating">
              <input class="form-control bg-light" placeholder="Password" onChange={(e)=> setDataFor(`?q=${e.target.value}&limit=${limit}&offset=${offset}`)}/>
              <label>e.g. Bhopal, Nehru Nagar, Akola.</label>
              <div className="text-center my-2">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
