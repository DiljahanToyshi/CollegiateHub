import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdmissonCard = ({ card, isButtonDisabled, onButtonClick }) => {
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

  const [isDisabled, setIsDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsDisabled(true); // Disable the button locally
    onButtonClick(); // Notify the parent component that a button is clicked
  };

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
        <button
          onClick={handleButtonClick}
          disabled={isDisabled || isButtonDisabled}
          type="button"
          className="font-medium  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full shadow-md text-white bg-blue-900">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default AdmissonCard;
