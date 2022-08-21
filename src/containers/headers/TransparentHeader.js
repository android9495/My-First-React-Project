import {Link} from "react-router-dom";
import MenuItem from "../../base/menuItem";

const TransparentHeader = () => {
    return(
        <header>
            <Link to="/" className="identity">
                <img src={window.location.origin+'/images/logo.svg'} alt=""/>
            </Link>
            <nav className="menu-list-items">
                <ul>
                    <MenuItem link="/" label="home"/>
                    <MenuItem link="/about-us" label="about us"/>
                    <MenuItem link="/stones" label="stones"/>
                    <MenuItem link="/blog" label="blog"/>
                    <MenuItem link="/contact-us" label="contact us"/>
                    <MenuItem link="/login" label="login"/>
                </ul>
            </nav>
        </header>
    )
}
export default TransparentHeader;