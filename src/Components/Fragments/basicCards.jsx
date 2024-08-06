const BasicCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="bg-white p-5 flex flex-col rounded-lg">
        <p className="mt-3 text-2xl font-bold text-center">Kucing persia</p>
        <img src="images/Kucing-Persia.jpg" className="w-full h-48 object-cover mt-3"></img>
        <a className="bg-blue-600 text-white text-center mt-3 p-1 rounded" href="/">
          Lihat Detail
        </a>
      </div>
    </div>
  );
};

export default BasicCards;
