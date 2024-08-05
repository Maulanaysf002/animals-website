const Navbar = ({ title }) => {
  return (
    <div className="flex justify-center bg-gray-200 w-full mt-4 p-4">
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
};

export default Navbar;
