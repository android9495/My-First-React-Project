import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

const MenuItem = ({link,label}) => {
    const {pathname} = useLocation()
     return(
        <li className={pathname === link ? "active menu-list-item" : 'menu-list-item'}>
            <Link to={link}>{label}</Link>
        </li>
    )
}
export default MenuItem;