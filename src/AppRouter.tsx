import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./auth/ProtectedRoute"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Tickets from "./pages/Tickets"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
    </Routes>
  )
}

export default AppRouter;