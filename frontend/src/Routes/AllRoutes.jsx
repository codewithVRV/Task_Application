import { Route, Routes } from "react-router-dom"
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
// import Home from "../component/"



const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<Login />}/>
            <Route path="/post/create" element={<CreatePost />}/>
        </Routes>
    )
}

export default AllRoutes;