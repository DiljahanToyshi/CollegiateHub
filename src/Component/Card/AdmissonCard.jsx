import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AdmissonCard = ({ card}) => {
  const {user}=useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  const {
    _id,
    collegeName,
    image,
    admissionDates,
    events,
    researchHistory,
    sports,
    rating,
    numberOfResearch,
    admissionProcess,
  } = card;

  const [isButtonClicked, setButtonClicked] = useState(false); // Add state variable



  const handleAddToAdmit = card=>{
    console.log(card);
    if(!user){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login!",
      });
      navigate('/login', {state: {from: location}})
      setButtonClicked(true);

    }
  }

  return (
    <div className="bg-blue-100 p-6 rounded shadow-lg my-5">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={image}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {collegeName}
      </p>
      <p className="text-gray-700 ">Admission Date: {admissionDates}</p>
      <p className="text-gray-700 ">Research Number: {numberOfResearch}</p>

      <Link to={`/enroll/${_id}`}>
      <span onClick={() => handleAddToAdmit(card)}>  <button
          type="button"
          className="font-medium  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full shadow-md text-white bg-blue-900"
          disabled={isButtonClicked} 
        >
            {isButtonClicked ? "Applied" : "Apply Now"}
        </button></span>
      </Link>
    </div>
  );
};

export default AdmissonCard;
