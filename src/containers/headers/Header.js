import {Link} from "react-router-dom";
import MenuItem from "../../base/menuItem";
import {useSelector} from "react-redux";

const Header = () => {
    const {user} = useSelector(state => state)
    return(
        <header className="other-header">
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
                    {
                        user.firstname ?
                            (<MenuItem link="/user-account" label="Hello" username={user.firstname}/>)
                            :
                            (<MenuItem link="/register" label="register"/>)
                    }
                </ul>
            </nav>
        </header>
    )
}
export default Header;