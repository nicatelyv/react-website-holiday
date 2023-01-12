import { createBrowserRouter } from "react-router-dom";
import About from "../page/About";
import DolorePariaturPage from "../page/DolorePariatur";
import Home from "../page/Home";
import MagnaNostrudPage from "../page/MagnaNostrud";
import VelitEssePage from "../page/VelitEsse";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path:"/magnanostrudpage",
        element: <MagnaNostrudPage/>
    },
    {
        path:"/dolorepariaturpage",
        element: <DolorePariaturPage/>
    },
    {
        path:"/velitessepage",
        element: <VelitEssePage/>
    }
]);
export default router