import { useEffect } from "react"
import { Navigate } from "react-router"
import { useLogout } from "../contexts/SessionContext"

const Logout = () => {
    const logout = useLogout()
    useEffect( () => {
        logout()
    }, [] )
    return <Navigate to="/login" />
}

export default Logout