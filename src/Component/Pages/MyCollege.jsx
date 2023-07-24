import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AdmitCollegeDetails from "../Card/AdmitCollegeDetails";

const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/enroll?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                 console.log(data)
                    setBookings(data)
                
            })
    }, []);


   

    return (
        <div>

<p className="my-4 md:mt-8 animate-text bg-gradient-to-r from-indigo-500 via-blue-900 to-blue-500 bg-clip-text text-blue-900 sm:text-xs md:text-2xl font-semibold pt-3 text-2xl w-full lg:leading-tight md:text-center lg:ml-48 lg:text-6xl lg:max-w-3xl ">
      Your Dream College   </p>{" "}            <div className="overflow-x-auto w-full">
               
                    {
                            bookings.map(booking => <AdmitCollegeDetails
                                key={booking._id}
                                booking={booking}
                            ></AdmitCollegeDetails>)
                        }
                   
            </div>
        </div>
    );
};

export default MyCollege;