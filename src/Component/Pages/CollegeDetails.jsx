import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const [details, setdetails] = useState({});
    const { id } = useParams();
    
  
    useEffect(() => {
      fetch(`https://collegiate-hub-server.vercel.app/college/${id}`)
        .then((res) => res.json())
        .then((data) => setdetails(data));
    }, []);
    const {
        collegeName,
        image,
        admissionDates,
        events,
        researchHistory,
        sports,
        rating,
        numberOfResearch,
        admissionProcess,
      } = details;
      
    return (
        <div className='my-container'>
        {/* Container Box */}
        <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
          {/* Image Container */}
          <div className=' lg:w-1/2 h-full pt-8 lg:pt-16 p-3'>
            <img
              src={image}
              alt='book cover'
              className='object-cover w-full  lg:h-full'
            />
          </div>
          {/* Details Container */}
          <div className=' p-8 bg-white  lg:w-1/2 text-start'>
            <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
              {collegeName}
            </h5>
            <p className=' text-gray-900'>Admission Process: {admissionProcess}</p>
            <p className=' text-gray-900'>Admission Date: {admissionDates}</p>
            <p className='items-center font-extrabold text-gray-600 '>
                Research Number: {numberOfResearch}
              </p>
            <p className='mb-5 text-gray-900'>Rating: {rating}</p>
              <div className='flex justify-between'>
              <div>
                  <h1 className="text-xl font-bold">Our Events</h1>
                  {events?.map((value) => (
                    <li className="text-start" >
                      {value ? value: "Not Found"}
                    </li >
                  ))}
                </div>          
                <div>
                  <h1 className="text-xl font-bold">Sports</h1>
                  {sports?.map((value) => (
                    <li className="text-start" >
                      {value ? value: "Not Found"}
                    </li >
                  ))}
                </div>   
            </div>
           
          </div>
        </div>

      </div>
    );
};

export default CollegeDetails;