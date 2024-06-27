import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as  style from "./searchForm.css" 

import { MyButton } from "../ui/buttons/button"; 
import { MyInput } from "../ui/text-field/text-field";

type myProps={
    onSearch:(any)=>any
}

export function SearchForm(p:myProps){
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
    e.preventDefault()
    const value = e.target.valueSearch.value
    if (value) {    
        p.onSearch(value)
    }else{
        console.log("No hay data en el input");
        
    }
    }
    
    return(
        <div className={style.contenedorMainForm}>
            <form onSubmit={handleSubmit} className={style.contenedorForm}>
                <MyInput type="text" name="valueSearch" />
                <MyButton/>
            </form>
        </div>
    )
}