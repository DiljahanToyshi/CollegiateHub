import React from 'react'

const AdmitCollegeDetails = ({booking}) => {
  console.log(booking)
  const { address, college, contactNumber, email, image, name } = booking;


  return (
  <>
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
          <div className=' p-8 bg-white  lg:w-1/2 text-start md:mt-28'>
            <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
              {name}
            </h5>
            <p className=' text-gray-900 text-2xl font-medium'> {college}</p>

            <p className=' items-center font-extrabold text-gray-600 '>Address: {address}</p>
            <p className='items-center font-extrabold text-gray-600 '>
                Email : {email}
              </p>
            <p className='items-center font-extrabold text-gray-600  '>Contact Number: {contactNumber}</p>
            
           
          </div>
        </div>

      </div>  </>
  )
}

export default AdmitCollegeDetails