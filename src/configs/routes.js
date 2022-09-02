import Layout from "../containers";
import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Stones from "../views/Stones";
import StonesLogin from "../views/StonesLogin";
import Contact from "../views/Contact";
import Register from "../views/Register";
import NotFound from "../views/NotFound";
import RegisterFinal from "../views/RegisterFinal";
import UserAccount from "../views/UserAccount";
import SingleBlog from "../views/single/SingleBlog";

const routes = [
    {path:'',element:<Home/>,layout:Layout},
    {path:'/about-us',element:<About/>,layout:Layout},
    {path:'/blog',element:<Blog/>,layout:Layout},
    {path:'/blog/:post_id',element:<SingleBlog/>,layout:Layout},
    {path:'/stones',element:<Stones/>,layout:Layout},
    {path:'/stones-login',element:<StonesLogin/>,layout:Layout},
    {path:'/contact-us',element:<Contact/>,layout:Layout},
    {path:'/register',element:<Register/>,layout:Layout},
    {path:'/register-final',element:<RegisterFinal/>,layout:Layout},
    {path:'/user-account',element:<UserAccount/>,layout:Layout},
    {path:'/*',element:<NotFound/>,layout:Layout},
]

export default routes;

