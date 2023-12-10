import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto bg-gray-800 text-gray-100 ">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;