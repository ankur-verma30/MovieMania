import React, { useEffect, useState } from "react"
import ReactStars from 'react-stars'
import { reviewRef, db } from "../firebase/firebase";
import { addDoc, doc, updateDoc, query, where, getDocs } from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from 'sweetalert'



const Review = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewRef, {
        movieId: id,
        name: "Ankur Verma",
        rating: rating,
        thought: form,
        timestamp: new Date().getTime(),
      })
      const ref = doc(db, "movies", id);
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1
      })
      setRating(0);
      setForm("");
      swal({
        title: "Review Added",
        icon: "success",
        buttons: false,
        timer: 3000
      })
    }

    catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoading(false);
  }

  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      let quer = query(reviewRef, where("movieId", "==", id));
      const querySnapshot = await getDocs(quer);
      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()])

      })
      setReviewsLoading(false);
    }
    getData();
  }, [])

  return (
    <div className="mt-2 border-t-2 border-gray-700 w-full ">
      <ReactStars
        size={40}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        className="w-full p-2 outline-none header"
        placeholder="Share your reviews here"
      />
      <button onClick={sendReview} className="bg-pink-500 flex justify-center w-full p-2">
        {loading ? <TailSpin height={20} color="white" /> : 'Share'}
      </button>
      {
        reviewsLoading ? <div className="mt-6 flex justify-center"> <ThreeDots height={20} color="white" /></div> :
          <div className="">
            {
              data.map((e, i) => {
                return (
                  <div>{e.thought}</div>
                )
              })
            }
          </div>
      }
    </div>
  )
}
export default Review