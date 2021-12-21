import React from 'react'
import axios from 'axios'
import './Main.css';
import { css } from "@emotion/react";
import { useHistory } from 'react-router';
import {useEffect,useState} from 'react';
import Barloader from 'react-spinners/BarLoader';
function Main({data,setData}) {
    
    const history = useHistory();
    useEffect(()=>{
        setData([]);

        axios('https://kdrama-api.herokuapp.com/api/home').then(res=>{
            console.log(res.data);
            for(let i=0;i<80;i++){
                setData(prev=>[...prev,res.data[i]])
            }
        })
    },[])
    const style = css`
    margin-top:200px;
    `
    return (
        <div id='main'>
           {
               data.length!=0?
               data.map(items=>{
                   return(
                       <div id='dramas' onClick={()=>{
                           sessionStorage.setItem( "url", data.url );
                           history.push("/watch")
                       }}>
                       <img src={items.image_url} alt="" />
                        <p>{items.title}</p>
                       </div>
                   )
               })
               :
               <>
               <Barloader height={4} css={style} color='white' loading={true} width={150}/>
               </>
            } 
        </div>
    )
}

export default Main
