import React, {useState} from 'react'

function Pagination({ data, pageLimit ,currentPage, setCurrentPage}) {
    const totalPages = Math.ceil(data.length / pageLimit)
   
    function goToNextPage(e) {
        e.preventDefault();
        if (currentPage < totalPages)
        setCurrentPage(currentPage + 1);
    }
    function goToPreviousPage(e) {
        e.preventDefault();
        if (currentPage > 1)
        setCurrentPage(currentPage - 1);
    } 
       return (
         <div>
           
            <div className="container-fluid pt-3">
                <nav aria-label="Page navigation" className='d-flex justify-content-center'>
               <ul style={{maxWidth: '5rem'}}class="pagination">
    <li class="page-item help">
      <a class="page-link" href="" onClick={goToPreviousPage} aria-label="Previous">
        <span className="h1"aria-hidden="true">&laquo;</span>
      </a>
                           </li>
                           <li className="page-item pt-4 h4">
    { `${currentPage}/${totalPages}`}</li>
    <li class="page-item help">
    <a class="page-link h1" href="" onClick={goToNextPage}aria-label="Next">
        <span className="h1" aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
            </div>
        
            
        </div>
    )
}

export default Pagination
