import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "@/screens/Login.tsx";
import {Signup} from "@/screens/Signup.tsx";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
};
