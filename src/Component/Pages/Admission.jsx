import { useState } from "react";
import AdmissonCard from "../Card/AdmissonCard";
import useData from "./hooks/useData";

const Admission = () =>{
   const [college] = useData();
   const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);

   const handleButtonClick = () => {
    setAreButtonsDisabled(true);
  };
   return (
     <div>
       <p className="my-4 animate-text bg-gradient-to-r from-indigo-500 via-blue-900 to-blue-500 bg-clip-text text-blue-900 sm:text-xs md:text-2xl font-semibold md:mt-5 pt-3 text-2xl w-full lg:leading-tight md:text-center lg:ml-48 lg:text-6xl lg:max-w-3xl ">
       Start Your Journey Here   </p>{" "}
       <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-10">
                 {
                     college.map(card => <AdmissonCard
                         key={card._id}
                         card={card}
                         isButtonDisabled={areButtonsDisabled}
            onButtonClick={handleButtonClick}
                     ></AdmissonCard>)
                 }
             </div>
     </div>)
}
export default Admission;