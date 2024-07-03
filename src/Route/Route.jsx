
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Test from "../Components/Test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/test",
                element: <Test></Test>
            },
        ]
    },
]);

const Route = () => {
    return <RouterProvider router={router} />;
};

export default Route;