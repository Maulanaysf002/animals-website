const Navbar = ({ title, children }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-600 w-full mt-4 p-4 drop-shadow">
      <h1 className="text-4xl text-white">{title}</h1>
      {children}
    </div>
  );
};

export default Navbar;
