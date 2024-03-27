import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {

    // const blogs = props.blogs
    // const title = props.title

    return ( 

        <div className="blog-list">
            <h2>{ title }</h2>
          {blogs.map((glow) => (
          <div className="blog-preview" key={ glow.id }>
            <Link to={`/blogs/${glow.id}`}>
            
          <h2>{ glow.title }</h2>
          <p>Written by { glow.author }</p>
          </Link>
         </div>
        ))}
        </div>
     );
}
 
export default BlogList;