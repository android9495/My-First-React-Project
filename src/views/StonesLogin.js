import {Section} from "../base/section";
import {Col, Container, Row} from "reactstrap";
import unsplash from "../helpers/unsplash";
import {useEffect, useState} from "react";
import {StoneInfo, StoneMedia, StoneWrap} from "../base/stones";
import{useSelector} from "react-redux";

const Stones = () => {
    const [stones,onChangeStones] = useState([]);
    const {user} = useSelector(state => state);
    const getStonesData = async term => {
        const response = await unsplash.get('search/photos?per_page=12&query=marble stone', {
            params: { query: term }
        });
        onChangeStones(response.data.results)
    }
    useEffect(() => {
        getStonesData();
    },[])
    console.log();
    return(
        <Section>
            {
                stones[11] ?
                    (   <Container fluid className="stonesContainer p-0">
                        <Row>
                            <Col md={12} className="mb-5">
                                <h1 className="mt-5 text-capitalize">welcome {user.firstname} {user.lastname}</h1>
                                <p className="text-capitalize mt-3">see your special offers</p>
                            </Col>
                            {
                                stones.map((item,index) => {
                                    return(
                                        <Col key={index.toString()} md={6} xl={3}>
                                            <StoneWrap>
                                                <StoneMedia>
                                                    <img src={stones[index].urls.regular} alt=""/>
                                                </StoneMedia>
                                                <StoneInfo>
                                                    <h3>stone</h3>
                                                </StoneInfo>
                                            </StoneWrap>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>)
                    :
                    (
                        <div className="loadingBox">
                            <p>loading ....</p>
                        </div>
                    )
            }

        </Section>
    )
}
export default Stones;