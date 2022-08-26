import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

const MenuItem = ({link,label,username}) => {
    const {pathname} = useLocation()
     return(
        <li className={pathname === link ? "active menu-list-item" : 'menu-list-item'}>
            <Link to={link}>{label} <span className="user-name">{ username}</span></Link>
        </li>
    )
}
export default MenuItem;