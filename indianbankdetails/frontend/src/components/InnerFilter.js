import React,{useState} from "react";
import BankName from "../data/banks.json";


function InnerFilter({ setPageLimit,setDataFor, setFilteredData, setCurrentPage,handleSearch }) {
  const [cityValue, setValue] = useState("Select cities")
  const[page, setPage] = useState(6)

  // const HandleFetchData = (params) => {
  //   fetch("http://127.0.0.1:8000/api/branches" + "?q=" + params.q + "&limit=" + params.limit + "&offset="+ params.offset ).then((response) =>
  //     response.json()).then((data) => {
  //       setBankDetails(data);
  //       setFilteredData(data);
  //       setCurrentPage(1)
  //     })
  //   } 
  const handleSelect = (e) => {
    setValue(e.target.value)
    setDataFor(`?q=${e.target.value}&limit=${128000}&offset=0`)
    setCurrentPage(1);
  }
  const handlePageController = (e) => {
    setPageLimit(e.target.value)
    setPage(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div>
      <div className="d-flex justify-content-between py-3">
        <div class="dropdown" >
          <button
            class="btn border border-dark bg-light dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            value={cityValue}
            aria-expanded="false"
            
          >
            {cityValue}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
             {['Bangalore', 'Bhopal', 'Indore', 'Pune', 'Mumbai'].map((data, index) => {
              return <li key={index}>
                <button class="dropdown-item" type="button" value={data} onClick={handleSelect}>
                  {data}
              </button>
              </li>
            }) }
            
            
          </ul>
        </div>
        <div className='form' style={{ maxWidth: '6rem' }}><input class="form-control form-control-md" type="number" value={page} onChange={handlePageController}></input></div>
        <div class="form-group">
          <div class="form-floating" wfd-id="284">
            <input
              type='text'
              class="form-control form-control-lg"
              placeholder="Password"
              onChange={handleSearch}
            />
            <label className="sm">
              <small>Search banks by address or ifsc.</small>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerFilter;
