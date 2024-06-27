import React, {useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchResults } from "../hooks/hooks";

export function SearchResult(){
    const results = useSearchResults()
    //useNavigate 
    const navigate = useNavigate()


    const handleClick = (id)=>{
        navigate(`/search/item/${id}`)
    }
    return(
        <div>
            {results.map((item)=>
                <div onClick={()=>handleClick(item.id)} key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.thumbnail} alt="" />
                    <h5>{item.price}</h5>
                </div>
            )}
        </div>
    )
}

