import { Outlet } from "react-router";
import Fotter from "../Shared/Fotter";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayout;