import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const CollegesCard = ({ card }) => {
  const {_id,
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
      <span className="flex ml-12 lg:ml-16 gap-4">
        {" "}
        Rating: <Rating
          style={{ maxWidth: 120 }}
          value={rating}
          readOnly
        />{" "}
      </span>{" "}
      <Link to={`/details/${_id}`}><button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-white hover:bg-blue-300 bg-blue-900 hover:text-blue-900">
        Details
      </button></Link>
    </div>
  );
};

export default CollegesCard;
