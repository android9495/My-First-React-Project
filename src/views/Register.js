import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {SectionDefault} from "../base/section";
import {useInputChange} from "../hooks/useInputChange";
import {useDispatch} from "react-redux";
import {ACTION_UPDATE_USER} from "../redux/slices/userSlice";
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {Base64} from "../helpers/base64";
import {VisiblePassword} from "../base/visiblePassword";

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

    const Login = async () => {
        const userPicture = await setConvert();
        dispatcher(ACTION_UPDATE_USER({avatar:userPicture,firstname:firstname,lastname:lastname,email:email,phone:phoneNum,password:password}));
        localStorage.setItem('user',firstname)
        setTimeout(() => {
            nav('/register-final')
        },500)
    }
    const onChangeAvatar = (e) => {
        setAvatar([...e.target.files]);
    }
    const setConvert = async () => {
        const file = document.getElementById('photo-upload').files[0];
        try {
            const resultFile = await Base64(file);
            return resultFile
        } catch(error) {
            console.error(error);
            return;
        }
    }
    return(
        <SectionDefault>
            <Container fluid className="login-container \">
                <Row className="justify-content-center">
                    <Col md={12} xl={6}>
                        <Form>
                            <FormGroup className="avatar-wrap">
                                <input id="photo-upload" type="file" onChange={onChangeAvatar} accept="image/*"/>
                                {
                                    avatar.length ?
                                        (avatarURLs.map((avatarSrc,index) => <img key={index} src={avatarSrc} className="avatarPicture"/>))
                                        :
                                        (<img src={window.location.origin+'/images/user-svgrepo-com.svg'} alt="" className="bye"/>)
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
                                <Input id="email" name={email} placeholder="Email Address" type="email" className="form__field" onChange={onChangeEmail}/>
                                <Label for="email" className="form__label">Email Address</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="phoneNumber" name={phoneNum} placeholder="Phone Number" type="text" className="form__field" onChange={onChangePhoneNum}/>
                                <Label for="phoneNumber" className="form__label">Phone Number</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="passUser" name={password} placeholder="Password" type="password" className="form__field" onChange={onChangePassword}/>
                                <Label for="passUser" className="form__label">Password</Label>
                                <VisiblePassword>
                                    <img src={window.location.origin+'/images/visibility.svg'}/>
                                    <img src={window.location.origin+'/images/hidden.svg'}/>
                                </VisiblePassword>
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