import React from "react"
import { useState,useEffect } from "react"


export default function UserList(props) {
    // const [data,setData] = useState([])
    const {setData,searchText} = props

    const fetchData = async() => {
        setTimeout( async() => {
            const resp = await fetch(`https://dummyjson.com/products/search?q=${searchText}`)
            const result = await resp.json()
            // console.log(result)
            setData(result.products)
            
        }, 2000);

    }

    useEffect(()=>{
        fetchData()
    },[searchText])
   
    return (
        <div></div>
    )
}