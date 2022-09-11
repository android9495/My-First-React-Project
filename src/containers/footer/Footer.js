import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import MenuItem from "../../base/menuItem";
import {useSelector} from "react-redux";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub,faPinterest} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub,faPinterest);

const Footer = () => {
    const {user} = useSelector(state => state);
    return(
        <footer className="paddingLR">
            <Container fluid className="p-0">
                <Row className="justify-content-between">
                    <Col md={4} className="footer-col-one">
                        <Link to="/" className="identity">
                            <img src={window.location.origin+'/images/logo.svg'} alt=""/>
                        </Link>
                        <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur delectus eveniet iure laboriosam unde vel! Aliquid eius harum id magnam molestiae mollitia officia quia temporibus! Corporis fuga, nemo. Ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur delectus eveniet iure laboriosam unde vel! Aliquid eius harum id magnam molestiae mollitia officia quia temporibus! Corporis fuga, nemo. Ad.</p>
                    </Col>
                    <Col md={3} className="footer-col-menu">
                        <ul>
                            <MenuItem link="/" label="Home"></MenuItem>
                            <MenuItem link="/about-us" label="about us"/>
                            <MenuItem link="/blog" label="blog"/>
                            <MenuItem link="/contact-us" label="contact us"/>
                            {
                                user.firstname ?
                                    (
                                        <>
                                            <MenuItem link="/stones-login" label="stones for special users"/>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <MenuItem link="/stones" label="stones"/>
                                        </>
                                    )
                            }
                        </ul>
                    </Col>
                    <Col md={3} className="footer-col-social-media">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'pinterest']} />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;