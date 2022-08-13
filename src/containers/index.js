import MenuItem from "../base/menuItem";
import {Link} from "react-router-dom";
import TransparentHeader from "./headers/TransparentHeader";
import Header from "./headers/Header";
import {useLocation} from "react-router-dom";

const Layout = ({children}) => {
    const {pathname} = useLocation();
    return (
        <>
            {
                pathname === '/' ?
                    (<TransparentHeader/>)
                    :
                    (<Header/>)
            }
            {children}
            <footer>
                footer
            </footer>
        </>
    )
}
export default Layout;