import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This post content is loaded dynamically based on the URL.</p>
    </div>
  );
}

export default Post;
