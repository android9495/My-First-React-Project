import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {SectionDefault} from "../base/section";
import {useInputChange} from "../hooks/useInputChange";
import {useDispatch} from "react-redux";
import {ACTION_UPDATE_USER} from "../redux/slices/userSlice";
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";

const Register = () => {
    const dispatcher = useDispatch();
    const [email,onChangeEmail] = useInputChange('');
    const [password,onChangePassword] = useInputChange('');
    const [firstname,onChangeName] = useInputChange('');
    const [lastname,onChangeLastName] = useInputChange('');
    const [phoneNum,onChangePhoneNum] = useInputChange('');
    const [avatar,setAvatar] = useState([]);
    const [avatarURLs,setAvatarURLs] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
       if(avatar.length < 1) return;
       const newAvatarURLs = [];
       avatar.forEach(image => newAvatarURLs.push(URL.createObjectURL(image)));
       setAvatarURLs(newAvatarURLs);
    },[avatar])

    const Login = () => {
       dispatcher(ACTION_UPDATE_USER({firstname:firstname,lastname:lastname,email:email,phone:phoneNum,password:password}));
       setTimeout(() => {
           nav('/register-final')
       },500)
    }
    const onChangeAvatar = (e) => {
        setAvatar([...e.target.files]);
    }
    return(
        <SectionDefault>
            <Container fluid className="login-container \">
                <Row className="justify-content-center">
                    <Col md={12} xl={6}>
                        <Form>
                            <FormGroup>
                                <img src={avatar} alt=""/>
                                <input id="photo-upload" type="file" onChange={onChangeAvatar} accept="image/*"/>
                                {
                                    avatarURLs.map(avatarSrc => <img src={avatarSrc}/>)
                                }
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="firstName" name={firstname} placeholder="First Name" type="text" className="form__field" onChange={onChangeName}/>
                                <Label for="firstName" className="form__label">First Name</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="lastName" name={lastname} placeholder="Last Name" type="text" className="form__field" onChange={onChangeLastName}/>
                                <Label for="lastName" className="form__label">Last Name</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="loginUser" name={email} placeholder="Email Address" type="email" className="form__field" onChange={onChangeEmail}/>
                                <Label for="loginUser" className="form__label">Email Address</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="phoneNumber" name={phoneNum} placeholder="Phone Number" type="text" className="form__field" onChange={onChangePhoneNum}/>
                                <Label for="phoneNumber" className="form__label">Phone Number</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="passUser" name={password} placeholder="Password" type="password" className="form__field" onChange={onChangePassword}/>
                                <Label for="passUser" className="form__label">Password</Label>
                            </FormGroup>
                            <Button className="login" outline onClick={Login}>Sign in</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </SectionDefault>
    )
}
export default Register;