
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Test from "../Components/Test";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";

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
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
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