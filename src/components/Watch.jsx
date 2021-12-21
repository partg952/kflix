import React from 'react'
import './Watch.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
function Watch() {
    const [info,setInfo] = useState([]);
    console.log(info)
    const [href,setUrl] = useState('');
    useEffect(()=>{
            axios.post('https://kdrama-api.herokuapp.com/api/show-data',{url:sessionStorage.getItem('url')})
            .then(details=>{
                console.log(details.data)
                setInfo(details.data[0]);
            })
    },[])
    return (
        <div>
        {

            info!=null?
            <div id="main">
            {
                href.length!=0 &&
            <iframe src={href} width="100%" height="400px" style={{marginTop:'20px'}} allowFullScreen frameborder="0"></iframe>
                    }
            <img id='poster' src={info.poster_url} alt="" />
                <span>
                        <h1> {info.title} </h1>
                        <p>{info.other_info}</p>
                </span>
                
                <div id="episodes">
                
                    {
                        info.length!=0 &&
                        info.episode.map(episode=>{
                            return(
                                <div>
                                    <button onClick={()=>{
                                       setUrl(episode.ep_url)
                                    }}> {episode.ep_number} </button>
                                </div>
                            )
                        })
                    }
                
                </div>
            </div>
            :
            <h1>Loading...</h1>
        }
        </div>
    )
}

export default Watch
