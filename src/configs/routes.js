import Layout from "../containers";
import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Stones from "../views/Stones";
import Contact from "../views/Contact";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

const routes = [
    {path:'',element:<Home/>,layout:Layout},
    {path:'/about-us',element:<About/>,layout:Layout},
    {path:'/blog',element:<Blog/>,layout:Layout},
    {path:'/stones',element:<Stones/>,layout:Layout},
    {path:'/contact-us',element:<Contact/>,layout:Layout},
    {path:'/Login',element:<Login/>,layout:Layout},
    {path:'/*',element:<NotFound/>,layout:Layout},
]

export default routes;

