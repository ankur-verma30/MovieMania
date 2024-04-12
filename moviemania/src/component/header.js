import React from "react"
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AppState } from "../App";
import { useContext } from "react";



const Header = () => {
  const ApplicationState = useContext(AppState)
  return (
    <div className=" sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold px-3 border-b-2 border-gray-500">
      <Link to='/'><span>Movie <span className="text-white">Mania</span></span></Link>
      {ApplicationState.login ?
        <Link to={'/addmovie'}><h1 className="text-lg text-white cursor-pointer flex items-center">
          <Button ><AddIcon className="mr-1 secondary" /><span className="text-white">Add New</span></Button></h1></Link>
        :
        <Link to={'/login'}><h1 className="text-lg bg-green-500 text-white cursor-pointer flex items-center">
          <Button><span className="text-white font-medium capitalize">Login</span></Button></h1></Link>
      }
    </div>
  )
}
export default Header