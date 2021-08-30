import React from 'react'
import './Navbar.css';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
function Navbar({data,setData}) {
    return (
        <div>
            <nav>
                <div id="search">
                <SearchIcon/>
                <input type="text" placeholder='Search...' onKeyPress={(e)=>{
                    if(e.key === "Enter"){
                        axios('https://kdrama-api.herokuapp.com/api/search?q='+e.target.value)
                        .then(res=>{
                            setData([]);
                            console.log(res.data);
                            setData(res.data);
                        })
                    }
                }}/>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
