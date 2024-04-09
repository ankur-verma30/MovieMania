import React, { useState } from "react"
import ReactStars from 'react-stars'
import { reviewRef } from "../firebase/firebase";
import { addDoc } from "firebase/firestore";
import { TailSpin } from "react-loader-spinner";
import swal from 'sweetalert'


const Review = ({id}) => {
  const [rating,setRating]=useState(0);
  const [loading,setLoading]=useState(false);
  const [form,setForm]=useState("");

  const sendReview =async ()=>{
    setLoading(true);
    try {
      await addDoc(reviewRef,{
        movieId:id,
        name:"Ankur Verma",
        rating:rating,
        thought:form,
        timestamp:new Date().getTime(),
      })
      setRating(0)
      setForm("")
      swal({
        title:"Review Added",
        icon:"success",
        buttons:false,
        timer:3000
      })
    } 
    
    catch (error) {
      swal({
        title:error.message,
        icon:"error",
        buttons:false,
        timer:3000
      })
    }
    setLoading(false)
  }

  return (
    <div className="mt-2 border-t-2 border-gray-700 w-full ">
      <ReactStars
      size={40}
      half={true}
      value={rating}
      onChange={(rate)=>setRating(rate)}
      />
      <input
      value={form}
      onChange={(e)=>setForm(e.target.value)}
      className="w-full p-2 outline-none header"
      placeholder="Share your reviews here"
      />
      <button  onClick={sendReview} className="bg-pink-500 flex justify-center w-full p-2">
        {loading?<TailSpin height={20} color="white"/>:'Share'}
      </button>
    </div>
  )
}
export default Review