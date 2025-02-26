import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import ReserveHotel from "../pages/ReserveHotel";
import ReserveRestaurant from "../pages/ReserveRestaurant";
import LoginRegister from "../pages/LoginRegister";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/main",
        element: <Main />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/reservehotel",
        element: <ReserveHotel />,
    },
    {
        path: "/reserverestaurant",
        element: <ReserveRestaurant />,
    },
    {
        path: "/loginregister",
        element: <LoginRegister />,
    }
]);

        