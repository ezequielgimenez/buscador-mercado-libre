import React, {Component, useEffect, useState } from "react";

import AwesomeSlider from 'react-awesome-slider';

import { useSearchItem } from "../hooks/hooks";


export function SearchItem(){
    const results =  useSearchItem()

    return(
        <div>
          {results && results.map((item,index)=>
            <div key={index}>
                <h3>{item.title}</h3>
                <h5>{"$ " + item.price}</h5>
                <AwesomeSlider className="custom-slider">
                    {item.pictures && item.pictures.map((img,index)=>
                        <div key={index}>
                            <img src={img.url} alt="" />
                        </div>                                    
                    )}
                 </AwesomeSlider>
            </div>
        )}
        </div>
    )
}

