import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">About College Booking App</h2>
      <p className="text-lg">
        Welcome to the College Booking App, your ultimate destination for exploring and applying to a wide range of colleges for your higher education journey. Our platform aims to simplify the college admission process and provide valuable insights into different educational institutions.
      </p>
      <p className="text-lg mt-4">
        Key Features:
      </p>
      <ul className="list-disc pl-6 mt-4 text-lg">
        <li>Browse Colleges: Discover various colleges with detailed information about admission dates, events, research history, and sports facilities.</li>
        <li>Apply Easily: Apply to your preferred colleges with just a few clicks and kickstart your admission process.</li>
        <li>Explore Details: View college images, admission process, events details, research works, and sports categories in a comprehensive manner.</li>
        <li>Graduate Gallery: Experience college life through captivating graduate group pictures shared by colleges.</li>
        <li>Research Papers: Access recommended research papers contributed by college students.</li>
        <li>User Reviews: Read and contribute authentic reviews to get insights about specific colleges.</li>
      </ul>
      <p className="text-lg mt-4">
        Your privacy and security are of utmost importance to us. Our app provides multiple authentication options, including email/password, Google sign-in, and social media account integration, ensuring a safe experience.
      </p>
      <p className="text-lg mt-4">
        Get ready to embark on a seamless and exciting college exploration journey with the College Booking App!
      </p>
    </div>
  );
};

export default About;
