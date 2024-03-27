import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

 //   const handleDelete = (id) => {
  //   const delBlogs = blogs.filter(glow => glow.id !== id);
  //   setBlogs(delBlogs);
  // }

 return (
    <div className='home'>
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}
  
    {/* <BlogList blogs={blogs.filter((carry) => carry.author === 'mario' )} title="Mario's Blogs!" /> */}
    </div>
  )
}

export default Home

