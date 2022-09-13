import {Section} from "../base/section";
import {Col, Container, Row} from "reactstrap";
import {useEffect, useState} from "react";
import unsplash from "../helpers/unsplash";
import {MemberInfo, MemberMedia, MemberWrap} from "../base/member";
import {MinesWrap} from "../base/mines";
import {SetTitle} from "../helpers/setTitle";

const About = () => {
    const [members,setMembers] = useState([]);
    const [mines,setMines] = useState([]);
    const getPhotos = async term => {
        const response = await unsplash.get('/search/photos?query=man&per_page=9', {
            params: { query: term }
        });
        setMembers(response.data.results);

    }
    const getMinesPhotos = async (term) => {
        const responseMine = await unsplash.get('/search/photos?query=mine&per_page=8', {
            params: { query: term }
        });
        setMines(responseMine.data.results);
        console.log(responseMine.data.results)
    }
    useEffect(() => {
        getMinesPhotos();
        getPhotos();
        SetTitle('Paya Stone - About us')
    },[])


    return(
        <Section>
            <Container fluid className='p-0 aboutContainer'>
                <Row className="justify-content-between">
                    <Col md={12}> <h1 className="py-5">About <br/>the company</h1></Col>
                    <Col md={12} xl={5} className="about-box-one">
                        <p>since 1989 <br/> in mining</p>
                        <p>since 2022 <br/> in mining</p>
                    </Col>
                    <Col md={12} xl={5}>
                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus ea perferendis veritatis voluptatem? Error illo quo sunt velit veniam? Ab accusamus consequuntur error facilis libero magni nostrum veritatis. Neque?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus ea perferendis veritatis voluptatem? Error illo quo sunt velit veniam? Ab accusamus consequuntur error facilis libero magni nostrum veritatis. Neque?</p>
                    </Col>
                    <Col md={12} className="aboutBackgroundContainer my-5">
                        <img src={window.location.origin+'/images/slide-back-1.jpg'} alt=""/>
                    </Col>
                    <Row className="mt-5 memberWrapper">
                        <Col md={12} className="mb-3 pb-3"><h2>Members</h2></Col>
                        {
                            members.map((item, index) => {
                                return (
                                    <Col md={4} key={index.toString()}>
                                        <MemberWrap>
                                            <MemberMedia>
                                                <img src={members[index].urls.regular} alt=""/>
                                            </MemberMedia>
                                            <MemberInfo>
                                                <h3>{members[index].user.first_name} {members[index].user.last_name}</h3>
                                            </MemberInfo>
                                        </MemberWrap>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Col md={12} xl={6} className="mt-5 pt-5">
                        <h2>Our Mission</h2>
                    </Col>
                    <Col md={12} xl={6} className="mt-5 pt-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur est illum maiores nemo nisi officia, officiis saepe. At earum, eligendi enim incidunt ipsum iste labore non sed sequi unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur est illum maiores nemo nisi officia, officiis saepe. At earum, eligendi enim incidunt ipsum iste labore non sed sequi unde.</p>
                    </Col>
                    <Col md={12} xl={6} className="mt-4 pb-5">
                        <h2>Our Vision</h2>
                    </Col>
                    <Col md={12} xl={6} className="mt-4 pb-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur est illum maiores nemo nisi officia, officiis saepe. At earum, eligendi enim incidunt ipsum iste labore non sed sequi unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur est illum maiores nemo nisi officia, officiis saepe. At earum, eligendi enim incidunt ipsum iste labore non sed sequi unde.</p>
                    </Col>
                    <Row className="mb-5 mt-5 minesWrapper">
                        <Col md={12}>
                            <h2>Our <br/>Mines</h2>
                        </Col>
                        {
                            mines.map((item,index) => {
                                return(
                                    <Col md={3}  key={index.toString()}>
                                        <MinesWrap>
                                            <MemberMedia>
                                                <img src={mines[index].urls.regular} alt=""/>
                                            </MemberMedia>
                                            <MemberInfo>
                                                {
                                                    mines[index].alt_description ?
                                                        (
                                                            <p>{mines[index].alt_description}</p>
                                                        )
                                                        :
                                                        (
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum eaque eius enim error esse excepturi fugiat labore minus natus officiis, optio, perspiciatis porro quasi quo tenetur, vel veritatis voluptate?</p>
                                                        )
                                                }

                                            </MemberInfo>
                                        </MinesWrap>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Row>
            </Container>
        </Section>
    )
}
export default About;