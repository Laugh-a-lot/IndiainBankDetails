import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import useSWR from 'swr';
import axios from 'axios'
import Navbar from './Navbar'
import Filter from './Filter'
import ShowDetails from './ShowDetails'

function App() {
    
    
    const [favouriteBanks, setFavourite] = useState([])
    const [DataFor, setDataFor] = useState(null);
    const getFavourite = JSON.parse(localStorage.getItem('favourites') || '0')
    const fetcher = (...params) => axios.get('http://127.0.0.1:8000/api/branches' + params).then(res => res.data)
    const { data, error } = useSWR(DataFor, fetcher, {
        revalidateOnFocus: false,
        revalidateOnMount:true,
        revalidateOnReconnect: false,
      })
    const [filteredData, setFilteredData] = useState(data)
    useEffect(() => {
        if (getFavourite !== 0 ) 
            setFavourite([...getFavourite])
            setFilteredData([...getFavourite])
    }, []);
    return (
        <div>
            <div className="container-fluid vh-100">
             <Navbar />
                <div className="container-fluid mt-3">
                    <div className="row h-100">
                        <div className="col-sm-4 h-100">< Filter setDataFor={setDataFor}/></div>
                        <div className="col-sm-8" ><ShowDetails filteredData={filteredData }setFilteredData={setFilteredData} setDataFor={setDataFor} data={data? data: favouriteBanks} setFavourite={setFavourite} favouriteBanks={favouriteBanks }/></div>
                    </div>
                   
                   
            </div>
            
            </div>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('app'))


