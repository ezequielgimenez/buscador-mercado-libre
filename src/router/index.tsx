import React,{} from "react";
import {
    Routes,
    Route
  } from "react-router-dom";


  
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { SearchResult } from "../pages/SearchResult";
import { SearchItem } from "../pages/SearchItem"; 

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index  element={<Home/>}/>
                <Route path="/search/:busqueda" element={<SearchResult/>} />
                <Route path="/search/item/:idProduct" element={<SearchItem/>} />
            </Route>
        </Routes>
    )
}

