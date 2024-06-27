import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";

import '@coreui/coreui/dist/css/coreui.min.css'
import "./index.css"

ReactDOM.createRoot(document.querySelector(".root")).render(
    <RecoilRoot>
        <Suspense fallback={null}>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </Suspense>
    </RecoilRoot>
)