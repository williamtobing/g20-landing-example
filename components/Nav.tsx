const Nav = () => {
  return (
    <nav className="w-full fixed z-50">
      <div className="flex justify-between max-w-screen-xl mx-auto px-4">
        <div className="my-4 text-white">
          <p className=" text-2xl font-bold">G20</p>
          <p className="text-xs">INDONESIA</p>
          <p className="text-xs">2022</p>
        </div>
        <ul className="flex items-center text-white text-center">
          <li className="ml-6">
            <p className="tracking-widest border-b-2 cursor-pointer">
              PLACE OF INTEREST
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-white duration-300 cursor-pointer">
              CULINARY
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-white duration-300 cursor-pointer">
              ART &amp; CULTURE
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-white duration-300 cursor-pointer">
              CRAFT
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-white duration-300 cursor-pointer">
              G20 OFFICIAL MERCHANDISE
            </p>
          </li>
          <li className="ml-6">
            <p className="tracking-widest border-b-2 border-transparent hover:border-white duration-300 cursor-pointer">
              CONVENIENCE
            </p>
          </li>
          <li className="ml-6 border border-white hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer duration-300">
            <p className="tracking-widest">ENGLISH</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
