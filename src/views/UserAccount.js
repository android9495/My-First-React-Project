import {SectionUserAccount} from "../base/section";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";
import {useSelector} from "react-redux";
import {useInputChange} from "../hooks/useInputChange";
import {VisiblePassword} from "../base/visiblePassword";
import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";
import {SetTitle} from "../helpers/setTitle";


const UserAccount = () => {
    const nav = useNavigate();
    const {user} = useSelector(state => state)
    const [firstnameUser,onChangeNameUser] = useInputChange('');
    const [lastNameUser,onChangeFamilyUser] = useInputChange('');
    const [emailUser,onChangeEmailUser] = useInputChange('');
    const [passwordUser,onChangePasswordUser] = useInputChange('');
    const [phoneUser,onChangePhoneUser] = useInputChange('');
    const userFirstName = JSON.parse(localStorage.getItem('userFirstName'));
    console.log(user);
    useEffect(() => {
        if(!user.firstname){
            return nav('/register')
        }
        SetTitle('Paya Stone - User Account');
    },[])

    return(
        <SectionUserAccount>
            <Container className="userAccountContainer my-5">
                <Row className="justify-content-center">
                    <Col md={6} className="d-flex align-items-center justify-content-center mt-5 account-user-wrap flex-column">
                        <img src={user.avatar} alt="" className="user-profile mt-5"/>
                        <h1 className="mt-5">{user.firstname} {user.lastname}</h1>
                        <form>
                            <FormGroup className="form__group field">
                                <Input id="firstNameUser" name={firstnameUser} type="text" className="form__field" onChange={onChangeNameUser} value={user.firstname}/>
                                <Label for="firstNameUser" className="form__label">First Name</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="lastNameUser" name={lastNameUser} type="text" className="form__field" onChange={onChangeFamilyUser} value={user.lastname}/>
                                <Label for="lastNameUser" className="form__label">Last Name</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="emailUser" name={emailUser} type="email" className="form__field" onChange={onChangeEmailUser} value={user.email}/>
                                <Label for="emailUser" className="form__label">Email</Label>
                            </FormGroup>
                            <FormGroup className="form__group field">
                                <Input id="phoneUser" name={phoneUser} type="text" className="form__field" onChange={onChangePhoneUser} value={user.phone}/>
                                <Label for="phoneUser" className="form__label">Phone</Label>
                            </FormGroup>
                            <FormGroup className="form__group field password">
                                <Input id="passUser" name={passwordUser} type="password" className="form__field" onChange={onChangePasswordUser} value={user.password}/>
                                <Label for="passUser" className="form__label">Password</Label>
                                <VisiblePassword>
                                    <img src={window.location.origin+'/images/visibility.svg'}/>
                                    <img src={window.location.origin+'/images/hidden.svg'}/>
                                </VisiblePassword>
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Container>
        </SectionUserAccount>
    )
}

export default UserAccount