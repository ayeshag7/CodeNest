import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CreateNote } from "../pages/CreateNote";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = ({toggle, setToggle}) => {
  return (
   <main>
    <Routes>
        <Route path="/" element={<HomePage toggle={toggle} setToggle={setToggle}/>}/>
        <Route path="/create" element={<ProtectedRoutes><CreateNote toggle={toggle} setToggle={setToggle}/></ProtectedRoutes>}/>
    </Routes>
   </main>
  )
}
