type sliderProps = {
  name: string;
  imgUrl: string;
};

const SliderItem = ({ name, imgUrl }: sliderProps) => {
  return (
    <>
      <div className="relative mt-8 mr-4">
        <img
          src={imgUrl}
          alt="city_img"
          className="rounded-md w-96 h-96 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded px-2 py-1">
          <p className="text-black font-bold">{name}</p>
        </div>
      </div>
    </>
  );
};

export default SliderItem;
