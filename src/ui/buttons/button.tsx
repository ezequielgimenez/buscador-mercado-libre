import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

import * as style from "./button.css"


export function MyButton() {
return (
    <div className={style.contenedorButton}>
        <button className={style.button}>
          <FaMagnifyingGlass/>
        </button>
    </div>
)
}
