import React from "react"
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";

const header = () => {
  return (
    <div className="text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
        <span>Movie <span className="text-white">Mania</span></span>
        <h1 className="text-lg text-white cursor-pointer flex items-center">
            <Button ><AddIcon className="mr-2 bg-inherit"/><span className="text-white">Add New</span></Button></h1>
        </div>
  )
}
export default header