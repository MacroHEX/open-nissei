import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "@/screens/Home.tsx";
import {Login} from "@/screens/Login.tsx";
import {Signup} from "@/screens/Signup.tsx";
import PublicRoute from "@/routes/PublicRoute.tsx";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <PublicRoute>
              <Signup/>
            </PublicRoute>
          }
        />
        <Route
          path='/'
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  );
};
