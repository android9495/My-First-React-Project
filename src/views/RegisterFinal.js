import {Col, Container, Row} from "reactstrap";
import {SectionDefault} from "../base/section";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const RegisterFinal = () => {
    const nav = useNavigate();
    useEffect(() => {
        console.log('hello');
        setTimeout(() => {
            nav('/user-account');
        },2500)
    },[])
    return(
        <SectionDefault>
            <Container fluid className="registerFinalWrapper">
                <Row>
                    <Col md={12} className="d-flex align-items-center">
                        <h1>Thanks for submitting, Please Wait until connect account page <span>(in 2500 ms)</span></h1>
                        <img src={window.location.origin+'/images/load.gif'} alt=""/>
                    </Col>
                </Row>
            </Container>
        </SectionDefault>
    )
}
export default RegisterFinal;