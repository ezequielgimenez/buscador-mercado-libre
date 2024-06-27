import React from "react";
import * as  style from "./text-field.css"

type p ={
    name:string,
    type:string
}
export function MyInput(myProp : p ){

    return (
        <div className={style.mainInput} >
            <input className={style.inputForm} type={myProp.type} name={myProp.name} />
        </div>
    )
}