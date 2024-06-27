import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as style from "./layaout.module.css"

//Otro component
import { SearchForm } from "./SearchForm";

export function Layout(){
    const navigate = useNavigate()
    const handleRoute = (data)=>{
        const value = data
        navigate(`/search/${value}`)

    }

    return(
        <div className={style.layaoutMain}>
            <header  className={style.headerMain}>
                 <img className={style.logoHeader} src="https://statics.eleconomista.com.ar/2020/03/614e2f5f8c618.png" alt="" />
                 <SearchForm onSearch={handleRoute}></SearchForm>
            </header>
            <main className={style.contentMain}>
                 <Outlet/> 
            </main>
        </div>
    )
}