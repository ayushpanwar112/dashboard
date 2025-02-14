
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Blog from "./pages/Blog"

import { useMyContext } from "./contest/MyProvider";
import Navbar from "./components/Navbar";



const App = () => {
  const {path} =useMyContext();
 
  console.log("hii app",path)

  return (
    <div className="">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/blogs" element={<Blog />} />
      </Routes> 
     
    </div>
  )
}

export default App
