import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: glow, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + glow.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { glow && (
                <article>
                    <h2>{ glow.title }</h2>
                    <p>Written by { glow.author }</p>
                    <div>{ glow.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}

        </div>
     );
}
 
export default BlogDetails;