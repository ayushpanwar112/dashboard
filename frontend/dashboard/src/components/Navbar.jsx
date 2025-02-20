import axios from "axios";


const Navbar = () => {
       
  
    const toggle = async () => {
      try {
      await axios.post("http://localhost:5000/api/fetch-blogs");
      console.log("Published successfully");
     
        window.location.reload();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
   
  
    return (
      <div className="w-full h-20 bg-gray-800 flex items-center  text-white justify-between px-4">
        <a
          href="https://www.blogger.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Create post</button>
        </a>
        <button className="bg-amber-500 p-2 rounded-2xl" onClick={()=>{toggle()}}>Publish</button>
      </div>
    );
  };
  
  export default Navbar;
  