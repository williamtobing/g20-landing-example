import { ArrowRightIcon } from "@heroicons/react/solid";

const Description = () => {
  return (
    <>
      <div className="text-white h-full flex flex-col justify-center w-5/12">
        <p className="tracking-widest font-bold text-xl mb-12">
          P L A C E &nbsp; O F &nbsp; I N T E R E S T
        </p>
        <h1 className="text font-bold text-5xl mb-8">
          <span className="mr-3">Y</span>
          <span className="mr-3">O</span>
          <span className="mr-3">G</span>
          <span className="mr-3">Y</span>
          <span className="mr-3">A</span>
          <span className="mr-3">K</span>
          <span className="mr-3">A</span>
          <span className="mr-3">R</span>
          <span className="mr-3">T</span>
          <span className="mr-3">A</span>
        </h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          itaque. Sint vitae eum asperiores praesentium debitis quia
          voluptatibus veritatis impedit incidunt, fuga quam reprehenderit
          exercitationem dolorem tenetur cupiditate sapiente illo. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="">
          <button className="flex items-center bg-red-700 hover:bg-red-800 duration-300 px-4 py-2 rounded">
            <span className="font-bold text-lg tracking-widest mb-1 mr-2">
              EXPLORE
            </span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Description;
