import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
 <p className="my-4 md:mt-8 animate-text bg-gradient-to-r from-indigo-500 via-blue-900 to-blue-500 bg-clip-text text-blue-900 sm:text-xs md:text-2xl font-semibold pt-3 text-2xl w-full lg:leading-tight md:text-center lg:ml-48 lg:text-6xl lg:max-w-3xl ">
      Hear From Our Student    </p>{" "}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center md:mx-24 sm:my-10 md:my-16 ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8 ">{review.details}</p>
                            <h3 className="text-2xl font-medium text-blue-950">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;