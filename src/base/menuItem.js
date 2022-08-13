import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

const MenuItem = ({link,label}) => {

    return(
        <li className="menu-list-item">
            <Link to={link}>{label}</Link>
        </li>
    )
}
export default MenuItem;