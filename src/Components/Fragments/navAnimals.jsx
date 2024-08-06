const NavAnimal = ({ datas }) => {
  const categories = Array.from(new Set(datas.map((data) => data.category)));
  return (
    <div className="mt-5 flex gap-3">
      {categories.map((category) => (
        <button className="bg-white px-5 rounded-full" key={category}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default NavAnimal;
