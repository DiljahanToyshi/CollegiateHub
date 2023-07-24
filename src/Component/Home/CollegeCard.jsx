import CollegesCard from '../Card/CollegesCard';
import useData from '../Pages/hooks/useData';
const CollegeCard = () => {
  const [college] = useData();
  return (
    <div>
      <p className="my-4 animate-text bg-gradient-to-r from-indigo-500 via-blue-900 to-blue-500 bg-clip-text text-blue-900 sm:text-xs md:text-2xl font-semibold md:mt-5 pt-3 text-2xl w-full lg:leading-tight md:text-center lg:ml-48 lg:text-6xl lg:max-w-3xl ">
      Your Gateway to Higher Education     </p>{" "}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    college.slice(0,3).map(card => <CollegesCard
                        key={card._id}
                        card={card}
                    ></CollegesCard>)
                }
            </div>
    </div>
  );
};

export default CollegeCard;