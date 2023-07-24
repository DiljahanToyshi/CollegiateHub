import { useState } from "react";
import CollegesCard from "../Card/CollegesCard";
import useData from "./hooks/useData";

const Colleges = () =>{
   const [college] = useData();
   const [showAll, setShowAll] = useState(false);
   const [searchText, setsearchText] = useState("");

   const handleShowAll = () => {
      setShowAll(true);
    };
   return (
     <div>
       <p className="my-4 animate-text bg-gradient-to-r from-indigo-500 via-blue-900 to-blue-500 bg-clip-text text-blue-900 sm:text-xs md:text-2xl font-semibold md:mt-5 pt-3 text-2xl w-full lg:leading-tight md:text-center lg:ml-48 lg:text-6xl lg:max-w-3xl ">
       Your Gateway to Higher Education     </p>{" "}
       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {
                     college.slice(0, showAll ? 8 : 6).map(card => <CollegesCard
                         key={card._id}
                         card={card}
                     ></CollegesCard>)
                 }
             </div>
             {!showAll && (
        <span onClick={handleShowAll}>
        <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-blue-900 hover:bg-blue-900 bg-blue-100 hover:text-white">
See More      </button>        </span>
      )}
     </div>
   );
 }

export default Colleges;