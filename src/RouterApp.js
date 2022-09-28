import React from "react"

import {Route,Routes,Navigate, BrowserRouter } from 'react-router-dom'
import App from './App';
import AppE from './AppE';

const RouterApp=()=>{
return(   
<BrowserRouter>
<Routes>
    <Route path= "/" element = {<Navigate to = "English"/>}/> 
    <Route path = "Esp" element ={<AppE/>} />
    <Route path = "English" element={<App/>}  />
    {/* <Route path= "*" element = {<Navigate to = "Eng"/>}/> */}
    
</Routes>
</BrowserRouter>)
}
export default RouterApp