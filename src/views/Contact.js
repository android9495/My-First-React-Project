import {SectionFullWidth} from "../base/section";
import {Col, Container, Row} from "reactstrap";
import {useEffect} from "react";
import {SetTitle} from "../helpers/setTitle";

const Contact = () => {
    useEffect(() => {
        SetTitle('Paya Stone -  Contact us')
    },[])
    return(
        <SectionFullWidth>
            <Container fluid className="p-0 contactContainer">
                <Row>
                    <Col md={12}>
                        <h1 className="my-0 py-5 paddingLR">Contact us</h1>
                    </Col>
                    <Col md={12} id="map" className="mb-5">
                        <img src={window.location.origin+'/images/snazzy-image.jpg'} alt=""/>
                    </Col>
                    <Col md={12} className="text-center contactInfo">
                        <a href="tel:00982122258774">+98 21 2225 8774</a>
                        <a href="tel:00982122258774">+98 21 2225 8774</a>
                        <a href="mailto:info@stone.com">info@stone.com</a>
                        <a href="#">Tehran, iran</a>
                    </Col>
                </Row>
            </Container>

        </SectionFullWidth>
    )
}
export default Contact;