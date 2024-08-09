const PageTitle = ({ title }) => {
  return (
    <div className="bg-white min-h-14 flex justify-center items-center p-3 sm:p-5">
      <h2 className="text-xl sm:text-2xl md:text-3xl">{title}</h2>
    </div>
  );
};

export default PageTitle;
