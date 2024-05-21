import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/screens/Home.tsx";
import {Login} from "@/screens/Login.tsx";
import {Signup} from "@/screens/Signup.tsx";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
};
