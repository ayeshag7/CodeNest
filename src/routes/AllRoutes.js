import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CreateNote } from "../pages/CreateNote";
import { EditPage } from "../pages/EditPage";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
   <main>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<ProtectedRoutes><CreateNote/></ProtectedRoutes>}/>
        <Route path="/edit" element={<EditPage/>} />
    </Routes>
   </main>
  )
}
