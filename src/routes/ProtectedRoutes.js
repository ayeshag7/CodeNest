import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
    const isLoggedInUser = JSON.parse(localStorage.getItem("isLoggedIn"))
  return (
    isLoggedInUser ? children : <Navigate to="/" />
  )
}
