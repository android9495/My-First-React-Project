import {Section} from "../base/section";
import {Container,Row,Col} from "reactstrap";
import unsplash from "../helpers/unsplash";
import {useEffect, useState} from "react";
import {BlogInfo, BlogMedia, BlogWrap} from "../base/blog";
import {Link} from "react-router-dom";
import {SetTitle} from "../helpers/setTitle";

const Blog = () => {
    const [blogData,onChangeBlogData] = useState([]);
    const getBlogData = async term => {
        const response = await unsplash.get('/photos?per_page=12&orientation=landscape', {
            params: { query: term }
        });
        onChangeBlogData(response.data);
        console.log(response.data)
    }
    const forceScrollTop = () => {
        window.scrollTo(0,0);
    }
    useEffect(() => {
        forceScrollTop();
        getBlogData();
        SetTitle('Paya Stone - Blog');
    },[])
    return(
        <Section>
            {
                blogData[11] ?
                    (
                        <Container fluid className="p-0 blogContainer">
                            <Row>
                                <Col md={12}>
                                    <h1>Blog</h1>
                                </Col>
                                {
                                    blogData.map((item,index) => {
                                        return(
                                            <Col key={index.toString()} md={4}>
                                                <BlogWrap>
                                                    <BlogMedia>
                                                        <Link to={`/blog/${index+1}`}>
                                                            <img src={blogData[index].urls.regular} alt=""/>
                                                        </Link>
                                                    </BlogMedia>
                                                    <BlogInfo>
                                                        <span className="date">{blogData[index].created_at}</span>
                                                        <h2>Blog title {index+1}</h2>
                                                        <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae cumque et maxime quidem temporibus veniam. Aperiam consectetur deleniti, distinctio expedita laudantium modi nemo nulla perferendis quaerat tempora totam veritatis.</p>
                                                    </BlogInfo>
                                                </BlogWrap>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    )
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
export default Blog;