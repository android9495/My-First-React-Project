import TransparentHeader from "./headers/TransparentHeader";
import Header from "./headers/Header";
import {useLocation} from "react-router-dom";
import Footer from "./footer/Footer";

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
            <main>
                {children}
            </main>
            {
               pathname === '/' ?
                   ('')
                   :
                   (
                      <Footer/>
                   )
            }
        </>
    )
}
export default Layout;