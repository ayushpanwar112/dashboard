import { useMyContext } from "../contest/MyProvider";

const Blog = () => {
  const { path, data } = useMyContext();
  console.log("Path:", path);
  console.log("Data:", data);

  const blogData = data.find((item) => item._id === path);

  if (!blogData) {
    return <div className="text-center text-red-500 font-bold mt-10">Blog not found!</div>;
  }

  // Extract the first image
  const imageMatch = blogData.content.match(/<img.*?>/);
  const firstImage = imageMatch ? imageMatch[0] : null;

  // Remove the first image from the content
  const updatedContent = firstImage ? blogData.content.replace(firstImage, "") : blogData.content;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blogData.title}</h1>
      <p className="text-gray-600 mb-4">Published on: {new Date(blogData.published).toDateString()}</p>

      {/* Render extracted image separately */}
      {firstImage && (
        <div className="w-full flex justify-center mb-5" dangerouslySetInnerHTML={{ __html: firstImage }} />
      )}

      {/* Render content without the first image */}
      <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: updatedContent }}></div>

      {/* Blog Source Link */}
      {blogData.url && (
        <a
          href={blogData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-blue-500 hover:underline"
        >
          Read more on the original blog
        </a>
      )}
    </div>
  );
};

export default Blog;
