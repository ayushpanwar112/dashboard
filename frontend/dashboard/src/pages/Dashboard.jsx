import { useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useMyContext } from "../contest/MyProvider";

const Dashboard = () => {
       const navigator= useNavigate();
  
   const {data,setData,setPath} =useMyContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const res2 = await axios.get("http://localhost:5000/api/fetch"); //
        const res1= await axios.get("http://localhost:5000/api/blogs")
        const combinedData = [...res1.data.reverse(), ...res2.data]; 
        setData(combinedData);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[]);

  return (
    <div className="bg-black text-white w-full h-screen">
      
      <div className="flex flex-col mt-10 gap-4">
      {data.map((item) => {
  // Extract the image URL from item.content
  const content = item.content;
  const regex = /<img[^>]+src="([^">]+)"/;
  const matches = content.match(regex);
  const imageUrl = matches ? matches[1] : 'default-placeholder.jpg';
 

  return (
    <div key={item._id} className="bg-white w-full p-4 flex justify-between gap-4">
        <div className="flex gap-4">
      <div className="w-40 h-40 bg-gray-300">
        <img
          src={imageUrl} 
          alt="Post Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-black">{item.title}</h1>
        <p className="text-gray-700">Published on: {new Date(item.published).toDateString()}</p>
        <p className="text-gray-700">Author: {item.author?.name || "Anonymous"}</p>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Read More
        </a>
      </div>
      </div>
      <button className="bg-red-500  w-[100px] rounded-md" onClick={()=>{navigator("/blogs") 
        setPath(item._id)}}>preview</button>

    </div>
  );
})}

      </div>
    </div>
  );
};


export default Dashboard;
