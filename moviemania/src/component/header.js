import React from "react"
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className=" sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold px-3 border-b-2 border-gray-500">
      <Link to='/'><span>Movie <span className="text-white">Mania</span></span></Link>
      <Link to={'/addmovie'}><h1 className="text-lg text-white cursor-pointer flex items-center">
        <Button ><AddIcon className="mr-1 secondary" /><span className="text-white">Add New</span></Button></h1></Link>
    </div>
  )
}
export default header