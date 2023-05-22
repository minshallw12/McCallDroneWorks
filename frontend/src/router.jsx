import { createHashRouter } from "react-router-dom";
import App from './App'
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

const Router = createHashRouter([{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path:"/about/",
            element: <About />
        },
        {
            path:"/pricing/",
            element: <Pricing />
        },
        {
            path:"/contact/",
            element: <Contact />
        }
    ]
}])

export default Router;