import {EffectFade,Pagination,Mousewheel} from "swiper";
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import {Col, Container, Row} from "reactstrap";
import {
    SlideContainer,
    SliderWrapBoxOne,
    SlideOverlay,
    SliderWrap,
    SliderWrapBoxTwo,
    SliderWrapT,
    SlideVideoWrap,
    SlideVideo,
    SlideContainerTwo,
    SlideTextWrapper, FeatureBoxes, FeatureBox
} from "../base/slideTypes";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


const Home = () => {
    return(
        <Container fluid className="homeSliderContainer">
            <Row className="g-0">
                <Col md={12}>
                    <Swiper
                        // install Swiper modules
                        modules={[EffectFade,Pagination,Mousewheel]}
                        spaceBetween={0}
                        slidesPerView={1}
                        mousewheel
                        loop={true}
                        effect={"fade"}
                        direction={"vertical"}
                        pagination={{ clickable: true }}>
                        <SwiperSlide>
                            <SlideContainer>
                                <SlideOverlay>
                                    <img src={window.location.origin+'/images/slide-back-1.jpg'} alt=""/>
                                </SlideOverlay>
                                <SliderWrapBoxOne>
                                    <SliderWrap>
                                        <h1>Paya stone</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci, asperiores atque commodi eligendi facere illo laboriosam molestiae nam natus obcaecati, pariatur perferendis quibusdam rerum vero vitae? Incidunt, quasi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium adipisci, asperiores atque commodi eligendi facere illo laboriosam molestiae nam natus obcaecati, pariatur perferendis quibusdam rerum vero vitae? Incidunt, quasi.</p>
                                    </SliderWrap>
                                    <SliderWrapT>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cupiditate, error, expedita fugiat harum illo ipsa iure nam praesentium quisquam voluptate. Dolorem dolores est maxime omnis pariatur recusandae reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cupiditate, error, expedita fugiat harum illo ipsa iure nam praesentium quisquam voluptate. Dolorem dolores est maxime omnis pariatur recusandae reiciendis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cupiditate, error, expedita fugiat harum illo ipsa iure nam praesentium quisquam voluptate. Dolorem dolores est maxime omnis pariatur recusandae reiciendis?</p>
                                    </SliderWrapT>
                                </SliderWrapBoxOne>
                                <SliderWrapBoxTwo>
                                    <SlideVideoWrap>
                                        <SlideVideo>
                                            <Video autoPlay loop muted poster="http://sourceposter.jpg">
                                                <source src={window.location.origin+'/video/index.mp4'} type="video/webm" />
                                            </Video>
                                        </SlideVideo>
                                    </SlideVideoWrap>
                                </SliderWrapBoxTwo>
                            </SlideContainer>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SlideContainerTwo>
                                <SlideOverlay>
                                    <img src={window.location.origin+'/images/slide-back-2.png'} alt=""/>
                                </SlideOverlay>
                                <SlideTextWrapper>
                                    <h2>Cost saving when ordering a full range of services</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <FeatureBoxes>
                                        <FeatureBox logo={window.location.origin+'/images/car.svg'} title="Since 2011" subTitle="in mining"/>
                                        <FeatureBox logo={window.location.origin+'/images/car.svg'} title="Since 2011" subTitle="in mining"/>
                                        <FeatureBox logo={window.location.origin+'/images/car.svg'} title="Since 2011" subTitle="in mining"/>
                                    </FeatureBoxes>
                                </SlideTextWrapper>
                            </SlideContainerTwo>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;