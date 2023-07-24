import img1 from "../../assets/home.jpg";

const Banner = () => {
  return (
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src={img1}
        className="w-full rounded-xl  inset-0 bg-gradient-to-r from-indigo-900 to-blue-900 opacity-70"
      />
      <div className="rounded-xl sm:flex-col md:flex items-center justify-center h-full left-0 top-0 absolute ">
        <div className="text-white md:space-y-7 text-center relative z-10 md:ml-32 md:pl-10 lg:leading-tight ">
          <h1 className="animate-text bg-gradient-to-r from-indigo-500 via-blue-900 to-blue-500 bg-clip-text text-transparent sm:text-xs md:text-2xl font-black pt-3">
            Best Platform For Proper Education
          </h1>
          <p className="sm:px-8 text-2xl lg:text-6xl lg:max-w-3xl font-semibold">
            Welcome to Collegiate Hub
          </p>{" "}
          <div>
            <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-blue-900 hover:bg-blue-900 bg-blue-100 hover:text-white">
              Our Lectures
            </button>
            <button className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2 hover:bg-blue-100 bg-blue-900 hover:text-blue-900">
              About Us
            </button>
          </div>
          {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
">
 */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
