import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {SectionDefault} from "../base/section";

const Login = () => {
    return(
        <SectionDefault>
            <Container fluid className="login-container">
                <Row>
                    <Col md={12} xl={6}>
                        <Form>
                            <FormGroup className="form__group field">
                                <Input id="loginUser" name="loginUser" placeholder="Email Address" type="email" className="form__field"/>
                                <Label for="loginUser" className="form__label">Email Address</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="passUser" name="passUser" placeholder="Password" type="password" className="form__field"/>
                                <Label for="passUser" className="form__label">Password</Label>
                            </FormGroup>
                            <Button className="login" outline>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </SectionDefault>
    )
}
export default Login;