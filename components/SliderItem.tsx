type sliderProps = {
  name: string;
  imgUrl: string;
};

const SliderItem = ({ name, imgUrl }: sliderProps) => {
  return (
    <>
      <img
        src={imgUrl}
        alt="bali"
        className="rounded-md w-80 h-96 object-cover mt-8 mr-4"
      />
      {/* <div className="absolute bottom-4 left-4 bg-white rounded px-2 py-1">
        <p className="text-black font-bold">{name}</p>
      </div> */}
    </>
  );
};

export default SliderItem;
