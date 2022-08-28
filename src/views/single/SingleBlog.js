import {useParams} from "react-router-dom";

const SingleBlog = () => {
    const{post_id} = useParams()
    console.log(post_id);
    return(
        <h2>Post {post_id}</h2>
    )
}
export default SingleBlog;